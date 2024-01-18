$(function () {
  // 헤더 패밀리버튼
  $('#header .btn_family').on('click', function () {
    $(this).toggleClass('on');
    $('#header .family').toggleClass('on').slide();
  });

  // 전체메뉴
  $('#header .btn_open').on('click', function (e) {
    e.preventDefault();
    $('#header .dimmed').show();
    $('#header .btn_close').fadeIn();
    $('body').addClass('on');
    $('#header .gnb_area').addClass('on');
  });

  $('#header .btn_close, #header .dimmed').on('click', function () {
    $('#header .dimmed').fadeOut();
    $('#header .btn_close').fadeOut();
    $('body').removeClass('on');
    $('#header .gnb_area').removeClass('on');
  });

  // gnb
  $('#header .gnb .depth02').hide();

  $('#header .gnb>li>a').on('click', function () {
    $(this).parent().toggleClass('on').siblings().removeClass('on');

    if (!$(this).next().is(':visible')) {
      $(this).next().slideToggle().parent().siblings().find('.depth02').slideUp();
    } else {
      $(this).next().slideUp().removeClass('on');
    }
  });

  // 메인슬라이더
  var minH = $(window).outerHeight();
  $('.main_slider_wrap').outerHeight();

  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    autoplay: {
      delay: 3000,
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
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 메인 이벤트 슬라이더
  var eventSlider = new Swiper('.event_slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    scrollbar: {
      el: '.main_event .event_slider .swiper-scrollbar',
    },
  });

  // 히스토리 페이지
  // 히스토리 연혁 애니메이션
  $('.history_page .history_wrap .txt_wrap li').each(function () {
    var _this = $(this);

    $(window)
      .on('scroll', function () {
        var posY = _this.offset().top;
        var st = $(this).scrollTop();

        if (st >= posY - $(this).outerHeight() + 150) {
          _this.addClass('on');
        } else {
          _this.removeClass('on');
        }
      })
      .trigger('scroll');
  });

  // 메뉴소개페이지
  var lnbSub = $('.product_page .lnb_wrap .depth02');
  lnbSub.hide();

  $('.product_page .lnb_wrap .btn_toggle').on('click', function () {
    $(this).toggleClass('on');

    if ($(lnbSub).is(':visible')) {
      $(lnbSub).slideUp();
    } else {
      $(lnbSub).slideDown();
    }
  });

  // 퀵메뉴 페이드
  var mainQuick = $('#footer .main_quick');

  $(window)
    .on('scroll', function () {
      var st = $(this).scrollTop();

      if (st >= 50) {
        mainQuick.fadeIn();
      } else {
        mainQuick.fadeOut();
      }
    })
    .trigger('scroll');

  // 탑버튼 애니메이션
  $('#footer .main_quick').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
  });
});
