<!-- 详情页商品展示 -->
<template>
  <div class="goods-info" v-if="flag != false">
    <div class="desc">{{detailinfo.desc}}</div>
    <div class="effect">{{detailinfo.detailImage[0].key}}</div>
    <div class="list">
      <img v-for="(item, index) in detailinfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
      imagesLength: 0
    }
  },
  props: {
    detailinfo: {
      type: Object,
      default() {
        return {}
      }
    },
    flag: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    imageLoad() {
      //等所有的图片加载完了，再进行一次回调，将事件发出
      //  ++this.counter 相当于 this.counter += 1
      if(++this.counter === this.imagesLength) {
        this.$emit('imageLoad')
      }
    }
  },
  //watch：监听属性的改变
  watch: {
    detailinfo() {
      this.imagesLength = this.detailinfo.detailImage[0].list.length
    }
  }
}
</script>

<style  scoped>
  .goods-info {
    padding: 20px 10px;
    border-top: 4px solid rgb(221 215 215 / 50%);
    border-bottom: 4px solid rgb(221 215 215 / 50%);
  }
  .list img {
    width: 100%;
  }
  .effect {
    font-size: 18px;
    font-weight: 600;
    color: black;
    padding: 10px;
  }
  .desc {
    padding: 10px 5px;
    border-bottom: 1px solid;
    border-top: 1px solid;
    font-size: 16px;
    line-height: 1.5;
    text-indent: 2em;
    color: #ea5c75;
  }
</style>
