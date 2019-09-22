function concat(val){ 
        document.getElementById("result").value+=val 
} 
		

function solve() { 
        let total = document.getElementById("result").value 
        let answer = eval(total) 
        document.getElementById("result").value = answer; 
} 
		

function clean(){
		document.getElementById("result").value = "" 
} 