/// <reference path="../../tsd.d.ts" />
System.register(['angular2/core', 'angular2/common', 'ng2-bootstrap/ng2-bootstrap', './handsontable/basic-demo', './handsontable/sheet-demo', './handsontable/personal-demo', './handsontable/finance-demo', './handsontable/science-demo', './handsontable/sport-demo', './handsontable/advanced-demo'], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_bootstrap_1, basic_demo_1, sheet_demo_1, personal_demo_1, finance_demo_1, science_demo_1, sport_demo_1, advanced_demo_1;
    var name, src, doc, tabDesc, dataLink, tabsContent, HandsontableSection;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (basic_demo_1_1) {
                basic_demo_1 = basic_demo_1_1;
            },
            function (sheet_demo_1_1) {
                sheet_demo_1 = sheet_demo_1_1;
            },
            function (personal_demo_1_1) {
                personal_demo_1 = personal_demo_1_1;
            },
            function (finance_demo_1_1) {
                finance_demo_1 = finance_demo_1_1;
            },
            function (science_demo_1_1) {
                science_demo_1 = science_demo_1_1;
            },
            function (sport_demo_1_1) {
                sport_demo_1 = sport_demo_1_1;
            },
            function (advanced_demo_1_1) {
                advanced_demo_1 = advanced_demo_1_1;
            }],
        execute: function() {
            name = 'Handsontable';
            src = 'https://github.com/valor-software/ng2-handsontable/blob/master/components/handsontable/handsontable.ts';
            // webpack html imports
            doc = require('../../components/handsontable/readme.md');
            tabDesc = [
                {
                    heading: 'Basic',
                    ts: require('!!prismjs?lang=typescript!./handsontable/basic-demo.ts'),
                    html: require('!!prismjs?lang=markup!./handsontable/basic-demo.html')
                },
                {
                    heading: 'Advanced',
                    ts: require('!!prismjs?lang=typescript!./handsontable/advanced-demo.ts'),
                    html: require('!!prismjs?lang=markup!./handsontable/advanced-demo.html'),
                    source: 'https://www.quandl.com/c/demography/total-population-by-country'
                },
                {
                    heading: 'Sheet',
                    ts: require('!!prismjs?lang=typescript!./handsontable/sheet-demo.ts'),
                    html: require('!!prismjs?lang=markup!./handsontable/sheet-demo.html')
                },
                {
                    heading: 'Personal',
                    ts: require('!!prismjs?lang=typescript!./handsontable/personal-demo.ts'),
                    html: require('!!prismjs?lang=markup!./handsontable/personal-demo.html')
                },
                {
                    heading: 'Finance',
                    ts: require('!!prismjs?lang=typescript!./handsontable/finance-demo.ts'),
                    html: require('!!prismjs?lang=markup!./handsontable/finance-demo.html'),
                    source: 'https://www.quandl.com/c/markets/bitcoin-data'
                },
                {
                    heading: 'Science',
                    ts: require('!!prismjs?lang=typescript!./handsontable/science-demo.ts'),
                    html: require('!!prismjs?lang=markup!./handsontable/science-demo.html'),
                    source: 'https://plot.ly/~JStevens/0/an-age-distribution-for-scientific-genius'
                },
                {
                    heading: 'Sport',
                    ts: require('!!prismjs?lang=typescript!./handsontable/sport-demo.ts'),
                    html: require('!!prismjs?lang=markup!./handsontable/sport-demo.html'),
                    source: 'http://www.forbes.com/nba-valuations/list'
                }
            ];
            dataLink = "<p>All data completes that used in these examples are available in\n  <a href=\"https://github.com/valor-software/ng2-handsontable/blob/master/demo/components/handsontable/data.ts\">next file</a>.</p>";
            tabsContent = "";
            tabDesc.forEach(function (desc) {
                var source = '';
                if (desc.source) {
                    source = "Source of data: <a href=\"" + desc.source + "\" target=\"_blank\">" + desc.source + "</a><br>";
                }
                tabsContent += "\n          <tab heading=\"" + desc.heading + "\" (select)=\"select($event)\">\n          <div class=\"card card-block panel panel-default panel-body\">\n\n            <" + desc.heading.toLowerCase() + "-demo *ng-if=\"currentHeading === '" + desc.heading + "'\"></" + desc.heading.toLowerCase() + "-demo>\n\n            <br>\n\n            <div class=\"row\" style=\"margin: 0px;\">\n              <tabset>\n                <tab heading=\"Markup\">\n                  <div class=\"card card-block panel panel-default panel-body\">\n                    <pre class=\"language-html\"><code class=\"language-html\" ng-non-bindable>" + desc.html + "</code></pre>\n                  </div>\n                </tab>\n                <tab heading=\"TypeScript\">\n                  <div class=\"card card-block panel panel-default panel-body\">\n                    <pre class=\"language-typescript\"><code class=\"language-typescript\" ng-non-bindable>" + desc.ts + "</code></pre>\n                  </div>\n                </tab>\n              </tabset>\n              " + source + "\n              " + dataLink + "\n            </div>\n          </div>\n        </tab>\n  ";
            });
            HandsontableSection = (function () {
                function HandsontableSection() {
                    this.currentHeading = 'Basic';
                }
                HandsontableSection.prototype.select = function (e) {
                    if (e.heading) {
                        this.currentHeading = e.heading;
                    }
                };
                HandsontableSection = __decorate([
                    core_1.Component({
                        selector: 'handsontable-section',
                        template: "\n  <section id=\"" + name.toLowerCase() + "\">\n    <div class=\"row\">\n      <tabset>\n\n        " + tabsContent + "\n\n      </tabset>\n    </div>\n\n    <div class=\"row\">\n      <h2>API</h2>\n      <div class=\"card card-block panel panel-default panel-body\">" + doc + "</div>\n    </div>\n  </section>\n  ",
                        directives: [basic_demo_1.BasicDemo, advanced_demo_1.AdvancedDemo, sheet_demo_1.SheetDemo, personal_demo_1.PersonalDemo, finance_demo_1.FinanceDemo, science_demo_1.ScienceDemo, sport_demo_1.SportDemo,
                            ng2_bootstrap_1.TAB_DIRECTIVES, common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HandsontableSection);
                return HandsontableSection;
            }());
            exports_1("HandsontableSection", HandsontableSection);
        }
    }
});
//# sourceMappingURL=handsontable-section.js.map