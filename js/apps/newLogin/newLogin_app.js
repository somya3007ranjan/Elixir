define(["app", "apps/newLogin/newLogin_controller","apps/commonJS"], function(App, newLoginController,common){
  App.module("newLoginApp", function(newLoginApp, App, Backbone, Marionette, $, _){
    var API = {
      shownewLogin: function(){
    	  console.log("newLogin - 1");
        newLoginController.shownewLogin();
        console.log("newLogin - 2");
      }
    };
    newLoginApp.on("start", function () {
    	console.log("newLogin - 3");
	    API.shownewLogin();
	    console.log("newLogin - 4");
    });
  });
  App.commands.setHandler("newLogin:show", function(){
	  console.log("newLogin - 5");
        common.showHeader();
		newLoginController.shownewLogin();
		console.log("newLogin - 6");
    }); 
  return App.newLoginApp;
});
