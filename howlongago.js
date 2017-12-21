var prop = [
    {zh: '秒', en: ' seconds', m: 60},
    {zh: '分钟', en: ' minutes', m: 60},
    {zh: '小时', en: ' hours', m: 24},
    {zh: '天', en: ' days', m: 30},
    {zh: '月', en: ' months', m: 12},
    {zh: '年', en: ' years'}];

var lans = ["zh", "en"];

/*
        *     lan:语言，包括zh和en，默认en，
        *     通过毫秒数，计算时长字符串。
        *     return：1天23小时2分钟30秒
        * */
function howlong(time, lan) {
    if (isNaN(parseInt(time))) {
        return "";
    }
    if (lans.indexOf(lan) < 0) {
        lan = "en";
    }
    time = parseInt(time);
    var arr = new Array(),
        doCaculate = function (t) {
            for (var i = 0; i < prop.length; i++) {
                if (prop[i]['m']) {
                    if (t < prop[i]['m']) {
                        arr.unshift(t + prop[i][lan]);
                        return arr;
                    }
                    else {
                        var next = Math.ceil(t % prop[i]['m']);
                        if (next != 0) {
                            arr.unshift(next + prop[i][lan]);
                        }
                        t = Math.floor(t / prop[i]['m']);
                        prop.splice(0, 1);
                        return doCaculate(t);
                    }
                }
                else {
                    arr.unshift(t + prop[i][lan]);
                    return arr;
                }
            }
        }
    return doCaculate(Math.ceil((time) / 1000)).slice(0, 2).join(" ");
}

//console.log(howlong(600001,'zh'))
module.exports = howLongago;
