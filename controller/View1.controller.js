sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"FleetStatus/utils/Formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("FleetStatus.controller.View1", {

		format: formatter,

		onInit: function () {
			debugger;
			this.oRouter = this.getOwnerComponent().getRouter();

		},
		onEnter: function (oEvent) {
			debugger;
			var that = this;
			var Pernr = oEvent.getParameters().value;
			if (Pernr === "") {
				this.getView().byId("Zrecord").setValueState(sap.ui.core.ValueState.Error);
			} else if (Pernr !== "") {
				this.getView().byId("Zrecord").setValueState(sap.ui.core.ValueState.None);
				var oModel = this.getView().getModel();
				var sPath = "/transferRequestDownloadSet('" + Pernr + "')";

				//read odata service n make a call to get employee 

				oModel.read(sPath, {
					success: function (oData, response) {
						debugger;
						oData.ZrequestDate = oData.ZrequestDate ? oData.ZrequestDate.toDateString() : null;
						oData.Zfromappdate = oData.Zfromappdate ? oData.Zfromappdate.toDateString() : null;
						oData.Zfromassdate = oData.Zfromassdate ? oData.Zfromassdate.toDateString() : null;
						oData.Ztoassdate = oData.Ztoassdate ? oData.Ztoassdate.toDateString() : null;
						oData.Ztoappdate = oData.Ztoappdate ? oData.Ztoappdate.toDateString() : null;

						oData.ZrequestTime = oData.ZrequestTime ? new Date(oData.ZrequestTime.ms).toISOString().slice(11, -1) : null;
						oData.Zfromapptime = oData.Zfromapptime ? new Date(oData.Zfromapptime.ms).toISOString().slice(11, -1) : null;
						oData.Zfromasstime = oData.Zfromasstime ? new Date(oData.Zfromasstime.ms).toISOString().slice(11, -1) : null;
						oData.Ztoapptime = oData.Ztoapptime ? new Date(oData.Ztoapptime.ms).toISOString().slice(11, -1) : null;
						oData.Ztoasstime = oData.Ztoasstime ? new Date(oData.Ztoasstime.ms).toISOString().slice(11, -1) : null;

						var oModel3 = new sap.ui.model.json.JSONModel(oData);

						var osf1 = that.getView().byId("sF1");

						osf1.setModel(oModel3);

						var osf5 = that.getView().byId("sfDetail");
						osf5.setModel(oModel3);
					},
					error: function (oError) {
						debugger;
						sap.m.MessageToast.show("No Data retreived");
					}

				});

			}
		}
	});
});