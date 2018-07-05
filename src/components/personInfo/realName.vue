<template>
  <div class="container">
    <header class="header">
      <nav class="nav">
        <div class="nav-left"><a class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray" href="javascript:window.history.back();"></a></div>
        <div class="nav-head"><a href="javascript:;"><img src="http://cdn.renrenaijia.com/CDN/app/Public/images/mobile/logo/logo-head-pack.png" width="120"></a></div>
        <div class="nav-right"></div><!--<a href="http://wap.renrenaijia.com">跳过</a>-->
      </nav>
    </header>
    <!---->
    <div class="body">
      <div class="panel panel-red padding-1rem" style="margin-top:2rem">
        <div class="panel-body text-center padding-top-1rem ">
          <div class="text-center"><img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/mobile/default/default_link.png" width="50%"> </div>
          <div class="text-normal-min line-height-1_5 padding-top-0_5rem">
            为了保障你的账户安全及出借权益，<br>
            投资前需开通恒丰银行存管账户并进行实名认证
          </div>
        </div>
      </div>
      <!---card list-->
      <div class="list">
        <div class="form-items">
          <label for="realname" class="label-control">真实姓名：</label>
          <input type="text" maxlength="16" min="2" class="form-control" placeholder="你的姓名" id="realname" value="" v-model="form.name">
          <div class="clear-control">
            <i class="icon iconfont icon-false-circle"></i>
          </div>
        </div>
        <div class="form-items">
          <label for="idnumber" class="label-control">身份证号：</label>
          <input type="text" maxlength="18" min="15" class="form-control" placeholder="18位身份证号" id="idnumber" value="" v-model="form.idCard">
          <div class="clear-control">
            <i class="icon iconfont icon-false-circle"></i>
          </div>
        </div>
        <div class="text-center text-gray line-height-3 text-normal-min" v-show="!flag">
          根据你提供的信息同步开通恒丰银行存管账户
        </div>
      </div>
      <div class="list padding-top-0_5rem" v-show="flag">
        <div class="form-items ">
          <label for="cardnumber" class="label-control"> 银行卡号：</label>
          <input type="text" maxlength="19" min="16" class="form-control" placeholder="仅限银联储蓄卡" id="cardnumber" value="" v-model="form.bankCard">
          <div class="clear-control">
            <i class="icon iconfont icon-false-circle "></i>
          </div>
        </div>
        <div class="form-items">
          <label for="premobile" class="label-control">预留手机号：</label>
          <input type="text" maxlength="11" min="11" class="form-control" placeholder="银行预留的手机号码" id="premobile" value="" v-model="form.tel">
          <div class="clear-control">
            <i class="icon iconfont icon-false-circle"></i>
          </div>
        </div>
        <div class="text-center text-gray line-height-1_5 padding-top-1rem text-normal-min">
          人人爱家金融采用多重风控与<br>
          安全技术全程监控资金流向请你放心绑卡
        </div>
      </div>
      <!--btn--->
      <div class="padding-2rem margin-2rem">
        <a  class="btn btn-red btn-circle btn-max" @click="goNext()" v-show="!flag">下一步</a>
      </div>
      <div class="padding-2rem margin-2rem">
        <a  class="btn btn-red btn-circle btn-max" @click="next()" v-show="flag">下一步</a>
      </div>
      <!--<div class="padding-2rem margin-2rem text-center text-gray">
          <span><i class="icon iconfont icon-question text-blue" ui-dialog="popular-questions"></i> 常见问题</span>
          <span class="padding-left-1rem padding-right-1rem">|</span>
          <span ><i class="icon iconfont icon-kefu text-blue"></i>  联系客服</span>
      </div>-->
    </div>
  </div>
</template>
<script>
  import {MessageBox} from 'mint-ui'
  import {des,passToken,passInfo,luhnCheck,CheckBankCard,phoneCheck} from '../../commonjs/commonjs'
  import {getUserInfo} from '../../api/faxian'

  export default{
    data(){
      return{
        form:{
          name:"",
          idCard:"",
          bankCard:"",
          tel:""
        },
        flag:false
      }
    },
    methods: {
      goNext(){
        const idNum=this.form.idCard;
        let num = idNum.toUpperCase();           //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
        if(this.form.name===''){
          MessageBox('', '请输入您的姓名');
          return;
        }
        if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
          //alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');
          MessageBox('', '身份证号不正确');
          return false;
        }
        //验证前2位，城市符合
        let aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
        if(aCity[parseInt(num.substr(0,2))]==null){
          MessageBox('', '身份证号不正确');
          return false;
        }
        //下面分别分析出生日期和校验位
        let len, re; len = num.length;
        if (len == 15) {
          re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
          let arrSplit = num.match(re);  //检查生日日期是否正确
          let dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
          let bGoodDay; bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
          if (!bGoodDay) {
            MessageBox('', '身份证号不正确');
            return false;
          } else { //将15位身份证转成18位 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
            let arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            let arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            let nTemp = 0, i;
            num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
            for(i = 0; i < 17; i ++) {
              nTemp += num.substr(i, 1) * arrInt[i];
            }
            num += arrCh[nTemp % 11];
            return true;
          }
        }
        if (len == 18) {
          re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
          let arrSplit = num.match(re);  //检查生日日期是否正确
          let dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
          let bGoodDay; bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
          if (!bGoodDay) {
            MessageBox('', '身份证号不正确');
            return false;
          }
          else { //检验18位身份证的校验码是否正确。 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
            let valnum;
            let arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            let arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            let nTemp = 0, i;
            for(i = 0; i < 17; i ++) {
              nTemp += num.substr(i, 1) * arrInt[i];
            }
            valnum = arrCh[nTemp % 11];
            if (valnum != num.substr(17, 1)) {
              MessageBox('', '身份证号不正确');
              return false;
            }
            this.flag=true;
            return true;
          }
        }//end if
      },//end goNext()
      next(){
        const idNum=passInfo(this.form.idCard);
        let time=Number(new Date().getTime());
        const token=passToken(time);

        const name=passInfo(this.form.name);
        const bankCard=passInfo(this.form.bankCard);
        const tel=passInfo(this.form.tel);
        console.log(token)
        console.log(time)
        console.log(tel)
        if(CheckBankCard(this.form.bankCard)&& phoneCheck(this.form.tel)){
          getUserInfo(token,time,name,idNum,bankCard,tel).then((res)=>{
            console.log(res)
            if(res.data.resCode===1){
              localStorage.isRealName=true;
              MessageBox('', '添加成功');
              this.$router.push({path:'/personInfo'})
            }else MessageBox('', res.data.resMsg)

          })
        }

      }
    }
  }
</script>
<style lang="less">
  .mint-msgbox{
    width:75%;
    border-radius:5px;
  }

</style>
