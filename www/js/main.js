/*--
AUTHOR   : Faisal Russel(russel365)
URL      : http://afrussel.com
TEMPLATE : Soon
VERSION  : 1.0

TABLE OF CONTENTS
1. function to reveal element 						line 26
2. reveal element on scroll 						line 50
3. reveal element on scroll (in small devices) 		line 57
4. open theme switcher 								line 66
5. change color theme 								line 76
6. more info clicked 								line 83
7. close info link clicked 							line 112
8. activate YouTube video background				line 134
9. activate countdown 								line 187
10. back to top link clicked 						line 200
11. validate and submit subscribe form 				line 207
12. validate and submit contact us form 			line 267
--*/


(function($) {
	'use strict';
	
	//-- function to reveal element that entering viewport (in info section)
	function RevealElement(){
		'use strict';
		
		var topOfWindow;
		var revealFactor = $(window).height();
				
		//-- if in extra small device
		if($(window).width()<768){
			topOfWindow = $(window).scrollTop();
		}
		else{
			topOfWindow = $('#info-wrapper').scrollTop();
		}
		
		var element_class = ["close-link","about","subscribe","contact","back-to-top"];
		
		for(var i=0;i<element_class.length;i++){
			if($('.'+element_class[i]).offset().top < (topOfWindow+revealFactor)){
				$('.'+element_class[i]).addClass('fadeInUp');
			}
		}
	}
		
	//-- reveal element on scroll (in info section)
	$('#info-wrapper').scroll(function(){
		if($('#info-wrapper').is(':visible')){
			RevealElement();
		}
	});
	
	//-- reveal element on scroll (in info section) -- IN SMALL DEVICES
	$(window).scroll(function(){
		if($(window).width()<768){
			if($('#info-wrapper').is(':visible')){
				RevealElement();
			}
		}
	});
	
	//-- open theme switcher
	$('.switch').click(function(e) {
        if($('#theme-switcher').hasClass('open')){
			$('#theme-switcher').removeClass('open');
		}
		else{
			$('#theme-switcher').addClass('open');
		}
    });
	
	//-- change color theme
	$('.switch-theme').each(function(index, element) {
        $(this).on("click",function(){
			$('#current-theme').attr('href',$(this).attr('data-theme'));
		});
    });
	
	//-- more info clicked
	$('.more-info').click(function(e) {
		//-- set scroll top to 0
		$('html,body').animate({
			scrollTop:0
		},100,"easeOutCirc",function(){
			//-- hide home section
		$('#home-wrapper').addClass('zoomOut');
		
		//-- show info section
		$('#info-wrapper').show('fast',function(){
			$(this).css({
				opacity:1,
				top:0
			});
		});
				
		//-- show info content
		setTimeout(function(){
			RevealElement();
			//-- hide gradient overlay
			$('.overlay').css('opacity',0);
			
			//-- for smoother entrance animation
			$('.info-link').addClass('hide-after');
		},1000);
		});
    });
	
	//-- close info link clicked
	$('.close-info').click(function(e) {
        //-- hide info section
		$('#info-wrapper').css({
			opacity:0,
			top:'100%'
		});
		
		//-- show gradient overlay
		$('.overlay').css('opacity',0.9);
		
		setTimeout(function(){
			$('#info-wrapper').hide();
			
			//-- enable :after and :before hover effect
			$('.info-link').removeClass('hide-after');
		},1000);
		
		//-- show home element
		$('#home-wrapper').removeClass('zoomOut').addClass('zoomIn');
    });
	
	//-- activate youtube video background (only on large device)
	if($(window).width() >= 1200){
		$('.player').mb_YTPlayer();
		
		//-- PRELOADER
		$('.player').on("YTPStart",function(){
			$('#preloader').addClass('fadeOut');
			//-- hide preloader div
			setTimeout(function(){
				$('#preloader').css('z-index','1');
			},1000);
		
			//-- disable hide-after class (hide after -> for smoother animation on entrance)
			setTimeout(function(){
				$('.info-link').removeClass('hide-after');
			},1500);
		
		
			$('header, .home h1, .days_dash').addClass('fadeInDown');
			$('footer, .info-link, .hours_dash').addClass('fadeInUp');
		});
	}
	else{
		//-- activate backstretch on small devices tablets or smartphone
		$.backstretch([
			/*"http://placehold.it/2048x1365",
			"http://placehold.it/2048x1365"*/
			"img/sample.jpg",
			"img/sample2.jpg"
		],{
			duration:6000,
			fade:'normal'
		});
		
		//-- PRELOADER
		$(window).load(function() {
			$('#preloader').addClass('fadeOut');
			//-- hide preloader div
			setTimeout(function(){
				$('#preloader').css('z-index','1');
			},1000);
		
			//-- disable hide-after class (hide after -> for smoother animation on entrance)
			setTimeout(function(){
				$('.info-link').removeClass('hide-after');
			},1500);
		
		
			$('header, .home h1, .days_dash').addClass('fadeInDown');
			$('footer, .info-link, .hours_dash').addClass('fadeInUp');
		});
	}
	
	//-- countdown
	$('.countdown').countDown({
		targetDate: {
			'day': 		0,
			'month': 	0,
			'year': 	0,
			'hour': 	0,
			'min': 		0,
			'sec': 		0
		},
		omitWeeks:true
	});
	
	//-- back to top link clicked
	$('.back-to-top').click(function(e) {
        $('#info-wrapper, html, body').animate({
			scrollTop:0
		},1000,"easeOutCirc");
    });
		
	//-- validate and submit subscribe form
	$('.subscribe-form').validate({
		rules: {
        	email: {
            	required: true,
                email: true
            }
        },
		messages: {
			email: {
				required: "Please insert your email address",
				email: "Your email address is not valid"
			}
		},
		submitHandler: function(form) {
			var url_dest = $(form).attr('action');
			var form_data = $(form).serialize();
			
			//-- show loading
			$('.subscribe-form').append('<label class="loading-subscribe">Please wait</label>');
			$('.loading-subscribe').fadeIn('fast');
			
			$.post(url_dest,form_data,function(data){
				var success = data;
				
				if(success == 1){
					//-- reset form
					$(form).trigger('reset');
					
					//-- hide loading
					$('.loading-subscribe').fadeOut('fast',function(){
						//-- show notif
						$('.subscribe-form').append('<label class="subscribe-notif-success">Thank you for subscribing us.</label>');
						$('.subscribe-notif-success').fadeIn('fast').delay(5000).fadeOut('fast',function(){
							$(this).remove();
							$('.loading-subscribe').remove();
						});
					});
				}
				else{
					//-- reset form
					$(form).trigger('reset');
					
					//-- hide loading
					$('.loading-subscribe').fadeOut('fast',function(){
						//-- show notif
						$('.subscribe-form').append('<label class="subscribe-notif-error">Error.</label>');
						$('.subscribe-notif-error').fadeIn('fast').delay(5000).fadeOut('fast',function(){
							$(this).remove();
							$('.loading-subscribe').remove();
						});
					});
				}
			});
			
			return false;
		}
	});
	//-- end validate and submit subscribe form
	
	//-- validate and submit contact us form
	$('.contact-form').validate({
		rules: {
        	email: {
            	required: true,
                email: true
            },
			name: {
            	required: true
            },
			subject: {
				required: true
			},
			message: {
            	required: true
            }
        },
		messages: {
			email: {
				required: "Please insert your email address",
				email: "Your email address is not valid"
			},
			subject: {
				required : "Please insert the subject"
			},
			name: {
				required: "Please insert your name"
			},
			message: {
				required: "Please insert the message"
			},
		},
		submitHandler: function(form) {
			var url_dest = $(form).attr('action');
			var form_data = $(form).serialize();
			
			//-- show loading
			$('.notif-contact-container').append('<label class="loading-contact">Please wait</label>');
			$('.loading-contact').fadeIn('fast');
			
			$.post(url_dest,form_data,function(data){
				var success = data;
				
				if(success == 1){
					//-- reset form
					$(form).trigger('reset');
					
					//-- hide loading
					$('.loading-contact').fadeOut('fast',function(){
						//-- show notif
						$('.notif-contact-container').append('<label class="contact-notif-success">Thank you for contacting us. We will reply you shortly.</label>');
						$('.contact-notif-success').fadeIn('fast').delay(5000).fadeOut('fast',function(){
							$(this).remove();
							$('.loading-contact').remove();
						});
					});
				}
				else{
					//-- reset form
					$(form).trigger('reset');
					
					//-- hide loading
					$('.loading-contact').fadeOut('fast',function(){
						//-- show notif
						$('.notif-contact-container').append('<label class="contact-notif-error">Error.</label>');
						$('.contact-notif-error').fadeIn('fast').delay(5000).fadeOut('fast',function(){
							$(this).remove();
							$('.loading-contact').remove();
						});
					});
				}
			});
			
			return false;
		}
	});
	//-- end validate and submit contact us form
})(jQuery);