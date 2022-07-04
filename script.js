var video = document.getElementById("bird");
var music_on = document.getElementById("music_on");

document.addEventListener("DOMContentLoaded", function (event) {
  var scene = document.querySelector("a-scene");

  if (scene.hasLoaded) {
    run();
  } else {
    scene.addEventListener("loaded", run);
  }

  function run() {
    scene.querySelector("#playButton").addEventListener("click", function (e) {
      // video.play();
      console.log("play クリックと")
    });
  }
});

AFRAME.registerComponent("click-stop", {
  init: function () {
    this.el.addEventListener("click", function (event) {
      video.pause();
    });
  },
});

AFRAME.registerComponent("click-music", {
  init: function () {
    this.el.addEventListener("click", function (event) {
      if (video.muted) {
        //video.muted = !video.muted; //this also works
        video.muted = false;
        this.setAttribute("material", "src", music_on);
      } else {
        video.muted = true;
        this.setAttribute("material", "src", "#music_off");
      }
    });
  },
});
