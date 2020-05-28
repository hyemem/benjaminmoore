$(function(){
    
    $(window).scroll(function(){ // window 스크롤에 작용되는 애니메이션
        
      if( $(this).scrollTop()>600){ // 현재 창의 스크롤탑값이 600이상으로 내려가면
          $("#quick").fadeIn(); // top버튼이 보임
      }else{
          $("#quick").fadeOut(); //현재 창의 스크롤탑값이 600 이하일 경우, top버튼 사라짐
      }
        
    });
    
    
    
    $("#quick").click(function(){ //top버튼을 클릭했을 때 적용되는 애니메이션
        
        $('html,body').animate({'scrollTop':0},500,'easeInCubic');

    });
    
    
});