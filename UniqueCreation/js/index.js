$(document).ready(function() {
	var docWidth=$( window ).width();
	var docHeight=$( window ).height();


     $('#bgImgDiv').addClass( "rotateIn" );
     $('#bgImgDiv').css('height', docHeight+"px");
     $('#menuOverlayDiv').css('width', docWidth+"px").css('height', docHeight+"px");

     $( "#menuIcon img" ).click(function() {
  		

  		$( "#menuOverlayDiv" ).animate({
		    height: "toggle"
		  }, 1000, function() {
		    // Animation complete.
  		});

	 });

	 $( "#closeIcon img" ).click(function() {
  		$( "#menuOverlayDiv" ).animate({
		    height: "toggle"
		  }, 1000, function() {
		    // Animation complete.
  		});
	 });


	 //Gallery Page
	 $('.card').mouseenter(function() {
		  $( this ).animate({
		    top: '-10'
		  }, 200, function() {
		    $(this).css('borderBottom', '5px solid rgba(167,128,72,1)');
  		});
	 });	

	 $('.card').mouseleave(function() {
		  $( this ).animate({
		    top: '0'
		  }, 200, function() {
		    $(this).removeAttr('style');		    
  		});
	 });	 

});
