// Your code here

function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

let mondayWork= function(item = "go to the office"){
    return `This Monday, I will ${item}.`
}

let wrapAdjective = function(style="*"){
    return function(adjective = "special"){
        return `You are ${style}${adjective}${style}!`
    }
}

const Calculator = {
    add: function(a,b){
        return a + b
    },
    subtract: function(a,b){
        return a - b
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a/b
    }
}

let actionApplyer = function(start, arr){
    let a = start

  for (let i = 0; i < arr.length; i++ ){
    a = arr[i](a)
  }

  return a
}