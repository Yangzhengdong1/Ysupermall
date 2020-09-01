<!-- 详情页商品参数 -->
<template>
  <div class="param-info">
    <table v-for="(tb, index) in paramInfo.sizes" :key="index" class="info-size">
      <tr v-for="(tr, indey) in tb" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table>
      <tr v-for="(item, index) in paramInfo.infos" :key="index">
        <td class="param-info-key">{{item.key}}</td>
        <td class="param-info-value">{{item.value}}</td>
      </tr>
    </table>
    <div v-if="paramInfo.image != ''" class="param-info-image">
      <img :src="paramInfo.image" alt="">
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
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style  scoped>
  .param-info {
    margin-top: 15px;
    font-size: 15px;
    padding: 10px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  .info-size {
    border-bottom: 4px solid rgb(182 177 177 / 0.2);
  }
  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .param-info table tr {
    height: 42px;
  }
  .param-info-key {
    width: 90px;
  }
  .param-info-value{
    color: #e23351;
  }
  .param-info-image img {
    width: 100%;
  }
</style>
