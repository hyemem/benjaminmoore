$(function(){
    // 창 열리는 애니메이션 생성----------------------------------------
    
    $("#location_icon").click(function(e){ //클릭했을때
        
        e.preventDefault();
        
        $("#store_bg").show(); //검은색 바탕을 보여줌
        
        $("#store_bg").animate({ "opacity": "1" }, 1000, "easeOutExpo"); //검은색 바탕의 불투명도가 1이 됨
        
    });

    
    // 창 닫히는 애니메이션 생성----------------------------------------
    
    $("#popup>span").click(function(){//popup창의 span을 클릭했을때 생기는 함수 생성
        
        $("#store_bg").animate({ "opacity": "0" }, 1000, "easeOutExpo"); //검은색 바탕의 불투명도가 0이 됨
        
        $("#store_bg").hide(); //검은색 바탕을 없애줌
        
    });
    
    
});