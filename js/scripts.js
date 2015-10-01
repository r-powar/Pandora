var app_add = [{
    "main_url": "http://tychomusic.com/awake/",
    "artist_title": "Tycho",
    "number_of_ratings": 77,
    "rating": 3.50, //1-5
    "main_image_src": "images/main-img.png",
    "body_copy": "Awake, the album where the San Francisco-based visual artist expands into a far-reaching space.",
    "button_text": "Listen Now"
  }];

$(function(){
	
	var obj = {};
	for(var i = 0; i < app_add.length; i++){
		obj = app_add[i];
	}

	addContent(obj);
	calculateRatings(obj);

	function calculateRatings(obj){
		var original = obj.rating;
		var floor = Math.floor(original);
		var diff = original - floor; 
		var classString = "";

		if(diff != 0){
			if(diff >= 0.5 && diff < 0.75){
				classString = "ratings-50";
			}else if(diff >= 0.75){
				classString = "ratings-75";
			}else{
				classString = "ratings-25";
			}
		}

		var lastElement = floor + 1;
		var elements = $('.ratings').slice(0, lastElement);

		for(var i = 0; i < elements.length; i++){
			if(classString == undefined || classString == ""){
				elements.not(':last').addClass('ratings-100');
			}else if(classString){
				elements.not(':last').addClass('ratings-100');
				elements.last().addClass(classString);
			}
		}

	}

	function addContent(obj){
		var imageUrl = $('#album-logo a');
		imageUrl.attr('href', obj.main_url);

		var imageSrc = $('#album-logo img');
		imageSrc.attr('src', obj.main_image_src);

		var albumText = $('#album-content');
		albumText.html(obj.body_copy);

		var buttonText = $('#listen-button span');
		buttonText.html(obj.button_text);

		var artistTitle = $('#title');
		artistTitle.html(obj.artist_title);

		var numberRating = $('.numerical-rating');
		numberRating.html(obj.number_of_ratings + " Ratings")
	}
});
