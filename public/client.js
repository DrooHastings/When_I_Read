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
    .when('/animals', {
      templateUrl:'views/partials/animals.html',
      controller: 'AnimalController as AC'
    })
    .when('/world', {
      templateUrl:'views/partials/world.html',
      controller: 'WorldController as WC'
    })
    .otherwise({
      redirectTo:'/'
    });//end config
}]);//end module
