myApp.controller('AnimalController', ['splitService', function(splitService){
  console.log('made it animal controller');
  let vm = this;

  splitService.getAnimals();

  vm.toyLetters = splitService.letterObjectArray;

  vm.animalClick = function(){
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
