myApp.controller('DashboardController',['$http', function($http){
  let vm = this;

  //adds word to db
  vm.addWord = function(){
    vm.wordIn = vm.wordIn.toUpperCase();
    var wordToSend = {word: vm.wordIn};
      $http ({
          method: 'POST',
          url: '/World',
          data: wordToSend
        }).then(function(response){
        });
        vm.wordIn = '';
  };

}]);
