// Your code here!
function MathService(){
	this.sum = function(array){
		return array.reduce( (acc, cv) => cv + acc)
	}

}

angular 
	.module('app')
	.service('MathService', MathService)