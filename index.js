function saturdayFun(activiy="roller-skate"){
    return `This Saturday, I want to ${activiy}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){
    return function(adj = "special"){
        return `You are ${flair}${adj}${flair}!`
    }
}

const Calculator = {
    "add": function(a, b) { return a + b },
    "subtract": function(a, b) { return a - b },
    "multiply": function(a, b) { return a * b },
    "divide": function(a, b) { return a / b }
}

function actionApplyer(integer, array){
    let int = integer

    for (const fn of array ){
        int = fn(int)
    }

    return int
}