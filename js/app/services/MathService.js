angular
  .module('app')
  .service('MathService', function () {
    this.sum = function (array) {
      return array.reduce(function (value, currentValue) {
        return value + currentValue
      })
    }
  })
