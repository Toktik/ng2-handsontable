"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var eventNames = ['afterCellMetaReset', 'afterChange',
    'afterCreateCol', 'afterCreateRow', 'afterDeselect',
    'afterDestroy', 'afterDocumentKeyDown', 'afterGetCellMeta', 'afterGetColHeader', 'afterGetRowHeader',
    'afterInit', 'afterIsMultipleSelectionCheck', 'afterLoadData',
    'afterMomentumScroll', 'afterOnCellCornerMouseDown',
    'afterOnCellMouseDown', 'afterOnCellMouseOver', 'afterRemoveCol', 'afterRemoveRow', 'afterRender',
    'afterRenderer', 'afterScrollHorizontally', 'afterScrollVertically',
    'afterSelection', 'afterSelectionByProp',
    'afterSelectionEnd', 'afterSelectionEndByProp', 'afterSetCellMeta', 'afterUpdateSettings', 'afterValidate',
    'beforeAutofill', 'beforeCellAlignment', 'beforeChange', 'beforeChangeRender', 'beforeDrawBorders',
    'beforeGetCellMeta', 'beforeInit', 'beforeInitWalkontable', 'beforeKeyDown', 'beforeOnCellMouseDown',
    'beforeRemoveCol', 'beforeRemoveRow', 'beforeRender', 'beforeSetRangeEnd', 'beforeTouchScroll',
    'beforeValidate', 'construct', 'init', 'modifyCol', 'modifyColWidth', 'modifyRow', 'modifyRowHeight',
    'persistentStateLoad', 'persistentStateReset', 'persistentStateSave'];
var HotTable = (function () {
    function HotTable(element) {
        var _this = this;
        this.element = element;
        this.data = [];
        eventNames.forEach(function (eventName) {
            _this[eventName] = new core_1.EventEmitter();
        });
    }
    HotTable.prototype.parseAutoComplete = function (column, dataSet) {
        var inst = this.inst;
        if (typeof column.source === 'string') {
            var relatedField_1 = column.source;
            column.source = function (query, process) {
                var row = inst.getSelected()[0];
                var data = dataSet[row];
                if (!data) {
                    return;
                }
                var fieldParts = relatedField_1.split('.');
                var o = data;
                for (var i = 0; i < fieldParts.length; i++) {
                    o = o[fieldParts[i]];
                }
                process(o.map(function (item) {
                    return !column.optionField ? item : item[column.optionField];
                }));
            };
        }
    };
    HotTable.prototype.ngOnInit = function () {
        var _this = this;
        this.view = document.createElement('div');
        this.view.class = 'handsontable-container';
        this.element.nativeElement.appendChild(this.view);
        var htOptions = {
            data: this.data
        };
        eventNames.forEach(function (eventName) {
            htOptions[eventName] = function (data) {
                _this[eventName].next(data);
            };
        });
        var additionalFields = ['colHeaders', 'colWidths', 'columns'];
        additionalFields.forEach(function (field) {
            if (_this[field]) {
                Object.assign(htOptions, (_a = {},
                    _a[field] = _this[field],
                    _a
                ));
            }
            var _a;
        });
        if (this.options) {
            Object.assign(htOptions, this.options);
        }
        this.inst = Handsontable(this.view, htOptions);
        if (this.columns && this.columns.length) {
            this.columns.forEach(function (column) {
                _this.parseAutoComplete(column, _this.data);
            });
        }
    };
    HotTable.prototype.ngOnDestroy = function () {
        if (this.view) {
            this.view.remove();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], HotTable.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], HotTable.prototype, "colHeaders", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], HotTable.prototype, "columns", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], HotTable.prototype, "colWidths", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HotTable.prototype, "options", void 0);
    HotTable = __decorate([
        core_1.Component({
            selector: 'hot-table',
            outputs: eventNames
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HotTable);
    return HotTable;
}());
exports.HotTable = HotTable;
exports.handsontable = [HotTable];
//# sourceMappingURL=handsontable.js.map