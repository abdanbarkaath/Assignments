var c1 = document.getElementById("col-1");
var c2 = document.getElementById("col-2");
var c3 = document.getElementById("col-3");
var c4 = document.getElementById("col-4");
var c5 = document.getElementById("col-5");
var c6 = document.getElementById("col-6");
var c7 = document.getElementById("col-7");
var c8 = document.getElementById("col-8");
var c9 = document.getElementById("col-9");
var p1 = 1;
var x=[1,2,3,4,5,6,7,8,9];

c1.addEventListener("click",function(){
    function run(){ 
        if (p1===1){
            if(c1.textContent === "X" ||c1.textContent===""){
            c1.textContent = "X";
            p1 = 0;
        }
        return "X"
        } else {
            if(c1.textContent === "O" ||c1.textContent===""){
                c1.textContent = "O";
                p1 = 1;
            }
        return "O"
        }   
    }
    var k = run();
    x[0]=k;
    console.log(x);
    setTimeout(check,500);
})
c2.addEventListener("click",function(){
    function run(){ 
        if (p1===1){
            if(c2.textContent === "X" ||c2.textContent===""){
            c2.textContent = "X";
            p1 = 0;
        }
        return "X"
        } else {
            if(c2.textContent === "O" ||c2.textContent===""){
                c2.textContent = "O";
                p1 = 1;
            }
            return "O"
        }   
    }
    var k = run();
    x[1]=k;
    console.log(x);
    setTimeout(check,500);
})
c3.addEventListener("click",function(){
    function run(){ 
        if (p1===1){
            if(c3.textContent === "X" ||c3.textContent===""){
            c3.textContent = "X";
            p1 = 0;
        }
        return "X"
        } else {
            if(c3.textContent === "O" ||c3.textContent===""){
                c3.textContent = "O";
                p1 = 1;
            }
            return "O"
        }   
    }
    var k = run();
    x[2]=k;
    console.log(x);
    setTimeout(check,500);
})
c4.addEventListener("click",function(){
    function run(){ 
        if (p1===1){
            if(c4.textContent === "X" ||c4.textContent===""){
            c4.textContent = "X";
            p1 = 0;
        }
        return "X"
        } else {
            if(c4.textContent === "O" ||c4.textContent===""){
                c4.textContent = "O";
                p1 = 1;
            }
            return "O"
        }   
    }
    var k = run();
    x[3]=k;
    console.log(x);
    setTimeout(check,500);
})
c5.addEventListener("click",function(){
    function run(){ 
        if (p1===1){
            if(c5.textContent === "X" ||c5.textContent===""){
            c5.textContent = "X";
            p1 = 0;
        }
        return "X"
        } else {
            if(c5.textContent === "O" ||c5.textContent===""){
                c5.textContent = "O";
                p1 = 1;
            }
            return "O"
        }   
    }
    var k = run();
    x[4]=k;
    console.log(x);
    setTimeout(check,500);
})

c6.addEventListener("click",function(){
    function run(){ 
        if (p1===1){
            if(c6.textContent === "X" ||c6.textContent===""){
            c6.textContent = "X";
            p1 = 0;
        }
        return "X"
        } else {
            if(c6.textContent === "O" ||c6.textContent===""){
                c6.textContent = "O";
                p1 = 1;
            }
            return "O"
        }   
    }
    var k = run();
    x[5]=k;
    console.log(x);
    setTimeout(check,500);
})
c7.addEventListener("click",function(){
    function run(){ 
        if (p1===1){
            if(c7.textContent === "X" ||c7.textContent===""){
            c7.textContent = "X";
            p1 = 0;
        }
        return "X"
        } else {
            if(c7.textContent === "O" ||c7.textContent===""){
                c7.textContent = "O";
                p1 = 1;
            }
            return "O"
        }   
    }
    var k = run();
    x[6]=k;
    console.log(x);    
    setTimeout(check,500);
})
c8.addEventListener("click",function(){
    function run(){ 
        if (p1===1){
            if(c8.textContent === "X" ||c8.textContent===""){
            c8.textContent = "X";
            p1 = 0;
        }
        return "X"
        } else {
            if(c8.textContent === "O" ||c8.textContent===""){
                c8.textContent = "O";
                p1 = 1;
            }
            return "O"
        }   
    }
    var k = run();
    x[7]=k;
    console.log(x);
    setTimeout(check,500);
})
c9.addEventListener("click",function(){
    function run(){ 
        if (p1===1){
            if(c9.textContent === "X" ||c9.textContent===""){
            c9.textContent = "X";
            p1 = 0;
        }
        return "X"
        } else {
            if(c9.textContent === "O" ||c9.textContent===""){
                c9.textContent = "O";
                p1 = 1;
            }
            return "O"
        }   
    }
    var k = run();
    x[8]=k;
    console.log(x);
    setTimeout(check,500);
})


// function jump(){ 
//     if (p1===1){
//         if(this.textContent === "X" ||this.textContent===""){
//         this.textContent = "X";
//         p1 = 0;
//         return "X"
//         }
//     } else {
//         if(this.textContent === "O" ||this.textContent===""){
//             this.textContent = "O";
//             p1 = 1;
//             return "Y"
//         }
//     }   
// }


function check(){
    if(x[0]===x[1]&&x[1]===x[2]){
        if(p1==0){
            alert("player 1 won")
        }else{
            alert("player 2 won")
        }
    }
    else if(x[0]===x[3]&&x[3]===x[6]){
        if(p1==0){
            alert("player 1 won")
        }else{
            alert("player 2 won")
        }
    }
    else if(x[3]===x[4]&&x[4]===x[5]){
        if(p1==0){
            alert("player 1 won")
        }else{
            alert("player 2 won")
        }
    }
    else if(x[6]===x[7]&&x[7]===x[8]){
        if(p1==0){
            alert("player 1 won")
        }else{
            alert("player 2 won")
        }
    }
    else if(x[1]===x[4]&&x[4]===x[7]){
        if(p1==0){
            alert("player 1 won")
        }else{
            alert("player 2 won")
        }
    }
    else if(x[2]===x[5]&&x[5]===x[8]){
        if(p1==0){
            alert("player 1 won")
        }else{
            alert("player 2 won")
        }
    }
    else if(x[0]===x[4]&&x[4]===x[8]){
        if(p1==0){
            alert("player 1 won")
        }else{
            alert("player 2 won")
        }
    }
    else if(x[2]===x[4]&&x[4]===x[6]){
        if(p1==0){
            alert("player 1 won")
        }else{
            alert("player 2 won")
        }
    }
}

