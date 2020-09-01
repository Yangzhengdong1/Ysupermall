<!-- 首页轮播图 -->
<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="SwiperLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index'
export default {
  data () {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    SwiperLoad() {
      //如果发送了一次事件，就不用再发送事件
      if(!this.isLoad) {
        this.$emit('SwiperLoad')
        this.isLoad = true
      }

    }
  }
}
</script>

<style  scoped>

</style>
