/**
 * Created by Administrator on 2018/1/16.
 */
import axios from 'axios';
import fetch from '../common/fetch/fetch';
import {exportURL} from '../common/exportUrl/index';

// 请求首页数据
export function getRecomendData(params) {
  return fetch({
    url: exportURL.recommendUrl,
    method: 'post',
    params
  })
}

// 请求首页公告
export function getNoticeData(params) {
  return fetch({
    url: exportURL.noticeUrl,
    method: 'post',
    params
  })
}

// 请求首页动态
export function getNewsData(params) {
  return fetch({
    url: exportURL.newsUrl,
    method: 'post',
    params
  })
}

// 请求首页公告详情
export function getNoticeDetailData(params) {
  return fetch({
    url: exportURL.noticeDetailUrl,
    method: 'post',
    params
  })
}

// 请求首页动态详情
export function getNewsDetailData(params) {
  return fetch({
    url: exportURL.newsDetailUrl,
    method: 'post',
    params
  })
}

//请求首页积分龙虎榜
export function getRankData(params) {
  return fetch({
    url: exportURL.rankUrl,
    method: 'post',
    params
  })
}

// 请求注册页接口
export function getRegisterData(params) {
  return fetch({
    url: exportURL.registerUrl,
    method: 'post',
    params
  })
}

//请求登录验证码
export function getLoginCodeData(params) {
  return fetch({
    url: exportURL.loginCodeUrl,
    method: 'post',
    params
  })
}

//验证码登录
export function getLoginData(params) {
  return fetch({
    url: exportURL.loginUrl,
    method: 'post',
    params
  })
}

//密码登录
export function getLoginByPwdData(params) {
  return fetch({
    url: exportURL.loginByPwd,
    method: 'post',
    params
  })
}

//忘记登录密码
export function getSetPwd(params) {
  return fetch({
    url: exportURL.forgetPwdUrl,
    method: 'post',
    params
  })
}

//提交修改后的登录密码
export function submitPwd(params) {
  return fetch({
    url: exportURL.submitPwdUrl,
    method: 'post',
    params
  })
}

// 设置登录密码
export function setPwd(params) {
  return fetch({
    url: exportURL.setPwdUrl,
    method: 'post',
    params
  })
}

/*
 *==投资板块接口==
 */

//定期稳赚列表接口
export function getWZlist(params) {
  return fetch({
    url: exportURL.wzUrl,
    method: 'post',
    params
  })
}

// 稳赚详情页面
export function getWZdetail(params) {
  return fetch({
    url: exportURL.wzDetailUrl,
    method: 'post',
    params
  })
}


// 稳赚投资页
export function getWZinvest(params) {
  return fetch({
    url: exportURL.wzInvestUrl,
    method: 'post',
    params
  })
}
// 稳赚使用红包
export function getHongbao(params) {
  return fetch({
    url: exportURL.wzHongBaoUrl,
    method: 'post',
    params
  })
}

// 创建稳赚订单

export function getCreateOrder(params) {
  return fetch({
    url: exportURL.createOrderUrl,
    method: 'post',
    params
  })
}

// 取消创建稳赚订单
export function getCancelOrder(params) {
  return fetch({
    url: exportURL.cancelOrderUrl,
    method: 'post',
    params
  })
}

// 获取稳赚订单验证码 getOrderCodeUrl
export function getOrderCode(params) {
  return fetch({
    url: exportURL.getOrderCodeUrl,
    method: 'post',
    params
  })
}

// 提交稳赚订单 resultOrderUrl
export function submitOrder(params) {
  return fetch({
    url: exportURL.submitOrderUrl,
    method: 'post',
    params
  })
}

// 稳赚订单转入成功显示页面
export function resultOrder(params) {
  return fetch({
    url: exportURL.resultOrderUrl,
    method: 'post',
    params
  })
}

// 稳赚详情页面
export function detailOrder(params) {
  return fetch({
    url: exportURL.listOrderUrl,
    method: 'post',
    params
  })
}

// 取消风险评测接口 cancelRiskTestUrl
export function cancelRiskTest(params) {
  return fetch({
    url: exportURL.cancelRiskTestUrl,
    method: 'post',
    params
  })
}

// 爱佳宝投资页面 ajbInvestUrl
export function invesetAjb(params) {
  return fetch({
    url: exportURL.ajbInvestUrl,
    method: 'post',
    params
  })
}

// 爱佳宝创建订单
export function createAjbOrder(params) {
  return fetch({
    url: exportURL.createAjbUrl,
    method: 'post',
    params
  })
}

// 爱佳宝
export function myAjbData(params) {
  return fetch({
    url: exportURL.myAjbUrl,
    method: 'post',
    params
  })
}

// 爱家（板块）userProfitUrl
export function homeData(params) {
  return fetch({
    url: exportURL.homeUrl,
    method: 'post',
    params
  })
}

export function userProfitData(params) {
  return fetch({
    url: exportURL.userProfitUrl,
    method: 'post',
    params
  })
}

//充值
export function rechargeData(params) {
  return fetch({
    url: exportURL.rechargeUrl,
    method: 'post',
    params
  })
}

//获取充值订单验证码
export function rechargeCodeData(params) {
  return fetch({
    url: exportURL.orderCodeUrl,
    method: 'post',
    params
  })
}

//获取银行卡列表
export function bankData(params) {
  return fetch({
    url: exportURL.bankMessageUrl,
    method: 'post',
    params
  })
}

//确定充值接口 payOrderUrl
export function payOrderData(params) {
  return fetch({
    url: exportURL.payOrderUrl,
    method: 'post',
    params
  })
}

// 获取用户设置接口
export function memberSettingData(params) {
  return fetch({
    url: exportURL.memberSettingUrl,
    method: 'post',
    params
  })
}

//  获取退出登录
export function logoutData(params) {
  return fetch({
    url: exportURL.logoutUrl,
    method: 'post',
    params
  })
}

//upadteNickNameUrl 修改昵称接口
export function updateNickNameData(params) {
  return fetch({
    url: exportURL.upadteNickNameUrl,
    method: 'post',
    params
  })
}

//重新设置密码
export function resetPasswordData(params) {
  return fetch({
    url: exportURL.resetPasswordUrl,
    method: 'post',
    params
  })
}

//设置交易密码
export function setPaypasswordData(params) {
  return fetch({
    url: exportURL.setPayPasswordUrl,
    method: 'post',
    params
  })
}

//积分商城数据
export function getPointsIndex(params) {
  return fetch({
    url: exportURL.pointsIndexUrl,
    method: 'post',
    params
  })
}

// 发现首页
export function getDIscover(params) {
  return fetch({
    url: exportURL.discoverUrl,
    method: 'post',
    params
  })
}

// 积分商城分类
export function goodsByCategory(params) {
  return fetch({
    url: exportURL.goodsByCategoryUrl,
    method: 'post',
    params
  })
}

// 积分明细
export function pointsDetail(params) {
  return fetch({
    url: exportURL.pointsDetailUrl,
    method: 'post',
    params
  })
}

//活动中心
export function activity(params) {
  return fetch({
    url: exportURL.activityUrl,
    method: 'post',
    params
  })
}

// 会员中心
export function MemberCenter(params) {
  return fetch({
    url: exportURL.MemberCenterUrl,
    method: 'post',
    params
  })
}

//签到中心
export function getSignIn(params) {
  return fetch({
    url: exportURL.getSignInUrl,
    method: 'post',
    params
  })
}

//签到记录
export function getSignInRecord(params) {
  return fetch({
    url: exportURL.getSignInRecordUrl,
    method: 'post',
    params
  })
}

//签到
export function getAwardBySignIn(params) {
  return fetch({
    url: exportURL.getAwardBySignInUrl,
    method: 'post',
    params
  })
}

//确定提现
export function getCash(params) {
  return fetch({
    url: exportURL.getCashUrl,
    method: 'post',
    params
  })
}

//提现
export function getCashDetail(params) {
  return fetch({
    url: exportURL.getCashDetailUrl,
    method: 'post',
    params
  })
}

// 提现详情页面
export function getCashOrderInfo(params) {
  return fetch({
    url: exportURL.getCashOrderInfoUrl,
    method: 'post',
    params
  })
}

// 资金明细
export function getCapitalFlowLogList(params) {
  return fetch({
    url: exportURL.getCapitalFlowLogListUrl,
    method: 'post',
    params
  })
}

// 充值界面 /api/trade/getRechargeInfo
export function getRechargeInfo(params) {
  return fetch({
    url: exportURL.getRechargeInfoUrl,
    method: 'post',
    params
  })
}

// 限额列表
export function getLimitBank(params) {
  return fetch({
    url: exportURL.getLimitBankUrl,
    method: 'post',
    params
  })
}


