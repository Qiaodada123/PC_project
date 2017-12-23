
$(function(){
	//获取cookie
	var phoneNumber;
	var obj=$.cookie("mylogin");
	if(obj){
		var obj1=JSON.parse(obj)
		$("#phoneTxt").val(obj1.phoneNumber);
		$("#passTxt").val(obj1.userPwd);
		phoneNumber=obj1.phoneNumber;
	}
	var arr=[/^1(3[0-9]|5[0-9]|7[0-9]|8[0-9])\d{8}$/,/^[a-zA-Z]\w{7,15}/];
	var arr1=["请输入手机号","请输入密码!"];
	var arr2=["手机号码格式不正确，请重新输入！","密码至少6位，最多16位!"];
	var flag;
	var oninput=$("#myform .register_box").find("input");
	$.each(oninput,function(index,ele){
		$(ele).on("blur",function(){
			if((!$(this).val())){
			    $(this).siblings(".prompt").html(arr1[index]);
				flag=false;
			}else{
				if(index==0){
					if(arr[0].test($(ele).val())){
						flag=true;
						$(ele).siblings(".prompt").html("")
					}else{
						$(ele).siblings(".prompt").html(arr2[index]);
					}
				}else if(index==1){
					if($(ele).val().length>=8&&$(ele).val().length<=16){
						flag=true;
						$(ele).siblings(".prompt").html("")
					}else{
						$(ele).siblings(".prompt").html(arr2[index]);
						flag=false;
					}
				}
				
			}
			
		})
	})
	
	
	$(".loginbtn").on("click",function(){
		if(flag==true){
			$.ajax({
				//url:"../../hz1706/day01/benlai/login.php",
				url:"http://localhost/hz1706/day01/benlai/login.php",
				type:"post",
				async:true,
				data:$("#myform").serialize(),
				//数据请求之前
				beforeSend:function(){
				},
				//数据请求完成之后
				complete:function(){
					
				}
			}).then(function(res){
				console.log(JSON.parse(res).msg);
			},function(res){
				console.log(JSON.parse(res).msg);
			});	
		}
		
		//字符串转对象分封装
		$.toObj=function(str){
		var obj={};
		if(str.indexOf("&")!=-1){
			//多条
		var arr=str.split("&");
			for(var i=0;i<arr.length;i++){
				var arr2=arr[i].split("=");
				obj[arr2[0]]=arr2[1];
			}
		}else{
			//单条
			if(str.indexOf("=")!=-1){
				var arr=str.split("=");
				obj[arr2[0]]=arr2[1];
			}
		}
			return obj;
		}
		//七天免登陆模块
		//写入cookie
		var str=$("#myform").serialize();
		$.cookie("mylogin",JSON.stringify($.toObj(str)),{expires:7});
		window.location.href="index.html?phoneNumber="+phoneNumber;
	})
	
	
	
})