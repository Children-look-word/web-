
//引入jquery 包
import $ from 'jquery';

//引入css文件
import './css/inde.css';




$(function () {
    $('li:odd').css('backgroundColor', 'blue');  // 奇数行显示的颜色
    $('li:even').css('backgroundColor', 'bluegreen');  //偶数行显示的颜色
})
