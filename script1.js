function positionUpdate(objName) {
  let obj = document.getElementById(objName);
  let position = obj.getAttribute("position");
  // let rotation = obj.getAttribute('rotation');

  position.x = document.getElementById(objName+"-xPositionText").value;
  position.y = document.getElementById(objName+"-yPositionText").value;
  position.z = document.getElementById(objName+"-zPositionText").value;

  obj.setAttribute("position", position);

  let isVisible = document.getElementById(objName+"-xPositionText").checked;
  obj.addAttribute("visible", isVisible);
}


// AFRAME.registerComponent('collider-check', {
//   dependencies: ['raycaster'],

//   init: function () {
//     this.el.addEventListener('raycaster-intersection', function () {
//       console.log('Player hit something!');
//     });
//   }
// });

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
