System.register(['./components/index'], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (index_1_1) {
                exportStar_1(index_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=ng2-handsontable.js.map