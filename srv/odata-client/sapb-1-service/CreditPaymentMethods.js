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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditPaymentMethods = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CreditPaymentMethodsRequestBuilder_1 = require("./CreditPaymentMethodsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CreditPaymentMethods" of service "SAPB1".
 */
var CreditPaymentMethods = /** @class */ (function (_super) {
    __extends(CreditPaymentMethods, _super);
    function CreditPaymentMethods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CreditPaymentMethods`.
     * @returns A builder that constructs instances of entity type `CreditPaymentMethods`.
     */
    CreditPaymentMethods.builder = function () {
        return core_1.EntityV4.entityBuilder(CreditPaymentMethods);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CreditPaymentMethods` entity type.
     * @returns A `CreditPaymentMethods` request builder.
     */
    CreditPaymentMethods.requestBuilder = function () {
        return new CreditPaymentMethodsRequestBuilder_1.CreditPaymentMethodsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CreditPaymentMethods`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CreditPaymentMethods`.
     */
    CreditPaymentMethods.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, CreditPaymentMethods);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CreditPaymentMethods.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CreditPaymentMethods.
     */
    CreditPaymentMethods._entityName = 'CreditPaymentMethods';
    /**
     * Default url path for the according service.
     */
    CreditPaymentMethods._defaultServicePath = '/b1s/v2/';
    return CreditPaymentMethods;
}(core_1.EntityV4));
exports.CreditPaymentMethods = CreditPaymentMethods;
var CreditCards_1 = require("./CreditCards");
var CreditCardPayments_1 = require("./CreditCardPayments");
(function (CreditPaymentMethods) {
    /**
     * Static representation of the [[paymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditPaymentMethods.PAYMENT_METHOD_CODE = new core_1.NumberField('PaymentMethodCode', CreditPaymentMethods, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditPaymentMethods.NAME = new core_1.StringField('Name', CreditPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[assignedtoCreditCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditPaymentMethods.ASSIGNEDTO_CREDIT_CARD = new core_1.NumberField('AssignedtoCreditCard', CreditPaymentMethods, 'Edm.Int32');
    /**
     * Static representation of the [[paymentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditPaymentMethods.PAYMENT_CODE = new core_1.StringField('PaymentCode', CreditPaymentMethods, 'Edm.String');
    /**
     * Static representation of the [[minimumCreditAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditPaymentMethods.MINIMUM_CREDIT_AMOUNT = new core_1.NumberField('MinimumCreditAmount', CreditPaymentMethods, 'Edm.Double');
    /**
     * Static representation of the [[minimumPaymentAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditPaymentMethods.MINIMUM_PAYMENT_AMOUNT = new core_1.NumberField('MinimumPaymentAmount', CreditPaymentMethods, 'Edm.Double');
    /**
     * Static representation of the [[maxQtyWithoutApproval]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditPaymentMethods.MAX_QTY_WITHOUT_APPROVAL = new core_1.NumberField('MaxQtyWithoutApproval', CreditPaymentMethods, 'Edm.Double');
    /**
     * Static representation of the [[installmentPaymentsPossible]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditPaymentMethods.INSTALLMENT_PAYMENTS_POSSIBLE = new core_1.EnumField('InstallmentPaymentsPossible', CreditPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[creditCard]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditPaymentMethods.CREDIT_CARD = new core_1.OneToOneLink('CreditCard', CreditPaymentMethods, CreditCards_1.CreditCards);
    /**
     * Static representation of the one-to-one navigation property [[creditCardPayment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditPaymentMethods.CREDIT_CARD_PAYMENT = new core_1.OneToOneLink('CreditCardPayment', CreditPaymentMethods, CreditCardPayments_1.CreditCardPayments);
    /**
     * All fields of the CreditPaymentMethods entity.
     */
    CreditPaymentMethods._allFields = [
        CreditPaymentMethods.PAYMENT_METHOD_CODE,
        CreditPaymentMethods.NAME,
        CreditPaymentMethods.ASSIGNEDTO_CREDIT_CARD,
        CreditPaymentMethods.PAYMENT_CODE,
        CreditPaymentMethods.MINIMUM_CREDIT_AMOUNT,
        CreditPaymentMethods.MINIMUM_PAYMENT_AMOUNT,
        CreditPaymentMethods.MAX_QTY_WITHOUT_APPROVAL,
        CreditPaymentMethods.INSTALLMENT_PAYMENTS_POSSIBLE,
        CreditPaymentMethods.CREDIT_CARD,
        CreditPaymentMethods.CREDIT_CARD_PAYMENT
    ];
    /**
     * All fields selector.
     */
    CreditPaymentMethods.ALL_FIELDS = new core_1.AllFields('*', CreditPaymentMethods);
    /**
     * All key fields of the CreditPaymentMethods entity.
     */
    CreditPaymentMethods._keyFields = [CreditPaymentMethods.PAYMENT_METHOD_CODE];
    /**
     * Mapping of all key field names to the respective static field property CreditPaymentMethods.
     */
    CreditPaymentMethods._keys = CreditPaymentMethods._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CreditPaymentMethods = exports.CreditPaymentMethods || (exports.CreditPaymentMethods = {}));
exports.CreditPaymentMethods = CreditPaymentMethods;
//# sourceMappingURL=CreditPaymentMethods.js.map