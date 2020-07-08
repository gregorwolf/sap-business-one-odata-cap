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
exports.CreditCardPayments = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CreditCardPaymentsRequestBuilder_1 = require("./CreditCardPaymentsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "CreditCardPayments" of service "SAPB1".
 */
var CreditCardPayments = /** @class */ (function (_super) {
    __extends(CreditCardPayments, _super);
    function CreditCardPayments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CreditCardPayments`.
     * @returns A builder that constructs instances of entity type `CreditCardPayments`.
     */
    CreditCardPayments.builder = function () {
        return v4_1.Entity.entityBuilder(CreditCardPayments);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CreditCardPayments` entity type.
     * @returns A `CreditCardPayments` request builder.
     */
    CreditCardPayments.requestBuilder = function () {
        return new CreditCardPaymentsRequestBuilder_1.CreditCardPaymentsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CreditCardPayments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CreditCardPayments`.
     */
    CreditCardPayments.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, CreditCardPayments);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CreditCardPayments.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CreditCardPayments.
     */
    CreditCardPayments._entityName = 'CreditCardPayments';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CreditCardPayments.
     */
    CreditCardPayments._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    CreditCardPayments._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CreditCardPayments;
}(v4_1.Entity));
exports.CreditCardPayments = CreditCardPayments;
var CreditPaymentMethods_1 = require("./CreditPaymentMethods");
(function (CreditCardPayments) {
    /**
     * Static representation of the [[dueDateCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.DUE_DATE_CODE = new v4_1.StringField('DueDateCode', CreditCardPayments, 'Edm.String');
    /**
     * Static representation of the [[dueDateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.DUE_DATE_NAME = new v4_1.StringField('DueDateName', CreditCardPayments, 'Edm.String');
    /**
     * Static representation of the [[paymentAfterDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.PAYMENT_AFTER_DAYS = new v4_1.NumberField('PaymentAfterDays', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[paymentAfterMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.PAYMENT_AFTER_MONTHS = new v4_1.NumberField('PaymentAfterMonths', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[fromDay1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.FROM_DAY_1 = new v4_1.NumberField('FromDay1', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[toDay1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.TO_DAY_1 = new v4_1.NumberField('ToDay1', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[paymentDay1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.PAYMENT_DAY_1 = new v4_1.NumberField('PaymentDay1', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[noOfMonths1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.NO_OF_MONTHS_1 = new v4_1.NumberField('NoOfMonths1', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[fromDay2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.FROM_DAY_2 = new v4_1.NumberField('FromDay2', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[toDay2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.TO_DAY_2 = new v4_1.NumberField('ToDay2', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[paymentDay2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.PAYMENT_DAY_2 = new v4_1.NumberField('PaymentDay2', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[noOfMonths2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.NO_OF_MONTHS_2 = new v4_1.NumberField('NoOfMonths2', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[fromDay3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.FROM_DAY_3 = new v4_1.NumberField('FromDay3', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[toDay3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.TO_DAY_3 = new v4_1.NumberField('ToDay3', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[paymentDay3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.PAYMENT_DAY_3 = new v4_1.NumberField('PaymentDay3', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[noOfMonths3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.NO_OF_MONTHS_3 = new v4_1.NumberField('NoOfMonths3', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[fromDay4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.FROM_DAY_4 = new v4_1.NumberField('FromDay4', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[toDay4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.TO_DAY_4 = new v4_1.NumberField('ToDay4', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[paymentDay4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.PAYMENT_DAY_4 = new v4_1.NumberField('PaymentDay4', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the [[noOfMonths4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.NO_OF_MONTHS_4 = new v4_1.NumberField('NoOfMonths4', CreditCardPayments, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[creditPaymentMethods]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCardPayments.CREDIT_PAYMENT_METHODS = new v4_1.OneToManyLink('CreditPaymentMethods', CreditCardPayments, CreditPaymentMethods_1.CreditPaymentMethods);
    /**
     * All fields of the CreditCardPayments entity.
     */
    CreditCardPayments._allFields = [
        CreditCardPayments.DUE_DATE_CODE,
        CreditCardPayments.DUE_DATE_NAME,
        CreditCardPayments.PAYMENT_AFTER_DAYS,
        CreditCardPayments.PAYMENT_AFTER_MONTHS,
        CreditCardPayments.FROM_DAY_1,
        CreditCardPayments.TO_DAY_1,
        CreditCardPayments.PAYMENT_DAY_1,
        CreditCardPayments.NO_OF_MONTHS_1,
        CreditCardPayments.FROM_DAY_2,
        CreditCardPayments.TO_DAY_2,
        CreditCardPayments.PAYMENT_DAY_2,
        CreditCardPayments.NO_OF_MONTHS_2,
        CreditCardPayments.FROM_DAY_3,
        CreditCardPayments.TO_DAY_3,
        CreditCardPayments.PAYMENT_DAY_3,
        CreditCardPayments.NO_OF_MONTHS_3,
        CreditCardPayments.FROM_DAY_4,
        CreditCardPayments.TO_DAY_4,
        CreditCardPayments.PAYMENT_DAY_4,
        CreditCardPayments.NO_OF_MONTHS_4,
        CreditCardPayments.CREDIT_PAYMENT_METHODS
    ];
    /**
     * All fields selector.
     */
    CreditCardPayments.ALL_FIELDS = new v4_1.AllFields('*', CreditCardPayments);
    /**
     * All key fields of the CreditCardPayments entity.
     */
    CreditCardPayments._keyFields = [CreditCardPayments.DUE_DATE_CODE];
    /**
     * Mapping of all key field names to the respective static field property CreditCardPayments.
     */
    CreditCardPayments._keys = CreditCardPayments._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CreditCardPayments = exports.CreditCardPayments || (exports.CreditCardPayments = {}));
exports.CreditCardPayments = CreditCardPayments;
//# sourceMappingURL=CreditCardPayments.js.map