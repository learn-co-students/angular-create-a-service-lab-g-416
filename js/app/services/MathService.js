function MathService() {
  this.sum = function (arr) {
    var sum = 0
    arr.map(num => sum += num)
    return sum
  }
}

angular
  .module('app')
  .service('MathService', MathService);
