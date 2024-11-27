sap.ui.define([
    "sap/uxap/BlockBase",
], function(BlockBase) {
    "use strict";

    return BlockBase.extend("manageemployees.controller.blocks.ordersBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "manageemployees.view.blocks.OrdersCollapseBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "manageemployees.view.blocks.OrdersCollapseBlock",
                    type: "XML"
                }
            }
        },
    });
});