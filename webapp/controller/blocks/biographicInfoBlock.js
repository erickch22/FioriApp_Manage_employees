sap.ui.define([
    "sap/uxap/BlockBase",
], function(BlockBase) {
    "use strict";

    return BlockBase.extend("manageemployees.controller.blocks.biographicInfoBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "manageemployees.view.blocks.biographicInfoBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "manageemployees.view.blocks.biographicInfoBlock",
                    type: "XML"
                }
            }
        }
    });
});
