var tips_list = [
    '搜索位置可以点击切换搜索引擎',
    '爱，就大声说出来，因为你永远都不会知道，明天和意外，哪个会先来！',
    '使人成熟的是经历，而不是岁月',
    '甜言美语三冬暖，恶语伤人六月寒',
    '投之以桃，报之以李',
    '人生需要四种人：名师指路，贵人相助；亲人支持，小人刺激'
];
var tips = document.getElementById('tips');
// 定时更改提示信息
var index = 0;
setInterval(function () {
    tips.innerHTML = tips_list[index];
    index ++;
    if (index > tips_list.length-1) {
        index = 0;
    }
}, 5000);
