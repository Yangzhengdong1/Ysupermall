<!-- 商家信息 -->
<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>

    <div class="shop-middle">
    <div class="shop-left">
      <div class="left-item">
        <div class="num">{{shop.sells | sellCountFilter}}</div>
        <div class="text">总销量</div>
      </div>
       <div class="left-item">
        <div class="num">{{shop.goodsCount}}</div>
        <div class="text">全部宝贝</div>
      </div>
    </div>
    <div class="shop-right">
      <table>
        <tr v-for="(item, index) in shop.score" :key="index">
          <td>{{item.name}}</td>
          <td class="score" :class="{high: item.isBetter}">{{item.score}}</td>
          <td class="better" :class="{active:item.isBetter}">{{ item.isBetter? '高' :'低'}}</td>
        </tr>
      </table>
    </div>
    </div>
    <div class="shop-bottom">
      <div class="look">进店逛逛</div>
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
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter: function(value) {
      return value<10000 ? value : (value/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style  scoped>
  .shop-info {
    height: 220px;
    position: relative;
    margin-bottom: 25px;
  }
  .shop-top {
    padding: 25px 10px 25px 10px;
  }
  .shop-top img {
    width: 50px;
    border-radius: 50%;
    border: 2px solid rgb(209 205 205 / 50%);
    vertical-align: middle;
    margin-right: 10px;
  }
  .shop-top span {
    color: black;
    font-weight: 700;
  }
  .shop-middle {
    position: relative;
  }
  .shop-left {
    display: flex;
    text-align: center;
    position: absolute;
    left:20px;
    top: -15px;
    border-right: 2px solid rgb(209 205 205 / 50%);
    padding-right: 5px;
  }
  .left-item {
    padding: 10px;
  }
  .num {
    font-weight: 700;
    color: black;
    font-size: 18px;
    margin-bottom: 5px;
  }
  .text {
    font-size: 14px;
  }
  .shop-right {
    position: absolute;
    right: 20px;
    top: -30px;
  }
  .shop-right td {
    padding: 5px;
  }
  .shop-bottom {
    background-color: #e53f33;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%);
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    padding: 10px 35px;
  }
  .score {
    color: #1ebd1e;
  }
  .better {
    background-color: #1ebd1e;
    color: #fff;
  }
  .high {
    color:pink ;
  }
  .active {
    background-color: #f50e37;
  }
</style>
