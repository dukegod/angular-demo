var helloapp = angular.module('testApp',[]);

helloapp.controller('hello',function($scope){

})

helloapp.controller('time',function($scope,$timeout){
	var update= function(){
		$scope.clock= new Date();
		$timeout(function(){
			update();
		},1000);
	}
	update();
})

helloapp.controller('click',function($scope){
	$scope.num= 5;
	$scope.add= function(n){
		$scope.num += n;
	};
	$scope.min= function(n){
		$scope.num -= n;
	}
})