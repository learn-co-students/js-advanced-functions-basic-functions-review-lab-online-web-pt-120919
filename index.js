// Your code here
function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`
  }
  function mondayWork(string = "go to the office") {
    return `This Monday, I will ${string}.`
  }
  const wrapAdjective = (hl = "*") => {
    return function (adj = "special") {
        return `You are ${hl}${adj}${hl}!`
    }
}
let Calculator = {
    add: function(a,b){
        return a+b
    },
    subtract: function(a,b){
        return a-b
    },
    multiply: function(a,b){
        return a*b
    },
    divide: function(a,b){
        return a/b
    }
}
function actionApplyer(start, array) {
    for (let i = 0; i < array.length; i++){
        start = array[i](start)
    }
    return start
}