System.register(['angular2/core', 'angular2/common', 'angular2/platform/browser', './components/handsontable-section'], function(exports_1, context_1) {
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
    var core_1, common_1, browser_1, handsontable_section_1;
    var gettingStarted, Demo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (handsontable_section_1_1) {
                handsontable_section_1 = handsontable_section_1_1;
            }],
        execute: function() {
            // import {DemoHeader} from './components/demo-header';
            gettingStarted = require('./getting-started.md');
            Demo = (function () {
                function Demo() {
                }
                Demo = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n  <main class=\"bd-pageheader\">\n    <div class=\"container\">\n      <h1>ng2-handsontable</h1>\n      <p>The Angular2 directive for <a href=\"https://github.com/handsontable/handsontable\" target=\"_blank\">Handsontable</a></p>\n      <a class=\"btn btn-primary\" href=\"https://github.com/valor-software/ng2-handsontable\">View on GitHub</a>\n      <div class=\"row\">\n        <div class=\"col-lg-1\"><iframe src=\"https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-handsontable&type=star&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe></div>\n        <div class=\"col-lg-1\"><iframe src=\"https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-handsontable&type=fork&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe></div>\n      </div>\n    </div>\n  </main>\n\n  <div class=\"container\">\n    <section id=\"getting-started\">" + gettingStarted + "</section>\n\n    <handsontable-section class=\"col-md-12\"></handsontable-section>\n  </div>\n\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <p class=\"text-muted text-center\"><a href=\"https://github.com/valor-software/ng2-handsontable\">ng2-handsontable</a> is maintained by <a href=\"https://github.com/valor-software\">valor-software</a>.</p>\n    </div>\n  </footer>\n  ",
                        directives: [
                            common_1.NgClass,
                            handsontable_section_1.HandsontableSection
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Demo);
                return Demo;
            }());
            exports_1("Demo", Demo);
            browser_1.bootstrap(Demo);
        }
    }
});
//# sourceMappingURL=index.js.map