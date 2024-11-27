sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("manageemployees.controller.Employees", {
        onInit() {
        },

        onSearchFieldLiveChange: function (oEvent) {
            // build filter array
            const sQuery = oEvent.getParameter("newValue");

            if (sQuery) {
                const oNameFilter = new Filter("FirstName", FilterOperator.Contains, sQuery);
                const oLastNameFilter = new Filter("LastName", FilterOperator.Contains, sQuery);

                const oCombinedFilter = new Filter({
                    filters: [oNameFilter, oLastNameFilter],
                    and: false
                });

                const oList = this.byId("idEmployeesList");
                const oBinding = oList.getBinding("items");
                oBinding.filter([oCombinedFilter]);  
            } else {
                // Limpiar filtros si no hay búsqueda
                const oList = this.byId("idEmployeesList");
                const oBinding = oList.getBinding("items");
                oBinding.filter([]);
            }

        },

        onNavDetail: function(oEvent){
            const oItem = oEvent.getSource().getBindingContext().getProperty("EmployeeID");
            const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail",{
                employeeId: oItem
            });
        }
    });
});