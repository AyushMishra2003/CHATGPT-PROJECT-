function print(){
    const input=document.getElementById('chatinput').value;
    document.getElementById('chatinput').value=""
    console.log(input,typeof input);
    document.getElementById('content').innerHTML+=`<p>${input}<p>`
}

document.getElementById('sendchat').addEventListener("click",function(){
    print()
})