<!-- 顶部导航栏 -->
<template>
  <div class="nav-bar">
    <!-- 一般我们不要直接对插槽布局，所以用一个div包裹插槽，对div进行布局 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
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
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .3);
  }
  .left,
  .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>
