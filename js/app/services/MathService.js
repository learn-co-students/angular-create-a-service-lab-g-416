// Your code here!
function MathService() {
  this.sum = function sum(array) {
    return array.reduce((a, b) => a + b, 0);
  }
}

angular
    .module('app')
    .service('MathService', MathService);
