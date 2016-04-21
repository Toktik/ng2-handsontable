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
    var template, heatmapScale, heatmap, ScienceDemo;
    function updateHeatmap(change, source) {
        if (change) {
            heatmap[change[0][1]] = generateHeatmapData(this, change[0][1]);
        }
        else {
            heatmap = [];
            for (var i = 1, colCount = this.countCols(); i < colCount; i++) {
                heatmap[i] = generateHeatmapData(this, i);
            }
        }
    }
    function point(min, max, value) {
        return (value - min) / (max - min);
    }
    function generateHeatmapData(context, colId) {
        var values = context.getDataAtCol(colId);
        return {
            min: Math.min.apply(null, values),
            max: Math.max.apply(null, values)
        };
    }
    function heatmapRenderer(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        if (heatmap[col]) {
            td.style.backgroundColor = heatmapScale(point(heatmap[col].min, heatmap[col].max, parseFloat(value))).hex();
            td.style.textAlign = 'right';
            td.style.fontWeight = 'bold';
        }
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
            template = require('./sheet-demo.html');
            heatmapScale = chroma.scale(['#17F556', '#ED6D47']);
            heatmap = [];
            ScienceDemo = (function () {
                function ScienceDemo() {
                    this.data = data_1.getScienceData();
                    this.options = {
                        height: 600,
                        colHeaders: ['Line chart', 'Frequency', 'Average age', 'Frequency', 'Average age'],
                        rowHeaders: true,
                        stretchH: 'all',
                        columnSorting: true,
                        columns: [
                            { data: 0, renderer: 'html' },
                            { data: 1, type: 'numeric', format: '0[.]000000000000000' },
                            { data: 2, type: 'numeric', format: '0[.]000000000000000', renderer: heatmapRenderer },
                            { data: 3, type: 'numeric', format: '0[.]000000000000000' },
                            { data: 4, type: 'numeric', format: '0[.]000000000000000', renderer: heatmapRenderer }
                        ],
                        afterLoadData: updateHeatmap,
                        beforeChangeRender: updateHeatmap,
                        mergeCells: [
                            { row: 0, col: 0, rowspan: 20, colspan: 1 }
                        ]
                    };
                }
                ScienceDemo = __decorate([
                    core_1.Component({
                        selector: 'science-demo',
                        templateUrl: template,
                        directives: [index_1.handsontable, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ScienceDemo);
                return ScienceDemo;
            }());
            exports_1("ScienceDemo", ScienceDemo);
        }
    }
});
//# sourceMappingURL=science-demo.js.map