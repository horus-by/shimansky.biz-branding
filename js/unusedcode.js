					/* ("undefined"!==typeof sbizIsMobileBrowser&&sbizIsMobileBrowser)||yepnope.injectJs("/libs/jquery-ui-1.10.3.custom.autocomplete/shimansky.biz/js/jquery-ui-1.10.3.custom.min.js", function () {
						"undefined"!==typeof window.jQuery&&function(d,c,e,f){$("#"+c).autocomplete({source:function(b,a){$.ajax({url:f,dataType:"json",data:{q:b.term,c:10},success:function(b){a($.map(b,function(a){return{label:a.value,value:a.name}}))}})},minLength:1,select:function(b,a){if(a.item.value&&(a.item.value.match(/^http\:\/\//)||a.item.value.match(/^https\:\/\//)||a.item.value.match(/^\/search\//)||a.item.value.match(/^\//)))return d.location.href=a.item.value,!1;$(b.target).val($("#"+c).val());$("#"+e).submit()}, open:function(){},close:function(){}})}(document,"search_text","search_form","/libs/jquery-ui-1.10.3.custom.autocomplete/shimansky.biz/autocomplete/");
					},{charset:"utf-8"},5E3); */
					/* window.Modernizr&&Modernizr.touch&&yepnope.injectJs("/libs/hammer.js-1.0.5/dist/jquery.hammer.min.js", function () {
						(function(b){var f=/localhost/.test(self.location.host)?"http://localhost/externalcounters/":"http://shimansky.biz/externalcounters/",d=b.getElementsByTagName("a")||"",a=self.location.protocol+"//"+self.location.host+"/"||"",g=self.location.host+"/"||"",h=encodeURIComponent(b.location.href||""),k=encodeURIComponent(b.title||"").replace("\x27","&#39;");if(d&&a&&g&&"undefined"!==typeof window.jQuery&&"undefined"!==typeof window.Hammer)for(var c,e,a=0;a<d.length;a+=1)if(c=d[a],(e=c.getAttribute("href")|| "")&&(e.match(/^\/scripts\//)||/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)|(localhost)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e))&&!c.getAttribute("rel"))$(c).hammer().on("touch",$(this),function(a){a.preventDefault();a=$(this).attr("href");var c=b.getElementsByTagName("body")[0].firstChild,d=b.createElement("div");d.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url("+f+"?dmn="+encodeURIComponent(a)+"&rfrr="+h+"&ttl="+k+"&encoding=utf-8) top left no-repeat;"); c.parentNode.insertBefore(d,c);b.location.href=a})})(document);
					},{charset:"utf-8"},5E3); */
					/* ("undefined"!==typeof sbizIsMobileBrowser&&sbizIsMobileBrowser)&&yepnope.injectJs("/libs/jquery.webks-responsive-table/shimansky.biz/jquery.webks-responsive-table.fixed.min.js", function () {
						"undefined"!==typeof window.jQuery&&domready(function(){(function(a,b,c){window.innerWidth&&(0<window.innerWidth?window.innerWidth:screen.width)&&$(function(){$("body").addClass("javascript-active");$(a).responsiveTable({displayResponsiveCallback:function(){return b>(window.innerWidth?0<window.innerWidth?window.innerWidth:screen.width:"")}});$(window).bind("orientationchange",function(b){setTimeout("$('"+a+"').responsiveTableUpdate()",c)});$(window).resize(function(){$(a).responsiveTableUpdate()})})})("table.respond", 768,100)});
					},{charset:"utf-8"},5E3); */
/*!
 * 
 * 
 * @params 
 * @return 
 */
					/*("undefined"!==typeof sbizIsMobileBrowser&&sbizIsMobileBrowser)||*/"undefined"!==typeof window.jQuery&&$(document).ready(function(){$("#sequence").sequence({autoPlay:!0,autoPlayDelay:2E3,nextButton:!1,prevButton:!1,preloader:!0,navigationSkip:!1,animateStartingFrameIn:!0,preloadTheseFrames:[1],preloadTheseImages:["images/tn-model1.png","images/tn-model2.png","images/tn-model3.png"]}).data("sequence")});


/*!
 * 
 * 
 * @params 
 * @return 
 */

			function getWindowHeight(){var a=0;"number"==typeof window.innerHeight?a=window.innerHeight:document.documentElement&&document.documentElement.clientHeight?a=document.documentElement.clientHeight:document.body&&document.body.clientHeight&&(a=document.body.clientHeight);return a} function setContent(a){if(document.getElementById&&document.getElementById(a)){var b=getWindowHeight();if(0<b){a=document.getElementById(a);var c=a.offsetHeight;0<b-c?(a.style.position="relative",a.style.top=b/2-c/1.75+"px"):a.style.position="static"}}};window.onload=function(){setContent("page_container1");setContent("page_container2");setContent("page_container3");setContent("page_container4")};window.onresize=function(){setContent("page_container1");setContent("page_container2");setContent("page_container3");setContent("page_container4")};
/*!
 * 
 * 
 * @params 
 * @return 
 */
				("undefined"!==typeof sbizIsMobileBrowser&&sbizIsMobileBrowser)?window.onload=function(c){a=c.getElementsByTagName("img");for(b=0;b<a.length;b++)/lazy-load/.test(a[b].getAttribute("class"))&&(d=a[b].getAttribute("data-src"),a[b].setAttribute("src",d),a[b].setAttribute("class","lazy-loaded"))}(document):yepnope.injectJs("./libs/Lazy-Load-Images-without-jQuery/lazyload.min.js",function(){},{charset:"utf-8"},5E3);
/*!
 * 
 * 
 * @params 
 * @return 
 */
 (function(b,c,d,a){if(!b&&c&&d){b=a.createElement("img");var e=a.createElement("br"),f=a.createTextNode("\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443:");a=a.title&&"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u00ab"+a.title.replace(/\[[^\]]*?\]/g,"")+"\u00bb"||"";b.setAttribute("src","https://chart.googleapis.com/chart?cht=qr&chld=M|4&choe=UTF-8&chs=300x300&chl="+encodeURIComponent(d)); b.setAttribute("style","width:150px;height:150px;background:transparent;background-size:150px 150px;border:0;vertical-align:bottom;padding:0;margin:0;");b.setAttribute("title",a);b.setAttribute("alt",a);c.appendChild(f);c.appendChild(e);c.appendChild(b)}})(sbizIsMobileBrowser||"",document.getElementById("qr_code")||"",document.location.href||"",document);
/*!
 * 
 * 
 * @params 
 * @return 
 */
			window.onload=function(b,c){if(1<b)for(a=c.getElementsByTagName("img"),b=0;b<a.length;b++)/retina/.test(a[b].getAttribute("class"))&&(d=a[b].getAttribute("src"),a[b].setAttribute("src",d.replace(/(.*)\.(.*?)$/,"$1@2x.$2")))}(window.devicePixelRatio?window.devicePixelRatio:1,document);
			window.addEventListener?window.addEventListener("load",deferredJS,!1):window.attachEvent?window.attachEvent("onload",deferredJS):window.onload=deferredJS;
			window.onload=function(b,c){if(!b)for(a=c.getElementsByTagName("img"),b=0;b<a.length;b++)/svgimg/.test(a[b].getAttribute("class"))&&(d=a[b].getAttribute("src"),a[b].setAttribute("src",d.replace(/(.*)\.(.*?)$/,"$1.png")))}(/svg/.test(document.documentElement.className),document);
			(function(e,f,a,h){b=document.createElement("a");b.setAttribute("style","display:none;");b.setAttribute("href","#");b.setAttribute("id","toTop");b.setAttribute("onclick","function scrollTop2(c){var b=window.pageYOffset,d=0,e=setInterval(function(b,a){return function(){a-=b*c;window.scrollTo(0,a);d++;(150<d||0>a)&&clearInterval(e)}}(c,b--),50)};scrollTop2(15);return false;");c=document.createElement("span");c.setAttribute("id","toTopHover");b.appendChild(c);d=document.createTextNode("\u041d\u0430\u0432\u0435\u0440\u0445"); b.appendChild(d);e.appendChild(b);f.onscroll=function(){var e=f.pageYOffset||a.documentElement.scrollTop||a.body.scrollTop,k=f.innerHeight||a.documentElement.clientHeight||a.body.clientHeight,g=a.getElementById(h)||"";g&&(e>k?g.style.display="inline":g.style.display="none")}})(document.getElementsByTagName("body")[0]||document.documentElement,window,document,"toTop");
			(function(d){var g=/localhost/.test(self.location.host)?"http://localhost/externalcounters/":"http://shimansky.biz/externalcounters/",c=d.getElementsByTagName("a")||"",a=self.location.protocol+"//"+self.location.host+"/"||"",h=self.location.host+"/"||"",k=encodeURIComponent(d.location.href||""),l=encodeURIComponent(d.title||"").replace("\x27","&#39;");if(c&&a&&h)for(a=0;a<c.length;a+=1)if(b=c[a],(e=b.getAttribute("href")||"")&&(e.match(/^\/scripts\//)||/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)|(localhost)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e))&& !b.getAttribute("rel"))c[a].onclick=function(){var a=this.getAttribute("href"),c=d.getElementsByTagName("body")[0].firstChild,f=d.createElement("div");f.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url("+g+"?dmn="+encodeURIComponent(a)+"&rfrr="+k+"&ttl="+l+"&encoding=utf-8) top left no-repeat;");c.parentNode.insertBefore(f,c)}})(document);
			addEvent(window,"blur",function(){(function (d,w){var a=/localhost/.test(self.location.host)?"http://localhost/externalcounters/":"http://shimansky.biz/externalcounters/",b=encodeURIComponent(d.referrer||""),c=encodeURIComponent(w.location.href||""),e=encodeURIComponent((d.title||"").replace("\x27","&#39;")+" - \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0435\u043d"),f=d.createElement("div"),g=d.getElementsByTagName("body")[0].firstChild;f.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url("+a+"?dmn="+c+"\x26rfrr="+b+"\x26ttl="+e+"\x26encoding=utf-8) top left no-repeat;");g.parentNode.insertBefore(f,g);}(document,window));},!1);
/*!
 * 
 * 
 * @params 
 * @return 
 */
("undefined"!==typeof sbizIsMobileBrowser&&sbizIsMobileBrowser)?function(f,c){for(var d=c.length;d--;){var a=c[d],b=f.createElement("a"),e=a.parentNode;b.href=a.src;b.appendChild(document.createTextNode("\u041f\u0440\u043e\u0441\u043b\u0443\u0448\u0430\u0442\u044c \u0437\u0432\u0443\u043a / Listen to the sound"));b.setAttribute("target","_blank"),g=f.createElement("p");g.appendChild(b);e.insertBefore(g,a);e.removeChild(a)}}(document,document.getElementsByTagName("audio") || ""):yepnope.injectCss("/libs/mediaelement/shimansky.biz/mediaelementplayer.min.css",function(){yepnope.injectJs("/libs/mediaelement/shimansky.biz/mediaelement-and-player.min.js",function(){$("audio,video").mediaelementplayer()},{charset:"utf-8"},5E3)},{media:"all"},5E3);
/*!
 * 
 * 
 * @params 
 * @return 
 */
("undefined"!==typeof sbizIsMobileBrowser&&sbizIsMobileBrowser)||function(b){"undefined"!==typeof window.jQuery&&domready(function(){$(function(){var a=window.innerWidth?window.innerWidth:screen.width;a&&767<a&&function(a){
	yepnope.injectJs("/libs/CrossSlide/shimansky.biz/jquery.cross-slide.min.js",function(){
		"undefined"!==typeof window.jQuery&&(function(a){$("#"+a).crossSlide({sleep:2,fade:1},[{src:"/images/pages/more/more_irregular_verbs/s0004.jpg"},{src:"/images/pages/more/more_irregular_verbs/s0005.jpg"},{src:"/images/pages/more/more_irregular_verbs/s0006.jpg"},{src:"/images/pages/more/more_irregular_verbs/s0007.jpg"},{src:"/images/pages/more/more_irregular_verbs/s0008.jpg"},{src:"/images/pages/more/more_irregular_verbs/s0009.jpg"},{src:"/images/pages/more/more_irregular_verbs/s0010.jpg"}])}("irregularverbs_slide"));
	},{charset:"utf-8"},5E3)}(b)})})
}(document);
/*!
 * 
 * 
 * @params 
 * @return 
 */
"undefined"!==typeof window.jQuery&&$(document).on("click",".superbox-current-desc h2 a",function(a){a.preventDefault();a=/localhost/.test(self.location.host)?"http://localhost/externalcounters/":"http://shimansky.biz/externalcounters/";var e=encodeURIComponent(document.location.href||""),f=encodeURIComponent(document.title||"").replace("\x27","&#39;"),b=$(this).attr("href"),c=document.getElementsByTagName("body")[0].firstChild,d=document.createElement("div");d.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url("+ a+"?dmn="+encodeURIComponent(b)+"&rfrr="+e+"&ttl="+f+"&encoding=utf-8) top left no-repeat;");c.parentNode.insertBefore(d,c);setTimeout(function(){window.open(b,"_blank")},500)});
/*!
 * 
 * 
 * @params 
 * @return 
 */
(function(a){for(b=0;b<a.length;b++)d=a[b],c=d.getAttribute("href"),(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)|(localhost)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(c)||/http:\/\/localhost/.test(c))&&d.setAttribute("target","_blank")})(document.getElementsByTagName("a"));
/*!
 * 
 * 
 * @params 
 * @return 
 */
/* request externalcounter on blur */
var sbizDocumentTitle=document.title||"";
addEvent(window, "blur", function () {
	document.title = sbizDocumentTitle + " - \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0435\u043d";
	var a = document.createElement("div"),
	b = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/",
	c = encodeURIComponent(sbizDocumentReferrer),
	d = encodeURIComponent(sbizWindowLocation),
	e = encodeURIComponent(document.title || "").replace("'", "&#39;");
	f = document.getElementsByTagName("body")[0].firstChild;
	a.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url('" + b + "?dmn=" + d + "&rfrr=" + c + "&ttl=" + e + "&encoding=utf-8') top left no-repeat;");
	f.parentNode.insertBefore(a, f)
}, !1);
/*!
 * 
 * 
 * @params 
 * @return 
 */
(function (d) {
		var a = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/",
		b = encodeURIComponent(a.referrer || ""),
		c = encodeURIComponent(window.location.href || ""),
		f = encodeURIComponent(("undefined" !== typeof sbizDocumentTitle) ? sbizDocumentTitle : (a.title || "")).replace("\x27", "&#39;"),
		g = d.createElement("div");
		g.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(\x27" + a + "?dmn=" + c + "\x26rfrr=" + b + "\x26ttl=" + f + "\x26encoding=utf-8\x27) top left no-repeat;"),
		h = d.getElementsByTagName("body")[0].firstChild,
		h.parentNode.insertBefore(g, h);
}
	(document));
	/*!
 * 
 * 
 * @params 
 * @return 
 */
(function (d) {
	var f = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/",
	c = d.getElementsByTagName("a") || "",
	a = self.location.protocol + "//" + self.location.host + "/" || "",
	k = self.location.host + "/" || "",
	g = encodeURIComponent(d.location.href || ""),
	h = encodeURIComponent(d.title || "").replace("\x27", "&#39;");
	if (c && a && k) {
		if ("undefined" !== typeof window.jQuery && "undefined" !== typeof window.Hammer) {
			for (var b, e, a = 0; a < c.length; a += 1) {
				if (b = c[a], (e = b.getAttribute("href") || "") && (e.match(/^\/scripts\//) || /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e)) && !b.getAttribute("rel")) {
					$(b).hammer().on("touch", $(this), function (a) {
						a.preventDefault();
						a = $(this).attr("href");
						var b = d.getElementsByTagName("body")[0].firstChild,
						c = d.createElement("div");
						c.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + f + "?dmn=" + encodeURIComponent(a) + "&rfrr=" + g + "&ttl=" + h + "&encoding=utf-8) top left no-repeat;");
						b.parentNode.insertBefore(c, b);
						d.location.href = a
					})
				}
			}
		}
	}
})(document);
/*!
 * 
 * 
 * @params 
 * @return 
 */
(function (d) {
	var f = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/",
	c = d.getElementsByTagName("a") || "",
	a = self.location.protocol + "//" + self.location.host + "/" || "",
	k = self.location.host + "/" || "",
	g = encodeURIComponent(d.location.href || ""),
	h = encodeURIComponent(d.title || "").replace("\x27", "&#39;");
	if (c && a && k) {
		for (a = 0; a < c.length; a += 1) {
			if (b = c[a], (e = b.getAttribute("href") || "") && (e.match(/^\/scripts\//) || /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e)) && !b.getAttribute("rel")) {
				c[a].onclick = function () {
					var a = this.getAttribute("href"),
					b = d.getElementsByTagName("body")[0].firstChild,
					c = d.createElement("div");
					c.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + f + "?dmn=" + encodeURIComponent(a) + "&rfrr=" + g + "&ttl=" + h + "&encoding=utf-8) top left no-repeat;");
					b.parentNode.insertBefore(c, b)
				}
			}
		}
	}
})(document);
/*!
 * 
 * 
 * @params 
 * @return 
 */
"undefined" !== typeof window.jQuery && domready(function () {
	(function (a, b, c, d) {
		a.innerWidth && (0 < a.innerWidth ? a.innerWidth : screen.width) && $(function () {
			$("body").addClass("javascript-active");
			$(b).responsiveTable({
				displayResponsiveCallback : function () {
					return c > (a.innerWidth ? 0 < a.innerWidth ? a.innerWidth : screen.width : "")
				}
			});
			$(a).bind("orientationchange", function (a) {
				setTimeout("$('" + b + "').responsiveTableUpdate()", d)
			});
			$(a).resize(function () {
				$(b).responsiveTableUpdate()
			})
		})
	})(window, "table.respond", 768, 100)
});
/*!
 * 
 * 
 * @params 
 * @return 
 */
				yepnope.injectJs("http://yandex.st/json2/2011-10-19/json2.min.js",function(){
					yepnope.injectJs("//cdnjs.cloudflare.com/ajax/libs/jStorage/0.3.0/jstorage.min.js",function(){
"undefined" !== typeof window.jQuery && domready(function () {
	(function (b) {
		b && function () {
			var a = $("#comments_check"),
			f = $("#comments_form_submit_button");
			b && a && (a.hide(), f.click(function () {
					var d = b.value,
					c = encodeURIComponent(window.location.href.split("#")[0]),
					g = encodeURIComponent(document.title.replace("'", "&#39;")),
					e = "comments_textarea=" + d + "&self_href=" + c + "&self_title=" + g;
					d && $.jStorage.set("comments_textarea", JSON.stringify(d));
					if (!d || !c || !g)
						return a.html("\u00a0\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435!\u00a0"), a.show(), !1;
					f.hide();
					$.ajax({
						type : "POST",
						url : "/scripts/comments/add.php",
						data : e,
						success : function () {
							a.hide();
							$.jStorage.flush("comments_textarea");
							$("#comments_form")[0].reset();
							$("#load_pt_comments").load("/scripts/comments/?load=posts&limit=100");
							b.focus()
						}
					});
					return !1
				}));
			var e = b.value,
			c = $.jStorage.get("comments_textarea");
			c && !e && (b.value = $.parseJSON(c));
			$("#comments_form_reset_button").click(function () {
				a.hide();
				$.jStorage.flush("comments_textarea");
				b.value="";
				b.focus();
			})
		}
		();
		$("#load_pt_comments").load("/scripts/comments/?load=posts&limit=100");
		$(window).load(function () {
			b.focus()
		})
	})(document.getElementById("comments_textarea") || "")
});
					},{charset:"utf-8"},5E3);
				},{charset:"utf-8"},5E3);
/*!
 * 
 * 
 * @params 
 * @return 
 */
		addEvent(window, "load", function () {
			var a = document.getElementById("comments_textarea") || "";
			a && a.focus()
		}, !1);
/*!
 * 
 * 
 * @params 
 * @return 
 */
"undefined"!==typeof window.jQuery&&domready(function(){(function(a,b,c){window.innerWidth&&(0<window.innerWidth?window.innerWidth:screen.width)&&$(function(){$("body").addClass("javascript-active");$(a).responsiveTable({displayResponsiveCallback:function(){return b>(window.innerWidth?0<window.innerWidth?window.innerWidth:screen.width:"")}});$(window).bind("orientationchange",function(b){setTimeout("$('"+a+"').responsiveTableUpdate()",c)});$(window).resize(function(){$(a).responsiveTableUpdate()})})})("table.respond", 768,100)});
/*!
 * 
 * 
 * @params 
 * @return 
 */
"undefined" !== typeof window.jQuery && (function (document,a,b,d) {
	$("#"+a).autocomplete({
		source : function (request, response) {
			$.ajax({
				url : d,
				dataType : "json",
				data : {
					q : request.term,
					c : 10
				},
				success : function (data) {
					response($.map(data, function (item) {
							return {
								label : item.value,
								value : item.name
							}
						}));
				}
			});
		},
		minLength : 1,
		select : function (event, ui) {
			if (ui.item.value && (ui.item.value.match(/^http\:\/\//) || ui.item.value.match(/^https\:\/\//) || ui.item.value.match(/^\/search\//) || ui.item.value.match(/^\//))) {
				document.location.href = ui.item.value;
				return false;
			} else {
				$(event.target).val($("#"+a).val());
				$("#"+b).submit();
			}
		},
		open : function () {},
		close : function () {}
	})
	}(document,"search_text","search_form","/libs/jquery-ui-1.10.3/shimansky.biz/autocomplete/"));
/*!
 * 
 * 
 * @params 
 * @return 
 */
	(function(a){b=document.createElement("a");b.setAttribute("style","display:none;");b.setAttribute("href","#");b.setAttribute("id","toTop");b.setAttribute("onclick","function scrollTop2(c){var b=window.pageYOffset,d=0,e=setInterval(function(b,a){return function(){a-=b*c;window.scrollTo(0,a);d++;(150<d||0>a)&&clearInterval(e)}}(c,b--),50)};scrollTop2(15);return false;");c=document.createElement("span");c.setAttribute("id","toTopHover");b.appendChild(c);d=document.createTextNode("\u041d\u0430\u0432\u0435\u0440\u0445"); b.appendChild(d);a.appendChild(b);"undefined"!==typeof window.jQuery&&$(window).scroll(function(){$(this).scrollTop()>$(window).height()?$("#toTop").stop().fadeIn():$("#toTop").stop().fadeOut()})})(document.getElementsByTagName("body")[0]||document.documentElement);
/*!
 * 
 * 
 * @params 
 * @return 
 */
				sbizIsMobileBrowser||yepnope.injectJs("/libs/totop/shimansky.biz/js/jquery.ui.totop.fixed.min.js", function () {
					"undefined"!==typeof window.jQuery&&(function(){$().UItoTop({easingType:"easeOutQuart"})}());
				},{charset:"utf-8"},5E3);
/*!
 * 
 * 
 * @params 
 * @return 
 */
				(function (e, f, a, h) {
	b = document.createElement("a");
	b.setAttribute("style", "display:none;");
	b.setAttribute("href", "#");
	b.setAttribute("id", "toTop");
	b.setAttribute("onclick", "function scrollTop2(c){var b=window.pageYOffset,d=0,e=setInterval(function(b,a){return function(){a-=b*c;window.scrollTo(0,a);d++;(150<d||0>a)&&clearInterval(e)}}(c,b--),50)};scrollTop2(15);return false;");
	c = document.createElement("span");
	c.setAttribute("id", "toTopHover");
	b.appendChild(c);
	d = document.createTextNode("\u041d\u0430\u0432\u0435\u0440\u0445");
	b.appendChild(d);
	e.appendChild(b);
	f.onscroll = function () {
		var e = f.pageYOffset || a.documentElement.scrollTop || a.body.scrollTop,
		k = f.innerHeight || a.documentElement.clientHeight || a.body.clientHeight,
		g = a.getElementById(h) || "";
		g && (e > k ? g.style.display = "inline" : g.style.display = "none")
	}
})(document.getElementsByTagName("body")[0] || document.documentElement, window, document, "toTop");
				/* sbizIsMobileBrowser&&(function(a){$(window).scroll(function(){$(this).scrollTop()>$(window).height()?$("#toTop").stop().fadeIn():$("#toTop").stop().fadeOut()});})(window.jQuery);*/
/* (function(a){b=document.createElement("a");b.setAttribute("style","display:none;");b.setAttribute("href","#");b.setAttribute("id","toTop");b.setAttribute("onclick","function scrollTop2(c){var b=window.pageYOffset,d=0,e=setInterval(function(b,a){return function(){a-=b*c;window.scrollTo(0,a);d++;(150<d||0>a)&&clearInterval(e)}}(c,b--),50)};scrollTop2(15);return false;");c=document.createElement("span");c.setAttribute("id","toTopHover");b.appendChild(c);d=document.createTextNode("\u041d\u0430\u0432\u0435\u0440\u0445"); b.appendChild(d);a.appendChild(b);})(document.getElementsByTagName("body")[0]||document.documentElement);
(function (b, a, f) {
	b.onscroll = function () {
		var d = b.pageYOffset || a.documentElement.scrollTop || a.body.scrollTop,
		e = b.innerHeight || a.documentElement.clientHeight || a.body.clientHeight,
		c = a.getElementById(f) || "";
		c && (d > e ? c.style.display = "inline" : c.style.display = "none");
	};
})(window, document, "toTop"); */
			(function (a, b1, a1, f1) {
	b = document.createElement("a");
	b.setAttribute("style", "display:none;");
	b.setAttribute("href", "#");
	b.setAttribute("id", "toTop");
	b.setAttribute("onclick", "function scrollTop2(c){var b=window.pageYOffset,d=0,e=setInterval(function(b,a){return function(){a-=b*c;window.scrollTo(0,a);d++;(150<d||0>a)&&clearInterval(e)}}(c,b--),50)};scrollTop2(15);return false;");
	c = document.createElement("span");
	c.setAttribute("id", "toTopHover");
	b.appendChild(c);
	d = document.createTextNode("\u041d\u0430\u0432\u0435\u0440\u0445");
	b.appendChild(d);
	a.appendChild(b);
	b1.onscroll = function () {
		var d1 = b1.pageYOffset || a1.documentElement.scrollTop || a1.body.scrollTop,
		e1 = b1.innerHeight || a1.documentElement.clientHeight || a1.body.clientHeight,
		c1 = a1.getElementById(f1) || "";
		c1 && (d1 > e1 ? c1.style.display = "inline" : c1.style.display = "none");
	};
})(document.getElementsByTagName("body")[0] || document.documentElement, window, document, "toTop");
/*!
 * 
 * 
 * @params 
 * @return 
 */
				sbizIsMobileBrowser&&(function(a){b=document.createElement("a");b.setAttribute("style","display:inline;");b.setAttribute("href","#");b.setAttribute("id","toTop");b.setAttribute("onclick","function scrollTop2(c){var b=window.pageYOffset,d=0,e=setInterval(function(b,a){return function(){a-=b*c;window.scrollTo(0,a);d++;(150<d||0>a)&&clearInterval(e)}}(c,b--),50)};scrollTop2(15);return false;");c=document.createElement("span");c.setAttribute("id","toTopHover");b.appendChild(c);d=document.createTextNode("\u041d\u0430\u0432\u0435\u0440\u0445"); b.appendChild(d);a.appendChild(b)})(document.getElementsByTagName("body")[0]||document.documentElement);
/*!
 * 
 * 
 * @params 
 * @return 
 */
				<!-- <a style="display: inline;" href="#" id="toTop" onclick="function scrollTop2(c){var b=window.pageYOffset,d=0,e=setInterval(function(b,a){return function(){a-=b*c;window.scrollTo(0,a);d++;(150<d||0>a)&&clearInterval(e)}}(c,b--),50)};scrollTop2(15);return false;"><span id="toTopHover"></span>Наверх</a> -->
/*!
 * 
 * 
 * @params 
 * @return 
 */
			/* "undefined"!==typeof window.jQuery&&(function(){$().UItoTop({easingType:"easeOutQuart"})}());
			"undefined"!==typeof window.jQuery&&function(){$(function(){$("nav#menu-left").mmenu()});$(function(){$("nav#menu-right").mmenu({position:"right",counters:!0,searchfield:!0});})}();
			"undefined"!==typeof window.jQuery&&($("#search_text").autocomplete({source:function(request,response){$.ajax({url:"/libs/jquery-ui-1.10.3/shimansky.biz/autocomplete/",dataType:"json",data:{q:request.term,c:10},success:function(data){response($.map(data,function(item){return{label:item.value,value:item.name}}));}});},minLength:1,select:function(event,ui){if(ui.item.value&&(ui.item.value.match(/^http\:\/\//)||ui.item.value.match(/^https\:\/\//)||ui.item.value.match(/^\/search\//)||ui.item.value.match(/^\//))){document.location.href=ui.item.value;return false;}else{$(event.target).val($("#search_text").val());$("#search_form").submit();}},open:function(){},close:function(){}}));
			"undefined"!==typeof window.jQuery&&domready(function(){window.innerWidth&&(0<window.innerWidth?window.innerWidth:screen.width)&&$(function(){$("body").addClass("javascript-active");$("table.respond").responsiveTable({displayResponsiveCallback:function(){return 768>(window.innerWidth?0<window.innerWidth?window.innerWidth:screen.width:"")}});$(window).bind("orientationchange",function(a){setTimeout("$(&#8217;table.respond&#8217;).responsiveTableUpdate()",100)});$(window).resize(function(){$("table.respond").responsiveTableUpdate()})})}); */
/*!
 * 
 * 
 * @params 
 * @return 
 */
		<!-- <script src="/libs/jquery-2.0.3/jquery.fixed.min.js"></script>
		<script src="/libs/mmenu-3.3.0/shimansky.biz/js/jquery.mmenu.fixed.min.js"></script> -->
		<!-- <script src="/libs/mmenu-3.3.0/shimansky.biz/js/bundle.min.js"></script> -->
		<!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script><script>window.jQuery || document.write("<script src=\"/libs/jquery-1.9.1/jquery.min.js\"><\/script>")</script>
		<script src="/libs/mmenu-3.3.0/shimansky.biz/js/jquery.mmenu.fixed.min.js"></script>
		<script src="/libs/totop/shimansky.biz/js/jquery.ui.totop.fixed.min.js"></script>
		<script src="/libs/jquery-ui-1.10.3.custom.autocomplete/js/jquery-ui-1.10.3.custom.min.js"></script>
		<script src="/libs/jquery.webks-responsive-table/shimansky.biz/jquery.webks-responsive-table.fixed.min.js"></script> -->
		<!-- <script src="/libs/mediaelement/build/mediaelement-and-player.min.js"></script> -->
/*!
 * 
 * 
 * @params 
 * @return 
 */
		<!-- <link rel="stylesheet" href="/libs/mmenu-3.3.0/shimansky.biz/css/mmenu.css" />
		<link rel="stylesheet" href="/libs/mmenu-3.3.0/shimansky.biz/css/mmenu-positioning.css" /> -->
/*!
 * 
 * 
 * @params 
 * @return 
 */
<!-- <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,400italic,600,600italic&amp;subset=latin,cyrillic"> -->
		<!-- <link rel="stylesheet" href="/libs/mediaelement/build/mediaelementplayer.min.css" /> -->
		<!-- <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Ubuntu+Mono|Open+Sans:300,400,400italic,600,600italic,700&amp;subset=latin,cyrillic"> -->
		<!-- <link rel="stylesheet" href="/libs/google-code-prettify/tomorrow-night-eighties.min.css"> -->
		<!-- <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,400italic,600,600italic&amp;subset=latin,cyrillic"> -->
		<!-- <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Voces|Open+Sans:300,400,400italic,600,600italic&amp;subset=latin,latin-ext,cyrillic"> -->
		<!-- <link rel="stylesheet" href="/libs/jquery-ui-1.10.3.custom.autocomplete/css/smoothness/jquery-ui-1.10.3.custom.min.css" /> -->
		<!-- <script src="//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.8.4/jquery.lazyload.min.js"></script> -->
/*!
 * 
 * 
 * @params 
 * @return 
 */
yepnope.injectJs("/libs/mmenu-3.3.0/shimansky.biz/js/bundle.min.js", function () {
	"undefined" !== typeof window.jQuery && function (a) {
		a && (a.focus(), a.change(function () {
				$("#select option:selected").each(function () {
					var a = $(this).val();
					a && (document.location = a)
				})
			}))
	}
	($("#select") || "");
	"undefined" !== typeof window.jQuery && function () {
		sbizIsMobileBrowser ? function (a) {
			for (var d = a.length; d--; ) {
				var b = a[d],
				c = document.createElement("a"),
				e = b.parentNode;
				c.href = b.src;
				c.appendChild(document.createTextNode("\u041f\u0440\u043e\u0441\u043b\u0443\u0448\u0430\u0442\u044c \u0437\u0432\u0443\u043a / Listen to the sound"));
				c.setAttribute("target", "_blank");
				e.insertBefore(c, b);
				e.removeChild(b)
			}
		}
		(document.getElementsByTagName("audio") || "") : yepnope.injectCss("/libs/mediaelement/build/mediaelementplayer.min.css", function () {
			yepnope.injectJs("/libs/mediaelement/build/mediaelement-and-player.min.js", function () {
				$("audio,video").mediaelementplayer()
			}, {
				charset : "utf-8"
			}, 5E3)
		}, {
			media : "all"
		}, 5E3)
	}
	()
}, {
	charset : "utf-8"
}, 5E3);
/*!
 * 
 * 
 * @params 
 * @return 
 */
(function (d) {
	var f = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/",
	c = d.getElementsByTagName("a") || "",
	a = self.location.protocol + "//" + self.location.host + "/" || "",
	k = self.location.host + "/" || "",
	g = encodeURIComponent(d.location.href || ""),
	h = encodeURIComponent(d.title || "").replace("\x27", "&#39;");
	if (c && a && k) {
		if ("undefined" !== typeof window.jQuery && "undefined" !== typeof window.Hammer && window.Modernizr && Modernizr.touch) {
			for (var b, e, a = 0; a < c.length; a += 1) {
				if (b = c[a], (e = b.getAttribute("href") || "") && (e.match(/^\/scripts\//) || /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e)) && !b.getAttribute("rel")) {
					$(b).hammer().on("touch", $(this), function (a) {
						a.preventDefault();
						a = $(this).attr("href");
						var b = d.body.firstChild,
						c = d.createElement("div");
						c.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + f + "?dmn=" + encodeURIComponent(a) + "&rfrr=" + g + "&ttl=" + h + "&encoding=utf-8) top left no-repeat;");
						b.parentNode.insertBefore(c, b);
						d.location.href = a
					})
				}
			}
		} else {
			for (a = 0; a < c.length; a += 1) {
				if (b = c[a], (e = b.getAttribute("href") || "") && (e.match(/^\/scripts\//) || /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e)) && !b.getAttribute("rel")) {
					c[a].onclick = function () {
						var a = this.getAttribute("href"),
						b = d.body.firstChild,
						c = d.createElement("div");
						c.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + f + "?dmn=" + encodeURIComponent(a) + "&rfrr=" + g + "&ttl=" + h + "&encoding=utf-8) top left no-repeat;");
						b.parentNode.insertBefore(c, b)
					}
				}
			}
		}
	}
})(document);
/*!
 * 
 * 
 * @params 
 * @return 
 */
(function(d){var f=/localhost/.test(self.location.host)?"http://localhost/externalcounters/":"http://shimansky.biz/externalcounters/",c=d.getElementsByTagName("a")||"",a=self.location.protocol+"//"+self.location.host+"/"||"",k=self.location.host+"/"||"",g=encodeURIComponent(d.location.href||""),h=encodeURIComponent(d.title||"").replace("\x27","&#39;");if(c&&a&&k)if("undefined"!==typeof window.jQuery&&"undefined"!==typeof window.Hammer&&window.Modernizr&&Modernizr.touch)for(var b,e,a=0;a<c.length;a+= 1){if(b=c[a],(e=b.getAttribute("href")||"")&&(e.match(/^\/scripts\//)||/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e))&&!b.getAttribute("rel"))$(b).hammer().on("touch",$(this),function(a){a.preventDefault();a=$(this).attr("href");var b=d.body.firstChild,c=d.createElement("div");c.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url("+f+"?dmn="+encodeURIComponent(a)+"&rfrr="+g+"&ttl="+h+"&encoding=utf-8) top left no-repeat;"); b.parentNode.insertBefore(c,b);d.location.href=a})}else for(a=0;a<c.length;a+=1)if(b=c[a],(e=b.getAttribute("href")||"")&&(e.match(/^\/scripts\//)||/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e))&&!b.getAttribute("rel"))c[a].onclick=function(){var a=this.getAttribute("href"),b=d.body.firstChild,c=d.createElement("div");c.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url("+f+"?dmn="+encodeURIComponent(a)+ "&rfrr="+g+"&ttl="+h+"&encoding=utf-8) top left no-repeat;");b.parentNode.insertBefore(c,b)}})(document);
/*!
 * 
 * 
 * @params 
 * @return 
 */
(function (d) {
	var f = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/",
	c = d.getElementsByTagName("a") || "",
	a = self.location.protocol + "//" + self.location.host + "/" || "",
	k = self.location.host + "/" || "",
	g = encodeURIComponent(d.location.href || ""),
	h = encodeURIComponent(d.title || "").replace("\x27", "&#39;");
	if (c && a && k)
		if ("undefined" !== typeof window.jQuery && "undefined" !== typeof window.Hammer && window.Modernizr && Modernizr.touch)
			for (var b, e, a = 0; a < c.length; a += 1) {
				if (b = c[a], (e = b.getAttribute("href") || "") && (e.match(/^\/scripts\//) || /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e)) && !b.getAttribute("rel"))
					$(b).hammer().on("touch", $(this), function (a) {
						a.preventDefault();
						a = $(this).attr("href");
						var b = d.body.firstChild,
						c = d.createElement("div");
						c.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + f + "?dmn=" + encodeURIComponent(a) + "&rfrr=" + g + "&ttl=" + h + "&encoding=utf-8) top left no-repeat;");
						b.parentNode.insertBefore(c, b);
						d.location.href = a
					})
			}
		else
			for (a = 0; a < c.length; a += 1)
				if (b = c[a], (e = b.getAttribute("href") || "") && (e.match(/^\/scripts\//) || /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e)) && !b.getAttribute("rel"))
					c[a].onclick = function () {
						var a = this.getAttribute("href"),
						b = d.body.firstChild,
						c = d.createElement("div");
						c.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + f + "?dmn=" + encodeURIComponent(a) + "&rfrr=" + g + "&ttl=" + h + "&encoding=utf-8) top left no-repeat;");
						b.parentNode.insertBefore(c, b)
					}
})(document);
/*!
 * 
 * 
 * @params 
 * @return 
 */
(function(a){a&&(a.onchange=function(){document.location.href=this.value})})(document.getElementById("select")||"");
/*!
 * 
 * 
 * @params 
 * @return 
 */
yepnope.injectJs("/libs/mmenu-3.3.0/shimansky.biz/js/bundle.min.js", function () {
	yepnope.injectJs("http://yandex.st/json2/2011-10-19/json2.min.js", function () {
		yepnope.injectJs("//cdnjs.cloudflare.com/ajax/libs/jStorage/0.3.0/jstorage.min.js", function () {
			"undefined" !== typeof window.jQuery && domready(function () {
				(function (a) {
					a && function () {
						var b = $("#comments_check"),
						f = $("#comments_form_submit_button");
						b && f && (b.hide(), f.click(function () {
								var d = $("#comments_textarea").val(),
								a = encodeURIComponent(window.location.href.split("#")[0]),
								c = encodeURIComponent(document.title.replace("'", "&#39;")),
								e = "comments_textarea=" + d + "&self_href=" + a + "&self_title=" + c;
								d && $.jStorage.set("comments_textarea", JSON.stringify(d));
								if (!d || !a || !c)
									return b.html("\u00a0\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435!\u00a0"), b.show(), !1;
								f.hide();
								$.ajax({
									type : "POST",
									url : "/scripts/comments/add.php",
									data : e,
									success : function () {
										b.hide();
										$.jStorage.flush("comments_textarea");
										$("#comments_form")[0].reset();
										$("#load_pt_comments").load("/scripts/comments/?load=posts&limit=100")
									}
								});
								return !1
							}));
						var a = document.getElementById("comments_textarea").value,
						c = document.getElementById("comments_check"),
						e = $.jStorage.get("comments_textarea");
						e && !a && (document.getElementById("comments_textarea").value = $.parseJSON(e));
						$("#comments_form_reset_button").click(function () {
							b.hide();
							$.jStorage.flush("comments_textarea");
							for (document.getElementById("comments_textarea").value = ""; c.firstChild; )
								c.removeChild(c.firstChild)
						})
					}
					()
				})(document.getElementById("comments_textarea") || "");
				$("#comments_textarea").focus();
				$("#load_pt_comments").load("/scripts/comments/?load=posts&limit=100")
			});
			addEvent(window, "load", function () {
				var a = document.getElementById("comments_textarea") || "";
				a && a.focus()
			}, !1);
		}, {
			charset : "utf-8"
		}, 5E3)
	}, {
		charset : "utf-8"
	}, 5E3)
}, {
	charset : "utf-8"
}, 5E3);
/*!
 * 
 * 
 * @params 
 * @return 
 */
			addEvent(window,"load",function(){var a=document.getElementById("select")||"";a&&a.focus()},!1);
/*!
 * 
 * 
 * @params 
 * @return 
 */
"undefined" !== typeof window.jQuery && $(document).ready(function () {
	var b = document.getElementById("load_quote") || "";
	b && function () {
		/* $.ajax({
			url: "/scripts/random_quote/?code=JSON",
			dataType: "json",
			async: !0,
			success: function(data) {
				var options,
					index,
					option,
					c,
					d,
					f;
				options = data.random_quote;
				for (index = 0; index < options.length; ++index) {
					option = options[index];
					c = option.quote;
					d = option.author;
					f = option.about;
				}
				c && b.appendChild(document.createTextNode(c));
				d && b.appendChild(document.createElement("br")),
				b.appendChild(document.createTextNode("\240\240\240\240\240\u2014 " + d));
				f && b.appendChild(document.createTextNode(" on " + f));
			}
		}); */
		/* $(function () {
			$.getJSON("/scripts/random_quote/?code=JSON", {},
				function (data) {
					var options,
						index,
						option,
						c,
						d,
						f;
					options = data.random_quote;
					for (index = 0; index < options.length; ++index) {
						option = options[index];
						c = option.quote;
						d = option.author;
						f = option.about;
					}
					c && b.appendChild(document.createTextNode(c));
					d && b.appendChild(document.createElement("br")),
					b.appendChild(document.createTextNode("\240\240\240\240\240\u2014 " + d));
					f && b.appendChild(document.createTextNode(" on " + f));
				})
		}); */
		(function () {
			var url = "http://shimansky.biz/scripts/random_quote/?code=JSON?jsoncallback=?";
			$.getJSON(url, {})
			.done(function (data) {
				var options,
				index,
				option,
				c,
				d,
				f;
				options = data.random_quote;
				for (index = 0; index < options.length; ++index) {
					option = options[index];
					c = option.quote;
					d = option.author;
					f = option.about;
				}
				c && b.appendChild(document.createTextNode(c));
				d && b.appendChild(document.createElement("br")),
				b.appendChild(document.createTextNode("\240\240\240\240\240\u2014 " + d));
				f && b.appendChild(document.createTextNode(" on " + f));
			});
		})();
	}
	(b);
});
/*!
 * 
 * 
 * @params 
 * @return 
 */
	//var c=document.getElementsByTagName("a")||"",a=self.location.protocol+"//"+self.location.host+"/"||"",e=self.location.host+"/"||""; if(c&&a&&e)for(var d,b,a=0;a<c.length;a+=1)if(d=c[a],(b=d.getAttribute("href")||"")&&(b.match(/^\/scripts\//)||/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(b))&&!d.getAttribute("rel"))c[a].onclick=function(){var f=document.getElementById("externalcounters"),g=/localhost/.test(self.location.host)?"http://localhost/externalcounters/":"http://shimansky.biz/externalcounters/",h=encodeURIComponent(document.location.href||""),k=encodeURIComponent(this.getAttribute("href")), l=encodeURIComponent(document.title||"").replace("'","&#39;");f&&f.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url('"+g+"?dmn="+k+"&rfrr="+h+"&ttl="+l+"&encoding=utf-8') top left no-repeat;")};
/* if("undefined"!==typeof window.jQuery&&"undefined"!==typeof window.Hammer&&window.Modernizr&&Modernizr.touch){var e=document.getElementsByTagName("a")||"",f=self.location.protocol+"//"+self.location.host+"/"||"",g=self.location.host+"/"||"";if(e&&f&&g){var a,h,b,c,d;for(a=0;a<e.length;a+=1)if(b=e[a],(c=b.getAttribute("href")||"")&&(c.match(/^\/scripts\//)||/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(c))&&!b.getAttribute("rel"))$(b).hammer().on("tap", $(this),function(k){k=document.getElementById("externalcounters");var l=/localhost/.test(self.location.host)?"http://localhost/externalcounters/":"http://shimansky.biz/externalcounters/",m=encodeURIComponent(document.location.href||""),n=encodeURIComponent($(this).attr("href")),p=encodeURIComponent(document.title||"").replace("'","&#39;");k&&k.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url('"+l+"?dmn="+n+"&rfrr="+m+"&ttl="+p+"&encoding=utf-8') top left no-repeat;")})}}else if(c= document.getElementsByTagName("a")||"",a=self.location.protocol+"//"+self.location.host+"/"||"",e=self.location.host+"/"||"",c&&a&&e)for(a=0;a<c.length;a+=1)if(d=c[a],(b=d.getAttribute("href")||"")&&(b.match(/^\/scripts\//)||/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(b))&&!d.getAttribute("rel"))c[a].onclick=function(){var k=document.getElementById("externalcounters"),l=/localhost/.test(self.location.host)?"http://localhost/externalcounters/":"http://shimansky.biz/externalcounters/", m=encodeURIComponent(document.location.href||""),n=encodeURIComponent(this.getAttribute("href")),p=encodeURIComponent(document.title||"").replace("'","&#39;");k&&k.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url('"+l+"?dmn="+n+"&rfrr="+m+"&ttl="+p+"&encoding=utf-8') top left no-repeat;")};
 */
 (function(d){var f=/localhost/.test(self.location.host)?"http://localhost/externalcounters/":"http://shimansky.biz/externalcounters/",c=d.getElementsByTagName("a")||"",a=self.location.protocol+"//"+self.location.host+"/"||"",k=self.location.host+"/"||"",g=encodeURIComponent(d.location.href||""),h=encodeURIComponent(d.title||"").replace("'","&#39;");if(c&&a&&k)if("undefined"!==typeof window.jQuery&&"undefined"!==typeof window.Hammer&&window.Modernizr&&Modernizr.touch)for(var b,e,a=0;a<c.length;a+= 1){if(b=c[a],(e=b.getAttribute("href")||"")&&(e.match(/^\/scripts\//)||/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e))&&!b.getAttribute("rel"))$(b).hammer().on("touch",$(this),function(a){a.preventDefault();a=$(this).attr("href");var b=d.body.firstChild,c=d.createElement("div");c.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url('"+f+"?dmn="+encodeURIComponent(a)+"&rfrr="+g+"&ttl="+h+"&encoding=utf-8') top left no-repeat;"); b.parentNode.insertBefore(c,b);d.location.href=a})}else for(a=0;a<c.length;a+=1)if(b=c[a],(e=b.getAttribute("href")||"")&&(e.match(/^\/scripts\//)||/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e))&&!b.getAttribute("rel"))c[a].onclick=function(){var a=this.getAttribute("href"),b=d.body.firstChild,c=d.createElement("div");c.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url('"+f+"?dmn="+encodeURIComponent(a)+ "&rfrr="+g+"&ttl="+h+"&encoding=utf-8') top left no-repeat;");b.parentNode.insertBefore(c,b)}})(document);
(function(document){
	 var counter_url = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/",
		outbound_links = document.getElementsByTagName("a") || "",
		self_location_protocol = self.location.protocol + "//" + self.location.host + "/" || "",
		self_location_host = self.location.host + "/" || "",
		document_location_href = encodeURIComponent(document.location.href || ""),
		document_title = encodeURIComponent(document.title || "").replace("\x27", "&#39;");
	if (outbound_links && self_location_protocol && self_location_host) {
		if ("undefined" !== typeof window.jQuery && ("undefined" !== typeof window.Hammer) && window.Modernizr && Modernizr.touch) {
			for (var d, b, a = 0; a < outbound_links.length; a += 1) {
				if (d = outbound_links[a], (b = d.getAttribute("href") || "") && (b.match(/^\/scripts\//) || /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(b)) && !d.getAttribute("rel")) {
					$(d).hammer().on("touch", $(this), function (event) {
						event.preventDefault();
						var attr_href = $(this).attr("href"),
							body_first_child = document.body.firstChild,
							div = document.createElement("div");
							div.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url('" + counter_url + "?dmn=" + encodeURIComponent(attr_href) + "&rfrr=" + document_location_href + "&ttl=" + document_title + "&encoding=utf-8') top left no-repeat;");
							body_first_child.parentNode.insertBefore(div, body_first_child);
						document.location.href = attr_href;
					})
				}
			}
		} else {
			for (var d, b, a = 0; a < outbound_links.length; a += 1) {
				if (d = outbound_links[a], (b = d.getAttribute("href") || "") && (b.match(/^\/scripts\//) || /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(b)) && !d.getAttribute("rel")) {
					outbound_links[a].onclick = function () {
						var attr_href = this.getAttribute("href"),
							body_first_child = document.body.firstChild,
							div = document.createElement("div");
							div.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url('" + counter_url + "?dmn=" + encodeURIComponent(attr_href) + "&rfrr=" + document_location_href + "&ttl=" + document_title + "&encoding=utf-8') top left no-repeat;");
							body_first_child.parentNode.insertBefore(div, body_first_child);
					}
				}
			}
		}
	}
}(document));
/*!
 * 
 * 
 * @params 
 * @return 
 */
function fn2(c,d){var b=document.getElementById(c)||"",a=document.createElement("div");b&&a&&(a.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url("+d+") top left no-repeat;"),b.appendChild(a))};
/*!
 * 
 * 
 * @params 
 * @return 
 */
<!-- Piwik --><script><!--//--><![CDATA[//><!--
			var _paq=_paq||[];_paq.push(["trackPageView"]);_paq.push(["enableLinkTracking"]);(function(c){if(!c){c=("https:"==document.location.protocol?"https":"http")+"://shimansky.biz/piwik/";_paq.push(["setTrackerUrl",c+"piwik.php"]);_paq.push(["setSiteId",1]);var a=document,b=a.createElement("script"),a=a.getElementsByTagName("script")[0];b.type="text/javascript";b.defer=!0;b.async=!0;b.src=c+"piwik.js";a.parentNode.insertBefore(b,a)}})(/localhost/.test(self.location.host)||"");
			//--><!]]></script><noscript><img src="http://shimansky.biz/piwik/piwik.php?idsite=1" style="position:absolute;left:-9999px;width:1px;height:1px;border:0;" alt="" /></noscript><!-- End Piwik Code -->
			/*!
 * 
 * 
 * @params 
 * @return 
 */
function loadJs(src, callback) {
    var s = document.createElement('script');
    document.getElementsByTagName('head')[0].appendChild(s);
    s.onload = function() {
        //callback if existent.
        if (typeof callback == "function") callback();
        callback = null;
    }
    s.onreadystatechange = function() {
        if (s.readyState == 4 || s.readyState == "complete") {
            if (typeof callback == "function") callback();
            callback = null; // Wipe callback, to prevent multiple calls.
        }
    }
    s.src = src;
}
loadJs('https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js', function() {
    $('body').append('<p>It works!</p>');
});
/*!
 * 
 * 
 * @params 
 * @return 
 */
			"undefined" !== typeof window.jQuery && (
				$('#search_text').autocomplete({
					/* source: function (request, response) {
					 $.ajax({
					 url: "index8.php",
					 dataType: "json",
					 data: {term: request.term},
					 success: function (data) {
					 response(data);
					 }
					 });
					 } */
					source : function(request, response) {
						$.ajax({
							url : "/libs/jquery-ui-1.10.3/shimansky.biz/autocomplete/",
							dataType : "json",
							data : {
								q : request.term,
								c : 10 //items number to retrieve
							},
							success : function(data) {
								response($.map(data, function(item) {
									return {
										label : item.value, // + ": " + request.term,
										value : item.name// + ": " + request.term
									}
								}));
							}
						});
					},
					minLength : 1,
					/* select: function( event, ui ) {
					 var url = $.trim(ui.item.name);
					 alert( url);
					 event.preventDefault();
					 if (url && (
					 url.match(/^http\:\/\//)
					 || url.match(/^https\:\/\//)
					 || url.match(/^\/search\//)
					 || url.match(/^\//)
					 )
					 ) {
					 document.location.href = url;
					 }
					 }*/
					/*select: function(value, data){
					 $('#autocomplete').value = data.item.value[0];
					 if (data.item.value && (
					 data.item.value.match(/^http\:\/\//)
					 || data.item.value.match(/^https\:\/\//)
					 || data.item.value.match(/^\/search\//)
					 || data.item.value.match(/^\//)
					 )
					 ) {
					 document.location.href = data.item.value;
					 }
					 }*/
					select : function(event, ui) {
						/* $(event.target).val(ui.item.label);
						 $('#search_form').submit(); */
						if (ui.item.value && (ui.item.value.match(/^http\:\/\//) || ui.item.value.match(/^https\:\/\//) || ui.item.value.match(/^\/search\//) || ui.item.value.match(/^\//)
						)) {
							document.location.href = ui.item.value;
							return false;
						} else {
							$(event.target).val($('#search_text').val());
							$('#search_form').submit();
						}
					},
					open : function() {
					},
					close : function() {
					}
				})
			);
/*!
 * 
 * 
 * @params 
 * @return 
 */
				"undefined" !== typeof window.addEvent && ( function(a, d) {"use strict";
						if (a && d) {
							addEvent(document, "scroll", function(e) {
								var b = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop, c = window.innerWidth ? 0 < window.innerWidth ? window.innerWidth : screen.width : "";
								if (b && b > 181 && (319 < c)) {
									a.setAttribute("style", "position:fixed;");
									d.setAttribute("style", "box-shadow: 0 3px 5px #1B1B1B;-khtml-box-shadow: 0 3px 5px #1B1B1B;-moz-box-shadow: 0 3px 5px #1B1B1B;-webkit-box-shadow: 0 3px 5px #1B1B1B;");
								} else {
									a.setAttribute("style", "position:relative;");
									d.setAttribute("style", "box-shadow: 0 3px 5px #1B1B1B;-khtml-box-shadow: 0 3px 5px #1B1B1B;-moz-box-shadow: 0 3px 5px #1B1B1B;-webkit-box-shadow: 0 3px 5px #1B1B1B;");
								}
							}, false);
						}
					}(document.getElementById("topbar") || "", document.getElementById("topnavigation") || ""));
/*!
 * 
 * 
 * @params 
 * @return 
 */
a && $('a[rel=tipsy]').tipsy({
								fade : true,
								gravity : "n"
							});
						}(document));
/*!
 * 
 * 
 * @params 
 * @return 
 */
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script><script src="//cdn.jsdelivr.net/tipsy/1.0/javascripts/jquery.tipsy.js"></script>
		<script>
			"undefined"!==typeof window.jQuery&&domready(function(){(function(a){a&&$("a[rel=tipsy]").tipsy({fade:true,gravity:"n"});}(document));});
		</script>
		/*!
 * 
 * 
 * @params 
 * @return 
 */
sbizIsHandheld||(domready(function(){"use strict";(function(c){if(c){var b,d,h,r;for(b=0;b<c.length;b+=1){d=c[b];h=d.getAttribute("class");if(h&&(h.match(/hyphenate/))){r=1;}};r&&yepnope.injectJs("/js/hyphenator.min.js",function(){},{charset:"utf-8"},5000);}}
((document.getElementsByTagName("p")||"")));}));
/*!
 * 
 * 
 * @params 
 * @return 
 */
<p><a href="https://twitter.com/englishextra" class="twitter-follow-button" data-show-count="true" data-size="large">Следовать за новыми добавлениями</a> <span id="vk_like"></span></p>
(function (d, s, id) {
	"use strict";
	var js,
	fjs = d.getElementsByTagName(s)[0];
	if (!d.getElementById(id)) {
		js = d.createElement(s);
		js.id = id;
		js.src = "http://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js, fjs);
	}
}
	(document, "script", "twitter-wjs"));
yepnope.injectJs("//vk.com/js/api/openapi.js?96", function () {
	"use strict";
	domready(function () {
		document.getElementById("vk_like") && !/localhost/.test(self.location.host) && (VK.init({
				apiId : 3676257,
				nameTransportPath : "/xd_receiver.htm",
				onlyWidgets : true
			}), VK.Widgets.Like("vk_like", {
				type : "button",
				height : 24
			}));
	});
}, {
	charset : "utf-8"
}, 5000);
(function () {
	var a = document.getElementById("span_not_chrome") || "";
	a && (a.style.display = "none");
	var c = navigator.userAgent.toLowerCase() || "",
	b;
	/chrome/.test(c) || (b = document.createTextNode("\u0412 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0442\u0435\u043c, \u0447\u0442\u043e \u042f\u043d\u0434\u0435\u043a\u0441.\u041d\u0430\u0440\u043e\u0434 \u043f\u0440\u0435\u043a\u0440\u0430\u0442\u0438\u043b \u043d\u0435\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0439 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0445\u043e\u0441\u0442\u0438\u043d\u0433 \u0444\u0430\u0439\u043b\u043e\u0432, \u0444\u0438\u043b\u044c\u043c\u044b \u0442\u0435\u043f\u0435\u0440\u044c \u0437\u0430\u043a\u0430\u0447\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043d\u043e\u0432\u044b\u0439 \u0445\u043e\u0441\u0442\u0438\u043d\u0433, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 "), a.appendChild(b), a_2_a = document.createElement("a"), a_2_a.setAttribute("target", "_blank"), a_2_a.setAttribute("data-ajax", "false"), a_2_a.setAttribute("href", "http://www.google.com/intl/ru/chrome/browser/"), a_2_a_1_text = document.createTextNode("Chrome"), a_2_a.appendChild(a_2_a_1_text), a.appendChild(a_2_a), a_4_br = document.createElement("br"), a.appendChild(a_4_br), a.style.display = "inline-block")
})();
/*!
 * 
 * 
 * @params 
 * @return 
 */
/**
 * hide navbar if mobile
 */
(function (a) {
	"use strict";
	if (a) {
		addEvent(window, "load", function (e) {
			setTimeout(function () {
				window.scrollTo(0, 1);
			}, 1);
		}, false);
	}
}
	(sbizIsHandheld || ""));
/*!
 * 
 * 
 * @params 
 * @return 
 */
			<!-- clear -->
			<div class="clear">
			</div>
			<!-- container_12 -->
			<div class="container_12">
				<div id="google_ad_client_728x90">
					<script><!--//--><![CDATA[//><!--
						/* 728x90Leaderboard */
						google_ad_client = "ca-pub-6289627801370617";google_ad_slot = "6648363500";google_ad_width = 728;google_ad_height = 90;
					//--><!]]></script>
					<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
				</div>
			</div>
			<!-- /container_12 -->
/*!
 * 
 * 
 * @params 
 * @return 
 */
private function utf8_to_unicode($str, $strict = false) {
		$mState = 0;
		$mUcs4 = 0;
		$mBytes = 1;
		$out = array();
		$len = strlen($str);
		for ($i = 0; $i < $len; $i++) {
			$in = ord($str {$i});
			if ($mState == 0) {
				if (0 == (0x80 & ($in))) {
					$out[] = $in;
					$mBytes = 1;
				} elseif (0xC0 == (0xE0 & ($in))) {
						$mUcs4 = ($in);
						$mUcs4 = ($mUcs4 & 0x1F) << 6;
						$mState = 1;
						$mBytes = 2;
				} elseif (0xE0 == (0xF0 & ($in))) {
						$mUcs4 = ($in);
						$mUcs4 = ($mUcs4 & 0x0F) << 12;
						$mState = 2;
						$mBytes = 3;
				} elseif (0xF0 == (0xF8 & ($in))) {
						$mUcs4 = ($in);
						$mUcs4 = ($mUcs4 & 0x07) << 18;
						$mState = 3;
						$mBytes = 4;
				} elseif (0xF8 == (0xFC & ($in))) {
						$mUcs4 = ($in);
						$mUcs4 = ($mUcs4 & 0x03) << 24;
						$mState = 4;
						$mBytes = 5;
				} elseif (0xFC == (0xFE & ($in))) {
						$mUcs4 = ($in);
						$mUcs4 = ($mUcs4 & 1) << 30;
						$mState = 5;
						$mBytes = 6;
				} elseif ($strict) {
					trigger_error('utf8_to_unicode: Illegal sequence identifier ' . 'in UTF-8 at byte ' . $i, E_USER_WARNING);
					return false;
				}
			} else {
				if (0x80 == (0xC0 & ($in))) {
					$shift = ($mState - 1) * 6;
					$tmp = $in;
					$tmp = ($tmp & 0x0000003F) << $shift;
					$mUcs4 |= $tmp;
					if (0 ==--$mState) {
						if (((2 == $mBytes) && ($mUcs4 < 0x0080)) || ((3 == $mBytes) && ($mUcs4 < 0x0800)) || ((4 == $mBytes) && ($mUcs4 < 0x10000)) || (4 < $mBytes) || (($mUcs4 & 0xFFFFF800) == 0xD800) || ($mUcs4 > 0x10FFFF)) {
							if ($strict) {
								trigger_error('utf8_to_unicode: Illegal sequence or codepoint ' . 'in UTF-8 at byte ' . $i, E_USER_WARNING);
								return false;
							}
						}
						if (0xFEFF != $mUcs4) {
							$out[] = $mUcs4;
						}
						$mState = 0;
						$mUcs4 = 0;
						$mBytes = 1;
					}
				} elseif ($strict) {
					trigger_error('utf8_to_unicode: Incomplete multi-octet ' . '	 sequence in UTF-8 at byte ' . $i, E_USER_WARNING);
					return false;
				}
			}
		}
		return $out;
	}
	public function utf8_to_html($str) {
		$ret = '';
		foreach ($this->utf8_to_unicode($str) as $cp) {
			if ($cp < 0x80)
				$ret .= chr($cp);
			elseif ($cp < 0x100)
				$ret .= "&#$cp;";
			else
				$ret .= '&#x' . dechex($cp) . ';';
		}
		return $ret;
	}
/*!
 * 
 * 
 * @params 
 * @return 
 */
	<!-- clear -->
					<div class="clear">
					</div>
					<!-- grid_12 -->
<!-- 					<div class="grid_12">
						<img src="/images/pages/more/more_movies_3gp_ipod_psp/acer_screen_940x529.jpg" alt="Фильмы на английском без перевода (MP4)" />
					</div> -->
/*!
 * 
 * 
 * @params 
 * @return 
 */
(function (a, b) {
	"use strict";
	"undefined" !== typeof window.jQuery && $(document).ready(function () {
		if (a && b) {
			var p1 = document.createElement("i"),
				p2 = document.createTextNode("\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),
				p3 = document.createTextNode("\u00a0");
			p1.setAttribute("class", "icon-envelope icon-white");
			addEvent(document, "mousemove", function () {
				var c = window.innerWidth ? 0 < window.innerWidth ? window.innerWidth : screen.width : "";
				if (980 > c) {
					b.removeAttribute("class");
					while (a.firstChild) {
						a.removeChild(a.firstChild);
					}
				} else {
					b.appendChild(p2);
					b.setAttribute("class", "contact");
					a.appendChild(p1);
					a.appendChild(p3);
					a.appendChild(b);
				}
			}, false);
		}
	});
}
	(
		(document.getElementById("contact-form") || ""),
		(document.getElementById("topnavlinkcontact") || "")
	));
/*!
 * 
 * 
 * @params 
 * @return 
 */
	var fn0 = (function () {
	"use strict";
	"undefined"!==typeof window.jQuery&&$(document).ready(function(){
		$.ajax({
			url : "/json/options_articles_reading_rules_utf.json",
			dataType : "json",
			success : function (data) {
				var options,
					index,
					select,
					option;
				select = document.getElementById("select_articles_reading_rules_utf");
				select.options.length = 0;
				options = data.options_articles_reading_rules_utf;
				for (index = 0; index < options.length; ++index) {
					option = options[index];
					select.options.add(new Option(option.text, option.value));
				}
			}
		});
		$("#select_articles_reading_rules_utf").change(function () {
			$("#select_articles_reading_rules_utf option:selected").each(function () {
				var a = $(this).val();
				if (a) {
					window.open(a, "_parent");
				};
			});
		});
	});
});
/*!
 * 
 * 
 * @params 
 * @return 
 */
		(function (h) {
			"undefined" !== typeof window.jQuery && $(document).ready(function () {
				if (h) {
					var a = new Date,
						b = a.getDate(),
						c = a.getMonth(),
						c = c + 1,
						d = a.getFullYear();
					10 > b && (b = "0" + b);
					10 > c && (c = "0" + c);
					var g = d + "-" + c + "-" + b,
					url = "https://sourceforge.net/projects/iv-scr-en-ru/files/stats/json?start_date=2010-06-05&end_date=" + g;
					$.ajax({
						url : "/scripts/getjson/?load=" + encodeURIComponent(url),
						dataType : "json",
						async : true,
						success : function (data) {
							if (data) {
								h.appendChild(document.createTextNode("(\u0432\u0441\u0435\u0433\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A: " + data.summaries.time.downloads + ", \u0438\u0437 \u043D\u0438\u0445 " + data.summaries.geo.percent + "% \u0438\u0437 " + data.summaries.geo.top + ", " + data.summaries.os.percent + "% \u043F\u043E\u0434 " + data.summaries.os.top + ")"));
							}
						}
					});
				}
			});
		}
			(document.getElementById("sf_ivscrenru_stat")));
/*!
 * 
 * 
 * @params 
 * @return 
 */
#topnavigation div[class^="grid_"] {
	float: none;
	display: block;
	overflow: hidden;
	clear: none;
	padding: 0;
}
/*!
 * 
 * 
 * @params 
 * @return 
 */
/* fontawesome */
i[class^="icon-"] {
	display: none;
}
/* elements.css */
/*
don't use:
-- font-size: larger/smaller;
-- font-weight: bolder;
-- filter:
*/
/* http://riddle.pl/emcalc/ */
/*BODY FONT-SIZE 17PX
6px	0.353em	35.3%	5pt
7px	0.412em	41.2%	5pt
8px	0.471em	47.1%	6pt
9px	0.529em	52.9%	7pt
10px	0.588em	58.8%	8pt
11px	0.647em	64.7%	8pt
12px	0.706em	70.6%	9pt
13px	0.765em	76.5%	10pt
14px	0.824em	82.4%	11pt
15px	0.882em	88.2%	11pt
16px	0.941em	94.1%	12pt
17px	1.000em	100.0%	13pt
18px	1.059em	105.9%	14pt
19px	1.118em	111.8%	14pt
20px	1.176em	117.6%	15pt
21px	1.235em	123.5%	16pt
22px	1.294em	129.4%	17pt
23px	1.353em	135.3%	17pt
24px	1.412em	141.2%	18pt
26px	1.529em
29px	1.706em
39px	2.294em
43px	2.529em
44px	2.588em
 */
/*
http://modularscale.com/scale/?px1=17&px2=15&ra1=1.5&ra2=0
Modular Scale
----------------------
17px @ 1:1.5
15px @ 1:1.5
----------------------
Pixels 	Ems 	% of 17
980.315 	57.666 	7,540.885
864.984 	50.881 	6,653.723
653.543 	38.444 	5,027.254
576.656 	33.921 	4,435.815
435.695 	25.629 	3,351.500
384.437 	22.614 	2,957.208
290.463 	17.086 	2,234.331
256.291 	15.076 	1,971.469
193.642 	11.391 	1,489.554
170.861 	10.051 	1,314.315
129.095 	7.594 	993.038
113.907 	6.7 	876.208
86.063 	5.063 	662.023
75.938 	4.467 	584.138
57.375 	3.375 	441.346
50.625 	2.978 	389.423
38.250 	2.25 	294.231
33.750 	1.985 	259.615
25.500 	1.5 	196.154
22.500 	1.324 	173.077
17.000 	1 	130.769
15.000 	0.882 	115.385
11.333 	0.667 	87.177
10.000 	0.588 	76.923
7.555 	0.444 	58.115
6.667 	0.392 	51.285
5.037 	0.296 	38.746
4.445 	0.261 	34.192
3.358 	0.198 	25.831
2.963 	0.174 	22.792
2.239 	0.132 	17.223
1.975 	0.116 	15.192
1.493 	0.088 	11.485
1.317 	0.077 	10.131
*/
/* this does not require a reset.css normally placed before */
/* SHOULD BE AT THE TOP */
body {font-size: 17px;line-height: 1.529;/*26px/17px*/}
h1 {font-size: 2.294em;/*39px/17px*/
line-height: 1.353em;/*23px/17px*/
text-align: left;}
h2 {font-size: 1.529em;/*26px/17px*/
text-align: left;}
h3, h4, h5, h6 {font-size: 1.176em;/*20px/17px*/
text-align: left;}
dl dt {font-size: 1.176em;/*20px/17px*/}
pre, pre code, pre a, tt, kbd {font-size: 0.941em;/*16px/17px*/}
sub, sup, small {font-size: 0.882em;/*15px/17px*/}
label {font-size: 0.882em;/*15px/17px*/}
th, td, caption {font-size: 0.882em;/*15px/17px*/}
/*!
 * 
 * 
 * @params 
 * @return 
 */
		<meta http-equiv="Pragma" content="no-cache" />
		<meta http-equiv="Cache-Control" content="public, max-age=31536000" />
		<meta http-equiv="Expires" content="Sat, 18 May 2013 19:03:44 GMT" />
		<!-- <meta http-equiv="Expires" content="Sat, 18 May 2013 19:03:44 GMT" />
		<meta http-equiv="Cache-Control" content="public, max-age=31536000" />
		<meta http-equiv="Last-Modified" content="Fri, 18 May 2012 19:03:44 GMT" />
		-->
		<meta http-equiv="X-UA-Compatible" content="chrome=1" />
		<!-- https://github.com/h5bp/mobile-boilerplate/wiki/The-Markup -->
		<meta http-equiv="cleartype" content="on" />
		<meta name="HandheldFriendly" content="True" />
		<meta name="MobileOptimized" content="320" />
		<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
		<meta name="document-state" content="static" />
		<meta name="robots" content="index,follow" />
		<meta name="google-site-verification" content="pnKY1eK2cqfkvjkMuixzlZeSG0B-npFs1I-hK_s0XUM" />
		<meta name="author" content="Serguei Shimansky editor@shimansky.biz" />
		<meta name="keywords" content="английский,язык,статьи,пособия,словари,глоссарии,диалоги,упражнения,рефераты,тесты,ЕГЭ" />
		<link rel="start" href="/" />
		<link rel="first" href="/" />
		<link rel="search" href="/pages/search.html" />
		<link rel="copyright" href="/pages/credits.html" />
		<link rel="glossary" href="/pages/credits.html" />
		<link rel="index" href="/" />
		<link rel="contents" href="/" />
		<link rel="up" href="/" />
		<link rel="last" href="/pages/policy.html" />
		<link rel="help" href="/pages/policy.html" />
		<link rel="about" href="/meta.txt" />
		<link rel="author" href="/humans.txt" />
/*!
 * 
 * 
 * @params 
 * @return 
 */
		<div id="outdated_browser"></div>
		<script type="text/javascript"><!--//--><![CDATA[//><!--
(function (a, b) {
if ("undefined" !== typeof sbizIsOutdatedBrowser && sbizIsOutdatedBrowser) {
	a && (a.style.display = "none");
	b && (p1 = document.createElement("p"), p2 = document.createTextNode("\u00a0\u00a0\u0412\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0441\u0430\u0439\u0442\u0430, \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u044d\u0442\u0438\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u0432: "), p1.appendChild(p2), p3 = document.createElement("a"), p3.setAttribute("href", "http://www.google.com/chrome/"), p4 = document.createTextNode("Google Chrome"), p3.appendChild(p4), p1.appendChild(p3), p5 = document.createTextNode(" / "), p1.appendChild(p5), p6 = document.createElement("a"), p6.setAttribute("href", "http://www.opera.com/"), p7 = document.createTextNode("Opera"), p6.appendChild(p7), p1.appendChild(p6), p8 = document.createTextNode(" / "), p1.appendChild(p8), p9 = document.createElement("a"), p9.setAttribute("href", "http://www.mozilla-europe.org/"), p10 = document.createTextNode("Mozilla Firefox"), p9.appendChild(p10), p1.appendChild(p9), p11 = document.createTextNode(" / "), p1.appendChild(p11), p12 = document.createElement("a"), p12.setAttribute("href", "http://www.apple.com/safari/"), p14 = document.createTextNode("Safari"), p12.appendChild(p14), p1.appendChild(p12), b.appendChild(p1))
};
}
(document.getElementById("pagecontainer"), document.getElementById("outdated_browser")));
//--><!]]></script>
/*!
 * 
 * 
 * @params 
 * @return 
 */
									<!-- <div class="item"><div class="sprite fedoraproject"><div class="carousel-caption"><p><a href="http://fedoraproject.org/ru/">Начало</a>&#160;&#160;&#160; <a href="http://fedoraproject.org/ru/features/">Описание и скриншоты</a>&#160;&#160;&#160; <a href="http://fedoraproject.org/ru/get-fedora">Загрузки</a>&#160;&#160;&#160; <a href="http://fedoraproject.org/ru/join-fedora">Сообщество</a>&#160;&#160;&#160; <a href="http://fedoraproject.org/ru/using/">Советы</a>&#160;&#160;&#160; <a href="http://fedoraproject.org/ru/get-help">Справка</a>&#160;&#160;&#160; <a href="http://fedoraproject.org/wiki">Участники</a></p></div></div></div> -->
									<!-- <div class="item"><div class="sprite headway"><div class="carousel-caption"><p><a href="http://elt.oup.com/student/headway/?cc=ru&amp;selLanguage=ru">Главная</a>&#160;&#160;&#160; <a href="http://elt.oup.com/student/headway/beg/?cc=ru&amp;selLanguage=ru">Beginner</a>&#160;&#160;&#160; <a href="http://elt.oup.com/student/headway/preintermediate/?cc=ru&amp;selLanguage=ru">Pre-Intermediate</a>&#160;&#160;&#160; <a href="http://elt.oup.com/student/headway/upp_intermediate/?cc=ru&amp;selLanguage=ru">Upper-Intermediate</a>&#160;&#160;&#160; <a href="http://elt.oup.com/student/headway/elementary/?cc=ru&amp;selLanguage=ru">Elementary</a>&#160;&#160;&#160; <a href="http://elt.oup.com/student/headway/int/?cc=ru&amp;selLanguage=ru">Intermediate</a>&#160;&#160;&#160; <a href="http://elt.oup.com/student/headway/advanced/?cc=ru&amp;selLanguage=ru">Advanced</a></p></div></div></div> -->
/*!
 * 
 * 
 * @params 
 * @return 
 */
/* 		var load_options = (function () {
			$.getJSON("/json/options_more_movies_3gp_ipod_psp.json.php", function (data) {
				var options,
				select;
				select = document.getElementById("select_more_movies_3gp_ipod_psp");
				select.options.length = 0;
				options = data.options_more_movies_3gp_ipod_psp;
				for (var i in options) {
					select.add(new Option(options[i].text, options[i].value));
				}
				$("#tap_the_selector").hide();
			});
		}); */
/*!
 * 
 * 
 * @params 
 * @return 
 */
/* old version */
/*
(function (c, a, f) {
"use strict";
	for (var b = 0; b < c.length; b++) {
	var d = c[b],
	h = d.getAttribute("href");
		if ((h.match(/^http\:\/\//) || h.match(/^https\:\/\//) || h.match(/^ftp\:\/\//)) && !d.getAttribute("rel") && !d.getAttribute("id") && !d.getAttribute("class")) {
			var r = "";
			for (var e = [a, f], g = 0; g < e.length; g++) {
				h.match(RegExp(e[g])) && (r = 1);
				if (!r) {
					d.setAttribute("target", "_blank"),
					d.setAttribute("rel", "tipsy"),
					d.setAttribute("title", "\u042d\u0442\u0430 " +
						"\u0441\u0441\u044b\u043b\u043a\u0430 " +
						"\u043d\u0430 \u0432\u043d\u0435\u0448\u043d\u0438\u0439 " +
						"\u0440\u0435\u0441\u0443\u0440\u0441 " +
						"\u043e\u0442\u043a\u0440\u043e\u0435\u0442\u0441\u044f " +
						"\u0432 " +
						"\u043d\u043e\u0432\u043e\u0439 " +
						"\u0432\u043a\u043b\u0430\u0434\u043a\u0435 " +
						"\u0438\u043b\u0438 \u043e\u043a\u043d\u0435.");
				}
			}
		}
	};
} (document.getElementsByTagName("a"), self.location.protocol + "//" + self.location.host + "/", self.location.host + "/"));
 */
/*!
 * 
 * 
 * @params 
 * @return 
 */
var sbizFnAddEventListener = function (a, b, c) {
	"use strict";
	if (a.addEventListener) {
		return a.addEventListener(b, c, !1)
		, !0;
	}
	if (a.attachEvent) {
		return a["e" + b + c] = c, a[b + c] = function () {
			a["e" + b + c](window.event);
		}
		,
		a.attachEvent("on" + b, a[b + c]);
	}
	a["on" + b] = c;
	return !0;
};
/*!
 * 
 * 
 * @params 
 * @return 
 */
$("#load_quote_JavaScript").load("/scripts/random_quote/").hide().fadeIn(500);
/*!
 * 
 * 
 * @params 
 * @return 
 */
		<!-- <link href="//fonts.googleapis.com/css?family=Open+Sans:300,400,400italic,600,800" rel="stylesheet"> -->
		<!-- <link rel="stylesheet" href="/css/mobile_global.css"/> -->
		<!-- <link rel="stylesheet" href="http://code.jquery.com/mobile/1.1.0/jquery.mobile-1.1.0.min.css" /> -->
		<!-- <link rel="stylesheet" href="/css/jqmdocs.css" /> -->
		<!-- link rel="stylesheet" href="http://jquerymobile.com/demos/1.2.0-pre/docs/_assets/css/jqm-docs.css" /> -->
/*!
 * 
 * 
 * @params 
 * @return 
 */
onchange="if (this.options[this.selectedIndex].value){window.open (this.options[this.selectedIndex].value,&quot;_blank&quot;) ;};"
/*!
 * 
 * 
 * @params 
 * @return 
 */
		$.ajax({
			type : "POST",
			url : "/json/options_more_movies_3gp_ipod_psp.json.php",
			data : "{}",
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			success : function (msg) {
				$("#select_more_movies_3gp_ipod_psp").get(0).options.length = 0;
				$("#select_more_movies_3gp_ipod_psp").get(0).options[0] = new Option("Select gender", "-1");
				$.each(msg.options_more_movies_3gp_ipod_psp, function (index, item) {
					$("#select_more_movies_3gp_ipod_psp").get(0).options[$("#select_more_movies_3gp_ipod_psp").get(0).options.length] = new Option(item.text, item.value);
				});
			},
			error : function () {
				alert("Failed to load genders");
			}
		});
/* 			$.getJSON("/json/options_more_movies_3gp_ipod_psp.json.php", function (data) {
				var options,
				index,
				select,
				option;
				select = document.getElementById("select_more_movies_3gp_ipod_psp");
				select.options.length = 0;
				options = data.options_more_movies_3gp_ipod_psp;
				for (index = 0; index < options.length; ++index) {
					option = options[index];
					select.options.add(new Option(option.text, option.value))
				}
			}); */
/* 	"undefined"!==typeof window.jQuery&&$(document).ready(function(){
		$.ajax({
			url : "/json/options_more_movies_3gp_ipod_psp.json.php",
			dataType : "json",
			success : function (data) {
				var options,
				index,
				select,
				option;
				select = document.getElementById("select_more_movies_3gp_ipod_psp");
				select.options.length = 0;
				options = data.options_more_movies_3gp_ipod_psp;
				for (index = 0; index < options.length; ++index) {
					option = options[index];
					select.options.add(new Option(option.text, option.value))
				}
			}
		})
	}), */
/*	$(document).ready(function () {
		$.getJSON("/json/options_more_movies_3gp_ipod_psp.json.php", function (data) {
			var options,
			index,
			select,
			option;
			select = document.getElementById("select_more_movies_3gp_ipod_psp");
			select.options.length = 0;
			options = data.options_more_movies_3gp_ipod_psp;
			for (index = 0; index < options.length; ++index) {
				option = options[index];
				select.options.add(new Option(option.text, option.value))
			}
		})
	}), */
/*!
 * 
 * 
 * @params 
 * @return 
 */
	public function fix_str_for_js($s) {
		$s = str_replace("'", '\&#39;', $s);
		return $s;
	}
/*!
 * 
 * 
 * @params 
 * @return 
 */
<!-- <p><label for="select_more_movies_3gp_ipod_psp">Выберите название фильма...</label><br /><select id="select_more_movies_3gp_ipod_psp" class="chzn-select" onchange="if (this.options[this.selectedIndex].value){window.open (this.options[this.selectedIndex].value,&quot;_blank&quot;) ;};" tabindex="2"><option></option></select></p>-->
sbizIsHandheld || (yepnope.injectJs("/js/f7134390423babbda0ed9612cf25904e.js"/*pretop,hyphenator,jquery,json2,preloadimages,bootstraptransition,bootstrapcarousel,simplemodal,contact,tipsy,posttop*/, function () {
		/*yepnope.injectJs("/js/jqueryui.js", function () {}, {charset : "utf-8"}, 5000),*/
		/* http://lab.abhinayrathore.com/imdb_suggest/ */
		/*$(function () {$("#q").focus();$("#q").autocomplete({minLength : 0,delay : 5,source : "/scripts/imdbsuggest/",focus : function (event, ui) {$(this).val(ui.item.value);return false;},select : function (event, ui) {*/
		/* $(this).val( ui.item.value ); */
		/*window.location.href = "http:\/\/www.imdb.com\/title\/" + ui.item.value + "\/";return false;}}).data("autocomplete")._renderItem = function (ul, item) {return $("<li></li>").data("item.autocomplete", item).append("<a>" + (item.img ? "<img class='imdbImage' src='/scripts/imdbsuggest/imdbImage.php?url=" + item.img + "' />" : "") + "<span class='imdbTitle'>" + item.label + "</span>" + (item.cast ? "<br /><span class='imdbCast'>" + item.cast + "</span>" : "") + "
		<div class='clear'>
		</div></a>").appendTo(ul);};}),*/
		yepnope.injectJs("/js/jstorage.js", function () {
			var comments_textarea_value = document.getElementById("comments_textarea").value,
			jstorage_comments_textarea = $.jStorage.get("comments_textarea");
			jstorage_comments_textarea && !comments_textarea_value && (document.getElementById("comments_textarea").value = $.parseJSON(jstorage_comments_textarea));
			$(".comments_form_reset_button").click(function () {
				$.jStorage.flush("comments_textarea");
				document.getElementById('comments_textarea').value = '';
				var a = document.getElementById('div_comments_check');
				while (a.firstChild)
					a.removeChild(a.firstChild);
			});
		}, {
			charset : "utf-8"
		}, 5000),
		yepnope.injectJs("/js/comments.js", function () {}, {
			charset : "utf-8"
		}, 5000),
		$("#load_pt_comments").load("/scripts/comments/?load=posts&limit=20"),
		yepnope.injectJs("/js/autocomplete.js", function () {
			/* http://www.devbridge.com/projects/autocomplete/jquery/ */
			$("#query").focus();
			var a = $("#query").autocomplete({
					serviceUrl : '/scripts/search/autocomplete/',
					minChars : 2,
					onSelect : function (value, data) {
						window.open(data, '_parent');
					}
				});
		}, {
			charset : "utf-8"
		}, 5000),
		/* yepnope.injectJs("/js/chosen.js", function () {$.ajax({url : "/json/options_more_movies_3gp_ipod_psp.json.php",dataType : "json",success : function (data) {var options,index,select,option;select = document.getElementById("select_more_movies_3gp_ipod_psp");select.options.length = 0;options = data.options_more_movies_3gp_ipod_psp;for (index = 0; index < options.length; ++index) {option = options[index];select.options.add(new Option(option.text, option.value))}$(".chzn-select").chosen()}});}, {charset : "utf-8"}, 5000), */
		yepnope.injectJs("/js/expander.js", function () {
			$("div.expander p span.moredetails").expander({
				slicePoint : 0,
				expandPrefix : "&#046;&#046;&#046;&#160;&#160; ",
				expandText : "\u0411\u043e\u043b\u044c\u0448\u0435 \u0440\u0430\u0437\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u0439",
				userCollapseText : "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c"
			});
	}, {
		charset : "utf-8"
	}, 5000);
	}, {
		charset : "utf-8"
	}, 5000));
<style type="text/css"><!--/*--><![CDATA[/*><!--*/
@media screen and (min-device-width: 761px){/*---imdb search---*/.imdbq #q {margin-left:0 !important;width: 95% !important;}.ui-menu-item .imdbTitle{    font-size: 0.9em;    font-weight: bold;}.ui-menu-item .imdbCast{    font-size: 0.7em;    font-style: italic;    line-height: 110%;    color: #666;}.ui-menu-item .imdbImage{    float: left;    margin-right: 5px;}.ui-menu-item .clear{    clear: both;}}
/*]]>*/--></style>
<style type="text/css"><!--/*--><![CDATA[/*><!--*/
@media screen and (min-device-width: 761px){/*---*/#query{margin-right:0 !important;margin-left:0 !important;width:95% !important;}/*---*/#sprite-container-movies3 div.sprite{background:transparent url(/images/thumbnails/csg-4f65df7f45edf.jpg) no-repeat top left;float:left;margin:0.308em 20px 20px 0}#sprite-container-movies3 div.a_scanner_darkly_2006{ background-position: 0 0; width: 220px; height: 124px; } #sprite-container-movies3 div.angels_crest_2011_dellal{ background-position: 0 -174px; width: 220px; height: 124px; } #sprite-container-movies3 div.anonymous_2011{ background-position: 0 -348px; width: 220px; height: 124px; } #sprite-container-movies3 div.barry_lyndon_1975{ background-position: 0 -522px; width: 220px; height: 124px; } #sprite-container-movies3 div.bel_ami_2012_donnellan_ormerod{ background-position: 0 -696px; width: 220px; height: 124px; } #sprite-container-movies3 div.brokeback_mountain_2005_lee{ background-position: 0 -870px; width: 220px; height: 124px; } #sprite-container-movies3 div.chronicle_2012_trank{ background-position: 0 -1044px; width: 220px; height: 124px; } #sprite-container-movies3 div.dracula_1992_stoker{ background-position: 0 -1218px; width: 220px; height: 124px; } #sprite-container-movies3 div.flypaper_2011_minkoff{ background-position: 0 -1392px; width: 220px; height: 124px; } #sprite-container-movies3 div.god_bless_america_2011_goldthwait{ background-position: 0 -1566px; width: 220px; height: 124px; } #sprite-container-movies3 div.hostel_part_iii_2011_spiegel{ background-position: 0 -1740px; width: 220px; height: 124px; } #sprite-container-movies3 div.shame_2011_mcqueen{ background-position: 0 -1914px; width: 220px; height: 124px; } #sprite-container-movies3 div.switching_channels_1988_kotcheff{ background-position: -270px 0; width: 220px; height: 124px; } #sprite-container-movies3 div.the_artist_2011{ background-position: -270px -174px; width: 220px; height: 124px; } #sprite-container-movies3 div.the_deep_blue_sea_2011_davies{ background-position: -270px -348px; width: 220px; height: 124px; } #sprite-container-movies3 div.the_limits_of_control_2009{ background-position: -270px -522px; width: 220px; height: 124px; } #sprite-container-movies3 div.the_vow_2012_sucsy{ background-position: -270px -696px; width: 220px; height: 124px; } #sprite-container-movies3 div.ultramarines_a_warhammer_40_000_movie_2010_pick{ background-position: -270px -870px; width: 220px; height: 124px; } /*---*/#sprite-container-movies2 div.sprite{background:transparent url(/images/thumbnails/csg-4f574dfa1f5b8.jpg) no-repeat top left;float:left;margin:0.308em 20px 20px 0}#sprite-container-movies2 div.extra_english{ background-position: 0 0; width: 220px; height: 124px; }#sprite-container-movies2 div.immortal_ad_vitam{ background-position: 0 -174px; width: 220px; height: 124px; }#sprite-container-movies2 div.immortals_2011{ background-position: 0 -348px; width: 220px; height: 124px; }#sprite-container-movies2 div.putin_russia_and_the_west{ background-position: 0 -522px; width: 220px; height: 124px; }#sprite-container-movies2 div.sleeping_beauty_2011{ background-position: 0 -696px; width: 220px; height: 124px; }#sprite-container-movies2 div.the_adventures_of_tintin_2011{ background-position: 0 -870px; width: 220px; height: 124px; }#sprite-container-movies2 div.the_awakening_2011{ background-position: 0 -1044px; width: 220px; height: 124px; }#sprite-container-movies2 div.the_limits_of_control_2009{ background-position: 0 -1218px; width: 220px; height: 124px; }#sprite-container-movies2 div.the_woman_in_black_2012{ background-position: 0 -1392px; width: 220px; height: 124px; }#sprite-container-movies2 div.tinker_tailor_soldier_spy{ background-position: 0 -1566px; width: 220px; height: 124px; }/*---*/#sprite-container-movies div.sprite{background:transparent url(/images/thumbnails/csg-4e28297579f32.jpg) no-repeat top left;float:left;margin:0.308em 20px 20px 0}#sprite-container-movies div.a_scanner_darkly{background-position:0 0;width:220px;height:124px}#sprite-container-movies div.a_space_odyssey{background-position:0 -174px;width:220px;height:124px}#sprite-container-movies div.albert_nobbs{background-position:0 -348px;width:220px;height:124px}#sprite-container-movies div.alice_in_wonderland{background-position:0 -522px;width:220px;height:124px}#sprite-container-movies div.barry_lyndon{background-position:0 -696px;width:220px;height:124px}#sprite-container-movies div.buried{background-position:0 -870px;width:220px;height:124px}#sprite-container-movies div.city_of_ember{background-position:0 -1044px;width:220px;height:124px}#sprite-container-movies div.clockwork_orange{background-position:0 -1218px;width:220px;height:124px}#sprite-container-movies div.coffee_and_cigarettes{background-position:0 -1392px;width:220px;height:124px}#sprite-container-movies div.colour_me_kubrick{background-position:0 -1566px;width:220px;height:124px}#sprite-container-movies div.dead_man{background-position:0 -1740px;width:220px;height:124px}#sprite-container-movies div.eyes_wide_shut{background-position:0 -1914px;width:220px;height:124px}#sprite-container-movies div.fellini_s_casanova{background-position:-270px 0;width:220px;height:124px}#sprite-container-movies div.franklyn{background-position:-270px -174px;width:220px;height:124px}#sprite-container-movies div.glengarry_glen_ross{background-position:-270px -348px;width:220px;height:124px}#sprite-container-movies div.insidious{background-position:-270px -522px;width:220px;height:124px}#sprite-container-movies div.jackie_brown{background-position:-270px -696px;width:220px;height:124px}#sprite-container-movies div.jane_eyre{background-position:-270px -870px;width:220px;height:124px}#sprite-container-movies div.killing_bono{background-position:-270px -1044px;width:220px;height:124px}#sprite-container-movies div.last_night{background-position:-270px -1218px;width:220px;height:124px}#sprite-container-movies div.limitless{background-position:-270px -1392px;width:220px;height:124px}#sprite-container-movies div.lock_stock_and_two_smoking_barrels{background-position:-270px -1566px;width:220px;height:124px}#sprite-container-movies div.lolita{background-position:-270px -1740px;width:220px;height:124px}#sprite-container-movies div.magnolia{background-position:-270px -1914px;width:220px;height:124px}#sprite-container-movies div.midnight_in_paris{background-position:-540px 0;width:220px;height:124px}#sprite-container-movies div.muzzy_comes_back{background-position:-540px -174px;width:220px;height:124px}#sprite-container-movies div.muzzy_in_gondoland{background-position:-540px -348px;width:220px;height:124px}#sprite-container-movies div.muzzy_vocabulary_builder_1_11{background-position:-540px -522px;width:220px;height:124px}#sprite-container-movies div.muzzy_vocabulary_builder_1_27{background-position:-540px -696px;width:220px;height:124px}#sprite-container-movies div.pandorum{background-position:-540px -870px;width:220px;height:124px}#sprite-container-movies div.possible_worlds{background-position:-540px -1044px;width:220px;height:124px}#sprite-container-movies div.rude_awakening{background-position:-540px -1218px;width:220px;height:124px}#sprite-container-movies div.sleuth{background-position:-540px -1392px;width:220px;height:124px}#sprite-container-movies div.solomon_kane{background-position:-540px -1566px;width:220px;height:124px}#sprite-container-movies div.splice{background-position:-540px -1740px;width:220px;height:124px}#sprite-container-movies div.tangled{background-position:-540px -1914px;width:220px;height:124px}#sprite-container-movies div.the_cube{background-position:-810px 0;width:220px;height:124px}#sprite-container-movies div.the_draughtsman_s_contract{background-position:-810px -174px;width:220px;height:124px}#sprite-container-movies div.the_firm{background-position:-810px -348px;width:220px;height:124px}#sprite-container-movies div.the_hitchhikers_guide_to_the_galaxy{background-position:-810px -522px;width:220px;height:124px}#sprite-container-movies div.the_illusionist{background-position:-810px -696px;width:220px;height:124px}#sprite-container-movies div.the_killer_inside_me{background-position:-810px -870px;width:220px;height:124px}#sprite-container-movies div.the_lincoln_lawyer{background-position:-810px -1044px;width:220px;height:124px}#sprite-container-movies div.the_man_from_earth{background-position:-810px -1218px;width:220px;height:124px}#sprite-container-movies div.the_prince_of_egypt{background-position:-810px -1392px;width:220px;height:124px}#sprite-container-movies div.the_russia_house{background-position:-810px -1566px;width:220px;height:124px}#sprite-container-movies div.the_secret_of_kells{background-position:-810px -1740px;width:220px;height:124px}#sprite-container-movies div.the_shining{background-position:-810px -1914px;width:220px;height:124px}#sprite-container-movies div.the_sorcerer_s_apprentice{background-position:-1080px 0;width:220px;height:124px}#sprite-container-movies div.the_sunset_limited{background-position:-1080px -174px;width:220px;height:124px}#sprite-container-movies div.thor{background-position:-1080px -348px;width:220px;height:124px}#sprite-container-movies div.top_secret{background-position:-1080px -522px;width:220px;height:124px}#sprite-container-movies div.tron_legacy{background-position:-1080px -696px;width:220px;height:124px}#sprite-container-movies div.true_grit{background-position:-1080px -870px;width:220px;height:124px}#sprite-container-movies div.unstoppable{background-position:-1080px -1044px;width:220px;height:124px}#sprite-container-movies div.winnie_the_pooh{background-position:-1080px -1218px;width:220px;height:124px}#sprite-container-movies div.you_will_meet_a_tall_dark_stranger{background-position:-1080px -1392px;width:220px;height:124px}}
/*]]>*/--></style>
/*yepnope.injectCss("/css/jqueryui.css", function () {}, {media : "screen and (min-device-width: 761px)"}, 5000),*/
/*yepnope.injectJs("/js/jqueryui.js", function () {}, {charset : "utf-8"}, 5000),*//* http://lab.abhinayrathore.com/imdb_suggest/ *//*$(function () {$("#q").focus();$("#q").autocomplete({minLength : 0,delay : 5,source : "/scripts/imdbsuggest/",focus : function (event, ui) {$(this).val(ui.item.value);return false;},select : function (event, ui) {*//* $(this).val( ui.item.value ); *//*window.location.href = "http:\/\/www.imdb.com\/title\/" + ui.item.value + "\/";return false;}}).data("autocomplete")._renderItem = function (ul, item) {return $("<li></li>").data("item.autocomplete", item).append("<a>" + (item.img ? "<img class='imdbImage' src='/scripts/imdbsuggest/imdbImage.php?url=" + item.img + "' />" : "") + "<span class='imdbTitle'>" + item.label + "</span>" + (item.cast ? "<br /><span class='imdbCast'>" + item.cast + "</span>" : "") + "<div class='clear'></div></a>").appendTo(ul);};}),*/
		yepnope.injectJs("/js/autocomplete.js", function () {
			/* http://www.devbridge.com/projects/autocomplete/jquery/ */
			$("#query").focus();
			var a = $("#query").autocomplete({
					serviceUrl : '/scripts/search/autocomplete/',
					minChars : 2,
					onSelect : function (value, data) {
						window.open(data, '_parent');
					}
				});
		}, {
			charset : "utf-8"
		}, 5000),
		/* yepnope.injectJs("/js/chosen.js", function () {$.ajax({url : "/json/options_more_movies_3gp_ipod_psp.json.php",dataType : "json",success : function (data) {var options,index,select,option;select = document.getElementById("select_more_movies_3gp_ipod_psp");select.options.length = 0;options = data.options_more_movies_3gp_ipod_psp;for (index = 0; index < options.length; ++index) {option = options[index];select.options.add(new Option(option.text, option.value))}$(".chzn-select").chosen()}});}, {charset : "utf-8"}, 5000), */
/*!
 * 
 * 
 * @params 
 * @return 
 */
	public function js_unescape($s) {
		return preg_replace('/\\\u([0-9a-f]{4})/ie', "chr(hexdec('\\1'))", $s);
	}
	public function cut_last_160_160($s) {
		$s = preg_replace("/\&\#160\;\&\#160\; \r\n$/", '', $s);
		$s = preg_replace("/\&\#160\;\&\#160\; \n$/", '', $s);
		return $s;
	}
	public function cut_last_160_183($s) {
		$s = preg_replace("/\&\#160\;\&\#183\; \r\n$/", '', $s);
		$s = preg_replace("/\&\#160\;\&\#183\; \n$/", '', $s);
		return $s;
	}
	public function cut_last_br($s) {
		$s = preg_replace("/\<br \/\>\r\n$/i", '', $s);
		$s = preg_replace("/\<br \/\>\n$/i", '', $s);
		return $s;
	}
function pdo_mysql_fixquotes($s) {
	$a = array(	"/^\'/" => "", "/\'$/" => "");
	foreach ($a as $k => $v) {
 		$s = preg_replace($k, $v, $s);
	}
	return $s;
}
/*!
 * 
 * 
 * @params 
 * @return 
 */
	public function clean_title($s) {
		$s = $this->safe_str($s);
		$s = $this->symbs_to_ents($s);
		//$s = $this->remove_ents($s);
		$s = $this->remove_tags($s);
		$s = $this->ensure_lt_gt($s);
		$s = $this->ord_space($s);
		$s = $this->ensure_amp($s);
		return $s;
	}
/*!
 * 
 * 
 * @params 
 * @return 
 */
$json_path = $relpa . 'json/options_more_movies_3gp_ipod_psp.json';
$json_content = file_get_contents($json_path);
$json_data = json_decode($json_content, true);
foreach($json_data['options_more_movies_3gp_ipod_psp'] as $json_item) {
	if (
		!empty($json_item['value'])
		&& !empty($json_item['text'])
		) {
	    print $json_item['value'];
	    print ' - ';
	    print $json_item['text'];
	    print '<br>';
	}
}
/*!
 * 
 * 
 * @params 
 * @return 
 */
function lib_local_mysql_table_exists($t) {
	$r = (mysql_query("SELECT 1 FROM `$t` WHERE 0")) ? true : false;
	return $r;
}
	public function bzread($data, $b = '', $f = '') {
		if (function_exists('bzopen')) {
			if (!$b = bzopen($data, "r")) {
				return 'Cannot open file: ' . $data;
				break;
			} else {
				while (!feof($b)) {
					$f .= bzread($b, filesize($data));
				}
				bzclose($b);
			}
		}
		return $f;
	}
	public function fread($data, $f = '') {
		if (!$fo = fopen($data, "rb")) {
			return 'Cannot open file: ' . $data;
		} else {
			while (!feof($fo)) {
				$f .= fread($fo, $fs);
			}
			fflush($fo);
			fclose($fo);
			return $f;
		}
	}
	public function file_get_contents($data, $f = '') {
		if (!$cn = file_get_contents($data)) {
			return 'Cannot open file: ' . $data;
		} else {
			return $f .= $cn;
		}
	}
	public function read_local_file($data, $f = '') {
		if (!file_exists($data)) {
			return 'Cannot find file: ' . $data;
		} else {
			$fs = filesize($data);
			if ($fs) {
				if (preg_match("/\.txt\.bz2$/", $data)) {
					$f .= $this->bzread($data);
					return $f;
					break;
				}
				if (phpversion() < '4.3.0') {
					$f .= $this->fread($data);
				} else {
					$f .= $this->file_get_contents($data);
				}
			}
			return $f;
		}
	}
	public function read_remote_file($data, $f = '') {
		error_reporting(0);
		$f .= $this->file_get_contents($data);
		return $f;
	}
	public function write_file_if_exists($data, $w, $type) {
		if (!file_exists($data) || !$fo = fopen($data, $type)) {
			die('Cannot open file: ' . $data);
		}
		if (!is_writable($data)) {
			die('Cannot write file: ' . $data);
		}
		flock($fo, LOCK_EX);
		fputs($fo, $w);
		fflush($fo);
		flock($fo, LOCK_UN);
		fclose($fo);
	}
	//dependent
	public function cut_option_value($s, $length) {
		$s = $this->remove_ents($s);
		$s = $this->remove_tags($s);
		$s = $this->ord_space($s);
		if (mb_strlen($s, mb_detect_encoding($s)) > $length) {
			$s = mb_substr($s, 0, ($length - 3), mb_detect_encoding($s)) . '...&#160;';
		}
		$s = $this->ensure_amp($s);
		return $s . '&#160;';
	}
	//dependent
	public function ensure_val_for_js($s) {
		return $this->fix_str_for_js($this->ensure_amp($this->remove_tags($s)));
	}
	public function make_clickable_links00000000($s) {
		$in=array(
		'`(https?://([-\w\.]+)+(:\d+)?(/([\-\(\)\w/_\.]*(\?\S+)?)?)?)`si',
		'`([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})`si'
		);
		$out=array(
		' <a href="$1">$1</a> ',
		' <a href="mailto:$1">$1</a> '
		);
		return preg_replace($in,$out,$s);
	}
	public function date_to_time($s) {
		list($d, $t) = explode(' ', $s);
		list($y, $mon, $day) = explode('-', $d);
		list($h, $min, $sec) = explode(':', $t);
		$r = mktime($h, $min, $sec, $mon, $day, $y);
		return $r;
	}
	public function to_rudate($t) {
		if (ctype_digit($t) && strlen($t) == 10) {
			$r_a_w = array('0' => '&#x432;&#x43e;&#x441;&#x43a;&#x440;&#x435;&#x441;&#x435;&#x43d;&#x44c;&#x435;', '1' => '&#x43f;&#x43e;&#x43d;&#x435;&#x434;&#x435;&#x43b;&#x44c;&#x43d;&#x438;&#x43a;', '2' => '&#x432;&#x442;&#x43e;&#x440;&#x43d;&#x438;&#x43a;', '3' => '&#x441;&#x440;&#x435;&#x434;&#x430;', '4' => '&#x447;&#x435;&#x442;&#x432;&#x435;&#x440;&#x433;', '5' => '&#x43f;&#x44f;&#x442;&#x43d;&#x438;&#x446;&#x430;', '6' => '&#x441;&#x443;&#x431;&#x431;&#x43e;&#x442;&#x430;');
			$r_a_m = array('01' => '&#x44f;&#x43d;&#x432;&#x430;&#x440;&#x44f;', '02' => '&#x444;&#x435;&#x432;&#x440;&#x430;&#x43b;&#x44f;', '03' => '&#x43c;&#x430;&#x440;&#x442;&#x430;', '04' => '&#x430;&#x43f;&#x440;&#x435;&#x43b;&#x44f;', '05' => '&#x43c;&#x430;&#x44f;', '06' => '&#x438;&#x44e;&#x43d;&#x44f;', '07' => '&#x438;&#x44e;&#x43b;&#x44f;', '08' => '&#x430;&#x432;&#x433;&#x443;&#x441;&#x442;&#x430;', '09' => '&#x441;&#x435;&#x43d;&#x442;&#x44f;&#x431;&#x440;&#x44f;', '10' => '&#x43e;&#x43a;&#x442;&#x44f;&#x431;&#x440;&#x44f;', '11' => '&#x43d;&#x43e;&#x44f;&#x431;&#x440;&#x44f;', '12' => '&#x434;&#x435;&#x43a;&#x430;&#x431;&#x440;&#x44f;',);
			$r_w = date("w", $t);
			$r_m = date("m", $t);
			$r_t = date("H:i", $t);
			$r_y = date("Y", $t);
			$r_d = date("d", $t);
			$r_w = $r_a_w["$r_w"];
			$r_a_m = $r_a_m["$r_m"];
			$r_date = $r_w . ', ' . $r_d . ' ' . $r_a_m . ' ' . $r_y . ' &#x433;&#x43e;&#x434;&#x430;';
			return $r_date;
		}
	}
	private function _make_url_clickable_cb($matches) {
		$ret = '';
		$url = $matches[2];
		if ( empty($url) )
			return $matches[0];
		// removed trailing [.,;:] from URL
		if ( in_array(substr($url, -1), array('.', ',', ';', ':')) === true ) {
			$ret = substr($url, -1);
			$url = substr($url, 0, strlen($url)-1);
		}
		//shimansky
		$url_printable = preg_replace("/[\/]+$/",'',str_replace(array('http://','https://','ftp://'),'',$url));
		return $matches[1] . " <a href=\"$url\" rel=\"nofollow\">$url_printable</a> " . $ret;
	}
	private function _make_web_ftp_clickable_cb($matches) {
		$ret = '';
		$dest = $matches[2];
		$dest = 'http://' . $dest;
		if ( empty($dest) )
			return $matches[0];
		// removed trailing [,;:] from URL
		if ( in_array(substr($dest, -1), array('.', ',', ';', ':')) === true ) {
			$ret = substr($dest, -1);
			$dest = substr($dest, 0, strlen($dest)-1);
		}
		//shimansky
		$dest_printable = preg_replace("/[\/]+$/",'',str_replace(array('http://','https://','ftp://'),'',$dest));
		return $matches[1] . " <a href=\"$dest\" rel=\"nofollow\">$dest_printable</a> " . $ret;
	}
	private function _make_email_clickable_cb($matches) {
		$email = $matches[2] . '@' . $matches[3];
		return $matches[1] . " <a href=\"mailto:$email\">$email</a> ";
	}
	/* http://bytes.com/topic/php/answers/546688-preg_replace_callback-class-method */
	public function make_clickable_links($ret) {
		$ret = ' ' . $ret;
		// in testing, using arrays here was found to be faster
		$ret = preg_replace_callback('#([\s>])([\w]+?://[\w\\x80-\\xff\#$%&~/.\-;:=,?@\[\]+]*)#is', array(get_class($this), '_make_url_clickable_cb'), $ret);
		$ret = preg_replace_callback('#([\s>])((www|ftp)\.[\w\\x80-\\xff\#$%&~/.\-;:=,?@\[\]+]*)#is', array(get_class($this), '_make_web_ftp_clickable_cb'), $ret);
		$ret = preg_replace_callback('#([\s>])([.0-9a-z_+-]+)@(([0-9a-z-]+\.)+[0-9a-z]{2,})#i', array(get_class($this), '_make_email_clickable_cb'), $ret);
		// this one is not in an array because we need it to run last, for cleanup of accidental links within links
		$ret = preg_replace("#(<a( [^>]+?>|>))<a [^>]+?>([^>]+?)</a></a>#i", "$1$3</a>", $ret);
		$ret = trim($ret);
		return $ret;
	}
/*!
 * 
 * 
 * @params 
 * @return 
 */
/**
 * is mobile device? print empty js and handheld css
 * removed this for a while and set $sbizIsHandheld as empty
 */
/**
 * require_once $relpa . 'lib/lib_mobile_device_detect.inc';
 * $sbizIsHandheld = (mobile_device_detect()) ? 1 : '';
 */
 $sbizIsHandheld = "";
/**
 * is search engine bot? print empty js and handheld css
 */
//$sbizIsHandheld = ($browser->isMobile()) ? 1 : ''; //not reliable with browser.php library
/**
 * is search bot?
 */
$is_robot = ($browser->isRobot()) ? 1 : '';
/**
 * if mobile device or search engine bot, print empty js and handheld css
 */
if (!empty($sbizIsHandheld) || !empty($is_robot) || !$ua) {
	$handheld_css_filepath = $relpa . 'css/handheld.css';
	$handheld_css = (file_exists($handheld_css_filepath)) ? file_get_contents($handheld_css_filepath) : '';
	$p = '';
	switch ($type) {
		case 'js':
			$p = '';
			break;
		case 'css':
			$p = lib_local_packCSS($handheld_css);
			break;
	}
	lib_local_write_file($hash_filepath, $p, "w+");
	lib_local_print_gzipped_scripts($type, 31536000, $p);
	exit;
}
/*!
 * 
 * 
 * @params 
 * @return 
 */
/**
 * alternative to greywyvern_utf8_htmlwrap
 */
function utf8_wordwrap($str, $width, $break, $cut = false) {
    if (!$cut) {
        $regexp = '#^(?:[\x00-\x7F]|[\xC0-\xFF][\x80-\xBF]+){'.$width.',}\b#U';
    } else {
        $regexp = '#^(?:[\x00-\x7F]|[\xC0-\xFF][\x80-\xBF]+){'.$width.'}#';
    }
    if (function_exists('mb_strlen')) {
        $str_len = mb_strlen($str,'UTF-8');
    } else {
        $str_len = preg_match_all('/[\x00-\x7F\xC0-\xFD]/', $str, $var_empty);
    }
    $while_what = ceil($str_len / $width);
    $i = 1;
    $return = '';
    while ($i < $while_what) {
        preg_match($regexp, $str,$matches);
        $string = $matches[0];
        $return .= $string.$break;
        $str = substr($str, strlen($string));
        $i++;
    }
    return $return.$str;
}
function is_utf8($s) {
    // From http://w3.org/International/questions/qa-forms-utf-8.html
    return preg_match('%^(?:
    [\x09\x0A\x0D\x20-\x7E] # ASCII
    | [\xC2-\xDF][\x80-\xBF] # non-overlong 2-byte
    | \xE0[\xA0-\xBF][\x80-\xBF] # excluding overlongs
    | [\xE1-\xEC\xEE\xEF][\x80-\xBF]{2} # straight 3-byte
    | \xED[\x80-\x9F][\x80-\xBF] # excluding surrogates
    | \xF0[\x90-\xBF][\x80-\xBF]{2} # planes 1-3
    | [\xF1-\xF3][\x80-\xBF]{3} # planes 4-15
    | \xF4[\x80-\x8F][\x80-\xBF]{2} # plane 16
    )*$%xs', $s);
}
function lib_local_cp1251_to_utf8($txt)  {
	$in_arr = array (
chr(208), chr(192), chr(193), chr(194),
chr(195), chr(196), chr(197), chr(168),
chr(198), chr(199), chr(200), chr(201),
chr(202), chr(203), chr(204), chr(205),
chr(206), chr(207), chr(209), chr(210),
chr(211), chr(212), chr(213), chr(214),
chr(215), chr(216), chr(217), chr(218),
chr(219), chr(220), chr(221), chr(222),
chr(223), chr(224), chr(225), chr(226),
chr(227), chr(228), chr(229), chr(184),
chr(230), chr(231), chr(232), chr(233),
chr(234), chr(235), chr(236), chr(237),
chr(238), chr(239), chr(240), chr(241),
chr(242), chr(243), chr(244), chr(245),
chr(246), chr(247), chr(248), chr(249),
chr(250), chr(251), chr(252), chr(253),
chr(254), chr(255)
	);
	$out_arr = array (
chr(208).chr(160), chr(208).chr(144), chr(208).chr(145),
chr(208).chr(146), chr(208).chr(147), chr(208).chr(148),
chr(208).chr(149), chr(208).chr(129), chr(208).chr(150),
chr(208).chr(151), chr(208).chr(152), chr(208).chr(153),
chr(208).chr(154), chr(208).chr(155), chr(208).chr(156),
chr(208).chr(157), chr(208).chr(158), chr(208).chr(159),
chr(208).chr(161), chr(208).chr(162), chr(208).chr(163),
chr(208).chr(164), chr(208).chr(165), chr(208).chr(166),
chr(208).chr(167), chr(208).chr(168), chr(208).chr(169),
chr(208).chr(170), chr(208).chr(171), chr(208).chr(172),
chr(208).chr(173), chr(208).chr(174), chr(208).chr(175),
chr(208).chr(176), chr(208).chr(177), chr(208).chr(178),
chr(208).chr(179), chr(208).chr(180), chr(208).chr(181),
chr(209).chr(145), chr(208).chr(182), chr(208).chr(183),
chr(208).chr(184), chr(208).chr(185), chr(208).chr(186),
chr(208).chr(187), chr(208).chr(188), chr(208).chr(189),
chr(208).chr(190), chr(208).chr(191), chr(209).chr(128),
chr(209).chr(129), chr(209).chr(130), chr(209).chr(131),
chr(209).chr(132), chr(209).chr(133), chr(209).chr(134),
chr(209).chr(135), chr(209).chr(136), chr(209).chr(137),
chr(209).chr(138), chr(209).chr(139), chr(209).chr(140),
chr(209).chr(141), chr(209).chr(142), chr(209).chr(143)
	);
	$txt = str_replace($in_arr,$out_arr,$txt);
	return $txt;
}
/*!
 * 
 * 
 * @params 
 * @return 
 */
function lib_local_highlight_needle($n, $h, $c='highlighted') {
	//$w = preg_replace("/" . preg_quote($n,"/") . "/i", '<span class="' . $c . '">' . $n . '</span>', $h);//because it would be then double spanned
	$w = $h;//remove this if uncomment above
	$n_tolower = mb_strtolower($n, mb_detect_encoding($n, 'UTF-8'));
	$w = preg_replace("/" . preg_quote($n_tolower,"/") . "/i", '<span class="' . $c . '">' . $n_tolower . '</span>', $w);
	$n_toupper = mb_strtoupper($n, mb_detect_encoding($n, 'UTF-8'));
	$w = preg_replace("/" . preg_quote($n_toupper,"/") . "/i", '<span class="' . $c . '">' . $n_toupper . '</span>', $w);
	$n_titlecase = mb_convert_case($n, MB_CASE_TITLE, mb_detect_encoding($n, 'UTF-8'));
	$w = preg_replace("/" . preg_quote($n_titlecase,"/") . "/i", '<span class="' . $c . '">' . $n_titlecase . '</span>', $w);
	$n_sentencecase = mb_convert_case($n, MB_CASE_TITLE, mb_detect_encoding($n, 'UTF-8'));
	$w = preg_replace("/" . preg_quote($n_sentencecase,"/") . "/i", '<span class="' . $c . '">' . $n_sentencecase . '</span>', $w);
	$w = str_replace(array("—","«","»"), array("&#8212;","&#171;","&#187;"), $w);
	$w = str_replace(array('<span class="highlighted"><span class="highlighted">', '</span></span>'), array('<span class="highlighted">', '</span>'), $w);
	return $w;
}
/*!
 * 
 * 
 * @params 
 * @return 
 */
function mysql2_table_exists($t) {
	$r = (mysql_query("SELECT 1 FROM `$t` WHERE 0")) ? true : false;
	return $r;
}
function mysql2_get_column_value($tname, $cname, $idname, $idvalue) {
	$r = '';
	$q = @mysql_query("SELECT `$cname` FROM `$tname` WHERE `$idname`='$idvalue';");
	if (@mysql_num_rows($q) > 0) {
		while ($fa = @mysql_fetch_array($q, MYSQL_ASSOC)) {
			foreach ($fa as $k => $v) {
				if ($k == $cname) {
					$r = $v;
				}
			}
		}
	}
	return $r;
}
/*!
 * 
 * 
 * @params 
 * @return 
 */
<h2>Ваши комментарии</h2>
<p class="hyphenate text" lang="ru">Пожалуйста, будьте содержательны и лаконичны, пишите по делу.</p>
<div id="comments"><form method="post" action="" id="comments_form">
<div>
<div><span id="div_comments_check"></span>
</div>
<p><textarea id="comments_textarea" name="comments_textarea" rows="5" cols="5"></textarea><input value="comments" name="type" type="hidden" /></p>
<p class="center"><input class="comments_form_reset_button" type="button" onclick="document.getElementById('comments_textarea').value='';" value="Очистить" />&#160;<input class="comments_form_submit_button" type="button" onclick="obj=document.getElementById('div_comments_check');while(obj.firstChild) obj.removeChild(obj.firstChild);" value="Отправить комментарий" /></p>
</div></form>
</div>
<div id="load_pt_comments">
</div>
			/* $(".comments_form_submit_button").click(function (){
				var obj=document.getElementById('div_comments_check');
				while(obj.firstChild) obj.removeChild(obj.firstChild);
			}); */
/*!
 * 
 * 
 * @params 
 * @return 
 */
false !== typeof window.BrowserDetect && "Explorer" == BrowserDetect.browser && 10 > BrowserDetect.version && (sbizIsOutdatedBrowser = 1);
/*!
 * 
 * 
 * @params 
 * @return 
 */
var c = document.getElementsByTagName("a"),
a = self.location.protocol + "//" + self.location.host + "/",
f = self.location.host + "/";
for (var b = 0; b < c.length; b++) {
	if (d = c[b], (h = d.getAttribute("href")) && (h.match(/^http\:\/\//) || h.match(/^https\:\/\//) || h.match(/^ftp\:\/\//)) && !d.getAttribute("rel") && !d.getAttribute("id") && !d.getAttribute("class")) {
		var r1 = "";
		for (var e = [a, f], g = 0; g < e.length; g++) {
			h.match(RegExp(e[g])) && (r1 = 1);
			if (!r1) {
				d.setAttribute("target", "_blank"),
				d.setAttribute("rel", "tipsy"),
				d.setAttribute("title", "\u042d\u0442\u0430 \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 \u0438\u043b\u0438 \u043e\u043a\u043d\u0435.");
			}
		}
	}
};
	var a0 = document.getElementById("contact-form");
	var a1 = document.getElementById("topnavlinkcontact");
	var p1 = document.createElement("i");
	p1.setAttribute("class", "icon-envelope icon-white");
	var p2 = document.createTextNode("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
	var nobr = document.createTextNode("\u00a0");
	if (a1) {
		sbizFnAddEventListener(document, "mousemove", function () {
			var c1 = window.innerWidth ? 0 < window.innerWidth ? window.innerWidth : screen.width : "";
			if (c1 < 761) {
				a1.removeAttribute("class");
				while (a0.firstChild)
					a0.removeChild(a0.firstChild);
			} else {
				a1.appendChild(p2);
				a1.setAttribute("class", "contact");
				a0.appendChild(p1);
				a0.appendChild(nobr);
				a0.appendChild(a1);
			}
		}, false);
	}
	/* show topnavigation while scrolling down */
	var a = document.getElementById("topbar");
	if (a) {
		sbizFnAddEventListener(document, "scroll", function (e) {
			var b = $(document).scrollTop();
			var c = window.innerWidth ? 0 < window.innerWidth ? window.innerWidth : screen.width : "";
			if (b > 181 && c > 760) {
				a.setAttribute("style", "position:fixed;");
			} else {
				a.setAttribute("style", "position:relative;");
			}
		}, false);
	}
/*!
 * 
 * 
 * @params 
 * @return 
 */
(function(a,b){if ("undefined" !== typeof sbizIsOutdatedBrowser && sbizIsOutdatedBrowser) {
	a && (a.style.display = "none");
	b && (p1 = document.createElement("p"),
p2 = document.createTextNode("\u00a0\u00a0\u0412\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0441\u0430\u0439\u0442\u0430, \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u044d\u0442\u0438\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u0432: "),
p1.appendChild(p2),
p3 = document.createElement("a"),
p3.setAttribute("href", "http://www.google.com/chrome/"),
p4 = document.createTextNode("Google Chrome"),
p3.appendChild(p4),
p1.appendChild(p3),
p5 = document.createTextNode(" / "),
p1.appendChild(p5),
p6 = document.createElement("a"),
p6.setAttribute("href", "http://www.opera.com/"),
p7 = document.createTextNode("Opera"),
p6.appendChild(p7),
p1.appendChild(p6),
p8 = document.createTextNode(" / "),
p1.appendChild(p8),
p9 = document.createElement("a"),
p9.setAttribute("href", "http://www.mozilla-europe.org/"),
p10 = document.createTextNode("Mozilla Firefox"),
p9.appendChild(p10),
p1.appendChild(p9),
p11 = document.createTextNode(" / "),
p1.appendChild(p11),
p12 = document.createElement("a"),
p12.setAttribute("href", "http://www.apple.com/safari/"),
p14 = document.createTextNode("Safari"),
p12.appendChild(p14),
p1.appendChild(p12), b.appendChild(p1))
};}(document.getElementById("pagecontainer"),document.getElementById("outdated_browser")));
/*!
 * 
 * 
 * @params 
 * @return 
 */
sbizIsHandheld || (yepnope({
		load : ["http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", "http://yandex.st/json2/2011-10-19/json2.min.js"],
		callback : {
			"jquery.min.js" : function () {
				yepnope.injectJs("http://yandex.st/json2/2011-10-19/json2.min.js", function () {}, {
					charset : "utf-8"
				}, 5000),
				yepnope.injectJs("/js/f7134390423babbda0ed9612cf25904e.js"/*pretop,hyphenator,jquery,json2,preloadimages,bootstraptransition,bootstrapcarousel,simplemodal,contact,tipsy,posttop*/, function () {}, {
					charset : "utf-8"
				}, 5000)
			}
		}
	})
);
/*!
 * 
 * 
 * @params 
 * @return 
 */
		/**
		 * try load text array
		 */
		 /*
		if (!$r) {
			if (file_exists($array_inc)) {
				$a = null;//empty $a array
				require_once $array_inc;
				srand ((double)microtime()*1000000);
				$line = $a[array_rand ($a)];
				$a = null;//empty $a array
				$re0 = $line[0];
				$re1 = $line[1];
				$re2 = $line[2];
				$re3 = $line[3];
				if (!empty($re0) && !empty($re1)) {
					$r = 1;
					$storage_type = '.inc';
				}
			}
		}
		*/
		/**
		 * this is used to load via jQuery
		 * <script type="text/javascript"><!--//--><![CDATA[//><!--
		 * "undefined"!==typeof loaded_jquery&&loaded_jquery&&$(document).ready(function(){
		 * $("#load_quote").load("/scripts/random_quote/&code=HTML");
		 * });
		 * //--><!]]></script>
		 */
		//	if ($code == 'HTML') {
		//
		//		$p .= lib_global2_ensure_amp($re1) . "\n";
		//
		//		if ($re2) {
		//			$p .= '<br />' . "\n";
		//			$p .= '<span style="/*font-size:smaller;*/font-style:italic;float:right;">' . "\n";
		//			$p .= ' — ' . lib_global2_ensure_amp($re2) . "\n";
		//			if ($re3) {
		//				$p .= ' (on ' . lib_global2_ensure_amp($re3) . ')' . "\n";
		//			}
		//			$p .= '</span><span style="display:none;">(' . $storage_type . ')</span><span style="clear:both;display:block;padding:0;margin:0;"></span>' . "\n";
		//		}
		//
		//	} else
/*!
 * 
 * 
 * @params 
 * @return 
 */
/* needed this to load jQuery dependant scripts */
var loaded_jquery=!1==typeof jQuery?"":1;
/* alert(loaded_jquery);
/* "undefined"!==typeof loaded_jquery&&loaded_jquery&&$(document).ready(function(){}); */
/* inline example: sbizIsHandheld || (yepnope.injectJs("/js/f7134390423babbda0ed9612cf25904e.js"/*pretop,hyphenator,jquery,json2,preloadimages,bootstraptransition,bootstrapcarousel,simplemodal,contact,tipsy,posttop*/,function(){},{charset:"utf-8"},5000) ); */
/*!
 * 
 * 
 * @params 
 * @return 
 */
/* "undefined"!==typeof loaded_jquery&&loaded_jquery&&$(document).ready(function(){
/* inline example: sbizIsHandheld || (yepnope.injectJs("/js/f7134390423babbda0ed9612cf25904e.js"/*pretop,hyphenator,jquery,json2,preloadimages,bootstraptransition,bootstrapcarousel,simplemodal,contact,tipsy,posttop*/,function(){},{charset:"utf-8"},5000) ); */
var loaded_jquery=!1==typeof jQuery?"":1;
/* alert(loaded_jquery); */
/*!
 * 
 * 
 * @params 
 * @return 
 */
<div class="google_ad_client" id="google_ad_client_728x90"><script type="text/javascript"><!--//--><![CDATA[//><!--
/* 728x90Leaderboard */google_ad_client = "ca-pub-6289627801370617";google_ad_slot = "6648363500";google_ad_width = 728;google_ad_height = 90;
//--><!]]></script><script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
</div>
/*!
 * 
 * 
 * @params 
 * @return 
 */
/*two methods loading json -- remeber that Chrome Safari and Opera and IE except Firefox
don't get croosdomain JSON -- you shoud load it locally via PHP -- php_openssl.dll should be
enabled in php.ini*/
		/* add SF stats for screensaver into topbanner */
		var sf_ivscrenru_stat_date = new Date,
		curr_date = sf_ivscrenru_stat_date.getDate(),
		curr_month = sf_ivscrenru_stat_date.getMonth(),
		curr_month = curr_month + 1,
		curr_year = sf_ivscrenru_stat_date.getFullYear();
		10 > curr_date && (curr_date = "0" + curr_date);
		10 > curr_month && (curr_month = "0" + curr_month);
		var sf_ivscrenru_stat_date = curr_year + "-" + curr_month + "-" + curr_date,
		sf_ivscrenru_stat_url = "https://sourceforge.net/projects/iv-scr-en-ru/files/stats/json?start_date=2010-06-05&end_date=" + sf_ivscrenru_stat_date;
/* 		$.getJSON(sf_ivscrenru_stat_url, function (json) {
			$("#sf_ivscrenru_stat").append("(\u0432\u0441\u0435\u0433\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A: "
				 + json.summaries.time.downloads + ", \u0438\u0437 \u043D\u0438\u0445 "
				 + json.summaries.geo.percent + "% \u0438\u0437 "
				 + json.summaries.geo.top + ", "
				 + json.summaries.os.percent + "% \u043F\u043E\u0434 "
				 + json.summaries.os.top
				 + ")");
		}); */
		$.ajax({
			url : "/scripts/getjson/?load="+encodeURIComponent(sf_ivscrenru_stat_url),
			dataType : "json",
			async : true,
			success : function (data) {
				$("#sf_ivscrenru_stat").append("(\u0432\u0441\u0435\u0433\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A: "
					 + data.summaries.time.downloads + ", \u0438\u0437 \u043D\u0438\u0445 "
					 + data.summaries.geo.percent + "% \u0438\u0437 "
					 + data.summaries.geo.top + ", "
					 + data.summaries.os.percent + "% \u043F\u043E\u0434 "
					 + data.summaries.os.top
					 + ")");
			}
		});
/*!
 * 
 * 
 * @params 
 * @return 
 */
$(window).resize(function(){$("#wrapper").css({position:"absolute",left:($(window).width()-$("#wrapper").outerWidth())/2,top:($(window).height()-$("#wrapper").outerHeight())/2})});$(window).resize();
/*!
 * 
 * 
 * @params 
 * @return 
 */
/*shimansky function*/
<script type="text/javascript"><!--//--><![CDATA[//><!--
function loadjsfile(b,c){var a=document.createElement("script"),d=document.documentElement.firstChild;a.type="text/javascript";a.readyState?a.onreadystatechange=function(){if("loaded"==a.readyState||"complete"==a.readyState)a.onreadystatechange=null,c()}:a.onload=function(){c()};a.src=b;d.insertBefore(a,d.firstChild)};
sbizIsHandheld || (loadjsfile("/js/f7134390423babbda0ed9612cf25904e.js",function(){}));
//--><!]]></script>
/*!
 * 
 * 
 * @params 
 * @return 
 */
	(function ($) {
		var cache = [];
		$["preLoadImages"] = function () {
			var args_len = arguments["length"];
			for (var i = args_len; i--;) {
				var cacheImage = document["createElement"]("img");
				cacheImage["src"] = arguments[i];
				cache["push"](cacheImage)
			}
		}
	})(jQuery);
	jQuery.preLoadImages("/images/thumbnails/csg-4f10b76a9752d.jpg");
/*!
 * 
 * 
 * @params 
 * @return 
 */
js/hyphenator.js
/*!
 * 
 * 
 * @params 
 * @return 
 */
can be generated with langage support and initialising code at:
http://hyphenator.googlecode.com/svn/trunk/mergeAndPack.html
remove UTF BOM mark
use http://closure-compiler.appspot.com/home
to convert Hyphenator.languages to escaped code that could be saved even to ANSI
virtual/counters.html
/*!
 * 
 * 
 * @params 
 * @return 
 */
- openstat needs declare variables before loading script cnt.js
- metrika needs to place init script into callback function of loading external script
- google has no noscript option
<!--Google Analytics--><script type="text/javascript"><!--//--><![CDATA[//><!--
if("undefined"!==typeof sbizIsHandheld&&!sbizIsHandheld){ var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-28561513-1"]);_gaq.push(["_setDomainName","."+self.location.host]);_gaq.push(["_trackPageview"]); (function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})() };
//--><!]]></script><!--/Google Analytics--><!--Openstat--><div id="openstat2122370"><script type="text/javascript"><!--//--><![CDATA[//><!--
if("undefined"!==typeof sbizIsHandheld&&!sbizIsHandheld){ var openstat={counter:2122370,next:openstat}; (function(d,t,p){var j=d.createElement(t);j.async=true;j.type="text/javascript";j.src=("https:"==p?"https:":"http:")+"//openstat.net/cnt.js";var s=d.getElementsByTagName(t)[0];s.parentNode.insertBefore(j,s)})(document,"script",document.location.protocol); } else { var f1=document.getElementById("openstat2122370");f1&&(g1=document.createElement("div"),g1.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(http://openstat.net/cnt?cid=2122370) top left no-repeat;"),f1.appendChild(g1)); };
//--><!]]></script></div><noscript><div style="position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(http://openstat.net/cnt?cid=2122370) top left no-repeat;"></div></noscript><!--/Openstat--><!-- Yandex.Metrika counter --><div id="yametrika1739493"><script type="text/javascript"><!--//--><![CDATA[//><!--
if("undefined"!==typeof sbizIsHandheld&&!sbizIsHandheld){ function lymc(c,a){var b=document.createElement("script");document.getElementsByTagName("head")[0].appendChild(b);b.onload=function(){"function"==typeof a&&a();a=null};b.onreadystatechange=function(){if(4==b.readyState||"complete"==b.readyState)"function"==typeof a&&a(),a=null};b.src=c}lymc("http://mc.yandex.ru/metrika/watch.js",function(){try{var yaCounter1739493=new Ya.Metrika({id:1739493,clickmap:!0,trackLinks:!0});}catch(e){}}); } else { var f2=document.getElementById("yametrika1739493");f2&&(g2=document.createElement("div"),g2.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(http://mc.yandex.ru/watch/1739493) top left no-repeat;"),f2.appendChild(g2)); };
//--><!]]></script></div><noscript><div style="position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(http://mc.yandex.ru/watch/1739493) top left no-repeat;"></div></noscript><!-- /Yandex.Metrika counter --><!--externalcounters--><div id="externalcounters"><script type="text/javascript"><!--//--><![CDATA[//><!--
(function(b,c){var a=b.createElement(c);a.async=!0;a.type="text/javascript";a.src="http://shimansky.biz/js/externalcounters.js";var d=b.getElementsByTagName(c)[0];d.parentNode.insertBefore(a,d)})(document,"script",document.location.protocol);
//--><!]]></script></div><noscript><div style="position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url('http://shimansky.biz/externalcounters/') top left no-repeat;"></div></noscript><!--/externalcounters--></body></html>
<script type="text/javascript"><!--//--><![CDATA[//><!--
/*this function loads js*/function ljs(c,a){var b=document.createElement("script");document.getElementsByTagName("head")[0].appendChild(b);b.onload=function(){"function"==typeof a&&a();a=null};b.onreadystatechange=function(){if(4==b.readyState||"complete"==b.readyState)"function"==typeof a&&a(),a=null};b.src=c}/*this function appends image to div*/function sbg(b,c){var a=document.getElementById(b);a&&(g1=document.createElement("div"),g1.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url("+c+") top left no-repeat;"),a.appendChild(g1))};
//--><!]]></script><!--Google Analytics--><script type="text/javascript"><!--//--><![CDATA[//><!--
if("undefined"!==typeof sbizIsHandheld&&!sbizIsHandheld){ var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-28561513-1"]);_gaq.push(["_setDomainName","."+self.location.host]);_gaq.push(["_trackPageview"]); ljs("http://www.google-analytics.com/ga.js",function(){ }); };
//--><!]]></script><!--/Google Analytics--><!--Openstat--><div id="openstat2122370"><script type="text/javascript"><!--//--><![CDATA[//><!--
if("undefined"!==typeof sbizIsHandheld&&!sbizIsHandheld){ var openstat={counter:2122370,next:openstat}; ljs("http://openstat.net/cnt.js",function(){ }); } else { sbg("openstat2122370","http://openstat.net/cnt?cid=2122370"); };
//--><!]]></script></div><noscript><div style="position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(http://openstat.net/cnt?cid=2122370) top left no-repeat;"></div></noscript><!--/Openstat--><!-- Yandex.Metrika counter --><div id="yametrika1739493"><script type="text/javascript"><!--//--><![CDATA[//><!--
if("undefined"!==typeof sbizIsHandheld&&!sbizIsHandheld){ ljs("http://mc.yandex.ru/metrika/watch.js",function(){ try{var yaCounter1739493=new Ya.Metrika({id:1739493,clickmap:!0,trackLinks:!0});}catch(e){} }); } else { sbg("yametrika1739493","http://mc.yandex.ru/watch/1739493"); };
//--><!]]></script></div><noscript><div style="position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(http://mc.yandex.ru/watch/1739493) top left no-repeat;"></div></noscript><!-- /Yandex.Metrika counter --><!--externalcounters--><div id="externalcounters"><script type="text/javascript"><!--//--><![CDATA[//><!--
ljs("http://shimansky.biz/js/externalcounters.js",function(){ });
//--><!]]></script></div><noscript><div style="position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(http://shimansky.biz/externalcounters/) top left no-repeat;"></div></noscript><!--/externalcounters-->
js/externalcounters.js
/*!
 * 
 * 
 * @params 
 * @return 
 */
var b=window.innerWidth?0<window.innerWidth?window.innerWidth:screen.width:"",d=encodeURIComponent(document.referrer?document.referrer:""),e=encodeURIComponent(window.location.href?window.location.href:""),f=encodeURIComponent((document.title?document.title:"").replace("'","&#39;")+" [devicewidth:"+b+"]"),g="position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url('http://shimansky.biz/externalcounters/?dmn="+e+"&rfrr="+d+"&ttl="+f+"&encoding=utf-8') top left no-repeat;", h=document.getElementById("externalcounters");h&&h.setAttribute("style",g);
js/afterpageload.js
/*!
 * 
 * 
 * @params 
 * @return 
 */
//add text into links tags
var a = document.getElementById("topnavlinkhome");
if (a) {
	a_1_text = document.createTextNode("\u0412 \u043d\u0430\u0447\u0430\u043b\u043e");
	a.appendChild(a_1_text);
	a.setAttribute("onclick", "window.location.href='\/'")
};
var a = document.getElementById("topnavlinkcontent");
if (a) {
	a_1_link = document.createElement("a");
	a_1_link.setAttribute("href", "#contentoverview");
	a_1_text = document.createTextNode("\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435");
	a_1_link.appendChild(a_1_text);
	a.appendChild(a_1_link)
};
var a = document.getElementById("topnavlinkcontact");
if (a) {
	a_1_text = document.createTextNode("\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043c\u043d\u0435");
	a.appendChild(a_1_text);
	a.setAttribute("class", "contact")
};
//add Document Inactive to title
//http://ssms-ka.narod2.ru/Habrahabr.htm
//http://habrahabr.ru/blogs/javascript/125833/#habracut
/*
var ttl2=document.title;
window.onblur=function(){
	document.title=ttl2+" - \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0435\u043d";
	var a=window.innerWidth?0<window.innerWidth?window.innerWidth:screen.width:"",b=encodeURIComponent(document.referrer?document.referrer:""),c=encodeURIComponent(window.location.href?window.location.href:""),d=encodeURIComponent((document.title?document.title:"").replace("\x27","&#39;")+" [devicewidth:"+a+"]"),e="position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(\x27http://shimansky.biz/externalcounters/?dmn="+c+"\x26rfrr="+b+"\x26ttl="+d+"\x26encoding=utf-8\x27) top left no-repeat;", f=document.getElementById("externalcounters");f&&f.setAttribute("style",e);
}; */
var i=document.title; window.onblur=function(){document.title=i+" - \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0435\u043d";var a=window.innerWidth?0<window.innerWidth?window.innerWidth:screen.width:"",j=encodeURIComponent(document.referrer?document.referrer:""),k=encodeURIComponent(window.location.href?window.location.href:""),a=encodeURIComponent((document.title?document.title:"").replace("'","&#39;")+" [devicewidth:"+a+"]"),c=document.getElementById("externalcounters"); c&&c.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url('http://shimansky.biz/externalcounters/?dmn="+k+"&rfrr="+j+"&ttl="+a+"&encoding=utf-8') top left no-repeat;")};
//redirect external links
//class or id atrribute blocks redirection
c = document.getElementsByTagName("a");
a = self.location.protocol + "//" + self.location.host + "/";
f = self.location.host + "/";
for (b = 0; b < c.length; b++) {
	if (d = c[b], (linkHREF = d.getAttribute("href")) && (linkHREF.match(/^http\:\/\//) || linkHREF.match(/^https\:\/\//) || linkHREF.match(/^ftp\:\/\//) ) && !d.getAttribute("rel") && !d.getAttribute("id") && !d.getAttribute("class")) {
		r1 = "";
		for (var e = [a, f, "englishextra.org/", "englishextra.net/", "mobile-english.ru/", "shimansky.biz/", "write-a-resume.net/", "http://englishextra", "http://shimansky"], g = 0; g < e.length; g++) {
			linkHREF.match(RegExp(e[g])) && (r1 = 1)
		}
		if (!r1) {
		/*
			newlinkTITLE = "\u0421\u0441\u044b\u043b\u043a\u0430 &#171;" + linkHREF.match(/:\/\/(.[^/]+)/)[1] + "&#187; \u043e\u0442\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 \u0438\u043b\u0438 \u043e\u043a\u043d\u0435.";
			for (var h = ["'", "http://", "https://"], i = ["&#39;", "", ""], g = 0; g < h.length; g++) {
				newlinkTITLE = newlinkTITLE.replace(h[g], i[g])
			}
			*/
			//d.setAttribute("href", a + "redirect/?url=" + encodeURIComponent(linkHREF) + "&domain=" + document.URL.match(/:\/\/(www\.)?([^\/:]+)/) + "&page_title=" + encodeURIComponent(newlinkTITLE));
			//d.setAttribute("href", linkHREF);
			d.setAttribute("target", "_blank");
			d.setAttribute("rel", "tipsy");
			d.setAttribute("title", "\u042d\u0442\u0430 \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 \u0438\u043b\u0438 \u043e\u043a\u043d\u0435.");
		}
	}
};
//Browser Detection
//detect Chrome/Safari
/*
var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS"
	},
	searchString: function (b) {
		for (var a = 0; a < b.length; a++) {
			var c = b[a].string,
				d = b[a].prop;
			this.versionSearchString = b[a].versionSearch || b[a].identity;
			if (c) {
				if (c.indexOf(b[a].subString) != -1) return b[a].identity
			} else if (d) return b[a].identity
		}
	},
	searchVersion: function (b) {
		var a = b.indexOf(this.versionSearchString);
		if (a != -1) return parseFloat(b.substring(a + this.versionSearchString.length + 1))
	},
	dataBrowser: [{
		string: navigator.userAgent,
		subString: "Chrome",
		identity: "Chrome"},
	{
		string: navigator.userAgent,
		subString: "OmniWeb",
		versionSearch: "OmniWeb/",
		identity: "OmniWeb"},
	{
		string: navigator.vendor,
		subString: "Apple",
		identity: "Safari",
		versionSearch: "Version"},
	{
		prop: window.opera,
		identity: "Opera"},
	{
		string: navigator.vendor,
		subString: "iCab",
		identity: "iCab"},
	{
		string: navigator.vendor,
		subString: "KDE",
		identity: "Konqueror"},
	{
		string: navigator.userAgent,
		subString: "Firefox",
		identity: "Firefox"},
	{
		string: navigator.vendor,
		subString: "Camino",
		identity: "Camino"},
	{
		string: navigator.userAgent,
		subString: "Netscape",
		identity: "Netscape"},
	{
		string: navigator.userAgent,
		subString: "MSIE",
		identity: "Explorer",
		versionSearch: "MSIE"},
	{
		string: navigator.userAgent,
		subString: "Gecko",
		identity: "Mozilla",
		versionSearch: "rv"},
	{
		string: navigator.userAgent,
		subString: "Mozilla",
		identity: "Netscape",
		versionSearch: "Mozilla"}],
	dataOS: [{
		string: navigator.platform,
		subString: "Win",
		identity: "Windows"},
	{
		string: navigator.platform,
		subString: "Mac",
		identity: "Mac"},
	{
		string: navigator.userAgent,
		subString: "iPhone",
		identity: "iPhone/iPod"},
	{
		string: navigator.userAgent,
		subString: "iPad",
		identity: "iPad"},
	{
		string: navigator.platform,
		subString: "Linux",
		identity: "Linux"}]
};
BrowserDetect.init();
*/
//alert(navigator.userAgent);
//alert(navigator.platform);
//alert(BrowserDetect.OS);
//alert(BrowserDetect.browser);
/* attach text to top navigation links */
/*
var a = document.getElementById("topnavlinkhome");
if (a) {
	a_1_text = document.createTextNode("\u0412 \u043d\u0430\u0447\u0430\u043b\u043e");
	a.appendChild(a_1_text);
	a.setAttribute("onclick", "window.location.href='\/'");
};
var a = document.getElementById("topnavlinkcontent");
if (a) {
	a_1_link = document.createElement("a");
	a_1_link.setAttribute("href", "#contentoverview");
	a_1_text = document.createTextNode("\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435");
	a_1_link.appendChild(a_1_text);
	a.appendChild(a_1_link);
};
*/
//Invalid CSS here: make rounded borders for input, select and textarea by adding css rules in additional style tag in head element
//forms.css taken from here http://www.99lime.com/elements/
/*
css_text = "";
if (BrowserDetect.browser == "Explorer") {
	css_text += "div.code pre,div.error,div.notice,div.info,div.success{border-radius: 3px} #pagecontainer{box-shadow:0px 0px 10px #ccc;} .tipsy-inner{box-shadow:0 0 5px #aaa;} .tipsy-inner{border-radius: 3px;}";
} else if (BrowserDetect.browser == "Opera") {
	css_text += "div.code pre,div.error,div.notice,div.info,div.success{border-radius: 3px} #pagecontainer{box-shadow:0px 0px 10px #ccc;} .tipsy-inner{box-shadow:0 0 5px #aaa;} .tipsy-inner{border-radius: 3px;}";
} else if (BrowserDetect.browser == "Firefox") {
	css_text += "div.code pre,div.error,div.notice,div.info,div.success{-moz-border-radius: 3px} #pagecontainer{-moz-box-shadow:0px 0px 10px #ccc;} .tipsy-inner{-moz-box-shadow:0 0 5px #333;} .tipsy-inner{-moz-border-radius: 3px;}";
} else if (BrowserDetect.browser == "Chrome") {
	css_text += "div.code pre,div.error,div.notice,div.info,div.success{-webkit-border-radius: 3px} #pagecontainer{-webkit-box-shadow:0px 0px 10px #ccc;} .tipsy-inner{-webkit-box-shadow:0 0 5px #aaa;} .tipsy-inner{-webkit-border-radius: 3px;}";
} else if (BrowserDetect.browser == "Safari" || BrowserDetect.OS == "iPhone/iPod" || BrowserDetect.OS == "iPad") {
	css_text += "div.code pre,div.error,div.notice,div.info,div.success{-webkit-border-radius: 3px} #pagecontainer{-webkit-box-shadow:0px 0px 10px #ccc;} .tipsy-inner{-webkit-box-shadow:0 0 5px #aaa;} .tipsy-inner{-webkit-border-radius: 3px;}";
} else if (BrowserDetect.browser == "Konqueror") {
	css_text += "div.code pre,div.error,div.notice,div.info,div.success{-khtml-border-radius: 3px} #pagecontainer{-khtml-box-shadow:0px 0px 10px #ccc;} .tipsy-inner{-khtml-box-shadow:0 0 5px #aaa;} .tipsy-inner{-khtml-border-radius: 3px;}";
}
var a = document.createElement("style");
a.type = "text/css";
if (a.styleSheet) {
	a.styleSheet.cssText = css_text;
} else {
	a.appendChild(document.createTextNode(css_text));
}
document.getElementsByTagName("head")[0].appendChild(a);
*/
//notify user has old browser
/*
if (obj = document.getElementById("outdated_browser")) {
	if (obj.hasChildNodes() && obj.childNodes) for (; obj.firstChild;) obj.removeChild(obj.firstChild);
	if (BrowserDetect.browser == "Explorer" && BrowserDetect.version < 9) {
		obj.setAttribute("style","display:block;border-width:1px;border-style:solid;color:inherit;border-color:transparent;background-color:transparent;margin:0 auto 1em auto;padding:0");
		obj.appendChild(document.createTextNode("\u0412\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0438\u043b\u0438 \u043d\u0435\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0439 \u043e\u0431\u043e\u0437\u0440\u0435\u0432\u0430\u0442\u0435\u043b\u044c \u0434\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0434\u0430\u043d\u043d\u044b\u043c \u0441\u0430\u0439\u0442\u043e\u043c. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0434\u043b\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f: "));
		var h2j_a1 = document.createElement("A");
		h2j_a1.href = "http://www.google.com/chrome/";
		h2j_a1.appendChild(document.createTextNode("Google Chrome"));
		obj.appendChild(h2j_a1);
		obj.appendChild(document.createTextNode(", "));
		var h2j_a2 = document.createElement("A");
		h2j_a2.href = "http://www.apple.com/safari/";
		h2j_a2.appendChild(document.createTextNode("Safari"));
		obj.appendChild(h2j_a2);
		obj.appendChild(document.createTextNode(", "));
		var h2j_a3 = document.createElement("A");
		h2j_a3.href = "http://www.opera.com/";
		h2j_a3.appendChild(document.createTextNode("Opera"));
		obj.appendChild(h2j_a3);
		obj.appendChild(document.createTextNode(", "));
		var h2j_a4 = document.createElement("A");
		h2j_a4.href = "http://www.mozilla-europe.org/";
		h2j_a4.appendChild(document.createTextNode("Mozilla Firefox"));
		obj.appendChild(h2j_a4);
	} else if (BrowserDetect.OS == "iPhone/iPod") {
		obj.appendChild(document.createTextNode("\u0412\u0435\u0440\u0441\u0438\u044f \u0441\u0430\u0439\u0442\u0430 \u0434\u043b\u044f \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443: "));
		var h2j_a1 = document.createElement("A");
		h2j_a1.href = "http://mobile-english.ru/";
		h2j_a1.appendChild(document.createTextNode("mobile-english.ru"));
		obj.appendChild(h2j_a1);
	}
};
*/
//insert time to a span
/*
time = new Date;
month = time.getMonth() + 1;
date = time.getDate();
year = time.getYear();
if (month < 10) {
	month = "0" + month
}
if (date < 10) {
	date = "0" + date
}
if (year < 1900) {
	year += 1900
}
*/
/*
datastr = date + "." + month + "." + year;
span = document.getElementById("span_show_date");
datastr && span && span.appendChild(document.createTextNode(datastr));
if (typeof Date.today === "function") {
	var datastr2 = Date.today().toString("dddd, dd MMMM yyyy") + " \u0433\u043e\u0434\u0430";
	span2 = document.getElementById("span_show_date2");
	datastr2 && span2 && span2.appendChild(document.createTextNode(datastr2))
};
*/
//check if jQuery is loaded and do actions in case jQuery is true
//actions that shouldnt be placed inside jQuery is loaded check
//"undefined"!==typeof loaded_jquery&&loaded_jquery&&$(document).ready(function(){
	//load #top_bar_panel content
	//<div id="top_bar_panel"><a href="#container">&#160;&#8593;&#160;</a>&#160; <a href="/"> / Home</a>&#160;&#160;&#8226;&#160; <a href="/pages/"> / Contents</a>&#160;&#160;&#8226;&#160; <a href="#" onclick="try{var jqil=jQuery,jqil=!0}catch(err){jqil=!1};if(jqil){$(function(){showSimplemodalOverlayClose('simplemodal_search');obj=document.getElementById('div_search_check');while(obj.firstChild) obj.removeChild(obj.firstChild);});};"> / Search</a>&#160;&#160;&#8226;&#160; <a href="#" onclick="try{var jqil=jQuery,jqil=!0}catch(err){jqil=!1};if(jqil){$(function(){showSimplemodalOverlayClose('simplemodal_feedback');obj=document.getElementById('div_feedback_check');while(obj.firstChild) obj.removeChild(obj.firstChild);});};"> / Write us</a>&#160;&#160;&#8226;&#160; <a href="#" onclick="try{var jqil=jQuery,jqil=!0}catch(err){jqil=!1};if(jqil){$(function(){showSimplemodalOverlayClose('simplemodal_login');});};"> / Sign in</a>&#160; <a href="#credits">&#160;&#8595;&#160;</a></div>
	//top_bar
	/*
	var a = document.getElementById('top_bar');
	a_d = document.createElement("div");
	a_d.setAttribute("id", "top_bar_panel");
	a_d_1_a = document.createElement("a");
	a_d_1_a.setAttribute("href", "#container");
	a_d_1_a_t = document.createTextNode("\u00a0\u2191\u00a0");
	//a_d_1_a.appendChild(a_d_1_a_t);
	a_d.appendChild(a_d_1_a);
	a_d_2_t = document.createTextNode("\u00a0\u00a0");
	//a_d.appendChild(a_d_2_t);
	a_d_3_a = document.createElement("a");
	a_d_3_a.setAttribute("href", "/");
	a_d_3_a_t = document.createTextNode("\u041d\u0430\u0447\u0430\u043b\u043e / Home");
	a_d_3_a.appendChild(a_d_3_a_t);
	a_d.appendChild(a_d_3_a);
	a_d_4_t = document.createTextNode("\u00a0\u00a0\u2022\u00a0\u00a0");
	a_d.appendChild(a_d_4_t);
	a_d_5_a = document.createElement("a");
	a_d_5_a.setAttribute("href", "/pages/");
	a_d_5_a_t = document.createTextNode("\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 / Contents");
	a_d_5_a.appendChild(a_d_5_a_t);
	a_d.appendChild(a_d_5_a);
	a_d_6_t = document.createTextNode("\u00a0\u00a0\u2022\u00a0\u00a0");
	a_d.appendChild(a_d_6_t);
	a_d_7_a = document.createElement("a");
	a_d_7_a.setAttribute("href", "#");
	a_d_7_a.setAttribute("onclick", "try{var jqil=jQuery,jqil=!0}catch(err){jqil=!1};if(jqil){$(function(){showSimplemodalOverlayClose('simplemodal_search');obj=document.getElementById('div_search_check');while(obj.firstChild) obj.removeChild(obj.firstChild);});};");
	a_d_7_a_t = document.createTextNode("\u041f\u043e\u0438\u0441\u043a / Search");
	a_d_7_a.appendChild(a_d_7_a_t);
	a_d.appendChild(a_d_7_a);
	a_d_8_t = document.createTextNode("\u00a0\u00a0\u2022\u00a0\u00a0");
	a_d.appendChild(a_d_8_t);
	a_d_9_a = document.createElement("a");
	a_d_9_a.setAttribute("href", "#");
	a_d_9_a.setAttribute("onclick", "try{var jqil=jQuery,jqil=!0}catch(err){jqil=!1};if(jqil){$(function(){showSimplemodalOverlayClose('simplemodal_feedback');obj=document.getElementById('div_feedback_check');while(obj.firstChild) obj.removeChild(obj.firstChild);});};");
	a_d_9_a_t = document.createTextNode("\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430\u043c / Write us");
	a_d_9_a.appendChild(a_d_9_a_t);
	a_d.appendChild(a_d_9_a);
	a_d_10_t = document.createTextNode("\u00a0\u00a0\u2022\u00a0\u00a0");
	a_d.appendChild(a_d_10_t);
	a_d_11_a = document.createElement("a");
	a_d_11_a.setAttribute("href", "#");
	a_d_11_a.setAttribute("onclick", "try{var jqil=jQuery,jqil=!0}catch(err){jqil=!1};if(jqil){$(function(){showSimplemodalOverlayClose('simplemodal_login');});};");
	a_d_11_a_t = document.createTextNode("\u0412\u043e\u0439\u0442\u0438 / Sign in");
	a_d_11_a.appendChild(a_d_11_a_t);
	a_d.appendChild(a_d_11_a);
	a_d_12_t = document.createTextNode("\u00a0\u00a0");
	//a_d.appendChild(a_d_12_t);
	a_d_13_a = document.createElement("a");
	a_d_13_a.setAttribute("href", "#credits");
	a_d_13_a_t = document.createTextNode("\u00a0\u2193\u00a0");
	//a_d_13_a.appendChild(a_d_13_a_t);
	a_d.appendChild(a_d_13_a);
	if (a) {a.appendChild(a_d);}
	//top_bar2
	var a2 = document.getElementById('top_bar2');
	a2_d = document.createElement("div");
	a2_d.setAttribute("id", "top_bar_panel2");
	a2_d_1_a = document.createElement("a");
	a2_d_1_a.setAttribute("href", "#container");
	a2_d_1_a2_t = document.createTextNode("\u00a0\u2191\u00a0");
	//a2_d_1_a.appendChild(a2_d_1_a2_t);
	a2_d.appendChild(a2_d_1_a);
	a2_d_2_t = document.createTextNode("\u00a0\u00a0");
	//a2_d.appendChild(a2_d_2_t);
	a2_d_3_a = document.createElement("a");
	a2_d_3_a.setAttribute("href", "/");
	a2_d_3_a2_t = document.createTextNode("\u041d\u0430\u0447\u0430\u043b\u043e / Home");
	a2_d_3_a.appendChild(a2_d_3_a2_t);
	a2_d.appendChild(a2_d_3_a);
	a2_d_4_t = document.createTextNode("\u00a0\u00a0\u2022\u00a0\u00a0");
	a2_d.appendChild(a2_d_4_t);
	a2_d_5_a = document.createElement("a");
	a2_d_5_a.setAttribute("href", "/pages/");
	a2_d_5_a2_t = document.createTextNode("\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 / Contents");
	a2_d_5_a.appendChild(a2_d_5_a2_t);
	a2_d.appendChild(a2_d_5_a);
	a2_d_6_t = document.createTextNode("\u00a0\u00a0\u2022\u00a0\u00a0");
	a2_d.appendChild(a2_d_6_t);
	a2_d_7_a = document.createElement("a");
	a2_d_7_a.setAttribute("href", "#");
	a2_d_7_a.setAttribute("onclick", "try{var jqil=jQuery,jqil=!0}catch(err){jqil=!1};if(jqil){$(function(){showSimplemodalOverlayClose('simplemodal_search');obj=document.getElementById('div_search_check');while(obj.firstChild) obj.removeChild(obj.firstChild);});};");
	a2_d_7_a2_t = document.createTextNode("\u041f\u043e\u0438\u0441\u043a / Search");
	a2_d_7_a.appendChild(a2_d_7_a2_t);
	a2_d.appendChild(a2_d_7_a);
	a2_d_8_t = document.createTextNode("\u00a0\u00a0\u2022\u00a0\u00a0");
	a2_d.appendChild(a2_d_8_t);
	a2_d_9_a = document.createElement("a");
	a2_d_9_a.setAttribute("href", "#");
	a2_d_9_a.setAttribute("onclick", "try{var jqil=jQuery,jqil=!0}catch(err){jqil=!1};if(jqil){$(function(){showSimplemodalOverlayClose('simplemodal_feedback');obj=document.getElementById('div_feedback_check');while(obj.firstChild) obj.removeChild(obj.firstChild);});};");
	a2_d_9_a2_t = document.createTextNode("\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430\u043c / Write us");
	a2_d_9_a.appendChild(a2_d_9_a2_t);
	a2_d.appendChild(a2_d_9_a);
	a2_d_10_t = document.createTextNode("\u00a0\u00a0\u2022\u00a0\u00a0");
	a2_d.appendChild(a2_d_10_t);
	a2_d_11_a = document.createElement("a");
	a2_d_11_a.setAttribute("href", "#");
	a2_d_11_a.setAttribute("onclick", "try{var jqil=jQuery,jqil=!0}catch(err){jqil=!1};if(jqil){$(function(){showSimplemodalOverlayClose('simplemodal_login');});};");
	a2_d_11_a2_t = document.createTextNode("\u0412\u043e\u0439\u0442\u0438 / Sign in");
	a2_d_11_a.appendChild(a2_d_11_a2_t);
	a2_d.appendChild(a2_d_11_a);
	a2_d_12_t = document.createTextNode("\u00a0\u00a0");
	//a2_d.appendChild(a2_d_12_t);
	a2_d_13_a = document.createElement("a");
	a2_d_13_a.setAttribute("href", "#credits");
	a2_d_13_a2_t = document.createTextNode("\u00a0\u2193\u00a0");
	//a2_d_13_a.appendChild(a2_d_13_a2_t);
	a2_d.appendChild(a2_d_13_a);
	if (a2) {a2.appendChild(a2_d);}
	//show #top_bar_panel2
	if (a && a2) {
		top_bar_panel=a;
		top_bar_panel2=a2;
		document.addEventListener('scroll',function (e) {
			doc_scroll = $(document).scrollTop();
			if ( doc_scroll > 24 ) {
				top_bar_panel2.style.display='block';
				top_bar_panel.style.display='none';
			} else {
				top_bar_panel2.style.display='none';
				top_bar_panel.style.display='block';
			}
		},false);
	}
	*/
	//append names to links that execute javascript
	//because we insert html entities like &#160; we don't use .innerHTML="&#160;"
	//instead of method .appendChild(document.createTextNode("&#160;")):
	//document.getElementById('tips_search').innerHTML="&#8226;&#160;&#160;\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0430\u0439\u0442\u0443";//poisk po saitu
	//or convert &#8226;&#160;&#160; into \u2022\u00a0\u00a0 with http://closure-compiler.appspot.com/home
	//document.getElementById('tips_search').appendChild(document.createTextNode("\u2022\u00a0\u00a0\u041f\u043e\u0438\u0441\u043a / Search"));//poisk po saitu
	//document.getElementById('tips_feedback').appendChild(document.createTextNode("\u2022\u00a0\u00a0\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430\u043c / Write us"));/*napisat nam privatno*/
	//document.getElementById("tips_guestbook2").appendChild(document.createTextNode("\u2022\u00a0\u00a0\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 / Comments"));/*ostavit otzyv*/
	//document.getElementById("tips_login").appendChild(document.createTextNode("\u2022\u00a0\u00a0\u0412\u043e\u0439\u0442\u0438 / Sign in"));/*voiti*/
	//load and update latest comments
	//if (document.getElementById('load_pt_guestbook1')) {
		//var load_pt_guestbook1_limit = 10;
		//$("#load_pt_guestbook1").load("/scripts/comments/?load=posts1&limit="+load_pt_guestbook1_limit).hide().fadeIn(1000);
		//don't use this because it will cause higher comsume of server resources
		//var refreshId = setInterval(function() {$("#load_pt_guestbook1").load("/scripts/comments/?load=posts1&limit="+load_pt_guestbook1_limit+"&randval="+ Math.random());}, 5000);
	//}
	/*
	if (document.getElementById('load_quote')) {
		//load random quote
		$("#load_quote").load("/scripts/random_quote/&code=HTML").hide().fadeIn(500);
	}
	*/
	//change style of input onclick
	/*
	var b1 = document.getElementsByTagName("input");
	for (c = 0; c < b1.length; c++) {
		a1 = b1[c];
		inputTYPE = a1.getAttribute("type");
		if (inputTYPE == "submit" || inputTYPE == "button" || inputTYPE == "reset") {
			a1.addEventListener('mouseover',function (e) {
				if (BrowserDetect.browser == "Explorer") {
					this.setAttribute('style','filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr=#FFFFFF, endColorStr=#DFDFDF);box-shadow: 0 1px 4px #666;');
				} else if (BrowserDetect.browser == "Opera") {
					this.setAttribute('style','border-width:1px;border-color:#F9F9F9 #bbb #bbb #F9F9F9;background:#f9f9f9;');
				} else if (BrowserDetect.browser == "Firefox") {
					this.setAttribute('style','background-image: -moz-linear-gradient(top, #FFF, #DFDFDF);-moz-box-shadow: 0 1px 4px #666;');
				} else if (BrowserDetect.browser == "Chrome") {
					this.setAttribute('style','background-image: -webkit-gradient(linear, left top, left bottom, from(#FFF), to(#DFDFDF));-webkit-box-shadow: 0 1px 4px #666;');
				} else if (BrowserDetect.browser == "Safari" || BrowserDetect.OS == "iPhone/iPod" || BrowserDetect.OS == "iPad") {
					this.setAttribute('style','background-image: -webkit-gradient(linear, left top, left bottom, from(#FFF), to(#DFDFDF));-webkit-box-shadow: 0 1px 4px #666;');
				} else if (BrowserDetect.browser == "Konqueror") {
					this.setAttribute('style','background-image: -khtml-gradient(linear, left top, left bottom, from(#FFF), to(#DFDFDF));-khtml-box-shadow: 0 1px 4px #666;');
				}
			},false);
			a1.addEventListener('mousedown',function (e) {
				if (BrowserDetect.browser == "Explorer") {
					this.setAttribute('style','filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr=#DFDFDF, endColorStr=#FFFFFF);box-shadow: 0 1px 4px #666;');
				} else if (BrowserDetect.browser == "Opera") {
					this.setAttribute('style','border-width:1px;border-color:#bbb #F9F9F9 #F9F9F9 #bbb;background:#e8e8e6;');
				} else if (BrowserDetect.browser == "Firefox") {
					this.setAttribute('style','background-image: -moz-linear-gradient(top, #DFDFDF, #FFF);-moz-box-shadow: 0 1px 4px #666;');
				} else if (BrowserDetect.browser == "Chrome") {
					this.setAttribute('style','background-image: -webkit-gradient(linear, left top, left bottom, from(#DFDFDF), to(#FFF));-webkit-box-shadow: 0 1px 4px #666;');
				} else if (BrowserDetect.browser == "Safari" || BrowserDetect.OS == "iPhone/iPod" || BrowserDetect.OS == "iPad") {
					this.setAttribute('style','background-image: -webkit-gradient(linear, left top, left bottom, from(#DFDFDF), to(#FFF));-webkit-box-shadow: 0 1px 4px #666;');
				} else if (BrowserDetect.browser == "Konqueror") {
					this.setAttribute('style','background-image: -khtml-gradient(linear, left top, left bottom, from(#DFDFDF), to(#FFF));-khtml-box-shadow: 0 1px 4px #666;');
				}
			},false);
			a1.addEventListener('mouseup',function (e) {
				this.removeAttribute('style');
			},false);
			a1.addEventListener('mouseout',function (e) {
				this.removeAttribute('style');
			},false);
			a1.addEventListener('blur',function (e) {
				this.removeAttribute('style');
			},false);
		}
	}
	*/
	//change style of a.action_button onclick
	/*
	var b2 = document.getElementsByTagName("a");
	for (c2 = 0; c2 < b2.length; c2++) {
		a2 = b2[c2];
		aClass = a2.getAttribute("class");
		if (aClass == "action_button") {
			a2.addEventListener('mousedown',function (e) {
				this.setAttribute('style','background:url(/images/buttons/csg-4e61ebfe1780c.png) no-repeat top left;background-position:0 0;');
			},false);
			a2.addEventListener('mouseup',function (e) {
				this.removeAttribute('style');
			},false);
			a2.addEventListener('mouseout',function (e) {
				this.removeAttribute('style');
			},false);
			a2.addEventListener('blur',function (e) {
				this.removeAttribute('style');
			},false);
		}
	}
	*/
	//autocomplete
	/*
	$("#s").autocomplete("/scripts/autocomplete.php", {
		width: 200,
		highlight: false,
		selectFirst: false
	});
	*/
	//twitter button
	//var a = document.getElementById("twitterblock");
	//a && (b = document.createElement("a"), b.setAttribute("href", "http://twitter.com/share"), b.setAttribute("class", "twitter-share-button"), b.setAttribute("data-count", "horizontal"), b.setAttribute("data-via", "englishextra"), c = document.createTextNode("Tweet"), b.appendChild(c), a.appendChild(b));
	//google plus one button
	//var a = document.getElementById("googleplusoneblock");
	//a && (b = document.createElement("g:plusone"), a.appendChild(b));
//});
//end of actions dependant on jQuery
js/contact.js
/*!
 * 
 * 
 * @params 
 * @return 
 */
 /*cover the tipsy code with jQuery loaded check
"undefined"!==typeof loaded_jquery&&loaded_jquery&&$(document).ready(function(){
});
*/
js/detectmobilebrowser.js
/*!
 * 
 * 
 * @params 
 * @return 
 */
load js function:
function loadjsfile(b,c){var a=document.createElement("script"),d=document.documentElement.firstChild;a.type="text/javascript";a.readyState?a.onreadystatechange=function(){if("loaded"==a.readyState||"complete"==a.readyState)a.onreadystatechange=null,c()}:a.onload=function(){c()};a.src=b;d.insertBefore(a,d.firstChild)};
unpacked:
function loadjsfile(b, c) {
	var a = document.createElement("script"),
		d = document.documentElement.firstChild;
	a.type = "text/javascript";
	a.readyState ? a.onreadystatechange = function () {
		if ("loaded" == a.readyState || "complete" == a.readyState) a.onreadystatechange = null, c()
	} : a.onload = function () {
		c()
	};a.src = b;d.insertBefore(a, d.firstChild)
};
js/shadowbox.js
/*!
 * 
 * 
 * @params 
 * @return 
 */
encode lang support with Google Closure Compiler
//S.lang={code:"ru",of:"из",loading:"загрузка",cancel:"Отмена",next:"Следующая",previous:"Предыдущая",play:"Пуск",pause:"Пауза",close:"Закрыть",errors:{single:'Вы должны установить для браузера плагин <a href="{0}">{1}</a>, чтобы просмотривать этот контент.',shared:'Чтобы просмотреть этот контент, вы должны установить и <a href="{0}">{1}</a>, и <a href="{2}">{3}</a>.',either:'Вы должны установить или <a href="{0}">{1}</a> плагин, или <a href="{2}">{3}</a>, чтобы просмотреть этот контент.'}};
S.lang={code:"ru",of:"\u0438\u0437",loading:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430",cancel:"\u041e\u0442\u043c\u0435\u043d\u0430",next:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f",previous:"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f",play:"\u041f\u0443\u0441\u043a",pause:"\u041f\u0430\u0443\u0437\u0430",close:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",errors:{single:'\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u043b\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u043f\u043b\u0430\u0433\u0438\u043d <a href="{0}">{1}</a>, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u043a\u043e\u043d\u0442\u0435\u043d\u0442.', shared:'\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u044d\u0442\u043e\u0442 \u043a\u043e\u043d\u0442\u0435\u043d\u0442, \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438 <a href="{0}">{1}</a>, \u0438 <a href="{2}">{3}</a>.',either:'\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u043b\u0438 <a href="{0}">{1}</a> \u043f\u043b\u0430\u0433\u0438\u043d, \u0438\u043b\u0438 <a href="{2}">{3}</a>, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u044d\u0442\u043e\u0442 \u043a\u043e\u043d\u0442\u0435\u043d\u0442.'}};
//initialise script
//"undefined"!==typeof loaded_jquery&&loaded_jquery&&$(document).ready(function(){ Shadowbox.init({handleOversize: "drag",modal: true,flashParams: {bgcolor:"#ffffff"}}); });
//change paths in shadowbox.css
url(/images/interface/shadowbox/close.png);} and others
js/simplemodal.js
/*!
 * 
 * 
 * @params 
 * @return 
 */
 /*cover the tipsy code with jQuery loaded check
"undefined"!==typeof loaded_jquery&&loaded_jquery&&$(document).ready(function(){
});
*/
js/tipsy.js
/*!
 * 
 * 
 * @params 
 * @return 
 */
/*cover the tipsy code with jQuery loaded check
"undefined"!==typeof loaded_jquery&&loaded_jquery&&$(document).ready(function(){
});
*/
/*!
 * 
 * 
 * @params 
 * @return 
 */
loadjsfile("/js/shadowbox.js", function () { Shadowbox.init({ handleOversize: "drag", modal: !0, flashParams: { bgcolor: "#000000" } })})
/*!
 * 
 * 
 * @params 
 * @return 
 */
