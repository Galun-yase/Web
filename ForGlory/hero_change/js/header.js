/**
 * pvp Header JS
 * Author: sonichuang
 * Create: 2017-05-31
 */
var pvpHeader = (function () {
	var util = {},
		fn = {},
		$header = "",
		init = function () { };

	var isOldHeader = $("body").hasClass("old-header") ? true : false;

	fn = {
		jsLoader: function (url, callback, options) {
			options = options || {};
			var head = document.getElementsByTagName('head')[0] || document.documentElement,
				script = document.createElement('script'),
				done = false;
			script.src = url;
			if (options.charset) {
				controller
				script.charset = options.charset;
			}
			script.onerror = script.onload = script.onreadystatechange = function () {
				if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
					done = true;
					if (callback) {
						callback();
					}
					script.onerror = script.onload = script.onreadystatechange = null;
					head.removeChild(script);
				}
			};
			head.insertBefore(script, head.firstChild);
		}
	};

	util.addHeaderHTML = function () {
		if (isOldHeader) {
			var loginSup = '';
			var loginSub = '';
			loginSub += '<!--=========周免英雄和用户登录==========-->';
			loginSub += '<div class="info-box clearfix">';
			loginSub += '  <div class="hero-box fl pr">';
			loginSub += '	<p id="FreeHeros-Title"><b>周免英雄（<span id="freeHerosPeriod"></span>）</b></p>';
			loginSub += '	<ul id="FreeHeros-Cont" class="hero-list clearfix">加载中...</ul>';
			loginSub += '	<a href="/web201605/herolist.shtml" onclick="PTTSendClick(\'head\',\'morehero\',\'更多英难\');" target="_blank" title="更多英雄" class="more-hero pa">更<br>多<br>英<br>雄</a>';
			loginSub += '  </div>';
			loginSub += '  <div class="login-box clearfix fl pr">';
			loginSub += '	<a class="avatar pa spr" href="/web201605/personal.shtml">';
			loginSub += '	  <img src="//game.gtimg.cn/images/yxzj/web201605/main/avatar1.jpg" width="75" height="75">';
			loginSub += '	  <span class="pa spr level-ico db">0</span>';
			loginSub += '	</a>';
			loginSub += '	<!--=====登录后已选择大区=====-->';
			loginSub += '	<div id="logined_selected" class="per-infor fl" style="display:none;">';
			loginSub += '	  <p class="user-name f12">';
			loginSub += '		<em>用户名称</em>';
			loginSub += '		<i id="nickname">--</i>';
			loginSub += '		<a class="logout_btn" href="javascript:void(0)">注销</a>';
			loginSub += '		<a class="select_role" style="color:#2d84d3" href="javascript:void(0)">切换大区&gt;</a>';
			loginSub += '	  </p>';
			loginSub += '	  <ul class="userinfo-list tc">';
			loginSub += '		<li><em class="grade_level">倔强青铜III</em><i>段位</i></li>';
			loginSub += '		<li><em class="win_count">-</em><i>胜场</i></li>';
			loginSub += '		<li><em class="hero_count">-</em><i>英雄数</i></li>';
			loginSub += '		<li><em class="skin_count">-</em><i>皮肤数</i></li>';
			loginSub += '	  </ul>';
			loginSub += '	</div>';
			loginSub += '	<!--=====登录前=====-->';
			loginSub += '	<div id="unlogin" class="per-infor txt2 fl" style="display:block;">';
			loginSub += '	  <p class="user-name">';
			loginSub += '		亲爱的召唤师，欢迎';
			loginSub += '  <a href="javascript:TGDialogS(\'login_select\');" onclick="PTTSendClick(\'head\',\'loginBtnSub\',\'登录\');">登录</a>';
			loginSub += '	  </p>';
			loginSub += '	</div>';
			loginSub += '	<!--=====登录后未选择大区=====-->';
			loginSub += '	<div id="logined_not_selected" class="per-infor txt2 fl" style="display:none;">';
			loginSub += '	  <p class="user-name">';
			loginSub += '		您已登录，请<a class="select_role" href="javascript:void(0)">选择大区</a>，或者<a class="logout_btn" href="javascript:void(0)">注销</a>';
			loginSub += '		<!--您已登录，个人中心暂未开放<a class="logout_btn" href="javascript:void(0)">注销</a>-->';
			loginSub += '	  </p>';
			loginSub += '	  <!--p>登录后查看自己的英雄联盟游戏信息，包括召唤师等级、游戏胜场数、账户信息、声望值 等。</p-->';
			loginSub += '	</div>';
			loginSub += '  </div>';
			loginSub += '</div><!--=========周免英雄和用户登录==========-->';
			loginSub += '<a target="_blank" href="javascript:;" onClick="PTTSendClick(\'btn\',\'subtopkv\',\'进入专题\');"  class="kv-link" title="查看详情">查看详情</a>';
		} else {
			var loginSub = '';
			var loginSup = '';
			loginSup += '      <!--=====登录模块=====-->';
			loginSup += '      <div class="login_pannel clearfix pa">';
			loginSup += '        <a class="avatar user_pic " href="/web201605/personal.shtml">';
			loginSup += '          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAABGdBTUEAALGPC/xhBQAAARpQTFRF88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JYAAAA88JYAMCn0QAAAF10Uk5TZBSP1dYNDujnLPuA3/zQAos0UjmnB8KcgZrNkfGwCdhthtnjysFgCFAZSuQWKYNXh9IbREw+9iRhdyPlZRNdvRwnMRrvNf3F3isBtz+eRfPha+v3O+718Gm0eB4AqcfmkwAAAUBJREFUOMvt1FWTg0AMAOCeu7u71t3dFS+FJv//b9wCnbu5YwI83VPzsBvYb2aRbHzgOXxzartTLbGhVPVAN9Z0NurrXVdaE9GkKNZcaFPBVBJ6kEyh0nSksoqYAVgEyCCqsgMdcIjIpxOYSPMs4wYkHY3RiPwSLufNbDyiqIp/Q6Iob6MqRZ9t9ImiNzZ6R9ELG72k6Dl22q1v1mp38JSiE9SgLpR3mNssC3XQ2DVBD62lBR2zRSPR8JiiR9jIrgDEwhiOAazqDTyjaI7trMQhwqYIxBU2XVH01nibCYTYGGIPzuKBLJdrkwb86A9YVCfpI1uNBkHmZAhGDSqQ9MUspwLkwGcV2StJh9bHn8J09hs+Sfo2/EXFd6ezVZB+aP/D+cQebM+odN9z6wPFvkl3ux66y95WBSr7J/NW/F/0C0EhZNPgBN3FAAAAAElFTkSuQmCC" width="42" height="42">';
			loginSup += '        </a>';
			loginSup += '        <!--=====登录后已选择大区=====-->';
			loginSup += '        <div id="logined_selected" class="per-infor" style="display:none;">';
			loginSup += '          <p class="user-name f12">';
			loginSup += '            <i id="nickname">--</i>';
			loginSup += '            <a class="logout_btn" href="javascript:void(0)">注销</a>';
			loginSup += '            <!--<a class="select_role" style="color:#2d84d3" href="javascript:void(0)">切换大区&gt;</a>-->';
			loginSup += '          </p>';
			loginSup += '          <p class="personal_link"><a href="//pvp.qq.com/web201605/personal.shtml">点击查看游戏战绩</a></p>';
			loginSup += '          <ul class="userinfo-list tc">';
			loginSup += '            <li><em class="grade_level">倔强青铜III</em><i>段位</i></li>';
			loginSup += '            <li><em class="win_count">-</em><i>胜场</i></li>';
			loginSup += '            <li><em class="hero_count">-</em><i>英雄数</i></li>';
			loginSup += '            <li><em class="skin_count">-</em><i>皮肤数</i></li>';
			loginSup += '          </ul>';
			loginSup += '        </div>';
			loginSup += '        <div id="unlogin" class="per-infor unlogin_pannel">';
			loginSup += '          <span class="unlogin_user_pic"></span>';
			loginSup += '          <div class="unlogin_info">';
			loginSup += '            <a href="javascript:TGDialogS(\'login_select\');" onclick="PTTSendClick(\'head\',\'loginBtnSup\',\'欢迎登录\');">欢迎登录</a>';
			loginSup += '            <p>登录后查看游戏战绩</p>';
			loginSup += '          </div>';
			loginSup += '        </div>';
			loginSup += '        <!--=====登录后未选择大区=====-->';
			loginSup += '        <div id="logined_not_selected" class="per-infor" style="display:none;">';
			loginSup += '          <div class="user-name">';
			loginSup += '            您已登录';
			loginSup += '            <p>请<a class="select_role" href="javascript:void(0)">选择大区</a>，或者<a class="logout_btn" href="javascript:void(0)">注销</a></p>';
			loginSup += '            <!--您已登录，个人中心暂未开放<a class="logout_btn" href="javascript:void(0)">注销</a>-->';
			loginSup += '          </div>';
			loginSup += '        </div>';
			loginSup += '      </div><!--=====登录模块=====-->';
		}
		var headerHTML = '';
		headerHTML += '<div id="header" class="header tganime-header-fix">';
		headerHTML += '<div class="header-nav">';		
		headerHTML += '    <div class="header-inner">';
		headerHTML += '      <h1><a href="//pvp.qq.com/" class="logo pa" title="王者荣耀" onclick="PTTSendClick(\'headNav\',\'logo\',\'logo\');">王者荣耀</a></h1>';
		headerHTML += '      <!--=========主导航==========-->';
		headerHTML += '      <ul class="main-nav clearfix">';
		headerHTML += '        <li class="first-nav">';
		headerHTML += '          <a href="//pvp.qq.com/" target="_blank" title="官网首页" onclick="PTTSendClick(\'headNav\',\'home\',\'官网首页\');">官网首页<em>HOME</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="/web201605/herolist.shtml" target="_blank" title="游戏资料" onclick="PTTSendClick(\'headNav\',\'data\',\'游戏资料\');">游戏资料<em>DATA</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="/raiders/" target="_blank" title="内容中心" onclick="PTTSendClick(\'headNav\',\'strategy\',\'内容中心\');">内容中心<em>CONTENTS</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="/match/center.shtml?ADTAG=pvp.index.nav.matchcenter" target="_blank" title="赛事中心" onclick="PTTSendClick(\'headNav\',\'match\',\'赛事中心\');">赛事中心<em>MATCH</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="/cp/a20171023pvppc/" target="_blank" title="商城/合作" onclick="PTTSendClick(\'headNav\',\'CULTURE\',\'百态王者\');">百态王者<em>CULTURE</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="javascript:void(0)" title="社区互动" onclick="PTTSendClick(\'headNav\',\'Community\',\'社区互动\');">社区互动<em>COMMUNITY</em></a>';
		headerHTML += '        </li>';
		headerHTML += '        <li>';
		headerHTML += '          <a href="javascript:void(0)" target="_blank" title="玩家支持" onclick="PTTSendClick(\'headNav\',\'player\',\'玩家支持\');">玩家支持<em>PLAYER</em></a>';
		headerHTML += '        </li>';
		headerHTML += '      </ul>';
		headerHTML += loginSup;
		headerHTML += '    </div>';
		headerHTML += '    <!--=====二级导航=====-->';
		headerHTML += '      <div id="J_subNav" class="sub-nav">';
		headerHTML += '        <ul class="sub-nav-inner">';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '             &nbsp;';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '             <a href="/cp/a20170829bbgxsm/index.html" target="_blank" title="版本介绍" onclick="PTTSendClick(\'headNav\',\'data_ver\',\'版本介绍\');">版本介绍</a>';
		headerHTML += '             <a href="/web201605/introduce.shtml" target="_blank" title="游戏介绍" onclick="PTTSendClick(\'headNav\',\'data_moba\',\'游戏介绍\');">游戏介绍</a>';
		headerHTML += '             <a href="/web201605/herolist.shtml" target="_blank" title="英雄资料" onclick="PTTSendClick(\'headNav\',\'data_hero\',\'英雄资料\');">英雄资料</a>';
		headerHTML += '             <a href="/coming/v2/" target="_blank" title="爆料站" onclick="PTTSendClick(\'headNav\',\'data_coming\',\'爆料站\');"><i class="icon-fans"></i>爆料站</a>';
		headerHTML += '             <a href="javascript:void(0)" title="故事站" onclick="TGDialogS(\'story\');PTTSendClick(\'headNav\',\'data_story\',\'故事站\');"><i class="icon-fans"></i>故事站</a>';
		headerHTML += '             <a href="/web201605/wallpaper.shtml" target="_blank" title="游戏壁纸" onclick="PTTSendClick(\'headNav\',\'data_wallpaper\',\'游戏壁纸\');">游戏壁纸</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '             <a href="/raiders/" target="_blank" title="攻略中心" onclick="PTTSendClick(\'headNav\',\'strategy_center\',\'攻略中心\');">攻略中心</a>';
		headerHTML += '             <a href="/strategy/" target="_blank" title="英雄攻略" onclick="PTTSendClick(\'headNav\',\'strategy_hero\',\'英雄攻略\');">英雄攻略</a>';
		headerHTML += '             <a href="/v/" target="_blank" title="视频中心" onclick="PTTSendClick(\'headNav\',\'strategy_video\',\'视频中心\');">视频中心</a>';
		headerHTML += '             <a href="/cp/a20180808wzsj/index.htm" target="_blank" title="王者视角" onclick="PTTSendClick(\'headNav\',\'a20180808wzsj\',\'王者视角\');">王者视角</a>';
		headerHTML += '             <a href="/author/" target="_blank" title="作者入驻" onclick="PTTSendClick(\'headNav\',\'author\',\'作者入驻\');">作者入驻</a>';
		headerHTML += '             <a href="/mcn/" target="_blank" title="媒体入驻" onclick="PTTSendClick(\'headNav\',\'mcn\',\'媒体入驻\');">媒体入驻</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '            <a href="/match/kpl/index.shtml" target="_blank" title="KPL职业联赛" onclick="PTTSendClick(\'headNav\',\'match_KPL\',\'KPL\');"><i class="icon-fans"></i>KPL</a>';
		headerHTML += '            <a href="/cp/a20181017krkpl/index.html" target="_blank" title="KRKPL联赛" onclick="PTTSendClick(\'headNav\',\'match_KRKPL\',\'KRKPL\');"><i class="icon-hot"></i>KRKPL</a>';
		headerHTML += '             <a href="/match/kcc.shtml" target="_blank" title="冠军杯" onclick="PTTSendClick(\'headNav\',\'match_kcc\',\'kcc\');">冠军杯</a>';
		// headerHTML +='             <a href="/match/krkpl/" target="_blank" title="KPL韩国职业联赛" onclick="PTTSendClick(\'headNav\',\'match_KRKPL\',\'KRKPL\');">KRKPL</a>';
		headerHTML += '             <a href="/cp/a20180906gxls/index.shtml" target="_blank" title="王者高校联赛" onclick="PTTSendClick(\'headNav\',\'match_gaoxiao\',\'王者高校联赛\');">高校赛</a>';
		headerHTML += '             <a href="/cp/a20180822citylg/index.shtml" target="_blank" title="王者荣耀城市赛" onclick="PTTSendClick(\'headNav\',\'match_city\',\'王者荣耀城市赛\');">城市赛</a>';
		// headerHTML +='             <a href="javascript:void(0)" target="_blank" title="QGC联赛" onclick="TGDialogS(\'qgc\');PTTSendClick(\'headNav\',\'match_QGC\',\'QGC\');">QGC</a>';
		// headerHTML +='             <a href="//tga.qq.com/match/2018/pc_game.html?game=wzry&tga=1" target="_blank" title="TGA大奖赛" onclick="PTTSendClick(\'headNav\',\'match_TGA\',\'TGA\');">TGA</a>';
		// headerHTML +='             <a href="javascript:void(0)" target="_blank" title="WGC精英赛" onclick="TGDialogS(\'wgc\');PTTSendClick(\'headNav\',\'match_WGC\',\'WGC\');">WGC</a>';
		headerHTML += '             <a href="/match/quanmin/index.html#/" target="_blank" title="全民赛" onclick="PTTSendClick(\'headNav\',\'match_KCC\',\'quanmin\');">全民赛</a>';
		headerHTML += '             <a href="//datamore.qq.com/project/wzmatch/dist/index.html" target="_blank" title="赛事数据" onclick="PTTSendClick(\'headNav\',\'match_datamore\',\'赛事数据\');"><i class="icon-fans"></i>赛事数据</a>';
		// headerHTML +='             <a href="javascript:void(0)" target="_blank" title="赛事小程序" onclick="TGDialogS(\'applets2\');PTTSendClick(\'headNav\',\'match_applets\',\'赛事小程序\');">赛事小程序</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '             <a href="/culture/inherit.html" target="_blank" title="荣耀·传承" onclick="PTTSendClick(\'headNav\',\'culture\',\'荣耀·传承\');">荣耀·传承</a>';
		headerHTML += '             <a href="/history/" target="_blank" title="王者文化站" onclick="PTTSendClick(\'headNav\',\'history\',\'王者文化站\');">王者文化站</a>';
		headerHTML += '             <a href="/cp/a20180327music/index.html" target="_blank" title="王者音乐听" onclick="PTTSendClick(\'headNav\',\'a20180327music\',\'王者音乐听\');">王者音乐听</a>';
		headerHTML += '             <a href="/wonder/" target="_blank" title="万千世界" onclick="PTTSendClick(\'headNav\',\'wonder\',\'万千世界\');">万千世界</a>';
		headerHTML += '             <a href="/cp/a20190102starlight/index.html" target="_blank" title="星光殿堂" onclick="PTTSendClick(\'headNav\',\'star\',\'星光殿堂\');" >星光殿堂</a>';
		headerHTML += '             <a href="//cafe.qq.com/wifi/pc/index.html" target="_blank" title="WiFi特权" onclick="PTTSendClick(\'headNav\',\'wifi\',\'WiFi特权\');">WiFi特权</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '            <a href="javascript:void(0)" title="王者营地" onclick="TGDialogS(\'zhushou\');PTTSendClick(\'headNav\',\'Community_tools\',\'王者营地\');"><i class="icon-hot"></i>王者营地</a>';
		headerHTML += '            <a href="https://buluo.qq.com/p/barindex.html?bid=227061" target="_blank" title="手Q部落" onclick="PTTSendClick(\'headNav\',\'Community_qq\',\'手Q部落\');">手Q部落</a>';
		headerHTML += '            <a href="javascript:void(0)" target="_blank" title="微信圈子" onclick="TGDialogS(\'weiquan\');PTTSendClick(\'headNav\',\'Community_wx\',\'微信圈子\');">微信圈子</a>';
		headerHTML += '            <a href="//weibo.com/heromoba" target="_blank" title="官方微博" onclick="PTTSendClick(\'headNav\',\'Community_wb\',\'官方微博\');">官方微博</a>';
		headerHTML += '            <a href="javascript:void(0)" title="微信公众号" onclick="TGDialogS(\'weixin\');PTTSendClick(\'headNav\',\'Community_wxgzh\',\'微信公众号\');">微信公众号</a>';
		headerHTML += '            <a href="javascript:void(0)" title="手Q订阅号" onclick="TGDialogS(\'qq\');PTTSendClick(\'headNav\',\'Community_qqdyh\',\'手Q订阅号\');">手Q订阅号</a>';
		// headerHTML +='            <a href="javascript:void(0)" title="官网小程序" onclick="TGDialogS(\'applets\');PTTSendClick(\'headNav\',\'website_applets\',\'官网小程序\');">官网小程序</a>';
		headerHTML += '            <a href="/fans/index.shtml" target="_blank" title="同人社区" onclick="PTTSendClick(\'headNav\',\'Community_fans\',\'同人社区\');">同人社区</a>';
		headerHTML += '          </li>';
		headerHTML += '          <li class="down-nav">';
		headerHTML += '             <a href="https://jiazhang.qq.com/jz/home.html " target="_blank" title="成长守护平台" onclick="PTTSendClick(\'headNav\',\'player_watch\',\'成长守护平台\');"><i class="icon-guard"></i>成长守护平台</a>';
		headerHTML += '             <a href="/cp/a20170726hsbbspc/index.html" target="_blank" title="健康系统" onclick="PTTSendClick(\'headNav\',\'player_healthy\',\'健康系统\');"><i class="icon-health"></i>健康系统</a>';
		headerHTML += '             <a href="/cp/a20181105talk/" target="_blank" title="狄仁杰护卫站" onclick="PTTSendClick(\'headNav\',\'player_drj\',\'狄仁杰护卫站\');"><i class="icon-fans"></i>狄仁杰护卫站</a>';
		headerHTML += '             <a href="javascript:void(0)" target="_blank" title="客服专区" onclick="TGDialogS(\'kefu\');PTTSendClick(\'headNav\',\'player_kf\',\'客服专区\');">客服专区</a>';
		headerHTML += '             <a href="/webplat/info/news_version3/15592/24091/24092/24095/m15241/201508/370256.shtml" title="礼包兑换" onclick="PTTSendClick(\'headNav\',\'player_feedback\',\'礼包兑换\');" target="_blank">礼包兑换</a>';
		headerHTML += '             <a href="https://tool.helper.qq.com/v3/wzry/official_website/index.html" title="自助服务" onclick="PTTSendClick(\'headNav\',\'player_service\',\'自助服务\');" target="_blank">自助服务</a>';
		headerHTML += '          </li>';
		headerHTML += '        </ul>';
		headerHTML += '      </div>';
		headerHTML += '      </div>';
		headerHTML += loginSub;
		headerHTML += '</div>';
		headerHTML += '<div class="header-dialog">';
		headerHTML += '  <div class="pop pr tganime-fadein on" style="display:none;" id="login_select">';
		headerHTML += '    <a href="javascript:showDialog.hide()" class="close pa db ht">关闭</a>';
		headerHTML += '    <a href="javascript:void(0)" id="wxlogin" class="wx-login pa db ht">微信用户登录</a>';
		headerHTML += '    <a href="javascript:void(0)" id="qqlogin" class="qq-login pa db ht">QQ用户登录</a>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="pop2 pr" style="display:none;" id="area_select">';
		headerHTML += '    <a href="javascript:showDialog.hide()" class="close pa db ht">关闭</a>';
		headerHTML += '    <div class="se-input">';
		headerHTML += '      <select name="channelContentId" id="channelContentId"><option selected>选择渠道</option></select>';
		headerHTML += '      <select name="areaContentId" id="areaContentId"><option selected>选择大区</option></select>';
		headerHTML += '      <select name="roleContentId" id="roleContentId"><option selected>选择角色</option></select>';
		headerHTML += '    </div>';
		headerHTML += '    <div class="se-btn clearfix">';
		headerHTML += '      <a id="RoleSelectBtn" href="javascript:showDialog.hide()" class="fl ht">确定</a>';
		headerHTML += '      <a href="javascript:showDialog.hide()" class="fl ht">取消</a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="zhushou pr" id="zhushou" style="display:none">';
		headerHTML += '    <div class="dia-zhushou pr">';
		headerHTML += '       <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="weixin pr" id="weixin" style="display:none">';
		headerHTML += '    <div class="dia-weixin pr">';
		headerHTML += '       <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="story pr" id="story" style="display:none">';
		headerHTML += '    <div class="dia-story">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="skin pr" id="skin" style="display:none">';
		headerHTML += '    <div class="dia-skin">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="version pr" id="version" style="display:none">';
		headerHTML += '    <div class="dia-version">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '   <div class="weiquan pr" id="weiquan" style="display:none">';
		headerHTML += '    <div class="dia-weiquan">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="hero_pop pr" id="hero_pop" style="display:none">';
		headerHTML += '    <div class="dia-hero-pop">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="kefu pr" id="kefu" style="display:none">';
		headerHTML += '    <div class="dia-kefu">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '      <p>微信扫一扫，联系客服</p>';
		headerHTML += '    </div> ';
		headerHTML += '  </div>';
		headerHTML += '  <div class="qq pr" id="qq" style="display:none">';
		headerHTML += '    <div class="dia-qq">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="wgc pr" id="wgc" style="display:none">';
		headerHTML += '    <div class="dia-wgc">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="qgc pr" id="qgc" style="display:none">';
		headerHTML += '    <div class="dia-qgc">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="applets pr" id="applets" style="display:none">';
		headerHTML += '    <div class="dia-applets">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '  <div class="applets2 pr" id="applets2" style="display:none">';
		headerHTML += '    <div class="dia-applets2">';
		headerHTML += '      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭"></a>';
		headerHTML += '    </div>';
		headerHTML += '  </div>';
		headerHTML += '</div>';
		$("#header").remove(); // if include header.inc, remove div#header
		$("body").prepend(headerHTML);
		$header = $("#header");
	};

	util.headerFunc = function () {
		if (isOldHeader) {
			util.headerFreeHeroPeriod();
			util.headerFreeHeroInit();
			util.setKVLink();
		}
	};

	util.headerFreeHeroInit = function () {
		sUrl = '//game.gtimg.cn/images/yxzj/img201606/heroimg/';
		$("#FreeHeros-Cont").on("mouseenter", "li", function () {
			var _self = $(this),
				_selfImg = _self.find("img"),
				hid = _selfImg.data("id");
			// console.log(hid);
			// _selfImg.attr('src', sUrl + hid + '/' + hid + '-freehover.png');
			_self.siblings("li").find("img").each(function (i) {
				hhid = $(this).data("id");
				// console.log(hhid);
				// $(this).attr("src", sUrl + hhid + '/' + hhid + '.jpg');
			});
			_self.addClass("active").siblings("li").removeClass("active");

		});
		$.ajax({
			url: '//pvp.qq.com/web201605/js/herolist.json',
			dataType: 'json',
			success: function (data) {
				// console.log(data);
				var freeHeroData = [],
					freeHeroHtml = "";
				for (var i = 0; i < data.length; i++) {
					var payarr = [],
						payarr = ('' + data[i].pay_type).split(',');
					if (payarr == 10 || payarr[0] == 10 || payarr[1] == 10) {
						freeHeroData.push(data[i]);
					}
				}
				// console.log(freeHeroData);
				for (var i = 0; i < freeHeroData.length; i++) {
					var hid = freeHeroData[i].ename;
					freeHeroHtml += '<li>';
					freeHeroHtml += '	<a href="//pvp.qq.com/web201605/herodetail/' + hid + '.shtml" target="_blank" onclick="PTTSendClick(\'header\',\'freeHero-' + i + '\',\'周免英雄\');">';
					freeHeroHtml += '		<img class="small" data-id="' + hid + '" src="' + sUrl + '' + hid + '/' + hid + '.jpg" width="69" height="69">';
					freeHeroHtml += '		<img class="large" data-id="' + hid + '" src="' + sUrl + '' + hid + '/' + hid + '-freehover.png" width="224" height="69">';
					freeHeroHtml += '	</a>';
					freeHeroHtml += '</li>';
				}
				// console.log(freeHeroHtml);
				$("#FreeHeros-Cont").html(freeHeroHtml);
				$("#FreeHeros-Cont li").eq(0).trigger("mouseenter");
			},
			error: function (xhr, type) {
				console.log("get herolist.json error!")
			}
		});
	};

	util.headerFreeHeroPeriod = function () {
		/* 英雄限费时间填充，一般为周1-周日 */
		// 获取当前服务器时间
		function getServerTime (callback) {
			$.getScript('//apps.game.qq.com/CommArticle/app/reg/gdate.php?t=' + new Date().getTime(), function () {
				var serverDate = json_curdate,
					date = new Date(serverDate.replace(/-/g, "/"));
				callback && callback(date);
			});
		}
		function getDateStr (date, offset) {
			var dateSet = date || new Date(),
				offset = offset || 0;
			var h = new Date();
			h.setDate(dateSet.getDate() + offset);
			var set = [];
			set.push(h.getFullYear());
			set.push(h.getMonth() + 1);
			set.push(h.getDate());
			// return set[0] + '-' + set[1] + '-' + set[2];
			return set[1] + '月' + set[2] + '日';
		}
		var freeHeroDayFill = function (d) {
			var d = d || new Date();
			var day = d.getDay();
			var d1, d2;
			switch (day) {
				case 0: //日
					d1 = getDateStr(d, +1);
					d2 = getDateStr(d, +7);
					break;
				case 1: //一
					d1 = getDateStr(d, 0);
					d2 = getDateStr(d, +6);
					break;
				case 2: //二
					d1 = getDateStr(d, -1);
					d2 = getDateStr(d, +5);
					break;
				case 3: //三
					d1 = getDateStr(d, -2);
					d2 = getDateStr(d, +4);
					break;
				case 4: //四
					d1 = getDateStr(d, -3);
					d2 = getDateStr(d, +3);
					break;
				case 5: //五
					d1 = getDateStr(d, -4);
					d2 = getDateStr(d, +2);
					break;
				case 6: //六
					d1 = getDateStr(d, -5);
					d2 = getDateStr(d, +1);
					break;
			}
			if (d1 && d2) { $("#freeHerosPeriod").html(d1 + "-" + d2) }
		}
		// 拿当前服务器时间计算得出本周1 - 下周日
		getServerTime(freeHeroDayFill);
	};

	util.setKV = function () {
		var $wrapper = $(".wrapper");
		if (!$wrapper[0]) { return }
		$.getScript("//game.qq.com/time/qqadv/Info_new_15191.js", function () {
			var kvPos = "pos16040";
			if (!oDaTaNew15191 || !oDaTaNew15191[kvPos]) return
			var kvImg = "//game.gtimg.cn/upload/adw/" + oDaTaNew15191[kvPos][2],
				kvLink = oDaTaNew15191[kvPos][1];
			$(".wrapper").css("background-image", 'url(' + kvImg + ')');
			$("#kvLink").attr("url", kvLink);
			// console.log($(".wrapper").css("background-image"))
		})
	};

	util.setKVLink = function () {
		function setLink () {
			var link = $(".kv-bg .kv_link").attr("href");
			if (link) {
				$("#header .kv-link").attr("href", link)
			} else {
				$("#header .kv-link").hide();
			}
		}
		$.getScript("//pvp.qq.com/webplat/info/news_version3/15592/29030/29082/38446/m11738/index.js", function () {
			$(".wrapper").css("background-image", 'url(' + newsIndexData[0].sInfoImageAddr + ')');
		})
		setTimeout(setLink, 500);
	};


	init = function () {
		function n () {
			util.addHeaderHTML();
			util.headerFunc();

			//载入PC官网SEO统计组件
			fn.jsLoader("//game.gtimg.cn/images/yxzj/web201706/js/pvppc.js");

			// util.addFooterHTML();
			// util.footerFunc();
			// util.setKV();
		}
		function nJS () {
			fn.jsLoader("//pvp.qq.com/web201605/js/logic.js", function () {
				n()
			})
		}
		var libFile = (window.milo) ? "" : "//game.gtimg.cn/images/js/milo/milo.js"
		libFile ? fn.jsLoader(libFile, nJS()) : nJS();
	};

	return {
		init: init
	}
})()
pvpHeader.init();
