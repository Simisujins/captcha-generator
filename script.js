function generate(){
    var word="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var captcha="";
    for(let i=0;i<=6;i++)
    {
        captcha+=word.charAt(Math.random()*63);

    }
    document.getElementById("captcha").value=captcha;
}
function check(){
    var result=document.getElementById("answer").value;
    var captcha=document.getElementById("captcha").value;
    console.log(captcha,result);
    if(result==captcha)
    {
        alert("CAPTCHA verified successfully")

    }
    else
    {
        alert("CAPTCHA Verification Failed")
    }
}