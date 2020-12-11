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
exports.ExternalReconciliation = exports.ExternalReconciliationField = exports.createExternalReconciliation = void 0;
var ReconciliationJournalEntryLine_1 = require("./ReconciliationJournalEntryLine");
var ReconciliationBankStatementLine_1 = require("./ReconciliationBankStatementLine");
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ExternalReconciliationField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ExternalReconciliationField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ExternalReconciliation) || this;
        /**
         * Representation of the [[ExternalReconciliation.reconciliationAccountType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationAccountType = new core_1.ComplexTypeEnumPropertyField('ReconciliationAccountType', _this);
        /**
         * Representation of the [[ExternalReconciliation.accountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCode = new core_1.ComplexTypeStringPropertyField('AccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[ExternalReconciliation.reconciliationNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationNo = new core_1.ComplexTypeNumberPropertyField('ReconciliationNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[ExternalReconciliation.amount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amount = new core_1.ComplexTypeNumberPropertyField('Amount', _this, 'Edm.Double');
        /**
         * Representation of the [[ExternalReconciliation.currencyType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currencyType = new core_1.ComplexTypeStringPropertyField('CurrencyType', _this, 'Edm.String');
        /**
         * Representation of the [[ExternalReconciliation.reconciliationType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationType = new core_1.ComplexTypeStringPropertyField('ReconciliationType', _this, 'Edm.String');
        /**
         * Representation of the [[ExternalReconciliation.reconciliationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationDate = new core_1.ComplexTypeDatePropertyField('ReconciliationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExternalReconciliation.creationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creationDate = new core_1.ComplexTypeDatePropertyField('CreationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ExternalReconciliation.reconciliationJournalEntryLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationJournalEntryLines = new core_1.CollectionField('ReconciliationJournalEntryLines', _this, ReconciliationJournalEntryLine_1.ReconciliationJournalEntryLine);
        /**
         * Representation of the [[ExternalReconciliation.reconciliationBankStatementLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconciliationBankStatementLines = new core_1.CollectionField('ReconciliationBankStatementLines', _this, ReconciliationBankStatementLine_1.ReconciliationBankStatementLine);
        return _this;
    }
    return ExternalReconciliationField;
}(core_1.ComplexTypeField));
exports.ExternalReconciliationField = ExternalReconciliationField;
var ExternalReconciliation;
(function (ExternalReconciliation) {
    /**
     * Metadata information on all properties of the `ExternalReconciliation` complex type.
     */
    ExternalReconciliation._propertyMetadata = [{
            originalName: 'ReconciliationAccountType',
            name: 'reconciliationAccountType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AccountCode',
            name: 'accountCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ReconciliationNo',
            name: 'reconciliationNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Amount',
            name: 'amount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CurrencyType',
            name: 'currencyType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ReconciliationType',
            name: 'reconciliationType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ReconciliationDate',
            name: 'reconciliationDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'CreationDate',
            name: 'creationDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ReconciliationJournalEntryLines',
            name: 'reconciliationJournalEntryLines',
            type: ReconciliationJournalEntryLine_1.ReconciliationJournalEntryLine,
            isCollection: true
        }, {
            originalName: 'ReconciliationBankStatementLines',
            name: 'reconciliationBankStatementLines',
            type: ReconciliationBankStatementLine_1.ReconciliationBankStatementLine,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ExternalReconciliation);
    }
    ExternalReconciliation.build = build;
})(ExternalReconciliation = exports.ExternalReconciliation || (exports.ExternalReconciliation = {}));
//# sourceMappingURL=ExternalReconciliation.js.map