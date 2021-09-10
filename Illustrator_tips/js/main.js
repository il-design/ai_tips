$(document).ready(function($){
	
	// #で始まるアンカーをクリックした場合に処理
	$('a[href^=#]').click(function() {
		// スクロールの速度
		var speed = 400; // ミリ秒
		// アンカーの値取得
		var href= $(this).attr("href");
		// 移動先を取得
		var target = $(href === "#" || href === "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
	

	
/*-------------------------
モバイルの時のボタン
--------------------------*/
$(".btn-trigger").on("click",function(){
	$( this).toggleClass("active");
	$(".navigation,.header_jikan00").fadeToggle(500);
});
	
	$(window).on('load resize', function(){
		//グローバルメニュー
		var winW = $(window).width();
		var devW = 767;
		var parentListTrig = $("header li.page_item_has_children");
		var childList = $("header .children");
		
		if (winW >= devW){
			childList.css({ display: "none" });
			parentListTrig.hover(function(){
				$(this).children('.children').fadeIn('fast');
			}, function() {
				$(this).children('.children').fadeOut('fast');
			});
		}
	});

});






/*-------------------------
トップへ戻る
--------------------------*/
$(function() {
	var TopBtn = $('#page_top');   
	var BottomPos = -10; // ボタンの画面下からの位置を指定
	TopBtn.hide();
	$(window).scroll(function(e) {
		$window = $(e.currentTarget);
		WindowHeight = $window.height(); // ウィンドウの高さ
		PageHeight = $(document).height(); // ページの高さ
		footerHeight = $("footer").height(); // フッタの高さ
		ScrollTop = $window.scrollTop(); // スクロールした量
		MoveTopBtn = WindowHeight + ScrollTop + footerHeight - PageHeight;

		//スクロール位置が100でボタンを表示
		if ($(this).scrollTop() > 100) {
			TopBtn.fadeIn();
		} 
		else {
			TopBtn.fadeOut();
		}


	});
	//ボタンを押下するとトップへ移動
	TopBtn.click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 300);
		return false;
	});
});


/*-------------------------
スクロールで表示
--------------------------*/

$(function(){
　$(window).scroll(function (){
    $('.effect-scroll').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight){
            $(this).addClass('effect-scroll-after');
        }
        
        
    });
　});
});

/*-------------------------
TOPスライダー
--------------------------*/
$('.slick01').slick({
    centerMode: true,
    centerPadding: '15%',
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 2000,
    arrows: true,
    pauseOnFocus: false,
    swipe: true,
  });






Splitting();