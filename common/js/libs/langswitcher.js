(function($){
	
	jQuery.fn.langswitcher = function(defaultLang) {
		
		var self = this;
		var langArr = new Array();
		
		//id(=言語リスト)を取得
		self.children().each(function(){
			langArr.push($(this).attr('id'));
		});

		
		
		//切替ボタンの設定
		self.children().click(function() {
			$(this).addClass('on');
			self.children().not(this).removeClass('on');

			var id = $(this).attr('id');

			//もし、他のものが入ってしまった時に変更する。
			if(id == 'en' || id == 'ja'){
			showLanguage(id);
		}
		});
		
		//初期設定 (デフォルトは英語にしておく。)
		var lang = defaultLang;
		if($.cookie) {
			//クッキーに保存された設定を取得
			lang = $.cookie('lang_setting');
		}
		if(!lang) { lang = defaultLang; } //デフォルトの設定を使用
		showLanguage(lang);
		$('#' + lang ).addClass('on');
		
		//ブラウザの言語設定を取得
		function browserLanguage() {
			try {
				return (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2)
			} catch(e) {
				return undefined;
			}
		}
		
		// 言語切替
		function showLanguage(lang) {
//			var langArr = ['ja', 'en'];
			for (var i = 0, len = langArr.length; i < len; i++) {
				if (lang === langArr[i]) {
					$('.' + langArr[i]).show();
					$('#' + langArr[i]).css('color', '#000');
				} else {
					$('.' + langArr[i]).hide();
					$('#' + langArr[i]).css('color', '#a3a5a9');
				}
			}
			//クッキーに設定を保存
			if($.cookie) {
				$.cookie('lang_setting',lang,{expires:7, path: '/' });
			}
		}
		
	}
})(jQuery);
