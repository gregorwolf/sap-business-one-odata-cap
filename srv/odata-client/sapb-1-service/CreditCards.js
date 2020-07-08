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
exports.CreditCards = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CreditCardsRequestBuilder_1 = require("./CreditCardsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "CreditCards" of service "SAPB1".
 */
var CreditCards = /** @class */ (function (_super) {
    __extends(CreditCards, _super);
    function CreditCards() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CreditCards`.
     * @returns A builder that constructs instances of entity type `CreditCards`.
     */
    CreditCards.builder = function () {
        return v4_1.Entity.entityBuilder(CreditCards);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CreditCards` entity type.
     * @returns A `CreditCards` request builder.
     */
    CreditCards.requestBuilder = function () {
        return new CreditCardsRequestBuilder_1.CreditCardsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CreditCards`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CreditCards`.
     */
    CreditCards.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, CreditCards);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CreditCards.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CreditCards.
     */
    CreditCards._entityName = 'CreditCards';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CreditCards.
     */
    CreditCards._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    CreditCards._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CreditCards;
}(v4_1.Entity));
exports.CreditCards = CreditCards;
var CreditPaymentMethods_1 = require("./CreditPaymentMethods");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var Countries_1 = require("./Countries");
var BusinessPartners_1 = require("./BusinessPartners");
(function (CreditCards) {
    /**
     * Static representation of the [[creditCardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCards.CREDIT_CARD_CODE = new v4_1.NumberField('CreditCardCode', CreditCards, 'Edm.Int32');
    /**
     * Static representation of the [[creditCardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCards.CREDIT_CARD_NAME = new v4_1.StringField('CreditCardName', CreditCards, 'Edm.String');
    /**
     * Static representation of the [[glAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCards.GL_ACCOUNT = new v4_1.StringField('GLAccount', CreditCards, 'Edm.String');
    /**
     * Static representation of the [[telephone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCards.TELEPHONE = new v4_1.StringField('Telephone', CreditCards, 'Edm.String');
    /**
     * Static representation of the [[companyId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCards.COMPANY_ID = new v4_1.StringField('CompanyID', CreditCards, 'Edm.String');
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCards.COUNTRY_CODE = new v4_1.StringField('CountryCode', CreditCards, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[creditPaymentMethods]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCards.CREDIT_PAYMENT_METHODS = new v4_1.OneToManyLink('CreditPaymentMethods', CreditCards, CreditPaymentMethods_1.CreditPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCards.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', CreditCards, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCards.COUNTRY = new v4_1.OneToOneLink('Country', CreditCards, Countries_1.Countries);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CreditCards.BUSINESS_PARTNERS = new v4_1.OneToManyLink('BusinessPartners', CreditCards, BusinessPartners_1.BusinessPartners);
    /**
     * All fields of the CreditCards entity.
     */
    CreditCards._allFields = [
        CreditCards.CREDIT_CARD_CODE,
        CreditCards.CREDIT_CARD_NAME,
        CreditCards.GL_ACCOUNT,
        CreditCards.TELEPHONE,
        CreditCards.COMPANY_ID,
        CreditCards.COUNTRY_CODE,
        CreditCards.CREDIT_PAYMENT_METHODS,
        CreditCards.CHART_OF_ACCOUNT,
        CreditCards.COUNTRY,
        CreditCards.BUSINESS_PARTNERS
    ];
    /**
     * All fields selector.
     */
    CreditCards.ALL_FIELDS = new v4_1.AllFields('*', CreditCards);
    /**
     * All key fields of the CreditCards entity.
     */
    CreditCards._keyFields = [CreditCards.CREDIT_CARD_CODE];
    /**
     * Mapping of all key field names to the respective static field property CreditCards.
     */
    CreditCards._keys = CreditCards._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CreditCards = exports.CreditCards || (exports.CreditCards = {}));
exports.CreditCards = CreditCards;
//# sourceMappingURL=CreditCards.js.map