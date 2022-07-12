const obj1xPosBar = document.getElementById("obj1-xPositionBar"); // input要素
const obj1yPosBar = document.getElementById("obj1-yPositionBar"); // input要素
const obj1zPosBar = document.getElementById("obj1-zPositionBar"); // input要素

// inputイベント時に値をセットする関数
const rangePosBarOnChange = (e) => {
  const objName = "obj1";
  let obj = document.getElementById(objName);
  let position = obj.getAttribute("position");

  position.x = e.target.value;
  position.y = document.getElementById(objName + "-yPositionText").value;
  position.z = document.getElementById(objName + "-zPositionText").value;

  updateObjectPosition(objName, position.x, position.y, position.z);
};

window.onload = () => {
  obj1xPosBar.addEventListener("input", rangeOnChange); // スライダー変化時にイベントを発火
  obj1yPosBar.addEventListener("input", rangeOnChange); // スライダー変化時にイベントを発火
  obj1zPosBar.addEventListener("input", rangeOnChange); // スライダー変化時にイベントを発火
};

AFRAME.registerComponent("collider-check", {
  dependencies: ["raycaster"],

  init: function () {
    this.el.addEventListener("raycaster-intersection", function () {
      console.log("Player hit something!");
    });
  },
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
