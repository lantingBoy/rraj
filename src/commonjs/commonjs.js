/**
 * Created by Administrator on 2017/11/1.
 */
//加密算法
import {MessageBox} from 'mint-ui';
 export function des(key,message){
  let keyHex = CryptoJS.enc.Utf8.parse(key);
  let ivHex = CryptoJS.enc.Utf8.parse(key);
  let encrypted = CryptoJS.DES.encrypt(message, keyHex, {
    iv:ivHex,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}
//检测手机号
export function phoneCheck(val) {
  let regTel = /^[1]{1}[3,4,5,7,8]\d{9}$/;
  if(!val){
    MessageBox('', '请填写手机号码');
  }else if (!regTel.test(val)) {
    MessageBox('', '手机号码不正确');
    return false;
  } else {
    return true;
  }
}
//检测密码
export function passwordCheck(val) {
   console.log(val);
  if (val==='') {
    MessageBox('', '请输入密码');
  } else if (!/^[A-Za-z0-9]+$/.test(val) || val.length < 6) {
    MessageBox('', '密码只能是6位以上英文或者数字');
  } else {
    return true;
  }
}
//检测六位交易密码
export function payPasswordCheck(val) {
  const reg = new RegExp(/^\d{6}$/);
  if(val===''){
    MessageBox('', '请输入密码');
  }else if(!reg.test(val)){
    MessageBox('', '请输入六位数字密码');
  }else{
    return true;
  }
}
//上传Token  加密并转码
 export function passToken(oTime) {
   let now = new Date(oTime); //每次发起请求的时候取下当前时间戳作为秘钥
   let day = now.getDate();            //日
   let hours = now.getHours();            //时
   let minutes = now.getMinutes();          //分
   let seconds = now.getSeconds();           //秒
   if(day < 10){
     day="0"+day;
   }
   if(hours < 10)
     hours = "0"+hours;
   if (minutes < 10) {
     minutes="0"+minutes;
   }
   if (seconds < 10) {
     seconds="0"+seconds;
   }
   const desKey= day.toString()+hours.toString()+minutes.toString()+seconds.toString();//秘钥
   let encode=encodeURIComponent(des(desKey,localStorage.token));//先des加密再进行urlEncode编码
   return encode;
 }
//上传字段 只加密
export function passInfo(message) {
  const desKey= 88888888;//秘钥
  let encode=des(desKey,message);
  return encode;
}
// 检测昵称
export function checkName(name) {
   let nickReg= /^[\u4e00-\u9fa5A-Za-z0-9-_]*$/;
   if(!nickReg.test(name)){
    MessageBox('', '用户昵称不和法');
  }
}
//检测银行卡
export function CheckBankCard(bankno) {
  var bankno = bankno.replace(/\s/g,'');
   if(bankno == "") {
     MessageBox('', '请填写银行卡号');
      return false;
   }
  if(bankno.length < 16 || bankno.length > 19) {

    MessageBox('', '银行卡号不正确');
    return false;
  }
  var num = /^\d*$/;//全数字
  if(!num.exec(bankno)) {
    MessageBox('', '银行卡号不正确');

    return false;
  }
    //开头6位
  var strBin = "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
  if(strBin.indexOf(bankno.substring(0, 2)) == -1) {
    MessageBox('', '银行卡号不正确');

    return false;
  }
    //Luhn校验
  if(!luhnCheck(bankno)){
    return false;
  }
  return true;
}
function luhnCheck(bankno){
  var lastNum=bankno.substr(bankno.length-1,1);//取出最后一位（与luhn进行比较）

        var first15Num=bankno.substr(0,bankno.length-1);//前15或18位
       var newArr=new Array();
       for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
             newArr.push(first15Num.substr(i,1));
  }
       var arrJiShu=new Array();  //奇数位*2的积 <9
       var arrJiShu2=new Array(); //奇数位*2的积 >9

       var arrOuShu=new Array();  //偶数位数组
       for(var j=0;j<newArr.length;j++){
            if((j+1)%2==1){//奇数位
                   if(parseInt(newArr[j])*2<9)
                     arrJiShu.push(parseInt(newArr[j])*2);
                   else
                   arrJiShu2.push(parseInt(newArr[j])*2);
                }
    else //偶数位
             arrOuShu.push(newArr[j]);
          }

       var jishu_child1=new Array();//奇数位*2 >9 的分割之后的数组个位数
        var jishu_child2=new Array();//奇数位*2 >9 的分割之后的数组十位数
       for(var h=0;h<arrJiShu2.length;h++){
             jishu_child1.push(parseInt(arrJiShu2[h])%10);
             jishu_child2.push(parseInt(arrJiShu2[h])/10);
  }

       var sumJiShu=0; //奇数位*2 < 9 的数组之和
       var sumOuShu=0; //偶数位数组之和
        var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
       var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
        var sumTotal=0;
        for(var m=0;m<arrJiShu.length;m++){
             sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
          }

        for(var n=0;n<arrOuShu.length;n++){
             sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
          }

       for(var p=0;p<jishu_child1.length;p++){
             sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
              sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
          }
        //计算总和
        sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);

        //计算luhn值
       var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;
        var luhn= 10-k;

        if(lastNum==luhn){
             console.log("验证通过");
             return true;
        }else{
          MessageBox('', '银行卡号不正确');
          return false;
        }
    }
