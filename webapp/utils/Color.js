sap.ui.define([], function() {
	"use strict";
	return {
	 Color: function(sStatus) {
			if (sStatus === "Approved") {
				return "Success";
			} else if (sStatus === "Inprocess") {
				return "Warning";
			} else if (sStatus === "Rejected"){
				return "Error";
			} else if (sStatus === "Current Pending"){
			     return "Error";
				}
			else if (sStatus === "Pending"){
				return "Warning";
			}
			else {
				return "None";
			}
		
		}
		
	};

});