<!--  -->
<template>
     <div id="tab-bar">
     <slot></slot>
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
 #tab-bar {
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: -1px;
    z-index: 99;

    box-shadow: 0 -6px 5px rgba(100, 100, 100,.2);
  }

  
</style>
