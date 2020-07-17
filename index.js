function saturdayFun(phrase = "roller-skate") {
    return `This Saturday, I want to ${phrase}!`
}

let mondayWork = function(phrase = "go to the office") {
    return `This Monday, I will ${phrase}.`
}

function wrapAdjective(symbol = "*"){
    return function(firstWord = "special") {
        return `You are ${symbol}${firstWord}${symbol}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return a + b
    },

    subtract: function(a, b) {
        return a - b
    },

    multiply: function(a, b) {
        return a * b
    },

    divide: function(a, b) {
        return a / b
    }

}

function actionApplyer(int, arr) {
    for(let i = 0; i < arr.length; i++) {
        int = arr[i](int)
    }
    return int
}
