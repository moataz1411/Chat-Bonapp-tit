const typing=document.querySelector(".typing")
const chatlist=document.querySelector(".chatlist")
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
}

typing.addEventListener("submit",(e)=>{
    e.preventDefault();
    handleOutGoingChat()
})

