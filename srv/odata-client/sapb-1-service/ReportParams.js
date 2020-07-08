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
exports.ReportParams = exports.ReportParamsField = exports.createReportParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ReportParams.build]] instead.
 */
function createReportParams(json) {
    return ReportParams.build(json);
}
exports.createReportParams = createReportParams;
/**
 * ReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ReportParamsField = /** @class */ (function (_super) {
    __extends(ReportParamsField, _super);
    function ReportParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ReportParams.reportCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportCode = new v4_1.ComplexTypeStringPropertyField('ReportCode', _this, 'Edm.String');
        /**
         * Representation of the [[ReportParams.userId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userId = new v4_1.ComplexTypeNumberPropertyField('UserID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReportParams.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new v4_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        return _this;
    }
    return ReportParamsField;
}(v4_1.ComplexTypeField));
exports.ReportParamsField = ReportParamsField;
var ReportParams;
(function (ReportParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ReportCode: function (reportCode) { return ({ reportCode: v4_1.edmToTs(reportCode, 'Edm.String') }); },
            UserID: function (userId) { return ({ userId: v4_1.edmToTs(userId, 'Edm.Int32') }); },
            CardCode: function (cardCode) { return ({ cardCode: v4_1.edmToTs(cardCode, 'Edm.String') }); }
        });
    }
    ReportParams.build = build;
})(ReportParams = exports.ReportParams || (exports.ReportParams = {}));
//# sourceMappingURL=ReportParams.js.map