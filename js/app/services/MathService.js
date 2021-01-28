// Your code here!
function MathService(){
    this.sum = (array)=>{
        return array.reduce((a, b) => (a + b));
    }
}

angular
    .module('app')
    .service('MathService', MathService)