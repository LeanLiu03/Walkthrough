sap.ui.define([ "sap/ui/base/Object" ], function(UI5Object) {
	return UI5Object.extend("lean.study.walkthrough.Dialog_Handler", {
		constructor : function(oView) {
			this._oView = oView;
		},

		 open: function() {
			var oView = this._oView;
			var dlg_Object = oView.byId("dlg_HelloDialog");
			if (!dlg_Object) {
				dlg_Object = sap.ui.xmlfragment(oView.getId(),"lean.study.walkthrough.HelloWorld.HelloDialog",this);
				oView.addDependent(dlg_Object);
			}
			dlg_Object.open();
		},
		onCloseDialog:function(){
			var oView = this._oView;
			oView.byId("dlg_HelloDialog").close();
		}

	});
})