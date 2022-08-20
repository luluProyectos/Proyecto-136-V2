
status = "";


function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
}

function modelLoaded() {
  console.log("¡Modelo cargado!")
  status = true;
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Estado: Detectando objetos";
  object_name = document.getElementById("object_name").value;
}


function draw() {
  image(video, 0, 0, 380, 380);
}