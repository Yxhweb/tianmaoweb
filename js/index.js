$(function(){
// 滚动
function louceng(){
var remen=$(".remenbox")[0];
var rementop=remen.offsetTop;
var top=$(".topbox")[0];
var flag1=true;
var flag2=true;
var tupian=$(".qinzibox");
var btn=$(".btn")[0];
var bt=$("li",btn);
var num=0;
var daohang=$("span",btn)[0];
var cainixihuan=$("a",btn)[0];
var fhtop=$("a",btn)[1];
var arr=["#f7a945","#f15453","#19c8a9","#64c333","#ea5f8d","#0aa6e8"];
var dingweishang=$(".dingweishang")[0];

window.onscroll=function(){
	var tops=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
	if(tops>=rementop){
			if(flag1){
			animate(dingweishang,{height:50},500);
			animate(top,{top:0},500);
			animate(btn,{left:5},500);
			animate(daohang,{left:5},500);
			animate(fhtop,{left:5},500);
			animate(cainixihuan,{left:5},500);
		flag1=false;
		flag2=true;}
		}else{
			if(flag2){
			animate(dingweishang,{height:0},500);
			animate(top,{top:-60},500);
			animate(btn,{left:-40},500);
			animate(daohang,{left:-40},500);
			animate(fhtop,{left:-40},500);
			animate(cainixihuan,{left:-40},500);
		flag1=true;
		flag2=false;}
		}
	for(var j=0;j<tupian.length;j++){
		var weizhi=tupian[j].offsetTop;
		if(tops>=weizhi&&tops<(weizhi+600)){
			for(var i=0;i<bt.length;i++){
				bt[i].style.background="#333";
			}
			bt[j].style.background=arr[j];
			num=j;
		}else if(tops>=(weizhi+600)){
			bt[j].style.background="#333";
		}else{
			bt[j].style.background="#333";
		}
	}
}
var cnxhbiaoti=$(".cainixihuanbiaoti")[0];
cainixihuan.onclick=function(){
		var tops=document.documentElement.scrollTop?document.documentElement:document.body;
		animate(tops,{scrollTop:cnxhbiaoti.offsetTop},300)
}


fhtop.onclick=function(){
		var tops=document.documentElement.scrollTop?document.documentElement:document.body;
		animate(tops,{scrollTop:0},300)
}
for(var i=0;i<bt.length;i++){
	bt[i].aa=i;
	bt[i].onmouseover=function(){
		bt[this.aa].style.background=arr[this.aa];
	}
	bt[i].onmouseout=function(){
			if(this.aa!=num){
			bt[this.aa].style.background="#333";
			}
	}
	bt[i].onclick=function(){
		var tops=document.documentElement.scrollTop?document.documentElement:document.body;
		animate(tops,{scrollTop:tupian[this.aa].offsetTop},300)
	}
}

}
louceng();







//top move
 var topmove=$(".topmove")[0];
      var flag=true;
      var flag1=true;
//top导航
var shangjia=$(".shangjia")[0];
var shang=$(".shang")[0];
var scj0=$(".scj-0")[0];
var scj1=$(".scj-1")[0];
var wodetaobao0=$(".wodetaobao0")[0];
var wodetaobao1=$(".wodetaobao1")[0];
var webxia1=$(".webxia-1")[0];
var webxia=$(".webxia")[0];
var xiaosanjiao=$(".xiaosanjiaox")
webxia1.onmouseover=function(){
  webxia.style.display="block";
  webxia1.style.background="#fff";
  // xiaosanjiao[3].style.transform="rotate(180deg)";
  animate(xiaosanjiao[3],{transform:"rotate(180deg)"},300);
}
webxia1.onmouseout=function(){
  webxia1.style.background="#f2f2f2";
  webxia.style.display="none";
  animate(xiaosanjiao[3],{transform:"rotate(0deg)"},300);
}
wodetaobao0.onmouseover=function(){
  wodetaobao1.style.display="block";
  wodetaobao0.style.background="#fff";
  animate(xiaosanjiao[0],{transform:"rotate(180deg)"},300);
}
wodetaobao0.onmouseout=function(){
  wodetaobao0.style.background="#f2f2f2";
  wodetaobao1.style.display="none";
  animate(xiaosanjiao[0],{transform:"rotate(0deg)"},300);
}
shang.onmouseover=function(){
  shangjia.style.display="block";
  shang.style.background="#fff";
  animate(xiaosanjiao[2],{transform:"rotate(180deg)"},300);
}
shang.onmouseout=function(){
  shang.style.background="#f2f2f2";
  shangjia.style.display="none";
  animate(xiaosanjiao[2],{transform:"rotate(0deg)"},300);
}
scj0.onmouseover=function(){
  scj1.style.display="block";
  scj0.style.background="#fff";
  animate(xiaosanjiao[1],{transform:"rotate(180deg)"},300);
}
scj0.onmouseout=function(){
  scj0.style.background="#f2f2f2";
  scj1.style.display="none";
  animate(xiaosanjiao[1],{transform:"rotate(0deg)"},300);
}




// 轮播
function banner(){var tu=$("a",$(".bannercenter")[0]);
	var dian=$(".bannerdian");
	var arr=["#1ceae6","#ffad4d","#6231fe","#cdd7e1","#f991c4","#00bcfb"];
	var box=$(".bannerbox")[0];
	var num=0;
	var nex=0;
	function lunbo(){
		num++;
		if(num>=tu.length){
			num=0;
		};
		for(var i=0;i<tu.length;i++){
			tu[i].style.opacity="0";
			dian[i].style.background="#000";
		}
		animate(tu[num],{opacity:1},500);
		dian[num].style.background="#dddddd";
		box.style.background=arr[num];
		now=num;
	}
	var t1=setInterval(lunbo,3000);


	// 鼠标移入
	box.onmouseover=function(){
		clearInterval(t1);
	}
	box.onmouseout=function(){
		t1=setInterval(lunbo,3000);
	}
	dian.onmouseover=function(){
		clearInterval(t1);
	}
	dian.onmouseout=function(){
		t1=setInterval(lunbo,3000);
	}
	// 点击事件
	for(var j=0;j<dian.length;j++){
		dian[j].aa=j;
		dian[j].onclick=function(){
			num=this.aa;
			for(var i=0;i<tu.length;i++){
				tu[i].style.opacity="0";
				dian[i].style.background="#000";
			}
			// animate(tu[num],{opacity:1},500);
			tu[num].style.opacity="1";
			dian[num].style.background="#dddddd";
			box.style.background=arr[num];
			now=num;
		}
	}
}
banner();


var ban=$("li",$(".banner-left")[0]);
var leftbox11=$(".banner-leftb",$(".banner-left")[0],$(".banner")[0]);
for(var i=0;i<ban.length;i++){
    ban[i].dd=i;
    ban[i].onmouseover=function(){
      for(var n=0;n<leftbox11.length;n++){
        leftbox11[n].style.width="0px"; 
       }
        leftbox11[this.dd].style.width="910px";
      }
      ban[i].onmouseout=function(){
      for(var n=0;n<leftbox11.length;n++){
          leftbox11[n].style.width="0px"; 
       }
     }
}


function maotoubox(){
	var maotou=$(".maotoubox");
	var mao=$(".maotou");
	for(var i=0;i<maotou.length;i++){
		maotou[i].aa=i;
		maotou[i].onmouseover=function(){
			animate(mao[this.aa],{top:-17,opacity:1},500);
		}
		maotou[i].onmouseout=function(){
			animate(mao[this.aa],{top:0,opacity:0},500);
		}
	}
}
maotoubox();


// 热门
function remen(){var logo=$("li",$(".remen-center")[0]);
var logotop=getClass("logotop");
for(var i=0;i<logo.length-1;i++){
		logo[i].aa=i;
		logo[i].onmouseover=function(){
			logotop[this.aa].style.opacity="1";
	}
		logo[i].onmouseout=function(){
			logotop[this.aa].style.opacity="0";
	}
}}
remen();

function chaoliu(){// 潮流前线
	var fanbing=$(".fanbing");
	var quanqiutu=$(".quanqiutu");
	for(var fan=0;fan<fanbing.length;fan++){
		fanbing[fan].bb=fan;
		fanbing[fan].onmouseover=function(){
			var fbimg=$("img",fanbing[this.bb])[0];
			animate(fbimg,{height:150},150);
		}
		fanbing[fan].onmouseout=function(){
			var fbimg=$("img",fanbing[this.bb])[0];
			animate(fbimg,{height:140},150);
		}
	}
	for(var quan=0;quan<quanqiutu.length;quan++){
		quanqiutu[quan].bb=quan;
		quanqiutu[quan].onmouseover=function(){
			var qqimg=$("img",quanqiutu[this.bb])[0];
			animate(qqimg,{height:150},150);
		}
		quanqiutu[quan].onmouseout=function(){
			var qqimg=$("img",quanqiutu[this.bb])[0];
			animate(qqimg,{height:140},150);
		}
	}
}
chaoliu();



// 定位
function topwei(){
	var box=$("div",$(".topweibox")[0]);
	var topqian=$(".topqian");
	var tophou=$(".tophou");
	for(var i=0;i<box.length;i++){
		box[i].aa=i;
		box[i].onmouseover=function(){
			topqian[this.aa].style.display="block";
			tophou[this.aa].style.display="block";
			animate(topqian[this.aa],{left:-100},200)
			animate(tophou[this.aa],{left:0},200)
		}
		box[i].onmouseout=function(){
			topqian[this.aa].style.display="none";
			tophou[this.aa].style.display="none";
			animate(topqian[this.aa],{left:-150},200)
			animate(tophou[this.aa],{left:-50},200)
		}
	}


var box2=$(".topweibox3")[0];
var topwei=$(".topwei")[0];
box2.onmouseover=function(){
	topwei.style.display="block";
	animate(topwei,{left:1155},200)
}
box2.onmouseout=function(){
	topwei.style.display="none";
	animate(topwei,{left:1050},200);
}
}
topwei();


// 亲子时光
function qinzi(){
var box=$(".qinzi-center");
for(var i=0;i<box.length;i++){
	box[i].bb=i;
	box[i].onmouseover=function(){
		var xbox=$("div",box[this.bb]);
		for(var j=0;j<xbox.length;j++){
		xbox[j].aa=j;
		xbox[j].onmouseover=function(){
			var imgs=$("img",xbox[this.aa])[0];
			animate(imgs,{marginLeft:95},200)
		}
		xbox[j].onmouseout=function(){
			var imgs=$("img",xbox[this.aa])[0];
			animate(imgs,{marginLeft:104},200)
		}
	}
	
	}
}
}
qinzi();

function qinziyou(){
var box=$(".qinzi-right");
for(var i=0;i<box.length;i++){
	box[i].bb=i;
	box[i].onmouseover=function(){
		var xbox=$("div",box[this.bb]);
		for(var j=0;j<xbox.length;j++){
		xbox[j].aa=j;
		xbox[j].onmouseover=function(){
			var imgs=$("img",xbox[this.aa])[0];
			animate(imgs,{marginRight:4},100)
		}
		xbox[j].onmouseout=function(){
			var imgs=$("img",xbox[this.aa])[0];
			animate(imgs,{marginRight:0},100)
		}
	}
	
	}
}
}
qinziyou();




//end 
})