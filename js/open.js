var isShow = false;
$(document).ready( function() {		
	$("#RightDiv").delay(1000).animate({'right':'-500px'}, 600,	function(){
			$('a.close').click(showDiv);
			isShow = false;
		}
	);

});

var showDiv = function(){
	if(!isShow) {
		$("#RightDiv").animate({'right':'0px'}, 600, function(){
			isShow = true;
			$("header").css({'background':'#dbe000'});
		});
	}
	else{
    	$("#RightDiv").animate({'right':'-500px'}, 600, function(){
			isShow = false;
			$("header").css({'background':'none'});
		});
	}
}