<!--我的界面  -->
<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="center">supermall</div>
    </nav-bar>
    <profile-user/>
    <profile-account/>
    <view-list :goods="info"/>
    <view-list :goods="bottomInfo"/>
  </div>
</template>

<script>

import NavBar from '../../components/common/navbar/NavBar'

import ProfileUser from './childComps/ProfileUser'
import ProfileAccount from './childComps/ProfileAccount'
import viewList from './childComps/viewList'

export default {
  data () {
    return {
      info: [
        {img: require('../../assets/img/profile/信息.png'), text: '我的消息'},
        {img: require('../../assets/img/profile/商 城.png'), text: '我的商城'},
        {img: require('../../assets/img/profile/会 员.png'), text: '我的会员'},
      ],
      bottomInfo: [
        {img: require('../../assets/img/profile/购物车.png'), text: '我的购物车'},
        {img: require('../../assets/img/profile/美丽说icon.png'), text: '下载购物APP'},
      ]
    }
  },
  components: {
    NavBar,
    ProfileUser,
    ProfileAccount,
    viewList
  }
}
</script>

<style  scoped>
  .profile-nav {
    background-color: #E86A95;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }
</style>
