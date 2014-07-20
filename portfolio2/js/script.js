  // $(document).ready(function(){
		// 	document.getElementsByClassName("lastimg")[0].onload = function(){
		// 		var arr = $(".slidernext");
  // 				for(i=0;i<arr.length;i++){
  // 					var width = arr[i].clientWidth;
  // 					var margin = width>950?0:(950-width)/2;
  // 					arr[i].style.width = width+'px';
  // 					arr[i].setAttribute("style","margin-left:" + margin.toString() + "px"); 				
  // 				}
		// 	}
  // })
  				$("#slidernews").owlCarousel({
					  navigation : true, // Show next and prev buttons
					  singleItem:true,
					  paginationSpeed : 2000,
					  autoPlay:4000,
					  lazyLoad:true
  			});

  			// 	$("#slidertop").zAccordion({
  			// 		trigger:'click',
  			// 		easing: 'linear',
  			// 		speed:500,
					// timeout: 4000,
					// slideWidth: 800,
					// width: 950,
					// height: 596

  			// 	});
  			// var imgarr = $('#slidertop img');
  			// imgarr[0].style.marginLeft = '-50px';
  			// imgarr[2].style.marginLeft = '-50px';
  			// $("#slider").owlCarousel({
					//   navigation : true, // Show next and prev buttons
					//   autoPlay : 3000,
					//   paginationSpeed : 2000,
					//   singleItem:true,
					//   lazyLoad:true
  			// });

// var div = document.getElementById("sort");
// var menu = $("#menu ul li");
// 		menu[0].onclick= function(){
// 			$('html,body').animate({
//           		scrollTop: document.getElementById("header").offsetTop - 79
//         	}, 1000);

// 		}

// 		menu[1].onclick= function(){
// 			$('html,body').animate({
//           		scrollTop: document.getElementById("bio").offsetTop - 79
//         	}, 1000);


// 		}

// 		menu[2].onclick= function(){
// 			$('html,body').animate({
//           		scrollTop: document.getElementById("model").offsetTop - 79
//         	}, 1000);


// 		}

// 		menu[3].onclick= function(){
// 			$('html,body').animate({
//           		scrollTop: document.getElementById("footer").offsetTop - 79
//         	}, 1000);


// 		}

// var header = document.getElementById("header");
// var bio = document.getElementById("bio");
// var model = document.getElementById("model");
// var footer = document.getElementById("footer");
// window.onscroll = function(){
// 	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	
// 	if(scrollTop<bio.offsetTop-2) div.style.marginLeft = '0px';
// 	if(scrollTop>bio.offsetTop-100&&scrollTop<model.offsetTop) div.style.marginLeft = '90px';
// 	if(scrollTop>model.offsetTop-100&&scrollTop<footer.offsetTop) div.style.marginLeft = '175px';
// 	if(scrollTop>model.offsetTop+20) div.style.marginLeft = '255px';
// }

// var next = document.getElementsByClassName("owl-next")[0];
// var prev = document.getElementsByClassName("owl-prev")[0];

// next.innerHTML = '';
// prev.innerHTML = '';
