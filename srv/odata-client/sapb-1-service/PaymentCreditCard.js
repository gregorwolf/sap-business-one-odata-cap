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
exports.PaymentCreditCard = exports.PaymentCreditCardField = exports.createPaymentCreditCard = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PaymentCreditCard.build]] instead.
 */
function createPaymentCreditCard(json) {
    return PaymentCreditCard.build(json);
}
exports.createPaymentCreditCard = createPaymentCreditCard;
/**
 * PaymentCreditCardField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PaymentCreditCardField = /** @class */ (function (_super) {
    __extends(PaymentCreditCardField, _super);
    function PaymentCreditCardField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PaymentCreditCard.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentCreditCard.creditCard]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditCard = new v4_1.ComplexTypeNumberPropertyField('CreditCard', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentCreditCard.creditAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditAcct = new v4_1.ComplexTypeStringPropertyField('CreditAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCreditCard.creditCardNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditCardNumber = new v4_1.ComplexTypeStringPropertyField('CreditCardNumber', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCreditCard.cardValidUntil]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardValidUntil = new v4_1.ComplexTypeDatePropertyField('CardValidUntil', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentCreditCard.voucherNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.voucherNum = new v4_1.ComplexTypeStringPropertyField('VoucherNum', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCreditCard.ownerIdNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ownerIdNum = new v4_1.ComplexTypeStringPropertyField('OwnerIdNum', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCreditCard.ownerPhone]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ownerPhone = new v4_1.ComplexTypeStringPropertyField('OwnerPhone', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCreditCard.paymentMethodCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentMethodCode = new v4_1.ComplexTypeNumberPropertyField('PaymentMethodCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentCreditCard.numOfPayments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numOfPayments = new v4_1.ComplexTypeNumberPropertyField('NumOfPayments', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentCreditCard.firstPaymentDue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.firstPaymentDue = new v4_1.ComplexTypeDatePropertyField('FirstPaymentDue', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentCreditCard.firstPaymentSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.firstPaymentSum = new v4_1.ComplexTypeNumberPropertyField('FirstPaymentSum', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentCreditCard.additionalPaymentSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalPaymentSum = new v4_1.ComplexTypeNumberPropertyField('AdditionalPaymentSum', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentCreditCard.creditSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditSum = new v4_1.ComplexTypeNumberPropertyField('CreditSum', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentCreditCard.creditCur]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditCur = new v4_1.ComplexTypeStringPropertyField('CreditCur', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCreditCard.creditRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditRate = new v4_1.ComplexTypeNumberPropertyField('CreditRate', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentCreditCard.confirmationNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.confirmationNum = new v4_1.ComplexTypeStringPropertyField('ConfirmationNum', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCreditCard.numOfCreditPayments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numOfCreditPayments = new v4_1.ComplexTypeNumberPropertyField('NumOfCreditPayments', _this, 'Edm.Int32');
        return _this;
    }
    return PaymentCreditCardField;
}(v4_1.ComplexTypeField));
exports.PaymentCreditCardField = PaymentCreditCardField;
var PaymentCreditCard;
(function (PaymentCreditCard) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            CreditCard: function (creditCard) { return ({ creditCard: v4_1.edmToTs(creditCard, 'Edm.Int32') }); },
            CreditAcct: function (creditAcct) { return ({ creditAcct: v4_1.edmToTs(creditAcct, 'Edm.String') }); },
            CreditCardNumber: function (creditCardNumber) { return ({ creditCardNumber: v4_1.edmToTs(creditCardNumber, 'Edm.String') }); },
            CardValidUntil: function (cardValidUntil) { return ({ cardValidUntil: v4_1.edmToTs(cardValidUntil, 'Edm.DateTimeOffset') }); },
            VoucherNum: function (voucherNum) { return ({ voucherNum: v4_1.edmToTs(voucherNum, 'Edm.String') }); },
            OwnerIdNum: function (ownerIdNum) { return ({ ownerIdNum: v4_1.edmToTs(ownerIdNum, 'Edm.String') }); },
            OwnerPhone: function (ownerPhone) { return ({ ownerPhone: v4_1.edmToTs(ownerPhone, 'Edm.String') }); },
            PaymentMethodCode: function (paymentMethodCode) { return ({ paymentMethodCode: v4_1.edmToTs(paymentMethodCode, 'Edm.Int32') }); },
            NumOfPayments: function (numOfPayments) { return ({ numOfPayments: v4_1.edmToTs(numOfPayments, 'Edm.Int32') }); },
            FirstPaymentDue: function (firstPaymentDue) { return ({ firstPaymentDue: v4_1.edmToTs(firstPaymentDue, 'Edm.DateTimeOffset') }); },
            FirstPaymentSum: function (firstPaymentSum) { return ({ firstPaymentSum: v4_1.edmToTs(firstPaymentSum, 'Edm.Double') }); },
            AdditionalPaymentSum: function (additionalPaymentSum) { return ({ additionalPaymentSum: v4_1.edmToTs(additionalPaymentSum, 'Edm.Double') }); },
            CreditSum: function (creditSum) { return ({ creditSum: v4_1.edmToTs(creditSum, 'Edm.Double') }); },
            CreditCur: function (creditCur) { return ({ creditCur: v4_1.edmToTs(creditCur, 'Edm.String') }); },
            CreditRate: function (creditRate) { return ({ creditRate: v4_1.edmToTs(creditRate, 'Edm.Double') }); },
            ConfirmationNum: function (confirmationNum) { return ({ confirmationNum: v4_1.edmToTs(confirmationNum, 'Edm.String') }); },
            NumOfCreditPayments: function (numOfCreditPayments) { return ({ numOfCreditPayments: v4_1.edmToTs(numOfCreditPayments, 'Edm.Int32') }); }
        });
    }
    PaymentCreditCard.build = build;
})(PaymentCreditCard = exports.PaymentCreditCard || (exports.PaymentCreditCard = {}));
//# sourceMappingURL=PaymentCreditCard.js.map