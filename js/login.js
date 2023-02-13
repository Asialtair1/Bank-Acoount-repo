document.getElementById('submit-button').addEventListener('click',function(){
// -------------prothome-email-input er man ber korchi------------------//   
    const emailFiled=document.getElementById('user-email');
    const email = emailFiled.value;
 // -------------prothome-pass-input er man ber korchi---------------//   
    const getPassword =document.getElementById('user-pass')
    const pass = getPassword.value;
//log in korle jeno main point e cole jai tar kaj

if(email==='asifaltair74@gmail.com' && pass === 'asif'){
   window.location.href ='bank.html';
} 
else{
    alert('incorrect Password');
}
})