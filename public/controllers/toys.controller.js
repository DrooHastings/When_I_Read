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

//populates the array and sets controller array = service array
//set word displayed equal to the current word being ng-repeated
  splitService.getToyWords();
  vm.word = splitService.toysArray[splitService.counter];
  vm.toyLetters = splitService.letterObjectArray;

  //button click - grabs current words at counter index
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
};//end click function
}]);//end of controller
