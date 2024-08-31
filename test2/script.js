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



jQuery(document).ready(function() {

	jQuery("ul").parent("li").children("a").append("<i class='fa fa-angle-down'></i>");
	jQuery(".menu ul li").click(function(){
		jQuery(this).children("ul").slideToggle(2000);
		return false;
	});
});

