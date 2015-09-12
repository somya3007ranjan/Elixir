define(["marionette"], function (Marionette) {
    var App = new Marionette.Application();
	/*Added regions on Application*/
    App.addRegions({
        //for product page
        headerRegion: "#header-Region",
        mainRegion: "#main-Region",
        footerRegion: "#footer-Region"

    });

    App.navigate = function (route, options) {
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    App.getCurrentRoute = function () {
        return Backbone.history.fragment
    };

    var GalleryRouter = Backbone.Router.extend({
        routes: {

            '': function () {
            	console.log("From app js default-12345");
            	require(["apps/newLogin/newLogin_app"], function (){
                    App.execute("newLogin:show");
				});
            }
        }
    });
    var appRouter = new GalleryRouter();
    Backbone.history.start(
        /*{pushState: true;}*/
                          );



    App.startSubApp = function (appName, args) {
        var currentApp = appName ? App.module(appName) : null;
        if (App.currentApp === currentApp) { return; }

        if (App.currentApp) {
            App.currentApp.stop();
        }

        App.currentApp = currentApp;
        if (currentApp) {
            currentApp.start(args);
        }
    };
    
    App.dateFormat=function(currdate){
        var dateStr="";
        if(currdate!=null){
            var date = new Date(currdate);
            var curr_date = date.getDate();
            var curr_month = date.getMonth() + 1;
            var curr_year = date.getFullYear();
            dateStr = curr_date + "-" + curr_month + "-" + curr_year;
        }
        return dateStr;
    };

    App.model = {
        agent : null,// This variable for to get entire detail of Agent
        offlineDetails : null,
		selectedNotification:null,
        selectedNotificationDetail:null,
        selectedProduct: null,
        proposal:{},
        userID : null,//This varibable for to identify whether this is customer or Agent
    };
    
    App.on("initialize:after", function () {
    	alert('app initialize after fun');
        /*if (Backbone.history) {
            require(["apps/header/header_app", "apps/footer/footer_app","apps/login/login_app"], function (Header,Footer,Main) {
                Header.start();
                //Footer.start();
				//Main.start();
            });
        }*/
    });

    return App;
});
