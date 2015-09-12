define(["app","baseItemView", "tpl!apps/newLogin/templates/newLogin.tpl","apps/commonJS","vendor/bootstrap","vendor/bootbox"],
        function(App, baseItemView, newLoginTpl,common,Bootstrap,Bootbox){
  App.module("newLoginApp.View", function(View, App, Backbone, Marionette, $, _,revolutionTheme,revolution){
  
	View.newLogin = baseItemView.extend({
        template: newLoginTpl,
        events:{
            "click #btn-login"  :   "buttonLogin"
        },
        buttonLogin:function(){
        	
        	/*var username= $("#login-username").val();
        	var password= $("#login-password").val();
			alert (username + "  "+ password);
			var usernameinput=JSON.stringify(this.model);
			alert(usernameinput);
            var url = "http://172.16.195.30:8080/WebPortal-EDMPORTAL/login"
        	$.ajax({
             	url: url ,
             	type: 'POST',
             	data: {'usernameinput':usernameinput},
				datatype:'json',
             	success: function(data){
             		alert('Successfull Yipeeeeee!!!');
    					alert(data.sessionToken);
    					if (data.sessionToken != null)
						{
							require(["apps/landingPage/landingPage_app"], function () {
								//App.model.userID =data.firstname1+ " "+ data.middlename1+ " "+data.lastname1;
								//App.model.agentData=data;
								App.execute("landingPage:show");
								App.navigate("landingPage");
							});	*/
						/*}
						else
						{
							alert (data.responseText);
						}
             	}
             	});*/
        },
        onShow : function(){
        	console.log("newLogin - 10");
        	alert("on show Done!!");
        }
        
    });
  });
return App.newLoginApp.View;
});

