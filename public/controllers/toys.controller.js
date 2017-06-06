myApp.controller('ToyController', ['splitService', function(splitService){
  console.log('made it to the ToysController');
  let vm = this;

  splitService.getToyWords();
  vm.word = splitService.toysArray[splitService.counter];

  vm.toyLetters = splitService.letterObjectArray;

  vm.toyClick = function(){
    vm.toyLetters =[];
    console.log('Array at click!!!', vm.toyLetters);
    splitService.counter = splitService.counter +1;
    if (splitService.counter < splitService.toysArray.length) {
      console.log('LESS THAN');
      splitService.splitArray(splitService.toysArray[splitService.counter]);
      vm.toyLetters = splitService.letterObjectArray;
    } else {
      splitService.counter = 0;
      splitService.splitArray(splitService.toysArray[splitService.counter]);
      vm.toyLetters = splitService.letterObjectArray;
    }

};






}]);
