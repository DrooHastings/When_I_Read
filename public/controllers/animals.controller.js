myApp.controller('AnimalController', ['splitService', function(splitService){
console.log('made it animal controller');
let vm = this;

splitService.getAnimals();

}]);
