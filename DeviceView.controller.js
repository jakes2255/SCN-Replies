sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device"
], function (Controller, Device) {
    "use strict";

    return Controller.extend("myApp.controller.DeviceView", {
        onInit: function () {
            // Get the Text Control
            var oText = this.getView().byId("deviceText");
            
            // Detect Device Type and Set Text Accordingly
            if (Device.system.phone) {
                oText.setText("You're using a Mobile Phone 📱");
            } else if (Device.system.tablet) {
                oText.setText("You're using a Tablet 📲");
            } else {
                oText.setText("You're using a Desktop 💻");
            }

            // Modify Button Text Based on Device Type
            var oButton = this.getView().byId("deviceButton");
            if (Device.system.phone) {
                oButton.setText("Tap Me");
            } else {
                oButton.setText("Click Me");
            }
        },

        onPress: function () {
            sap.m.MessageToast.show("Button Pressed!");
        }
    });
});
