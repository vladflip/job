$(document).ready(function(){
		$("#modelslider").owlCarousel({
			animateOut: 'fadeOutDown',
			items:1,
			margin:400,
			stagePadding:30,
			smartSpeed:450,
			autoplay:true,
			autoWidth:true,
			loop:true,
			margin:150
		});
		$("#actressslider").owlCarousel({
			animateOut: 'fadeOutDown',
			items:3,
			margin:30,
			stagePadding:30,
			smartSpeed:450,
			nav:true,
			dots:false,
			autoWidth:true,
			autoplay:true,
			navText:["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
			loop:true
		});
});