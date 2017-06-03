sap.ui.define([ "../Component", "sap/ui/model/json/JSONModel", "sap/ui/model/resource/ResourceModel","./Dialog_Handler" ],
		function(Component, JSONModel, ResourceModel,Dialog_Handler) {
			return Component.extend("lean.study.walkthrough.Component", {
				init : function() {
					Component.prototype.init.apply(this, arguments);
					var oData = {
						recipient : {
							name : "World"
						}
					};
					var oModel = new JSONModel(oData);
					this.setModel(oModel);
					
					this._DialogHelper = new Dialog_Handler(this.getRootControl());
					
					// Set i18n model
					// var i18nModel = new ResourceModel({
					// bundleName:"lean.study. alkthrough.I18N.i18n"
					// });
					// this.setModel(i18nModel,"i18n");
				},
				openDialog:function(){
					this._DialogHelper.open();
				}

			})
		});