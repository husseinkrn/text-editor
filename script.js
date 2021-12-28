let textarea = document.getElementById("textarea");

let output = document.getElementById("output");
let erase = document.getElementById("erase");
let result = document.getElementById("result");
output.onclick = function(){
    result.innerHTML = textarea.value ;

}
erase.onclick = function(){
    result.innerHTML = "";
    textarea.value = "";
}
localStorage.setItem("result" , textarea.value)
onload = function(){
   textarea.value = localStorage.getItem("result");

}
var refresh = document.getElementById("refresh");
refresh.onclick = ()=>{
    location.reload();
}