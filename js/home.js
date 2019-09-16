//获取输入内容，不同的搜索引擎需要独立配置
$(function(){
	//点击切换搜索引擎->展开列表
	$(".search-change-btn").click(function(){
		$(".search-dropdown").removeClass("off");
	});
	//点击切换搜索引擎->切换图标和显示
	$(".search-dropdown ul li").each(function(index, e){
		$(this).click(function(){
			// 切换logo
			$("#search-logo").attr("data-engine", $(this).attr('engine'));
			$(".search-change-btn").text($(this).children("span.engine-title").text());
			$(".search-dropdown").addClass("off");
		});
	});
	// 点击按钮搜索
	$(".search-btn").click(function(){
		var engine = $("#search-logo").attr("data-engine");
		var url = getInfoByEngine(engine, 'url');
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
function getInfoByEngine(engine, type){
	var url = '', doodle = '';
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
			doodle = '暂时不能用~';
			break;
		case 'vimawesome':
			url = '//vimawesome.com/?q=';
			doodle='请耐心等待';
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
	if(type == 'url'){
		return url;
	}else if(type == 'doodle'){
		return doodle;
	}
}
