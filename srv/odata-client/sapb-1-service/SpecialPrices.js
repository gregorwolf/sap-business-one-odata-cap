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
exports.SpecialPrices = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SpecialPricesRequestBuilder_1 = require("./SpecialPricesRequestBuilder");
var SpecialPriceDataArea_1 = require("./SpecialPriceDataArea");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "SpecialPrices" of service "SAPB1".
 */
var SpecialPrices = /** @class */ (function (_super) {
    __extends(SpecialPrices, _super);
    function SpecialPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SpecialPrices`.
     * @returns A builder that constructs instances of entity type `SpecialPrices`.
     */
    SpecialPrices.builder = function () {
        return v4_1.Entity.entityBuilder(SpecialPrices);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SpecialPrices` entity type.
     * @returns A `SpecialPrices` request builder.
     */
    SpecialPrices.requestBuilder = function () {
        return new SpecialPricesRequestBuilder_1.SpecialPricesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpecialPrices`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpecialPrices`.
     */
    SpecialPrices.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, SpecialPrices);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SpecialPrices.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SpecialPrices.
     */
    SpecialPrices._entityName = 'SpecialPrices';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpecialPrices.
     */
    SpecialPrices._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    SpecialPrices._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SpecialPrices;
}(v4_1.Entity));
exports.SpecialPrices = SpecialPrices;
var Items_1 = require("./Items");
var BusinessPartners_1 = require("./BusinessPartners");
var PriceLists_1 = require("./PriceLists");
(function (SpecialPrices) {
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpecialPrices.ITEM_CODE = new v4_1.StringField('ItemCode', SpecialPrices, 'Edm.String');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpecialPrices.CARD_CODE = new v4_1.StringField('CardCode', SpecialPrices, 'Edm.String');
    /**
     * Static representation of the [[price]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpecialPrices.PRICE = new v4_1.NumberField('Price', SpecialPrices, 'Edm.Double');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpecialPrices.CURRENCY = new v4_1.StringField('Currency', SpecialPrices, 'Edm.String');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpecialPrices.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', SpecialPrices, 'Edm.Double');
    /**
     * Static representation of the [[priceListNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpecialPrices.PRICE_LIST_NUM = new v4_1.NumberField('PriceListNum', SpecialPrices, 'Edm.Int32');
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpecialPrices.VALID_FROM = new v4_1.DateField('ValidFrom', SpecialPrices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpecialPrices.VALID_TO = new v4_1.DateField('ValidTo', SpecialPrices, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[specialPriceDataAreas]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpecialPrices.SPECIAL_PRICE_DATA_AREAS = new v4_1.CollectionField('SpecialPriceDataAreas', SpecialPrices, new SpecialPriceDataArea_1.SpecialPriceDataAreaField('', SpecialPrices));
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpecialPrices.ITEM = new v4_1.OneToOneLink('Item', SpecialPrices, Items_1.Items);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpecialPrices.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', SpecialPrices, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[priceList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SpecialPrices.PRICE_LIST = new v4_1.OneToOneLink('PriceList', SpecialPrices, PriceLists_1.PriceLists);
    /**
     * All fields of the SpecialPrices entity.
     */
    SpecialPrices._allFields = [
        SpecialPrices.ITEM_CODE,
        SpecialPrices.CARD_CODE,
        SpecialPrices.PRICE,
        SpecialPrices.CURRENCY,
        SpecialPrices.DISCOUNT_PERCENT,
        SpecialPrices.PRICE_LIST_NUM,
        SpecialPrices.VALID_FROM,
        SpecialPrices.VALID_TO,
        SpecialPrices.SPECIAL_PRICE_DATA_AREAS,
        SpecialPrices.ITEM,
        SpecialPrices.BUSINESS_PARTNER,
        SpecialPrices.PRICE_LIST
    ];
    /**
     * All fields selector.
     */
    SpecialPrices.ALL_FIELDS = new v4_1.AllFields('*', SpecialPrices);
    /**
     * All key fields of the SpecialPrices entity.
     */
    SpecialPrices._keyFields = [SpecialPrices.ITEM_CODE, SpecialPrices.CARD_CODE];
    /**
     * Mapping of all key field names to the respective static field property SpecialPrices.
     */
    SpecialPrices._keys = SpecialPrices._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SpecialPrices = exports.SpecialPrices || (exports.SpecialPrices = {}));
exports.SpecialPrices = SpecialPrices;
//# sourceMappingURL=SpecialPrices.js.map