/**
 * Created by Administrator on 2018/1/16.
 */
import axios from 'axios';
import baseURL from '../config/index';
import {CODE} from '../exportUrl/index';
import {passToken} from '../../commonjs/commonjs';
import {MessageBox} from 'mint-ui';
export default function fetch (options) {
  var option = options
  var time = new Date().getTime() // 秘钥
  var token = passToken(time)     // 加密后的token
  var headers = {
    "req-header-device":"wap",
    "req-header-device-type": "4",
    "req-header-app-version":"4.3.0",
    "req-header-push-id":"",
    "req-header-client-version":"",
    "req-header-device-id":"",
    "req-header-channel-source":"",
    "req-header-request-time":time,
    "ip":"192.168.10.82:8080"
  };
  if(option.params.token!= undefined){ // 如果传入了token 就在fetch里计算token
    option.params.token=token;
  }
  return new Promise((resolve, reject) => {
    // https://github.com/mzabriskie/axios
    //创建一个axios实例
    const instance = axios.create({
      //设置默认根地址
      baseURL: baseURL,
      //设置请求超时设置
      timeout: 10000,
      //设置请求时的header
      headers: headers,
      withCredentials:true
    });
    instance(option)
      .then(({data}) => {
        //请求成功时,根据业务判断状态
        if (data.resCode === CODE.success) {
          resolve({data});
          return false;
        } else if (data.resCode === CODE.error){
          console.log(data.resMsg)
          MessageBox('',data.resMsg);
          //router.replace({name: "login"});
        }else{
          reject({data});
          return false
        }
      })
      .catch(({error}) => {
        //请求失败时,根据业务判断状态
        reject({error});
      });
  })
}
