"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of PaymentRunExportLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PaymentRunExportLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PaymentRunExportLine) || this;
        /**
         * Representation of the [[PaymentRunExportLine.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new core_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.dateOfPaymentRun]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateOfPaymentRun = new core_1.ComplexTypeDatePropertyField('DateOfPaymentRun', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentRunExportLine.paymentWizardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentWizardCode = new core_1.ComplexTypeNumberPropertyField('PaymentWizardCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.vendorNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorNumber = new core_1.ComplexTypeStringPropertyField('VendorNumber', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.customerNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerNumber = new core_1.ComplexTypeStringPropertyField('CustomerNumber', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.paymentMeans]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentMeans = new core_1.ComplexTypeStringPropertyField('PaymentMeans', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.paymentDocNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentDocNum = new core_1.ComplexTypeNumberPropertyField('PaymentDocNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.fiscalYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fiscalYear = new core_1.ComplexTypeDatePropertyField('FiscalYear', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentRunExportLine.vendorRefNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorRefNum = new core_1.ComplexTypeStringPropertyField('VendorRefNum', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.documentObjectType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentObjectType = new core_1.ComplexTypeStringPropertyField('DocumentObjectType', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.documentPostingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentPostingDate = new core_1.ComplexTypeDatePropertyField('DocumentPostingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentRunExportLine.documentTaxDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentTaxDate = new core_1.ComplexTypeDatePropertyField('DocumentTaxDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentRunExportLine.bpDebitPayableAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpDebitPayableAccount = new core_1.ComplexTypeStringPropertyField('BPDebitPayableAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.documentCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentCurrency = new core_1.ComplexTypeStringPropertyField('DocumentCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.documentRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentRate = new core_1.ComplexTypeNumberPropertyField('DocumentRate', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentRunExportLine.documentTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentTotal = new core_1.ComplexTypeNumberPropertyField('DocumentTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentRunExportLine.documentTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentTotalFc = new core_1.ComplexTypeNumberPropertyField('DocumentTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentRunExportLine.documentTaxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentTaxAmount = new core_1.ComplexTypeNumberPropertyField('DocumentTaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentRunExportLine.documentTaxAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentTaxAmountFc = new core_1.ComplexTypeNumberPropertyField('DocumentTaxAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentRunExportLine.documentRemarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentRemarks = new core_1.ComplexTypeStringPropertyField('DocumentRemarks', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.documentPaymentTerms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentPaymentTerms = new core_1.ComplexTypeNumberPropertyField('DocumentPaymentTerms', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.paymentDocReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentDocReference = new core_1.ComplexTypeStringPropertyField('PaymentDocReference', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.documentLocalCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentLocalCurrency = new core_1.ComplexTypeStringPropertyField('DocumentLocalCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.paymentTermsPeriod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentTermsPeriod = new core_1.ComplexTypeNumberPropertyField('PaymentTermsPeriod', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.documentObjectTypeEx]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentObjectTypeEx = new core_1.ComplexTypeStringPropertyField('DocumentObjectTypeEx', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.documentNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentNumber = new core_1.ComplexTypeNumberPropertyField('DocumentNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.paymentNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentNumber = new core_1.ComplexTypeNumberPropertyField('PaymentNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.paymentOrderNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentOrderNum = new core_1.ComplexTypeNumberPropertyField('PaymentOrderNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentRunExportLine.freeText1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeText1 = new core_1.ComplexTypeStringPropertyField('FreeText1', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.freeText2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeText2 = new core_1.ComplexTypeStringPropertyField('FreeText2', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentRunExportLine.freeText3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeText3 = new core_1.ComplexTypeStringPropertyField('FreeText3', _this, 'Edm.String');
        return _this;
    }
    return PaymentRunExportLineField;
}(core_1.ComplexTypeField));
exports.PaymentRunExportLineField = PaymentRunExportLineField;
var PaymentRunExportLine;
(function (PaymentRunExportLine) {
    /**
     * Metadata information on all properties of the `PaymentRunExportLine` complex type.
     */
    PaymentRunExportLine._propertyMetadata = [{
            originalName: 'RowNumber',
            name: 'rowNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DateOfPaymentRun',
            name: 'dateOfPaymentRun',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'PaymentWizardCode',
            name: 'paymentWizardCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'VendorNumber',
            name: 'vendorNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CustomerNumber',
            name: 'customerNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PaymentMeans',
            name: 'paymentMeans',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PaymentDocNum',
            name: 'paymentDocNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'FiscalYear',
            name: 'fiscalYear',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'VendorRefNum',
            name: 'vendorRefNum',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocumentObjectType',
            name: 'documentObjectType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocumentPostingDate',
            name: 'documentPostingDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'DocumentTaxDate',
            name: 'documentTaxDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'BPDebitPayableAccount',
            name: 'bpDebitPayableAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocumentCurrency',
            name: 'documentCurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocumentRate',
            name: 'documentRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DocumentTotal',
            name: 'documentTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DocumentTotalFC',
            name: 'documentTotalFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DocumentTaxAmount',
            name: 'documentTaxAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DocumentTaxAmountFC',
            name: 'documentTaxAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DocumentRemarks',
            name: 'documentRemarks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocumentPaymentTerms',
            name: 'documentPaymentTerms',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PaymentDocReference',
            name: 'paymentDocReference',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocumentLocalCurrency',
            name: 'documentLocalCurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PaymentTermsPeriod',
            name: 'paymentTermsPeriod',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocumentObjectTypeEx',
            name: 'documentObjectTypeEx',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocumentNumber',
            name: 'documentNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PaymentNumber',
            name: 'paymentNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PaymentOrderNum',
            name: 'paymentOrderNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'FreeText1',
            name: 'freeText1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FreeText2',
            name: 'freeText2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FreeText3',
            name: 'freeText3',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PaymentRunExportLine);
    }
    PaymentRunExportLine.build = build;
})(PaymentRunExportLine = exports.PaymentRunExportLine || (exports.PaymentRunExportLine = {}));
//# sourceMappingURL=PaymentRunExportLine.js.map