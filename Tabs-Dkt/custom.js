// JavaScript Document
$(document).ready(function(){
	$('.afterClr').after('<div class="clr"></div>');
	$('.cont p').hide();
	$('.cont p:first').show();
	$(".tabs li:first").addClass('act');
						   
	$('.tabs li').click(function (){
		var $id = $(this).closest('div');
		
		alert($id.attr('id'));
		
		 var ss = $id.find(".tabs li").index(this);
			//alert(ss);
			
			$id.find(".tabs li").removeClass();
			$(this).addClass('act');
			
			$id.find(".cont p").slideUp();
				$id.find(".cont p").eq(ss).slideDown();
		});
   });

