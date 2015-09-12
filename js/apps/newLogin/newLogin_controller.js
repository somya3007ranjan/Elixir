define(["app", "apps/newLogin/newLogin_view","apps/newLogin/newLogin_model","apps/commonJS"], function(App, View, Model,common){
  App.module("newLoginApp", function(newLoginApp, App, Backbone, Marionette, $, _){
    newLoginApp.Controller = {
	  shownewLogin: function(){
		  console.log("newLogin - 77");
        var tplData={};
        var view = new View.newLogin({
            model: new Model(tplData)
        });
        App.mainRegion.show(view);
        App.navigate("newLogin");
        console.log("newLogin - 88");
      }
    };
  });

  return App.newLoginApp.Controller;
});
