let random = Math.random()
console.log(random)
let a = prompt("Enter First no. : ")
let c = prompt("Enter Operation : ")
let b = prompt("Enter second no. : ")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "*"
}
if(random>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}else{
    c - obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}


