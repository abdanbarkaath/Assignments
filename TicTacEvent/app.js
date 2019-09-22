var c1 = document.getElementById("col-0");
var c2 = document.getElementById("col-1");
var c3 = document.getElementById("col-2");
var c4 = document.getElementById("col-3");
var c5 = document.getElementById("col-4");
var c6 = document.getElementById("col-5");
var c7 = document.getElementById("col-6");
var c8 = document.getElementById("col-7");
var c9 = document.getElementById("col-8");
var p1 = 1;
var t1 = document.getElementById("tabl");
var x=[1,2,3,4,5,6,7,8,9];

t1.addEventListener("click",function(e){
    var text = e.target.id;
    var charvalue = text.charAt(4)
    console.log(charvalue); 
          function run(){ 
                 if (p1===1){
                     if(e.target.textContent === "X" ||e.target.textContent===""){
                     e.target.textContent = "X";
                     p1 = 0;
                 }
                 return "X"
                 } else {
                     if(e.target.textContent === "O" ||e.target.textContent===""){
                         e.target.textContent = "O";
                         p1 = 1;
                     }
                 return "O"
                 }   
             }
             var k = run();
             x[charvalue]=k;
             console.log(x);
             setTimeout(check,500);
})

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

