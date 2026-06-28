const typing=document.querySelector(".typing")
const handleOutGoingChat=()=>{
    userMessage=document.querySelector(".typing-input").value;}

typing.addEventListener("submit",(e)=>{
    e.preventDefault();
    handleOutGoingChat()
})

