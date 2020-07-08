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
exports.CheckLine = exports.CheckLineField = exports.createCheckLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CheckLine.build]] instead.
 */
function createCheckLine(json) {
    return CheckLine.build(json);
}
exports.createCheckLine = createCheckLine;
/**
 * CheckLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CheckLineField = /** @class */ (function (_super) {
    __extends(CheckLineField, _super);
    function CheckLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CheckLine.checkKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkKey = new v4_1.ComplexTypeNumberPropertyField('CheckKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[CheckLine.checkNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkNumber = new v4_1.ComplexTypeNumberPropertyField('CheckNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CheckLine.bank]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bank = new v4_1.ComplexTypeStringPropertyField('Bank', _this, 'Edm.String');
        /**
         * Representation of the [[CheckLine.branch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.branch = new v4_1.ComplexTypeStringPropertyField('Branch', _this, 'Edm.String');
        /**
         * Representation of the [[CheckLine.cashCheck]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashCheck = new v4_1.ComplexTypeStringPropertyField('CashCheck', _this, 'Edm.String');
        /**
         * Representation of the [[CheckLine.checkDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkDate = new v4_1.ComplexTypeDatePropertyField('CheckDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[CheckLine.customer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customer = new v4_1.ComplexTypeStringPropertyField('Customer', _this, 'Edm.String');
        /**
         * Representation of the [[CheckLine.checkAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkAmount = new v4_1.ComplexTypeNumberPropertyField('CheckAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[CheckLine.accountNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountNumber = new v4_1.ComplexTypeStringPropertyField('AccountNumber', _this, 'Edm.String');
        /**
         * Representation of the [[CheckLine.checkCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkCurrency = new v4_1.ComplexTypeStringPropertyField('CheckCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[CheckLine.fiscalId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fiscalId = new v4_1.ComplexTypeStringPropertyField('FiscalID', _this, 'Edm.String');
        /**
         * Representation of the [[CheckLine.originallyIssuedBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.originallyIssuedBy = new v4_1.ComplexTypeStringPropertyField('OriginallyIssuedBy', _this, 'Edm.String');
        return _this;
    }
    return CheckLineField;
}(v4_1.ComplexTypeField));
exports.CheckLineField = CheckLineField;
var CheckLine;
(function (CheckLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CheckKey: function (checkKey) { return ({ checkKey: v4_1.edmToTs(checkKey, 'Edm.Int32') }); },
            CheckNumber: function (checkNumber) { return ({ checkNumber: v4_1.edmToTs(checkNumber, 'Edm.Int32') }); },
            Bank: function (bank) { return ({ bank: v4_1.edmToTs(bank, 'Edm.String') }); },
            Branch: function (branch) { return ({ branch: v4_1.edmToTs(branch, 'Edm.String') }); },
            CashCheck: function (cashCheck) { return ({ cashCheck: v4_1.edmToTs(cashCheck, 'Edm.String') }); },
            CheckDate: function (checkDate) { return ({ checkDate: v4_1.edmToTs(checkDate, 'Edm.DateTimeOffset') }); },
            Customer: function (customer) { return ({ customer: v4_1.edmToTs(customer, 'Edm.String') }); },
            CheckAmount: function (checkAmount) { return ({ checkAmount: v4_1.edmToTs(checkAmount, 'Edm.Double') }); },
            AccountNumber: function (accountNumber) { return ({ accountNumber: v4_1.edmToTs(accountNumber, 'Edm.String') }); },
            CheckCurrency: function (checkCurrency) { return ({ checkCurrency: v4_1.edmToTs(checkCurrency, 'Edm.String') }); },
            FiscalID: function (fiscalId) { return ({ fiscalId: v4_1.edmToTs(fiscalId, 'Edm.String') }); },
            OriginallyIssuedBy: function (originallyIssuedBy) { return ({ originallyIssuedBy: v4_1.edmToTs(originallyIssuedBy, 'Edm.String') }); }
        });
    }
    CheckLine.build = build;
})(CheckLine = exports.CheckLine || (exports.CheckLine = {}));
//# sourceMappingURL=CheckLine.js.map