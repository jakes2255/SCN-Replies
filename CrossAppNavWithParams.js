//Using Cross-App Navigation with Parameters
var oCrossAppNav = sap.ushell.Container.getService("CrossApplicationNavigation");
oCrossAppNav.toExternal({
    target: { semanticObject: "AppB", action: "display" },
    params: { docId: "12345", editMode: "true" }
});

//navigate back after saving.
onAfterSave: function(oContext) {
    var oCrossAppNav = sap.ushell.Container.getService("CrossApplicationNavigation");
    oCrossAppNav.toExternal({
        target: { semanticObject: "AppA", action: "display" },
        params: { docId: oContext.getObject().ID }
    });
}

