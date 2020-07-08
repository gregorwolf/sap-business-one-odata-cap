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
exports.ReconciliationJournalEntryLine = exports.ReconciliationJournalEntryLineField = exports.createReconciliationJournalEntryLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function ReconciliationJournalEntryLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ReconciliationJournalEntryLine.transactionNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transactionNumber = new v4_1.ComplexTypeNumberPropertyField('TransactionNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.postingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postingDate = new v4_1.ComplexTypeDatePropertyField('PostingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new v4_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.ref1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ref1 = new v4_1.ComplexTypeStringPropertyField('Ref1', _this, 'Edm.String');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.ref2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ref2 = new v4_1.ComplexTypeStringPropertyField('Ref2', _this, 'Edm.String');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.ref3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ref3 = new v4_1.ComplexTypeStringPropertyField('Ref3', _this, 'Edm.String');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.debitAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitAmount = new v4_1.ComplexTypeNumberPropertyField('DebitAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.creditAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditAmount = new v4_1.ComplexTypeNumberPropertyField('CreditAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[ReconciliationJournalEntryLine.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new v4_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        return _this;
    }
    return ReconciliationJournalEntryLineField;
}(v4_1.ComplexTypeField));
exports.ReconciliationJournalEntryLineField = ReconciliationJournalEntryLineField;
var ReconciliationJournalEntryLine;
(function (ReconciliationJournalEntryLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TransactionNumber: function (transactionNumber) { return ({ transactionNumber: v4_1.edmToTs(transactionNumber, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            PostingDate: function (postingDate) { return ({ postingDate: v4_1.edmToTs(postingDate, 'Edm.DateTimeOffset') }); },
            DueDate: function (dueDate) { return ({ dueDate: v4_1.edmToTs(dueDate, 'Edm.DateTimeOffset') }); },
            Ref1: function (ref1) { return ({ ref1: v4_1.edmToTs(ref1, 'Edm.String') }); },
            Ref2: function (ref2) { return ({ ref2: v4_1.edmToTs(ref2, 'Edm.String') }); },
            Ref3: function (ref3) { return ({ ref3: v4_1.edmToTs(ref3, 'Edm.String') }); },
            DebitAmount: function (debitAmount) { return ({ debitAmount: v4_1.edmToTs(debitAmount, 'Edm.Double') }); },
            CreditAmount: function (creditAmount) { return ({ creditAmount: v4_1.edmToTs(creditAmount, 'Edm.Double') }); },
            Details: function (details) { return ({ details: v4_1.edmToTs(details, 'Edm.String') }); }
        });
    }
    ReconciliationJournalEntryLine.build = build;
})(ReconciliationJournalEntryLine = exports.ReconciliationJournalEntryLine || (exports.ReconciliationJournalEntryLine = {}));
//# sourceMappingURL=ReconciliationJournalEntryLine.js.map