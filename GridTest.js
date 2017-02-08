$().ready(function () {
    var dsMain;
    var grdMain;

    DataLudi.setDebug(true);
    DataLudi.setTrace(true);

	dsMain = DataLudi.createGridDataSet();
    setFields(dsMain);
    dsMain.setSoftDelete(true);

    grdMain = DataLudi.createGridView("container");
	grdMain.setDataSource(dsMain);

    function setFields(provider) {
        var fields = [{
            fieldName: "OrderID"
        }, {
            fieldName: "CustomerID"
        }, {
            fieldName: "EmployeeID"
        }, {
            fieldName: "OrderDate",
            dataType: "datetime"
        }, {
            fieldName: "CompanyName"
        }, {
            fieldName: "Country"
        }, {
            fieldName: "Phone"
        }, {
            fieldName: "ProductName"
        }, {
            fieldName: "QuantityPerUnit"
        }, {
            fieldName: "Quantity",
            dataType: "number",
            nanValue: 0
        }, {
            fieldName: "UnitPrice",
            dataType: "number"
        }];

        provider.setFields(fields);
    }

    function setColumns(grid) {
        var columns = [{
            "name": "OrderID",
            "fieldName": "OrderID",
            "type": "data",
            "width": 70,
            "styles": {
                "textAlignment": "center"
            },
            "header": {
                "text": "Order ID",
                "sortOrderVisible": false
            }
        }, {
            "name": "QuantityPerUnit",
            "fieldName": "QuantityPerUnit",
            "width": 120,
            "styles": {
                //"textAlignment": "near"
            },
            "header": {
                "text": "Quantity / Unit",
                "summary": {
                    summaryCallback: function () {
                        return 1234;
                    }
                }
            },
            "footer": {
                "styles": {
                    "textAlignment": "far",
                    "font": "굴림,12"
                },
                "expression": "srand 2"
            },
            "groupFooter": {
                "styles": {
                    "textAlignment": "far",
                    "font": "굴림,12"
                },
                "text": "합계 =>"
            }
        }, {
            "name": "Quantity",
            "fieldName": "Quantity",
            "width": 65,
            "styles": {
                "textAlignment": "far",
                "numberFormat": "#,##0"
            },
            "header": {
                "text": "Quantity"
            },
            "footer": {
                "styles": {
                    "color": "#ff0000",
                    "textAlignment": "far",
                    "numberFormat": "#,##0",
                    "suffix": " $",
                    "font": "Arial,12"
                },
                //"text": "합계",
                "expression": "sum['UnitPrice'] + sum",
                "dynamicStyles": [{
                    "criteria": "value > 10000",
                    "styles": {
                        "color":"#ff0000"
                    }
                }]
            },
            "groupFooter": {
                "styles": {
                    "textAlignment": "far",
                    "numberFormat": "0,000",
                    "postfix": " $",
                    "font": "Arial,12"
                },
                "text": "합계",
                "expression": "sum['UnitPrice'] + sum"
            }
        }, {
            "name": "QtyGroup",
            "header": "Qtys",
            "width": 120,
            "columns": [{
                "name": "Quantity2",
                "fieldName": "Quantity",
                "width": 65,
                "styles": {
                    "textAlignment": "far",
                    "numberFormat": "#,##0"
                },
                "header": {
                    "text": "Qty2"
                },
                "footer": {
                    "styles": {
                        "color": "#ff0000",
                        "textAlignment": "far",
                        "numberFormat": "#,##0",
                        "suffix": " $",
                        "font": "Arial,12"
                    },
                    "text": "합계",
                    "callback": function (scope) {
                        return scope.sum();
                    }
                }
            }, {
                "name": "Quantity3",
                "fieldName": "Quantity",
                "width": 65,
                "styles": {
                    "textAlignment": "far",
                    "numberFormat": "#,##0"
                },
                "header": {
                    "text": "Qty3",
                    "summary": {
                        "styles": {
                            "textAlignment": "far",
                            "numberFormat": "0,000",
                            "postfix": " $",
                            "font": "Arial,12"
                        },
                        //"text": "합계",
                        //"expression": "sum['Quantity'] + sum",
                        "dynamicStyles": [{
                            "criteria": "value > 10000",
                            "styles": "color=#ff0000"
                        }],
                        "summaryCallback": function (column) {
                            return 101;
                        },
                        "expression": "11"
                    },
                },
                "summaryCallback": function (column) {
                    return 12;
                },
                "summaryCallback3": function (column) {
                    var grid = column.grid();
                    var fld = column.dataIndex();
                    var fld2 = grid.dataSource().getFieldIndex('UnitPrice');
                    var v = 0;
                    for (var i = grid.rowCount(); i--;) {
                        v += grid.getValueAt(i, fld) + grid.getValueAt(i, fld2) + 1;
                    }
                    return v;
                },
                "footer": {
                    "styles": {
                        "color": "#ff0000",
                        "textAlignment": "far",
                        "numberFormat": "#,##0",
                        "suffix": " $",
                        "font": "Arial,12"
                    },
                    "text": "합계",
                    "summaryCallback": function (column) {
                        var grid = column.grid();
                        var fld = column.dataIndex();
                        var fld2 = grid.dataSource().getFieldIndex('UnitPrice');
                        var v = 0;
                        for (var i = grid.rowCount(); i--;) {
                            v += grid.getValueAt(i, fld) + grid.getValueAt(i, fld2);
                        }
                        return v;
                        //return 200;
                    },
                    "dynamicStyles": [{
                        "criteria": "value > 10000",
                        "styles": "color=#ff0000"
                    }]
                },
                "groupFooter": {
                    "styles": {
                        "textAlignment": "far",
                        "numberFormat": "0,000",
                        "postfix": " $",
                        "font": "Arial,12"
                    },
                    "text": "합계",
                    "expression": "sum['UnitPrice'] + sum",
                    "summaryCallback": function (column, group) {
                        var grid = column.grid();
                        var fld = column.dataIndex();
                        var v = 0;
                        for (var i = group.count(); i--;) {
                            var row = group.getChild(i);
                            if (row.dataIndex() >= 0) {
                                v += group.getChild(i).getValue(fld);
                            }
                        }
                        return v;
                        //return 1;
                    },
                }
            }]
        }, {
            "name": "CustomerID",
            "fieldName": "CustomerID",
            "type": "data",
            "width": 90,
            "styles": {
                "textAlignment": "center"
            },
            "header": {
                "text": "Customer"
            },
            "footer": {
                "styles": {
                    "textAlignment": "far",
                    "font": "굴림,12"
                },
                "text": "분산 =>"
            },
            "groupFooter": {
                "styles": {
                    "textAlignment": "far",
                    "font": "굴림,12"
                },
                "text": "분산 =>"
            }
        }, {
            "name": "UnitPrice",
            "fieldName": "UnitPrice",
            "type": "data",
            "width": 60,
            "styles": {
                "textAlignment": "far"
            },
            "header": {
                "text": "Unit Price"
            },
            "footer": {
                "styles": {
                    "textAlignment": "far",
                    "numberFormat": "0,000",
                    "postfix": " $",
                    "font": "Arial,12"
                },
                "text": "Variance",
                "expression": "var"
            },
            "groupFooter": {
                "styles": {
                    "textAlignment": "far",
                    "numberFormat": "0,000",
                    "postfix": " $",
                    "font": "Arial,12"
                },
                "expression": "var"
            }
        },  {
            "name": "CompanyName",
            "fieldName": "CompanyName",
            "type": "data",
            "width": 160,
            "editor": {
                type: 'multiline'
            },
            "styles": {
                "textAlignment": "near",
                "textWrap": "normal"
            },
            "header": {
                "text": "Company"
            }
        }];

        grid.setColumns(columns);
    }

    function setOptions(grid) {
        grid.setOptions({
            groupPanel: {
                visible: true
            },
            rowGroup: {
                summaryMode: DataLudi.SummaryMode.AGGREGATE
            },
            display: {
                //selectStyle: DataLudi.SelectionStyle.ROWS,
                summaryMode: DataLudi.SummaryMode.AGGREGATE,
                variableRowHeight: true,
                rowResizable: true,
                minRowHeight: 10
            },
            edit: {
                insertable: true,
                appendable: true,
                updatable: true,
                deletable: true,
                startEditWhenPaste: false,
                enableAppendWhenPaste: false
            },
            operate: {
                groupingEnabled : true,
                sortStyle: DataLudi.SortStyle.INCLUSIVE
            },
            autoFill: {
                enabled: true
            },
            rowIndicator: {
                stateVisible: true
            },
            header: {
                summary: {
                    visible: true,
                    resizable: false
                }
            }
        });
        grid.setFooter({
            resizable: true,
            head: {
                text: "Sum",
                menuvisible: true,
                popupMenu: [{
                    label: 'xxx',
                    callback: function () { alert('xxx'); }
                }]
            }
        });
        grid.body().setCheckedStyles({
            background: "#800000ff",
            color: "#ffffff"
        })
        grid.body().setUpdatedStyles({
            background: "#100000ff"
        });
        grid.body().setCreatedStyles({
            background: "#10ff0000",
            color: "#ffff0000"
        });
        grid.body().setDeletedStyles({
            background: "#ff000000",
            color: "#fff"
        });

        setFilters(grid);
    }

    function setFilters(grid) {
        var column = grid.columnByName("CustomerID");
        if (column) {
            var filters = [{
                name: "VINET",
                expression: "value == 'VINET'"
            }, {
                name: "VICTE",
                expression: "value == 'VICTE'"
            }, {
                name: "HANAR",
                expression: "value == 'HANAR'"
            }, {
                name: "SUPRD",
                expression: "value == 'SUPRD'"
            }];

            column.setFilters(filters);
        }
    }

    function setStyles() {
        grdMain.loadStyles(flatbluestyles);
    }

    function loadData(ds) {
        ds.setRows(CustomerOrders);
    }

    function getSelected() {
        var colName = _getSelected("Column");
        return colName ? grdMain.columnByName(colName) : null;
    }

    var tests = {
        getVersion: function () {
            alert(DataLudi.getVersion());
        },
        export: function () {
            new DataLudi.GridExcelExporter().export(grdMain, {
                target: "local",
                fileName: "local.xlsx",
                indicator: _getSelected("indicator"),
                header: _getSelected("header"),
                footer: _getSelected("footer"),
                numberFormat: "#,##0.00",
                datetimeFormat: "yyyy.mm.dd"
            });
        }
    };

    function setTests(container, title) {
        if (title) document.title = "DataLudi - " + title;
        createButtons(container, tests);
        createListBox(container, "SummaryMode", ["none", "aggregate", "statistical"], function (e) {
            var mode = _getSelected(e);
            grdMain.displayOptions().setSummaryMode(mode);
        }, "aggregate");
        createListBox(container, "GroupSummaryMode", ["none", "aggregate", "statistical"], function (e) {
            var mode = _getSelected(e);
            grdMain.setRowGroup({ summaryMode: mode });
        }, "aggregate");
        createListBox(container, "Summary", ["count", "min", "max", "sum", "avg", "var", "varp", "stdev", "stdevp"], function (e) {
        }, "count");
        createCheckBox(container, "updateByCell", function (e) {
            grdMain.setEditOptions({
                updateByCell: _getChecked(e)
            })
        }, false);
    }

    setColumns(grdMain);
    setOptions(grdMain);
    setStyles(grdMain);

    loadData(dsMain);

    setTests("actions", "Grid Test");
});

