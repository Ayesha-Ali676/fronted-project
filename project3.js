let input=document.getElementById("inpt");
let list=document.querySelector(".list");
let time=document.getElementById("mytime");

function Add(){
if (input.value==""){
    alert("plz enter task")

}
else{
    let newEle=document.createElement("ul");
   // let todoDate = document.createElement('p');
    //todoDate.innerHTML = `${time.value}<i class="fa-solid fa-trash">`;
    newEle.innerHTML=`${input.value}     ${time.value}<i class="fa-solid fa-trash">`;
    list.appendChild(newEle);
   // list.appendChild(todoDate);
    input.value="";
    newEle.querySelector("i").addEventListener("click", remove);
    function remove(){
newEle.remove()
//todoDate.querySelector("i").addEventListener("click", remove);
//function remove(){
//todoDate.remove()
    }}
 
}

