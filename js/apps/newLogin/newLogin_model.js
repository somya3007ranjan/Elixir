define([ "app", "epoxy", "backbone.picky" ], function(App) {
	// var menu={};

	var newLoginModel = Backbone.Epoxy.Model.extend({
		
		defaults : {

		},
		// Add validations here...as well....
		model : {
			agent : Backbone.Model.extend({})
		}
	});

	return newLoginModel;

});