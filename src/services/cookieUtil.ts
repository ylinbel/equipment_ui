export function getLoginFlagCookie() {
    var c_param = '';
    if (document.cookie.length > 0) {
        var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('='); //再次切割
            //判断查找相对应的值
            if (arr2[0] == "LOGIN_FLAG") {
                c_param = arr2[1];
            }
        }
    }
    return c_param;
}