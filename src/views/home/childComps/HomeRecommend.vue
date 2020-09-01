<!-- 十点抢卷 -->
<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
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
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style  scoped>
  .recommend {
    display: flex;
    width: 100%;
    padding: 10px 0 20px;
    border-bottom: 10px solid rgb(233 226 226 / .5);
    text-align: center;
    font-size: 15px;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item a {
    color: var(--color-text);
    text-decoration: none;
  }
  .recommend-item img {
    width: 68px;
    height: 68px;
    margin-bottom: 5px;
  }
</style>
