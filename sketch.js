/*var grados
/*var dolares;*/
var colors = [];
var bubbles = [];

function setup() {
	/*console.log(cube(3));*//*para que el valor del cubo sea 3 y se muestre en el punto log*/
	/*grados = parseInt(prompt("Ingresa una temperatura"));/*ingresa la temperatura  y la asigna en la variable grados*/
	/*document.write("<h1>" + calcular(grados) + "</h1>");/*se llama la función en una etiqueta h1*/
	 /*dolares = 400;
	 var resultado = convertidor(dolares);*/
	 createCanvas(windowWidth,windowHeight);
	colors[0] = color(69,0,3);
	colors[1] = color(92,0,2);
	colors[2] = color(148,9,13);
	colors[3] = color(212,13,18);
	colors[4] = color(255,29,35);
	 /*var num = parseInt(prompt("Ingresa el tamaño del vector: "));
	 for (var i = 0; i < num; i++) {
	 	bubbles[i] = new bubble();
	 }

	 /*bubbles[0] = new bubble();
	 bubbles[1] = new bubble();
	 bubbles[2] = new bubble();
	 bubbles[3] = new bubble();*/
}
	
function draw() {
	

	background(0); 
	for (var i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].display(); 
		for (var j = 0; j < bubbles.length; j++) {
			if (i != j && bubbles[i].break(bubbles[j])) {
				bubbles.speedX = bubbles[i].speedX *= -1;
				bubbles.speedY = bubbles[i].speedY *= -1;
			}
		}	
 	}
}

function mouseDragged(){
	bubbles.push(new bubble(mouseX, mouseY));
}

function bubble(x,y){
	this.bandera = false;
	this.x = x;
	this.y = y;
	this.r = random(10,20);
	this.speedX = random(-5,5);
	this.speedY = random(-5,5);

	this.display = function(){
		fill(colors[parseInt(random(4))]);
		
		if (this.bandera == true) {
			ellipse(this.x, this.y, this.r*2, this.r*2);
		}else{
			rect(this.x, this.y, this.r*2, this.r*2);
		}
		
	}

	this.move = function(){

		if (this.x < 0 || this.x > width) {
			this.speedX *= -1;
			if (this.bandera == true) {
				this.bandera = false;
			}else{
				this.bandera = true;
			}
		}else if (this.y < 0 || this.y > height) {
			this.speedY *= -1;
			if (this.bandera == true) {
				this.bandera = false;
			}else{
				this.bandera = true;
			}
		}
		this.x += this.speedX;
		this.y += this.speedY;	
	}

	this.break = function(other){
		var d = dist(this.x, this.y, other.x, other.y);
		if(d < this.r + other.r){
			return true;
		}else {
			return false;
		}

	}
}

   
/*function cube(x) {
	var cube = Math.pow(x,3);
	return cube;
}/*la funcion cube retorna el valor después de elevarlo al cubo*/

/*function calcular(grados){
	return (1.8*grados)+32;
}/*la función convierte la temperatura en fahrenheit y la retorna*/


/*function convertidor(dollars){
	var pesos = dollars * 3000;
	return pesos;
}*/