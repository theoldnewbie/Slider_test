$(document).ready(function() {
     $(".slider").each(function () {
        var obj = $(this);
        $(obj).append("<div class='nav'></div>");
        $(obj).find("li").each(function () {
        $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); 
        $(this).addClass("slider"+$(this).index());
        });
        $(obj).find("span").first().addClass("on");
        });
    });
    function sliderJS (obj, sl) { 
       var ul = $(sl).find("ul"); 
       var bl = $(sl).find("li.slider"+obj); 
       var step = $(bl).width(); 
       $(ul).animate({marginLeft: "-"+step*obj}, 500); 
    }
    $(document).on("click", ".slider .nav span", function() { 
       var sl = $(this).closest(".slider");
       $(sl).find("span").removeClass("on"); 
       $(this).addClass("on"); 
       var obj = $(this).attr("rel"); 
       sliderJS(obj, sl); 
       return false;
    });