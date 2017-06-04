sap.ui.define( [ "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel",
		"lean/study/walkthrough/Model/Formatter", "../Model/UI_Assistant" ], function ( Controller,
		JSONModel, Formatter, UI_Assistant ) {
	"use strict";

	return Controller.extend( "lean.study.walkthrough.View.InvoiceList", {
		onInit: function () {

			var oController = this.getView().getController();

			var lst_InvoiceList = this.getView().byId( "lst_InvoiceList" );

			if ( lst_InvoiceList ) {
				lst_InvoiceList.applySettings( {
					headerText: "{i18n>invoiceListTitle}",
					width: "auto",
					headerToolbar: {
						content: [
								new sap.m.Title( {
									text: "{i18n>invoiceListTitle}",
								} ),
								new sap.m.ToolbarSpacer(),
								new sap.m.SearchField( {
									width: "50%",
									selectOnFocus: false,
									search: function ( oEvent ) {
										UI_Assistant.filter( oController, oController.getView()
												.byId( "lst_InvoiceList" ), "items",
												[ "ProductName" ], oEvent );
									}
								} ) ]
					}
				} );

				var _listitemTemplate = new sap.m.ObjectListItem( {
					title: "{invoice>Quantity} x {invoice>ProductName}",
					number: {
						parts: [ {
							path: "invoice>ExtendedPrice"
						}, {
							path: "view>/currency"
						} ],
						type: "sap.ui.model.type.Currency",
						formatOptions: {
							showMeasure: false
						}
					},
					numberUnit: "{view>/currency}",
					firstStatus: new sap.m.ObjectStatus( {
						text: {
							path: "invoice>Status",
							formatter: function ( oValue ) {
								return new Formatter( oController ).statusText( oValue );
							}
						}
					} ),
					type:"Navigation",
					press:function(oEvent){
						//To be implemented
						oController.navigateToDetail(oEvent);
					}
				} );

				_listitemTemplate.bindProperty( "numberState", {
					path: "invoice>ExtendedPrice",
					formatter: function ( oValue ) {
						return oValue > 50 ? "Error" : "Success";
					}
				} );

				//Binding the json data to the item aggregation
				lst_InvoiceList.bindAggregation( "items", {
					path: "invoice>/Invoices",
					template: _listitemTemplate,
					sorter: new sap.ui.model.Sorter( "ShipperName", false, true )
				} );
			}

			// Create the model for currency
			var _currencyModel = new JSONModel( {
				currency: "EUR"
			} );

			this.getView().setModel( _currencyModel, "view" );
		},
		navigateToDetail:function(oEvent){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var oItem = oEvent.getSource();
			oRouter.navTo("detail",{
				invoicePath: oItem.getBindingContext("invoice").getPath().substr(1)
			});
		}
	} );
} );