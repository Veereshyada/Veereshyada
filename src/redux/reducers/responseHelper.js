//var Base_url='http://13.232.61.84:4000/api/b1/';
import AsyncStorage from '@react-native-async-storage/async-storage';

// var Base_url ='http://167.86.105.71:4000/api/b1/';
var Base_url='https://battery.elitemindz.in/api/b1/'

var Base_url2 ='https://outpost.mapmyindia.com/';
// var  Base_url = 'https://battery.elitemindz.in/api/b1/';
export const OTPLOGIN = async(data2) =>{
    const URL1 =`auth/loginOtp`;
  // console.log("OTP LOGIN----hii ajay=================", JSON.stringify({
    //sdriverId:data2}))
    try{    
        const num2 = await fetch(Base_url+URL1,{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                driverId:data2
            })
        }).then(response =>{
            //console.log(response,"--------------otp genrated-------");
            return response.json();
        }).catch(err => {
            console.log("the error otp ====>", err)
        })
        // console.log('7888888888',num2,"34988888888888888888888");
        return num2;
    }catch(error){
        console.log("the error through send otp====>", error)
    }
}
export const LOGIN = async(url ,data1)=>{
    try{
        const data = await fetch(Base_url+url, {
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(
                {
                    driverId:data1.userid,
                    code:data1.userOtp
                })
        }).then(response => {
           // console.log(response,"veere------");
            return response.json();
           
        }).then(result=>{return result})
        .catch(err => {
            console.log("the error ====>", err)
        })
        return data;
    }catch(error){
        console.log("the error through login====>", error)
    }
}

export const QRCODE = async(url,datacode)=>{
    //const qrdata = JSON.parse(dataqr);
  let data1 =datacode
   //console.log('QRCODE for sending in body to get response=====>',data1,"qrcode url");
    try{
        const data = await fetch('https://battery.elitemindz.in/api/b1/dashboard/qrGenrator', {
            method:'POST',
            headers:{
                Authorization:`Bearer ${data1}`}
        }).then(response => {
           //console.log("QRCODE Api call code Response form api======>",response);
            return response.json();
           
        }).then(result=>{return result})
        .catch(err => {
            console.log("Erroe from Qr api response", err)
        })
        return data;
    }catch(error){
        console.log("the error through Qr API responce====>", error)
    }
}


export const IotTokAn = async(url4, formBody) =>{
    try{
        const result2 = await fetch(Base_url2+url4,{
            method:'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            body:formBody
        }).then(response =>{
            //console.log(response,"--------------iot genrated-------");
            return response.json();
        }).catch(err => {
            console.log("the error otp ====>", err)
        })
        return result2;
    }catch(error){
        console.log("the error through Qr API responce====>", error)
    }
}
export const IotApicall= async(url,data2) =>{
    const token = data2;

    let battryid =   await AsyncStorage.getItem('DriverInfo');

    const val = JSON.parse(battryid).data;

    //console.log(val,"data------------nnnnnnnnnn")
         let bettry =val.batteryID;
    //var takoan = token;
   // console.log(Base_url2+url,token.access_token,"data2")
    var tokan = '131acbbe-7f32-4e09-9208-1c9429b8f1a6'
    var bearer = 'Bearer'+token;
   // console.log(bearer,"bearer");
    //const newUrl = `${Base_url2}${url}`
    try{
        const result2 = await fetch(`https://intouch.mapmyindia.com/iot/api/devices?name=${bettry}`,{
            method:'GET',
            headers:{
                'Authorization':bearer
            },
        }).then(response =>{
            //console.log(response,"--------------iot genrated-------");
            return response.json();
        }).catch(err => {
            console.log("the error otp ====>", err)
        })
        return result2;
    }catch(error){
        console.log("the error through Qr API responce====>", error)
    }
}


export const datcoordinate = async(url,datacod,ferdata)=>{
  const data2 =datacod;
    try{
        const data = await fetch(Base_url+url, {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${data2}`},
                body:JSON.stringify({
                    referralName:ferdata.userId,
                    referralContactNumber:ferdata.userotp,
                    referralRelationship:ferdata.relation
                })
                
        }).then(response => {
           console.log("reffer a driver Api call code Response form api======>",response);
            return response.json();
           
        }).then(result=>{return result})
        .catch(err => {
            console.log("Erroe from Qr api response", err)
        })
        return data;
    }catch(error){
        console.log("the error through Qr API responce====>", error)
    }
}

export const datcoordinate2 = async(url,datacod,ferdata)=>{
    //const qrdata = JSON.parse(dataqr);
  const data2 =datacod;
//   let alldata=JSON.stringify(ferdata)
//   console.log('==========================>',ferdata.userId);
//    console.log('datcoordinate for sending in body to get response=====>',url,data2,ferdata,"qrcode url");
    try{
        const data = await fetch(Base_url+url, {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${data2}`},
                body:JSON.stringify(ferdata)
                
        }).then(response => {
          console.log("QRCODE Api call code Response form api======>",response);
            return response.json();
           
        }).then(result=>{return result})
        .catch(err => {
            console.log("Erroe from Qr api response", err)
        })
        return data;
    }catch(error){
        console.log("the error through Qr API responce====>", error)
    }
}
