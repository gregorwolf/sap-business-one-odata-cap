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
exports.DocExpenseTaxJurisdiction = exports.DocExpenseTaxJurisdictionField = exports.createDocExpenseTaxJurisdiction = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DocExpenseTaxJurisdiction.build]] instead.
 */
function createDocExpenseTaxJurisdiction(json) {
    return DocExpenseTaxJurisdiction.build(json);
}
exports.createDocExpenseTaxJurisdiction = createDocExpenseTaxJurisdiction;
/**
 * DocExpenseTaxJurisdictionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocExpenseTaxJurisdictionField = /** @class */ (function (_super) {
    __extends(DocExpenseTaxJurisdictionField, _super);
    function DocExpenseTaxJurisdictionField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DocExpenseTaxJurisdiction.jurisdictionCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.jurisdictionCode = new v4_1.ComplexTypeStringPropertyField('JurisdictionCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocExpenseTaxJurisdiction.jurisdictionType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.jurisdictionType = new v4_1.ComplexTypeNumberPropertyField('JurisdictionType', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocExpenseTaxJurisdiction.taxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmount = new v4_1.ComplexTypeNumberPropertyField('TaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocExpenseTaxJurisdiction.taxAmountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmountSc = new v4_1.ComplexTypeNumberPropertyField('TaxAmountSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocExpenseTaxJurisdiction.taxAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmountFc = new v4_1.ComplexTypeNumberPropertyField('TaxAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocExpenseTaxJurisdiction.taxRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxRate = new v4_1.ComplexTypeNumberPropertyField('TaxRate', _this, 'Edm.Double');
        /**
         * Representation of the [[DocExpenseTaxJurisdiction.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocExpenseTaxJurisdiction.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocExpenseTaxJurisdiction.rowSequence]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowSequence = new v4_1.ComplexTypeNumberPropertyField('RowSequence', _this, 'Edm.Int32');
        return _this;
    }
    return DocExpenseTaxJurisdictionField;
}(v4_1.ComplexTypeField));
exports.DocExpenseTaxJurisdictionField = DocExpenseTaxJurisdictionField;
var DocExpenseTaxJurisdiction;
(function (DocExpenseTaxJurisdiction) {
    function build(json) {
        return v4_1.createComplexType(json, {
            JurisdictionCode: function (jurisdictionCode) { return ({ jurisdictionCode: v4_1.edmToTs(jurisdictionCode, 'Edm.String') }); },
            JurisdictionType: function (jurisdictionType) { return ({ jurisdictionType: v4_1.edmToTs(jurisdictionType, 'Edm.Int32') }); },
            TaxAmount: function (taxAmount) { return ({ taxAmount: v4_1.edmToTs(taxAmount, 'Edm.Double') }); },
            TaxAmountSC: function (taxAmountSc) { return ({ taxAmountSc: v4_1.edmToTs(taxAmountSc, 'Edm.Double') }); },
            TaxAmountFC: function (taxAmountFc) { return ({ taxAmountFc: v4_1.edmToTs(taxAmountFc, 'Edm.Double') }); },
            TaxRate: function (taxRate) { return ({ taxRate: v4_1.edmToTs(taxRate, 'Edm.Double') }); },
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            RowSequence: function (rowSequence) { return ({ rowSequence: v4_1.edmToTs(rowSequence, 'Edm.Int32') }); }
        });
    }
    DocExpenseTaxJurisdiction.build = build;
})(DocExpenseTaxJurisdiction = exports.DocExpenseTaxJurisdiction || (exports.DocExpenseTaxJurisdiction = {}));
//# sourceMappingURL=DocExpenseTaxJurisdiction.js.map