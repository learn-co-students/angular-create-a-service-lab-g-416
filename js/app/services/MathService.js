function MathService() {
    this.sum = function(array){
        return array.reduce((a, b) => {
            return a + b;
        });
    };
}

angular
    .module('app')
    .service('MathService', MathService)