(function($){
	$(function(){
		//点击跳转到登录页面
		$(".jp").on("click",function(){
			window.location.href="login.html";
		})
		//动态添加元素1
		function addEle(obj, ull) {
			var ji=obj.num*obj.price2;
			var par = ull;
			var li = $("<li></li>");
			var div1 = $("<div class='check'><input type='checkbox' checked='checked''></div>");
			var div2=$("<div class='pic'><a href='list.html'><img src='"+obj.src1+"'></a></div>");
			var div3=$("<div class='name'><a href='list.html'>"+obj.title+"</a></div>")
			var div4=$("<div class='price'>"+obj.price2+"</div>");
			var div5=$("<div class='c_quantity'></div>");
			var p1=$("<p class='p1'><a  href='javascript:void(0)'><img src='../images/dey_03.gif' width='15' height='15' class='reduce'></a></p>");
			var p2=$("<p class='mt0'><input   type='text' class='textgt_n' value='"+obj.num+"' maxlength='3'></p>");
			var p3=$("<p class='p2'><a href='javascript:void(0)'><img src='../images/dey_04.gif' width='15' height='15' class='add'></a></p>");
			var div6=$("<div class='subtotal clear'>"+ji+"</div>");
			var div7=$("<div class='distribution'>"+obj.status+"</div>");
			var div8=$("<div class='operating'><a href='javascript:void(0)'>收藏</a><br><a class='mt5'  href='javascript:void(0)'>删除</a></div>");
			div5.append(p1);
			div5.append(p2);
			div5.append(p3);
			li.append(div1);
			li.append(div2);
			li.append(div3);
			li.append(div4);
			li.append(div5);
			li.append(div6);
			li.append(div7);
			li.append(div8);
			par.append(li);
		}
		//动态添加元素2
		function addEle2(arr,div){
			var num=0;
			var allprice=0;
			$.each(arr,function(index,val){
				console.log(val)
				num=num+parseInt(val.num);
				allprice=allprice+(parseInt(val.price2)*(val.num));
			})
			var par=div;
			var div1=$("<div class='del_all'></div>");
			var div2=$("<div class='details'><span>商品金额：<font>"+allprice+"</font>元</span></div>");
			var div3=$("<div class='all_price'>已选择"+ num+" 件商品，金额 = <span>"+allprice+"</span></div>");
			var div4=$("<div class='butn'><input type='button' class='fr butn19' data-type='Pay' title='去结算'><a class='continue' href='index.html'>继续购物</a></div>");
			var div11=$("<div class='check'><input type='checkbox' name='proselectall' boxtype='a' checked='checked'></div> ");
			var a1=$("<a href='javascript:void(0)'  id='selectall' class='select'>全选</a>");
			var a2=$("<a href='javascript:void(0)'  class='delete'><img src='../images/dele.gif' width='13' height='15'></a>");
			div1.append(div11);
			div1.append(a1);
			div1.append(a2);
			par.append(div1).append(div2).append(div3).append(div4);
		}
		
		
		
		//获取cookie
		var tempArr=$.cookie("shopCart");
		var saveArr;
		if(tempArr!=undefined){
			saveArr=JSON.parse(tempArr);
			for(var i=0;i<saveArr.length;i++){
				addEle(saveArr[i],$(".shop_car"));
			}
			addEle2(saveArr,$(".hzcart"));
			
		}
		console.log(saveArr)
		//增加操作
		var add=$(".add");
		var price=$(".price");
		var sub=$(".subtotal");
		
		
		$.each(add, function(index,val) {
			add.eq(index).on("click",function(){
				var picNow=0;
				var allPrice=0;
				var v1=parseInt(inp.eq(index).val());//获取input框里的值
				inp.eq(index).val(v1+1);//设置input里面的值
				var v2=parseInt(inp.eq(index).val())
				var p1=parseInt(price.eq(index).html());//获取price的值
				sub.eq(index).html(p1*v2);
				//鼠标点击获取每个input框里 的值
				for(var i=0;i<inp.length;i++){
					picNow=picNow+parseInt(inp.eq(i).val());
					console.log(picNow)
				}
				console.log(picNow)
				//鼠标点击获取每个小计
				for(var i=0;i<sub.length;i++){
					allPrice=allPrice+parseInt(sub.eq(i).text());
					//console.log(allPrice)
				}
				//设置总价
				$(".all_price").html("已选择 "+picNow+"件商品，金额 =<span>"+allPrice+"</span>");
				$("#right_cart").text(picNow);
				//设置商品金额
				$(".details span").html("商品金额：<font>"+allPrice+"</font>元")
				$.each(saveArr,function(index2,val) {
					if(index==index2){
						val.num+=1;
						$.cookie("shopCart",JSON.stringify(saveArr))
					}
				});
				
			})
		})
		//增加操作  

		//减操作
		var reduce=$(".reduce");
		var inp=$(".textgt_n");
		$.each(reduce, function(index,val) {
			reduce.eq(index).on("click",function(){
				var picNow=0;
				var allPrice=0;
				var v1=parseInt(inp.eq(index).val());//获取input框里的值
				inp.eq(index).val(v1-1);//设置input里面的值
				var v2=parseInt(inp.eq(index).val())
				var p1=parseInt(price.eq(index).html());//获取price的值
				sub.eq(index).html(p1*v2)
				//鼠标点击获取每个input框里 的值
				for(var i=0;i<inp.length;i++){
					picNow=picNow+parseInt(inp.eq(i).val());
					console.log(picNow)
				}
				//鼠标点击获取每个小计
				for(var i=0;i<sub.length;i++){
					allPrice=allPrice+parseInt(sub.eq(i).text());
					//console.log(picNow)
				}
				//设置总价
				$(".all_price").html("已选择 "+picNow+"件商品，金额 =<span>"+allPrice+"</span>")
				$("#right_cart").text(picNow);
				//设置商品金额
				$(".details span").html("商品金额：<font>"+allPrice+"</font>元")
				if(parseInt(inp.eq(index).val())==0){
					if(confirm("您确定要删除该商品码？")){
						$(this).parents("li").remove();
					}
					$.each(saveArr, function(index2,val) {
						if(index==index2){
							saveArr.splice(index2,1);
						}
						$.cookie("shopCart",JSON.stringify(saveArr))
					});
				}else{
					$.each(saveArr,function(index2,val) {
					if(index==index2){
						val.num-=1;
						$.cookie("shopCart",JSON.stringify(saveArr))
					}
				});
					
				}
			})
		});
		//减操作
		
		//点击删除当前操作
		var delAll=$(".mt5");
		$.each(delAll,function(index,val){
			delAll.eq(index).on("click",function(){
				var picNow=0;
				var allPrice=0;
				if(confirm("您确定要删除该商品码？")){
					$(this).parents("li").remove();
				}
				//遍历每一个商品，把值重新赋给下面的模块
				//鼠标点击获取每个input框里 的值
				var newinp=$(".textgt_n")
				for(var i=0;i<newinp.length;i++){
					picNow=picNow+parseInt(newinp.eq(i).val());
					console.log(picNow)
				}
				//鼠标点击获取每个小计
				var newsub=$(".subtotal");
				for(var i=0;i<newsub.length;i++){
					allPrice=allPrice+parseInt(newsub.eq(i).text());
					console.log(allPrice)
				}
				//设置总价
				$(".all_price").html("已选择 "+picNow+"件商品，金额 =<span>"+allPrice+"</span>")
				$("#right_cart").text(picNow);
				//设置商品金额
				$(".details span").html("商品金额：<font>"+allPrice+"</font>元");
				$.each(saveArr, function(index2,val) {
					if(index==index2){
						saveArr.splice(index2,1);
					}
					$.cookie("shopCart",JSON.stringify(saveArr))
				});
			})
		})
		//点击删除当前
		
//		//点击删除全部操作
//		var del=$(".delete");
//		$.each(del,function(index,val){
//			del.eq(index).on("click",function(){
//				if(confirm("您确定要删除该商品码？")){
//					$(this).parents("#min_all").remove();
//					//删除其他内容，让购物车图片显示出来
//					$(".cart_n").remove();
//					$(".cart_n ccar").remove();
//					$(".del_all").remove();
//					$(".details").remove();
//					$(".all_price").remove();
//					$(".butn").remove();
//					$("#CartTotalamt").remove();
//					console.log($(".cart_none"));
//					$(".cart_none").css("display","block")
//				}
//				$.each(saveArr, function(index2,val) {
//					if(index==index2){
//						saveArr.splice(0,saveArr.length);
//					}
//					$.cookie("shopCart",JSON.stringify(saveArr))
//				});
//				
//			})
//		})
//		//点击删除全部


//点击删除全部操作
		var del=$(".delete");
		$.each(del,function(index,val){
			del.eq(index).on("click",function(){
				if(confirm("您确定要删除全部商品码？")){
					console.log($(this))
					//删除其他内容，让购物车图片显示出来
					$(".cart_n").remove();
					$('.hzcart').remove();
					$(".cart_n ccar").remove();
					//$(".del_all").remove();
					$(".details").remove();
					$(".all_price").remove();
					$(".butn").remove();
					$("#CartTotalamt").remove();
					
					$.each(saveArr, function(index2,val) {
					if(index==index2){
						saveArr.splice(0,saveArr.length);
					}
					$.cookie("shopCart",JSON.stringify(saveArr));
					if(saveArr.length==0){
						$(".cart_none").css("display","block")
					}else{
						$(".cart_none").css("display","none")
					}
				});
				$("#right_cart").text(0);
			  }
				
				
			})
		})
		//点击删除全部
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	})
})(jQuery)





		
		
		
		
		
		
		
		
		
		
	
		