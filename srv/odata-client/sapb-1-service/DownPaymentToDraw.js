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
exports.DownPaymentToDraw = exports.DownPaymentToDrawField = exports.createDownPaymentToDraw = void 0;
var DownPaymentToDrawDetails_1 = require("./DownPaymentToDrawDetails");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DownPaymentToDraw.build]] instead.
 */
function createDownPaymentToDraw(json) {
    return DownPaymentToDraw.build(json);
}
exports.createDownPaymentToDraw = createDownPaymentToDraw;
/**
 * DownPaymentToDrawField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DownPaymentToDrawField = /** @class */ (function (_super) {
    __extends(DownPaymentToDrawField, _super);
    function DownPaymentToDrawField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DownPaymentToDraw.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDraw.postingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postingDate = new v4_1.ComplexTypeDatePropertyField('PostingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DownPaymentToDraw.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new v4_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DownPaymentToDraw.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[DownPaymentToDraw.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new v4_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        /**
         * Representation of the [[DownPaymentToDraw.amountToDraw]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountToDraw = new v4_1.ComplexTypeNumberPropertyField('AmountToDraw', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.amountToDrawFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountToDrawFc = new v4_1.ComplexTypeNumberPropertyField('AmountToDrawFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.amountToDrawSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountToDrawSc = new v4_1.ComplexTypeNumberPropertyField('AmountToDrawSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.docInternalId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docInternalId = new v4_1.ComplexTypeNumberPropertyField('DocInternalID', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDraw.rowNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNum = new v4_1.ComplexTypeNumberPropertyField('RowNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDraw.docNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docNumber = new v4_1.ComplexTypeNumberPropertyField('DocNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDraw.tax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tax = new v4_1.ComplexTypeNumberPropertyField('Tax', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.taxFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxFc = new v4_1.ComplexTypeNumberPropertyField('TaxFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.taxSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSc = new v4_1.ComplexTypeNumberPropertyField('TaxSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.grossAmountToDraw]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossAmountToDraw = new v4_1.ComplexTypeNumberPropertyField('GrossAmountToDraw', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.grossAmountToDrawFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossAmountToDrawFc = new v4_1.ComplexTypeNumberPropertyField('GrossAmountToDrawFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.grossAmountToDrawSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossAmountToDrawSc = new v4_1.ComplexTypeNumberPropertyField('GrossAmountToDrawSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.downPaymentsToDrawDetails]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.downPaymentsToDrawDetails = new DownPaymentToDrawDetails_1.DownPaymentToDrawDetailsField('DownPaymentsToDrawDetails', _this);
        return _this;
    }
    return DownPaymentToDrawField;
}(v4_1.ComplexTypeField));
exports.DownPaymentToDrawField = DownPaymentToDrawField;
var DownPaymentToDraw;
(function (DownPaymentToDraw) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            PostingDate: function (postingDate) { return ({ postingDate: v4_1.edmToTs(postingDate, 'Edm.DateTimeOffset') }); },
            DueDate: function (dueDate) { return ({ dueDate: v4_1.edmToTs(dueDate, 'Edm.DateTimeOffset') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); },
            Details: function (details) { return ({ details: v4_1.edmToTs(details, 'Edm.String') }); },
            AmountToDraw: function (amountToDraw) { return ({ amountToDraw: v4_1.edmToTs(amountToDraw, 'Edm.Double') }); },
            AmountToDrawFC: function (amountToDrawFc) { return ({ amountToDrawFc: v4_1.edmToTs(amountToDrawFc, 'Edm.Double') }); },
            AmountToDrawSC: function (amountToDrawSc) { return ({ amountToDrawSc: v4_1.edmToTs(amountToDrawSc, 'Edm.Double') }); },
            DocInternalID: function (docInternalId) { return ({ docInternalId: v4_1.edmToTs(docInternalId, 'Edm.Int32') }); },
            RowNum: function (rowNum) { return ({ rowNum: v4_1.edmToTs(rowNum, 'Edm.Int32') }); },
            DocNumber: function (docNumber) { return ({ docNumber: v4_1.edmToTs(docNumber, 'Edm.Int32') }); },
            Tax: function (tax) { return ({ tax: v4_1.edmToTs(tax, 'Edm.Double') }); },
            TaxFC: function (taxFc) { return ({ taxFc: v4_1.edmToTs(taxFc, 'Edm.Double') }); },
            TaxSC: function (taxSc) { return ({ taxSc: v4_1.edmToTs(taxSc, 'Edm.Double') }); },
            GrossAmountToDraw: function (grossAmountToDraw) { return ({ grossAmountToDraw: v4_1.edmToTs(grossAmountToDraw, 'Edm.Double') }); },
            GrossAmountToDrawFC: function (grossAmountToDrawFc) { return ({ grossAmountToDrawFc: v4_1.edmToTs(grossAmountToDrawFc, 'Edm.Double') }); },
            GrossAmountToDrawSC: function (grossAmountToDrawSc) { return ({ grossAmountToDrawSc: v4_1.edmToTs(grossAmountToDrawSc, 'Edm.Double') }); },
            DownPaymentsToDrawDetails: function (downPaymentsToDrawDetails) { return ({ downPaymentsToDrawDetails: DownPaymentToDrawDetails_1.DownPaymentToDrawDetails.build(downPaymentsToDrawDetails) }); }
        });
    }
    DownPaymentToDraw.build = build;
})(DownPaymentToDraw = exports.DownPaymentToDraw || (exports.DownPaymentToDraw = {}));
//# sourceMappingURL=DownPaymentToDraw.js.map