
(function($, window, document, undefined) {

	$.widget('mbrennan.navScroll', {
		
		
		// Default options
		options: {
			select:'[data-scroll-nav-test]',
			speed:'1000',
			header: 0		
		},

		_create: function() {
			var self = this;
			self.install();			
		},

		install: function() {
			var self = this,
				options = self.options,
				element = self.element;
						
			//process the sections
			var sectionEl = $('#'+$(element).data('scroll-nav'));			
			var section = {							
				name: $(element).data('scroll-nav'),
				element: element,
				section: sectionEl,
				top:sectionEl.position().top,
				height:sectionEl.height()				
			}
			
			self.anchorPoints.push(section);											

			self._on(element,{
				'click':self.clickScroll
			});
			
			self._on(window,{
				'scroll':self.watchScroll				
			});
									
		},

		anchorPoints : [],

		clickScroll : function(e){
			console.log('clicked');
			var self = this,
				options = self.options;

			e.preventDefault();
			

			console.log(options.speed);
			console.log($(e.currentTarget).data('scroll-nav'));
			var scrollAnchor = $('#'+$(e.currentTarget).data('scroll-nav')).position().top;
			
			$('body,html').animate({
            		scrollTop: scrollAnchor
        		}, 
        		options.speed || 'default',
        		'easeOutCubic'
    		);



		},
		//reset the title attribute
		watchScroll : function(e){
			console.log('watch');
			var self = this,
				options = self.options;					
			var pos = ($(window).scrollTop() + options.header) || $(window).scrollTop();
			var anchorPoints = self.anchorPoints;
			for(var i = 0; i < anchorPoints.length; i++){
				if (pos >= anchorPoints[i].top && pos < anchorPoints[i].top + anchorPoints[i].height){					
					$('.scroll-active').removeClass('scroll-active');
					$(anchorPoints[i].element).addClass('scroll-active');
					$(anchorPoints[i].section).addClass('scroll-active');
					
					$('[data-scroll-header="top"] > h1').text(anchorPoints[i].name)									
				}
			}

			
		}
	});

	// pass selector through to the widget
	var selectorMethod = $.fn.navScroll;
	$.fn.navScroll = function(obj){	    
	    $.extend(obj, { selector: this.selector });	    
	    return selectorMethod.apply(this,arguments);
	};

})(jQuery, window, document);