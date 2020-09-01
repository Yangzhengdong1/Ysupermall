<!-- 详情页侧边 -->
<template>
  <div class="side">
    <scroll class="content">
      <div v-for="(item, index) in data" 
           :key="item.acm" 
           class="side-item"
           :class="{active: index === currentIndex}"
           @click="checkClick(index)">
           {{item.title}}
      </div>
    </scroll>
  </div>
</template>

<script>

import Scroll from '../../../components/common/scroll/Scroll'
export default {
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Scroll
  },
  methods: {
    checkClick(index) {
      this.currentIndex = index
      this.$emit('Selected', index)
    }
  }
}
</script>

<style  scoped>
  .side {
    background-color: #f6f6f6;
    height: 100%;
    width: 110px;
  }
  .content {
    height: 100%;
    background-color: rgb(207 202 202 / 20%);
    overflow: hidden;
  }
  .side-item {
    padding: 20px;
    text-align: center;
    color: black;
  }

  .active {
    border-left: 3px solid #e0415d;
    font-weight: 700;
    color: #ef3d5c;
    background-color: #fff;
  }
</style>
