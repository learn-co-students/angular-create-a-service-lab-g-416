function MathService() {
    this.sum = arr => arr.reduce((cur, num) => cur + num)
}

angular
    .module('app')
    .service('MathService', MathService)