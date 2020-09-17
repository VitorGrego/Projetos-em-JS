function addbola() {
	var bola = document.createElement("div");
	
	bola.setAttribute("class", "bola");

	var p1 = Math.floor(Math.random() * 500);
	var p2 = Math.floor(Math.random() * 400);
	
	bola.setAttribute("style","left:"+p1+"px;top:"+p2+"px;background-color:#"+Math.floor(Math.random() * 1000)+";");
	bola.setAttribute("onclick","estourar(this)");

	document.body.appendChild(bola);
}
let clear;
function noob(t) {
	t.innerHTML = 'NOOB +';
	clear = setInterval(addbola, 1000);
}
function easy(t) {
	clear = setInterval(addbola, 700);
	t.innerHTML = 'EASY +';	
}
function hard(t) {
	clear = setInterval(addbola, 400);
	t.innerHTML = 'HARD +';
}
function Impossible(t) {
	clear = setInterval(addbola, 40);
	t.innerHTML = 'IMPOSSIBLE +';
}
function stop(){
	clearInterval(clear);
	// document.body.removeChild(bola);
	// document.body.appendChild(bola);
}

var p = 0;
function estourar(elemento) {
	document.body.removeChild(elemento);
	
	p++;


	let html = document.getElementById('pontos');
	if (p == html){
		console.log('NADA');
	}else {
		document.getElementById('pontos').innerHTML = p;
	}
}

function iniciar() {
	setInterval(addbola, 5000);
}

// function random_color() {
// 	var cor = Math.floor(Math.random() * 10000);
// 	bola.setAttribute("style","left:"+p1+"px;top:"+p2+"px;background-color:#"+cor+";");   
// }