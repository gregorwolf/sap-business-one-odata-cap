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
exports.VatGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var VatGroupsRequestBuilder_1 = require("./VatGroupsRequestBuilder");
var VatGroupsLine_1 = require("./VatGroupsLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "VatGroups" of service "SAPB1".
 */
var VatGroups = /** @class */ (function (_super) {
    __extends(VatGroups, _super);
    function VatGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `VatGroups`.
     * @returns A builder that constructs instances of entity type `VatGroups`.
     */
    VatGroups.builder = function () {
        return core_1.EntityV4.entityBuilder(VatGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `VatGroups` entity type.
     * @returns A `VatGroups` request builder.
     */
    VatGroups.requestBuilder = function () {
        return new VatGroupsRequestBuilder_1.VatGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `VatGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `VatGroups`.
     */
    VatGroups.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, VatGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    VatGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for VatGroups.
     */
    VatGroups._entityName = 'VatGroups';
    /**
     * Default url path for the according service.
     */
    VatGroups._defaultServicePath = '/b1s/v2/';
    return VatGroups;
}(core_1.EntityV4));
exports.VatGroups = VatGroups;
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var VendorPayments_1 = require("./VendorPayments");
var Items_1 = require("./Items");
var BusinessPartners_1 = require("./BusinessPartners");
var GlAccountAdvancedRules_1 = require("./GlAccountAdvancedRules");
var AdditionalExpenses_1 = require("./AdditionalExpenses");
var PaymentDrafts_1 = require("./PaymentDrafts");
var Deposits_1 = require("./Deposits");
var IncomingPayments_1 = require("./IncomingPayments");
(function (VatGroups) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.CODE = new core_1.StringField('Code', VatGroups, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.NAME = new core_1.StringField('Name', VatGroups, 'Edm.String');
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.CATEGORY = new core_1.EnumField('Category', VatGroups);
    /**
     * Static representation of the [[taxAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.TAX_ACCOUNT = new core_1.StringField('TaxAccount', VatGroups, 'Edm.String');
    /**
     * Static representation of the [[eu]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.EU = new core_1.EnumField('EU', VatGroups);
    /**
     * Static representation of the [[triangularDeal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.TRIANGULAR_DEAL = new core_1.StringField('TriangularDeal', VatGroups, 'Edm.String');
    /**
     * Static representation of the [[acquisitionReverse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.ACQUISITION_REVERSE = new core_1.EnumField('AcquisitionReverse', VatGroups);
    /**
     * Static representation of the [[nonDeduct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.NON_DEDUCT = new core_1.NumberField('NonDeduct', VatGroups, 'Edm.Double');
    /**
     * Static representation of the [[acquisitionTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.ACQUISITION_TAX = new core_1.StringField('AcquisitionTax', VatGroups, 'Edm.String');
    /**
     * Static representation of the [[goodsShipment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.GOODS_SHIPMENT = new core_1.StringField('GoodsShipment', VatGroups, 'Edm.String');
    /**
     * Static representation of the [[nonDeductAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.NON_DEDUCT_ACC = new core_1.StringField('NonDeductAcc', VatGroups, 'Edm.String');
    /**
     * Static representation of the [[deferredTaxAcc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.DEFERRED_TAX_ACC = new core_1.StringField('DeferredTaxAcc', VatGroups, 'Edm.String');
    /**
     * Static representation of the [[correction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.CORRECTION = new core_1.EnumField('Correction', VatGroups);
    /**
     * Static representation of the [[vatCorrection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.VAT_CORRECTION = new core_1.StringField('VatCorrection', VatGroups, 'Edm.String');
    /**
     * Static representation of the [[equalizationTaxAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.EQUALIZATION_TAX_ACCOUNT = new core_1.StringField('EqualizationTaxAccount', VatGroups, 'Edm.String');
    /**
     * Static representation of the [[serviceSupply]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.SERVICE_SUPPLY = new core_1.StringField('ServiceSupply', VatGroups, 'Edm.String');
    /**
     * Static representation of the [[inactive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.INACTIVE = new core_1.EnumField('Inactive', VatGroups);
    /**
     * Static representation of the [[taxTypeBlackList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.TAX_TYPE_BLACK_LIST = new core_1.EnumField('TaxTypeBlackList', VatGroups);
    /**
     * Static representation of the [[report349Code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.REPORT_349_CODE = new core_1.EnumField('Report349Code', VatGroups);
    /**
     * Static representation of the [[vatInRevenueAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.VAT_IN_REVENUE_ACCOUNT = new core_1.StringField('VATInRevenueAccount', VatGroups, 'Edm.String');
    /**
     * Static representation of the [[downPaymentTaxOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.DOWN_PAYMENT_TAX_OFFSET_ACCOUNT = new core_1.StringField('DownPaymentTaxOffsetAccount', VatGroups, 'Edm.String');
    /**
     * Static representation of the [[cashDiscountAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.CASH_DISCOUNT_ACCOUNT = new core_1.StringField('CashDiscountAccount', VatGroups, 'Edm.String');
    /**
     * Static representation of the [[vatDeductibleAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.VAT_DEDUCTIBLE_ACCOUNT = new core_1.StringField('VATDeductibleAccount', VatGroups, 'Edm.String');
    /**
     * Static representation of the [[taxRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.TAX_REGION = new core_1.EnumField('TaxRegion', VatGroups);
    /**
     * Static representation of the [[vatGroupsLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.VAT_GROUPS_LINES = new core_1.CollectionField('VatGroups_Lines', VatGroups, VatGroupsLine_1.VatGroupsLine);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', VatGroups, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.VENDOR_PAYMENTS = new core_1.OneToManyLink('VendorPayments', VatGroups, VendorPayments_1.VendorPayments);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.ITEMS = new core_1.OneToManyLink('Items', VatGroups, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', VatGroups, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.GL_ACCOUNT_ADVANCED_RULES = new core_1.OneToManyLink('GLAccountAdvancedRules', VatGroups, GlAccountAdvancedRules_1.GlAccountAdvancedRules);
    /**
     * Static representation of the one-to-many navigation property [[additionalExpenses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.ADDITIONAL_EXPENSES = new core_1.OneToManyLink('AdditionalExpenses', VatGroups, AdditionalExpenses_1.AdditionalExpenses);
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.PAYMENT_DRAFTS = new core_1.OneToManyLink('PaymentDrafts', VatGroups, PaymentDrafts_1.PaymentDrafts);
    /**
     * Static representation of the one-to-many navigation property [[deposits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.DEPOSITS = new core_1.OneToManyLink('Deposits', VatGroups, Deposits_1.Deposits);
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VatGroups.INCOMING_PAYMENTS = new core_1.OneToManyLink('IncomingPayments', VatGroups, IncomingPayments_1.IncomingPayments);
    /**
     * All fields of the VatGroups entity.
     */
    VatGroups._allFields = [
        VatGroups.CODE,
        VatGroups.NAME,
        VatGroups.CATEGORY,
        VatGroups.TAX_ACCOUNT,
        VatGroups.EU,
        VatGroups.TRIANGULAR_DEAL,
        VatGroups.ACQUISITION_REVERSE,
        VatGroups.NON_DEDUCT,
        VatGroups.ACQUISITION_TAX,
        VatGroups.GOODS_SHIPMENT,
        VatGroups.NON_DEDUCT_ACC,
        VatGroups.DEFERRED_TAX_ACC,
        VatGroups.CORRECTION,
        VatGroups.VAT_CORRECTION,
        VatGroups.EQUALIZATION_TAX_ACCOUNT,
        VatGroups.SERVICE_SUPPLY,
        VatGroups.INACTIVE,
        VatGroups.TAX_TYPE_BLACK_LIST,
        VatGroups.REPORT_349_CODE,
        VatGroups.VAT_IN_REVENUE_ACCOUNT,
        VatGroups.DOWN_PAYMENT_TAX_OFFSET_ACCOUNT,
        VatGroups.CASH_DISCOUNT_ACCOUNT,
        VatGroups.VAT_DEDUCTIBLE_ACCOUNT,
        VatGroups.TAX_REGION,
        VatGroups.VAT_GROUPS_LINES,
        VatGroups.CHART_OF_ACCOUNT,
        VatGroups.VENDOR_PAYMENTS,
        VatGroups.ITEMS,
        VatGroups.BUSINESS_PARTNERS,
        VatGroups.GL_ACCOUNT_ADVANCED_RULES,
        VatGroups.ADDITIONAL_EXPENSES,
        VatGroups.PAYMENT_DRAFTS,
        VatGroups.DEPOSITS,
        VatGroups.INCOMING_PAYMENTS
    ];
    /**
     * All fields selector.
     */
    VatGroups.ALL_FIELDS = new core_1.AllFields('*', VatGroups);
    /**
     * All key fields of the VatGroups entity.
     */
    VatGroups._keyFields = [VatGroups.CODE];
    /**
     * Mapping of all key field names to the respective static field property VatGroups.
     */
    VatGroups._keys = VatGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(VatGroups = exports.VatGroups || (exports.VatGroups = {}));
exports.VatGroups = VatGroups;
//# sourceMappingURL=VatGroups.js.map