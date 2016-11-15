$(document).ready(function() {	
	//Begin Keyboard Shortcut Functions
	//Shift + o Open all tab containers
	Mousetrap.bind('shift+o', function() {
		$(".email-0").fadeToggle();
		$(".container-0").toggleClass("closed");
		$(".container-0").toggleClass("open");
		
		$(".email-1").fadeToggle();
		$(".container-1").toggleClass("closed");
		$(".container-1").toggleClass("open");
		
		$(".email-2").fadeToggle();
		$(".container-2").toggleClass("closed");
		$(".container-2").toggleClass("open");
	});
	
	//Shift + 0 Open Container 0
	Mousetrap.bind('shift+0', function() {
		$(".email-0").fadeToggle();
			$(".container-0").toggleClass("closed");
			$(".container-0").toggleClass("open");
	});
	
	//Shift + 1 Open Container 1
	Mousetrap.bind('shift+1', function() {
		$(".email-1").fadeToggle();
			$(".container-1").toggleClass("closed");
			$(".container-1").toggleClass("open");
	});
	
	//Shift + 1 Open Container 2
	Mousetrap.bind('shift+2', function() {
		$(".email-2").fadeToggle();
			$(".container-2").toggleClass("closed");
			$(".container-2").toggleClass("open");
	});
	//End Keyboard Shorcut Functions
	
	//Click function for opening container-0
	var container = $(".container-0");
	container.click(function(){
		$(".email-0").fadeToggle();
		$(".container-0").toggleClass("closed");
		$(".container-0").toggleClass("open");
	});
	
	//Click function for opening container-1
	var container = $(".container-1");
	container.click(function(){
		$(".email-1").fadeToggle();
		$(".container-1").toggleClass("closed");
		$(".container-1").toggleClass("open");
	});
	
	//Click function for opening container-2
	var container = $(".container-2");
	container.click(function(){
		$(".email-2").fadeToggle();
		$(".container-2").toggleClass("closed");
		$(".container-2").toggleClass("open");
	});
});


