<!-- 详情页评论 -->
<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-top">
      <div>用户评价</div>
      <div class="more">更多</div>
      <i class="icon"></i>
    </div>
    <!-- 具体内容 -->
    <div class="comment-cont">
      <!-- 用户信息及评论 -->
      <div class="comment-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span class="user-name">{{commentInfo.user.uname}}</span>
      <p>{{commentInfo.content}}</p>        
      </div>
      <!-- 商品样式 -->
      <div class="style">
        <span>{{commentInfo.created | showDate()}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <!-- 评论图片 -->
      <div class="comment-img" v-if="commentInfo.images !== ''">
        <img v-for="(item, index) in commentInfo.images" :src="item" alt="" :key="index">
      </div>
    </div>
    <!-- 商家回复 -->
    <div class="explain" v-if="commentInfo.explain !== ''">
      <p>{{commentInfo.explain}}</p>
    </div>
  </div>
</template>

<script>

import {formatDate} from '../../../common/utils'

export default {
  data () {
    return {
    }
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      //1.将事件戳转成Date对象
      const date = new Date(value*1000)

      //2.将date进行格式化
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style  scoped>
  .comment-info {
    padding: 10px;
    border-top: 4px solid rgb(212 195 195 / 50%);
    border-bottom: 4px solid rgb(212 195 195 / 50%);
    margin-top: 10px;
  }
  .comment-top {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgb(134 128 128 / 30%);
    position: relative;
    color: black;
  }
  .more {
    position: absolute;
    top: 0;
    right: 15px;
    font-size: 18px;
  }
  /* 三角图标 */
  .icon {
    position: absolute;
    top: 14px;
    right: 0;
/* 1.写一个只保留下、右边框的10x10盒子 */
    width: 10px;
    height: 10px;
		border-bottom: 2px solid #9E9E9E;
		border-right: 2px solid #9E9E9E;
/* 2.将他旋转-45度 */
		transform: rotate(-45deg);
  }


  .comment-user img {
    width: 40px;
    border-radius: 50%;
    vertical-align: middle;
    margin: 10px 10px 10px 0;
  }
  .user-name {
    font-size: 18px;
    font-weight: 600;
  }
  .comment-user p {
    font-size: 14px;
    line-height: 18px;
  }


  .style {
    margin: 10px 0 10px 0;
    font-size: 14px;
    color: #928c8c;
  }
  .style span {
    margin-right: 10px;
  }

  .comment-img img {
    width: 80px;
    margin-right: 8px;
  }

  .explain {
    margin: 10px 0 10px 0;
  }
  .explain p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 15px;
  }
</style>
