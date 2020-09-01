<!-- 详情页导航栏 -->
<template>
  <div class="">
   <nav-bar>
     <div slot="left" class="back" @click="backClick">
       <img src="../../../assets/img/common/back.svg" alt="">
     </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" 
             :key="index" class="title-item" 
             @click="titleClick(index)"
             :class="{active: currentIndex === index}">
             {{item}}
        </div>
      </div>
   </nav-bar>
  </div>
</template>

<script>

import NavBar from '../../../components/common/navbar/NavBar'

export default {
  data () {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style  scoped>

  .title {
    display: flex;
    font-size: 14px;
    color: black;
  }

  .title-item {
    flex: 1;
  }
  .active {
    color: pink;
  }
  .back img {
    margin-top: 10px;
  }
</style>
