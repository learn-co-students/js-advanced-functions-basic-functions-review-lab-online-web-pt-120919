// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

saturdayFun("bathe my dog")

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

mondayWork()

function wrapAdjective(symbol="*") {
  return function(adjective="special") {
   return `You are ${symbol}${adjective}${symbol}!`
  }
}

const Calculator = {
  add(num1, num2) {
    return num1 + num2
  },

  subtract(num1, num2) {
    return num1 - num2
  },

  multiply(num1, num2) {
    return num1 * num2
  },

  divide(num1, num2) {
    return num1 / num2
  }
}

function actionApplyer(startInt, array) {
  let int = startInt

  for (let i = 0; i < array.length; i++){
    int = array[i](int)
  }

  return int 
}
