myApp.service('splitService',['$http', function ($http){
  let vm = this;

  vm.letterObjectArray = [];

 vm.splitArray = function(array){
 for (var i = 0; i < array.length; i++) {
   var wordToSplit = array[i];
   var newWordArray = wordToSplit.split('');
  //  console.log(newWordArray);
   vm.toWordObject(newWordArray);
   }
};

 vm.toWordObject = function(array){
  //  console.log('wordObject array', array);
 // convert array indeces to objects
 for (var i = 0; i < array.length; i++) {
   var letterObject = {
       letter: array[i],
       sound: ' '
       };
      //  console.log('letterObject', letterObject);
    vm.letterObjectArray.push(letterObject);
    console.log('letterObjectArray', vm.letterObjectArray);
  }//end for
};

vm.getToyWords = function(){
  console.log('hit getToyWords');
  $http({
    method: 'GET',
    url: 'getToys'
  }).then(function(response){
    log(response);
    //set response as parameter for vm.splitArray

  });



};




}]);
