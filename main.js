const typing=document.querySelector(".typing")
const chatlist=document.querySelector(".chatlist")
chatlist.addEventListener("click",(e)=>{
    if (!e.target.classList.contains("copy-btn"))return;
    const text=e.target.closest(".message").querySelector(".text").innerText;
    navigator.clipboard.writeText(text);
    e.target.innerText="check"
    setTimeout(()=>e.target.innerText="content_copy",1000);
});
const scrollToBottom = () => {window.scrollTo({top: document.body.scrollHeight,behavior: "smooth"});
};
const generateAPIResponse=async(div)=>{
    const textElement=div.querySelector(".text");
    try {
        const response=await fetch("http://localhost:3000/chat",{method:"post",headers:{"content-Type":"application/json"},body:JSON.stringify({message:userMessage})
    });
        const data=await response.json();
        div.querySelector(".loading").remove();
        textElement.innerText=data.reply;
}catch (error) {
        console.error(error);
        div.querySelector(".loading").remove();
        textElement.innerHTML = "Something went wrong!";
}}
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
            <span class="material-symbols-outlined copy-btn">
            content_copy
            </span>
    `
    const div=document.createElement("div");
    div.classList.add("message","incoming","loading")
    div.innerHTML=html
    chatlist.appendChild(div)
    scrollToBottom();
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
scrollToBottom();
typing.reset()
setTimeout(showloading,500)
}

typing.addEventListener("submit",(e)=>{
    e.preventDefault();
    handleOutGoingChat()
})

