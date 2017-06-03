sap.ui.define(["sap/ui/core/UIComponent"],function(UIComponent){
	
return UIComponent.extend("lean.study.Component",{
	metadata:{
		manifest:"json",
		abstract:true
	},
	init:function(){
		UIComponent.prototype.init.apply(this,arguments);
	}
})
	
})