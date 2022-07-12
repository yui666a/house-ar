const obj1xPosBar = document.getElementById("obj1-xPositionBar"); // input要素
const obj1yPosBar = document.getElementById("obj1-yPositionBar"); // input要素
const obj1zPosBar = document.getElementById("obj1-zPositionBar"); // input要素

// inputイベント時に値をセットする関数
function rangePosBarOnChange(e) {
  const objName = this.name;
  let obj = document.getElementById(objName);
  let position = obj.getAttribute("position");

  let posXTxt = document.getElementById(objName + "-xPositionText");
  let posYTxt = document.getElementById(objName + "-yPositionText");
  let posZTxt = document.getElementById(objName + "-zPositionText");
  position.x = posXTxt.value;
  position.y = posYTxt.value;
  position.z = posZTxt.value;

  if (this.axis === "x") {
    position.x = e.target.value;
    posXTxt.value = position.x;
  } else if (this.axis === "y") {
    position.y = e.target.value;
    posYTxt.value = position.y;
  } else if (this.axis === "z") {
    position.z = e.target.value;
    posZTxt.value = position.z;
  }

  updateObjectPosition(objName, position.x, position.y, position.z);
}

window.onload = () => {
  obj1xPosBar.addEventListener("input", {
    handleEvent: rangePosBarOnChange,
    name: "obj1",
    axis: "x",
  });
  obj1yPosBar.addEventListener("input", {
    handleEvent: rangePosBarOnChange,
    name: "obj1",
    axis: "y",
  });
  obj1zPosBar.addEventListener("input", {
    handleEvent: rangePosBarOnChange,
    name: "obj1",
    axis: "z",
  });
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
