var otpd=document.getElementById("otpdisp");
var otp;
function otpgen(){
    var m = Math.floor(Math.random()*9);
    var n = Math.floor(Math.random()*9);
    var o = Math.floor(Math.random()*9);
    var p = Math.floor(Math.random()*9);
    var otp=`${m}${n}${o}${p}`;
    document.getElementById("otp").innerHTML=otp;
}
function valid(){
    var userInp=document.getElementById("inp").value;
    var genInp=document.getElementById("otp").innerHTML;
    if(userInp==""){
        document.getElementById("msg").innerHTML="Generate & Enter OTP";
        document.getElementById("msg").style.color="orangered";
    }
    else{
        if(userInp==genInp){
            document.getElementById("msg").innerHTML="OTP Verfied Successfully";
            document.getElementById("msg").style.color="green";
        }
        else{
            document.getElementById("msg").innerHTML="Wrong OTP Retry ";
            document.getElementById("msg").style.color="red";
        }
    }
}
function show(){
    otpd.style.display="block";
}
function hide(){
    otpd.style.display="none";
}