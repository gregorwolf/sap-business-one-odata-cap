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
exports.SalesTaxAuthorities = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SalesTaxAuthoritiesRequestBuilder_1 = require("./SalesTaxAuthoritiesRequestBuilder");
var TaxDefinition_1 = require("./TaxDefinition");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "SalesTaxAuthorities" of service "SAPB1".
 */
var SalesTaxAuthorities = /** @class */ (function (_super) {
    __extends(SalesTaxAuthorities, _super);
    function SalesTaxAuthorities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SalesTaxAuthorities`.
     * @returns A builder that constructs instances of entity type `SalesTaxAuthorities`.
     */
    SalesTaxAuthorities.builder = function () {
        return v4_1.Entity.entityBuilder(SalesTaxAuthorities);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesTaxAuthorities` entity type.
     * @returns A `SalesTaxAuthorities` request builder.
     */
    SalesTaxAuthorities.requestBuilder = function () {
        return new SalesTaxAuthoritiesRequestBuilder_1.SalesTaxAuthoritiesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesTaxAuthorities`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesTaxAuthorities`.
     */
    SalesTaxAuthorities.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, SalesTaxAuthorities);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesTaxAuthorities.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesTaxAuthorities.
     */
    SalesTaxAuthorities._entityName = 'SalesTaxAuthorities';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesTaxAuthorities.
     */
    SalesTaxAuthorities._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    SalesTaxAuthorities._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SalesTaxAuthorities;
}(v4_1.Entity));
exports.SalesTaxAuthorities = SalesTaxAuthorities;
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var Users_1 = require("./Users");
var SalesTaxAuthoritiesTypes_1 = require("./SalesTaxAuthoritiesTypes");
(function (SalesTaxAuthorities) {
    /**
     * Static representation of the [[useTaxAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.USE_TAX_ACCOUNT = new v4_1.StringField('UseTaxAccount', SalesTaxAuthorities, 'Edm.String');
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.USER_SIGNATURE = new v4_1.NumberField('UserSignature', SalesTaxAuthorities, 'Edm.Int32');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.TYPE = new v4_1.NumberField('Type', SalesTaxAuthorities, 'Edm.Int32');
    /**
     * Static representation of the [[aOrRTaxAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.A_OR_R_TAX_ACCOUNT = new v4_1.StringField('AOrRTaxAccount', SalesTaxAuthorities, 'Edm.String');
    /**
     * Static representation of the [[rate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.RATE = new v4_1.NumberField('Rate', SalesTaxAuthorities, 'Edm.Double');
    /**
     * Static representation of the [[aOrPTaxAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.A_OR_P_TAX_ACCOUNT = new v4_1.StringField('AOrPTaxAccount', SalesTaxAuthorities, 'Edm.String');
    /**
     * Static representation of the [[nonDeductiblePrecent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.NON_DEDUCTIBLE_PRECENT = new v4_1.NumberField('NonDeductiblePrecent', SalesTaxAuthorities, 'Edm.Double');
    /**
     * Static representation of the [[nonDeductibleAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.NON_DEDUCTIBLE_ACCOUNT = new v4_1.StringField('NonDeductibleAccount', SalesTaxAuthorities, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.NAME = new v4_1.StringField('Name', SalesTaxAuthorities, 'Edm.String');
    /**
     * Static representation of the [[deferredTaxAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.DEFERRED_TAX_ACCOUNT = new v4_1.StringField('DeferredTaxAccount', SalesTaxAuthorities, 'Edm.String');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.CODE = new v4_1.StringField('Code', SalesTaxAuthorities, 'Edm.String');
    /**
     * Static representation of the [[minTaxableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.MIN_TAXABLE_AMOUNT = new v4_1.NumberField('MinTaxableAmount', SalesTaxAuthorities, 'Edm.Double');
    /**
     * Static representation of the [[maxTaxableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.MAX_TAXABLE_AMOUNT = new v4_1.NumberField('MaxTaxableAmount', SalesTaxAuthorities, 'Edm.Double');
    /**
     * Static representation of the [[flatTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.FLAT_TAX_AMOUNT = new v4_1.NumberField('FlatTaxAmount', SalesTaxAuthorities, 'Edm.Double');
    /**
     * Static representation of the [[apExpAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.AP_EXP_ACCOUNT = new v4_1.StringField('APExpAccount', SalesTaxAuthorities, 'Edm.String');
    /**
     * Static representation of the [[arExpAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.AR_EXP_ACCOUNT = new v4_1.StringField('ARExpAccount', SalesTaxAuthorities, 'Edm.String');
    /**
     * Static representation of the [[textCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.TEXT_CODE = new v4_1.NumberField('TextCode', SalesTaxAuthorities, 'Edm.Int32');
    /**
     * Static representation of the [[taxDefinitions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.TAX_DEFINITIONS = new v4_1.CollectionField('TaxDefinitions', SalesTaxAuthorities, new TaxDefinition_1.TaxDefinitionField('', SalesTaxAuthorities));
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', SalesTaxAuthorities, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.USER = new v4_1.OneToOneLink('User', SalesTaxAuthorities, Users_1.Users);
    /**
     * Static representation of the one-to-one navigation property [[salesTaxAuthoritiesType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthorities.SALES_TAX_AUTHORITIES_TYPE = new v4_1.OneToOneLink('SalesTaxAuthoritiesType', SalesTaxAuthorities, SalesTaxAuthoritiesTypes_1.SalesTaxAuthoritiesTypes);
    /**
     * All fields of the SalesTaxAuthorities entity.
     */
    SalesTaxAuthorities._allFields = [
        SalesTaxAuthorities.USE_TAX_ACCOUNT,
        SalesTaxAuthorities.USER_SIGNATURE,
        SalesTaxAuthorities.TYPE,
        SalesTaxAuthorities.A_OR_R_TAX_ACCOUNT,
        SalesTaxAuthorities.RATE,
        SalesTaxAuthorities.A_OR_P_TAX_ACCOUNT,
        SalesTaxAuthorities.NON_DEDUCTIBLE_PRECENT,
        SalesTaxAuthorities.NON_DEDUCTIBLE_ACCOUNT,
        SalesTaxAuthorities.NAME,
        SalesTaxAuthorities.DEFERRED_TAX_ACCOUNT,
        SalesTaxAuthorities.CODE,
        SalesTaxAuthorities.MIN_TAXABLE_AMOUNT,
        SalesTaxAuthorities.MAX_TAXABLE_AMOUNT,
        SalesTaxAuthorities.FLAT_TAX_AMOUNT,
        SalesTaxAuthorities.AP_EXP_ACCOUNT,
        SalesTaxAuthorities.AR_EXP_ACCOUNT,
        SalesTaxAuthorities.TEXT_CODE,
        SalesTaxAuthorities.TAX_DEFINITIONS,
        SalesTaxAuthorities.CHART_OF_ACCOUNT,
        SalesTaxAuthorities.USER,
        SalesTaxAuthorities.SALES_TAX_AUTHORITIES_TYPE
    ];
    /**
     * All fields selector.
     */
    SalesTaxAuthorities.ALL_FIELDS = new v4_1.AllFields('*', SalesTaxAuthorities);
    /**
     * All key fields of the SalesTaxAuthorities entity.
     */
    SalesTaxAuthorities._keyFields = [SalesTaxAuthorities.TYPE, SalesTaxAuthorities.CODE];
    /**
     * Mapping of all key field names to the respective static field property SalesTaxAuthorities.
     */
    SalesTaxAuthorities._keys = SalesTaxAuthorities._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesTaxAuthorities = exports.SalesTaxAuthorities || (exports.SalesTaxAuthorities = {}));
exports.SalesTaxAuthorities = SalesTaxAuthorities;
//# sourceMappingURL=SalesTaxAuthorities.js.map