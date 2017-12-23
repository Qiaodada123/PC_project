(function($){
	$(function(){
		$(".intro_app dl dd ").hide();
		$(".intro_app dl  ").on("mouseenter",function(){
			$(".intro_app dl dd").show();
		}).on("mouseleave",function(){
			$(".intro_app dl dd").hide();
		})
	var id;
	var str = decodeURIComponent(window.location.search);
	if(str.indexOf("?")!=-1&&str.indexOf("=")!=-1){
    	var str1=str.split("?")[1].split("=");
    	id=str1[1];//5
	}
	//动态创建元素
	function add2(obj,div){
		$.each(obj, function(key,val) {
			if(val.id==id){
				var par=div;
				var img1=$("<img src='"+val.src11+"' class='middleImg show' />");
				var img2=$("<img src='"+val.src21+"' class='middleImg ' />");
				var img3=$("<img src='"+val.src31+"' class='middleImg ' />");
				var img4=$("<img src='"+val.src41+"' class='middleImg ' />");
				var img5=$("<img src='"+val.src51+"' class='middleImg ' />");
				var div1=$("<div id='middleArea'></div>");
				par.append(img1).append(img2).append(img3).append(img4).append(img5).append(div1);
			}
		});
		
	}
	function add3(obj,div){
		$.each(obj, function(key,val) {
			if(val.id==id){
				var par=div;
				var img1=$("<img src='"+val.src11+"' class='bigImg show' />");
				var img2=$("<img src='"+val.src21+"' class='bigImg ' />");
				var img3=$("<img src='"+val.src31+"' class='bigImg ' />");
				var img4=$("<img src='"+val.src41+"' class='bigImg ' />");
				var img5=$("<img src='"+val.src51+"' class='bigImg ' />");
				par.append(img1).append(img2).append(img3).append(img4).append(img5);
			}
		});
		
	}
	function add4(obj,dd){
		$.each(obj, function(key,val) {
			if(val.id==id){
				var par=dd;
				var a1=$("<a href='javascript:void(0)'  class='on'><img id='PicSmall_0' src='"+val.src1+"'  class='smallImg'></a>");
				var a2=$("<a href='javascript:void(0)'  ><img id='PicSmall_0' src='"+val.src2+"'  class='smallImg'></a>");
				var a3=$("<a href='javascript:void(0)'  ><img id='PicSmall_0' src='"+val.src3+"'  class='smallImg'></a>");
				var a4=$("<a href='javascript:void(0)'  ><img id='PicSmall_0' src='"+val.src4+"'  class='smallImg'></a>");
				var a5=$("<a href='javascript:void(0)'  ><img id='PicSmall_0' src='"+val.src5+"'  class='smallImg'></a>");
				var a6=$("<a href='javascript:void(0)'  ><img id='PicSmall_0' src='"+val.src1+"'  class='smallImg'></a>");
				par.append(a1);
				par.append(a2);
				par.append(a3);
				par.append(a4);
				par.append(a5);
				par.append(a5);
				par.append(a5);
				
			}
		});
		
	}
	function add5(obj,h1,p1){
		$.each(obj, function(key,val) {
			if(val.id==id){
				var par=h1;
				var par2=p1;
				var h11=h1.text(val.title);
				var p11=p1.text(val.price1)
				par.append(h11);
				par2.append(p11);
				//浏览记录
//				var par3=dd;
//				var d101=$("<dd></dd>");
//				var p101=$("<p class='pic'><a href='javascript:void(0)'><img src='"+val.src1+"'></a></p>");
//				var p201=$("<p class='name'><a href='javascript:void(0)'>"+val.title+"</a></p>");
//				var p301=$("<p class='price'>&nbsp;"+val.price1+"</p>");
//				d101.append(p101);
//				d101.append(p201);
//				d101.append(p301);
//				par3.append(d101)
			}
		});
		
	}
	
	$.ajax({
	    	"url":"../json/index.json",
			 success:function(res){
			 	$.each(res, function(index,val) {
			 		add2(val,$("#showjq"));
			 		add3(val,$(".bigArea"));
			 		add4(val,$("#smallPic"));
			 		add5(val,$(".intro_name h1"),$(".price"));
			 	});
			 	
				//放大镜
				var bigArea =$(".bigArea");//大区域                     500*500        1
				var bigImg = $(".bigImg");//大图                           1000*1000      6
			    var middleImg =$(".middleImg")//小图                  500*500        6
			    var middleArea =$("#middleArea");//小区域 ---要算                            1
			    //鼠标移到最小图
			    $("#smallPic a").on("mouseenter",function(){
					var index=$(this).index();
					$(this).addClass("on").siblings("a").removeClass("on");
					middleImg.eq(index).addClass("show").siblings().removeClass("show");
					bigImg.eq(index).addClass("show").siblings().removeClass("show");
				})
				//小区域完成等比
				var scale=bigImg.width()/middleImg.eq(0).width();
				
				var h=$(".bigArea").height()*middleImg.eq(0).height()/bigImg.eq(0).height();
				var w=$(".bigArea").width()*middleImg.eq(0).width()/bigImg.eq(0).width()
				middleArea.css({"height":h,"width":w});
				//移到小图(中间区域)
				$("#showjq").on("mousemove",function(evt){
					$(".bigArea").addClass("show");
					middleArea.addClass("show");
					var x=evt.pageX-$("#showjq").offset().left-middleArea.width()/2;
					var y=evt.pageY-$("#showjq").offset().top-middleArea.height()/2;
					if(x<0){
						x=0
					}
					if(y<0){
						y=0
					}
					if(x>($(this).width()-middleArea.width())){
						x=$(this).width()-middleArea.width()
					}
					if(y>($(this).height()-middleArea.height())){
						y=$(this).height()-middleArea.height()
					}
					
					middleArea.css({"left":x,"top":y})
					bigImg.css({"left":-scale*x,"top":-scale*y})
					
				}).on("mouseleave",function(){
					$(".bigArea").removeClass("show");
					middleArea.removeClass("show");
				})
				//放大镜end
			 	//清空浏览记录
			 	$(".del").on("click",function(){
			 		$(this).parent().siblings("dd").remove();
			 		console.log(111)
			 	})
			 	
	}//成功的回调函数
})//ajax()
	
	
//tab切换
var heigh=$("#good15_detail").offset().top
$(window).on("scroll",function(){
	var top=$(this).scrollTop();
	if(top>heigh){
		$("#good15_detail").css("position","fixed");
		$("#good15_detail").css("top",0)
	}else{
		$("#good15_detail").css("position","");
	}
})
 var he1=$(".dt1").offset().top;
 var he2=$("#header").height()+$(".path15").height()+$("#_ProductDetails").height()+$(".good15_compose").height()+$(".good15_detail").height()+13049;

$("#navList em ").on("click",function(){
	var index=$(this).index();
	$(this).find("a").addClass("on").end().siblings().find("a").removeClass("on")
	if(index==0){
		$("body").animate({"scrollTop":he1});  
	}
	if(index==1){
		$("body").animate({"scrollTop":he2});  
	}
	
})

})//入口函数
})(jQuery)
