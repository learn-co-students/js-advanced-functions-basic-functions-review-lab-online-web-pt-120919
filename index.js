// Your code here
function saturdayFun(verb = "roller-skate"){
    return `This Saturday, I want to ${verb}!`
}
saturdayFun()

function mondayWork(work = "go to the office"){
return `This Monday, I will ${work}.`
}
mondayWork()

function wrapAdjective(style = "*"){
     
   return function(param = "special"){
    
    return `You are ${style}${param}${style}!`
    }
}

const Calculator = { add: function add(num1,num2){
return num1 + num2}, subtract: function subtract(num1, num2){
   return num1 - num2
}, multiply: function multiply(num1, num2){
    return num1  * num2
}, divide: function divide(num1, num2){
    return num1 / num2
}
}


function actionApplyer(startInt, array){
 
    for(let i = 0; i < array.length; i++){
  startInt = array[i](startInt)
    }
    return startInt
}

