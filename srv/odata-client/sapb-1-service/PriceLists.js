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
exports.PriceLists = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PriceListsRequestBuilder_1 = require("./PriceListsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "PriceLists" of service "SAPB1".
 */
var PriceLists = /** @class */ (function (_super) {
    __extends(PriceLists, _super);
    function PriceLists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PriceLists`.
     * @returns A builder that constructs instances of entity type `PriceLists`.
     */
    PriceLists.builder = function () {
        return v4_1.Entity.entityBuilder(PriceLists);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PriceLists` entity type.
     * @returns A `PriceLists` request builder.
     */
    PriceLists.requestBuilder = function () {
        return new PriceListsRequestBuilder_1.PriceListsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PriceLists`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PriceLists`.
     */
    PriceLists.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, PriceLists);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PriceLists.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PriceLists.
     */
    PriceLists._entityName = 'PriceLists';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PriceLists.
     */
    PriceLists._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    PriceLists._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PriceLists;
}(v4_1.Entity));
exports.PriceLists = PriceLists;
var SpecialPrices_1 = require("./SpecialPrices");
var WorkOrders_1 = require("./WorkOrders");
var PaymentTermsTypes_1 = require("./PaymentTermsTypes");
var BusinessPartners_1 = require("./BusinessPartners");
var ProductTrees_1 = require("./ProductTrees");
var BlanketAgreements_1 = require("./BlanketAgreements");
var StockTransfers_1 = require("./StockTransfers");
(function (PriceLists) {
    /**
     * Static representation of the [[basePriceList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.BASE_PRICE_LIST = new v4_1.NumberField('BasePriceList', PriceLists, 'Edm.Int32');
    /**
     * Static representation of the [[factor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.FACTOR = new v4_1.NumberField('Factor', PriceLists, 'Edm.Double');
    /**
     * Static representation of the [[priceListNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.PRICE_LIST_NO = new v4_1.NumberField('PriceListNo', PriceLists, 'Edm.Int32');
    /**
     * Static representation of the [[priceListName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.PRICE_LIST_NAME = new v4_1.StringField('PriceListName', PriceLists, 'Edm.String');
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.VALID_FROM = new v4_1.DateField('ValidFrom', PriceLists, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.VALID_TO = new v4_1.DateField('ValidTo', PriceLists, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[defaultPrimeCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.DEFAULT_PRIME_CURRENCY = new v4_1.StringField('DefaultPrimeCurrency', PriceLists, 'Edm.String');
    /**
     * Static representation of the [[defaultAdditionalCurrency1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.DEFAULT_ADDITIONAL_CURRENCY_1 = new v4_1.StringField('DefaultAdditionalCurrency1', PriceLists, 'Edm.String');
    /**
     * Static representation of the [[defaultAdditionalCurrency2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.DEFAULT_ADDITIONAL_CURRENCY_2 = new v4_1.StringField('DefaultAdditionalCurrency2', PriceLists, 'Edm.String');
    /**
     * Static representation of the [[fixedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.FIXED_AMOUNT = new v4_1.NumberField('FixedAmount', PriceLists, 'Edm.Double');
    /**
     * Static representation of the one-to-many navigation property [[specialPrices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.SPECIAL_PRICES = new v4_1.OneToManyLink('SpecialPrices', PriceLists, SpecialPrices_1.SpecialPrices);
    /**
     * Static representation of the one-to-many navigation property [[workOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.WORK_ORDERS = new v4_1.OneToManyLink('WorkOrders', PriceLists, WorkOrders_1.WorkOrders);
    /**
     * Static representation of the one-to-many navigation property [[paymentTermsTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.PAYMENT_TERMS_TYPES = new v4_1.OneToManyLink('PaymentTermsTypes', PriceLists, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.BUSINESS_PARTNERS = new v4_1.OneToManyLink('BusinessPartners', PriceLists, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[productTrees]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.PRODUCT_TREES = new v4_1.OneToManyLink('ProductTrees', PriceLists, ProductTrees_1.ProductTrees);
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.BLANKET_AGREEMENTS = new v4_1.OneToManyLink('BlanketAgreements', PriceLists, BlanketAgreements_1.BlanketAgreements);
    /**
     * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PriceLists.STOCK_TRANSFERS = new v4_1.OneToManyLink('StockTransfers', PriceLists, StockTransfers_1.StockTransfers);
    /**
     * All fields of the PriceLists entity.
     */
    PriceLists._allFields = [
        PriceLists.BASE_PRICE_LIST,
        PriceLists.FACTOR,
        PriceLists.PRICE_LIST_NO,
        PriceLists.PRICE_LIST_NAME,
        PriceLists.VALID_FROM,
        PriceLists.VALID_TO,
        PriceLists.DEFAULT_PRIME_CURRENCY,
        PriceLists.DEFAULT_ADDITIONAL_CURRENCY_1,
        PriceLists.DEFAULT_ADDITIONAL_CURRENCY_2,
        PriceLists.FIXED_AMOUNT,
        PriceLists.SPECIAL_PRICES,
        PriceLists.WORK_ORDERS,
        PriceLists.PAYMENT_TERMS_TYPES,
        PriceLists.BUSINESS_PARTNERS,
        PriceLists.PRODUCT_TREES,
        PriceLists.BLANKET_AGREEMENTS,
        PriceLists.STOCK_TRANSFERS
    ];
    /**
     * All fields selector.
     */
    PriceLists.ALL_FIELDS = new v4_1.AllFields('*', PriceLists);
    /**
     * All key fields of the PriceLists entity.
     */
    PriceLists._keyFields = [PriceLists.PRICE_LIST_NO];
    /**
     * Mapping of all key field names to the respective static field property PriceLists.
     */
    PriceLists._keys = PriceLists._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PriceLists = exports.PriceLists || (exports.PriceLists = {}));
exports.PriceLists = PriceLists;
//# sourceMappingURL=PriceLists.js.map