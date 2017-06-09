myApp.controller('DashboardController',['$http', function($http){
  console.log('made it to the DashboardController');
  let vm = this;

  vm.addWord = function(){
    console.log('Word in:', vm.wordIn);
    var wordToSend = {data: vm.wordIn.toUpperCase()};


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
