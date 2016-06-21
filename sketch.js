var colors = [];/*se cra como variable global colors*/
var size = 100;/*se cra como variable global size*/
var bandera = 0;/*se cra como variable global bandera*/
var osc;
var notes =[];
function setup() {
	createCanvas(windowWidth,windowHeight);/*un tamaño para la pantalla 800 ancho, 600 alto o windowWidth o windowHeigth*/
	colors[0] = color(255,120,120);
	colors[1] = color(15,16,37);
	colors[2] = color(15,25,67);
	colors[3] = color(21,47,89);
	colors[4] = color(23,74,121);
	colors[5] = color(14,111,173);
	frameRate(50);/*la velocidad de cambio*/
	size = 100;
	bandera = 0;

	notes=[130.81, 155.56, 174.61, 185.00, 196.00, 233.08, 130.81];

	osc = new p5.Oscillator();
	osc.setType('sine');
	/*osc.freq(10);*/
	osc.amp(0.1);
	osc.start();

	delay = new p5.Delay();

	delay.process(osc, .12, .7, 2300);
}
	
function draw() {

	/*osc.freq(mouseX);*/

	var pos = map(mouseY, 0, height, 1, 0);
	osc.amp(pos);

	if (mouseX>0&&mouseX<=(width/6)) {osc.freq(notes[0]);}
	if (mouseX>width/6&&mouseX<=(2*width/6)) {osc.freq(notes[1]);}
	if (mouseX>2*width/6&&mouseX<=3*width/6) {osc.freq(notes[2]);}
	if (mouseX>3*width/6&&mouseX<=4*width/6) {osc.freq(notes[3]);}
	if (mouseX>4*width/6&&mouseX<=5*width/6) {osc.freq(notes[4]);}
	if (mouseX>5*width/6&&mouseX<=6*width/6) {osc.freq(notes[5]);}
	if (mouseX>6*width/6&&mouseX<=7*width/6) {osc.freq(notes[6]);}

	/*background(225); /*es el fondo cada vez que se cumpla el ciclo*/
	fill(255,3);/*que se vaya desvaneciendo el fondo*/
	rect(0,0,width,height);/*width y height hacen referencia a todo el ancho y largo de la pantalla*/
	if(mouseIsPressed){/*cuando el mouse está presionado*/
		/*fill(0);/*rellena con negro cuando se preciona el clic*/
		fill(colors[parseInt(random(5))]);
	}else fill(255);/*queda blanco cuándo no se presione*/
	if (bandera == 0 ) {/*se comprueba si la bandera está en 0*/
			size = size-1;/*se le resta de a uno al size*/
			if(size == 0){/*cuando el size llegue a 0*/
				bandera = 1;/*la bandera cambia*/
			}
	} else if(bandera = 1) {/*se comprueba que la bandera está en 1*/
			size = size+1;/*se le suma de a uno el size*/
			if (size == 100) {/*cuando el size llegue a 100*/
				bandera = 0;/*la bandera se cambia a 0*/
			}	
	}		
  	ellipse(mouseX,mouseY,size,size);/*hace el circulo(50,50,80,80) los 80 son el tamaño para el circulo, los 50 son para 
  	la posición en el plano también podemos usar el random*/
  	ellipse(width-mouseX,mouseY,size,size);/*saca otro circulo paralelo horizontal*/
  	ellipse(mouseX,height-mouseY,size,size)/*saca otro circulo paralelo vertical*/
  	ellipse(width-mouseX,height-mouseY,size,size);/*saca uno diagonal*/
}