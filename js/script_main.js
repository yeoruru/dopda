'use strict';

// 1. 스크롤 이벤트
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 

// 2. 헤더 이벤트
var scrollTop = 0;
scrollTop = $(document).scrollTop();

$(window).on('scroll resize', function() {
    scrollTop = $(document).scrollTop();
    fixHeader();
});

function fixHeader() {
    if (scrollTop > 200) {   $('header').addClass('on');  } 
	else {  $('header').removeClass('on'); }
}

// 3. 이미지 슬라이드
$(function() {
    $(".visual .slide").slick({ 
        arrows: false, //화살표 사용안함
        dots: true, //닷츠
        autoplay: true, //자동재생
        fade: true, //페이드인 효과        
        autoplaySpeed: 5000, //재생시간
        pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
		pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
    });
}); 


// 4. 모바일 네비
$(function() {
    $('header .open').on('click', function() {
        $('body').css({'overflow': 'hidden'});
        $('header .bg').css({'display': 'block'});
        $('header nav').addClass('on');
	});
    $('header .close, header .bg').on('click', function() {
        $('body').css({'overflow': 'auto'});
        $('header .bg').css({'display': 'none'});
        $('header nav').removeClass('on');
	});	
}); 