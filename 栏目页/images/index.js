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
        $(this).addClass("active_one").siblings("li").removeClass("active_one");
        var isMy=$(this).index();
        $("#bsfw_list").animate({left:-1176*isMy},1500);
    });
});
//tab切换-通知公告
$(document).ready(function(e) {
    $(".bsfw_bottom>#hide1>div>p").mouseover(function(){
        $(this).addClass("active_two").siblings(".bsfw_bottom div>div>p").removeClass("active_two");
        $("#hide1>ul").hide().eq($(this).index()/2).show();
        $(this).next("span").css("display","block").siblings("span").css("display","none");
    });

    $(".bsfw_bottom>#hide2>div>p").mouseover(function(){
        $(this).addClass("active_two").siblings(".bsfw_bottom div>div>p").removeClass("active_two");
        $("#hide2>ul").hide().eq($(this).index()/2).show();
        $(this).next("span").css("display","block").siblings("span").css("display","none");
    });

    $(".bsfw_bottom>#hide3>div>p").mouseover(function(){
        $(this).addClass("active_two").siblings(".bsfw_bottom div>div>p").removeClass("active_two");
        $("#hide3>ul").hide().eq($(this).index()/2).show();
        $(this).next("span").css("display","block").siblings("span").css("display","none");
    })
});
$(function(){
    //检索
    $("#btn_search").click(function(){
        console.log(222333);
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









