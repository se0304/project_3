//main slide//

$('.prev').click(function(){

    $('.slide li:last').prependTo('.slide');
    
    $('.slide').css('margin-left','-100%');
    
    $('.slide').stop().animate({marginLeft:0},800);
    
    });
    
    
    
    $('.next').click(function(){
    
         $('.slide').stop().animate({marginLeft:'-100%'},800, function(){
    
            $('.slide li:first').appendTo('.slide');
    
            $('.slide').css({marginLeft:0});
    
       });
    
    });


//slide li modal//

$(function () {
    $(".iconbox").click(function () {
        let img = new Image();
        img.src = $('.slide li:first img').attr("src")
        $('.modalBox').prepend(img);
        $(".modal").show();
    });

    $(".modal").click(function (e) {
        $(".modal").toggle();
    });
});

// $(function () {
//     $(".slide li img").click(function () {
//         $(".main_slide img").css("opacity", "0.3");
//     });

//     $(".modal").click(function () {
//         $(".main_slide img").css("opacity", "0.8");
//     })
// });

//패키지 예약버튼 클릭시 팝업

$(function(){
    $(".popup").css("display", "none")
    $(".btn").click(function(){
        $(".popup").css("display", "block");
    });

    $(".xbtn").click(function(){
        $(".popup").css("display", "none");
    });
});


//팝업 셀렉트 수량 계산

$(function () {
       
    $(".select").change(function () {

        $(".txt").text($(this).val());

    });

});


$(function(){
    $(".pngimg").mouseover(function() {
        $(this).css("opacity", "1");
    });
});

$(function(){
    $(".pngimg").mouseout(function(){
        $(this).css("opacity", "0");
    });
});
