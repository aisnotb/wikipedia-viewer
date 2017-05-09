$('document').ready(function(){
		$('#search-icon').addClass('hidden');
		$('#search-box').addClass('show');
		$('input[type=text]').animate({
			width: 300,
			height: 30
		}, 500, function(){
			console.log('input box animation complete');
		});

		$('.fa-times').animate({
			right: 344,
			top: 9
		}, 500, function(){
			console.log('fa-times animation complete');
		});

		$('.fa-times').click(function(){
			$('input').val('');
		});

		$('#search').click(function(){
			getResource();
		});

		$('#random').click(function(){
			getRandom();
		});

		$("#input").keypress(function(e){
			if (e.which === 13) {
				// alert('you pressed enter');
				getResource();
			}  
		});

		function getRandom() {
			console.log("hey");
			var myURL = "https://en.wikipedia.org/w/api.php?action=query&&format=json&list=random&rnlimit=1&callback=?";
			$.getJSON(myURL, function(data) {
		    var id = data.query.random[0].id;
		    console.log("s"+id);
		    var url = "https://en.wikipedia.org/?curid=" + id;
		    window.open(url,"_blank");  
		});


		//make request to end point
		function getResource(){

			var searchItem = $('input').val();
			var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchItem + '&callback=?';

			$.ajax({
				type: "GET",
				url: url,
				async: true,
				dataType: "json",
				// headers:{
				// 	"Access-Control-Request-Headers": "*"
				// },
				success: function(data){

					$("#output").html('');
					$("#output").append("<ul id='rst'></ul>");

					for (var i = 0; i < data[1].length; i++) {
						$('#rst').prepend("<li><a href=" + data[3][i] + ">" + "<p>"+ data[2][i] +"</p>"+ "</li>");
					}
					// $('#output').prepend(data[1][0]);
					console.log(url);	
				},
				error: function(errMsg){
					console.log(errMsg);
				}
			});

		}
}});