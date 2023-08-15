function ul1(ul) {
    const ua = navigator.userAgent.toLowerCase();
	const isWeixin = ua.indexOf('micromessenger') != -1;
	const isAndroid = ua.indexOf('android') != -1;
	const isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
	if (!isWeixin) {
		 window.open(ul);
	}
	else{
		p();
	}
}

function ul2(ul) {
    const ua = navigator.userAgent.toLowerCase();
	const isWeixin = ua.indexOf('micromessenger') != -1;
	const isAndroid = ua.indexOf('android') != -1;
	const isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
	if (!isWeixin) {
		 o();
	}
	else{
		window.open(ul);
	}
}

function ul4(ul) {
    const ua = navigator.userAgent.toLowerCase();
	const isWeixin = ua.indexOf('micromessenger') != -1;
	const isAndroid = ua.indexOf('android') != -1;
	const isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
	if (!isWeixin) {
		 ul3();
	}
	else{
		window.open(ul);
	}
}

function ul3() {
    Swal.fire({
	title:'注意使用微信打开',
	icon: 'info',
	confirmButtonText: '立即购买',
	showCancelButton:'true',
	cancelButtonText:'取消'	,
}).then((result) => {
  if (result.isConfirmed) {
	window.open("https://rent.cqgongjianwlw.com/iot-lease-wechat/home?AGENT=uXeRczia");
  }
});
}

function o() {
    
Swal.fire({
	title: "请使用微信打开",
	html:'保存上方图片微信扫一扫<br>或<br>复制下方链接至微信消息窗口打开<br>ll.qh688.cn',
	button: "OK",
	imageUrl: "https://qhiits.oss-cn-shenzhen.aliyuncs.com/liu_liang_ka/%E6%B5%81%E9%87%8F%E5%8D%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
	imageWidth:180,
	imageHeight:180,
});

}

function p() {
    
Swal.fire({
	title: "请复制链接使用浏览器打开",
	html:'复制下方链接至浏览器打开<br>http://ash.liangtx.cn/wx/view/navi/h5Login',
	button: "OK",
	icon: 'info',
});

}