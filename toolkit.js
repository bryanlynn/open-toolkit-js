/*
 * Open Tool Kit JS
 *
 * Built with jQuery 1.8.0 jquery.min.js
 *
 * https://github.com/bryanlynn/open-toolkit-js 
 *
 * Copyright 2012, not free to use commercially, free for personal use
 */
(function($) {
    $.fn.toolkit = function(options) {
        var element = this;
  	var cmid = "186699";
		var url = "phoenix.zhtml?c="+ cmid +"&p=";
		var sheet = "Tearsheet.ashx?c=" + cmid +""
		var currentpage = window.location.href;
		var current = currentpage.split("&p=")[1];
		var print = url+ current + "_pf";
		var email = url+ "emailpage";
		var rss = url+ "rssSubscription";
		var alerts = url+ "irol-alerts";
		var tear = sheet;
		
		if(options == "verticle"){
        $(document).ready(function() {
		$(element).html('<ul class="list"><li class="print"><a href=" '+ print +' ">Print Page</a></li><li class="email"><a href=" '+ email +' ">E-mail Page</a></li><li class="rss"><a href=" '+ rss +' ">RSS Feeds</a></li><li class="alerts"><a href=" '+ alerts +' ">E-mail Alerts</a></li><li class="tearsheet"><a href=" '+ tear +' ">Financial Tear Sheet</a></li></ul>');
		$(".list").css({"list-style-type":"none","font-size":"12px"});
		$(".list li").css({"line-height":"1.6em"});
		$(".list .print").css({"background":"url(images/png/Icons_85.png) no-repeat", "padding-left": "45px","padding-top": "10px","padding-bottom": "10px"});
		$(".list .email").css({"background":"url(images/png/Icons_02.png) no-repeat", "padding-left": "45px","padding-top": "10px","padding-bottom": "10px"});
		$(".list .rss").css({"background":"url(images/png/Icons_11.png) no-repeat", "padding-left": "45px","padding-top": "10px","padding-bottom": "10px"});
		$(".list .alerts").css({"background":"url(images/png/Icons_75.png) no-repeat", "padding-left": "45px","padding-top": "10px","padding-bottom": "10px"});
		$(".list .tearsheet").css({"background":"url(images/png/Icons_21.png) no-repeat", "padding-left": "45px","padding-top": "10px","padding-bottom": "10px"});
        });
		}		

		if(options == "horizontal"){
        $(document).ready(function() {
		$(element).html('<ul class="list"><li class="print"><a href=" '+ print +' ">Print Page</a></li><li class="email"><a href=" '+ email +' ">E-mail Page</a></li><li class="rss"><a href=" '+ rss +' ">RSS Feeds</a></li><li class="alerts"><a href=" '+ alerts +' ">E-mail Alerts</a></li><li class="tearsheet"><a href=" '+ tear +' ">Financial Tear Sheet</a></li></ul>');
		$(".list").css({"list-style-type":"none","font-size":"12px"});
		$(".list li").css({"line-height":"1.6em","float":"left"});
		$(".list .print").css({"background":"url(images/png/Icons_85.png) no-repeat", "padding-left": "45px","padding-top": "10px","padding-bottom": "10px"});
		$(".list .email").css({"background":"url(images/png/Icons_02.png) no-repeat", "padding-left": "45px","padding-top": "10px","padding-bottom": "10px"});
		$(".list .rss").css({"background":"url(images/png/Icons_11.png) no-repeat", "padding-left": "45px","padding-top": "10px","padding-bottom": "10px"});
		$(".list .alerts").css({"background":"url(images/png/Icons_75.png) no-repeat", "padding-left": "45px","padding-top": "10px","padding-bottom": "10px"});
		$(".list .tearsheet").css({"background":"url(images/png/Icons_21.png) no-repeat", "padding-left": "45px","padding-top": "10px","padding-bottom": "10px"});
        });
		}
					
		
    };
})(jQuery); 
