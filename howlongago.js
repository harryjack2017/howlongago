var prop = [
    {zh: '秒前', en: ' seconds ago', m: 60},
    {zh: '分钟前', en: ' minutes ago', m: 60},
    {zh: '小时前', en: ' hours ago', m: 24},
    {zh: '天前', en: ' days ago', m: 30},
    {zh: '月前', en: ' months ago', m: 12},
    {zh: '年前', en: ' years ago'}];

var lans = ["zh", "en"];
/*
 *   lan:语言，包括zh和en，默认en，
 * */
function howLongago(time, lan) {
    if (lans.indexOf(lan) < 0) {
        lan = "en";
    }
    var diff = new Date() - time;

    function doCaculate(t) {
        for (var i = 0; i < prop.length; i++) {
            if (prop[i]['m']) {
                if (t < prop[i]['m']) {
                    return t + prop[i][lan];
                }
                else {
                    t = Math.floor(t / prop[i]['m']);
                    prop.splice(0, 1);
                    return doCaculate(t);
                }
            }
            else {
                return t + prop[i][lan]
            }
        }
    };
    if (diff >= 0) {
        return doCaculate(Math.floor((diff) / 1000));
    }
    else {
        return "Time is yet to come";
    }
}
module.exports = howLongago;
