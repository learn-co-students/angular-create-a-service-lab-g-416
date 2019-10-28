function MathService(){
  this.sum = function(arr){
    return arr.reduce(function(sum,num){
      return sum + num
    })
  }
}

angular
  .module('app')
  .service('MathService', MathService)
