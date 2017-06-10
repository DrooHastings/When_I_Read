myApp.controller('AnimalController', ['splitService', function(splitService){
  console.log('made it animal controller');
  let vm = this;

  vm.PlaySound = function(url){
    console.log('in vm.PlaySound, soundobj', url);
    var a = new Audio(url);
    a.play();

  };

  vm.StopSound = function(url) {
    console.log('in vm.StopSound');
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
    console.log('Array at click!!!', vm.animalLetters);
    splitService.counter = splitService.counter +1;
    if (splitService.counter < splitService.toysArray.length) {
      console.log('LESS THAN');
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
