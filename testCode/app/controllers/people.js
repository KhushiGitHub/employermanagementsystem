angular.module('myApp').controller('PeopleController', PeopleController); 

	function PeopleController($scope, $route, $routeParams, $http){
	var vm = this;
	var id = $routeParams.id;
	
	//alert(id);

	$http.get('http://localhost:3001/companies/' + id ).then(function(response){
		vm.company = response.data;
	});

	$http.get('http://localhost:3001/companies/' + id + '/people').then(function(response){
		vm.people = response.data;
	});

	vm.addPerson = function(){
		var postData = {
			name: vm.personName,
			companyId: vm.company._id,
			email: vm.personEmail
			
		};
		console.log(postData);
		// var config = {
  //               headers : {
  //                   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
  //               }
  //           }
		//if(vm.addForm.$valid){
			$http.post('http://localhost:3001/person/', postData, config).then(function(response, status, headers, config){
				// alert('Submitted');
				$scope.postData = response;
				console.log(response)
				if(response.status === 200){
					$route.reload();

					console.log("Submitted")
				}
			}).then(function(response,status,header, config){
				$scope.ResponseDetails = "Data:" + response +
				"<hr />status: " + status +
				"<hr />headers: " + header +
				"<hr />config: " + config;
			});
		//}
		// else{
		// 	console.log("Form not valid!")
		// };
	}


}