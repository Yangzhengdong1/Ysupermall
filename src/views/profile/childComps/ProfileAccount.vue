<!--  -->
<template>
  <div class="account">
    <div class="balance item">
      <div class="num">
        <span>0.00</span>元
     </div>
     <div class="text">我的余额</div>
    </div>
    <div class="discount item">
      <div class="num">
        <span>0</span>个
      </div>
      <div class="text">我的优惠</div>
    </div>
    <div class="integral item">
      <div class="num">
        <span>0</span>分
      </div>
      <div class="text">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
  .account {
    display: flex;
  }
  .item {
    width: 100%;
    text-align: center;
    padding: 10px;
    border-right: 3px solid rgb(163 159 159 / 0.2);
  }
  .item:last-child {
    border: 0;
  }
  .num {
    margin: 15px 0 8px 0;
  }
  .num span {
    color: tomato;
    font-size: 25px;
    font-weight: 700;
  }
  .text {
    font-size: 14px;
  }
</style>
