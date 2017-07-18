var now = 0;
var timer, all;
var domouse = true;
var downmouse = true;
var upmouse = true;
var stopRotate = true;
var YPostOld, YPostNew;

$(window).on('resize', function(){
	if($(window).width() <= 768){
	 	$("br").remove();
	 	$('.progress-bar').addClass('active');
	}		
});
$(window).on('load', function(){
	if($(window).width() <= 768){
	 	$("br").remove();
	 	$('.progress-bar').addClass('active');
	}
});


$(document).ready(function(){
	mouseDown();
	mouseUp();
	//================ ENTRANCE X ANIMATION
	domouse = false;
	all = setTimeout(turnWheelBackOn, 1800);
	$('.x').css({opacity: '1'});

	//================ NAV on CLICK

	$('nav ul li a').on('click', function(){
		if($(window).width() <= 768)
			return;
		clearTimeout(all);
		stopRotate = true;
		$('.x-container').removeClass('y-container');
		$('header h3').css({color: '#161719'});
		$('header nav ul li a').css({color: '#161719'});
		$('header nav ul li a.active-nav').removeClass('active-nav');
		$('nav ul li a.active-nav').removeClass('active-nav');
		$(this).addClass('active-nav');

		if ($(this).parent().is(':first-child')) {
			navCtlr(2);
		}else if ($(this).parent().is(':nth-child(2)')) {
			navCtlr(3);
		}else if ($(this).parent().is(':nth-child(3)')) {
			navCtlr(4);
			$('header h3').css({color: 'white'});
			$('header nav ul li a').css({color: 'white'});
		}


	});

	function navCtlr(activeslide){
		domouse = false;
		all = setTimeout(function(){
			turnWheelBackOn();
			$('.progress-bar').addClass('active');
		}, 1800);
		clearTimeout(timer);
	
		timer = setTimeout(function(){
			now = now + 90;
		}, 600); 
		
		$('.active-slide').removeClass('active-slide').addClass('old-active');
		$('.x').css({opacity: '1'});
		setTimeout(function(){
			$('.container-slide section:nth-child('+activeslide+')').addClass('active-slide');
			$('.old-active').removeClass('old-active');
		}, 1300);
		xRotate();
	}
	//================ LOGO ON CLICK

	$('header h3').on('click', function(){
		stopRotate = true;
		domouse = false;
		all = setTimeout(turnWheelBackOn, 1800);
		$('header h3').css({color: '#161719'});
		$('header nav ul li a').css({color: '#161719'});
		$('header nav ul li a.active-nav').removeClass('active-nav');
		$('.x-container').removeClass('y-container');
		clearTimeout(timer);
		animateDown();
	});
	//================ ENTRANCE ANIMATION

		if ($('.active-slide').is(':first-child')) {
			upmouse = false;
			domouse =false;
			}
			animateDown();


//BINDING MOUSE FUNCTION==========

	$('body').bind('mousewheel DOMMouseScroll', function(e){
		rotateEnd();
		if(!domouse)
			return;
			domouse = false;
		all = setTimeout(turnWheelBackOn, 1800);
		if ($('.active-slide').is(':last-child')) {
			downmouse = false;
			clearTimeout(all);
			domouse = true;
		}
		
		if ($('.active-slide').is(':first-child')) {
			upmouse = false;
			clearTimeout(all);
			domouse = true;
		}
		
	 	if($(window).width() <= 768){
		}
		else{

			if(e.originalEvent.wheelDelta > 0) {
				controlUp();
			}
			else{
				controlDown();
			}
	     }
    });	

    $(document).keydown(function(e){
    if (e.keyCode == 38) { 
      	rotateEnd();
		if(!domouse)
			return;
			domouse = false;
		all = setTimeout(turnWheelBackOn, 1800);
		if ($('.active-slide').is(':last-child')) {
			downmouse = false;
			clearTimeout(all);
			domouse = true;
		}
		
		if ($('.active-slide').is(':first-child')) {
			upmouse = false;
			clearTimeout(all);
			domouse = true;
		}

		if($(window).width() <= 768){
			return;
		}
		else{
			controlUp();
		}
	}
});
//BINDING KEYS FUNCTION==========
	$(document).keydown(function(e){
	    if (e.keyCode == 40) { 
	      rotateEnd();
			if(!domouse)
				return;
				domouse = false;
			all = setTimeout(turnWheelBackOn, 1800);
			if ($('.active-slide').is(':last-child')) {
				downmouse = false;
				clearTimeout(all);
				domouse = true;
			}
			
			if ($('.active-slide').is(':first-child')) {
				upmouse = false;
				clearTimeout(all);
				domouse = true;
			}

			if($(window).width() <= 768){
				return;
			}
			else{
				controlDown();
			}
		}
	});

});

function down(){

	upmouse = true;
	if($('.active-slide').next().is(':nth-child(2)')){
		all = setTimeout(function(){
				$('.progress-bar').addClass('active');
			}, 1800);
	}
	if ($('.active-slide').next().is(':last-child')) {
		$('header h3').css({color: 'white'});
		$('header nav ul li a').css({color: 'white'});
	}
	if ($('.active-slide').is(':last-child')) {
	}
		else{
			$('.active-slide').removeClass('active-slide').addClass('old-active');
	
			clearTimeout(timer);
			if ($('.active-slide').is(':last-child')) {
				now = now;
			}
			else{
				timer = setTimeout(function(){
					now = now + 90;
				}, 600); 
			}
			$('.active-slide').removeClass('active-slide').addClass('old-active');
			setTimeout(function(){
				$('.old-active').next().addClass('active-slide');
				$('.old-active').removeClass('old-active');
			}, 1300);
			if(!stopRotate)
				return;
			setTimeout(function(){
				$('.x').css({opacity: '1'});
			});
			xRotate();
			}
}

function up(){
	rotateBack();
	downmouse = true;
	stopRotate = true;
	$('header h3').css({color: '#161719'});
	$('header nav ul li a').css({color: '#161719'});
	if ($('.active-slide').prev().is(':first-child')) {
		setTimeout(function(){
			$('.x').css({opacity: '0'});
		}, 900);
	}
	if ($('.active-slide').is(':first-child')) {
		setTimeout(function(){
			$('.x').css({opacity: '0'});
		}, 900);
		return;
	}
	else{
		clearTimeout(timer);
		timer = setTimeout(function(){
			now = now - 90;
		}, 600); 
		$('.active-slide').removeClass('active-slide').addClass('old-active');

		setTimeout(function(){
			$('.old-active').prev().addClass('active-slide');
			$('.old-active').removeClass('old-active');
		}, 1300);
		xRotate();
	}			
}

function turnWheelBackOn() {
 	domouse = true; 
}
function rotateEnd(){
	if ($('.active-slide').next().is(':last-child')) {
			stopRotate = false;
		}
		
}
function rotateBack(){
	if ($('.active-slide').is(':last-child')) {
			now = now - 90;
	}
}

function mouseDown(e){
	$('.slide-item').on('mousedown', function(e){
		YPostOld = e.pageY;
		console.log(YPostOld);
		return YPostOld;
	});
}
function mouseUp(e){
	$('.slide-item').on('mouseup', function(e){
		YPostNew = e.pageY;
		console.log(YPostNew);
		onDrag(YPostOld)
	});
}

function onDrag(){
	rotateEnd();
		if(!domouse)
			return;
			domouse = false;
		all = setTimeout(turnWheelBackOn, 1800);
		if ($('.active-slide').is(':last-child')) {
			downmouse = false;
			clearTimeout(all);
			domouse = true;
		}
		
		if ($('.active-slide').is(':first-child')) {
			upmouse = false;
			clearTimeout(all);
			domouse = true;
		}

	if($(window).width() <= 768){
	
	}
	else{
		if(YPostNew == YPostOld){
			return;
		}
		else if(YPostNew < YPostOld){
	
			controlUp();
		}
		else{
	
			controlDown();

		}
	}
	
}

function controlUp(){
	if (!upmouse)
	return;
	$('.x-container').removeClass('y-container');
	up();
}

function controlDown(){
	if (!downmouse)
				return;
				if($('.active-slide').next().is(':last-child')){
					setTimeout(function(){
						$('.x-container').addClass('y-container');
					},600);
			
				}

				if($('.active-slide').next().is(':last-child')){
					upmouse = true;
					if (!upmouse)
					return;
					$('header h3').css({color: 'white'});
					$('header nav ul li a').css({color: 'white'});
					$('.active-slide').removeClass('active-slide').addClass('old-active');
					clearTimeout(timer);
					timer = setTimeout(function(){
						now = now + 90;
					}, 600);

					$('.active-slide').removeClass('active-slide').addClass('old-active');
					
					setTimeout(function(){
						$('.old-active').next().addClass('active-slide');
						$('.old-active').removeClass('old-active');
					}, 600);

					if(!stopRotate)
					return;

					setTimeout(function(){
						$('.x').css({width: '90px'});
					}, 300);

					setTimeout(function(){
						$('.x').css({transform: 'rotate(' + now + 'deg)'});
					}, 600);

					setTimeout(function(){
					$('.x').css({width: '50px'});
					}, 900);

				}

				else{
					down();
				}
}

//nav animations/entrance=======

function animateDown(){
			if($('.active-slide').is(':last-child')){
				timer = setTimeout(function(){
				now = now;
			}, 600); 
			}
			else{
				timer = setTimeout(function(){
				now = now + 90;
			}, 600); 
			}
			
			$('.active-slide').removeClass('active-slide').addClass('old-active');
			setTimeout(function(){
				$('.container-slide section:first-child').addClass('active-slide');
				$('.old-active').removeClass('old-active');
			}, 1300);
			setTimeout(function(){
				$('.x').css({opacity: '0'});
			},900);
			xRotate();
			
}


function xRotate(){
	setTimeout(function(){
		$('.x').css({width: '90px'});
	}, 300);
	setTimeout(function(){
		$('.x').css({transform: 'rotate(' + now + 'deg)'});
	}, 600);
	setTimeout(function(){
		$('.x').css({width: '50px'});
	}, 900);
}
