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
exports.TaxInvoiceReportParams = exports.TaxInvoiceReportParamsField = exports.createTaxInvoiceReportParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TaxInvoiceReportParams.build]] instead.
 */
function createTaxInvoiceReportParams(json) {
    return TaxInvoiceReportParams.build(json);
}
exports.createTaxInvoiceReportParams = createTaxInvoiceReportParams;
/**
 * TaxInvoiceReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxInvoiceReportParamsField = /** @class */ (function (_super) {
    __extends(TaxInvoiceReportParamsField, _super);
    function TaxInvoiceReportParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TaxInvoiceReportParams.taxInvoiceReportNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxInvoiceReportNumber = new v4_1.ComplexTypeStringPropertyField('TaxInvoiceReportNumber', _this, 'Edm.String');
        return _this;
    }
    return TaxInvoiceReportParamsField;
}(v4_1.ComplexTypeField));
exports.TaxInvoiceReportParamsField = TaxInvoiceReportParamsField;
var TaxInvoiceReportParams;
(function (TaxInvoiceReportParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TaxInvoiceReportNumber: function (taxInvoiceReportNumber) { return ({ taxInvoiceReportNumber: v4_1.edmToTs(taxInvoiceReportNumber, 'Edm.String') }); }
        });
    }
    TaxInvoiceReportParams.build = build;
})(TaxInvoiceReportParams = exports.TaxInvoiceReportParams || (exports.TaxInvoiceReportParams = {}));
//# sourceMappingURL=TaxInvoiceReportParams.js.map