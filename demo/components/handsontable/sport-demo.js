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
    var template, SportDemo;
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
            template = require('./sheet-demo.html');
            SportDemo = (function () {
                function SportDemo() {
                    this.data = data_1.getSportData();
                    this.colHeaders = ['Rank', 'Team', 'Logo', 'Current Value ($mil)', '1-Yr Value Change (%)',
                        'Debt/Value (%)', 'Revenue ($mil)', 'Operating Income ($mil)'];
                    this.options = {
                        height: 600,
                        rowHeaders: false,
                        stretchH: 'all',
                        columnSorting: true,
                        contextMenu: true,
                        autoWrapRow: true,
                        columns: [
                            { data: 0, type: 'numeric' },
                            { data: 1, type: 'text' },
                            { data: 2, renderer: 'html', width: 200 },
                            { data: 3, type: 'numeric', format: '$0,0.00' },
                            { data: 4, type: 'numeric', format: '0.00%' },
                            { data: 5, type: 'numeric', format: '0.00%' },
                            { data: 6, type: 'numeric', format: '$0,0.00' },
                            { data: 7, type: 'numeric', format: '$0,0.00' }
                        ],
                        cells: function (row, col, prop) {
                            var cellProperties = {};
                            cellProperties.className = 'htMiddle htCenter';
                            return cellProperties;
                        }
                    };
                }
                SportDemo = __decorate([
                    core_1.Component({
                        selector: 'sport-demo',
                        template: template,
                        directives: [index_1.handsontable, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SportDemo);
                return SportDemo;
            }());
            exports_1("SportDemo", SportDemo);
        }
    }
});
//# sourceMappingURL=sport-demo.js.map