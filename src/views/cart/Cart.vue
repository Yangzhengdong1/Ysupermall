<!--购物车界面  -->
<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list/>
    <cart-bottom-bar/>
  </div>
</template>

<script>

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

//公共组件
import NavBar from '../../components/common/navbar/NavBar'

//mapGetters() 辅助函数
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters({
      length: 'cartLength'
    })
  }
}
</script>

<style  scoped>
  #cart {
    height: 100vh;
  }
  .cart-nav {
    position: relative;
    top: 0;
    background-color: #E86A95;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    z-index: 99;
  }
</style>
