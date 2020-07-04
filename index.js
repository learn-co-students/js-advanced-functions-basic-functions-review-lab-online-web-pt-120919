// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = "*") {
    return function(person = "special") {
        return `You are ${string}${person}${string}!`
    }
}
let encouragingPromptFunction = wrapAdjective("!!!")

let Calculator = { 
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

function actionApplyer(integer, arrayOfFunctions) {
    arrayOfFunctions.forEach(myFunction => {
        integer = myFunction(integer)
    });
    return integer
}
