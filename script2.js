const obj1xPosBar = document.getElementById("obj1-xPositionBar"); // input要素
const obj1yPosBar = document.getElementById("obj1-yPositionBar"); // input要素
const obj1zPosBar = document.getElementById("obj1-zPositionBar"); // input要素
const obj1ScaleBar = document.getElementById("obj1-ScaleBar"); // input要素
const obj1xRotBar = document.getElementById("obj1-xRotationBar"); // input要素
const obj1yRotBar = document.getElementById("obj1-yRotationBar"); // input要素
const obj1zRotBar = document.getElementById("obj1-zRotationBar"); // input要素

const obj2xPosBar = document.getElementById("obj2-xPositionBar"); // input要素
const obj2yPosBar = document.getElementById("obj2-yPositionBar"); // input要素
const obj2zPosBar = document.getElementById("obj2-zPositionBar"); // input要素
const obj2ScaleBar = document.getElementById("obj2-ScaleBar"); // input要素
const obj2xRotBar = document.getElementById("obj2-xRotationBar"); // input要素
const obj2yRotBar = document.getElementById("obj2-yRotationBar"); // input要素
const obj2zRotBar = document.getElementById("obj2-zRotationBar"); // input要素

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

function rangeRotBarOnChange(e) {
  const objName = this.name;
  let obj = document.getElementById(objName);
  let rotation = obj.getAttribute("rotation");

  let rotXTxt = document.getElementById(objName + "-xRotationText");
  let rotYTxt = document.getElementById(objName + "-yRotationText");
  let rotZTxt = document.getElementById(objName + "-zRotationText");
  rotation.x = rotXTxt.value;
  rotation.y = rotYTxt.value;
  rotation.z = rotZTxt.value;

  if (this.axis === "x") {
    rotation.x = e.target.value;
    rotXTxt.value = rotation.x;
  } else if (this.axis === "y") {
    rotation.y = e.target.value;
    rotYTxt.value = rotation.y;
  } else if (this.axis === "z") {
    rotation.z = e.target.value;
    rotZTxt.value = rotation.z;
  }
  updateObjectRotation(objName, rotation.x, rotation.y, rotation.z);
}

// inputイベント時に値をセットする関数
function rangeScaleBarOnChange(e) {
  const objName = this.name;
  let obj = document.getElementById(objName);
  let scale = obj.getAttribute("scale");

  scale.x = e.target.value;
  scale.y = e.target.value;
  scale.z = e.target.value;
  document.getElementById(objName + "-ScaleText").value = scale.x;

  obj.setAttribute("scale", scale);
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
  obj1ScaleBar.addEventListener("input", {
    handleEvent: rangeScaleBarOnChange,
    name: "obj1",
  });
  
  obj1xRotBar.addEventListener("input", {
    handleEvent: rangeRotBarOnChange,
    name: "obj1",
    axis: "x",
  });
  obj1yRotBar.addEventListener("input", {
    handleEvent: rangeRotBarOnChange,
    name: "obj1",
    axis: "y",
  });
  obj1zRotBar.addEventListener("input", {
    handleEvent: rangeRotBarOnChange,
    name: "obj1",
    axis: "z",
  });

  obj2xPosBar.addEventListener("input", {
    handleEvent: rangePosBarOnChange,
    name: "obj2",
    axis: "x",
  });
  obj2yPosBar.addEventListener("input", {
    handleEvent: rangePosBarOnChange,
    name: "obj2",
    axis: "y",
  });
  obj2zPosBar.addEventListener("input", {
    handleEvent: rangePosBarOnChange,
    name: "obj2",
    axis: "z",
  });
  obj2ScaleBar.addEventListener("input", {
    handleEvent: rangeScaleBarOnChange,
    name: "obj2",
  });
  
  obj2xRotBar.addEventListener("input", {
    handleEvent: rangeRotBarOnChange,
    name: "obj2",
    axis: "x",
  });
  obj2yRotBar.addEventListener("input", {
    handleEvent: rangeRotBarOnChange,
    name: "obj2",
    axis: "y",
  });
  obj2zRotBar.addEventListener("input", {
    handleEvent: rangeRotBarOnChange,
    name: "obj2",
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
