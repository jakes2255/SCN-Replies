//Using Cross-App Navigation with Parameters
var oCrossAppNav = sap.ushell.Container.getService("CrossApplicationNavigation");
oCrossAppNav.toExternal({
    target: { semanticObject: "AppB", action: "display" },
    params: { docId: "12345", editMode: "true" }
});

//
