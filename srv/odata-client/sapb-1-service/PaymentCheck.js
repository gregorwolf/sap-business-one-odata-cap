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
exports.PaymentCheck = exports.PaymentCheckField = exports.createPaymentCheck = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PaymentCheck.build]] instead.
 */
function createPaymentCheck(json) {
    return PaymentCheck.build(json);
}
exports.createPaymentCheck = createPaymentCheck;
/**
 * PaymentCheckField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PaymentCheckField = /** @class */ (function (_super) {
    __extends(PaymentCheckField, _super);
    function PaymentCheckField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PaymentCheck.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentCheck.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new v4_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentCheck.checkNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkNumber = new v4_1.ComplexTypeNumberPropertyField('CheckNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentCheck.bankCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankCode = new v4_1.ComplexTypeStringPropertyField('BankCode', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.branch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.branch = new v4_1.ComplexTypeStringPropertyField('Branch', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.accounttNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accounttNum = new v4_1.ComplexTypeStringPropertyField('AccounttNum', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new v4_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.checkSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkSum = new v4_1.ComplexTypeNumberPropertyField('CheckSum', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentCheck.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new v4_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.countryCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countryCode = new v4_1.ComplexTypeStringPropertyField('CountryCode', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.checkAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkAbsEntry = new v4_1.ComplexTypeNumberPropertyField('CheckAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentCheck.checkAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkAccount = new v4_1.ComplexTypeStringPropertyField('CheckAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.fiscalId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fiscalId = new v4_1.ComplexTypeStringPropertyField('FiscalID', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.originallyIssuedBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.originallyIssuedBy = new v4_1.ComplexTypeStringPropertyField('OriginallyIssuedBy', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.endorsableCheckNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endorsableCheckNo = new v4_1.ComplexTypeNumberPropertyField('EndorsableCheckNo', _this, 'Edm.Int32');
        return _this;
    }
    return PaymentCheckField;
}(v4_1.ComplexTypeField));
exports.PaymentCheckField = PaymentCheckField;
var PaymentCheck;
(function (PaymentCheck) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            DueDate: function (dueDate) { return ({ dueDate: v4_1.edmToTs(dueDate, 'Edm.DateTimeOffset') }); },
            CheckNumber: function (checkNumber) { return ({ checkNumber: v4_1.edmToTs(checkNumber, 'Edm.Int32') }); },
            BankCode: function (bankCode) { return ({ bankCode: v4_1.edmToTs(bankCode, 'Edm.String') }); },
            Branch: function (branch) { return ({ branch: v4_1.edmToTs(branch, 'Edm.String') }); },
            AccounttNum: function (accounttNum) { return ({ accounttNum: v4_1.edmToTs(accounttNum, 'Edm.String') }); },
            Details: function (details) { return ({ details: v4_1.edmToTs(details, 'Edm.String') }); },
            CheckSum: function (checkSum) { return ({ checkSum: v4_1.edmToTs(checkSum, 'Edm.Double') }); },
            Currency: function (currency) { return ({ currency: v4_1.edmToTs(currency, 'Edm.String') }); },
            CountryCode: function (countryCode) { return ({ countryCode: v4_1.edmToTs(countryCode, 'Edm.String') }); },
            CheckAbsEntry: function (checkAbsEntry) { return ({ checkAbsEntry: v4_1.edmToTs(checkAbsEntry, 'Edm.Int32') }); },
            CheckAccount: function (checkAccount) { return ({ checkAccount: v4_1.edmToTs(checkAccount, 'Edm.String') }); },
            FiscalID: function (fiscalId) { return ({ fiscalId: v4_1.edmToTs(fiscalId, 'Edm.String') }); },
            OriginallyIssuedBy: function (originallyIssuedBy) { return ({ originallyIssuedBy: v4_1.edmToTs(originallyIssuedBy, 'Edm.String') }); },
            EndorsableCheckNo: function (endorsableCheckNo) { return ({ endorsableCheckNo: v4_1.edmToTs(endorsableCheckNo, 'Edm.Int32') }); }
        });
    }
    PaymentCheck.build = build;
})(PaymentCheck = exports.PaymentCheck || (exports.PaymentCheck = {}));
//# sourceMappingURL=PaymentCheck.js.map