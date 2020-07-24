// Your code here
function saturdayFun(word = 'roller-skate'){
    return `This Saturday, I want to ${word}!`
}

let mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = '*'){
    return function(word = 'special'){
        return `You are ${flair}${word}${flair}!`
    }
}

let Calculator = {
    add: function(){
      return 1 + 3
    },
    subtract: function(){
        return 1 - 3
    },
    multiply: function(){
        return 1 * 3
    },
    divide: function(){
        return 10 / 5
    }
}

function actionApplyer(startingInteger, array){
 let empty = []
    if (array.length === 0){
    return startingInteger
    
  } else{
    
    for(let i = 0; i < array.length; i++) {
        startingInteger = array[i](startingInteger)
    }
    return startingInteger
  }
  



}