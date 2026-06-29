const typing=document.querySelector(".typing")
const chatlist=document.querySelector(".chatlist")
const API_Key="AQ.Ab8RN6Kq3Zw-CzmAGjizHuwO7LpFeNKC7dIPm-4Xlhxvv2Mq1Q";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_Key}`;
const generateAPIResponse=async(div)=>{
    const textElement=div.querySelector(".text");
    try {
        const response=await fetch(API_URL,{method:"post",headers:{"content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:userMessage}]}]})})
        const data=await response.json()
        console.log(data);
    }catch(error){console.error(error)}
}
const showloading=()=>{
    const html=`
    <div class="message-content">
            <img src="images/egg.webp" alt="">
            <p class="text"></p>
                <div class="loading">
                    <div class="loadingbar"></div>
                    <div class="loadingbar"></div>
                    <div class="loadingbar"></div>
                </div>
            </div>
            <span class="material-symbols-outlined">
            content_copy
            </span>
    `
    const div=document.createElement("div");
    div.classList.add("message","incoming","loading")
    div.innerHTML=html
    chatlist.appendChild(div)
    generateAPIResponse(div)
}
const handleOutGoingChat=()=>{
    userMessage=document.querySelector(".typing-input").value;
if(!userMessage) return
const html=`
<div class="message-content">
            <img src="images/chill dog.png" alt="">
            <p class="text"></p>
            </div>
`
const div= document.createElement("div");
div.classList.add("message","outgoing");
div.innerHTML=html
div.querySelector(".text").innerHTML=userMessage;
chatlist.appendChild(div)
typing.reset()
setTimeout(showloading,500)
}

typing.addEventListener("submit",(e)=>{
    e.preventDefault();
    handleOutGoingChat()
})

