sap.ui.define([
    "sap/uxap/BlockBase"
], function(BlockBase) {
    "use strict";

    return BlockBase.extend("manageemployees.controller.blocks.userInfoBlock", {
        metadata: {
            views: {
                Collapsed: {
                    viewName: "manageemployees.view.blocks.userInfoBlock",
                    type: "XML"
                },
                Expanded: {
                    viewName: "manageemployees.view.blocks.userInfoBlock",
                    type: "XML"
                }
            }
        }
    });
});
