RESUME = function(){   
    var _this;

    return{
    	init:function(){
    		//console.log('started');  

    		
			$('[data-scroll-nav]').navScroll({header:75});
		
    		

    	}
    }
}();

// load on document ready
$(function() {
	RESUME.init();
});;/*tracking*/