import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/home/home';
import List from 'components/list/list';
import Recommend from 'components/recommend/recommend';
import notice from 'components/recommend/notice';
import activity from 'components/recommend/activity';
import Discover from 'components/discover/discover';
import Project from 'components/project/wz';
import Login from 'components/login/login';
import Register from 'components/register/register';
import listChildren from 'components/list/listChildren';
import personInfo from 'components/personInfo/personInfo';
import realName from 'components/personInfo/realName';
import nickName from 'components/personInfo/nickName';
import bankCard from 'components/personInfo/bankCard';
import setPassWord from 'components/personInfo/setPassWord';
import resetPassword from 'components/personInfo/resetPassword';
import setPaypassword from 'components/personInfo/setPaypassword';
import reCharge from 'components/money/recharge';
import getCash from 'components/money/getCash';
import listDetail from 'components/list/listDetail';
import listHongbao from 'components/list/listHongbao';
import listTopay from 'components/list/listTopay';
import payResult from 'components/payResult/payResult';
import userProject from 'components/payResult/userProject';
import pull from 'components/payResult/pull';
import wzPlan from 'components/home/wzplan';
import reward from 'components/home/reward';
import moneyDetail from 'components/home/moneyDetail';
import ReportList from 'components/dataReport/reportList';
import reportDetail from 'components/dataReport/reportDetail';
import invsetFriend from 'components/recommend/invsetFriend';
import userPoints from 'components/recommend/userPoints';
import insurance from 'components/recommend/insurance';
import alltipDetail from 'components/recommend/alltipDetail';
import activeDetail from 'components/recommend/activeDetail';
import about from 'components/personInfo/about';
import userProfit from 'components/home/userProfit';
import loginPassword from 'components/login/loginBypassword';
import forgetPwd from 'components/personInfo/forgetPwd';
import finishRecharge from 'components/money/finishRecharge';
import riskTest from 'components/memberRisktest/riskTest';
import integralMall from 'components/integralMall'//积分商城
import mallRule from 'components/integralMall/mallRule'//积分规则
import pointsDetailList from 'components/integralMall/pointsDetailList'//积分明细
import mallHistory from 'components/integralMall/mallHistory'//兑换记录
import activityList from 'components/activityCenter/index.vue'//活动中心
import vipCenter from 'components/vipCenter'//会员中心
import userSign from 'components/userSign'//签到中心
import signRule from 'components/userSign/signRule'//签到规则
import signReward from 'components/userSign/signReward'//签到奖励
import getCashDetail from 'components/money/getCashDetail'//提现详情
import limitList from 'components/money/limitList'
Vue.use(Router)
export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: './recommend',
      meta: {
        show: true,
      }
    }, {
      path: '/home',
      component: Home,
      meta: {
        show: true
      }
    }, {
      path: '/list',
      component: List,
      meta: {
        show: true
      }
    }, {
      path: '/recommend',
      component: Recommend,
      meta: {
        show: true
      }
    }, {
      path: '/discover',
      component: Discover,
      meta: {
        show: true
      }
    }, {
      path: '/notice',
      component: notice
    }, {
      path: '/activity',
      component: activity
    }, {
      path: '/project/detail',
      component: Project
    }, {
      path: '/login',
      component: Login,
      meta: {
        show: false
      }
    }, {
      path: '/register',
      component: Register,
      meta: {
        show: false
      }
    }, {
      path: '/listChildren',
      component: listChildren,
      meta: {
        show: false
      }
    }, {
      path: '/list/:id',
      component: listChildren
    }, {
      path: '/personInfo',
      component: personInfo,
      meta: {
        show: false
      }
    }, {
      path: '/realName',
      component: realName,
      meta: {
        show: false
      }
    }, {
      path: '/nickName',
      component: nickName,
      meta: {
        show: false
      }
    }, {
      path: '/bankCard',
      component: bankCard,
      meta: {
        show: false
      }
    }, {
      path: '/setPassWord',
      component: setPassWord,
      meta: {
        show: false
      }
    }, {
      path: '/resetPassword',
      component: resetPassword,
      meta: {
        show: false
      }
    }, {
      path: '/setPaypassword',
      component: setPaypassword,
      meta: {
        show: false
      }
    }, {
      path: '/recharge',
      component: reCharge,
      meta: {
        show: false
      }
    }, {
      path: '/getCash',
      component: getCash,
      meta: {
        show: false
      }
    }, {
      path: '/listDetail/:id',
      component: listDetail,
      meta: {
        show: false
      }
    }, {
      path: '/listHongbao/:id',
      component: listHongbao,
      meta: {
        show: false
      }
    }, {
      path: '/listTopay',
      component: listTopay,
      meta: {
        show: false
      }
    }, {
      path: '/payResult',
      component: payResult,
      meta: {
        show: false
      }
    }, {
      path: '/userProject',
      component: userProject,
      meta: {
        show: false
      }
    },
    {
      path: '/pull',
      component: pull,
      meta: {
        show: false
      }
    }, {
      path: '/wzplan',
      component: wzPlan,
      meta: {
        show: false
      }
    }, {
      path: '/reward',
      component: reward,
      meta: {
        show: false
      }
    }, {
      path: '/moneyDetail',
      component: moneyDetail,
      meta: {
        show: false
      }
    }, {
      path: '/reportList',
      component: ReportList,
      meta: {
        show: false
      }
    }, {
      path: '/reportDetail',
      component: reportDetail,
      meta: {
        show: false
      }
    }, {
      path: '/invsetFriend',
      component: invsetFriend,
      meta: {
        show: false
      }
    }, {
      path: '/userPoints',
      component: userPoints,
      meta: {
        show: false
      }
    }, {
      path: '/insurance',
      component: insurance,
      meta: {
        show: false
      }
    }, {
      path: '/alltipDetail/:id',
      component: alltipDetail,
      meta: {
        show: false
      }
    }, {
      path: '/activeDetail/:id',
      component: activeDetail,
      meta: {
        show: false
      }
    }, {
      path: '/about',
      component: about,
      meta: {
        show: false
      }
    }, {
      path: '/userProfit',
      component: userProfit,
      meta: {
        show: false
      }
    }, {
      path: '/loginBypassword',
      component: loginPassword,
      meta: {
        show: false
      }
    }, {
      path: '/forgetPwd',
      component: forgetPwd,
      meta: {
        show: false
      }
    }, {
      path: '/finishRecharge',
      component: finishRecharge,
      meta: {
        show: false
      }
    }, {
      path: '/riskTest',
      component: riskTest,
      meta: {
        show: false
      }
    }, {
      path: '/integralMall',
      component: integralMall,
      meta: {
        show: false
      }
    }, {
      path: '/integralMall/mallRule',
      component: mallRule,
      meta: {
        show: false
      }
    }, {
      path: '/integralMall/pointsDetailList',
      component: pointsDetailList,
      meta: {
        show: false
      }
    }, {
      path: '/integralMall/mallHistory',
      component: mallHistory,
      meta: {
        show: false
      }
    }, {
      path: '/activityList',
      component: activityList,
      meta: {
        show: false
      }
    }, {
      path: '/vipCenter',
      component: vipCenter,
      meta: {
        show: false
      }
    }, {
      path: '/userSign',
      component: userSign,
      meta: {
        show: false
      }
    }, {
      path: '/userSign/signRule',
      component: signRule,
      meta: {
        show: false
      }
    }, {
      path: '/userSign/signReward',
      component: signReward,
      meta: {
        show: false
      }
    }, {
      path: '/money/getCashDetail',
      component: getCashDetail,
      meta: {
        show: false
      }
    }, {
      path: '/limitList',
      component: limitList,
      meta: {
        show: false
      }
    }
  ]
})



