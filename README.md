# supermall

### 这是一个小商城项目，主要实现了首页、详情页、加入购物车以及一个静态的我的页面
### 感谢coderwhy老师，最新接口添加老师的VX获取：coderwhy003

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



##  目录结构划分
   ### assets文件夹：存放静态资源
   ### view文件夹： 存放视图
   ### components： 存放公共组件
       /common文件夹：不仅仅在当前项目使用，完全公共的组件
       /content文件夹：当前项目使用的公共组件
   ### common： 存放公共的js文件
   ### router： 路由相关文件
   ### store： vuex相关文件
   ### network 网络相关文件夹
       /request：对axios框架的封装
       /home: 首页网络请求，对request的中转
   

