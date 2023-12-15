function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  //agregar modelo de sonido de animales
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tZ-Ynocd7/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var perro = 0;
var gato = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Escucho  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Perro - '+perro+ ' Gato - '+gato;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

//agregar la img y las condiciones if /elseif/else



  }
}
