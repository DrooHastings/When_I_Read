myApp.service('splitService',['$http', function ($http){
  let vm = this;

  // var letterObjectArray = [];
  vm.letterObjectArray = [];
  vm.counter = 0;
  vm.toysArray = [];



vm.splitArray = function(word){
  vm.letterObjectArray =[];
  console.log('word', word);
  var arrayOfLetters = word.split('');
  console.log('arrayOfLetters', arrayOfLetters);

  $http({
    method: 'POST',
    url: '/Sounds',
    data: arrayOfLetters
  }).then(function(response){
    console.log('sounds response from server', response.data);
    for (var i = 0; i < response.data.length; i++) {
      var letterObject = response.data[i];
      vm.letterObjectArray.push(letterObject);
    }

    });
  };

vm.getToyWords = function(){
  console.log('hit getToyWords');
  vm.toysArray =[];
  $http({
    method: 'GET',
    url: '/Toys'
  }).then(function(response){
    console.log('response.data', response.data);
    for (var i = 0; i < response.data.length; i++) {
      vm.responseObj = response.data[i];
      vm.toysArray.push(vm.responseObj.word);
    }

    vm.splitArray(vm.toysArray[vm.counter]);
  });

  };

vm.getAnimals = function(){
  console.log('hit getAnimals');
  vm.toysArray = [];

  $http({
    method: 'GET',
    url: '/Animals'
  }).then(function(response){
    console.log('response.data', response.data);
    for (var i = 0; i < response.data.length; i++) {
      vm.responseObj = response.data[i];
      vm.toysArray.push(vm.responseObj.word);
    }

    vm.splitArray(vm.toysArray[vm.counter]);
  });

  };

vm.getWorld = function(){
  vm.toysArray = [];

  console.log('hit getWorld');
  $http({
    method: 'GET',
    url: '/world'
  }).then(function(response){
    console.log('response.data', response.data);
    for (var i = 0; i < response.data.length; i++) {
      vm.responseObj = response.data[i];
      vm.toysArray.push(vm.responseObj.word);
    }

    vm.splitArray(vm.toysArray[vm.counter]);
  });

};





}]);
