<template>
	<div>
		<div class="app-head">
			<div class="app-head-inner">
				<img src="../assets/logo.png">
				<div class="head-nav">
					<ul class="nav-list">
						<li>退出</li>
						<li class="nav-pile">|</li>
						<li>登陆</li>
						<li class="nav-pile">|</li>
						<li>注册</li>
						<li class="nav-pile">|</li>
						<router-link to="swiper"><li>关于vue-awesome-swiper</li></router-link>
					</ul>
				</div>
			</div>
		</div>
		<div class="app-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="app-foot">
			<p>@2017-YM</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style type="text/css">
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}

.app-head{
	width: 100%;
	height: 90px;
	line-height: 90px;
	background: #363636;
	color: #b2b2b2;
}
.app-head-inner{
	width: 1200px;
	margin: 0 auto;
}
.app-head-inner img{
	width: 50px;
	margin-top: 20px;
}
.head-nav{
	float: right;
}
.nav-list{
	overflow: hidden;
}
.nav-list li{
	float: left;
	cursor: pointer;
	color: white;
}
.nav-pile{
	padding: 0 10px;
}
.container{
	width: 1200px;
	margin: 0 auto;
}
.app-foot{
	width: 100%;
	height: 80px;
	line-height: 80px;
	background: #e3e4e8;
	margin-top: 30px;
	text-align: center;
}
</style>