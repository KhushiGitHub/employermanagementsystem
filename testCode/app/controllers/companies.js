//'use strict';

angular.module('myApp').controller('MyController', MyController);

// sigfigApp.controller('companiesCtrl', companiesCtrl);

    function MyController($scope, $http, $route){

    var vm = this;
    $http.get('http://localhost:3001/companies?count=10').then(function(response){
         vm.companies = response.data;
     });

    vm.addCompany = function(){
		var postData = {
			name: vm.companyName,
			address: vm.companyAddress,
			revenue: vm.companyRevenue,
			phone: vm.companyPhone
		}
		// var config = {
  //               headers : {
  //                   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
  //               }
  //           }
		//if(vm.addForm.$valid){
			$http.post('http://localhost:3001/companies/', postData, config).then(function(response, status, headers, config){
				$scope.postData = response;

				if(response.status === 200){
					$route.reload();
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


    









// $http({
//     method: "POST",
//     url: "http://localhost:3001/companies",
//    // data: JSON.stringify(myData),
//     withCredentials: true,
//     headers: {
        
//         'Content-Type': 'application/json; charset=utf-8',
//        //'Authorization': 'Basic bashe64usename:password',
//         'Accept': 'application/json, text/plain, */*'
//         //"X-Login-Ajax-call": 'true'
// },
//     data:  $.param({
//         name: $scope.name,
//         address: $scope.address,
//         revenue: $scope.revenue,
//         phone: $scope.phone
// }).success(function successCallbak(data, status, headers, config) {
//     alert("Data submitted successfully!")
// }).error(function errorCallback(data, status, headers, config){

// });


// $http.POST('http://localhost:3001/companies', $scope.formModel)
// .success(function successCallbak(data) {
//     //$scope.myData = data.data;
//     alert("Data submitted Successfully!");

//     }).error(function errorCallback(data)
//     {    
//     console.log("Something went wrong!!!")
//     });
