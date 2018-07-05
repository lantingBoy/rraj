/**
 * Created by Administrator on 2018/1/11.
 */
// 需要加密字段的请求头
export function headers(oTime) {
  return {
    "req-header-device":"wap",
    "req-header-device-type":"4",
    "req-header-app-version":"4.5.0",
    "req-header-push-id":"",
    "req-header-client-version":"",
    "req-header-device-id":"",
    "req-header-channel-source":"",
    "req-header-request-time":oTime,
    "ip":"192.168.10.82:8080"
  };
}
// 导出不需要加密的请求头
export const noTimeHead={
  "req-header-device":"wap",
  "req-header-device-type":"4",
  "req-header-app-version":"4.5.0",
  "req-header-push-id":"",
  "req-header-client-version":"",
  "req-header-device-id":"",
  "req-header-channel-source":"",
  "req-header-request-time":0,
  "ip":"192.168.10.82:8080"
};
