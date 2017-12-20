function MathService() {
  this.sum = (nums) => {
    return nums.reduce((sum, num) => sum + num, 0);
  }
}

angular
  .module("app")
  .service("MathService", MathService)
