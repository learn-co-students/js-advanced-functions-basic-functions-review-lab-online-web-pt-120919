function saturdayFun(activity="roller-skate") {
 return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.` 
}

function wrapAdjective(flair="*") {
  return function(trait="special") {
    return `You are ${flair}${trait}${flair}!`
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

function actionApplyer(startingInt, functionsArray) {
  for (let i = 0; i < functionsArray.length; i++) {
    startingInt = functionsArray[i](startingInt)
  }
  return startingInt
}