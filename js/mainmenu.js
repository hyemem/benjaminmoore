$(function () {

    var hw = $("#header_wrap")
    var logo = hw.find("img")
    var nav_a = $("#main_menu").find("a")
    var sub = hw.find("ol")
    var toggle = $("#toggle_btn span")
    var moblie = $("#mobile_menu");
    var on_off=false;

    //---------------------------------함수 선언 ---------------------------------

    function whiteHeader() { // 흰색 메뉴바 설정
        $("#header_wrap").css({
            'background': 'white'
        });
        $("#header_wrap ul li>a").css('color', '#333');
        $("#logo a>img").attr("src", "images/nav_logo.png");
        toggle.css('background', '#4388c3');
        moblie.css({'background':'white'});
    }


    function blueHeader() { // 파란색 메뉴바 설정
        $("#header_wrap").css({
            'background': '#4388c3'
        });
        $("#header_wrap ul li>a").css('color', '#fff');
        $("#logo a>img").attr("src", "images/nav_logoW.png");
        toggle.css('background', '#fff');
        moblie.css({'background':'#4388c3'});

    }

    function fixed() { // 메뉴바 fix상태
        $("#header_wrap").css({
            'position': 'fixed',
            'top': '0'
        });
    }

    function normal() { //메뉴바 보통 상태
        $("#header_wrap").css('position', 'relative');
    }

     
    function moblieMenu(){ //모바일 메뉴 열고 닫기
    
       on_off =! on_off;
        if(on_off){
            $('#mobile_menu').css({'display':'block'});    
            $("#mobile_menu").stop().animate({left:'0'},1000,"easeOutCubic");
            $("#toggle_btn span").addClass('selected');
            $("#mobile_menu>ul>li").addClass('selected');
            
        }else{
            $("#mobile_menu").stop().animate({left:'100%'},1000,"easeOutCubic",function(){
                $('#mobile_menu').css({'display':'none'});
            });
            $("#toggle_btn span").removeClass('selected');
            $("#mobile_menu>ul>li").removeClass('selected');    
        }
 
        
    }



    //---------------------------------이벤트 시작 ---------------------------------

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) { //window의 스크롤이 0이상이면 흰색헤더 fix
            whiteHeader()
            fixed()
        } else { //window의 스크롤이 0이면 파란헤더 relative
            blueHeader()
            normal()
        }
    });


    $("#main_nav").mouseenter(function () { //메뉴에 마우스 오버 했을 때
        $("ol").show(); //하위메뉴 글씨 보여줌
        $("#header_wrap").addClass('subBg'); // 하위메뉴 흰색 배경
        whiteHeader()

    });

    sub.mouseenter(function () { //하위 메뉴에 마우스 오버 했을 때
        $(this).addClass('selected');
    }).mouseleave(function () {
        $(this).removeClass('selected');
    });


    $("#header_wrap").mouseleave(function () { //메뉴에 마우스 떠났을 때
        var scroll = $(window).scrollTop();

        if (scroll == 0) { //만약 이때 window값이 0이면 

            $("ol").hide(); // 하위메뉴 글씨 제거
            $("#header_wrap").removeClass('subBg'); // 하위메뉴 배경 제거
            blueHeader() //파란색 헤더

        } else { //만약 이때 window값이 0이상이면

            $("ol").hide(); // 하위메뉴 글씨 제거
            $("#header_wrap").removeClass('subBg'); // 하위메뉴 배경 제거
            whiteHeader() //흰색 헤더
        }

    });
    
    $("#toggle_btn").on('click',moblieMenu);
    
    
    function inEvent(){
        
    }
    



});