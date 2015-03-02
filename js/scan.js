	$(document).bind('mobileinit',function(){
   		$.mobile.selectmenu.prototype.options.nativeMenu = false;
	});
	$(document).on("pagecreate", function(){    
    var opts = $("#select-custom-18 option");
    $( "#select-custom-18-listbox-popup" ).on( "popupafteropen", function( event, ui ) {
        $("#select-custom-18-menu li").each(function(index){
            if ($(this).find("img").length == 0){
                var imageURL = opts.eq(index).data("image");
                var imgElem = '<img src=' + imageURL + ' width="125px" height="75px" />';
                $(this).find("a").prepend(imgElem);
            }
        });
    });
    $(document).ready(function(){
        $("#textarea2").css("height","171px")
        $(".heart").click(function(){
            index = parseInt($(this).attr("attr"))
            // hard code here...sorry 
            $("#h"+index+":after").css("background-color","red")
        })
        $(".link").click(function() {
            // body...
            window.location.href = "index.html"
        })
    })
});