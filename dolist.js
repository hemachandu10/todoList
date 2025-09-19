let input=document.querySelector("#write");
let listContainer=document.querySelector("#listContainer");
let buttonadd=document.querySelector("button");

buttonadd.addEventListener("click",()=>{
    if(input.value == ""){
        alert("please write something");
    }
    else{
        let li=document.createElement("li");
        li.innerText=input.value;
        listContainer.append(li);
        input.value=""

        let span=document.createElement("span");
        span.innerText="\u00d7";
        li.append(span);
    }
    saveData();
})
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName == "SPAN"){//span should capital
        e.target.parentElement.remove();
    }
    saveData();
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();

