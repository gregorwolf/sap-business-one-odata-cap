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
exports.CashDiscounts = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CashDiscountsRequestBuilder_1 = require("./CashDiscountsRequestBuilder");
var DiscountLine_1 = require("./DiscountLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "CashDiscounts" of service "SAPB1".
 */
var CashDiscounts = /** @class */ (function (_super) {
    __extends(CashDiscounts, _super);
    function CashDiscounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CashDiscounts`.
     * @returns A builder that constructs instances of entity type `CashDiscounts`.
     */
    CashDiscounts.builder = function () {
        return v4_1.Entity.entityBuilder(CashDiscounts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CashDiscounts` entity type.
     * @returns A `CashDiscounts` request builder.
     */
    CashDiscounts.requestBuilder = function () {
        return new CashDiscountsRequestBuilder_1.CashDiscountsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CashDiscounts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CashDiscounts`.
     */
    CashDiscounts.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, CashDiscounts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CashDiscounts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CashDiscounts.
     */
    CashDiscounts._entityName = 'CashDiscounts';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CashDiscounts.
     */
    CashDiscounts._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    CashDiscounts._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CashDiscounts;
}(v4_1.Entity));
exports.CashDiscounts = CashDiscounts;
var PaymentTermsTypes_1 = require("./PaymentTermsTypes");
(function (CashDiscounts) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashDiscounts.CODE = new v4_1.StringField('Code', CashDiscounts, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashDiscounts.NAME = new v4_1.StringField('Name', CashDiscounts, 'Edm.String');
    /**
     * Static representation of the [[discountLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashDiscounts.DISCOUNT_LINES = new v4_1.CollectionField('DiscountLines', CashDiscounts, new DiscountLine_1.DiscountLineField('', CashDiscounts));
    /**
     * Static representation of the one-to-many navigation property [[paymentTermsTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashDiscounts.PAYMENT_TERMS_TYPES = new v4_1.OneToManyLink('PaymentTermsTypes', CashDiscounts, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * All fields of the CashDiscounts entity.
     */
    CashDiscounts._allFields = [
        CashDiscounts.CODE,
        CashDiscounts.NAME,
        CashDiscounts.DISCOUNT_LINES,
        CashDiscounts.PAYMENT_TERMS_TYPES
    ];
    /**
     * All fields selector.
     */
    CashDiscounts.ALL_FIELDS = new v4_1.AllFields('*', CashDiscounts);
    /**
     * All key fields of the CashDiscounts entity.
     */
    CashDiscounts._keyFields = [CashDiscounts.CODE];
    /**
     * Mapping of all key field names to the respective static field property CashDiscounts.
     */
    CashDiscounts._keys = CashDiscounts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CashDiscounts = exports.CashDiscounts || (exports.CashDiscounts = {}));
exports.CashDiscounts = CashDiscounts;
//# sourceMappingURL=CashDiscounts.js.map