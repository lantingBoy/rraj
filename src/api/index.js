/**
 * Created by Administrator on 2018/1/17.
 */
import * as  api_data from './datagetApi';
const apiObj = {
  api_data
}
const install = function (Vue) {
  if (install.installed) return; //如果已经挂载到原型上直接返回
  install.installed = true;
  //定义属性到Vue原型中
  Object.defineProperties(Vue.prototype, {
    $fetch: {
      get() {
        return apiObj
      }
    }
  })
}

export default {
  install
}

