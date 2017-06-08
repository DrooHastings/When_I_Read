myApp.controller('DashboardController', function(){
  console.log('made it to the DashboardController');
  let vm = this;
  var A = 'http://sfxcontent.s3.amazonaws.com/soundfx/Lion-Roar.mp3';
  var B = 'http://www.pacdv.com/sounds/miscellaneous_sounds/dogs-barking-2.mp3';
  var source;
  vm.PlaySound = new Audio ();

  vm.PlaySound.src = 'http://sfxcontent.s3.amazonaws.com/soundfx/Lion-Roar.mp3';

  // var audioElement = document.createElement('audio');
  // audioElement.setAttribute('src', path);
  // audioElement.play();

  vm.soundArray = [];

  var lionRoarSound = new Audio();
  lionRoarSound.src = 'http://sfxcontent.s3.amazonaws.com/soundfx/Lion-Roar.mp3';

  vm.soundArray.push(lionRoarSound);



});
