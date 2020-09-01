<!-- BetterScroll封装 -->
<template>
<div class="wrapper" ref="wrapper">
  <div class="contentr">
    <slot></slot>
  </div>
</div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
  data () {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    })

    //1.监听滚动
    this.scroll.on('scroll',(position) => {
      this.$emit('scroll', position)
    })

    //2.监听上拉
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style  scoped>

</style>
