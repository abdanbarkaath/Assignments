
var todo = document.getElementById("main-text")
var submit = document.getElementById("sub");
var x = document.getElementById("hi");
var table = document.getElementById("rows");
var storing;
var i=0;

submit.addEventListener("click",complete);
todo.addEventListener("keypress",function(event){
    if(event.keyCode === 13){
        complete();
    }
});

function complete(){
    storing = todo.value;     
    var para = document.createElement("li");
    var btndl = document.createElement("button");
    btndl.className = 'btn1';
    var btnst = document.createElement("button");
    var t = document.createTextNode(storing);
    btndl.textContent="Delete"
    btnst.textContent="Done"
    // para.innerText = storing;
    para.appendChild(t);
    console.log(para.textContent);
    rows.appendChild(para);
    para.appendChild(btndl);
    para.appendChild(btnst);
    btndl.addEventListener("click",function(){
        console.log(para);
        para.style.display="none"
    })
    btnst.addEventListener("click",function(){
        para.style.textDecoration="line-through";
    })
    todo.value="";
}





