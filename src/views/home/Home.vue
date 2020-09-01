<!--  -->
<template>
  <div id="home">
   <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
   <tab-control :title="['流行','新款','精选']" 
                @tabClick="tabClick" 
                ref="tabControl1" 
                class="tab-control"
                v-show="isTabFixed"/>

   <scroll class="content" 
           ref="scroll" 
           :probe-type="3" 
           :pull-up-load="true" 
           @scroll="contentScroll"
           @pullingUp="loadMore">
    <home-swiper :banners="banners" @SwiperLoad="SwiperLoad"/>
   <home-recommend :recommends="recommends"/>
   <feature-view/>
   <tab-control :title="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"/>
   <goods-list :goodsList="goods[currentType].list"/>
   </scroll>
   <back-top class="back-top" @click.native="backTop" v-show="isShowBackTop"/>

  </div>
</template>

<script>

//公共组件
import NavBar from '../../components/common/navbar/NavBar'
import TabControl from '../../components/content/tabControl/TabControl'
import GoodsList from '../../components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll'

//子组件
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import FeatureView from './childComps/FeatureView'

//网络请求
import {getHomeMultidata, getHomeGoods} from '../../network/home'

//功能函数
import {debounce} from '../../common/utils'
import {itemListenerMixin, backTopMixin} from '../../common/mixin'

export default {
  data () {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop',
      offsetTop: 0,  //tabControl组件 距离顶部的高度
      isTabFixed: false,
      saveY: 0,
    }
  },

  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },

  mixins: [itemListenerMixin, backTopMixin],

  created() {
    //1.请求多个数据
    this.getHomeMultidata()
    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },

  activated() {
    //进入当前组件时跳到离开时的位置
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },

  deactivated() {
    //1.离开当前组件记录离开时的位置
    this.saveY = this.$refs.scroll.scroll.y

    //2.取消全局事件的监听
    this.$bus.$off('itemImageLoad', this.itemImgListener )
  },

  methods: {
    /**
     * 事件监听相关方法
     */

    //1.监听流行、新款、精选的点击
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },

    //2.监听滚动
    contentScroll(position) {
       //1.判断BackTop组件的显示与否
      this.isShowBackTop = (-position.y) > 1000
      //2.决定tabControl组件是否吸顶
      this.isTabFixed = (-position.y) > this.offsetTop
    },

    //3.上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType)
    },

    //4.监听轮播图加载完成
    SwiperLoad() {
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop
    },

    /**
     * 网络请求相关的方法
     * 
    */
    getHomeMultidata() { 
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list   //轮播图
        this.recommends = res.data.recommend.list  //十点抢卷
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style  scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: #E86A95;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    

  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>
