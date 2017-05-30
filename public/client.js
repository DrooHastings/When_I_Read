var myApp = angular.module('myApp', ['ngRoute']);
console.log('js/ng');

vm = this;

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/partials/dashboard.html',
      controller: 'DashboardController as DC'
    })
    .when('/toys', {
      templateUrl:'views/partials/toys.html',
      controller: 'ToyController as TC'
    })
    .otherwise({
      redirectTo:'/'
    });
}]);
