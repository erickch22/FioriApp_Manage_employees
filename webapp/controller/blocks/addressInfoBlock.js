sap.ui.define([
    "sap/uxap/BlockBase",
], function(BlockBase) {
    "use strict";

    return BlockBase.extend("manageemployees.controller.blocks.addressInfoBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "manageemployees.view.blocks.addressInfoBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "manageemployees.view.blocks.addressInfoBlock",
                    type: "XML"
                }
            }
        }
    });
});
