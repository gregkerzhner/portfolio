

$(document).ready(function(){
	var x=200;
	if($.browser.msie){	
		$(".ie-fail").removeClass("hide");
		$(".intro-screen").hide();
		return;
	}
	var hideIntro = function(){
		$(".intro-screen").collapse();
		$(".main").show();
		$("body").css("background-color","#212120");
	}
	var animationWidth = parseInt($(".animation").css("width"));
	var wiggleRight = function(element,delta){
		var maxWidth;
		var margin =  parseInt(element.css("margin-left"))+delta
		element.css("margin-left", margin);
		delta+=1;
		var width = parseInt($("#tara").css("width"));
		maxWidth = (parseInt($(".animation").css("width"))/2);
		if ((margin+width+delta)<maxWidth){
			setTimeout(wiggleRight, 10, element, delta);
			$(".animation").css("height", parseInt($(".animation").css("height"))+1);
		}	
		else{
			var maxMargin = (animationWidth/2) - parseInt($("#tara").css("width"));
			$("#tara").css("margin-left",maxMargin+"px");
			$(".intro").css("margin-left",maxMargin+"px");	
			$(".intro").css("padding-bottom", "10px");		
			$(".intro").collapse();
			
		}
	}
	var wiggleLeft = function(element,delta){
		var margin =  parseInt(element.css("margin-right"))+delta
		element.css("margin-right", margin);
		delta+=1;
		maxWidth = parseInt($(".animation").css("width"))/2
		var width = parseInt($("#reynvaan").css("width"));
		if ((margin+width+delta)<maxWidth){			
			setTimeout(wiggleLeft, 10, element, delta);
		}
		else{
			element.addClass("fancier");
			var maxMargin =  (animationWidth/2) - parseInt($("#reynvaan").css("width"))-20;
			$("#reynvaan").css("margin-right",maxMargin+"px");			
			setTimeout(hideIntro, 2000);
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
	  $("#slider").hide();
	  $(".album").empty();
	  $(".album").css("height","auto");
	  $(this).addClass("current");
	  $.ajax({
        url: "/album",
        type: "post",
        data: "title="+this.text,
        dataType : 'json',
        success: function(response, textStatus, jqXHR){
           var html = '<div class="photo"><img alt="_mg_1036" class="reynvaan-photo" id="reynvaan-photo0" src="/uploads/photo/photo/8/_MG_1036.jpg"></div>';
		   for(var i = 0; i<response.length;i++){	
             var src = response[i].photo.url;
             html = '<div class="photo"><img alt="_mg_1036" class="reynvaan-photo" id="reynvaan-photo'+i+'" src="'+src+'"></div>';
             $(".album").append(html);
           }  
           $(".reynvaan-photo").click(function(){
           	 var id = $(this).attr("id");
           	 var index = parseInt(id[14]+id[15]);           	 
           	 $(".carousel-inner").empty();
           	 $(".album").css("height","0px");          	
           	 $("#slider").show(); 
           	 for( i = 0;i<response.length;i++){
           	 	src = response[i].photo.url;
           	 	if(i === index){
           	 		html = '<div class="active item"><img src="'+src+'" alt=""></div>';
           	 	}
           	 	else{
           	 		html = 	'<div class="item"><img src="'+src+'" alt=""></div>';
           	 	}
           	 	$(".carousel-inner").append(html);
           	 }
       		});

        }
      });
	})
	$(".current").click();
	$(".contact-link").click(function(){
		$(".main").hide();
		$(".contact-page").show();
	});
	$("#name").mousedown(function(){
		$(".main").hide();
		$(".contact-page").show();
	});
	$("#contact-go-back").click(function(){
		$(".contact-page").hide();
		$(".main").show();
	});
});