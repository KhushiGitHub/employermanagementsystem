angular.module('myApp').controller('CompanyController', CompanyController); 

	function CompanyController($scope, $route, $routeParams, $http){
	var vm = this;
	var id = $routeParams.id;
	//alert(id);

	$http.get('http://localhost:3001/companies/' + id).then(function(response){
		vm.company = response.data
	});

	vm.editCompany = function(){
		var putData = {
			name: vm.company.name,
			address: vm.company.address,
			revenue: vm.company.revenue,
			phone: vm.company.phone
		};
		$http.put('http://localhost:3001/companies/' + id, putData, config).then(function(response, status, headers, config){
				console.log(putData);
				ServerResponse = response.data;
				console.log(status)
				if(response.status === 200){
					$route.reload();
				}
			}).then(function(response,status,header, config){
				$scope.ResponseDetails = "Data:" + response +
				"<hr />status: " + status +
				"<hr />headers: " + header +
				"<hr />config: " + config;
		});
	};
}