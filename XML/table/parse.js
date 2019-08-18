
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "news.xml",
        dataType: ($.browser.msie) ? "text" : "xml",
        success: function(data){
         var d;
               if (typeof data == "string") {
                   d = new ActiveXObject("Microsoft.XMLDOM");
                   d.async = false;
                   d.loadXML(data);
               }else {
                   d = data;
               }    
               xmlParser(d);
              }
      });
});


function xmlParser(xml) {
	$(xml).find("news").each(function () {
									   
	var $news = $(this);
	
	
	var newsimgsrc = $news.find('img-src').text();
	var newsdescription = $news.find('news-title').text();
	var newsurl = $news.find('news-url').text();
	var newsPrice = $news.find('news-price').text();

	$("#wrapper").append('<tr class="ss"><td><span class="newsimg"><img src="'+newsimgsrc+'"></span></td><td><a href="'+newsurl+'">'+newsdescription+'</a></td><td>'+newsPrice+'</td></tr>');
    });

}

