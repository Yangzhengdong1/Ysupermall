<!-- 用户登录 -->
<template>
  <div class="user">
    <div class="user-img">
      <img src="../../../assets/img/profile/user.png" alt="">
    </div>
    <div class="user-text">
      <div class="login">登录/注册</div>
      <div class="phone">
        <img src="../../../assets/img/profile/手机.png" alt="">
        暂无绑定手机号
      </div>
    </div>
    <div class="arrow">
      <img src="../../../assets/img/profile/arrow.png" alt="">
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
  .user {
    display: flex;
    padding: 30px 20px 5px 20px;
    background-color: #E86A95;
  }
  .user-img {
    margin-right: 15px;
  }
  .user-img img {
    width: 70px;
  }
  .user-text {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    position: relative;
    top: 10px
  }
  .phone {
    position: relative;
    right: 3px;
  }
  .phone img {
    width: 20px;
    vertical-align: middle;
  } 
  .arrow img {
    width: 30px;
    position: relative;
    left: 80px;
    top: 10px;
  }
</style>

