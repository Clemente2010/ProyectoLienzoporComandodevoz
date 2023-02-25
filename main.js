x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
document.getElementById("status").innerHTML = "Porfavor Hablar"
recognition.start();
}

recognition.onresult = function(parametro){
    console.log(parametro);
    var content = parametro.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Palabra reconocida" + content;
    if(content == "Circle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600); 
        document.getElementById("status").innerHTML = "Ya se dibujo el circulo"; draw_circle = "set";
    } 

    if(content == "Rectangle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600); 
        document.getElementById("status").innerHTML = "Ya se dibujo el rectángulo"; draw_rect = "set";
    } 

}


    function setup(){
      canvas = createCanvas(750, 600);
    }

    function draw(){
        if(draw_circle == "set"){
            radio = Math.floor(Math.random() * 200);
            circle(x,y,radio);
        document.getElementById("status").innerHTML = "Ya se dibujó un círculo";
        draw_circle = "";
        }


        if(draw_rect == "set"){
            radio = Math.floor(Math.random() * 200);
            rect(x,y,radio,50);
        document.getElementById("status").innerHTML = "Ya se dibujó un rectángulo";
        draw_rect = "";
        }
    
    
    
    
    
    }