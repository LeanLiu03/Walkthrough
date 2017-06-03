sap.ui.define( [ "sap/ui/base/Object" ], function ( Object ) {
	"use strict";

	// var oResourceBundle = this.getView().getModel( "i18n" ).getReousrceBundel();
	return Object.extend( "lean.study.walkthrough.Model.Formatter", {
		constructor: function ( oController ) {
			if ( oController ) {
				this.Controller = oController;
			}
		},
		statusText: function ( sStatus ) {
			var oResourceBundle = this.Controller.getView().getModel( "i18n" ).getResourceBundle();
			switch (sStatus) {
			case "A":
				return oResourceBundle.getText( "invoiceStatusA" );
				break;
			case "B":
				return oResourceBundle.getText( "invoiceStatusB" );
				break;
			case "C":
				return oResourceBundle.getText( "invoiceStatusC" );
				break;
			default:
				return sStatus;
			}
		}
	} );
	// statusText = function ( sStatus, oController ) {
	// var oResourceBundle = oController.getView().getModel( "i18n" ).getResourceBundle();
	// switch (sStatus) {
	// case "A":
	// return oResourceBundle.getText( "invoiceStatusA" );
	// break;
	// case "B":
	// return oResourceBundle.getText( "invoiceStatusB" );
	// break;
	// case "C":
	// return oResourceBundle.getText( "invoiceStatusC" );
	// break;
	// default:
	// return sStatus;
	// }
	// }

} );