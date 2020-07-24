// Your code here
function saturdayFun(activity= "roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(string= "go to the office") {
    return `This Monday, I will ${string}.`
};

function wrapAdjective(parameter= "*") {
    return function(string= "special") {
        return `You are ${parameter}${string}${parameter}!`
    }
}; wrapAdjective("||")("dedicated programmer")

let Calculator = {
    add : function() {
        return 1 + 3
    },
    subtract : function() {
        return 1 - 3
    },
    multiply : function() {
        return 1 * 3
    },
    divide : function() {
        return 10 / 5
    }
};

function actionApplyer(integer, array) {
    let num = integer
    for(let i = 0; i < array.length; i++) {
        num = array[i](num)
    }
    return num
}; 

