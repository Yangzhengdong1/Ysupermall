import {debounce} from './utils'
import BackTop from '../components/content/backTop/BackTop.vue'


//1.GoodsLIstItem组件中的图片监听混入
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,  //对Better scrollrefresh()函数的保存
    }
  },
  mounted() {
        //1.防抖
        const refresh = debounce(this.$refs.scroll.refresh, 50)
    
        //2.对监听事件进行保存
        this.itemImgListener = () => {
            refresh()
        }
        //3.监听item中图片加载完成
        this.$bus.$on('itemImageLoad', this.itemImgListener)
        // console.log('我是混入');
  }
}

//2.回到顶部的混入
export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    //监听回到顶部
    backTop(){
      //通过this.refs拿到scroll组件，访问组件中的scroll属性中的scrollTo方法
      this.$refs.scroll.scroll.scrollTo(0,0, 500)
    },
  }
}