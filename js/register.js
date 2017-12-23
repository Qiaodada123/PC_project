$(function(){
	
	$.idcode.setCode();
	var arr=[/^1(3[0-9]|5[0-9]|7[0-9]|8[0-9])\d{8}$/,null,/^[a-zA-Z]\w{7,15}/,null];
	var arr1=["请输入手机号","请输入验证码!","密码须为8-16位的字母与数字组合!","请输入确认密码!"];
	var arr2=["手机号码格式不正确，请重新输入！","验证码输入错误,请重新输入!","密码须为8-16位的字母与数字组合!","请重新输入确认密码!"];
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
				}
				else if(index==1){
					var IsBy = $.idcode.validateCode();
					if(IsBy){
						flag=true;
						$(ele).siblings(".prompt").html("")
					}else{
						$(ele).siblings(".prompt").html(arr2[index]);
						flag=false;
					}
				}else if(index==2){
					if(arr[2].test($(ele).val())){
						flag=true;
						$(ele).siblings(".prompt").html("")
					}else{
						$(ele).siblings(".prompt").html(arr2[index]);
						flag=false;
					}
				}else if(index==3){
					if($(ele).val()==oninput.eq(2).val()){
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
	
	
	$(".btn").on("click",function(){
	if(flag==true){
		$.ajax({
			//url:"../../hz1706/day01/benlai/register.php",
			url:"http://localhost/hz1706/day01/benlai/register.php",
			type:"post",
			async:true,
			data:$("#myform").serialize(),
			//数据请求之前
			beforeSend:function(){
				console.log($("#myform").serialize())
			},
			//数据请求完成之后
			complete:function(){
				
			}
		}).then(function(res){
			var a=JSON.parse(res);
			window.location.href="login.html"
			console.log(a.msg);
		},function(res){
			var a=JSON.parse(res)
			console.log(a.msg);
		});	
	}
	
	})
})