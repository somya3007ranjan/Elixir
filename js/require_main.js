console.log("From require main app  - start22");

requirejs.config({
    baseUrl: "/Elixir/js",
    paths: {
        backbone: "vendor/backbone",
        "backbone.picky": "vendor/backbone.picky",
        baseItemView:"apps/config/mixins/baseItemView",
        jquery: "vendor/jquery",
        "jquery-ui": "vendor/jquery-ui",    
        json2: "vendor/json2",
        marionette: "vendor/backbone.marionette",
        tpl: "vendor/tpl",
        underscore: "vendor/underscore",       
        "backbone.nested":"vendor/backbone.nested",
        epoxy:"vendor/backbone.epoxy",
        bootstrap:"plugins/bootstrap/js/bootstrap",
        bootbox: "vendor/bootbox",
        revolution : "plugins/revolution_slider/rs-plugin/js/jquery.themepunch.revolution.min",
        revolutionTheme:"plugins/revolution_slider/rs-plugin/js/jquery.themepunch.plugins.min",
        bxSlider:"vendor/jquery.bxslider",
        datepicker:"vendor/bootstrap-datetimepicker",
        maskedinput:"vendor/jquery.maskedinput.min",
        list:"vendor/list",
        custombox:"vendor/custombox",
		hashids:"vendor/hashids"
    },

    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["jquery", "underscore", "json2"],
            exports: "Backbone"
        },
        marionette: {
            deps: ["backbone"],
            exports: "Marionette"
        },
        revolutionTheme:["jquery"],
        revolution:["revolutionTheme"],
        bxSlider:["jquery"],
        bootstrap: {
            deps: ["jquery"],
            exports: "Bootstrap"
        },
        "backbone.picky": ["backbone"],
        "backbone.nested": ["backbone"],
         epoxy:{
             deps:["backbone","backbone.nested"],
             exports:"Epoxy"
         },
        bootbox :{
            deps: ["jquery","bootstrap"],
            exports: "Bootbox"
        },
        datepicker :{
            deps: ["jquery","bootstrap"],
            exports: "datepicker"
        },
        "jquery-ui": ["jquery"],
        maskedinput:{
             deps: ["jquery"],
            exports: "maskedinput"
        }
        
    }
});

require(["app"], function (App) {
	//alert('Require main js file');
    //common.closeLoader();
	console.log("From require main app - inside");
    App.start();
    /*deviceStart.start();   
    amhiNotification();
    amhiDb.start(common);*/
});
