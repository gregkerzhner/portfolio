	$(document).ready(function(){
		var x=200;
	var wiggleRight = function(element,delta){
		var maxWidth;
		var margin =  parseInt(element.css("margin-left"))+delta
		element.css("margin-left", margin);
		delta+=1;
		maxWidth = (parseInt($(".animation").css("width"))/2)-320
		if (margin<maxWidth){
			setTimeout(wiggleRight, 20, element, delta);
		}
	}
	var wiggleLeft = function(element,delta){
		var margin =  parseInt(element.css("margin-right"))+delta
		element.css("margin-right", margin);
		delta+=1;
		maxWidth = parseInt($(".animation").css("width"))/2

		if (margin<maxWidth){			
			setTimeout(wiggleLeft, 20, element, delta);
		}
		else{
			element.addClass("fancier");
		}

	
	}

	wiggleRight($("#tara"),1);
	wiggleLeft($("#reynvaan"),1);
	//wiggle($("#reynvaan"),-1);
	
});