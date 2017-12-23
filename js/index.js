(function($) {
	$(function() {
		$(".head15_my").on("mouseenter", function() {
			$(".head15_my dl dd").css("display", "block")
		})
		$(".head15_my").on("mouseleave", function() {
			$(".head15_my dl dd").css("display", "none")
		})

		$(".head15_buy").on("mouseenter", function() {
			$(".head15_buy dl dd").css("display", "block")
		})
		$(".head15_buy").on("mouseleave", function() {
			$(".head15_buy dl dd").css("display", "none")
		})

		//轮播图
		var tempindex = 0;
		var time = setInterval(autoplay, 4000);

		function autoplay() {
			tempindex++;
			//console.log(tempindex)
			if(tempindex >= 6) {
				tempindex = 0;
			}
			$("#banner ul li").animate({
				"opacity": 0
			});
			$("#banner ul li").eq(tempindex).animate({
				"opacity": 1
			}, 1000);
			$("#banner ol>li").css({
				"backgroundColor": "#a2a293"
			});
			$("#banner ol>li").eq(tempindex).css({
				"backgroundColor": "#96bf17"
			});
		}
		//鼠标移入清除定时器
		$("#banner").on("mouseenter", function() {
			//	console.log($("#banner"))
			clearInterval(time);
		})
		$("#banner").on("mouseleave", function() {
			time = setInterval(autoplay, 2000);
		})
		//鼠标点击小图标
		var flag = true;
		if(flag) {
			$(".next").on("click", function() {
				tempindex++;

				if(tempindex >= 6) {
					tempindex = 0;
				}
				$("#banner ul li").animate({
					"opacity": 0
				}, 2000);
				$("#banner ul li").eq(tempindex).animate({
					"opacity": 1
				}, 2000, function() {
					flag = false;
				});
				$("#banner ol>li").css({
					"backgroundColor": "#a2a293"
				});
				$("#banner ol>li").eq(tempindex).css({
					"backgroundColor": "#96bf17"
				});
			})
		}
		if(flag) {
			$(".prev").on("click", function() {
				tempindex--;
				if(tempindex < 0) {
					tempindex = 5;
				}
				$("#banner ul li").animate({
					"opacity": 0
				}, 2000);
				$("#banner ul li").eq(tempindex).animate({
					"opacity": 1
				}, 2000, function() {
					flag = false;
				});
				$("#banner ol>li").css({
					"backgroundColor": "#a2a293"
				});
				$("#banner ol>li").eq(tempindex).css({
					"backgroundColor": "#96bf17"
				});
			})
		}

		//动态创建主体内容1
		function add(obj, ull) {
			$.each(obj, function(key, val) {
				//console.log(val)
				var par = ull;
				var li = $("<li id='hh'></li>");
				var div = $("<div class='box'></div>");
				var p1 = $("<p class='pic'><a href='javascript:void(0)'><img src='" + val.src + "' id='" + val.id + "' title='" + val.title + "' status='" + val.status + "' ></a></p>");
				var p2 = $("<p class='name'><a href='javascript:void(0)' ><font>" + val.text1 + "</font><span></span></a></p>");
				var p3 = $("<p class='price'>" + val.price1 + "<span>" + val.price2 + "</span></p>");
				var p4 = $("<p class='btn'><a class='ico00'></a></p>");
				div.append(p1).append(p2).append(p3).append(p4);
				li.append(div);
				par.append(li);
				//点击跳转
				//给img添加点击事件
				$(li).on("click", ".pic", function() {
					console.log(val.id)
					window.location.href = "list.html?id=" + val.id;
				})

			});
		}

		$.ajax({
			"url": "../json/index.json",
			success: function(res) {
				//			console.log(res)
				var uarr = [
					$(".index15_sku .u1"), $(".index15_sku .u2"), $(".index15_su  .u3"), $(".index15_sku2 .u4"),
					$(".index15_sku3 .u5"), $(".index15_sku3 .u6"), $(".index15_sku3 .u7"),
					$(".index15_sku4 .u8"), $(".index15_sku4 .u9"), $(".index15_sku4 .u10"), $(".index15_sku4 .u11"),
					$(".index15_sku5 .u12"), $(".index15_sku5 .u13"), $(".index15_sku5 .u14"),
					$(".index15_sku6 .u15"), $(".index15_sku6 .u16"), $(".index15_sku6 .u17"), $(".index15_sku6 .u18"), $(".index15_sku6 .u19"), $(".index15_sku6 .u20"), $(".index15_sku6 .u21"),
					$(".index15_sku7 .u22"), $(".index15_sku7 .u23"), $(".index15_sku7 .u24"), $(".index15_sku7 .u25"), $(".index15_sku7 .u26"),
					$(".index15_sku8 .u27"), $(".index15_sku8 .u28"), $(".index15_sku8 .u29"), $(".index15_sku8 .u30"), $(".index15_sku8 .u31"), $(".index15_sku8 .u32"), $(".index15_sku8 .u33"),
					$(".index15_sku9 .u34"), $(".index15_sku9 .u35"), $(".index15_sku9 .u36"), $(".index15_sku9 .u37"), $(".index15_sku9 .u38"), $(".index15_sku9 .u39"), $(".index15_sku9 .u40"),
					$(".index15_sku10 .u41"), $(".index15_sku10 .u42"), $(".index15_sku10 .u43"), $(".index15_sku10 .u44"), $(".index15_sku10 .u45"),
					$(".index15_sku11 .u46"), $(".index15_sku11 .u47"), $(".index15_sku11 .u48"), $(".index15_sku11 .u49"), $(".index15_sku11 .u50"), $(".index15_sku11 .u51"),
					$(".index15_sku12 .u52"), $(".index15_sku12 .u53"), $(".index15_sku12 .u54"), $(".index15_sku12 .u55"), $(".index15_sku12 .u56"), $(".index15_sku12 .u57"), $(".index15_sku12 .u58")
				];

				$.each(res, function(index, val) {
					//console.log(index,val)
					add(val, uarr[index])
				});

				var ul = $(".index15_sku").children("ul");
				$(".index15_tab dl a").on("mouseenter", function() {
					$(this).addClass("on").parent().siblings().find("a").removeClass("on");
				})
				$(".index15_tab dl a").on("mouseleave", function() {
					var temindex = $(this).index();
				})

				//中间部分   
				$(".index15_tab").children("dl").on("mouseenter", function() {
					var temindex = $(this).index();
					ul.eq(temindex).addClass("show").siblings("ul").removeClass("show");
				})
				$(".index15_tab").children("dl").on("mouseleave", function() {
					var temindex = $(this).index();
					//ul.eq(temindex).addClass("show");
				})

			}
		})

		//买手力荐
		var pathArr = [{
			"top": 31,
			"left": 229
		}, {
			"top": 20,
			"left": 423
		}, {
			"top": 47,
			"left": 615
		}, {
			"top": 23,
			"left": 804
		}, {
			"top": 37,
			"left": 1017
		}]
		$.each(pathArr, function(index, val) {
			$(".index15_path>dl>dd").eq(index).on("click", function() {
				$(this).find("a").addClass("on").end().siblings().find("a").removeClass("on")
				$(".index15_path>dl>dt").animate({
					"left": val.left,
					"top": val.top
				})
			})
		})

		//mani1-1鼠标移入
		$(".listtab").eq(0).find("dl").on("mouseenter", function() {
			var tempindex1 = $(this).index();
			$(this).find("a").addClass("on1").end().siblings().find("a").removeClass("on1");
			$(".index15_sku3").children("ul").eq(tempindex1).addClass("show").siblings().removeClass("show")
		})

		//mani1-2鼠标移入
		$(".listtab").eq(1).find("dl").on("mouseenter", function() {
			var tempindex1 = $(this).index();
			$(this).find("a").addClass("on1").end().siblings().find("a").removeClass("on1");
			$(".index15_sku4").children("ul").eq(tempindex1).addClass("show").siblings().removeClass("show")
		})

		//mani1-3鼠标移入
		$(".listtab").eq(2).find("dl").on("mouseenter", function() {
			var tempindex1 = $(this).index();
			$(this).find("a").addClass("on1").end().siblings().find("a").removeClass("on1");
			$(".index15_sku5").children("ul").eq(tempindex1).addClass("show").siblings().removeClass("show")
		})
		//mani1-4鼠标移入
		$(".listtab").eq(3).find("dl").on("mouseenter", function() {
			var tempindex1 = $(this).index();
			$(this).find("a").addClass("on1").end().siblings().find("a").removeClass("on1");
			$(".index15_sku6").children("ul").eq(tempindex1).addClass("show").siblings().removeClass("show")
		})
		//mani1-5鼠标移入
		$(".listtab").eq(4).find("dl").on("mouseenter", function() {
			var tempindex1 = $(this).index();
			$(this).find("a").addClass("on1").end().siblings().find("a").removeClass("on1");
			$(".index15_sku7").children("ul").eq(tempindex1).addClass("show").siblings().removeClass("show")
		})
		//mani1-6鼠标移入
		$(".listtab").eq(5).find("dl").on("mouseenter", function() {
			var tempindex1 = $(this).index();
			$(this).find("a").addClass("on1").end().siblings().find("a").removeClass("on1");
			$(".index15_sku8").children("ul").eq(tempindex1).addClass("show").siblings().removeClass("show")
		})
		//mani1-7鼠标移入
		$(".listtab").eq(6).find("dl").on("mouseenter", function() {
			var tempindex1 = $(this).index();
			$(this).find("a").addClass("on1").end().siblings().find("a").removeClass("on1");
			$(".index15_sku9").children("ul").eq(tempindex1).addClass("show").siblings().removeClass("show")
		})
		//mani1-8鼠标移入
		$(".listtab").eq(7).find("dl").on("mouseenter", function() {
			var tempindex1 = $(this).index();
			$(this).find("a").addClass("on1").end().siblings().find("a").removeClass("on1");
			$(".index15_sku10").children("ul").eq(tempindex1).addClass("show").siblings().removeClass("show")
		})
		//mani1-9鼠标移入
		$(".listtab").eq(8).find("dl").on("mouseenter", function() {
			var tempindex1 = $(this).index();
			$(this).find("a").addClass("on1").end().siblings().find("a").removeClass("on1");
			$(".index15_sku11").children("ul").eq(tempindex1).addClass("show").siblings().removeClass("show")
		})
		//mani1-10鼠标移入
		$(".listtab").eq(9).find("dl").on("mouseenter", function() {
			var tempindex1 = $(this).index();
			$(this).find("a").addClass("on1").end().siblings().find("a").removeClass("on1");
			$(".index15_sku12").children("ul").eq(tempindex1).addClass("show").siblings().removeClass("show")
		})

		//点击返回到顶部
		$(window).on("scroll", function() {
			if($(window).scrollTop() >= 255) {
				$("#go_top").css("display", "block");
			} else {
				$("#go_top").css("display", "none");
			}
		})

		$("#go_top").on("click", function() {
			$("body").animate({
				"scrollTop": 0
			});
		})

		//点击点击出现二维码
		var flag = true;
		$("#two_code").on("click", function() {
			if(flag) {
				$("#twocodeParent").css("display", "block");
				flag = false;
			} else {
				flag = true;
				$("#twocodeParent").css("display", "none");
			}
		})

		//左侧浮动
		$(window).on("scroll", function() {
			if($(this).scrollTop() >= 300) {
				$("#nav_left").css("display", "block");
			} else {
				$("#nav_left").css("display", "none");
			}
			var zlist = $("#nav_left a");
			var zmain = $(".main1");
			var eindex = parseInt(($(window).scrollTop() - 1400) / $(".main1").height());
			zlist.eq(eindex).css("background", "url(../images/rbg.png) -43px -42px no-repeat").siblings("a").css("background", "url(../images/rbg.png)  no-repeat");

			$.each(zlist, function(index, ele) {

				$(ele).on("mouseenter", function() {
					$(this).css("background", "url(../images/rbg.png) -43px -42px no-repeat").siblings("a").css("background", "url(../images/rbg.png)  no-repeat")
				})

				$(ele).on("click", function() {
					var tempindex1 = $(this).index();
					if($(ele).attr("class") == "ico99") {
						$(window).scrollTop(0)
					} else {
						//$("body").animate({"scrollTop":zmain.eq(tempindex1).offset().top});  
						$(window).scrollTop(zmain.eq(tempindex1).offset().top)
					}

				})
			})

		})
		var imgid; //图片的id
		var temp;
		var obj = {};
		var ke;
		
		
		//点击之前就读取一次cookie
		var sum=0;
		var stri=$.cookie("shopCart");
		if(stri!=undefined){
			var obji=JSON.parse(stri);
			$.each(obji,function(index,val){
				sum=sum+val.num
			})
		}
		$("#right_cart").text(sum);
		$("#HeaderCartCount").text(sum);


		//购物车
		var addnumber=0;
		$("body").on("click", ".btn", function() {
			sum=sum+1;
			$("#right_cart").text(sum);
			$("#HeaderCartCount").text(sum);
			imgid = parseInt($(this).siblings().find("img").attr("id"));
			$.ajax({
				"url": "../json/index.json",
				success: function(res) {
					addMyCart(res, imgid);
					//添加到cookie
					
				}

			});

				
			})

		function addMyCart(res, imgid) {
			//$.cookie()
			//console.log(res);
			var strList = $.cookie("shopCart");
			//console.log(strList == undefined)
			var saveArr = [];
			if(strList == undefined) {
				// 说明现在cookie是空的，空，说明没有数据，是第一次
				$.each(res, function(index, ele){
					$.each(ele, function(index2, ele2){
						if(ele2["id"] == imgid) {
							ele2["num"] = 1;
							saveArr.push(ele2); // [{},{},{}];
							$.cookie("shopCart", JSON.stringify(saveArr))
							//break;
						}
					});
				});

			}else{
				//非空
				var tempArr = JSON.parse(strList); // [{},{}]
				var flag = true;
				for(var i = 0; i < tempArr.length; i++) {
					if(tempArr[i]["id"] == imgid) {
						tempArr[i]["num"] += parseInt(tempArr[i]["num"]);
						//break;
						flag = false;
						$.cookie("shopCart", JSON.stringify(tempArr))
						break;
					}
				}
				if(flag) {
					//cookie中没有 当前重复的
					$.each(res, function(index, ele) {
						$.each(ele, function(index2, ele2) {
							if(ele2["id"] == imgid) {
								ele2["num"] = 1;
								tempArr.push(ele2); // [{},{},{}];
								$.cookie("shopCart", JSON.stringify(tempArr))
								//break;
							}
						});
					});

				}
			}

		}
		//添加cookie结束
		
		
		
		//点击跳转到购物车页面
		$(".cart_buy").on("click",function(){
			window.location.href="shopCart.html"
		})
		$(".head15_buy").on("click",function(){
			window.location.href="shopCart.html"
		})
		
		var str=$.cookie("mylogin");
		if(str!=undefined){
			var obj=JSON.parse(str);
			$(".a1 p").text("您好,");
			$(".a1").siblings("a").remove();
			$(".a1 em").text(obj.phoneNumber);
			$(".login").css("width",120)
		}else{
			$(".a1>em").remove();
		}
		
		
		//登录对应账号
		$(".login").on("mouseenter",function(){
			$(".ddd").css("display","block")
		}).on("mouseleave",function(){
			$(".ddd").css("display","none")
		})
		$('.out').on("click",function(){
			$.removeCookie("mylogin");
		})
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

	})
})(jQuery)