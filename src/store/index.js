import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'


//1.安装插件
Vue.use(Vuex)

//2.创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    //mutations唯一的目的就是修改state中的状态
    //mutations中的每个方法尽可能完成的事件比较单一一点

    addCounter(state, payload) {
      payload.count ++
    },
    addToCart(state, payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        //payload 新添加的商品
        //find()方法查找数组中是否有该元素，如果查找到有一个符合就返回该元素，没有返回undefined
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

        //判断oldProduct
        if(oldProduct) {
          // oldProduct.count += 1
          context.commit('addCounter', oldProduct)
          resolve('当前商品数量+1')
        } else {
          payload.count = 1
          // state.cartList.push(payload)
          context.commit('addToCart', payload)
          resolve('添加购物车成功')
        } 
      })
    }
  },
  getters: getters
})

//3.导出store实例
export default store