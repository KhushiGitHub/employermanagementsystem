angular.module('myApp').controller('PersonController', PersonController); 

	function PersonController($scope, $route, $routeParams, $http){
	var vm = this;
	var id = $routeParams.id;
	
	//alert(id)
	$http.get('http://localhost:3001/companies/' + id ).then(function(response){
		vm.company = response.data;
	});

	$http.get('http://localhost:3001/person/' + id).then(function(response){
		console.log(id);
		$scope.vm.person = response.data;
		console.log(vm.person)
	});
}