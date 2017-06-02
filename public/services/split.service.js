myApp.service('splitService',['$http', function ($http){
  let vm = this;

  vm.letterObjectArray = [];
  vm.counter = -1;
  // vm.words = [];

  vm.toyClick = function () {
    console.log('toy click in service');
    vm.counter = vm.counter + 1;
    vm.letterObjectArray = 0;
    vm.getToyWords();
    console.log('counter',vm.counter);
  };

 vm.splitArray = function(word){
   var arrayOfLetters = word.split('');
   console.log('arrayOfLetters', arrayOfLetters);
   for (var i = 0; i < arrayOfLetters.length; i++) {
    var letterObject = {
        letter: arrayOfLetters[i],
        sound: ' '
        };
        console.log('letterObject', letterObject);
        var newArray = [];
        newArray.push(letterObject);

     vm.letterObjectArray.push(newArray);
    //  console.log('letterObjectArray', vm.letterObjectArray);
   }//end for
 // for (var i = 0; i < word.length; i++) {
 //   var wordToSplit = array[i];//increment w/ counter?
 //   var newWord = wordToSplit.split('');
 //   console.log('newWord', newWord);
 //   vm.toWordObject(newWord);
   };
// };

// vm.splitArray = function(word){
//   console.log('in splitArray', word);
//   // var letterArray= array.split('');
//   // console.log('letterArray', letterArray);
//   for (var i = 0; i < word.length; i++) {
//     var letterObject = {
//         letter: word[i],
//         sound: ' '
//         };
//         console.log('letterObject', letterObject);
//
//      vm.poopArray.push(letterObject);
//      console.log('letterObjectArray', vm.letterObjectArray);
//    }//end for
//   // var wordToSplit = array[vm.counter];
//   // var newWordArray = wordToSplit.split('');
//   // console.log('newWordArray', newWordArray);
//   // vm.toWordObject(newWordArray);
// };

//  vm.toWordObject = function(word){
//   //  console.log('wordObject array', array);
//  // convert array indeces to objects
//  for (var i = 0; i < word.length; i++) {
//    var letterObject = {
//        letter: word[i],
//        sound: ' '
//        };
//       //  console.log('letterObject', letterObject);
//
//     vm.letterObjectArray.push(letterObject);
//     console.log('letterObjectArray', vm.letterObjectArray);
//   }//end for
// };

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
    vm.splitArray(vm.toysArray[vm.counter]);
    // vm.splitArray(toyWords);
    // console.log('this is what is passed to splitArray', toyWords);
    // vm.incrementCount(vm.counter);
    // console.log('toy words length', toyWords.length);
});



};




}]);

//on button click icrement counter
// attach a function call to ng-repeat?
//toyWords[counter] should be saved to variable that is being ng-repeated in
// toys.html
