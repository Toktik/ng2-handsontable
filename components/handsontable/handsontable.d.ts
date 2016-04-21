import { OnInit, OnDestroy, ElementRef } from 'angular2/core';
export declare class HotTable implements OnInit, OnDestroy {
    private element;
    private inst;
    private view;
    data: Array<any>;
    colHeaders: Array<string>;
    columns: Array<any>;
    colWidths: Array<number>;
    options: any;
    eventNames: Array<string>;
    constructor(element: ElementRef);
    parseAutoComplete(column: any, dataSet: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare const handsontable: Array<any>;
