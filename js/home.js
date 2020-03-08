//获取输入内容，不同的搜索引擎需要独立配置
$(function(){
	// 点击按钮搜索
	$(".search-btn").click(function(){
		var engine = $(".search-change").val();
		var url = getInfoByEngine(engine);
		window.open(url + $(".search-input").val());
	});
	// 回车键搜索
	$("body").keydown(function(event){
		if (event.keyCode == "13") {//keyCode=13是回车键
			$('.search-btn')[0].click();
		}
	});
});

//根据不同的搜索引擎获取不同的信息
function getInfoByEngine(engine){
	var url = '';
	switch(engine){
		case 'baidu':
			url = '//www.baidu.com/s?wd=';
			break;
		case 'bing':
			url = '//cn.bing.com/search?q=';
			break;
		case 'sogou':
			url = '//www.sogou.com/web?query=';
			break;
		case 'google':
			url = '//www.google.com.hk/search?q=';
			break;
		case 'vimawesome':
			url = '//vimawesome.com/?q=';
			break;
		case 'github':
			url = '//github.com/search?q=';
			break;
		case 'bilibili':
			url = '//search.bilibili.com/all?keyword=';
			break;
		case 'v.qq':
			url = '//v.qq.com/x/search/?q=';
			break;
		case 'iqiyi':
			url = '//so.iqiyi.com/so/q_';
			break;
	}
    return url;
}
