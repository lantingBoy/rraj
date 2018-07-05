/**
 * Created by Administrator on 2017/11/14.
 */
//定义修改的操作(同步操作)
import * as types from './mutation-types';

const mutations={     //相关的修改方法
  [types.SET_PAY](state,pay){
    state.pay=pay;
  },
  [types.SET_REALMONEY](state,realMoney){
    state.realMoney=realMoney;
  },
  [types.SET_HONGBAO](state,hongBao){
    state.hongBao=hongBao;
  },
  [types.SET_TOTALAMOUNT](state,totalAmount){
    state.totalAmount=totalAmount;
  },
  [types.SET_GETCASH](state,getCash){
    state.getCash=getCash
  }
};

export default mutations;
