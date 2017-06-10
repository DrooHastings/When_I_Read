myApp.controller('DashboardController',['$http', function($http){
  console.log('made it to the DashboardController');
  let vm = this;

  vm.addWord = function(){
    console.log('Word in:', vm.wordIn);
    vm.wordIn = vm.wordIn.toUpperCase();
    console.log('vm.wordIn', vm.wordIn);
    var wordToSend = {word: vm.wordIn};


    $http ({
          method: 'POST',
          url: '/World',
          data: wordToSend
        }).then(function(response){
          console.log('this is response', response);
        });
        vm.wordIn = '';
  };

}]);
