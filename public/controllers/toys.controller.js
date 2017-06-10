myApp.controller('ToyController', ['splitService', function(splitService){
  let vm = this;

//plays/stops sounds
vm.PlaySound = function(url){
  var a = new Audio(url);
  a.play();

};

vm.StopSound = function(url) {
  var a = new Audio(url);
  a.pause();
  a.currentTime = 0;
};

  //get words on page load
  splitService.getToyWords();
  vm.word = splitService.toysArray[splitService.counter];
  vm.toyLetters = splitService.letterObjectArray;

  //button click
  vm.toyClick = function(){
    vm.word = '';
    vm.toyLetters =[];
    splitService.counter = splitService.counter +1;
    if (splitService.counter < splitService.toysArray.length) {
      splitService.splitArray(splitService.toysArray[splitService.counter]);
      vm.toyLetters = splitService.letterObjectArray;
    } else {
      splitService.counter = 0;
      splitService.splitArray(splitService.toysArray[splitService.counter]);
      vm.toyLetters = splitService.letterObjectArray;
    }
    vm.word = splitService.toysArray[splitService.counter];
};
}]);
