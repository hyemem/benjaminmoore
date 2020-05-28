 $(window).load(function () {
     // $(document).ready(function(){ })은 html문서 로딩 완료된 후, 바로 시작이므로 이미지 소스를 불러오고 난 후 실행되는  $(window).load(function()을 써야 resize할 때 적용됨



     var $mainWrap //div
     var $mainList //ul
     var $mainLi //li
     var $mainImg //li 사진
     var mainImgNum //li 개수
     var mainImgWidth //li 사진 너비값
     var timer //타이머
     var btn //버튼
     var window_width


     //사진 로드 되자마자 실행될 함수들 호출

     init() //변수선언
     mainReset() // wrap의 height값 img_height값으로
     onPlay() //자동 슬라이드 시작
     inEvent() //click, resize 등등


     function init() { //초기 함수 설정
         $mainWrap = $("#main_vis"); //div
         $mainList = $("#main_list"); //ul
         $mainLi = $mainList.children(); //li
         $mainImg = $mainLi.children(); //li의 img
         mainImgNum = $mainLi.size(); //li 개수
         btn = $mainWrap.children('span') //버튼
         $mainList.children().last().prependTo($mainList);
     }


     function mainReset() { //reset
         window_width = $(window).innerWidth();
         mainImgWidth = window_width;
         $mainLi.css({
             'width': mainImgWidth
         });
         $mainImg.css({
             'width': mainImgWidth
         });
         $mainWrap.css({
             'height': $mainImg.height()
         });
         $mainList.css({
             'width': mainImgWidth * mainImgNum
         });
         $mainList.css({
             "left": -mainImgWidth
         });
     }


     function inEvent() { //이벤트 함수

         $(window).on('resize', mainReset);
         btn.on('mouseenter mouseleave', btnEffect);
         btn.on('mouseenter', onStop);
         btn.on('mouseleave', onPlay);
         $('#next_btn').on('click', onSlideNext);
         $('#prev_btn').on('click', onSlidePrev);
     }


     function btnEffect() { // 버튼 투명도 조절
         btn.toggleClass('selected');
     }

     function onSlideNext() { // (다음 버튼) ul이 통째로 왼쪽으로 이동

         var currentPosition = $mainList.position().left;
         $("#main_list:not(:animated)").animate({
             'left': currentPosition - mainImgWidth
         }, 500, "easeInCubic", function () {

             $mainList.children().first().appendTo($mainList);
             $mainList.css({
                 "left": -mainImgWidth
             });

         });
     }

     function onSlidePrev() { // (이전 버튼) ul이 통째로 오른쪽으로 이동

         var currentPosition = $mainList.position().left;
         $("#main_list:not(:animated)").animate({
             'left': currentPosition + mainImgWidth
         }, 500, "easeInCubic", function () {

             $mainList.children().last().prependTo($mainList);
             $mainList.css({
                 "left": -mainImgWidth
             });
         });
     }


     function onStop() { // 자동 슬라이드 정지
         clearInterval(timer);
     }


     function onPlay() { //자동 슬라이드 시작
         timer = setInterval(onSlideNext, 1300);
     }

     
     // 모바일 사이즈에서 비주얼 스와이퍼 사용 
     var swiper = new Swiper('.swiper-container', {
         scrollbar: {
             el: '.swiper-scrollbar',
             hide: true,
         },
     });
     // 비주얼 스와이퍼 끝 


     
     
     
 });
