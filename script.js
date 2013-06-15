$(document).ready(function() {


		function addResCheck () {
			



			$.get( "http://localhost:8080/DCT/tests/GoogleChromeExt/extension-unpacked/myApp/injectScript.js", function(sScriptBody, 
				textStatus, jsXHR){ 
				        chrome.tabs.executeScript(null, {code: sScriptBody} ); 
				        
				} , "text"); 	




		}


	var windowResolution = function () {



		function myfunction () {
			setTimeout(function() {
				chrome.tabs.executeScript(null, {file:"injectSript.js"} );
				//chrome.tabs.executeScript(null,{code:"addResCheck()"});
			}, 400);
		}

		chrome.tabs.executeScript(null, {file:"jquery.min.js"}, myfunction() );
		chrome.tabs.insertCSS(null, {file:"/injectCss.css"} );
	}




	var callbackhey = function () {
		setTimeout(function () {


			//chrome.tabs.executeScript(null,{code:"document.body.style.backgroundColor='green'"});
//chrome.tabs.executeScript(null, {file:"injectSript.js"} );

			//chrome.tabs.executeScript(null, {"file":"/jquery.min.js"});
	
			//alert('jquery added');

		}, 1000)
	}

	//app events
	$('.addjquery').bind('click', function () {
addResCheck();
		//callbackhey();
		
	});






	$('.showRes').bind('click', function () {
		var check = $('.resWrap').length;

		if(check === 0) {
			windowResolution();
		} else {
			return null;
		}
		
	});












	$('.workTabs').bind('click', function () {
		chrome.tabs.create({
			"url":"http://www.facebook.com",
			"pinned":true,
			"active": false
		});
		chrome.tabs.create({
			"url":"http://www.bugherd.com/projects/14760/kanban",
			"pinned":true,
			"active": false
		});
		chrome.tabs.create({
			"url":"https://www.youtube.com/?feature=ytca",
			"pinned":true,
			"active": false
		});
	});


});