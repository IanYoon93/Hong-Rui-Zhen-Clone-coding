$(function () {
  // 헤더 gnb
  $('#header .gnb').on('mouseenter', function () {
    $('#header').addClass('on');
  });

  $('#header .gnb').on('mouseleave', function () {
    $('#header').removeClass('on');
  });

  // 전체메뉴 열기
  $('#header .btn_all').on('click', function (e) {
    e.preventDefault();
    $('#header .all_menu_wrap').fadeIn().addClass('on');
    $('body').addClass('on');
  });

  // 전체메뉴 닫기
  $('#header .all_menu_wrap .btn_close').on('click', function () {
    $('#header .all_menu_wrap').fadeOut().removeClass('on');
    $('body').removeClass('on');
  });

  // 메인슬라이더
  var mainSlider = new Swiper('.main_slider', {
    // 슬라이드 방향
    direction: 'horizontal',
    // 이동시간
    speed: 600,
    // 반복
    loop: true,
    // 마우스드래그 이벤트 막기 (모바일에서 끄면 안됨)
    simulateTouch: false,
    // effect: 'fade',
    // fadeEffect: {
    // 교차하는 슬라이드 모두 투명도 조절됨
    //   crossFade: false,
    // },
    autoplay: {
      // 현재 슬라이드 보이는 시간
      delay: 2000,
      // 슬라이더 안에서 인터렉션발생시 안 멈추게
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // 메인메뉴 탭메뉴
  $('.main_menu .tab_con_wrap .tab_con:gt(0)').hide();

  $('.main_menu .tab_menu li').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');

    var idx = $(this).index();

    $('.main_menu .tab_con_wrap .tab_con').eq(idx).show().siblings().hide();
  });

  $('.main_menu .tab_menu li').on('click', function (e) {
    e.preventDefault();

    var idx = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');

    $('.main_menu .tab_con_wrap .menu_slider_wrap').eq(idx).addClass('on').siblings().removeClass('on');
  });

  // 메인메뉴 슬라이더
  var menuSlider = new Swiper('.main_menu .menu_slider', {
    slidesPerView: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 메인 이벤트 슬라이더
  var eventSlider = new Swiper('.event_slider', {
    direction: 'horizontal',
    slidesPerView: 3,
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // 히스토리 이미지 애니메이션
  $(window)
    .on('scroll', function () {
      var st = $(this).scrollTop();

      if (st >= 500) {
        $('.history_page .img_wrap').addClass('on');
      } else {
        $('.history_page .img_wrap').removeClass('on');
      }

      if (st >= 1000) {
        $('.history_page .icon_wrap').addClass('on');
      } else {
        $('.history_page .icon_wrap').removeClass('on');
      }

      if (st >= $('#footer').offset().top - $(window).outerHeight()) {
        $('.history_page .img_wrap').addClass('on2');
      } else {
        $('.history_page .img_wrap').removeClass('on2');
      }
    })
    .trigger('scroll');

  // 히스토리 연혁 애니메이션
  $('.history_page .txt_wrap li').each(function () {
    var _this = $(this);

    $(window)
      .on('scroll', function () {
        var posY = _this.offset().top;
        var st = $(this).scrollTop();

        if (st >= posY - $(this).outerHeight() + 200) {
          _this.addClass('on');
        } else {
          _this.removeClass('on');
        }
      })
      .trigger('scroll');
  });

  // 제품소개페이지
  $('.product_page .lnb_wrap li').on('click', function (e) {
    e.preventDefault();

    $(this).addClass('active').siblings().removeClass('active');
  });
});
