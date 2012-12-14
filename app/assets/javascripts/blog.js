	$(document).ready(function(){
		var x=200;
	var wiggleRight = function(element,delta){
		var maxWidth;
		var margin =  parseInt(element.css("margin-left"))+delta
		element.css("margin-left", margin);
		delta+=1;
		maxWidth = (parseInt($(".animation").css("width"))/2)-340
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
			$(".intro").css("height", "40%")
			$(".intro").collapse();
		}

	
	}

	wiggleRight($("#tara"),1);
	wiggleLeft($("#reynvaan"),1);
	$("#enter").click(function(){
		$(".intro-screen").collapse();
		$(".main").show();
		$("body").css("background-color","white");
	})
	$(".album-link").click(function(){
	  $.ajax({
        url: "/album",
        type: "post",
        data: "title="+this.text,
        // callback handler that will be called on success
        success: function(response, textStatus, jqXHR){
           for(var i = 0; i<response.length;i++){
            	var photo = response[i]
           }
        },
        // callback handler that will be called on error
        error: function(jqXHR, textStatus, errorThrown){
           alert("no")
        
        }
      });
	})
});