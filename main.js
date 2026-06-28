const typing=document.querySelector(".typing")
const chatlist=document.querySelector(".chatlist")
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

