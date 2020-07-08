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
exports.BankStatementParams = exports.BankStatementParamsField = exports.createBankStatementParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BankStatementParams.build]] instead.
 */
function createBankStatementParams(json) {
    return BankStatementParams.build(json);
}
exports.createBankStatementParams = createBankStatementParams;
/**
 * BankStatementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BankStatementParamsField = /** @class */ (function (_super) {
    __extends(BankStatementParamsField, _super);
    function BankStatementParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BankStatementParams.internalNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalNumber = new v4_1.ComplexTypeNumberPropertyField('InternalNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementParams.bankAccountKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankAccountKey = new v4_1.ComplexTypeNumberPropertyField('BankAccountKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[BankStatementParams.statementNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statementNumber = new v4_1.ComplexTypeStringPropertyField('StatementNumber', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementParams.statementDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statementDate = new v4_1.ComplexTypeDatePropertyField('StatementDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BankStatementParams.startingBalanceF]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startingBalanceF = new v4_1.ComplexTypeNumberPropertyField('StartingBalanceF', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementParams.endingBalanceF]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endingBalanceF = new v4_1.ComplexTypeNumberPropertyField('EndingBalanceF', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementParams.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new v4_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementParams.startingBalanceL]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startingBalanceL = new v4_1.ComplexTypeNumberPropertyField('StartingBalanceL', _this, 'Edm.Double');
        /**
         * Representation of the [[BankStatementParams.endingBalanceL]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endingBalanceL = new v4_1.ComplexTypeNumberPropertyField('EndingBalanceL', _this, 'Edm.Double');
        return _this;
    }
    return BankStatementParamsField;
}(v4_1.ComplexTypeField));
exports.BankStatementParamsField = BankStatementParamsField;
var BankStatementParams;
(function (BankStatementParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            InternalNumber: function (internalNumber) { return ({ internalNumber: v4_1.edmToTs(internalNumber, 'Edm.Int32') }); },
            BankAccountKey: function (bankAccountKey) { return ({ bankAccountKey: v4_1.edmToTs(bankAccountKey, 'Edm.Int32') }); },
            StatementNumber: function (statementNumber) { return ({ statementNumber: v4_1.edmToTs(statementNumber, 'Edm.String') }); },
            StatementDate: function (statementDate) { return ({ statementDate: v4_1.edmToTs(statementDate, 'Edm.DateTimeOffset') }); },
            StartingBalanceF: function (startingBalanceF) { return ({ startingBalanceF: v4_1.edmToTs(startingBalanceF, 'Edm.Double') }); },
            EndingBalanceF: function (endingBalanceF) { return ({ endingBalanceF: v4_1.edmToTs(endingBalanceF, 'Edm.Double') }); },
            Currency: function (currency) { return ({ currency: v4_1.edmToTs(currency, 'Edm.String') }); },
            StartingBalanceL: function (startingBalanceL) { return ({ startingBalanceL: v4_1.edmToTs(startingBalanceL, 'Edm.Double') }); },
            EndingBalanceL: function (endingBalanceL) { return ({ endingBalanceL: v4_1.edmToTs(endingBalanceL, 'Edm.Double') }); }
        });
    }
    BankStatementParams.build = build;
})(BankStatementParams = exports.BankStatementParams || (exports.BankStatementParams = {}));
//# sourceMappingURL=BankStatementParams.js.map