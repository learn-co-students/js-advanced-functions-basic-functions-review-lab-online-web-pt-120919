// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
}

function actionApplyer(integer, array) {
    let newInt = integer

    for (let i = 0; i < array.length; i++ ) {
        newInt = array[i](newInt)
    
    }
    return newInt
}