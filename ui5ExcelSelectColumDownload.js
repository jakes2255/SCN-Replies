onExportToExcel: function () {
    var oTable = this.byId("myTableId");
    var oModel = oTable.getModel();
    var aData = oModel.getProperty("/yourData");

    // Only include selected columns
    var aCols = [
        { label: "Name", property: "name" },
        { label: "Department", property: "department" },
        // Omit columns like "Internal Notes", "Debug ID", etc.
    ];

    var oSettings = {
        workbook: {
            columns: aCols
        },
        dataSource: aData,
        fileName: "ExportedData.xlsx"
    };

    var oSpreadsheet = new sap.ui.export.Spreadsheet(oSettings);
    oSpreadsheet.build().finally(function () {
        oSpreadsheet.destroy();
    });
}
