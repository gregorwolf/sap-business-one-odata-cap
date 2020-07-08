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
exports.PaymentRunExportLine = exports.PaymentRunExportLineField = exports.createPaymentRunExportLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PaymentRunExportLine.build]] instead.
 */
function createPaymentRunExportLine(json) {
    return PaymentRunExportLine.build(json);
}
exports.createPaymentRunExportLine = createPaymentRunExportLine;
/**
 * PaymentRunExportLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PaymentRunExportLineField = /** @class */ (function (_super) {
    __extends(PaymentRunExportLineField, _super);
    function PaymentRunExportLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PaymentRunExportLine.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new v4_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.dateOfPaymentRun]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateOfPaymentRun = new v4_1.ComplexTypeDatePropertyField('DateOfPaymentRun', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentRunExportLine.paymentWizardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentWizardCode = new v4_1.ComplexTypeNumberPropertyField('PaymentWizardCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.vendorNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorNumber = new v4_1.ComplexTypeStringPropertyField('VendorNumber', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.customerNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerNumber = new v4_1.ComplexTypeStringPropertyField('CustomerNumber', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.paymentMeans]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentMeans = new v4_1.ComplexTypeStringPropertyField('PaymentMeans', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.paymentDocNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentDocNum = new v4_1.ComplexTypeNumberPropertyField('PaymentDocNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.fiscalYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fiscalYear = new v4_1.ComplexTypeDatePropertyField('FiscalYear', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentRunExportLine.vendorRefNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorRefNum = new v4_1.ComplexTypeStringPropertyField('VendorRefNum', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.documentObjectType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentObjectType = new v4_1.ComplexTypeStringPropertyField('DocumentObjectType', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.documentPostingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentPostingDate = new v4_1.ComplexTypeDatePropertyField('DocumentPostingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentRunExportLine.documentTaxDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentTaxDate = new v4_1.ComplexTypeDatePropertyField('DocumentTaxDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentRunExportLine.bpDebitPayableAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpDebitPayableAccount = new v4_1.ComplexTypeStringPropertyField('BPDebitPayableAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.documentCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentCurrency = new v4_1.ComplexTypeStringPropertyField('DocumentCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.documentRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentRate = new v4_1.ComplexTypeNumberPropertyField('DocumentRate', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentRunExportLine.documentTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentTotal = new v4_1.ComplexTypeNumberPropertyField('DocumentTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentRunExportLine.documentTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentTotalFc = new v4_1.ComplexTypeNumberPropertyField('DocumentTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentRunExportLine.documentTaxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentTaxAmount = new v4_1.ComplexTypeNumberPropertyField('DocumentTaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentRunExportLine.documentTaxAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentTaxAmountFc = new v4_1.ComplexTypeNumberPropertyField('DocumentTaxAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentRunExportLine.documentRemarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentRemarks = new v4_1.ComplexTypeStringPropertyField('DocumentRemarks', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.documentPaymentTerms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentPaymentTerms = new v4_1.ComplexTypeNumberPropertyField('DocumentPaymentTerms', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.paymentDocReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentDocReference = new v4_1.ComplexTypeStringPropertyField('PaymentDocReference', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.documentLocalCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentLocalCurrency = new v4_1.ComplexTypeStringPropertyField('DocumentLocalCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.paymentTermsPeriod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentTermsPeriod = new v4_1.ComplexTypeNumberPropertyField('PaymentTermsPeriod', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.documentObjectTypeEx]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentObjectTypeEx = new v4_1.ComplexTypeStringPropertyField('DocumentObjectTypeEx', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.documentNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentNumber = new v4_1.ComplexTypeNumberPropertyField('DocumentNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.paymentNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentNumber = new v4_1.ComplexTypeNumberPropertyField('PaymentNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.paymentOrderNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentOrderNum = new v4_1.ComplexTypeNumberPropertyField('PaymentOrderNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.freeText1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeText1 = new v4_1.ComplexTypeStringPropertyField('FreeText1', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.freeText2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeText2 = new v4_1.ComplexTypeStringPropertyField('FreeText2', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.freeText3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeText3 = new v4_1.ComplexTypeStringPropertyField('FreeText3', _this, 'Edm.String');
        return _this;
    }
    return PaymentRunExportLineField;
}(v4_1.ComplexTypeField));
exports.PaymentRunExportLineField = PaymentRunExportLineField;
var PaymentRunExportLine;
(function (PaymentRunExportLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            RowNumber: function (rowNumber) { return ({ rowNumber: v4_1.edmToTs(rowNumber, 'Edm.Int32') }); },
            DateOfPaymentRun: function (dateOfPaymentRun) { return ({ dateOfPaymentRun: v4_1.edmToTs(dateOfPaymentRun, 'Edm.DateTimeOffset') }); },
            PaymentWizardCode: function (paymentWizardCode) { return ({ paymentWizardCode: v4_1.edmToTs(paymentWizardCode, 'Edm.Int32') }); },
            VendorNumber: function (vendorNumber) { return ({ vendorNumber: v4_1.edmToTs(vendorNumber, 'Edm.String') }); },
            CustomerNumber: function (customerNumber) { return ({ customerNumber: v4_1.edmToTs(customerNumber, 'Edm.String') }); },
            PaymentMeans: function (paymentMeans) { return ({ paymentMeans: v4_1.edmToTs(paymentMeans, 'Edm.String') }); },
            PaymentDocNum: function (paymentDocNum) { return ({ paymentDocNum: v4_1.edmToTs(paymentDocNum, 'Edm.Int32') }); },
            FiscalYear: function (fiscalYear) { return ({ fiscalYear: v4_1.edmToTs(fiscalYear, 'Edm.DateTimeOffset') }); },
            VendorRefNum: function (vendorRefNum) { return ({ vendorRefNum: v4_1.edmToTs(vendorRefNum, 'Edm.String') }); },
            DocumentObjectType: function (documentObjectType) { return ({ documentObjectType: v4_1.edmToTs(documentObjectType, 'Edm.String') }); },
            DocumentPostingDate: function (documentPostingDate) { return ({ documentPostingDate: v4_1.edmToTs(documentPostingDate, 'Edm.DateTimeOffset') }); },
            DocumentTaxDate: function (documentTaxDate) { return ({ documentTaxDate: v4_1.edmToTs(documentTaxDate, 'Edm.DateTimeOffset') }); },
            BPDebitPayableAccount: function (bpDebitPayableAccount) { return ({ bpDebitPayableAccount: v4_1.edmToTs(bpDebitPayableAccount, 'Edm.String') }); },
            DocumentCurrency: function (documentCurrency) { return ({ documentCurrency: v4_1.edmToTs(documentCurrency, 'Edm.String') }); },
            DocumentRate: function (documentRate) { return ({ documentRate: v4_1.edmToTs(documentRate, 'Edm.Double') }); },
            DocumentTotal: function (documentTotal) { return ({ documentTotal: v4_1.edmToTs(documentTotal, 'Edm.Double') }); },
            DocumentTotalFC: function (documentTotalFc) { return ({ documentTotalFc: v4_1.edmToTs(documentTotalFc, 'Edm.Double') }); },
            DocumentTaxAmount: function (documentTaxAmount) { return ({ documentTaxAmount: v4_1.edmToTs(documentTaxAmount, 'Edm.Double') }); },
            DocumentTaxAmountFC: function (documentTaxAmountFc) { return ({ documentTaxAmountFc: v4_1.edmToTs(documentTaxAmountFc, 'Edm.Double') }); },
            DocumentRemarks: function (documentRemarks) { return ({ documentRemarks: v4_1.edmToTs(documentRemarks, 'Edm.String') }); },
            DocumentPaymentTerms: function (documentPaymentTerms) { return ({ documentPaymentTerms: v4_1.edmToTs(documentPaymentTerms, 'Edm.Int32') }); },
            PaymentDocReference: function (paymentDocReference) { return ({ paymentDocReference: v4_1.edmToTs(paymentDocReference, 'Edm.String') }); },
            DocumentLocalCurrency: function (documentLocalCurrency) { return ({ documentLocalCurrency: v4_1.edmToTs(documentLocalCurrency, 'Edm.String') }); },
            PaymentTermsPeriod: function (paymentTermsPeriod) { return ({ paymentTermsPeriod: v4_1.edmToTs(paymentTermsPeriod, 'Edm.Int32') }); },
            DocumentObjectTypeEx: function (documentObjectTypeEx) { return ({ documentObjectTypeEx: v4_1.edmToTs(documentObjectTypeEx, 'Edm.String') }); },
            DocumentNumber: function (documentNumber) { return ({ documentNumber: v4_1.edmToTs(documentNumber, 'Edm.Int32') }); },
            PaymentNumber: function (paymentNumber) { return ({ paymentNumber: v4_1.edmToTs(paymentNumber, 'Edm.Int32') }); },
            PaymentOrderNum: function (paymentOrderNum) { return ({ paymentOrderNum: v4_1.edmToTs(paymentOrderNum, 'Edm.Int32') }); },
            FreeText1: function (freeText1) { return ({ freeText1: v4_1.edmToTs(freeText1, 'Edm.String') }); },
            FreeText2: function (freeText2) { return ({ freeText2: v4_1.edmToTs(freeText2, 'Edm.String') }); },
            FreeText3: function (freeText3) { return ({ freeText3: v4_1.edmToTs(freeText3, 'Edm.String') }); }
        });
    }
    PaymentRunExportLine.build = build;
})(PaymentRunExportLine = exports.PaymentRunExportLine || (exports.PaymentRunExportLine = {}));
//# sourceMappingURL=PaymentRunExportLine.js.map