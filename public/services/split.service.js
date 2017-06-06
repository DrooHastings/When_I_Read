myApp.service('splitService',['$http', function ($http){
  let vm = this;

  // var letterObjectArray = [];
  vm.letterObjectArray = [];
  vm.counter = 0;
  vm.toysArray = [];

  // vm.toyClick = function () {
  //   console.log('toy click in service');
  //   vm.counter = vm.counter + 1;
  //   // letterObjectArray = [];
  //   // vm.getToyWords();
  //   console.log('counter',vm.counter);
  // };

vm.splitArray = function(word){
  vm.letterObjectArray =[];
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
  // vm.letterObjectArray =[];
  $http({
    method: 'GET',
    url: '/Toys'
  }).then(function(response){
    console.log('response.data', response.data[0]);
    vm.responseObj = response.data[0];
    console.log('vm.responseObj.words',vm.responseObj.words);
    vm.toysArray = vm.responseObj.words;
    console.log(vm.toysArray);
    console.log('counter in get func', vm.counter);

    vm.toysArray = vm.responseObj.words;
    vm.splitArray(vm.toysArray[vm.counter]);
    // vm.splitArray(vm.toysArray);
  });
  // return vm.toysArray;
};

vm.getAnimals = function(){
  console.log('hit getAnimals');
  // vm.letterObjectArray =[];

  $http({
    method: 'GET',
    url: '/Animals'
  }).then(function(response){
    console.log('response.data', response.data[0]);
    vm.responseObj = response.data[0];
    console.log('vm.responseObj.words',vm.responseObj.words);
    vm.toysArray = vm.responseObj.words;
    console.log(vm.toysArray);
    console.log('counter in get func', vm.counter);

    vm.toysArray = vm.responseObj.words;
    vm.splitArray(vm.toysArray[vm.counter]);
  });
  // return vm.toysArray;
};





}]);
