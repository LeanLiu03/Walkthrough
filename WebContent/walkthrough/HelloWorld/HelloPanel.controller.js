sap.ui.define( [ "sap/ui/core/mvc/Controller", "sap/m/MessageToast" ], function ( Controller,
		MessageToast ) {
	"use strict";
	return Controller.extend( "lean.study.walkthrough.HelloWorld.HelloPanel", {
		onInit: function () {
			var oController = this.getView().getController();
			var oView = this.getView();

			var btn_SayHello = this.getView().byId( "btn_SayHello" );
			// Instantiate the button setting
			if ( btn_SayHello ) {
				btn_SayHello.applySettings( {
					text: "Click Me",
					press: function ( oEvent ) {
						oController.fun_SayHello( oEvent );

					}
				} );
			}

			// Instantiate the input control with initial properties settings.
			var ipt_info = this.getView().byId( "ipt_Info" );
			if ( ipt_info ) {
				ipt_info.applySettings( {
					value: "{/recipient/name}",
					// description : "Hello",
					valueLiveUpdate: true,
					width: "60%",
					fieldWidth: "50%",
					placeholder: "Description",
					// auto:true ,
					liveChange: function ( oEvent ) {
						if ( this.getValue() ) {
							this.setProperty( "description", oView.getModel( "i18n" )
									.getResourceBundle().getText( "helloMsg", this.getValue() ) );
						} else {
							this.setProperty( "description", "" );
						}
					}

				} );
			}

			//
			var btn_HelloDialog = this.getView().byId( "btn_HelloDialog" );
			if ( btn_HelloDialog ) {
				btn_HelloDialog.applySettings( {
					text: "Open Dialog",
					icon: "sap-icon://world",
					press: function ( oEvent ) {
						oController.getOwnerComponent().openDialog();
						// var dlg_HelloDialog = oView.byId("dlg_HelloDialog");
						// if (!dlg_HelloDialog){
						// dlg_HelloDialog =
						// sap.ui.xmlfragment(oView.getId(),"lean.study.walkthrough.HelloWorld.HelloDialog",oController);
						// oView.addDependent(dlg_HelloDialog);
						// }
						// dlg_HelloDialog.open();
					}
				} );
			}
		},

		fun_SayHello: function ( oEvent ) {

			var oResourceBundle = this.getView().getModel( "i18n" ).getResourceBundle();

			MessageToast.show( oResourceBundle.getText( "helloMsg", this.getView()
					.byId( "ipt_Info" ).getProperty( "value" ) ) );
		},

		onCloseDialog: function () {
			this.getView().byId( "dlg_HelloDialog" ).close();
		}

	} );
} );