angular.module('myApp', ['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/companies.html',
        controller: 'MyController',
        controllerAs: 'vm'
    }).when('/companies/:id', {
        templateUrl: 'views/companyDetails.html',
        controller: 'CompanyController',
        controllerAs: 'vm'
    }).when('/companies/:id/people', {
    	templateUrl: 'views/people.html',
    	controller: 'PeopleController',
    	controllerAs: 'vm'
    }).when('/person',{
    	templateUrl: 'views/people.html',
    	controller: 'PeopleController',
    	controllerAs: 'vm'
    }).when('/person/:id', {
    	templateUrl: 'views/person.html',
    	controller: 'PersonController',
    	controllerAs: 'vm'
    });
};