$(document).ready(function() {	
	$(".email-0").hide();
	$(".email-1").hide();
	$(".email-2").hide();

	var container = $(".container-0");
	container.click(function(){
		$(".email-0").fadeToggle("1");
	});
	
		var container = $(".container-1");
	container.click(function(){
		$(".email-1").fadeToggle("1");
	});
	
		var container = $(".container-2");
	container.click(function(){
		$(".email-2").fadeToggle("1");
	});
});


