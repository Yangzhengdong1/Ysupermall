import {request} from './request'

//1.详情页数据
export function  getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

//2.详情页推荐数据
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

//1.定义一个类，整合商品基本信息
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title   
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price    //现价
    this.oldPrice = itemInfo.oldPrice  //原价
    this.discount = itemInfo.discountDesc  //折扣
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

//2.整合商家信息
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

//3.整合商品参数信息
export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}