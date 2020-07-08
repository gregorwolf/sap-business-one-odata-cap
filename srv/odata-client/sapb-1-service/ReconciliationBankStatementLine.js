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
exports.ReconciliationBankStatementLine = exports.ReconciliationBankStatementLineField = exports.createReconciliationBankStatementLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ReconciliationBankStatementLine.build]] instead.
 */
function createReconciliationBankStatementLine(json) {
    return ReconciliationBankStatementLine.build(json);
}
exports.createReconciliationBankStatementLine = createReconciliationBankStatementLine;
/**
 * ReconciliationBankStatementLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ReconciliationBankStatementLineField = /** @class */ (function (_super) {
    __extends(ReconciliationBankStatementLineField, _super);
    function ReconciliationBankStatementLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ReconciliationBankStatementLine.bankStatementAccountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankStatementAccountCode = new v4_1.ComplexTypeStringPropertyField('BankStatementAccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[ReconciliationBankStatementLine.sequence]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequence = new v4_1.ComplexTypeNumberPropertyField('Sequence', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReconciliationBankStatementLine.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new v4_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ReconciliationBankStatementLine.ref1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ref1 = new v4_1.ComplexTypeStringPropertyField('Ref1', _this, 'Edm.String');
        /**
         * Representation of the [[ReconciliationBankStatementLine.amount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amount = new v4_1.ComplexTypeNumberPropertyField('Amount', _this, 'Edm.Double');
        /**
         * Representation of the [[ReconciliationBankStatementLine.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new v4_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        return _this;
    }
    return ReconciliationBankStatementLineField;
}(v4_1.ComplexTypeField));
exports.ReconciliationBankStatementLineField = ReconciliationBankStatementLineField;
var ReconciliationBankStatementLine;
(function (ReconciliationBankStatementLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            BankStatementAccountCode: function (bankStatementAccountCode) { return ({ bankStatementAccountCode: v4_1.edmToTs(bankStatementAccountCode, 'Edm.String') }); },
            Sequence: function (sequence) { return ({ sequence: v4_1.edmToTs(sequence, 'Edm.Int32') }); },
            Date: function (date) { return ({ date: v4_1.edmToTs(date, 'Edm.DateTimeOffset') }); },
            Ref1: function (ref1) { return ({ ref1: v4_1.edmToTs(ref1, 'Edm.String') }); },
            Amount: function (amount) { return ({ amount: v4_1.edmToTs(amount, 'Edm.Double') }); },
            Details: function (details) { return ({ details: v4_1.edmToTs(details, 'Edm.String') }); }
        });
    }
    ReconciliationBankStatementLine.build = build;
})(ReconciliationBankStatementLine = exports.ReconciliationBankStatementLine || (exports.ReconciliationBankStatementLine = {}));
//# sourceMappingURL=ReconciliationBankStatementLine.js.map