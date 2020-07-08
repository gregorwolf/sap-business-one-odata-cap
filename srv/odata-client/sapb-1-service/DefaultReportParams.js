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
exports.DefaultReportParams = exports.DefaultReportParamsField = exports.createDefaultReportParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DefaultReportParams.build]] instead.
 */
function createDefaultReportParams(json) {
    return DefaultReportParams.build(json);
}
exports.createDefaultReportParams = createDefaultReportParams;
/**
 * DefaultReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DefaultReportParamsField = /** @class */ (function (_super) {
    __extends(DefaultReportParamsField, _super);
    function DefaultReportParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DefaultReportParams.reportCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportCode = new v4_1.ComplexTypeStringPropertyField('ReportCode', _this, 'Edm.String');
        /**
         * Representation of the [[DefaultReportParams.layoutCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.layoutCode = new v4_1.ComplexTypeStringPropertyField('LayoutCode', _this, 'Edm.String');
        /**
         * Representation of the [[DefaultReportParams.userId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userId = new v4_1.ComplexTypeNumberPropertyField('UserID', _this, 'Edm.Int32');
        /**
         * Representation of the [[DefaultReportParams.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new v4_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        return _this;
    }
    return DefaultReportParamsField;
}(v4_1.ComplexTypeField));
exports.DefaultReportParamsField = DefaultReportParamsField;
var DefaultReportParams;
(function (DefaultReportParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ReportCode: function (reportCode) { return ({ reportCode: v4_1.edmToTs(reportCode, 'Edm.String') }); },
            LayoutCode: function (layoutCode) { return ({ layoutCode: v4_1.edmToTs(layoutCode, 'Edm.String') }); },
            UserID: function (userId) { return ({ userId: v4_1.edmToTs(userId, 'Edm.Int32') }); },
            CardCode: function (cardCode) { return ({ cardCode: v4_1.edmToTs(cardCode, 'Edm.String') }); }
        });
    }
    DefaultReportParams.build = build;
})(DefaultReportParams = exports.DefaultReportParams || (exports.DefaultReportParams = {}));
//# sourceMappingURL=DefaultReportParams.js.map