
import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App';
import router from './router';
import store from './store';
import FastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper'; //引入swiper
import VueLazyload from 'vue-lazyload'

import api from './api';  // 引入所有api 请求接口
FastClick.attach(document.body);
Vue.use(MintUI);  // 挂载
Vue.use(api);     //将所有api请求挂载到vue中
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
Vue.config.productionTip = false;
//过滤器 filterA:千分位
Vue.filter('filterA',function (num) {
  let number = new Number(num);
  let str = number.toString();
  //正则匹配
  let newstr = str.replace(/\d{1,3}(?=(\d{3})+$)/g,function(s){
    return s+',';
  });
  return newstr;
});
Vue.filter('filterB',function (num) {
    var num=Number(num);
  return num.toFixed(2).replace (/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
});
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
