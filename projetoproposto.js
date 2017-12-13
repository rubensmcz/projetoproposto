let btn_ok              = document.querySelector('#btn-ok');
let edt_campo_informado = document.querySelector('#edt-campo-informado');
let h3_resultado        = document.querySelector('#h3-resultado');

btn_ok.addEventListener('click', () => {
	let campo_informado_areio = edt_campo_informado.value.split("-");
    if (campo_informado_areio) {
        h3_resultado.innerHTML = getRandom(campo_informado_areio[0], campo_informado_areio[1]);
    } else {
    	window.alert('Informe números validos'); 
    }

});

function getRandom(min,max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}