import axios from 'axios'
import {passToken} from '../commonjs/commonjs'
import {MessageBox} from 'mint-ui'

var header = function(oTime){
  return {
    "req-header-device":"pc",
    "req-header-device-type":"4",
    "req-header-app-version":"4.5",
    "req-header-push-id":"",
    "req-header-client-version":"",
    "req-header-device-id":"",
    "req-header-channel-source":"ajlc",
    "req-header-request-time":oTime,
    "ip":"192.168.10.82"
  };
}
export function faxianIndex() {//发现首页
  let params=new URLSearchParams();
  let headers = header();
  return axios({
    method: 'post',
    url: '/api/discover',
    params,
    headers,
  }).then((res)=>{
    return Promise.resolve(res);
  });
}
export function integralMallIndex() {//积分商城首页
  let params=new URLSearchParams();
  let headers = header();
  return axios({
    method: 'post',
    url: '/api/points/pointsIndex',
    params,
    headers,
  }).then((res)=>{
    return Promise.resolve(res);
  });
}
export function getPointsGoodsByCategory(categoryId) {//积分商城分类
  let params=new URLSearchParams();
  params.append('categoryId',categoryId);
  let headers = header();
  return axios({
    method: 'post',
    url: '/api/points/getPointsGoodsByCategory',
    params,
    headers,
  }).then((res)=>{
    return Promise.resolve(res);
  });
}
export function pointsDetailList(pageNo) {//积分明细
  var oTime = new Date().getTime();
  let params=new URLSearchParams();
  let headers = header(oTime);
  params.append('token',passToken(oTime));
  params.append('pageNo',pageNo);
  return axios({
    method: 'post',
    url: '/api/points/pointsDetailList',
    params,
    headers,
  }).then((res)=>{
    return Promise.resolve(res);
  });
}

export function activityList(pageNo) {//活动中心
  let params=new URLSearchParams();
  let headers = header();
  params.append('token',passToken());
  params.append('pageNo',pageNo);
  return axios({
    method: 'post',
    url: '/api/activity/list',
    params,
    headers,
  }).then((res)=>{
    return Promise.resolve(res);
  });
}

export function getMemberCenter() {//会员中心
  let params=new URLSearchParams();
  let headers = header();
  params.append('token',passToken());
  return axios({
    method: 'post',
    url: '/api/member/ext/getMemberCenter',
    params,
    headers,
  }).then((res)=>{
    return Promise.resolve(res);
  });
}

export function getSignIn() {//签到中心
  var oTime = new Date().getTime();
  let params=new URLSearchParams();
  let headers = header(oTime);
  params.append('token',passToken(oTime));
  return axios({
    method: 'post',
    url: '/api/member/signIn/index',
    params,
    headers,
  }).then((res)=>{
    return Promise.resolve(res);
  });
}

export function getSignInRecord(currentPage) {//签到记录
  var oTime = new Date().getTime();
  let params=new URLSearchParams();
  let headers = header(oTime);
  params.append('currentPage',currentPage);
  params.append('token',passToken(oTime));
  return axios({
    method: 'post',
    url: '/api/member/signIn/getSignInRecord',
    params,
    headers,
  }).then((res)=>{
    return Promise.resolve(res);
  });
}

export function getAwardBySignIn() {//签到
  var oTime = new Date().getTime();
  let params=new URLSearchParams();
  let headers = header(oTime);
  params.append('token',passToken(oTime));
  return axios({
    method: 'post',
    url: '/api/member/signIn/getAwardBySignIn',
    params,
    headers,
  }).then((res)=>{
    return Promise.resolve(res);
  });
}
export function dialogFaxian() {
  MessageBox.confirm('请下载APP查看').then(action => {
    if(action==='confirm'){
    }
  }).catch(err=>{
    if(err==='cancel'){
    }
  })
}
// 需要加密字段的请求头
export function headers() {
  return {
    "req-header-device":"wap",
    "req-header-device-type":"4",
    "req-header-app-version":"4.0.0",
    "req-header-push-id":"",
    "req-header-client-version":"",
    "req-header-device-id":"",
    "req-header-channel-source":"",
    "req-header-request-time":new Date().getTime(),
    "ip":"192.168.10.82:8080"
  };
}
// 导出不需要加密的请求头
export const noTimeHead={
  "req-header-device":"wap",
  "req-header-device-type":"4",
  "req-header-app-version":"4.0.0",
  "req-header-push-id":"",
  "req-header-client-version":"",
  "req-header-device-id":"",
  "req-header-channel-source":"",
  "req-header-request-time":0,
  "ip":"192.168.10.82:8080"
};

export function getRegisterData(phoneNum,password) {
  let params=new URLSearchParams();
  params.append('mobile',phoneNum);
  params.append('password',password);
  params.append('mobileCode','888888');
  return axios.post('/api/member/registerMember',params).then((res)=>{
    return Promise.resolve(res);
  });
}

// 实名认证
export function getUserInfo(token,oTime,name,idCard,bankCard,tel) {
  let params=new URLSearchParams();
  params.append('token',token);
  params.append('name',name);
  params.append('idCard',idCard);
  params.append('cardNo',bankCard);
  params.append('preMobile',tel);
  return axios({
    method: 'post',
    url: '/api/member/realName4',
    params,
    headers: {
      "req-header-device":"wap",
      "req-header-device-type":"4",
      "req-header-app-version":"4.0.0",
      "req-header-push-id":"",
      "req-header-client-version":"",
      "req-header-device-id":"",
      "req-header-channel-source":"",
      "req-header-request-time":oTime,
      "ip":"192.168.10.82:8080"
    },
  }).then((res)=>{
    return Promise.resolve(res);
  });
}
