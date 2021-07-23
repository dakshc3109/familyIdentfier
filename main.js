//main.js

Webcam.set({
    width: 340,
    height: 300,
    image_format: "png",
    image_quality: 90
});

var camera = document.getElementById("camera");

Webcam.attach("#camera");