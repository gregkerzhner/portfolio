$(document).ready(function(){
	var x=200;
	var wiggle = function(tag,delta){
		if(delta<0){
			marginRight = tag.css("margin-right");
			tag.css("margin-right",marginRight-delta);
			setTimeout(wiggle,200,[tag, delta-1]);
			
		}
		else{
			//marginLeft = tag.css("margin-left");
			tag.css("margin-left",0+delta);	
			setTimeout(wiggle,200,[tag, delta+1]);	
		}
		setTimeout(wiggle,200,[tag, delta+1]);
	}

	wiggle($("#tara"),1);
	//wiggle($("#reynvaan"),-1);
	
});