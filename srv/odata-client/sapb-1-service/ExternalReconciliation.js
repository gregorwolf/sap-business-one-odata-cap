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
exports.ExternalReconciliation = exports.ExternalReconciliationField = exports.createExternalReconciliation = void 0;
var ReconciliationJournalEntryLine_1 = require("./ReconciliationJournalEntryLine");
var ReconciliationBankStatementLine_1 = require("./ReconciliationBankStatementLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ExternalReconciliation.build]] instead.
 */
function createExternalReconciliation(json) {
    return ExternalReconciliation.build(json);
}
exports.createExternalReconciliation = createExternalReconciliation;
/**
 * ExternalReconciliationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ExternalReconciliationField = /** @class */ (function (_super) {
    __extends(ExternalReconciliationField, _super);
    function ExternalReconciliationField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ExternalReconciliation.accountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCode = new v4_1.ComplexTypeStringPropertyField('AccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[ExternalReconciliation.reconciliationNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationNo = new v4_1.ComplexTypeNumberPropertyField('ReconciliationNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExternalReconciliation.amount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amount = new v4_1.ComplexTypeNumberPropertyField('Amount', _this, 'Edm.Double');
        /**
         * Representation of the [[ExternalReconciliation.currencyType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currencyType = new v4_1.ComplexTypeStringPropertyField('CurrencyType', _this, 'Edm.String');
        /**
         * Representation of the [[ExternalReconciliation.reconciliationType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationType = new v4_1.ComplexTypeStringPropertyField('ReconciliationType', _this, 'Edm.String');
        /**
         * Representation of the [[ExternalReconciliation.reconciliationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationDate = new v4_1.ComplexTypeDatePropertyField('ReconciliationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExternalReconciliation.creationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationDate = new v4_1.ComplexTypeDatePropertyField('CreationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExternalReconciliation.reconciliationJournalEntryLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationJournalEntryLines = new ReconciliationJournalEntryLine_1.ReconciliationJournalEntryLineField('ReconciliationJournalEntryLines', _this);
        /**
         * Representation of the [[ExternalReconciliation.reconciliationBankStatementLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationBankStatementLines = new ReconciliationBankStatementLine_1.ReconciliationBankStatementLineField('ReconciliationBankStatementLines', _this);
        return _this;
    }
    return ExternalReconciliationField;
}(v4_1.ComplexTypeField));
exports.ExternalReconciliationField = ExternalReconciliationField;
var ExternalReconciliation;
(function (ExternalReconciliation) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AccountCode: function (accountCode) { return ({ accountCode: v4_1.edmToTs(accountCode, 'Edm.String') }); },
            ReconciliationNo: function (reconciliationNo) { return ({ reconciliationNo: v4_1.edmToTs(reconciliationNo, 'Edm.Int32') }); },
            Amount: function (amount) { return ({ amount: v4_1.edmToTs(amount, 'Edm.Double') }); },
            CurrencyType: function (currencyType) { return ({ currencyType: v4_1.edmToTs(currencyType, 'Edm.String') }); },
            ReconciliationType: function (reconciliationType) { return ({ reconciliationType: v4_1.edmToTs(reconciliationType, 'Edm.String') }); },
            ReconciliationDate: function (reconciliationDate) { return ({ reconciliationDate: v4_1.edmToTs(reconciliationDate, 'Edm.DateTimeOffset') }); },
            CreationDate: function (creationDate) { return ({ creationDate: v4_1.edmToTs(creationDate, 'Edm.DateTimeOffset') }); },
            ReconciliationJournalEntryLines: function (reconciliationJournalEntryLines) { return ({ reconciliationJournalEntryLines: ReconciliationJournalEntryLine_1.ReconciliationJournalEntryLine.build(reconciliationJournalEntryLines) }); },
            ReconciliationBankStatementLines: function (reconciliationBankStatementLines) { return ({ reconciliationBankStatementLines: ReconciliationBankStatementLine_1.ReconciliationBankStatementLine.build(reconciliationBankStatementLines) }); }
        });
    }
    ExternalReconciliation.build = build;
})(ExternalReconciliation = exports.ExternalReconciliation || (exports.ExternalReconciliation = {}));
//# sourceMappingURL=ExternalReconciliation.js.map