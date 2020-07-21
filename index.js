// Your code here
function saturdayFun(activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair ="*"){
    return function( word = "special"){
        return `You are ${flair}${word}${flair}!`
    }
}

let Calculator = {
    add: function(a,b){
        return a + b;
    },
    subtract: function(a,b){
        return a - b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    }      
    
}

let actionApplyer = function(start, array){
    let x = start

    for (let i= 0; i < array.length; i++ ){
        x = array[i](x)
    }
    return x 
}