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
exports.PaymentCreditCard = exports.PaymentCreditCardField = exports.createPaymentCreditCard = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of PaymentCreditCardField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PaymentCreditCardField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PaymentCreditCard) || this;
        /**
         * Representation of the [[PaymentCreditCard.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentCreditCard.creditCard]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditCard = new core_1.ComplexTypeNumberPropertyField('CreditCard', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentCreditCard.creditAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditAcct = new core_1.ComplexTypeStringPropertyField('CreditAcct', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCreditCard.creditCardNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditCardNumber = new core_1.ComplexTypeStringPropertyField('CreditCardNumber', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCreditCard.cardValidUntil]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardValidUntil = new core_1.ComplexTypeDatePropertyField('CardValidUntil', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentCreditCard.voucherNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.voucherNum = new core_1.ComplexTypeStringPropertyField('VoucherNum', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCreditCard.ownerIdNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ownerIdNum = new core_1.ComplexTypeStringPropertyField('OwnerIdNum', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCreditCard.ownerPhone]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ownerPhone = new core_1.ComplexTypeStringPropertyField('OwnerPhone', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCreditCard.paymentMethodCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentMethodCode = new core_1.ComplexTypeNumberPropertyField('PaymentMethodCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentCreditCard.numOfPayments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numOfPayments = new core_1.ComplexTypeNumberPropertyField('NumOfPayments', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentCreditCard.firstPaymentDue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.firstPaymentDue = new core_1.ComplexTypeDatePropertyField('FirstPaymentDue', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentCreditCard.firstPaymentSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.firstPaymentSum = new core_1.ComplexTypeNumberPropertyField('FirstPaymentSum', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentCreditCard.additionalPaymentSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalPaymentSum = new core_1.ComplexTypeNumberPropertyField('AdditionalPaymentSum', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentCreditCard.creditSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditSum = new core_1.ComplexTypeNumberPropertyField('CreditSum', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentCreditCard.creditCur]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditCur = new core_1.ComplexTypeStringPropertyField('CreditCur', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCreditCard.creditRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditRate = new core_1.ComplexTypeNumberPropertyField('CreditRate', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentCreditCard.confirmationNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.confirmationNum = new core_1.ComplexTypeStringPropertyField('ConfirmationNum', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCreditCard.numOfCreditPayments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numOfCreditPayments = new core_1.ComplexTypeNumberPropertyField('NumOfCreditPayments', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentCreditCard.creditType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditType = new core_1.ComplexTypeEnumPropertyField('CreditType', _this);
        /**
         * Representation of the [[PaymentCreditCard.splitPayments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.splitPayments = new core_1.ComplexTypeEnumPropertyField('SplitPayments', _this);
        return _this;
    }
    return PaymentCreditCardField;
}(core_1.ComplexTypeField));
exports.PaymentCreditCardField = PaymentCreditCardField;
var PaymentCreditCard;
(function (PaymentCreditCard) {
    /**
     * Metadata information on all properties of the `PaymentCreditCard` complex type.
     */
    PaymentCreditCard._propertyMetadata = [{
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CreditCard',
            name: 'creditCard',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CreditAcct',
            name: 'creditAcct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CreditCardNumber',
            name: 'creditCardNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CardValidUntil',
            name: 'cardValidUntil',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'VoucherNum',
            name: 'voucherNum',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'OwnerIdNum',
            name: 'ownerIdNum',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'OwnerPhone',
            name: 'ownerPhone',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PaymentMethodCode',
            name: 'paymentMethodCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'NumOfPayments',
            name: 'numOfPayments',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'FirstPaymentDue',
            name: 'firstPaymentDue',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'FirstPaymentSum',
            name: 'firstPaymentSum',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AdditionalPaymentSum',
            name: 'additionalPaymentSum',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CreditSum',
            name: 'creditSum',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CreditCur',
            name: 'creditCur',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CreditRate',
            name: 'creditRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ConfirmationNum',
            name: 'confirmationNum',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'NumOfCreditPayments',
            name: 'numOfCreditPayments',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CreditType',
            name: 'creditType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SplitPayments',
            name: 'splitPayments',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PaymentCreditCard);
    }
    PaymentCreditCard.build = build;
})(PaymentCreditCard = exports.PaymentCreditCard || (exports.PaymentCreditCard = {}));
//# sourceMappingURL=PaymentCreditCard.js.map