<!--  -->
<template>
  <div class="check-button" :class="{checked:isChecked}">
    <img src="../../../assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style  scoped>
  .check-button {
    border-radius: 50%;
    border: 2px solid #aaaaaa;
    width: 20px;
    height: 20px;
  }
  .check-button img {
    width: 100%;
    height: 100%;
  }
  .checked {
    background-color:red;
    border: red;
  }
</style>
