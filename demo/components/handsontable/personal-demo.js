/// <reference path="../../../tsd.d.ts" />
System.register(['angular2/core', 'angular2/common', '../../../components/index', './data'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, index_1, data_1;
    var template, PersonalDemo;
    function headerRenderer(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        td.style.fontWeight = 'bold';
        td.style.textAlign = 'center';
    }
    function diffRenderer(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.cellTypes.formula.renderer.apply(this, arguments);
        td.style.backgroundColor = '#c3f89c';
        td.style.fontWeight = (col === 13 ? 'bold' : 'normal');
    }
    function incomeOrExpensesRenderer(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        td.style.fontWeight = 'bold';
        td.style.textAlign = 'left';
        td.style.backgroundColor = '#BDD7EE';
    }
    function boldAndAlignRenderer(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        td.style.fontWeight = 'bold';
        td.style.verticalAlign = 'middle';
        td.style.textAlign = 'left';
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            // webpack html imports
            template = require('./personal-demo.html');
            PersonalDemo = (function () {
                function PersonalDemo() {
                    this.data = data_1.getPersonalData();
                    this.colWidths = [200, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85];
                    this.options = {
                        height: 396,
                        fixedRowsTop: 1,
                        colHeaders: true,
                        rowHeaders: true,
                        formulas: true,
                        comments: true,
                        colWidths: [200, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85],
                        cells: function (row, col, prop) {
                            var cellProperties = {};
                            if (row === 0) {
                                Object.assign(cellProperties, { renderer: headerRenderer });
                            }
                            else if (row === 3) {
                                Object.assign(cellProperties, { renderer: diffRenderer });
                            }
                            else if (row === 5) {
                                Object.assign(cellProperties, { renderer: incomeOrExpensesRenderer });
                            }
                            else if (row === 13) {
                                Object.assign(cellProperties, { renderer: incomeOrExpensesRenderer });
                            }
                            else if (row === 14) {
                                Object.assign(cellProperties, { renderer: boldAndAlignRenderer });
                            }
                            else if (row === 21) {
                                Object.assign(cellProperties, { renderer: boldAndAlignRenderer });
                            }
                            else if (row === 27) {
                                Object.assign(cellProperties, { renderer: boldAndAlignRenderer });
                            }
                            else if (row === 36) {
                                Object.assign(cellProperties, { renderer: boldAndAlignRenderer });
                            }
                            if ([1, 2, 3].indexOf(row) !== -1 && col >= 1) {
                                cellProperties.readOnly = true;
                            }
                            var a42 = Array.apply(0, Array(42)).map(function (x, y) { return y + 1; });
                            if (a42.indexOf(row) !== -1 && col >= 1) {
                                cellProperties.type = 'numeric';
                                cellProperties.format = '$0,0.00';
                            }
                            return cellProperties;
                        },
                        mergeCells: [
                            { row: 5, col: 0, rowspan: 1, colspan: 14 },
                            { row: 13, col: 0, rowspan: 1, colspan: 14 },
                            { row: 14, col: 0, rowspan: 2, colspan: 14 },
                            { row: 21, col: 0, rowspan: 2, colspan: 14 },
                            { row: 27, col: 0, rowspan: 2, colspan: 14 },
                            { row: 36, col: 0, rowspan: 2, colspan: 14 }
                        ]
                    };
                }
                PersonalDemo = __decorate([
                    core_1.Component({
                        selector: 'personal-demo',
                        templateUrl: template,
                        directives: [index_1.handsontable, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PersonalDemo);
                return PersonalDemo;
            }());
            exports_1("PersonalDemo", PersonalDemo);
        }
    }
});
//# sourceMappingURL=personal-demo.js.map