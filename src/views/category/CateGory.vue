<!-- 分类页 -->
<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <side :data="categoryData" @Selected="Selected" />

      <scroll class="tab-content" ref="scroll">
        <cate-gory-content :subcategories="showSubcategory" @contentImageLoad="contentImageLoad" />
        <tab-control :title="['综合','新品','销量']" @tabClick="tabClick" />
        <goods-list :goodsList="showCategoryDetail" />
      </scroll>
    </div>
  </div>
</template>

<script>
//公共组件
import NavBar from "../../components/common/navbar/NavBar";
import Scroll from "../../components/common/scroll/Scroll";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";

//子组件
import Side from "./childComps/Side";
import CateGoryContent from "./childComps/CateGoryContent";

//网络请求
import {
  getCateGory,
  getSubcategory,
  getCategoryDetail,
} from "../../network/categroy";

export default {
  data() {
    return {
      categoryData: [], //侧边分类
      childData: {}, //侧边分类子类
      currentIndex: -1,
      currentType: "pop",
    };
  },
  components: {
    NavBar,
    Side,
    Scroll,
    CateGoryContent,
    TabControl,
    GoodsList,
  },

  computed: {
    showSubcategory() {
      if (this.currentIndex == -1) return {};
      return this.childData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.childData[this.currentIndex].categoryDetail[this.currentType];
    }
  },

  created() {
    //获取侧边栏数据
    this.getCateGory();
  },

  activated() {
    //监听GoodsListItem中的图片加载完成
    this.$bus.$on("itemImageLoad", () => {
      this.$refs.scroll.refresh();
    });
  },

  deactivated() {
    //取消全局事件的监听
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },

  methods: {
    /**
     * 网络请求相关方法
     *
     */
    //1.获取侧边内容
    getCateGory() {
      getCateGory().then((res) => {
        // console.log(res);
        //1.获取侧边分类数据
        this.categoryData = res.data.category.list;

        //2.初始化子类数据
        for (let i = 0; i < this.categoryData.length; i++) {
          this.childData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }

        //3.请求第一个子类数据
        this.getSubcategory(0);
      });
    },

    //2.获取主要内容
    getSubcategory(index) {
      this.currentIndex = index;
      const maiKey = this.categoryData[index].maitKey;

      getSubcategory(maiKey).then((res) => {
        this.childData[index].subcategories = res.data;
        this.childData = { ...this.childData };
        // console.log(this.childData[0].subcategories);
        // console.log(res.data);
        this.getCategoryDetail("pop");
        this.getCategoryDetail("new");
        this.getCategoryDetail("sell");
      });
    },

    //3.获取GoodsListItem中的数据
    getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categoryData[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then((res) => {
        // 3.将获取的数据保存下来
        this.childData[this.currentIndex].categoryDetail[type] = res;
        this.childData = { ...this.childData };
      });
    },

    /**
     * 事件相关方法
     *
     */
    //1.将侧边点击传入主要内容
    Selected(index) {
      this.getSubcategory(index);
    },

    //2.监听分类图片加载完成
    contentImageLoad() {
      this.$refs.scroll.refresh();
    },

    //3.监听TabControl的点击
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    }
  }

};
</script>

<style  scoped>
#category {
  height: 100vh;
}
.category-nav {
  background-color: #E86A95;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  position: relative;
  z-index: 9;
}

.content {
  height: calc(100% - 44px - 49px);
  display: flex;
}
.tab-content {
  width: 70%;
  overflow: hidden;
}
</style>
