var btn = document.getElementById("one");
var buttons = document.getElementsByTagName("button");
// var anc = document.getElementsByTagName("a")[1];
// var anc = document.getElementsByTagName("a")[2];

// btn.addEventListener("click",function(){
//     for(var i=1;i<100;i++){
//         var but = document.createElement("button");
//         var x = document.getElementById("btn")
//         but.textContent=i;
//         but.value=i;
//         x.appendChild(but);
//         but.addEventListener("click",function(){
//             console.log();
//             console.log("hello");
//         })
//     }
// })

for(var i=1;i<buttons.length;i++){
    // var x = i
    // buttons[i].addEventListener("click",function(){  
        function run(){
            var x = i;
            console.log(x);
            buttons[x].addEventListener("click",function(){
                alert(x);
            })
        }
        run();
        
        // function val(i){
        //     var x=i;
        //     function display(){
        //     buttons[i].addEventListener("click",function(){
        //     console.log(buttons[i]);
        //     });
        //     }
        //     display();
        // }
        // val(i)
    // }
        // add();
// });
}

