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
exports.DownPaymentToDrawDetails = exports.DownPaymentToDrawDetailsField = exports.createDownPaymentToDrawDetails = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DownPaymentToDrawDetails.build]] instead.
 */
function createDownPaymentToDrawDetails(json) {
    return DownPaymentToDrawDetails.build(json);
}
exports.createDownPaymentToDrawDetails = createDownPaymentToDrawDetails;
/**
 * DownPaymentToDrawDetailsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DownPaymentToDrawDetailsField = /** @class */ (function (_super) {
    __extends(DownPaymentToDrawDetailsField, _super);
    function DownPaymentToDrawDetailsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DownPaymentToDrawDetails.docInternalId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docInternalId = new v4_1.ComplexTypeNumberPropertyField('DocInternalID', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDrawDetails.rowNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNum = new v4_1.ComplexTypeNumberPropertyField('RowNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDrawDetails.seqNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.seqNum = new v4_1.ComplexTypeNumberPropertyField('SeqNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDrawDetails.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDrawDetails.vatGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatGroupCode = new v4_1.ComplexTypeStringPropertyField('VatGroupCode', _this, 'Edm.String');
        /**
         * Representation of the [[DownPaymentToDrawDetails.vatPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatPercent = new v4_1.ComplexTypeNumberPropertyField('VatPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.amountToDraw]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountToDraw = new v4_1.ComplexTypeNumberPropertyField('AmountToDraw', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.amountToDrawFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountToDrawFc = new v4_1.ComplexTypeNumberPropertyField('AmountToDrawFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.amountToDrawSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountToDrawSc = new v4_1.ComplexTypeNumberPropertyField('AmountToDrawSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.tax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tax = new v4_1.ComplexTypeNumberPropertyField('Tax', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.taxFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxFc = new v4_1.ComplexTypeNumberPropertyField('TaxFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.taxSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSc = new v4_1.ComplexTypeNumberPropertyField('TaxSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.grossAmountToDraw]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossAmountToDraw = new v4_1.ComplexTypeNumberPropertyField('GrossAmountToDraw', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.grossAmountToDrawFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossAmountToDrawFc = new v4_1.ComplexTypeNumberPropertyField('GrossAmountToDrawFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.grossAmountToDrawSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossAmountToDrawSc = new v4_1.ComplexTypeNumberPropertyField('GrossAmountToDrawSC', _this, 'Edm.Double');
        return _this;
    }
    return DownPaymentToDrawDetailsField;
}(v4_1.ComplexTypeField));
exports.DownPaymentToDrawDetailsField = DownPaymentToDrawDetailsField;
var DownPaymentToDrawDetails;
(function (DownPaymentToDrawDetails) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocInternalID: function (docInternalId) { return ({ docInternalId: v4_1.edmToTs(docInternalId, 'Edm.Int32') }); },
            RowNum: function (rowNum) { return ({ rowNum: v4_1.edmToTs(rowNum, 'Edm.Int32') }); },
            SeqNum: function (seqNum) { return ({ seqNum: v4_1.edmToTs(seqNum, 'Edm.Int32') }); },
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            VatGroupCode: function (vatGroupCode) { return ({ vatGroupCode: v4_1.edmToTs(vatGroupCode, 'Edm.String') }); },
            VatPercent: function (vatPercent) { return ({ vatPercent: v4_1.edmToTs(vatPercent, 'Edm.Double') }); },
            AmountToDraw: function (amountToDraw) { return ({ amountToDraw: v4_1.edmToTs(amountToDraw, 'Edm.Double') }); },
            AmountToDrawFC: function (amountToDrawFc) { return ({ amountToDrawFc: v4_1.edmToTs(amountToDrawFc, 'Edm.Double') }); },
            AmountToDrawSC: function (amountToDrawSc) { return ({ amountToDrawSc: v4_1.edmToTs(amountToDrawSc, 'Edm.Double') }); },
            Tax: function (tax) { return ({ tax: v4_1.edmToTs(tax, 'Edm.Double') }); },
            TaxFC: function (taxFc) { return ({ taxFc: v4_1.edmToTs(taxFc, 'Edm.Double') }); },
            TaxSC: function (taxSc) { return ({ taxSc: v4_1.edmToTs(taxSc, 'Edm.Double') }); },
            GrossAmountToDraw: function (grossAmountToDraw) { return ({ grossAmountToDraw: v4_1.edmToTs(grossAmountToDraw, 'Edm.Double') }); },
            GrossAmountToDrawFC: function (grossAmountToDrawFc) { return ({ grossAmountToDrawFc: v4_1.edmToTs(grossAmountToDrawFc, 'Edm.Double') }); },
            GrossAmountToDrawSC: function (grossAmountToDrawSc) { return ({ grossAmountToDrawSc: v4_1.edmToTs(grossAmountToDrawSc, 'Edm.Double') }); }
        });
    }
    DownPaymentToDrawDetails.build = build;
})(DownPaymentToDrawDetails = exports.DownPaymentToDrawDetails || (exports.DownPaymentToDrawDetails = {}));
//# sourceMappingURL=DownPaymentToDrawDetails.js.map