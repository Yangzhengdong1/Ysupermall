<!--  -->
<template>
     <div class="tab-bar-item" @click="itemClick">
       <!--在插槽的外面最好有一个div来进行各种操作，而不是在插槽中直接进行各种操作 ，在插槽中直接操作可能会被替换掉-->
       <!-- 当处于活跃状态时显示 -->
       <div v-if="isActive"><slot name="item-img_active"></slot></div>
       <div v-else><slot name="item-img"></slot></div>  
       <div :style="activeStyle"><slot name="item-text"></slot></div>
       </div>
</template>

<script>
export default {
  props: {
    link:String,    //接收自身的link 属性值
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      //this.$route.path 拿到的是当前活跃的路由的路径  然后与当前拿到的link的路径做一下对比
      // /home -> item1(/home) = true
      // /home -> item1(/category) = false
      // /home -> item1(/cart) = false
      // /home -> item1(/profile) = false
      return this.$route.path.indexOf(this.link) !== -1
    },
    //封装字体颜色 添加一个activeColor属性 可以在用该组件时动态决定字体的颜色
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link)  //监听每一个tabbaritem 将被点击的item跳转到对应的路由路径中
    }
  }
}
</script>

<style  scoped>

.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
.tab-bar-item img  {
    width: 24px;
    margin-top: 5px;
  }
  
</style>
