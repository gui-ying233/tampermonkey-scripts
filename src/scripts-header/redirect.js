module.exports = isProd =>
`// ==UserScript==
// @name         redirect 外链跳转
// @version      1.46.0
// @description  自动跳转(重定向)到目标链接，免去点击步骤。适配了简书、知乎、微博、QQ邮箱、QQPC、QQNT、印象笔记、贴吧、CSDN、YouTube、微信、微信开放社区、开发者知识库、豆瓣、个人图书馆、Pixiv、搜狗、Google、站长之家、OSCHINA、掘金、腾讯文档、pc6下载站、爱发电、Gitee、天眼查、爱企查、企查查、优设网、51CTO、力扣、花瓣网、飞书、Epic、Steam、语雀、牛客网、哔哩哔哩、少数派、5ch、金山文档、石墨文档、urlshare、酷安、网盘分享
// @author       sakura-flutter
// @namespace    https://github.com/sakura-flutter/tampermonkey-scripts
// @license      GPL-3.0
// @compatible   chrome Latest
// @compatible   firefox Latest
// @compatible   edge Latest
// @run-at       document-start
// @match        *://www.jianshu.com/go-wild*
// @match        *://link.zhihu.com/*
// @match        *://t.cn/*
// @match        *://weibo.cn/sinaurl*
// @match        *://mail.qq.com/cgi-bin/*
// @match        *://c.pc.qq.com/middlem.html*
// @match        *://c.pc.qq.com/pc.html*
// @match        *://c.pc.qq.com/ios.html*
// @match        *://app.yinxiang.com/OutboundRedirect.action*
// @match        *://jump.bdimg.com/safecheck/*
// @match        *://jump2.bdimg.com/safecheck/*
// @match        *://link.csdn.net/*
// @match        *://www.youtube.com/redirect*
// @match        *://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi*
// @match        *://developers.weixin.qq.com/community/middlepage/href*
// @match        *://www.itdaan.com/link/*
// @match        *://www.douban.com/link2/*
// @match        *://www.360doc.com/content/*
// @match        *://www.pixiv.net/jump.php*
// @match        *://m.sogou.com/*/tc*
// @match        *://m.sogou.com*/tc*
// @match        *://www.chinaz.com/go.shtml*
// @match        *://www.oschina.net/action/GoToLink*
// @match        *://link.juejin.cn/*
// @match        *://docs.qq.com/scenario/link.html*
// @match        *://www.pc6.com/goread.html*
// @match        *://afdian.net/link*
// @match        *://gitee.com/link*
// @match        *://www.tianyancha.com/security*
// @match        *://aiqicha.baidu.com/safetip*
// @match        *://www.qcc.com/web/transfer-link*
// @match        *://link.uisdc.com/*
// @match        *://blog.51cto.com/transfer*
// @match        *://leetcode.cn/link*
// @match        *://huaban.com/go*
// @match        *://security.feishu.cn/link/safety*
// @match        *://redirect.epicgames.com/*
// @match        *://steamcommunity.com/linkfilter/*
// @match        *://www.yuque.com/r/goto*
// @match        *://hd.nowcoder.com/link.html*
// @match        *://game.bilibili.com/linkfilter/*
// @match        *://sspai.com/link*
// @match        *://jump.5ch.net/*
// @match        *://www.kdocs.cn/office/link*
// @match        *://shimo.im/outlink/black*
// @match        *://google.urlshare.cn/umirror_url_check*
// @match        *://www.coolapk.com/link*
// @match        *://wpfx.org/go*
// @include      ${/^https?:\/\/www\.google\..{2,7}url/}
// ==/UserScript==
`
