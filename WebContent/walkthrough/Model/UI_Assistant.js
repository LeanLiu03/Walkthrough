sap.ui.define( [ "sap/ui/model/Filter", "sap/ui/model/FilterOperator" ], function ( Filter,
		FilterOperator ) {
	"use strict";
	return {
		filter: function ( oController, oList, oBindingName, oFieldName, oEvent ) {
			var aFilter = [];
			var sQuery = oEvent.getParameter( "query" );
			if ( sQuery ) {
				if ( jQuery.isArray( oFieldName ) ) {
					jQuery.each( oFieldName, function ( index, value ) {
						aFilter.push( new Filter( {
							path: value,
							operator: FilterOperator.Contains,
							value1: sQuery
						} ) );
					} )
				} else {
					aFilter.push( new Filter( {
						path: oFieldName,
						operator: FilterOperator.Contains,
						value1: sQuery
					} ) );
				}

			}
			oList.getBinding( oBindingName ).filter( aFilter );
		}
	}
} )