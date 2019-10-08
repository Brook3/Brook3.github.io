$(function(){
	// 初始化
	$('.header .user-name').click(function(){
		var sites = $('.header .user-site');
		sites.toggle();
		return;
		var display_status = apps_contain.css('display');
		// 查看展开状态
		if (display_status == 'none') {
			// 展开
			apps_contain.show();
			apps.css('background-color', 'white');
		} else {
			// 关闭
			apps_contain.hide();
			apps.css('background-color', '');
		}
	});
});
