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
exports.ChecksforPaymentLine = exports.ChecksforPaymentLineField = exports.createChecksforPaymentLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ChecksforPaymentLine.build]] instead.
 */
function createChecksforPaymentLine(json) {
    return ChecksforPaymentLine.build(json);
}
exports.createChecksforPaymentLine = createChecksforPaymentLine;
/**
 * ChecksforPaymentLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ChecksforPaymentLineField = /** @class */ (function (_super) {
    __extends(ChecksforPaymentLineField, _super);
    function ChecksforPaymentLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ChecksforPaymentLine.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new v4_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ChecksforPaymentLine.rowDetails]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowDetails = new v4_1.ComplexTypeStringPropertyField('RowDetails', _this, 'Edm.String');
        /**
         * Representation of the [[ChecksforPaymentLine.rowTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowTotal = new v4_1.ComplexTypeNumberPropertyField('RowTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[ChecksforPaymentLine.rowCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowCurrency = new v4_1.ComplexTypeStringPropertyField('RowCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[ChecksforPaymentLine.taxDefinition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxDefinition = new v4_1.ComplexTypeStringPropertyField('TaxDefinition', _this, 'Edm.String');
        /**
         * Representation of the [[ChecksforPaymentLine.taxPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPercent = new v4_1.ComplexTypeNumberPropertyField('TaxPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[ChecksforPaymentLine.creditedAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditedAccount = new v4_1.ComplexTypeStringPropertyField('CreditedAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ChecksforPaymentLine.lineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotal = new v4_1.ComplexTypeNumberPropertyField('LineTotal', _this, 'Edm.Double');
        return _this;
    }
    return ChecksforPaymentLineField;
}(v4_1.ComplexTypeField));
exports.ChecksforPaymentLineField = ChecksforPaymentLineField;
var ChecksforPaymentLine;
(function (ChecksforPaymentLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            RowNumber: function (rowNumber) { return ({ rowNumber: v4_1.edmToTs(rowNumber, 'Edm.Int32') }); },
            RowDetails: function (rowDetails) { return ({ rowDetails: v4_1.edmToTs(rowDetails, 'Edm.String') }); },
            RowTotal: function (rowTotal) { return ({ rowTotal: v4_1.edmToTs(rowTotal, 'Edm.Double') }); },
            RowCurrency: function (rowCurrency) { return ({ rowCurrency: v4_1.edmToTs(rowCurrency, 'Edm.String') }); },
            TaxDefinition: function (taxDefinition) { return ({ taxDefinition: v4_1.edmToTs(taxDefinition, 'Edm.String') }); },
            TaxPercent: function (taxPercent) { return ({ taxPercent: v4_1.edmToTs(taxPercent, 'Edm.Double') }); },
            CreditedAccount: function (creditedAccount) { return ({ creditedAccount: v4_1.edmToTs(creditedAccount, 'Edm.String') }); },
            LineTotal: function (lineTotal) { return ({ lineTotal: v4_1.edmToTs(lineTotal, 'Edm.Double') }); }
        });
    }
    ChecksforPaymentLine.build = build;
})(ChecksforPaymentLine = exports.ChecksforPaymentLine || (exports.ChecksforPaymentLine = {}));
//# sourceMappingURL=ChecksforPaymentLine.js.map