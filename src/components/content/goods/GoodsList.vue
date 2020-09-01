<!--  -->
<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goodsList" :key="item.acm" :goodsListItem="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  data () {
    return {
    }
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style  scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
