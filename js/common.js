/*
* @Author: JMW
* @Date:   2017-04-20 14:41:04
* @Last Modified by:   JMW
* @Last Modified time: 2017-04-20 17:03:55
*/

'use strict';
$(document).ready(function(){
	function load(){
		$(".abc").click()
	}
	$(".option").click(function(){
		$(this).addClass("active").siblings().removeClass('active');
		$(".breadcrumbs2").html($(this).attr("value"));
		var index=$(".option").index(this);
		$(".op-con").eq(index).show().siblings().hide();
	})
});