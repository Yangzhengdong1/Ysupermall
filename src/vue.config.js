module.exports = {
  //1.配置别名
  chainWebpack: config => {
    config.resolve.alias
    .set('components','@/components')
    .set('assets','@/assets')
    .set('network','@/network')
    .set('views','@/views')
    .set('store', '@/store')
    //set第一个参数：设置的别名，第二个参数：设置的路径
　　　　
},
}