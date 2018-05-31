//点击切换搜索引擎->展开列表
$$(".search-change-btn").addEvent('click',function(){
	$$(".search-dropdown").removeClass("off");
});

//点击切换搜索引擎->切换图标和显示
$$(".search-dropdown ul li").each(function(e){
	e.addEvent('click',function(){
		$("search-logo").set("data-engine",this.get("engine"));
		$$(".search-change-btn").set('html',this.getChildren("span[class=engine-title]").get("html"));
		$$(".search-dropdown").addClass("off");
		//涂鸦
		$$(".doodle").set('html',getInfoByEngine(this.get('engine'),'doodle'));
	});
});

//关闭搜索引擎列表->这个鼠标点击一次会触发多次，暂未找到更好的方式，之后可以优化下
/* $$(":not(.search-dropdown)").addEvent('click',function(){
	console.log('yes');
}); */

//获取输入内容，不同的搜索引擎需要独立配置
$$(".search-btn").addEvent('click',function(){
    var engine=$("search-logo").get("data-engine");
		var url=getInfoByEngine(engine,'url');
    location.href=url+$$(".search-input").get("value");
});

$$("body").addEvent('keydown',function() {
if (event.keyCode == "13") {//keyCode=13是回车键
	$$('.search-btn')[0].click();
}
});

//根据不同的搜索引擎获取不同的信息
function getInfoByEngine(engine,type){
		var url='',doodle='';
		switch(engine){
				case 'baidu':
						url='//www.baidu.com/s?wd=';
						break;
				case 'bing':
						url='//cn.bing.com/search?q=';
						break;
				case 'sogou':
						url='//www.sogou.com/web?query=';
						break;
				case 'google':
						url='//www.google.com.hk';
						doodle='暂时不能用~';
						break;
				case 'vimawesome':
						url='//vimawesome.com/?q=';
						doodle='请耐心等待';
						break;
				case 'github':
						url='//github.com/search?q=';
						break;
				case 'bilibili':
						url='//search.bilibili.com/all?keyword=';
						break;
				case 'v.qq':
						url='//v.qq.com/x/search/?q=';
						break;
				case 'iqiyi':
						url='//so.iqiyi.com/so/q_';
						break;
		}
		if(type=='url'){
				return url;
		}else if(type=='doodle'){
				return doodle;
		}
}
