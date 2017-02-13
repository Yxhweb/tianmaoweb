// 2016.8.4
//1.解决类似类名的兼容问题
 //father:是容器
 //classname:是类名
 function getClass(classname,father){
 	   father=father||document;           //当father不传参时，father默认为document，如果传了参数优先按传了的参数
	    if(father.getELementsByClassName){       //现代的浏览器
	    	return father.getElementsByClassName(classname);
	    }else{                                   //IE8以下中
            var all=father.getElementsByTagName("*");
            var newarr=[];
            for(var i=0;i<all.length;i++){
            	if(checkPre(all[i].className,classname)){
            		newarr.push(all[i]);
            	}
            }return newarr;
	    }
 }

 function checkPre(str,classname){   //判断一个class里有多个类名是否有自己筛选出来的类名
 	  var arr=str.split(" ");         //将字符串转化为数组 分隔符为空格
 	  for(var i in arr){
 	  	if(arr[i]==classname){
 	  		return true;
 	  	}
 	  }
 	  return false;
 }
 /***************************************************************************/
 // 2016.8.5
 // 2.解决获取样式的兼容函数
// attrub 属性
//obj:对象
//attr:属性 的形参
 function getStyle(obj,attr){
      if(obj.currentStyle){
            return obj.currentStyle[attr];
      }else{
            return getComputedStyle(obj,null)[attr];
      }
 }


 /************************************************************/
 //2016.8.8 
 // 3.获取内容的兼容函数
 // 传"#"代表id ; 传"."代表 类名 ; "a"

//selecter: 当它为字符串时，获取元素
//         当它为函数，实现页面加载完成
          


 function $(selecter,father){
  if(typeof selecter=="string"){
      father=father||document;
      selecter=selecter.replace(/^\s*|\s*$/g,"");  //去掉字符串前后空格
      if(selecter.charAt(0)=="."){  //类名
            return getClass(selecter.slice(1),father);
           // alert(1);
      }else if(selecter.charAt(0)=="#"){    //id名
            return document.getElementsById(selecter.slice(1))
           // alert(2);
      }else if(/^[a-z]+\d*$/g.test(selecter)) {    //标签名
            return father.getElementsByTagName(selecter);
           //  alert(3);
      }
     }else if(typeof selecter=="function"){
              window.onload=function(){
                selecter();
              }
     }
}             


 $(".box")  //调用它
 // 正则：一个定规则的表达式对象
 // 格式：/adlja/;