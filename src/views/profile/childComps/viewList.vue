<!--  -->
<template>
  <div class="list">
    <div class="item" v-for="(item, index) in goods" :key="index">
      <img :src="item.img" alt="">
      <span>{{item.text}}</span>
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
    goods: {
      type: Array,
      default() {
        return {}
      }
    }
  }
}
</script>

<style  scoped>
  .list {
    padding: 10px 20px;
    border-top: 10px solid rgb(210 207 207 / 30%);
  }
  .list .item {
    padding: 10px 0 10px 0;
    border-bottom: 2px solid rgb(243,243,243);
  }
  .item:last-child {
    border: 0;
  }
  .item img {
    width: 20px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .item span {
    font-size: 14px;
    color: black;
  }
</style>
