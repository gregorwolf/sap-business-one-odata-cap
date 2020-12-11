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
exports.CashDiscounts = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CashDiscountsRequestBuilder_1 = require("./CashDiscountsRequestBuilder");
var DiscountLine_1 = require("./DiscountLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CashDiscounts" of service "SAPB1".
 */
var CashDiscounts = /** @class */ (function (_super) {
    __extends(CashDiscounts, _super);
    function CashDiscounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CashDiscounts`.
     * @returns A builder that constructs instances of entity type `CashDiscounts`.
     */
    CashDiscounts.builder = function () {
        return core_1.EntityV4.entityBuilder(CashDiscounts);
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
        return core_1.EntityV4.customFieldSelector(fieldName, CashDiscounts);
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
     * Default url path for the according service.
     */
    CashDiscounts._defaultServicePath = '/b1s/v2/';
    return CashDiscounts;
}(core_1.EntityV4));
exports.CashDiscounts = CashDiscounts;
var PaymentTermsTypes_1 = require("./PaymentTermsTypes");
(function (CashDiscounts) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashDiscounts.CODE = new core_1.StringField('Code', CashDiscounts, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashDiscounts.NAME = new core_1.StringField('Name', CashDiscounts, 'Edm.String');
    /**
     * Static representation of the [[byDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashDiscounts.BY_DATE = new core_1.EnumField('ByDate', CashDiscounts);
    /**
     * Static representation of the [[freight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashDiscounts.FREIGHT = new core_1.EnumField('Freight', CashDiscounts);
    /**
     * Static representation of the [[tax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashDiscounts.TAX = new core_1.EnumField('Tax', CashDiscounts);
    /**
     * Static representation of the [[discountLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashDiscounts.DISCOUNT_LINES = new core_1.CollectionField('DiscountLines', CashDiscounts, DiscountLine_1.DiscountLine);
    /**
     * Static representation of the one-to-many navigation property [[paymentTermsTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CashDiscounts.PAYMENT_TERMS_TYPES = new core_1.OneToManyLink('PaymentTermsTypes', CashDiscounts, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * All fields of the CashDiscounts entity.
     */
    CashDiscounts._allFields = [
        CashDiscounts.CODE,
        CashDiscounts.NAME,
        CashDiscounts.BY_DATE,
        CashDiscounts.FREIGHT,
        CashDiscounts.TAX,
        CashDiscounts.DISCOUNT_LINES,
        CashDiscounts.PAYMENT_TERMS_TYPES
    ];
    /**
     * All fields selector.
     */
    CashDiscounts.ALL_FIELDS = new core_1.AllFields('*', CashDiscounts);
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