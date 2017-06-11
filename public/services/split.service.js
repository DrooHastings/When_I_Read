myApp.service('splitService',['$http', function ($http){
  let vm = this;

  //globals
  vm.letterObjectArray = [];
  vm.counter = 0;
  vm.toysArray = [];


  //splits words into letters
  //sends letters to server to attach sounds
vm.splitArray = function(word){
  vm.letterObjectArray =[];
  var arrayOfLetters = word.split('');
  //sends letters to server to format as objects and add sounds
  $http({
    method: 'POST',
    url: '/Sounds',
    data: arrayOfLetters
  }).then(function(response){
    for (var i = 0; i < response.data.length; i++) {
      var letterObject = response.data[i];
      vm.letterObjectArray.push(letterObject);
      }
    });
  };//end split function

//gets toy words - should be refactored for DRY use id and type
vm.getToyWords = function(){
  vm.toysArray =[];
  $http({
    method: 'GET',
    url: '/Toys'
  }).then(function(response){
    for (var i = 0; i < response.data.length; i++) {
      vm.responseObj = response.data[i];
      vm.toysArray.push(vm.responseObj.word);
    }
      vm.splitArray(vm.toysArray[vm.counter]);
  });
};//end toys get

  //gets animal words - should be refactored for DRY use id and type
vm.getAnimals = function(){
  vm.toysArray = [];
  $http({
    method: 'GET',
    url: '/Animals'
  }).then(function(response){
    for (var i = 0; i < response.data.length; i++) {
      vm.responseObj = response.data[i];
      vm.toysArray.push(vm.responseObj.word);
    }
      vm.splitArray(vm.toysArray[vm.counter]);
  });
};//end animals get

  //gets my world words - should be refactored for DRY use id and type
vm.getWorld = function(){
  vm.toysArray = [];
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
};// end world get
}]);//end of service
