function MathService() {
    this.sum = function(arr) {
        return arr.reduce((total, el) => (total += el), 0);
    };
}

angular.module("app").service("MathService", MathService);
