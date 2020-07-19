// Your code here
function saturdayFun(string="roller-skate") {
    return `This Saturday, I want to ${string}!`

}

function mondayWork(string="go to Miami") {
    return `This Monday, I will ${string}.`
}

//function wrapAdjective(string="!!!") {
    //return innerFunction (adjective="special") {
        //return `You are ${adjective} ${string}!`
    //}
//}

let wrapAdjective = function(string="!!!") {
    return function(adjective="like everyone else") {
      return `You are ${adjective}${string}!`
    }
  }

  let Calc = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b;
    }
  }

  let actionApplyer = function(start, array) {
    let a = start
  
    for (let i = 0; i < array.length; i++ ){
      a = array[i](a)
    }
  
    return a
  }



