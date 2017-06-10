myApp.controller('WorldController', ['splitService', function(splitService){
  console.log('made it to the WorldController');
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

  splitService.getWorld();
  vm.word = splitService.toysArray[splitService.counter];
  vm.worldLetters = splitService.letterObjectArray;

  vm.worldClick = function(){
    vm.word = '';
    vm.worldLetters =[];
    console.log('Array at click!!!', vm.worldLetters);
    console.log('splitService array', splitService.letterObjectArray);
    splitService.counter = splitService.counter +1;
    if (splitService.counter < splitService.toysArray.length) {
      console.log('LESS THAN');
      splitService.splitArray(splitService.toysArray[splitService.counter]);
      vm.worldLetters = splitService.letterObjectArray;
    } else {
      splitService.counter = 0;
      splitService.splitArray(splitService.toysArray[splitService.counter]);
      vm.worldLetters = splitService.letterObjectArray;
    }
    vm.word = splitService.toysArray[splitService.counter];
  };

  }]);
