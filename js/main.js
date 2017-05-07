$('document').ready(function(){
	$('i').click(function(){

		$('#search-icon').addClass('hidden');
		$('#search-box').addClass('show');
		$('input[type=text]').animate({
			width: 300,
			height: 30
		}, 500, function(){
		
		});

		$('.fa-times').animate({
			right: 344,
			top: 9
		}, 500, function(){

		});

		$('.fa-times').click(function(){
			$('input').val('');
		});
	});
});