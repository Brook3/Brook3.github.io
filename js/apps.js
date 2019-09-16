$(function(){
	// 初始化
	$('.apps .icon').click(function(){
		var apps = $('.apps');
		var apps_contain = $('.apps .contain');
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
