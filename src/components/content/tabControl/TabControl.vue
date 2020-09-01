<!--  -->
<template>
<!-- 如果该组件只是文字不同，就没必要使用插槽 -->
  <div class="tabcontrol">
    <div class="tabcontrol-item" 
         v-for="(item, index) in title" 
         :key="index" 
         @click="itemClick(index)"
         :class="{active: currentIndex === index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style  scoped>
  .tabcontrol {
    display: flex;
    text-align: center;
    font-weight: 700;
    font-size: 15px;
    background-color: #fff;
    margin-bottom: 10px;
  }
  .tabcontrol-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tabcontrol-item span {
    padding: 5px;
  }
  
  
  .active {
    color: pink;
  }
  .active span {
    border-bottom: 3px solid pink;
  }
</style>
