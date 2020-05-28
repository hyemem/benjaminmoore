$(function(){
    
    var on_off=false;
    $("#toggle_btn").click(function(){
       on_off =! on_off;
        
        if(on_off){
            
            $("aside").animate({left:'60%'},1000,"easeOutExpo");
            $("#toggle_btn span").addClass('selected');
        }else{
            $("aside").animate({left:'100%'},1000,"easeOutExpo");
            $("#toggle_btn span").removeClass('selected');
        }
 
        
    });
    
    
    
    
});