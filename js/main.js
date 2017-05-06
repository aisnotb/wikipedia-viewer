$('document').ready(function(){
	$('i').click(function(){
		$('#search-icon').addClass('hidden');

		$('#search-box').addClass('show');
		$('input').animate({
			width: 300,
			height: 30
		}, 500, function(){
			alert("aniamted");
		});
	});
});