myApp.service('splitService',['$http', function ($http){
  let vm = this;

  vm.letterObjectArray = [];
  vm.counter = 0;

  vm.incrementCount = function () {
    vm.counter = vm.counter + 1;
    console.log('counter',vm.counter);


  };

//  vm.splitArray = function(array){
//  for (var i = 0; i < array.length; i++) {
//    var wordToSplit = array[i];//increment w/ counter?
//    var newWord = wordToSplit.split('');
//    console.log('newWord', newWord);
//    vm.toWordObject(newWord);
//    }
// };

vm.splitArray = function(array){
  var wordToSplit = array[vm.counter];
  var newWordArray = wordToSplit.split('');
  console.log('newWordArray', newWordArray);
  vm.toWordObject(newWordArray);

};

 vm.toWordObject = function(word){
  //  console.log('wordObject array', array);
 // convert array indeces to objects
 for (var i = 0; i < word.length; i++) {
   var letterObject = {
       letter: word[i],
       sound: ' '
       };
      //  console.log('letterObject', letterObject);
    vm.letterObjectArray.push(letterObject);
    console.log('letterObjectArray', vm.letterObjectArray);
  }//end for
};

vm.getToyWords = function(){
  // console.log('hit getToyWords');
  // vm.letterObjectArray =[];

  $http({
    method: 'GET',
    url: '/Toys'
  }).then(function(response){
    tempArray = response.data;

    tempArray = tempArray[0];
    console.log('tempArray', tempArray);
    let toyWords = tempArray.words;

    vm.splitArray(toyWords);
    console.log('this is what is passed to splitArray', toyWords);
    vm.incrementCount(vm.counter);
    console.log('toy words length', toyWords.length);
});



};




}]);

//on button click icrement counter
// attach a function call to ng-repeat?
//toyWords[counter] should be saved to variable that is being ng-repeated in
// toys.html
