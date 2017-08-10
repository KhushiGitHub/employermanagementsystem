angular.module('myApp').factory('companyDataFactory', companyDataFactory);

function companyDataFactory($http){
	return{
		companylist: companylist,
		companyDisplay: companyDisplay
	};

	function companylist()
	{
		return $http.get('http://localhost:3001/companies/').then(complete).catch(failed);
	}

	function companyDisplay(id)
	{
		return $http.get('http://localhost:3001/companies/' + id).then(complete).catch(failed);
	}

	function complete(response)
	{
		return response.data;
	}

	function failed(error)
	{
		console.log(error.statusText);
	}
}