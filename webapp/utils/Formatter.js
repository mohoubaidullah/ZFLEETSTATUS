sap.ui.define([], function() {
	"use strict";
	return {
	 Formatter: function(sStatus) {
			if (sStatus === "Approved") {
				return "Success";
			} else if (sStatus === "Inprocess") {
				return "Warning";
			} else if (sStatus === "Rejected"){
				return "Error";
			} else if (sStatus === "Awaiting Approval"){
				return "Error";			}
			else if (sStatus === "Pending"){
				return "Warning";
			}
			else {
				return "None";
			}
		
		}
		
	};

});