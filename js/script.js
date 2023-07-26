// Main JavaScript


$(document).ready(function() {
	
	//Loading Screen
	$("#mainNav").hide();
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	     $("#mainNav").show();
	}, 3000);
	 $("#myCarousel2").hide();
	 $("#myCarousel4").hide();
	 $("#myCarousel6").hide();
	 $("#myCarousel8").hide();

	
	//On Scroll Animation
	AOS.init({
    duration: 1200
    });
	
	//Skill Bar Animation	
$(window).on("touchmove scroll", function(e) { 

    // Do the function on ONLY ONE of the two event.
    if(e.type=="touchmove" || e.type=="scroll"){
        $('.skillbar').each(function(i){  
            if($(window).scrollTop() + $(window).height() > $(this).offset().top ){
                jQuery(this).find('.skillbar-bar').not(".triggered").addClass("triggered").animate({
                    width:jQuery(this).attr('data-percent')
                },3000);       
            } 
        }); 
    }
});


	
});

	//Roles- Header
	var current = 1; //keeps track of the current div
	var height = $('.roles').height(); //the height of the roles div
	var numberDivs = $('.roles').children().length; //the number of children of the roles div
	var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
	setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
	}, 2000);
	
	
	(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 54)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '#mainNav',
        offset: 80
    });

    // Closes the Responsive Menu on Menu Item Click
    $('#navbarResponsive>ul>li>a').click(function() {
        $('#navbarResponsive').collapse('hide');
    });

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
		
    });

    })(jQuery); // End of use strict

	//Mobile and Desktop Screenshots
    var two = document.getElementById('myCarousel2'),
    one = document.getElementById('myCarousel'),
	three = document.getElementById('myCarousel3'),
	four = document.getElementById('myCarousel4'),
	five = document.getElementById('myCarousel5'),
	six = document.getElementById('myCarousel6'),
	seven = document.getElementById('myCarousel7'),
	eight = document.getElementById('myCarousel8'),
    input1 = document.getElementById('desktop'),
    input2 = document.getElementById('mobile');
	input3 = document.getElementById('desktop2');
	input4 = document.getElementById('mobile2');
	input5 = document.getElementById('desktop3');
	input6 = document.getElementById('mobile3');
	input7 = document.getElementById('desktop4');
	input8 = document.getElementById('mobile4');
 
    input1.addEventListener('click', function() {
      two.style.display = 'none';
      one.style.display = 'block';
    })

    input2.addEventListener('click', function() {
      two.style.display = 'block';
      one.style.display = 'none';
    })
	
	input3.addEventListener('click', function() {
      four.style.display = 'none';
      three.style.display = 'block';
    })
	
	input4.addEventListener('click', function() {
      four.style.display = 'block';
      three.style.display = 'none';
    })
	
	input5.addEventListener('click', function() {
      six.style.display = 'none';
      five.style.display = 'block';
    })
	
	input6.addEventListener('click', function() {
      six.style.display = 'block';
      five.style.display = 'none';
    })
	
	input7.addEventListener('click', function() {
      eight.style.display = 'none';
      seven.style.display = 'block';
    })
	
	input8.addEventListener('click', function() {
      eight.style.display = 'block';
      seven.style.display = 'none';
    })
    
    function x(){
      console.log('x');
    }