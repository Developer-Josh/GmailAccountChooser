$(document).ready(function() {	
	
	var $container0 = $(".container-0");
	var $container1 = $(".container-1");
	var $container2 = $(".container-2");
	var $email0 = $(".email-0");
	var $email1 = $(".email-1");
	var $email2 = $(".email-2");

	//Begin Keyboard Shortcut Functions
	//Shift + o expand all tab containers
	Mousetrap.bind('shift+o', function() {
		toggleAction($email0, $container0)
		toggleAction($email1, $container1)
		toggleAction($email2, $container2)

	});
	
	//Shift + 0 expand Container 0
	Mousetrap.bind('shift+0', function() {
		toggleAction($email0, $container0)
	});
	
	//Shift + 1 expand Container 1
	Mousetrap.bind('shift+1', function() {
		toggleAction($email1, $container1)
	});
	
	//Shift + 1 expand Container 2
	Mousetrap.bind('shift+2', function() {
		toggleAction($email2, $container2)
	});
	//End Keyboard Shorcut Functions
	
	//Click function for opening containers
	function toggleAction ($email, $container) {
		$email.fadeToggle();
		$container.toggleClass("closed");
		$container.toggleClass("open");
	};

	$container0.click(function() {
		toggleAction($email0, $container0)
	});
	
	$container1.click(function() {
		toggleAction($email1, $container1)
	});
	
	$container2.click(function() {
		toggleAction($email2, $container2)
	});
});