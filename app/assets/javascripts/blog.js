	$(document).ready(function(){
		var x=200;
	var wiggleRight = function(element,delta){
		var maxWidth;
		var margin =  parseInt(element.css("margin-left"))+delta
		element.css("margin-left", margin);
		delta+=1;
		var width = parseInt($("#tara").css("width"));
		maxWidth = (parseInt($(".animation").css("width"))/2);
		if ((margin+width+delta)<maxWidth){
			setTimeout(wiggleRight, 20, element, delta);
		}	
	}
	var wiggleLeft = function(element,delta){
		var margin =  parseInt(element.css("margin-right"))+delta
		element.css("margin-right", margin);
		delta+=1;
		maxWidth = parseInt($(".animation").css("width"))/2
		var width = parseInt($("#reynvaan").css("width"));
		if ((margin+width+delta)<maxWidth){			
			setTimeout(wiggleLeft, 20, element, delta);
		}
		else{
			element.addClass("fancier");
			$(".intro").css("height", "40%");
			margin = (parseInt($(".animation").css("width"))/2) - (parseInt($(".intro").css("width"))/2);
			$(".intro").css("margin-left",margin);
			$(".intro").collapse();
		}

	
	}

	wiggleRight($("#tara"),1);
	wiggleLeft($("#reynvaan"),1);	
	$("#enter").click(function(){
		$(".intro-screen").collapse();
		$(".main").show();
		$("body").css("background-color","#212120");
	})
	$(".album-link").click(function(){
	  $(".album-link").removeClass("current");
	  $(".album").empty();
	  $("#slider").hide();
	  $(".album").show();
	  $(this).addClass("current");
	  $.ajax({
        url: "/album",
        type: "post",
        data: "title="+this.text,
        // callback handler that will be called on success
        success: function(response, textStatus, jqXHR){
           var html = '<div class="photo"><img alt="_mg_1036" class="reynvaan-photo" id="reynvaan-photo0" src="/uploads/photo/photo/8/_MG_1036.jpg"></div>';
		   $(".album").empty();
           for(var i = 0; i<response.length;i++){
	
             var src = response[i].photo.url;
             html = '<div class="photo"><img alt="_mg_1036" class="reynvaan-photo" id="reynvaan-photo0" src="'+src+'"></div>';
             $(".album").append(html);

           }           
	  
           $(".reynvaan-photo").click(function(){
           	 $(".carousel-inner").empty();
           	 $(".album").hide();
           	 $("#slider").show();

         

           	 for( i = 0;i<response.length;i++){
           	 	src = response[i].photo.url;
           	 	if(i === 0){
           	 		html = '<div class="active item"><img src="'+src+'" alt=""></div>';
           	 	}
           	 	else{
           	 		html = 	'<div class="item"><img src="'+src+'" alt=""></div>';
           	 	}
           	 	$(".carousel-inner").append(html);
           	 }
           });
        },
        // callback handler that will be called on error
        error: function(jqXHR, textStatus, errorThrown){
           alert("no")
        
        }
      });

	})
	$(".current").click();
});