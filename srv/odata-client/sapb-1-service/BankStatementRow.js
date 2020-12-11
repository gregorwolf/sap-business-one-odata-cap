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
exports.BankStatementRow = exports.BankStatementRowField = exports.createBankStatementRow = void 0;
var MultiplePayment_1 = require("./MultiplePayment");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BankStatementRow.build]] instead.
 */
function createBankStatementRow(json) {
    return BankStatementRow.build(json);
}
exports.createBankStatementRow = createBankStatementRow;
/**
 * BankStatementRowField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BankStatementRowField = /** @class */ (function (_super) {
    __extends(BankStatementRowField, _super);
    /**
     * Creates an instance of BankStatementRowField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BankStatementRowField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BankStatementRow) || this;
        /**
         * Representation of the [[BankStatementRow.externalBankStatementNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.externalBankStatementNo = new core_1.ComplexTypeNumberPropertyField('ExternalBankStatementNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.accountNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountNumber = new core_1.ComplexTypeStringPropertyField('AccountNumber', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new core_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.accountName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountName = new core_1.ComplexTypeStringPropertyField('AccountName', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.reference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reference = new core_1.ComplexTypeStringPropertyField('Reference', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new core_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BankStatementRow.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new core_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.debitAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitAmountFc = new core_1.ComplexTypeNumberPropertyField('DebitAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.creditAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditAmountFc = new core_1.ComplexTypeNumberPropertyField('CreditAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.creditCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditCurrency = new core_1.ComplexTypeStringPropertyField('CreditCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.balance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.balance = new core_1.ComplexTypeNumberPropertyField('Balance', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.reconciliationNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationNo = new core_1.ComplexTypeNumberPropertyField('ReconciliationNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.externalCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.externalCode = new core_1.ComplexTypeStringPropertyField('ExternalCode', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.bpName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpName = new core_1.ComplexTypeStringPropertyField('BPName', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.statementNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statementNumber = new core_1.ComplexTypeNumberPropertyField('StatementNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.rowStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowStatus = new core_1.ComplexTypeStringPropertyField('RowStatus', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new core_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.docNumType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docNumType = new core_1.ComplexTypeEnumPropertyField('DocNumType', _this);
        /**
         * Representation of the [[BankStatementRow.details2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details2 = new core_1.ComplexTypeStringPropertyField('Details2', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.paymentReferenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentReferenceNo = new core_1.ComplexTypeStringPropertyField('PaymentReferenceNo', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.createMethod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.createMethod = new core_1.ComplexTypeEnumPropertyField('CreateMethod', _this);
        /**
         * Representation of the [[BankStatementRow.bankStmtLineDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankStmtLineDate = new core_1.ComplexTypeDatePropertyField('BankStmtLineDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BankStatementRow.bankStmtDueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankStmtDueDate = new core_1.ComplexTypeDatePropertyField('BankStmtDueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BankStatementRow.internalBankOpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalBankOpCode = new core_1.ComplexTypeNumberPropertyField('InternalBankOpCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.bpBankAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpBankAccount = new core_1.ComplexTypeStringPropertyField('BPBankAccount', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.debitAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitAmountLc = new core_1.ComplexTypeNumberPropertyField('DebitAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.creditAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditAmountLc = new core_1.ComplexTypeNumberPropertyField('CreditAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.exchangeRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exchangeRate = new core_1.ComplexTypeNumberPropertyField('ExchangeRate', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.ibaNofBpBankAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ibaNofBpBankAccount = new core_1.ComplexTypeStringPropertyField('IBANofBPBankAccount', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeOnTheLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeOnTheLine = new core_1.ComplexTypeNumberPropertyField('FeeOnTheLine', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.vatAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatAmountLc = new core_1.ComplexTypeNumberPropertyField('VATAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.vatAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatAmountFc = new core_1.ComplexTypeNumberPropertyField('VATAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.journalEntryId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.journalEntryId = new core_1.ComplexTypeNumberPropertyField('JournalEntryID', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.paymentId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentId = new core_1.ComplexTypeNumberPropertyField('PaymentID', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.documentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentType = new core_1.ComplexTypeEnumPropertyField('DocumentType', _this);
        /**
         * Representation of the [[BankStatementRow.postingMethod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postingMethod = new core_1.ComplexTypeEnumPropertyField('PostingMethod', _this);
        /**
         * Representation of the [[BankStatementRow.glAccountforFee]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glAccountforFee = new core_1.ComplexTypeStringPropertyField('GLAccountforFee', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeProfitCenter]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeProfitCenter = new core_1.ComplexTypeStringPropertyField('FeeProfitCenter', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeProject]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeProject = new core_1.ComplexTypeStringPropertyField('FeeProject', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.bpBankCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpBankCode = new core_1.ComplexTypeStringPropertyField('BPBankCode', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeDistributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeDistributionRule = new core_1.ComplexTypeStringPropertyField('FeeDistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeDistributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeDistributionRule2 = new core_1.ComplexTypeStringPropertyField('FeeDistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeDistributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeDistributionRule3 = new core_1.ComplexTypeStringPropertyField('FeeDistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeDistributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeDistributionRule4 = new core_1.ComplexTypeStringPropertyField('FeeDistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeDistributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeDistributionRule5 = new core_1.ComplexTypeStringPropertyField('FeeDistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.bpbicSwiftCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpbicSwiftCode = new core_1.ComplexTypeStringPropertyField('BPBICSwiftCode', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.source]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.source = new core_1.ComplexTypeEnumPropertyField('Source', _this);
        /**
         * Representation of the [[BankStatementRow.folioPrefixString]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.folioPrefixString = new core_1.ComplexTypeStringPropertyField('FolioPrefixString', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.folioNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.folioNumber = new core_1.ComplexTypeNumberPropertyField('FolioNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.multiplePayments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.multiplePayments = new core_1.CollectionField('MultiplePayments', _this, MultiplePayment_1.MultiplePayment);
        return _this;
    }
    return BankStatementRowField;
}(core_1.ComplexTypeField));
exports.BankStatementRowField = BankStatementRowField;
var BankStatementRow;
(function (BankStatementRow) {
    /**
     * Metadata information on all properties of the `BankStatementRow` complex type.
     */
    BankStatementRow._propertyMetadata = [{
            originalName: 'ExternalBankStatementNo',
            name: 'externalBankStatementNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AccountNumber',
            name: 'accountNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SequenceNo',
            name: 'sequenceNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AccountName',
            name: 'accountName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Reference',
            name: 'reference',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DueDate',
            name: 'dueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Details',
            name: 'details',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DebitAmountFC',
            name: 'debitAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CreditAmountFC',
            name: 'creditAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CreditCurrency',
            name: 'creditCurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Balance',
            name: 'balance',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ReconciliationNo',
            name: 'reconciliationNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ExternalCode',
            name: 'externalCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPCode',
            name: 'bpCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPName',
            name: 'bpName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StatementNumber',
            name: 'statementNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RowStatus',
            name: 'rowStatus',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VisualOrder',
            name: 'visualOrder',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocNumType',
            name: 'docNumType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Details2',
            name: 'details2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PaymentReferenceNo',
            name: 'paymentReferenceNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CreateMethod',
            name: 'createMethod',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BankStmtLineDate',
            name: 'bankStmtLineDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'BankStmtDueDate',
            name: 'bankStmtDueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'InternalBankOpCode',
            name: 'internalBankOpCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BPBankAccount',
            name: 'bpBankAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DebitAmountLC',
            name: 'debitAmountLc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CreditAmountLC',
            name: 'creditAmountLc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ExchangeRate',
            name: 'exchangeRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'IBANofBPBankAccount',
            name: 'ibaNofBpBankAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FeeOnTheLine',
            name: 'feeOnTheLine',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VATAmountLC',
            name: 'vatAmountLc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VATAmountFC',
            name: 'vatAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'JournalEntryID',
            name: 'journalEntryId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PaymentID',
            name: 'paymentId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocumentType',
            name: 'documentType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PostingMethod',
            name: 'postingMethod',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'GLAccountforFee',
            name: 'glAccountforFee',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FeeProfitCenter',
            name: 'feeProfitCenter',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FeeProject',
            name: 'feeProject',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPBankCode',
            name: 'bpBankCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FeeDistributionRule',
            name: 'feeDistributionRule',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FeeDistributionRule2',
            name: 'feeDistributionRule2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FeeDistributionRule3',
            name: 'feeDistributionRule3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FeeDistributionRule4',
            name: 'feeDistributionRule4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FeeDistributionRule5',
            name: 'feeDistributionRule5',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPBICSwiftCode',
            name: 'bpbicSwiftCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Source',
            name: 'source',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'FolioPrefixString',
            name: 'folioPrefixString',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FolioNumber',
            name: 'folioNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'MultiplePayments',
            name: 'multiplePayments',
            type: MultiplePayment_1.MultiplePayment,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BankStatementRow);
    }
    BankStatementRow.build = build;
})(BankStatementRow = exports.BankStatementRow || (exports.BankStatementRow = {}));
//# sourceMappingURL=BankStatementRow.js.map