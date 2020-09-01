<!-- 购物车底部工具栏 -->
<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="button" :isChecked="isSelectAll" @click.native="checkClick"/>
      <span ref="all">全选</span>
    </div>
    
    <div class="price">
      合计:{{totalPrice}}
    </div>

    <div class="calculate" @click="calcClick">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton'
export default {
  data () {
    return {
    }
  },
  components: {
    CheckButton
  },
  computed: {
    //1.计算总价格
    totalPrice() {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    //2.计算当前有多少件商品被选中
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked ).length
    },
    //3.判断全选按钮的状态
    isSelectAll() {
      //如果在没有商品被添加进购物车时，全选按钮不选中
      if(this.$store.state.cartList.length === 0) return false

      //find()函数查找到数组中有一个的checked为不选中状态，就会返回该元素，说明有一个商品未被选中
      //find()函数查找到数组中没有一个的checked为不选中状态，就会返回undefined，说明全部商品都被选中
      //对返回的结果取反：find()返回元素，isSelectAll为false find()返回undefined，isSelectAll为true 
      return !this.$store.state.cartList.find(item => !item.checked)
    }
  },
  methods: {
    //点击全选按钮，商品按钮状态跟着改变
    checkClick() {
      if(this.isSelectAll) {
        this.$store.state.cartList.forEach(item => item.checked = false);
        // this.$refs.all.innerHTML = '全选'
      } else {
        this.$store.state.cartList.forEach(item => item.checked = true)
        // this.$refs.all.innerHTML = '全不选'
      }
    },
    calcClick() {
      if(this.checkLength === 0) {
        this.$toast.show('请选择要购买的商品', 1500)
      }
    }
  }
}
</script>

<style  scoped>
  .bottom-bar {
    position: relative;
    z-index: 999;
    display: flex;
    height: 40px;
    background-color: #eee;
  }
  .check-content {
    display: flex;
    line-height: 40px;
    align-items: center;
    margin-left: 5px;
    color: black;
    font-size: 18px;
  }
  .button {
    line-height: 20px;
    margin-right: 5px;
  }
  .price {
    margin-left: 36px;
    line-height: 36px;
    font-size: 15px;
  }
  .calculate {
    position: absolute;
    right: 0;
    background-color: red;
    line-height: 40px;
    padding: 0px 20px 0 20px;
    color: #fff;
  }
</style>
