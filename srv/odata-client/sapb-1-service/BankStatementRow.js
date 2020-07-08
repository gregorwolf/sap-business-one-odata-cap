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
exports.BankStatementRow = exports.BankStatementRowField = exports.createBankStatementRow = void 0;
var MultiplePayment_1 = require("./MultiplePayment");
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function BankStatementRowField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BankStatementRow.externalBankStatementNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.externalBankStatementNo = new v4_1.ComplexTypeNumberPropertyField('ExternalBankStatementNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.accountNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountNumber = new v4_1.ComplexTypeStringPropertyField('AccountNumber', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new v4_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.accountName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountName = new v4_1.ComplexTypeStringPropertyField('AccountName', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.reference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reference = new v4_1.ComplexTypeStringPropertyField('Reference', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new v4_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BankStatementRow.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new v4_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.debitAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitAmountFc = new v4_1.ComplexTypeNumberPropertyField('DebitAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.creditAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditAmountFc = new v4_1.ComplexTypeNumberPropertyField('CreditAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.creditCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditCurrency = new v4_1.ComplexTypeStringPropertyField('CreditCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.balance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.balance = new v4_1.ComplexTypeNumberPropertyField('Balance', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.reconciliationNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationNo = new v4_1.ComplexTypeNumberPropertyField('ReconciliationNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.externalCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.externalCode = new v4_1.ComplexTypeStringPropertyField('ExternalCode', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new v4_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.bpName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpName = new v4_1.ComplexTypeStringPropertyField('BPName', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.statementNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statementNumber = new v4_1.ComplexTypeNumberPropertyField('StatementNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.rowStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowStatus = new v4_1.ComplexTypeStringPropertyField('RowStatus', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new v4_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.details2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details2 = new v4_1.ComplexTypeStringPropertyField('Details2', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.paymentReferenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentReferenceNo = new v4_1.ComplexTypeStringPropertyField('PaymentReferenceNo', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.bankStmtLineDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankStmtLineDate = new v4_1.ComplexTypeDatePropertyField('BankStmtLineDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BankStatementRow.bankStmtDueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankStmtDueDate = new v4_1.ComplexTypeDatePropertyField('BankStmtDueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BankStatementRow.internalBankOpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalBankOpCode = new v4_1.ComplexTypeNumberPropertyField('InternalBankOpCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.bpBankAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpBankAccount = new v4_1.ComplexTypeStringPropertyField('BPBankAccount', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.debitAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitAmountLc = new v4_1.ComplexTypeNumberPropertyField('DebitAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.creditAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditAmountLc = new v4_1.ComplexTypeNumberPropertyField('CreditAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.exchangeRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exchangeRate = new v4_1.ComplexTypeNumberPropertyField('ExchangeRate', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.ibaNofBpBankAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ibaNofBpBankAccount = new v4_1.ComplexTypeStringPropertyField('IBANofBPBankAccount', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeOnTheLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeOnTheLine = new v4_1.ComplexTypeNumberPropertyField('FeeOnTheLine', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.vatAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatAmountLc = new v4_1.ComplexTypeNumberPropertyField('VATAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.vatAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatAmountFc = new v4_1.ComplexTypeNumberPropertyField('VATAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementRow.journalEntryId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.journalEntryId = new v4_1.ComplexTypeNumberPropertyField('JournalEntryID', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.paymentId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentId = new v4_1.ComplexTypeNumberPropertyField('PaymentID', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.glAccountforFee]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glAccountforFee = new v4_1.ComplexTypeStringPropertyField('GLAccountforFee', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeProfitCenter]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeProfitCenter = new v4_1.ComplexTypeStringPropertyField('FeeProfitCenter', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeProject]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeProject = new v4_1.ComplexTypeStringPropertyField('FeeProject', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.bpBankCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpBankCode = new v4_1.ComplexTypeStringPropertyField('BPBankCode', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeDistributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeDistributionRule = new v4_1.ComplexTypeStringPropertyField('FeeDistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeDistributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeDistributionRule2 = new v4_1.ComplexTypeStringPropertyField('FeeDistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeDistributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeDistributionRule3 = new v4_1.ComplexTypeStringPropertyField('FeeDistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeDistributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeDistributionRule4 = new v4_1.ComplexTypeStringPropertyField('FeeDistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.feeDistributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.feeDistributionRule5 = new v4_1.ComplexTypeStringPropertyField('FeeDistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.bpbicSwiftCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpbicSwiftCode = new v4_1.ComplexTypeStringPropertyField('BPBICSwiftCode', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.folioPrefixString]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.folioPrefixString = new v4_1.ComplexTypeStringPropertyField('FolioPrefixString', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementRow.folioNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.folioNumber = new v4_1.ComplexTypeNumberPropertyField('FolioNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementRow.multiplePayments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.multiplePayments = new MultiplePayment_1.MultiplePaymentField('MultiplePayments', _this);
        return _this;
    }
    return BankStatementRowField;
}(v4_1.ComplexTypeField));
exports.BankStatementRowField = BankStatementRowField;
var BankStatementRow;
(function (BankStatementRow) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ExternalBankStatementNo: function (externalBankStatementNo) { return ({ externalBankStatementNo: v4_1.edmToTs(externalBankStatementNo, 'Edm.Int32') }); },
            AccountNumber: function (accountNumber) { return ({ accountNumber: v4_1.edmToTs(accountNumber, 'Edm.String') }); },
            SequenceNo: function (sequenceNo) { return ({ sequenceNo: v4_1.edmToTs(sequenceNo, 'Edm.Int32') }); },
            AccountName: function (accountName) { return ({ accountName: v4_1.edmToTs(accountName, 'Edm.String') }); },
            Reference: function (reference) { return ({ reference: v4_1.edmToTs(reference, 'Edm.String') }); },
            DueDate: function (dueDate) { return ({ dueDate: v4_1.edmToTs(dueDate, 'Edm.DateTimeOffset') }); },
            Details: function (details) { return ({ details: v4_1.edmToTs(details, 'Edm.String') }); },
            DebitAmountFC: function (debitAmountFc) { return ({ debitAmountFc: v4_1.edmToTs(debitAmountFc, 'Edm.Double') }); },
            CreditAmountFC: function (creditAmountFc) { return ({ creditAmountFc: v4_1.edmToTs(creditAmountFc, 'Edm.Double') }); },
            CreditCurrency: function (creditCurrency) { return ({ creditCurrency: v4_1.edmToTs(creditCurrency, 'Edm.String') }); },
            Balance: function (balance) { return ({ balance: v4_1.edmToTs(balance, 'Edm.Double') }); },
            ReconciliationNo: function (reconciliationNo) { return ({ reconciliationNo: v4_1.edmToTs(reconciliationNo, 'Edm.Int32') }); },
            ExternalCode: function (externalCode) { return ({ externalCode: v4_1.edmToTs(externalCode, 'Edm.String') }); },
            BPCode: function (bpCode) { return ({ bpCode: v4_1.edmToTs(bpCode, 'Edm.String') }); },
            BPName: function (bpName) { return ({ bpName: v4_1.edmToTs(bpName, 'Edm.String') }); },
            StatementNumber: function (statementNumber) { return ({ statementNumber: v4_1.edmToTs(statementNumber, 'Edm.Int32') }); },
            RowStatus: function (rowStatus) { return ({ rowStatus: v4_1.edmToTs(rowStatus, 'Edm.String') }); },
            VisualOrder: function (visualOrder) { return ({ visualOrder: v4_1.edmToTs(visualOrder, 'Edm.Int32') }); },
            Details2: function (details2) { return ({ details2: v4_1.edmToTs(details2, 'Edm.String') }); },
            PaymentReferenceNo: function (paymentReferenceNo) { return ({ paymentReferenceNo: v4_1.edmToTs(paymentReferenceNo, 'Edm.String') }); },
            BankStmtLineDate: function (bankStmtLineDate) { return ({ bankStmtLineDate: v4_1.edmToTs(bankStmtLineDate, 'Edm.DateTimeOffset') }); },
            BankStmtDueDate: function (bankStmtDueDate) { return ({ bankStmtDueDate: v4_1.edmToTs(bankStmtDueDate, 'Edm.DateTimeOffset') }); },
            InternalBankOpCode: function (internalBankOpCode) { return ({ internalBankOpCode: v4_1.edmToTs(internalBankOpCode, 'Edm.Int32') }); },
            BPBankAccount: function (bpBankAccount) { return ({ bpBankAccount: v4_1.edmToTs(bpBankAccount, 'Edm.String') }); },
            DebitAmountLC: function (debitAmountLc) { return ({ debitAmountLc: v4_1.edmToTs(debitAmountLc, 'Edm.Double') }); },
            CreditAmountLC: function (creditAmountLc) { return ({ creditAmountLc: v4_1.edmToTs(creditAmountLc, 'Edm.Double') }); },
            ExchangeRate: function (exchangeRate) { return ({ exchangeRate: v4_1.edmToTs(exchangeRate, 'Edm.Double') }); },
            IBANofBPBankAccount: function (ibaNofBpBankAccount) { return ({ ibaNofBpBankAccount: v4_1.edmToTs(ibaNofBpBankAccount, 'Edm.String') }); },
            FeeOnTheLine: function (feeOnTheLine) { return ({ feeOnTheLine: v4_1.edmToTs(feeOnTheLine, 'Edm.Double') }); },
            VATAmountLC: function (vatAmountLc) { return ({ vatAmountLc: v4_1.edmToTs(vatAmountLc, 'Edm.Double') }); },
            VATAmountFC: function (vatAmountFc) { return ({ vatAmountFc: v4_1.edmToTs(vatAmountFc, 'Edm.Double') }); },
            JournalEntryID: function (journalEntryId) { return ({ journalEntryId: v4_1.edmToTs(journalEntryId, 'Edm.Int32') }); },
            PaymentID: function (paymentId) { return ({ paymentId: v4_1.edmToTs(paymentId, 'Edm.Int32') }); },
            GLAccountforFee: function (glAccountforFee) { return ({ glAccountforFee: v4_1.edmToTs(glAccountforFee, 'Edm.String') }); },
            FeeProfitCenter: function (feeProfitCenter) { return ({ feeProfitCenter: v4_1.edmToTs(feeProfitCenter, 'Edm.String') }); },
            FeeProject: function (feeProject) { return ({ feeProject: v4_1.edmToTs(feeProject, 'Edm.String') }); },
            BPBankCode: function (bpBankCode) { return ({ bpBankCode: v4_1.edmToTs(bpBankCode, 'Edm.String') }); },
            FeeDistributionRule: function (feeDistributionRule) { return ({ feeDistributionRule: v4_1.edmToTs(feeDistributionRule, 'Edm.String') }); },
            FeeDistributionRule2: function (feeDistributionRule2) { return ({ feeDistributionRule2: v4_1.edmToTs(feeDistributionRule2, 'Edm.String') }); },
            FeeDistributionRule3: function (feeDistributionRule3) { return ({ feeDistributionRule3: v4_1.edmToTs(feeDistributionRule3, 'Edm.String') }); },
            FeeDistributionRule4: function (feeDistributionRule4) { return ({ feeDistributionRule4: v4_1.edmToTs(feeDistributionRule4, 'Edm.String') }); },
            FeeDistributionRule5: function (feeDistributionRule5) { return ({ feeDistributionRule5: v4_1.edmToTs(feeDistributionRule5, 'Edm.String') }); },
            BPBICSwiftCode: function (bpbicSwiftCode) { return ({ bpbicSwiftCode: v4_1.edmToTs(bpbicSwiftCode, 'Edm.String') }); },
            FolioPrefixString: function (folioPrefixString) { return ({ folioPrefixString: v4_1.edmToTs(folioPrefixString, 'Edm.String') }); },
            FolioNumber: function (folioNumber) { return ({ folioNumber: v4_1.edmToTs(folioNumber, 'Edm.Int32') }); },
            MultiplePayments: function (multiplePayments) { return ({ multiplePayments: MultiplePayment_1.MultiplePayment.build(multiplePayments) }); }
        });
    }
    BankStatementRow.build = build;
})(BankStatementRow = exports.BankStatementRow || (exports.BankStatementRow = {}));
//# sourceMappingURL=BankStatementRow.js.map