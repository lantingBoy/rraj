/**
 * Created by Administrator on 2018/1/16.
 */
export const recommendUrl = 'api/index' // 首页

export const noticeUrl = 'api/notice/list' // 公告

export const newsUrl = 'api/news/list' // 动态

export const noticeDetailUrl = 'api/notice/detail' // 公告详情

export const newsDetailUrl = 'api/news/detail' // 动态详情

export const rankUrl = 'api/activity/fixPointRanking' // 积分龙虎榜

/*=========== 以上为首页部分 ========*/
export const registerUrl = '/api/member/registerMember' // 用户注册

export const loginCodeUrl = '/api/member/sendMobileCode' // 验证码

export const loginUrl = '/api/member/loginByMobile' // 验证码登录

export const loginByPwd = '/api/member/loginByPassword' // 密码登录

export const setPwdUrl = '/api/member/setLoginPassword' // 设置登录密码

export const forgetPwdUrl = '/api/member/findLoginPasswordStup1' // 忘记登录密码接口

export const submitPwdUrl = '/api/member/findLoginPasswordStup2' // 提交重新设置的登录密码
/*============以上为登录部分=============*/

export const wzUrl = '/api/project/listProject' // 稳赚列表的接口

export const ajbUrl = '/api/aijiabao/aijiabaoIndex' // 爱家宝列表的接口、

export const wzDetailUrl = '/api/project/getProjectById' // 爱家宝列表的接口

export const wzInvestUrl = '/api/project/toInvest' // 爱家宝列表的接口

export const wzHongBaoUrl = '/api/coupon/listCouponByStatus' // 稳赚使用红包

export const createOrderUrl = '/api/trade/createProjectOrder' // 稳赚创建订单

export const cancelOrderUrl = '/api/trade/cancelOrder' // 稳赚取消订单

export const getOrderCodeUrl = '/api/trade/getOrderCode' // 获取稳赚订单验证码

export const submitOrderUrl = '/api/trade/payOrder' // 提交稳赚订单

export const resultOrderUrl = '/api/trade/getTradeOrderDetail' // 稳赚订单支付后的结果展示

export const listOrderUrl = '/api/project/listOrder' // 稳赚订单支付后的结果展示

export const cancelRiskTestUrl = '/api/home/riskAssessment/cancel' // 用户取消风险评测接口

/*====以上为投资板块所涉及接口===========*/

export const ajbInvestUrl = '/api/aijiabao/toAijiabaoTrade' // 爱家宝支付

export const createAjbUrl = '/api/trade/createAijiabaoOrder' // 创建爱家宝订单

export const myAjbUrl = '/api/aijiabao/myAijiabao' // 爱家宝

/*========以上为创建爱佳宝订单，爱佳宝支付接口============*/

export const homeUrl = '/api/home' // 爱家 (板块)

export const userProfitUrl = '/api/member/amountAnalyze' // 资产分析 (板块)

export const rechargeUrl = '/api/trade/balanceRecharge' // 充值 (板块)

export const orderCodeUrl = '/api/trade/getOrderCode' // 充值获取验证码(板块)

export const bankMessageUrl = '/api/bankcard/listByMemberId' // 充值页面银行卡接口 (板块)

export const payOrderUrl = '/api/trade/payOrder' // 充值确定支付订单 (板块)

export const memberSettingUrl = '/api/member/getMemberSetings' // 充值确定支付订单 (板块)

export const logoutUrl = '/api/member/logout' // 退出登录

export const upadteNickNameUrl = '/api/member/updateNickName' // 修改登录密码

export const resetPasswordUrl = '/api/member/changeLoginPassword' // 修改登录密码

export const setPayPasswordUrl = '/api/member/setPayPassword' // 设置交易密码

/*=======以上为home 爱家板块接口====*/

export const pointsIndexUrl = '/api/points/pointsIndex' // 积分商城

export const discoverUrl = '/api/discover' // 发现首页

export const goodsByCategoryUrl = '/api/points/getPointsGoodsByCategory'// 积分商城分类

export const pointsDetailUrl = '/api/points/pointsDetailList' // 积分明细

export const activityUrl = '/api/activity/list' // 活动中心

export const MemberCenterUrl = '/api/member/ext/getMemberCenter' // 会员中心

export const getSignInUrl = '/api/member/signIn/index' // 签到中心

export const getSignInRecordUrl = '/api/member/signIn/getSignInRecord' // 签到记录

export const getAwardBySignInUrl = '/api/member/signIn/getAwardBySignIn' // 签到

export const getCashUrl = '/api/trade/balanceWithdraw' // 提现

export const getCashDetailUrl = '/api/trade/getBalanceWithdrawInfo'

export const getCashOrderInfoUrl = '/api/trade/getTradeOrderDetail'

export const getCapitalFlowLogListUrl = '/api/trade/getCapitalFlowLogList' // 资金明细

export const getRechargeInfoUrl = '/api/trade/getRechargeInfo' //

export const getLimitBankUrl = '/api/bank/list' // 限额列表












