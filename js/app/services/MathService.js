// Your code here!
function MathService(){
	this.sum = function(array){
		return array.reduce( (cv, acc) => cv + acc)
	}

}

angular 
	.module('app')
	.service('MathService', MathService)