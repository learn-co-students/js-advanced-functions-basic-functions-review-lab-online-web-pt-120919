function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}
function wrapAdjective(visualString = '*') {
  return function inner(returnVal = 'special') {
    return `You are ${visualString}${returnVal}${visualString}!`
  }
}

let Calculator = {
  add: function(num1, num2){return num1 + num2},
  subtract: function(num1, num2){return num1 - num2},
  multiply: function(num1, num2){return num1 * num2},
  divide: function(num1, num2){return num1 / num2}
}

function actionApplyer(numIndex, arr) {
  let newNum = numIndex
  for (let i = 0; i < arr.length; i++) {
    newNum = arr[i](newNum)
  }
  return newNum
}