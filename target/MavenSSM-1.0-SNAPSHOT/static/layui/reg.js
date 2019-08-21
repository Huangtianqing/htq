    layui.use(['form','jquery','layer'], function () {
        var form   = layui.form;
        var $      = layui.jquery;
        var layer  = layui.layer;
        //添加表单失焦事件
        //验证表单
        $('#user').blur(function() {
            var user = $(this).val();
            if(user==""){
    			alert("用户名不能为空！");
    			return;
    		}
            
            $.ajax({
                url:'/FilesShare/reg/regvoip!userexists',
                type:'post',
                dataType:'text',
                data:{'user':user},
                //验证用户名是否可用
                success:function(data){
                	var ob=eval('('+data+')');
                	alert(ob.remsg);
                }
                
            })

        });

        // 为密码添加正则验证
        $('#pwd').blur(function() {
                var reg = /^[\w]{6,12}$/;
                if(!($('#pwd').val().match(reg))){
                    //layer.msg('请输入合法密码');
                    $('#pwr').removeAttr('hidden');
                    $('#pri').attr('hidden','hidden');
                    layer.msg('请输入合法密码');
                }else {
                    $('#pri').removeAttr('hidden');
                    $('#pwr').attr('hidden','hidden');
                }
        });

        //验证两次密码是否一致
        $('#rpwd').blur(function() {
                if($('#pwd').val() != $('#rpwd').val()){
                    $('#rpwr').removeAttr('hidden');
                    $('#rpri').attr('hidden','hidden');
                    layer.msg('两次输入密码不一致!');
                }else {
                    $('#rpri').removeAttr('hidden');
                    $('#rpwr').attr('hidden','hidden');
                };
        });

//        //
//        //添加表单监听事件,提交注册信息
//        form.on('submit(sub)', function() {
//            $.ajax({
//                url:'reg.php',
//                type:'post',
//                dataType:'text',
//                data:{
//                    user:$('#user').val(),
//                    pwd:$('#pwd').val(),
//                },
//                success:function(data){
//                    if (data == 1) {
//                        layer.msg('注册成功');
//                    }else {
//                        layer.msg('注册失败');
//                    }
//                }
//            })
//            //防止页面跳转
//            return false;
//        });

    });