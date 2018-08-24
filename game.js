var rodada = 1;
var matrizGame = Array(3);

$(document).ready( function(){

	$('.boxHash').click( function(){
		var idClickElement = this.id;
		play(idClickElement);
	})

	function play(id){
		var icon = '';
		var points = 0;

		if ((rodada % 2) == 1){
			icon = 'url(img/marcacao_1.png)';
			ponto = -1;
		}else {
			icon = 'url(img/marcacao_2.png)';
			ponto = 1;
		}
		rodada ++;
		$('#'+id).css('background-image',icon)
	}


})