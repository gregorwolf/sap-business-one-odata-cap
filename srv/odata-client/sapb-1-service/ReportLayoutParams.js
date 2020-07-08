"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportLayoutParams = exports.ReportLayoutParamsField = exports.createReportLayoutParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ReportLayoutParams.build]] instead.
 */
function createReportLayoutParams(json) {
    return ReportLayoutParams.build(json);
}
exports.createReportLayoutParams = createReportLayoutParams;
/**
 * ReportLayoutParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ReportLayoutParamsField = /** @class */ (function (_super) {
    __extends(ReportLayoutParamsField, _super);
    function ReportLayoutParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ReportLayoutParams.layoutCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.layoutCode = new v4_1.ComplexTypeStringPropertyField('LayoutCode', _this, 'Edm.String');
        /**
         * Representation of the [[ReportLayoutParams.layoutName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.layoutName = new v4_1.ComplexTypeStringPropertyField('LayoutName', _this, 'Edm.String');
        return _this;
    }
    return ReportLayoutParamsField;
}(v4_1.ComplexTypeField));
exports.ReportLayoutParamsField = ReportLayoutParamsField;
var ReportLayoutParams;
(function (ReportLayoutParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LayoutCode: function (layoutCode) { return ({ layoutCode: v4_1.edmToTs(layoutCode, 'Edm.String') }); },
            LayoutName: function (layoutName) { return ({ layoutName: v4_1.edmToTs(layoutName, 'Edm.String') }); }
        });
    }
    ReportLayoutParams.build = build;
})(ReportLayoutParams = exports.ReportLayoutParams || (exports.ReportLayoutParams = {}));
//# sourceMappingURL=ReportLayoutParams.js.map