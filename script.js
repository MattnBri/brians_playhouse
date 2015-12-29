$(document).ready(function(){
	$('.main-element').on('mouseenter', function(event) {
		console.log('Hello from inside the mouse enter function!');
    $(this).children().show();
	});
	$('.main-element').on('mouseleave', function(event) {
		$('.main-element>ul').hide();
	});
	// $('li>ul').mouseenter(function() {
	// 	$(this).show();
	// });
});
