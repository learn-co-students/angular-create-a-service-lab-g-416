function MathService() {
    this.sum = function (num) {
 			return num.reduce(function (acc, currentValue) {
 				return acc + currentValue	
 			})
    };
}
 
angular
    .module('app')
    .service('MathService', MathService);