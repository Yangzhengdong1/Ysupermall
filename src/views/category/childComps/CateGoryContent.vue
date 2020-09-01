<!-- 分类页主体 -->
<template>
  <div class="cate-content">
      <a v-for="item in subcategories.list" :key="item.acm" class="item" :href="item.link">
        <img :src="item.image" alt="" @load="contentImageLoad">
        <div class="item-title">{{item.title}}</div>
      </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    subcategories: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    //待优化
    contentImageLoad() {
         this.$emit('contentImageLoad')
      }
    }
}
</script>

<style  scoped>
  .item {
    text-align: center;
    width: 85px;
    padding: 10px;
    display: inline-block;
    font-size: 13px;
  }
  .item img {
    width: 60px;
    margin-bottom: 5px;
  }
</style>
