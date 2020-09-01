import Toast from './Toast.vue'
const obj = {}

obj.install = function(Vue) {
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  //2.通过new的方式，根据组件构造器，创建出来一个组件对象
  const toast = new toastContrustor()

  //3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  //4.toast.$el对应的就是div，将div添加到body上
  document.body.appendChild(toast.$el)
  
  //将Toast组件对象添加到Vue的原型上
  Vue.prototype.$toast = toast
}

export default obj