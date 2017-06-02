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
   for (var i = 0; i < arrayOfLetters.length; i++) {
    var letterObject = {
        letter: arrayOfLetters[i],
        sound: ' '
        };
        console.log('letterObject', letterObject);
        vm.letterObjectArray.push(letterObject);
    }//end for
      // console.log(letterObjectArray);
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

// vm.boston = function (object){
//
//   console.log('reached boston with', vm.toysArray);
//   // vm.counter = vm.counter + 1;
//   console.log('counter isssss:', vm.counter);
//   console.log('toysArray incremented on click', vm.toysArray[vm.counter]);
//   // vm.splitArray(vm.toysArray[vm.counter]);
//
// };



}]);

//on button click icrement counter
// attach a function call to ng-repeat?
//toyWords[counter] should be saved to variable that is being ng-repeated in
// toys.html
