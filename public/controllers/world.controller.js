myApp.controller('WorldController', ['splitService', function(splitService){
  let vm = this;

  //play/stop sounds
  vm.PlaySound = function(url){
    var a = new Audio(url);
    a.play();

  };

  vm.StopSound = function(url) {
    console.log('in vm.StopSound');
    var a = new Audio(url);
    a.pause();
    a.currentTime = 0;

  };

  //populates the array and sets controller array = service array
  //set word displayed equal to the current word being ng-repeated
  splitService.getWorld();
  vm.word = splitService.toysArray[splitService.counter];
  vm.worldLetters = splitService.letterObjectArray;

  //gets words on button click at counter index
  vm.worldClick = function(){
    vm.word = '';
    vm.worldLetters =[];
    splitService.counter = splitService.counter +1;
    if (splitService.counter < splitService.toysArray.length) {
      splitService.splitArray(splitService.toysArray[splitService.counter]);
      vm.worldLetters = splitService.letterObjectArray;
    } else {
      splitService.counter = 0;
      splitService.splitArray(splitService.toysArray[splitService.counter]);
      vm.worldLetters = splitService.letterObjectArray;
    }
    vm.word = splitService.toysArray[splitService.counter];
  };//end click
}]);//end controller
