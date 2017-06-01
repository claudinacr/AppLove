/*
 * Archivo principal de funcionalidad de JS
 */

 function modal(){
 	//se llama imagenes con clase que tienen todas en común.
 	var imags = document.getElementsByClassName("col-4")[0];
 	var imags2 = document.getElementsByClassName("col-4")[1];
 	var imags3 = document.getElementsByClassName("col-4")[2];
 	var imags4 = document.getElementsByClassName("col-4")[3];
 	var imags5 = document.getElementsByClassName("col-4")[4];
 	var imags6 = document.getElementsByClassName("col-4")[5];
 	var imags7 = document.getElementsByClassName("col-4")[6];
 	var imags8 = document.getElementsByClassName("col-4")[7];
 	var imags9 = document.getElementsByClassName("col-4")[8];

 	//se llama div creado para modal.	
 	var div = document.getElementById("container-modal");
 	//se llama el boton que cerrará el modal.
 	var btnClose = document.getElementsByClassName("close-button")[0];
	

	//imagen 1
 	imags.addEventListener("click", function(){
 		div.classList.remove("modal-ghost");
 		var imagen1 = document.createElement("img");
 		imagen1.setAttribute("id", "im-uno");
 		div.appendChild(imagen1);
 		btnClose.addEventListener("click", function(){
 			div.classList.add("modal-ghost");
 		});
 	});
 	//imagen 2
 	imags2.addEventListener("click", function(){
 		div.classList.remove("modal-ghost");
 		var imagen2 = document.createElement("img");
 		imagen2.setAttribute("id", "im-dos");
 		div.appendChild(imagen2);
 		btnClose.addEventListener("click", function(){
 			div.classList.add("modal-ghost");
 		});
 	});
 	//imagen 3
 	imags3.addEventListener("click", function(){
 		div.classList.remove("modal-ghost");
 		var imagen3 = document.createElement("img");
 		imagen3.setAttribute("id", "im-tres");
 		div.appendChild(imagen3);
 		btnClose.addEventListener("click", function(){
 			div.classList.add("modal-ghost");
 		});
 	});
 	//imagen 4
 	imags4.addEventListener("click", function(){
 		div.classList.remove("modal-ghost");
 		var imagen4 = document.createElement("img");
 		imagen4.setAttribute("id", "im-cuatro");
 		div.appendChild(imagen4);
 		btnClose.addEventListener("click", function(){
 			div.classList.add("modal-ghost");
 		});
 	});
 	//imagen 5
 	imags5.addEventListener("click", function(){
 		div.classList.remove("modal-ghost");
 		var imagen5 = document.createElement("img");
 		imagen5.setAttribute("id", "im-cinco");
 		div.appendChild(imagen5);
 		btnClose.addEventListener("click", function(){
 			div.classList.add("modal-ghost");
 		});
 	});
 	//imagen 6
 	imags6.addEventListener("click", function(){
 		div.classList.remove("modal-ghost");
 		var imagen6 = document.createElement("img");
 		imagen6.setAttribute("id", "im-seis");
 		div.appendChild(imagen6);
 		btnClose.addEventListener("click", function(){
 			div.classList.add("modal-ghost");
 		});
 	});
 	//imagen 7
 	imags7.addEventListener("click", function(){
 		div.classList.remove("modal-ghost");
 		var imagen7 = document.createElement("img");
 		imagen7.setAttribute("id", "im-siete");
 		div.appendChild(imagen7);
 		btnClose.addEventListener("click", function(){
 			div.classList.add("modal-ghost");
 		});
 	});
 	//imagen 8
 	imags8.addEventListener("click", function(){
 		div.classList.remove("modal-ghost");
 		var imagen8 = document.createElement("img");
 		imagen8.setAttribute("id", "im-ocho");
 		div.appendChild(imagen8);
 		btnClose.addEventListener("click", function(){
 			div.classList.add("modal-ghost");
 		});
 	});
 	//imagen 9
 	imags9.addEventListener("click", function(){
 		div.classList.remove("modal-ghost");
 		var imagen9 = document.createElement("img");
 		imagen9.setAttribute("id", "im-nueve");
 		div.appendChild(imagen9);
 		btnClose.addEventListener("click", function(){
 			div.classList.add("modal-ghost");
 		});
 	});

 	//resultó pero nunca pude editar la foto en este modo. 
 	/*se usa foreach para tratar todas las imagenes.
 	imags.forEach(function(e){
 		e.addEventListener("click", function(){
 			//Al ser clase display none, al remover la clase de container modal aparecerá.
 			div.classList.remove("modal-ghost");
 			div.innerHTML = e.innerHTML;

 		});
 	});*/
 
 }
modal();