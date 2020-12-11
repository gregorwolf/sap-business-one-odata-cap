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
exports.ReconciliationJournalEntryLine = exports.ReconciliationJournalEntryLineField = exports.createReconciliationJournalEntryLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ReconciliationJournalEntryLine.build]] instead.
 */
function createReconciliationJournalEntryLine(json) {
    return ReconciliationJournalEntryLine.build(json);
}
exports.createReconciliationJournalEntryLine = createReconciliationJournalEntryLine;
/**
 * ReconciliationJournalEntryLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ReconciliationJournalEntryLineField = /** @class */ (function (_super) {
    __extends(ReconciliationJournalEntryLineField, _super);
    /**
     * Creates an instance of ReconciliationJournalEntryLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ReconciliationJournalEntryLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ReconciliationJournalEntryLine) || this;
        /**
         * Representation of the [[ReconciliationJournalEntryLine.transactionNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transactionNumber = new core_1.ComplexTypeNumberPropertyField('TransactionNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.postingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postingDate = new core_1.ComplexTypeDatePropertyField('PostingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new core_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.ref1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ref1 = new core_1.ComplexTypeStringPropertyField('Ref1', _this, 'Edm.String');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.ref2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ref2 = new core_1.ComplexTypeStringPropertyField('Ref2', _this, 'Edm.String');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.ref3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ref3 = new core_1.ComplexTypeStringPropertyField('Ref3', _this, 'Edm.String');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.debitAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitAmount = new core_1.ComplexTypeNumberPropertyField('DebitAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.creditAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditAmount = new core_1.ComplexTypeNumberPropertyField('CreditAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new core_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        return _this;
    }
    return ReconciliationJournalEntryLineField;
}(core_1.ComplexTypeField));
exports.ReconciliationJournalEntryLineField = ReconciliationJournalEntryLineField;
var ReconciliationJournalEntryLine;
(function (ReconciliationJournalEntryLine) {
    /**
     * Metadata information on all properties of the `ReconciliationJournalEntryLine` complex type.
     */
    ReconciliationJournalEntryLine._propertyMetadata = [{
            originalName: 'TransactionNumber',
            name: 'transactionNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PostingDate',
            name: 'postingDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'DueDate',
            name: 'dueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Ref1',
            name: 'ref1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Ref2',
            name: 'ref2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Ref3',
            name: 'ref3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DebitAmount',
            name: 'debitAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CreditAmount',
            name: 'creditAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Details',
            name: 'details',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ReconciliationJournalEntryLine);
    }
    ReconciliationJournalEntryLine.build = build;
})(ReconciliationJournalEntryLine = exports.ReconciliationJournalEntryLine || (exports.ReconciliationJournalEntryLine = {}));
//# sourceMappingURL=ReconciliationJournalEntryLine.js.map