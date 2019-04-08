// Your code here!
function MathService() {
  this.sum = function(numbers) {
    return numbers.reduce((memo, total) => memo + total)
  }
}

angular
  .module('app')
  .service('MathService', MathService);