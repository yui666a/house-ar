let xPositionText = document.getElementById('xPositionText');
xPositionText.addEventListener('change', inputChange);

function inputChange(event){
  console.log('xPosition: ' + xPositionText.value );
}
function upClicked(){
  var sofa1 = document.getElementById('sofaObj');
  var position = sofa1.getAttribute('position');
  position.x += 1;

  // var rotation = sofa1.getAttribute('rotation');
  console.log('position.x: '+position.x);
  sofa1.setAttribute('position', position);

}




AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
    this.el.addEventListener('raycaster-intersection', function () {
      console.log('Player hit something!');
    });
  }
});

// var video = document.getElementById("bird");
// var music_on = document.getElementById("music_on");

// document.addEventListener("DOMContentLoaded", function (event) {
//   var scene = document.querySelector("a-scene");

//   if (scene.hasLoaded) {
//     run();
//   } else {
//     scene.addEventListener("loaded", run);
//   }

//   function run() {
//     scene.querySelector("#sofaObj").addEventListener("click", function (e) {
//       // video.play();
//       console.log("sofaObj クリックと")
//     });
//     // scene.querySelector("#sofaObj2").addEventListener("click", function (e) {
//     //   console.log("sofaObj2 クリックと")
//     // });
//   }
// });

// AFRAME.registerComponent("click-stop", {
//   init: function () {
//     this.el.addEventListener("click", function (event) {
//       video.pause();
//     });
//   },
// });

// AFRAME.registerComponent("click-music", {
//   init: function () {
//     this.el.addEventListener("click", function (event) {
//       if (video.muted) {
//         //video.muted = !video.muted; //this also works
//         video.muted = false;
//         this.setAttribute("material", "src", music_on);
//       } else {
//         video.muted = true;
//         this.setAttribute("material", "src", "#music_off");
//       }
//     });
//   },
// });
