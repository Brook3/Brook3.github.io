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
// 展示公众号
function showGzh()
{
	$('#popup').css('display', 'flex');
	document.getElementById("popup").innerHTML = '<img src="//resource.brook3.com/images/my/gzh_dyh.jpg" />';
}
// 展示微信小程序
function showXcx()
{
	$('#popup').css('display', 'flex');
	document.getElementById("popup").innerHTML = '<img src="//resource.brook3.com/images/my/xcx.jpg" />';
}
