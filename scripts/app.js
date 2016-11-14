$(document).ready(function() {	
	
	var container = $(".container-0");
	container.click(function(){
		$(".email-0").fadeToggle();
		$(".container-0").toggleClass("closed");
		$(".container-0").toggleClass("open");
	});
	
	var container = $(".container-1");
	container.click(function(){
		$(".email-1").fadeToggle();
		$(".container-1").toggleClass("closed");
		$(".container-1").toggleClass("open");
	});
	
	var container = $(".container-2");
	container.click(function(){
		$(".email-2").fadeToggle();
		$(".container-2").toggleClass("closed");
		$(".container-2").toggleClass("open");
	});
});


