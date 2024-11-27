sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function(
	Controller
) {
	"use strict";

	return Controller.extend("manageemployees.controller.Detail", {
		onInit() {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachPatternMatched(this.onObjectMatched, this);
		},

		onObjectMatched(oEvent) {
			const sEmployeeId = oEvent.getParameter("arguments").employeeId;
			const sPath = "/Employees(" + window.decodeURIComponent(sEmployeeId) + ")";
			this.getView().bindElement({
				path:sPath,
				parameters: {
					expand: "Orders"
				}
			});
		},

		handleLink1Press(){
            const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("ListEmployees");
		}
		
	});
});