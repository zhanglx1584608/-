$(function(){
    var ali=$("#bsfw_list li").length;
    $("#bsfw_list").css("width",ali*196);
    $("#page").css("width",(parseInt(ali/6)+1)*50);
    if(ali>6){
        if(ali%6==0){
            var six=parseInt(ali/6)-1;
            $("#page").append('<li class="active_one"></li>');
            for(var j=0;j<six;j++){
                $("#page").append("<li></li>");
            }
        }else {
            var six=parseInt(ali/6);
            $("#page").append('<li class="active_one"></li>');
            for(var i=0;i<six; i++) {
                console.log(123);
                $("#page").append('<li></li>');
            }
        }
    }else{
        $("#page").append('<li class="active_one"></li>');
    }
    $("#page>li").click(function(){
        console.log(111111);
        $(this).addClass("active_one").siblings("li").removeClass("active_one");
        var isMy=$(this).index();
        console.log(isMy);
        $("#bsfw_list").animate({left:-1176*isMy},1500);
    });

});
$(function(){
    //¼ìË÷
    $("#btn_search>img").click(function(){
        $(".search_box").slideDown();
        $(".search_box>.search_box_s").animate({opacity:1},1000);
    })
    $(".search_box").mouseover(function(){
        $(".close").show();
    });
    $(".search_box").mouseout(function(){
        $(".close").hide();
    });
    $(".close").click(function(){
        $(".search_box>.search_box_s").animate({opacity:0},200);
        $(".search_box").slideUp(800);
    });
});

























