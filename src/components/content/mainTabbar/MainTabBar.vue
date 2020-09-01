<template>
     <tab-bar>         <!--TabBar组件 -->
     <tab-bar-item link="/home">   <!--TabBarItem组件 -->
       <img src="../../../assets/img/tabbar/home.svg" alt="" slot="item-img">
       <img src="../../../assets/img/tabbar/home_active.svg" alt="" slot="item-img_active">
       <div slot="item-text" >首页</div>
     </tab-bar-item>
     <tab-bar-item link="/category">
       <img src="../../../assets/img/tabbar/category.svg" alt="" slot="item-img">
       <img src="../../../assets/img/tabbar/category_active.svg" alt="" slot="item-img_active">
       <div slot="item-text">分类</div>
     </tab-bar-item>
     <tab-bar-item link="/cart">
       <img src="../../../assets/img/tabbar/shopcart.svg" alt="" slot="item-img">
       <img src="../../../assets/img/tabbar/shopcart_active.svg" alt="" slot="item-img_active">
       <div slot="item-text">购物车</div>
     </tab-bar-item>
     <tab-bar-item link="/profile">
       <img src="../../../assets/img/tabbar/profile.svg" alt="" slot="item-img">
       <img src="../../../assets/img/tabbar/profile_active.svg" alt="" slot="item-img_active">
       <div slot="item-text">我的</div>
     </tab-bar-item>
   </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar.vue'
  import TabBarItem from '../../common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
