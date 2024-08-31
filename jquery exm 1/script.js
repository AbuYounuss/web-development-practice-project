/*jQuery(document).ready(function(){
	jQuery("#hide").click(function(){
		jQuery(".box").hide(); 
	})
	jQuery("#show").click(function(){
		jQuery(".box").show();
	})
	jQuery("#toggle").click(function(){
		jQuery(".box").toggle(1000);
	})

	fade======
	jQuery("#fadein").click(function() {
		jQuery(".box").fadeIn(2000);
	})
	jQuery("#fadeout").click(function() {
		jQuery(".box").fadeOut(2000);
	})

	jQuery("#fadetoggle").click(function() {
		jQuery(".box").fadeToggle(2000);
	})

	jQuery("#slideup").click(function(){
		jQuery(".box").slideUp();
	})
	jQuery("#slidedown").click(function(){
		jQuery(".box").slideDown(2000);
	})
	jQuery("#slidetoggle").click(function(){
		jQuery(".box").slideToggle();
	})

	jQuery("#animate").click(function() {
		jQuery(".box").animate({left:"150px",top:"150px"},2000);
	})

});  */


jQuery(document).ready(function(){
	jQuery("ul").parent("li").children("a").append("<i class='fa fa-angle-down'></i>");

	jQuery(".menu ul li").click(function(){
		jQuery(this).children("ul").slideToggle(1000);
		return false;
	});

	jQuery("#click").click(function(){
		var width = jQuery("body").width();
		alert(width);
	});

	var width = jQuery("body").width();
	if(width <= 768) {
		jQuery(".dropdown").show();
		jQuery(".menu").hide();
		jQuery(".close").hide();
		jQuery(".open").show();
	}else{
		jQuery(".dropdown").hide();
		jQuery(".menu").show();
	}

	jQuery(".open").click(function(){
		jQuery(".menu").slideDown(100);
		jQuery(this).hide();
		jQuery(".close").show();
		return false;
	});

	jQuery(".close").click(function(){
		jQuery(".menu").hide();
		jQuery(".open").show();
		jQuery(this).hide();
		return false;
	});

	jQuery(".top").click(function(){
		jQuery("html").animate({"scrollTop":"0"},100);
	});

	/*scrolling funciton*/
	jQuery(window).scroll(function(){
		var top = jQuery(window).scrollTop();
		jQuery(".scroll-text").text(top);
	});

	jQuery(window).scroll(function(){
		var top = jQuery(window).scrollTop();
		if(top >= 957){
			jQuery("nav").addClass("mysticky");
			jQuery(".top").fadeIn(1000);
		}else{
			jQuery("nav").removeClass("mysticky");
			jQuery(".top").fadeOut(1000);
		}
	});

	jQuery(".about").click(function(){
		jQuery("html").animate({"scrollTop":"1058"},1000);
	});
	jQuery(".contact").click(function(){
		jQuery("html").animate({"scrollTop":"1500"},1000);
	});
	jQuery(".galary").click(function(){
		jQuery("html").animate({"scrollTop":"2011"},1000)
	});
	jQuery(".notice").click(function(){
		jQuery("html").animate({"scrollTop":"4148"} ,1000)
	});
	jQuery(".home").click(function(){
		jQuery("html").animate({"scrollTop":"0"},1000);
	});

	jQuery("li").hover(function(){
		jQuery(this).children("a").css({"background":"red"});
	});
	jQuery("li").mouseleave(function(){
		jQuery(this).children("a").css({"background":"linear-gradient(red,greenyellow)"})
	});

	/*table jquery*/
	jQuery('#mytable').DataTable();
});

