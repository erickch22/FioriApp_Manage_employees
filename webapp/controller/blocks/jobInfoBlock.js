sap.ui.define([
    "sap/uxap/BlockBase",
], function(BlockBase) {
    "use strict";

    return BlockBase.extend("manageemployees.controller.blocks.jobInfoBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "manageemployees.view.blocks.jobInfoBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "manageemployees.view.blocks.jobInfoBlock",
                    type: "XML"
                }
            }
        }
    });
});