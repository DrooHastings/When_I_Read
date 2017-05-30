var myApp = angular.module('myApp', ['ngRoute']);

vm = this;

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/dashboard.html',
      controller: 'DashboardController as DC'
    })
    .when('/toys', {
      templateUrl: 'partials/toys.html',
      controller: 'ToyController as TC'
    })
    .otherwise({
      redirectTo:'/'
    });
}]);
