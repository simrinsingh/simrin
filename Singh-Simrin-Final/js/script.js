/* script.js 
   Author:
   Date:
*/

$(document).ready(function(){ // begin document.ready block

//CHUNK 1: Below is the code to play/pause the audio and slide up/down the caption for the first audio rollover image, caption and audio//

	$('.chunk1').mouseenter(function(){

		$('.cap1').slideToggle();
	});

	$('.chunk1').mouseleave(function(){

		$('.cap1').slideToggle();
	});

	$('.chunk1').mouseenter(function(){

		var audiofile = $(this).attr('soundsrc');

		$('.sound1').attr('src', audiofile);
		$('.sound1').get(0).play();
	});

	$('.chunk1').mouseleave(function(){

		$('.sound1').get(0).pause();

	});

//END CHUNK 1//

//CHUNK 2: Below is the code to play/pause the audio and slide up/down the caption for the second audio rollover image, caption and audio//

	$('.chunk2').mouseenter(function(){

		$('.cap2').slideToggle();
	});

	$('.chunk2').mouseleave(function(){

		$('.cap2').slideToggle();
	});

	$('.chunk2').mouseenter(function(){

		console.log("bell");

		var audiofile = $(this).attr('soundsrc');

		$('.sound3').attr('src', audiofile);
		$('.sound3').get(0).play();
	});

	$('.chunk2').mouseleave(function(){

		$('.sound3').get(0).pause();
	
	});
//END CHUNK 2//


//CHUNK 3: Below is the code to play/pause the audio and slide up/down the caption for the third audio rollover image, caption and audio//

	$('.chunk3').mouseenter(function(){

		$('.cap3').slideToggle();
	});

	$('.chunk3').mouseleave(function(){

		$('.cap3').slideToggle();
	});

	$('.chunk3').mouseenter(function(){


		var audiofile = $(this).attr('soundsrc');

		$('.sound').attr('src', audiofile);
		$('.sound').get(0).play();
	});

	$('.chunk3').mouseleave(function(){

		$('.sound').get(0).pause();

	});
//END CHUNK 3//

//CHUNK 4: Below is the code to play/pause the audio and slide up/down the caption for the fourth audio rollover image, caption and audio//

	$('.chunk4').mouseenter(function(){

		$('.cap4').slideToggle();
	});

	$('.chunk4').mouseleave(function(){

		$('.cap4').slideToggle();
	});

	$('.chunk4').mouseenter(function(){

		var audiofile = $(this).attr('soundsrc');

		$('.sound2').attr('src', audiofile);
		$('.sound2').get(0).play();
	});

	$('.chunk4').mouseleave(function(){

		$('.sound2').get(0).pause();

	});

// END CHUNK 4//

//CHUNK 5: Below is the code to play/pause the audio and slide up/down the caption for the fifth audio rollover image, caption and audio//

	$('.chunk5').mouseenter(function(){

		$('.cap5').slideToggle();
	});

	$('.chunk5').mouseleave(function(){

		$('.cap5').slideToggle();
	});

	$('.chunk5').mouseenter(function(){

		var audiofile = $(this).attr('soundsrc');

		$('.sound4').attr('src', audiofile);
		$('.sound4').get(0).play();
	});

	$('.chunk5').mouseleave(function(){

		$('.sound4').get(0).pause();

	});

//END CHUNK 5//

}); //end document.ready block
