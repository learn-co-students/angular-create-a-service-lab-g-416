function TotalController(MathService) {
    this.sum = MathService.sum([
        2,
        889
    ])
}

angular
    .module('app')
    .controller('TotalController', TotalController);
