function saturdayFun(activity = "roller-skate"){
    return "This Saturday, I want to " + activity + "!"
}

function mondayWork(activity = "go to the office"){
    return  "This Monday, I will " + activity + "."
}

function wrapAdjective(punctuation = "*"){
    return function(adj = "special"){
        return "You are " + punctuation + adj + punctuation + "!"
    }
}

let Calculator = {
    add: function (a, b){
        return a + b;
    },

    subtract: function (a, b){
        return a - b;
    },

    multiply: function (a, b){
        return a * b;
    },

    divide: function (a, b){
        return a / b;
    }
}

function actionApplyer(int, arr){
    let total = int
    for (let index in arr){
        total = arr[index](total)
    }
    return total
}