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
    var template, BasicDemo;
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
            template = require('./basic-demo.html');
            BasicDemo = (function () {
                function BasicDemo() {
                    this.data = data_1.genData(10);
                    this.colHeaders = ['ID', 'First Name', 'Last Name', 'Address',
                        'Favorite food', 'Price', 'Is active'];
                    this.columns = [
                        {
                            data: 'id'
                        },
                        {
                            data: 'name.first',
                            renderer: 'text',
                            readOnly: true
                        },
                        {
                            data: 'name.last',
                            readOnly: true
                        },
                        {
                            data: 'address'
                        },
                        {
                            data: 'product.description',
                            source: 'product.options',
                            optionField: 'description',
                            type: 'autocomplete',
                            strict: false,
                            visibleRows: 4
                        },
                        {
                            data: 'price',
                            type: 'numeric',
                            format: '$ 0,0.00'
                        },
                        {
                            data: 'isActive',
                            type: 'checkbox',
                            checkedTemplate: 'Yes',
                            uncheckedTemplate: 'No'
                        }
                    ];
                    this.colWidths = [null, null, null, null, null, null, 30];
                    this.options = {
                        stretchH: 'all',
                        columnSorting: true,
                        contextMenu: [
                            'row_above', 'row_below', 'remove_row'
                        ]
                    };
                }
                BasicDemo.prototype.afterChange = function (e) {
                    console.log(e);
                };
                BasicDemo.prototype.afterOnCellMouseDown = function (e) {
                    console.log(e);
                };
                BasicDemo = __decorate([
                    core_1.Component({
                        selector: 'basic-demo',
                        templateUrl: template,
                        directives: [index_1.handsontable, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BasicDemo);
                return BasicDemo;
            }());
            exports_1("BasicDemo", BasicDemo);
        }
    }
});
//# sourceMappingURL=basic-demo.js.map