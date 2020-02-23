// PhotoSwipe
// initPhotoSwipeFromDOM('.my-gallery');

$(function () {

  $('.card-caption').on('click', 'a', function (e) {
    e.stopPropagation();
  });

  var $nav = $('#gnav');
  var offset = $nav.offset();
  var navHeight = $nav.innerHeight();
  var headerInner = $('#header .inner');

  //ページ内スクロール
  $('a[href^="#"]').on('click', function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  //ページトップへもどる
  $('#js-pageTop').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

  // モーダルウィンドウ内画像切り替え
  $('.modal_content_right_img_down img').click(function(){
    var $thisImg =  $(this).attr('src');
    var $thisAlt = $(this).attr('alt');
    $('.modal_content_right_img_up img').attr({src:$thisImg,alt:$thisAlt});
  });

  // モーダルウィンドウ初期表示画像用
  $('.open_button img').click(function(){
    var $openImg =  $(this).attr('src');
    var $openAlt = $(this).attr('alt');
    $('.modal_content_right_img_up img').attr({src:$openImg,alt:$openAlt});
  });

});
