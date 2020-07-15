// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(task = "go to the office"){
    return `This Monday, I will ${task}.`
}

let encouragingPromptFunction = wrapAdjective("!!!")
function wrapAdjective(param1='*'){
    return function(param2="special"){
        return `You are ${param1}${param2}${param1}!`
    }
}

let Calculator = {
    add: () =>  1 + 3, //function(){return 1 + 3}
    subtract: () =>  1 - 3,
    multiply: () => 1 * 3,
    divide: () => 10 / 5, 
};

function actionApplyer(int, arrOfFunctions){
    if (arrOfFunctions.length == 0) {
        return int;
    }

    return arrOfFunctions.reduce((accumulator, fn) => {
        return fn(accumulator)
    }, int);

    // for(let f of arrOfFunctions) {
    //     int = f(int)
    // }

    // return int
}
