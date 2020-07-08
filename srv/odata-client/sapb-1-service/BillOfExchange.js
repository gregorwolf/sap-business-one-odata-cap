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
exports.BillOfExchange = exports.BillOfExchangeField = exports.createBillOfExchange = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BillOfExchange.build]] instead.
 */
function createBillOfExchange(json) {
    return BillOfExchange.build(json);
}
exports.createBillOfExchange = createBillOfExchange;
/**
 * BillOfExchangeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BillOfExchangeField = /** @class */ (function (_super) {
    __extends(BillOfExchangeField, _super);
    function BillOfExchangeField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BillOfExchange.billOfExchangeNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billOfExchangeNo = new v4_1.ComplexTypeNumberPropertyField('BillOfExchangeNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BillOfExchange.billOfExchangeDueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billOfExchangeDueDate = new v4_1.ComplexTypeDatePropertyField('BillOfExchangeDueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BillOfExchange.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new v4_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.referenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.referenceNo = new v4_1.ComplexTypeStringPropertyField('ReferenceNo', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.paymentMethodCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentMethodCode = new v4_1.ComplexTypeStringPropertyField('PaymentMethodCode', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.bpBankCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpBankCode = new v4_1.ComplexTypeStringPropertyField('BPBankCode', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.bpBankAct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpBankAct = new v4_1.ComplexTypeStringPropertyField('BPBankAct', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.bpBankCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpBankCountry = new v4_1.ComplexTypeStringPropertyField('BPBankCountry', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.controlKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.controlKey = new v4_1.ComplexTypeStringPropertyField('ControlKey', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.paymentEngineStatus1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentEngineStatus1 = new v4_1.ComplexTypeStringPropertyField('PaymentEngineStatus1', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.paymentEngineStatus2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentEngineStatus2 = new v4_1.ComplexTypeStringPropertyField('PaymentEngineStatus2', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.paymentEngineStatus3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentEngineStatus3 = new v4_1.ComplexTypeStringPropertyField('PaymentEngineStatus3', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.stampTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stampTaxCode = new v4_1.ComplexTypeStringPropertyField('StampTaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.stampTaxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stampTaxAmount = new v4_1.ComplexTypeNumberPropertyField('StampTaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BillOfExchange.folioNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.folioNumber = new v4_1.ComplexTypeNumberPropertyField('FolioNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BillOfExchange.folioPrefixString]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.folioPrefixString = new v4_1.ComplexTypeStringPropertyField('FolioPrefixString', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.interestAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.interestAmount = new v4_1.ComplexTypeNumberPropertyField('InterestAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BillOfExchange.discountAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountAmount = new v4_1.ComplexTypeNumberPropertyField('DiscountAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BillOfExchange.fineAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fineAmount = new v4_1.ComplexTypeNumberPropertyField('FineAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BillOfExchange.interestDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.interestDate = new v4_1.ComplexTypeDatePropertyField('InterestDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BillOfExchange.discountDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountDate = new v4_1.ComplexTypeDatePropertyField('DiscountDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BillOfExchange.fineDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fineDate = new v4_1.ComplexTypeDatePropertyField('FineDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BillOfExchange.iofAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.iofAmount = new v4_1.ComplexTypeNumberPropertyField('IOFAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BillOfExchange.serviceFeeAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serviceFeeAmount = new v4_1.ComplexTypeNumberPropertyField('ServiceFeeAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BillOfExchange.otherExpensesAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.otherExpensesAmount = new v4_1.ComplexTypeNumberPropertyField('OtherExpensesAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BillOfExchange.otherIncomesAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.otherIncomesAmount = new v4_1.ComplexTypeNumberPropertyField('OtherIncomesAmount', _this, 'Edm.Double');
        return _this;
    }
    return BillOfExchangeField;
}(v4_1.ComplexTypeField));
exports.BillOfExchangeField = BillOfExchangeField;
var BillOfExchange;
(function (BillOfExchange) {
    function build(json) {
        return v4_1.createComplexType(json, {
            BillOfExchangeNo: function (billOfExchangeNo) { return ({ billOfExchangeNo: v4_1.edmToTs(billOfExchangeNo, 'Edm.Int32') }); },
            BillOfExchangeDueDate: function (billOfExchangeDueDate) { return ({ billOfExchangeDueDate: v4_1.edmToTs(billOfExchangeDueDate, 'Edm.DateTimeOffset') }); },
            Details: function (details) { return ({ details: v4_1.edmToTs(details, 'Edm.String') }); },
            ReferenceNo: function (referenceNo) { return ({ referenceNo: v4_1.edmToTs(referenceNo, 'Edm.String') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); },
            PaymentMethodCode: function (paymentMethodCode) { return ({ paymentMethodCode: v4_1.edmToTs(paymentMethodCode, 'Edm.String') }); },
            BPBankCode: function (bpBankCode) { return ({ bpBankCode: v4_1.edmToTs(bpBankCode, 'Edm.String') }); },
            BPBankAct: function (bpBankAct) { return ({ bpBankAct: v4_1.edmToTs(bpBankAct, 'Edm.String') }); },
            BPBankCountry: function (bpBankCountry) { return ({ bpBankCountry: v4_1.edmToTs(bpBankCountry, 'Edm.String') }); },
            ControlKey: function (controlKey) { return ({ controlKey: v4_1.edmToTs(controlKey, 'Edm.String') }); },
            PaymentEngineStatus1: function (paymentEngineStatus1) { return ({ paymentEngineStatus1: v4_1.edmToTs(paymentEngineStatus1, 'Edm.String') }); },
            PaymentEngineStatus2: function (paymentEngineStatus2) { return ({ paymentEngineStatus2: v4_1.edmToTs(paymentEngineStatus2, 'Edm.String') }); },
            PaymentEngineStatus3: function (paymentEngineStatus3) { return ({ paymentEngineStatus3: v4_1.edmToTs(paymentEngineStatus3, 'Edm.String') }); },
            StampTaxCode: function (stampTaxCode) { return ({ stampTaxCode: v4_1.edmToTs(stampTaxCode, 'Edm.String') }); },
            StampTaxAmount: function (stampTaxAmount) { return ({ stampTaxAmount: v4_1.edmToTs(stampTaxAmount, 'Edm.Double') }); },
            FolioNumber: function (folioNumber) { return ({ folioNumber: v4_1.edmToTs(folioNumber, 'Edm.Int32') }); },
            FolioPrefixString: function (folioPrefixString) { return ({ folioPrefixString: v4_1.edmToTs(folioPrefixString, 'Edm.String') }); },
            InterestAmount: function (interestAmount) { return ({ interestAmount: v4_1.edmToTs(interestAmount, 'Edm.Double') }); },
            DiscountAmount: function (discountAmount) { return ({ discountAmount: v4_1.edmToTs(discountAmount, 'Edm.Double') }); },
            FineAmount: function (fineAmount) { return ({ fineAmount: v4_1.edmToTs(fineAmount, 'Edm.Double') }); },
            InterestDate: function (interestDate) { return ({ interestDate: v4_1.edmToTs(interestDate, 'Edm.DateTimeOffset') }); },
            DiscountDate: function (discountDate) { return ({ discountDate: v4_1.edmToTs(discountDate, 'Edm.DateTimeOffset') }); },
            FineDate: function (fineDate) { return ({ fineDate: v4_1.edmToTs(fineDate, 'Edm.DateTimeOffset') }); },
            IOFAmount: function (iofAmount) { return ({ iofAmount: v4_1.edmToTs(iofAmount, 'Edm.Double') }); },
            ServiceFeeAmount: function (serviceFeeAmount) { return ({ serviceFeeAmount: v4_1.edmToTs(serviceFeeAmount, 'Edm.Double') }); },
            OtherExpensesAmount: function (otherExpensesAmount) { return ({ otherExpensesAmount: v4_1.edmToTs(otherExpensesAmount, 'Edm.Double') }); },
            OtherIncomesAmount: function (otherIncomesAmount) { return ({ otherIncomesAmount: v4_1.edmToTs(otherIncomesAmount, 'Edm.Double') }); }
        });
    }
    BillOfExchange.build = build;
})(BillOfExchange = exports.BillOfExchange || (exports.BillOfExchange = {}));
//# sourceMappingURL=BillOfExchange.js.map