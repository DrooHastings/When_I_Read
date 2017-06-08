myApp.controller('ToyController', ['splitService', function(splitService){
  console.log('made it to the ToysController');
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



  splitService.getToyWords();

  vm.word = splitService.toysArray[splitService.counter];

  vm.toyLetters = splitService.letterObjectArray;

  vm.toyClick = function(){
    vm.word = '';
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
    vm.word = splitService.toysArray[splitService.counter];
};






}]);
