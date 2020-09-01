<!--  -->
<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="iamgeLoad">
    <div class="goods-info">
      <p>{{goodsListItem.title}}</p>
      <span class="price">{{goodsListItem.price}}</span>
      <span class="collect">{{goodsListItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsListItem.image || this.goodsListItem.img || this.goodsListItem.show.img 
    }
  },
  methods: {
    iamgeLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      if(this.goodsListItem.iid == undefined) return
      //跳转到详情页，用push有回退
      this.$router.push('/detail/' + this.goodsListItem.iid)
    }
  }
}
</script>

<style  scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: #f96d86f5;
    margin-right: 25px;
  }
  .goods-info .collect {
    position: relative;
  }
  .collect::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -15px;
    width: 14px;
    height: 14px;
    background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
  }
</style>
