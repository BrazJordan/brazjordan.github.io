'use strict';

let formulario = document.querySelector('#formulario');

function salvar (evento) {
	evento.preventDefault();
	let input = document.querySelector('#valor');
	let valor = input.value;
	//alert(valor);

	let resultado = document.querySelector('.resultado');
	resultado.innerHTML = valor;
}
formulario.addEventListener('submit', salvar);