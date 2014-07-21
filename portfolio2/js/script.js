  

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
  				$(document).ready(function(){
            $("#slidernews").owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOutDown',
            items:1,
            margin:0,
            stagePadding:30,
            smartSpeed:450,
            nav:true,
            autoWidth:true,
            navText:["",""],
            loop:true
        });
          $("#bottomslider").owlCarousel({
            animateOut: 'fadeOutDown',
            items:1,
            margin:200,
            stagePadding:30,
            smartSpeed:450,
            nav:true,
            autoWidth:true,
            //autoplay:true,
            navText:["",""],
            loop:true,
            margin:150
          });
          // var newsimg = $(".slidernewsimg");
          // var imglen = newsimg.length;
          // for(var i =0; i<imglen; i++){
          //   var h = Math.ceil(345/newsimg[i].width)*newsimg[i].height;
          //   alert(h);
          // }
          })

          $("#chevronup").click(function(){
            var margin = $(this).parent().css("margin-top").slice(0,-2);
            if($(this).hasClass("up")){
            $(this).parent().css("margin-top",+margin-220 + 'px');
              $(this).removeClass("up");
              $(this).addClass("down");
              $(this).attr("src","img/chevrondown.png");
            }else{
            $(this).parent().css("margin-top",+margin+220 + 'px');
            $(this).removeClass("down");
              $(this).addClass("up");
              $(this).attr("src","img/chevron.png");
            }
          })

          $("#chevronblack").click(function(){
            var margin = $("#textsliderdiv").css("margin-top").slice(0,-2);
            if($(this).hasClass("up")){
              if($(this).hasClass("upnext")){

                  $("#textsliderdiv").css("margin-top",+margin-180 + 'px');
                  $(this).removeClass("upnext");
                  $(this).removeClass("up");
                  $(this).addClass("down");
              $(this).attr("src","img/chevronblackup.png");
                    }else{
                  $("#textsliderdiv").css("margin-top",+margin-440 + 'px');
                  $(this).addClass("upnext");
                  }
            }else{
            if($(this).hasClass("downnext")){

                  $("#textsliderdiv").css("margin-top",+margin+440 + 'px');
                  $(this).removeClass("downnext");
                  $(this).removeClass("down");
                  $(this).addClass("up");
              $(this).attr("src","img/chevronblack.png");
                    }else{
                  $("#textsliderdiv").css("margin-top",+margin+180 + 'px');
                  $(this).addClass("downnext");
                }
            }
          })
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

var header = document.getElementById("header");
var news = document.getElementById("newsblock");
var bio = document.getElementById("bioblock");
var portfolio = document.getElementById("portfolio");
var footer = document.getElementById("footer");
var menu = $("#header li");
		menu[0].onclick= function(){
			$('html,body').animate({
          		scrollTop: header.offsetTop - 60
        	}, 1000);

		}

		menu[1].onclick= function(){
			$('html,body').animate({
          		scrollTop: news.offsetTop - 60
        	}, 1000);


		}

		menu[2].onclick= function(){
			$('html,body').animate({
          		scrollTop: bio.offsetTop - 60
        	}, 1000);


		}

		menu[3].onclick= function(){
      $('html,body').animate({
              scrollTop: portfolio.offsetTop - 60
          }, 1000);
}
    menu[4].onclick= function(){
			$('html,body').animate({
          		scrollTop: footer.offsetTop - 60
        	}, 1000);


		}

function clearitem(){
  for(i=0;i<5;i++){
    menu[i].className = '';
  }
}
window.onscroll = function(){
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	
	if(scrollTop<news.offsetTop-2) {clearitem(); menu[0].className = 'menuitem';}
	if(scrollTop>news.offsetTop-70&&scrollTop<bio.offsetTop) {clearitem(); menu[1].className = 'menuitem';}
	if(scrollTop>bio.offsetTop-70&&scrollTop<portfolio.offsetTop) {clearitem(); menu[2].className = 'menuitem';}
	if(scrollTop>portfolio.offsetTop-70) {clearitem(); menu[3].className = 'menuitem';}
  if(scrollTop>portfolio.offsetTop+350) {clearitem(); menu[4].className = 'menuitem';}
}


