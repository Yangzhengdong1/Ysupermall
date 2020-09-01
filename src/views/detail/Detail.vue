<!-- 详情页 -->
<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" >
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailinfo="detailInfo" :flag="flag" @imageLoad="imageLoad"/>
      <detail-param-info ref="param" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goodsList="recommends" class="recommends"/>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTop"/>
    <detail-bottom-bar @addCart="addToCart"/>
  </div>
</template>

<script>
//子组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

//公共组件
import Scroll from '../../components/common/scroll/Scroll'
import GoodsList from '../../components/content/goods/GoodsList'

//功能函数
import {debounce} from '../../common/utils'
//混入
import {itemListenerMixin, backTopMixin} from '../../common/mixin'

//网络请求
import {getDetail,getRecommend, Goods, Shop, GoodsParam} from '../../network/detail'
import { getCateGory } from '../../network/categroy'

export default {
  name: 'Detail',
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      topYs: [],
      currentIndex: 0,
      flag: false
    }
  },
  components : {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll,
    DetailBottomBar
  },

  mixins: [itemListenerMixin, backTopMixin],

  created() {
    //1.拿到参数iid
    this.iid = this.$route.params.iid

    //2.根据iid请求数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.result
      //1.获取顶部轮播图
      this.topImages = data.itemInfo.topImages

      //2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      //3.创建店铺信息
      this.shop = new Shop(data.shopInfo)

      //4.保存商品详情数据
      this.detailInfo = data.detailInfo

      //5.获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      //6.获取评论信息
      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }


      this.flag = true
    })

    //3.请求推荐数据
    getRecommend().then(res => {
      // console.log(res);
      this.recommends = res.data.list
    })
  },

  destroyed() {
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },

  methods: {
    //1.监听商品详细信息的图片加载完成
    imageLoad() {
      this.$refs.scroll.refresh()

      //商品、参数、评论、推荐的offsetTop值
      this.topYs.push(0)
      this.topYs.push(this.$refs.param.$el.offsetTop)
      this.topYs.push(this.$refs.comment.$el.offsetTop)
      this.topYs.push(this.$refs.recommend.$el.offsetTop)
      this.topYs.push(Number.MAX_VALUE)
    },

    //2.点击导航栏滚动到对应内容
    titleClick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.topYs[index], 500)
    },

    //3.监听滚动,滚动到对应位置，显示对应标题
    contentScroll(position) {
      //回到顶部显示与隐藏
      this.isShowBackTop = (-position.y) > 1000

      //1.获取y值
      const positionY = -position.y

      //2.将positionY 与主题中的offsetTop值对比
      
      /*[0, 7938, 9120, 9452]
      //positionY 在 0 和 7938 之间， index = 0
      //positionY 在 =7938 和 9120 之间， index = 1
      //positionY 在 9120 和 9452 之间， index = 2
      //positionY 大于等于 9452 ， index = 3

      方法一：
      let length = this.topYs.length
      for(let i = 0; i< length; i++) {
        if((this.currentIndex !== i) && 
        ((i < length - 1 && positionY >= this.topYs[i] && positionY < this.topYs[i+1]) ||
         (i === length - 1 && positionY >= this.topYs[i]))) {
           this.currentIndex = i
           this.$refs.nav.currentIndex = this.currentIndex
         }
      }*/
      // 方法二：
      let length = this.topYs.length
      for(let i = 0; i<length - 1; i++) {
        if(this.currentIndex !== i && (positionY >= this.topYs[i] && positionY < this.topYs[i+1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }

    },

    //4.监听添加购物车的点击
    addToCart() {
      //1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      //2.将商品添加到购物车
      this.$store.dispatch('addCart', product).then(res =>{
        //3.商品添加成功后的弹框
        this.$toast.show(res, 2000)
      })
    }
  }
}
</script>

<style  scoped>
  #detail {
    position: relative;
    z-index: 100;
    background-color: #fff;
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
  .recommends {
    margin-top: 10px;
  }
</style>
