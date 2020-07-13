// Your code here
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

saturdayFun()

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(s = "*") {
    
    return function(adj = "special") {
        return `You are ${s}${adj}${s}!`
    }
    
}

const Calculator = {
    add: function(a,b){
       return  a + b
    }, 
    subtract: function(a,b) {
        return a -b 
    }, 
    multiply: function(a,b) {
        return a * b
    }, 
    divide: function(a,b) {
        return a / b
    }
}

function actionApplyer(start = 0, arr) {
    let a = start

    for(let i = 0; i < arr.length; i++) {
    a = arr[i](a)
    }
    return a
}