var round = 1;
var matrizGame = Array(3);

matrizGame['a'] = Array(3);
matrizGame['b'] = Array(3);
matrizGame['c'] = Array(3);

matrizGame['a'][1] = 0;
matrizGame['a'][2] = 0;
matrizGame['a'][3] = 0;

matrizGame['b'][1] = 0;
matrizGame['b'][2] = 0;
matrizGame['b'][3] = 0;

matrizGame['c'][1] = 0;
matrizGame['c'][2] = 0;
matrizGame['c'][3] = 0;


$(document).ready( function(){

	
	$("#refresh").css("display", "none");

	$('.boxHash').click( function(){
		var idClickElement = this.id;
		play(idClickElement);
	})

	function play(id){
		var icon = '';
		var points = 0;

		if ((round % 2) == 1){
			icon = 'url(img/marcacao_1.png)';
			points = -1;
		}else {
			icon = 'url(img/marcacao_2.png)';
			points = 1;
		}
		round ++;
		$('#'+id).css('background-image',icon);

		var lineCol = id.split('');
		matrizGame[lineCol[0]][lineCol[1]] = points
		verifyPoints() ;
	}

	function verifyPoints(){
		//verify horizontal
		var points = 0;
		for (var i = 1; i <= 3; i++){
		 points = points + matrizGame['a'][i]
		}
		winner(points);

		points = 0;
		for (var i =1; i <= 3; i++){
		 points = points + matrizGame['b'][i]
		}
		winner(points);

		points = 0;
		for (var i =1; i <= 3; i++){
		 points = points + matrizGame['c'][i]
		}
		winner(points);

		//verify vertical
		
		for(var b=1; b<=3; b++){
			points=0;
			points += matrizGame['a'][b];
			points += matrizGame['b'][b];
			points += matrizGame['c'][b];
			winner(points);
		}

			//verify diagonal
			points=0;
			points = matrizGame['a'][1] + matrizGame['b'][2] + matrizGame['c'][3] 
			winner(points);

			points = 0
			points = matrizGame['a'][3] + matrizGame['b'][2] + matrizGame['c'][1]
			winner(points); 
	}

	function winner(points){
		if (points == -3){
			setTimeout(function() {
				messagePlayer('X')
				modal();
				$('.boxHash').off();
				$("#refresh").css("display", "block");				
			}, 200);

			
		} else if(points == 3){
			setTimeout(function() {
				messagePlayer('O')
				modal();
				$('.boxHash').off();
				$("#refresh").css("display", "block");				
			}, 200);
		}
	}


	function modal(){
		$('#exampleModal').modal('show');
		$().addClass()
	}

	function messagePlayer(user){
		$('#modal-body').append('The winner is player  '+user);

	}

	$('#refresh').click(function(){
		window.location.reload(true);
	})
})