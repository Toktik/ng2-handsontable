/// <reference path="../../../tsd.d.ts" />
System.register(['angular2/core', 'angular2/common', '../../../components/index'], function(exports_1, context_1) {
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
    var core_1, common_1, index_1;
    var template, SheetDemo;
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
            }],
        execute: function() {
            // webpack html imports
            template = require('./sheet-demo.html');
            SheetDemo = (function () {
                function SheetDemo() {
                    this.data = Handsontable.helper.createSpreadsheetData(100, 12);
                    this.options = {
                        height: 396,
                        colHeaders: true,
                        rowHeaders: true,
                        stretchH: 'all',
                        columnSorting: true,
                        contextMenu: true
                    };
                }
                SheetDemo = __decorate([
                    core_1.Component({
                        selector: 'sheet-demo',
                        template: template,
                        directives: [index_1.handsontable, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SheetDemo);
                return SheetDemo;
            }());
            exports_1("SheetDemo", SheetDemo);
        }
    }
});
//# sourceMappingURL=sheet-demo.js.map