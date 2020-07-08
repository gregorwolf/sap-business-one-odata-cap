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
exports.LineExpenseTaxJurisdiction = exports.LineExpenseTaxJurisdictionField = exports.createLineExpenseTaxJurisdiction = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[LineExpenseTaxJurisdiction.build]] instead.
 */
function createLineExpenseTaxJurisdiction(json) {
    return LineExpenseTaxJurisdiction.build(json);
}
exports.createLineExpenseTaxJurisdiction = createLineExpenseTaxJurisdiction;
/**
 * LineExpenseTaxJurisdictionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var LineExpenseTaxJurisdictionField = /** @class */ (function (_super) {
    __extends(LineExpenseTaxJurisdictionField, _super);
    function LineExpenseTaxJurisdictionField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.jurisdictionCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.jurisdictionCode = new v4_1.ComplexTypeStringPropertyField('JurisdictionCode', _this, 'Edm.String');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.jurisdictionType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.jurisdictionType = new v4_1.ComplexTypeNumberPropertyField('JurisdictionType', _this, 'Edm.Int32');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.taxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmount = new v4_1.ComplexTypeNumberPropertyField('TaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.taxAmountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmountSc = new v4_1.ComplexTypeNumberPropertyField('TaxAmountSC', _this, 'Edm.Double');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.taxAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmountFc = new v4_1.ComplexTypeNumberPropertyField('TaxAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.taxRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxRate = new v4_1.ComplexTypeNumberPropertyField('TaxRate', _this, 'Edm.Double');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.rowSequence]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowSequence = new v4_1.ComplexTypeNumberPropertyField('RowSequence', _this, 'Edm.Int32');
        return _this;
    }
    return LineExpenseTaxJurisdictionField;
}(v4_1.ComplexTypeField));
exports.LineExpenseTaxJurisdictionField = LineExpenseTaxJurisdictionField;
var LineExpenseTaxJurisdiction;
(function (LineExpenseTaxJurisdiction) {
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
    LineExpenseTaxJurisdiction.build = build;
})(LineExpenseTaxJurisdiction = exports.LineExpenseTaxJurisdiction || (exports.LineExpenseTaxJurisdiction = {}));
//# sourceMappingURL=LineExpenseTaxJurisdiction.js.map