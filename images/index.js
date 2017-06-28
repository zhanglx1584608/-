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
                $("#page").append('<li></li>');
            }
        }
    }else{
        var myWidth=$("#bsfw_list").css("width");
        $("#bsfw_list").css("left",(1176-parseInt(myWidth))/2);
    }
    $("#page>li").click(function(){
        $(this).addClass("active_one").siblings("li").removeClass("active_one");
        var isMy=$(this).index();
        $("#bsfw_list").css("left",-1176*isMy);
    })
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




