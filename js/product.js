$(window).load(function () {

    var $product_list = $("#product_list"); //ul
    var product_list_width = $product_list.width(); //ul 너비
    var li = $product_list.children(); //li
    var li_width = li.outerWidth(true); //li 너비
    var img_number = $product_list.children().size(); //li 개수
    var current_position; //현재 위치
    var probtn = $("#pro_prebtn a"); // 이전 버튼
    var nextbtn = $("#pro_nextbtn a"); // 다음 버튼


    //로드하자마자 실행할 함수

    init()
    productReset()



    function init() { //초기함수 설정

        $(window).on("resize", productReset);
        probtn.on('click', pro_prev);
        nextbtn.on('click', pro_next);
        $product_list.children().last().prependTo($product_list);
        
    }


    function productReset() {
        var section_width = $("#sub3").innerWidth();
        current_position = $product_list.position().left;
        product_list_width = section_width * 2;
        li_width = product_list_width / img_number;
        $product_list.css({'left': -li_width}); //ul의 positon값을 초기화함
        
    }


    function pro_prev(e) { //이전 버튼

        e.preventDefault(); //a링크 막아주는 것
        current_position = $product_list.position().left; //현재 위치 = ul의 position.left값
        $product_list.not(':animated').animate({
            "left": current_position + li_width
        }, 1000, "easeOutExpo", function () {

            $product_list.children().last().prependTo($product_list)
            $product_list.css({
                'left': -li_width
            });

        });
        //ul의 애니메이션 상태가 아니라면, ul의 current_position에 li_width값을 더해서 움직임 (왼쪽으로)
        //그리고 ul의 positon값을 초기화함

    }


    function pro_next(e) { //다음 버튼

        e.preventDefault(); //a링크 막아주는 것
        current_position = $product_list.position().left; //현재 위치 = ul의 position.left값
        $product_list.not(':animated').animate({
            "left": current_position - li_width
        }, 1000, "easeOutExpo", function () {

            $product_list.children().first().appendTo($product_list)
            $product_list.css({
                'left': -li_width
            });

        });
        //ul의 애니메이션 상태가 아니라면, ul의 current_position에 li_width값을 빼서 움직임 (오른쪽으로)
        //그리고 ul의 positon값을 초기화함

    }



});
