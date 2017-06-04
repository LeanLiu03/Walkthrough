sap.ui.define( [ "sap/ui/core/mvc/Controller" ], function ( Controller ) {
	"use strict";
	return Controller.extend( "lean.study.walkthrough.View.Detail", {
		onInit: function () {
			var oController = this.getView().getController();
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			
			// Initialize the page setting
			var pgeDetail = this.getView().byId( "pgeDetail" );

			// Check pgeDetail is bound.
			if ( !pgeDetail ) {
				return;
			}

			pgeDetail.applySettings( {
				title: "{i18n>detailPageTitle}",
				content: new sap.m.ObjectHeader({
					intro: "{invoice>ShipperName}",
					title:"{invoice>ProductName}"
				})
// ObjectHeader: {
// intro: "{Invoice>ShipperName}",
// title:"{Invoice>ProductName}",
// }
			} );
			
			
			oRouter.getRoute("detail").attachPatternMatched(oController.onOjbectMatched,this);
			
		},
		onOjbectMatched(oEvent){
			this.getView().bindElement({
				path:"/" + oEvent.getParameter("arguments").invoicePath,
				model:"invoice"
			})
		}
	} )

} )
