myApp.controller('AnimalController', ['splitService', function(splitService){
  let vm = this;

  vm.PlaySound = function(url){
    var a = new Audio(url);
    a.play();
  };

  vm.StopSound = function(url) {
    var a = new Audio(url);
    a.pause();
    a.currentTime = 0;
  };

  splitService.getAnimals();
  vm.word = splitService.toysArray[splitService.counter];
  vm.animalLetters = splitService.letterObjectArray;

  vm.animalClick = function(){
    vm.word = '';
    vm.animalLetters =[];
    splitService.counter = splitService.counter +1;
    if (splitService.counter < splitService.toysArray.length) {
      splitService.splitArray(splitService.toysArray[splitService.counter]);
      vm.animalLetters = splitService.letterObjectArray;
    } else {
      splitService.counter = 0;
      splitService.splitArray(splitService.toysArray[splitService.counter]);
      vm.animalLetters = splitService.letterObjectArray;
    }
    vm.word = splitService.toysArray[splitService.counter];
  };
  }]);
