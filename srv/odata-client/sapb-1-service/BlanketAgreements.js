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
exports.BlanketAgreements = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BlanketAgreementsRequestBuilder_1 = require("./BlanketAgreementsRequestBuilder");
var BlanketAgreementsItemsLine_1 = require("./BlanketAgreementsItemsLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "BlanketAgreements" of service "SAPB1".
 */
var BlanketAgreements = /** @class */ (function (_super) {
    __extends(BlanketAgreements, _super);
    function BlanketAgreements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BlanketAgreements`.
     * @returns A builder that constructs instances of entity type `BlanketAgreements`.
     */
    BlanketAgreements.builder = function () {
        return core_1.EntityV4.entityBuilder(BlanketAgreements);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BlanketAgreements` entity type.
     * @returns A `BlanketAgreements` request builder.
     */
    BlanketAgreements.requestBuilder = function () {
        return new BlanketAgreementsRequestBuilder_1.BlanketAgreementsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BlanketAgreements`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BlanketAgreements`.
     */
    BlanketAgreements.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, BlanketAgreements);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BlanketAgreements.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BlanketAgreements.
     */
    BlanketAgreements._entityName = 'BlanketAgreements';
    /**
     * Default url path for the according service.
     */
    BlanketAgreements._defaultServicePath = '/b1s/v2/';
    return BlanketAgreements;
}(core_1.EntityV4));
exports.BlanketAgreements = BlanketAgreements;
var VendorPayments_1 = require("./VendorPayments");
var JournalEntries_1 = require("./JournalEntries");
var BusinessPartners_1 = require("./BusinessPartners");
var EmployeesInfo_1 = require("./EmployeesInfo");
var Attachments2_1 = require("./Attachments2");
var PaymentTermsTypes_1 = require("./PaymentTermsTypes");
var PriceLists_1 = require("./PriceLists");
var WizardPaymentMethods_1 = require("./WizardPaymentMethods");
var ShippingTypes_1 = require("./ShippingTypes");
var Projects_1 = require("./Projects");
var Currencies_1 = require("./Currencies");
var PaymentDrafts_1 = require("./PaymentDrafts");
var IncomingPayments_1 = require("./IncomingPayments");
(function (BlanketAgreements) {
    /**
     * Static representation of the [[agreementNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.AGREEMENT_NO = new core_1.NumberField('AgreementNo', BlanketAgreements, 'Edm.Int32');
    /**
     * Static representation of the [[bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.BP_CODE = new core_1.StringField('BPCode', BlanketAgreements, 'Edm.String');
    /**
     * Static representation of the [[bpName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.BP_NAME = new core_1.StringField('BPName', BlanketAgreements, 'Edm.String');
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.CONTACT_PERSON_CODE = new core_1.NumberField('ContactPersonCode', BlanketAgreements, 'Edm.Int32');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.START_DATE = new core_1.DateField('StartDate', BlanketAgreements, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.END_DATE = new core_1.DateField('EndDate', BlanketAgreements, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[terminateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.TERMINATE_DATE = new core_1.DateField('TerminateDate', BlanketAgreements, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.DESCRIPTION = new core_1.StringField('Description', BlanketAgreements, 'Edm.String');
    /**
     * Static representation of the [[agreementType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.AGREEMENT_TYPE = new core_1.EnumField('AgreementType', BlanketAgreements);
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.STATUS = new core_1.EnumField('Status', BlanketAgreements);
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.OWNER = new core_1.NumberField('Owner', BlanketAgreements, 'Edm.Int32');
    /**
     * Static representation of the [[ignorePricesInAgreement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.IGNORE_PRICES_IN_AGREEMENT = new core_1.EnumField('IgnorePricesInAgreement', BlanketAgreements);
    /**
     * Static representation of the [[renewal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.RENEWAL = new core_1.EnumField('Renewal', BlanketAgreements);
    /**
     * Static representation of the [[remindUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.REMIND_UNIT = new core_1.EnumField('RemindUnit', BlanketAgreements);
    /**
     * Static representation of the [[remindTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.REMIND_TIME = new core_1.NumberField('RemindTime', BlanketAgreements, 'Edm.Int32');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.REMARKS = new core_1.StringField('Remarks', BlanketAgreements, 'Edm.String');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', BlanketAgreements, 'Edm.Int32');
    /**
     * Static representation of the [[settlementProbability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.SETTLEMENT_PROBABILITY = new core_1.NumberField('SettlementProbability', BlanketAgreements, 'Edm.Double');
    /**
     * Static representation of the [[agreementMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.AGREEMENT_METHOD = new core_1.EnumField('AgreementMethod', BlanketAgreements);
    /**
     * Static representation of the [[paymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.PAYMENT_TERMS = new core_1.NumberField('PaymentTerms', BlanketAgreements, 'Edm.Int32');
    /**
     * Static representation of the [[priceList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.PRICE_LIST = new core_1.NumberField('PriceList', BlanketAgreements, 'Edm.Int32');
    /**
     * Static representation of the [[signingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.SIGNING_DATE = new core_1.DateField('SigningDate', BlanketAgreements, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[amendmentTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.AMENDMENT_TO = new core_1.NumberField('AmendmentTo', BlanketAgreements, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.SERIES = new core_1.NumberField('Series', BlanketAgreements, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.DOC_NUM = new core_1.NumberField('DocNum', BlanketAgreements, 'Edm.Int32');
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.HAND_WRITTEN = new core_1.EnumField('HandWritten', BlanketAgreements);
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', BlanketAgreements, 'Edm.String');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.PAYMENT_METHOD = new core_1.StringField('PaymentMethod', BlanketAgreements, 'Edm.String');
    /**
     * Static representation of the [[exchangeRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.EXCHANGE_RATE = new core_1.NumberField('ExchangeRate', BlanketAgreements, 'Edm.Double');
    /**
     * Static representation of the [[shippingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.SHIPPING_TYPE = new core_1.NumberField('ShippingType', BlanketAgreements, 'Edm.Int32');
    /**
     * Static representation of the [[numAtCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.NUM_AT_CARD = new core_1.StringField('NumAtCard', BlanketAgreements, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.PROJECT = new core_1.StringField('Project', BlanketAgreements, 'Edm.String');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.PRICE_MODE = new core_1.EnumField('PriceMode', BlanketAgreements);
    /**
     * Static representation of the [[bpCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.BP_CURRENCY = new core_1.StringField('BPCurrency', BlanketAgreements, 'Edm.String');
    /**
     * Static representation of the [[blanketAgreementsItemsLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.BLANKET_AGREEMENTS_ITEMS_LINES = new core_1.CollectionField('BlanketAgreements_ItemsLines', BlanketAgreements, BlanketAgreementsItemsLine_1.BlanketAgreementsItemsLine);
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.VENDOR_PAYMENTS = new core_1.OneToManyLink('VendorPayments', BlanketAgreements, VendorPayments_1.VendorPayments);
    /**
     * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.JOURNAL_ENTRIES = new core_1.OneToManyLink('JournalEntries', BlanketAgreements, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', BlanketAgreements, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', BlanketAgreements, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', BlanketAgreements, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[attachments2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.ATTACHMENTS_2 = new core_1.OneToOneLink('Attachments2', BlanketAgreements, Attachments2_1.Attachments2);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', BlanketAgreements, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[priceList2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.PRICE_LIST_2 = new core_1.OneToOneLink('PriceList2', BlanketAgreements, PriceLists_1.PriceLists);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', BlanketAgreements, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[shippingType2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.SHIPPING_TYPE_2 = new core_1.OneToOneLink('ShippingType2', BlanketAgreements, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.PROJECT_2 = new core_1.OneToOneLink('Project2', BlanketAgreements, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[currency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.CURRENCY = new core_1.OneToOneLink('Currency', BlanketAgreements, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.PAYMENT_DRAFTS = new core_1.OneToManyLink('PaymentDrafts', BlanketAgreements, PaymentDrafts_1.PaymentDrafts);
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BlanketAgreements.INCOMING_PAYMENTS = new core_1.OneToManyLink('IncomingPayments', BlanketAgreements, IncomingPayments_1.IncomingPayments);
    /**
     * All fields of the BlanketAgreements entity.
     */
    BlanketAgreements._allFields = [
        BlanketAgreements.AGREEMENT_NO,
        BlanketAgreements.BP_CODE,
        BlanketAgreements.BP_NAME,
        BlanketAgreements.CONTACT_PERSON_CODE,
        BlanketAgreements.START_DATE,
        BlanketAgreements.END_DATE,
        BlanketAgreements.TERMINATE_DATE,
        BlanketAgreements.DESCRIPTION,
        BlanketAgreements.AGREEMENT_TYPE,
        BlanketAgreements.STATUS,
        BlanketAgreements.OWNER,
        BlanketAgreements.IGNORE_PRICES_IN_AGREEMENT,
        BlanketAgreements.RENEWAL,
        BlanketAgreements.REMIND_UNIT,
        BlanketAgreements.REMIND_TIME,
        BlanketAgreements.REMARKS,
        BlanketAgreements.ATTACHMENT_ENTRY,
        BlanketAgreements.SETTLEMENT_PROBABILITY,
        BlanketAgreements.AGREEMENT_METHOD,
        BlanketAgreements.PAYMENT_TERMS,
        BlanketAgreements.PRICE_LIST,
        BlanketAgreements.SIGNING_DATE,
        BlanketAgreements.AMENDMENT_TO,
        BlanketAgreements.SERIES,
        BlanketAgreements.DOC_NUM,
        BlanketAgreements.HAND_WRITTEN,
        BlanketAgreements.PERIOD_INDICATOR,
        BlanketAgreements.PAYMENT_METHOD,
        BlanketAgreements.EXCHANGE_RATE,
        BlanketAgreements.SHIPPING_TYPE,
        BlanketAgreements.NUM_AT_CARD,
        BlanketAgreements.PROJECT,
        BlanketAgreements.PRICE_MODE,
        BlanketAgreements.BP_CURRENCY,
        BlanketAgreements.BLANKET_AGREEMENTS_ITEMS_LINES,
        BlanketAgreements.VENDOR_PAYMENTS,
        BlanketAgreements.JOURNAL_ENTRIES,
        BlanketAgreements.BUSINESS_PARTNERS,
        BlanketAgreements.BUSINESS_PARTNER,
        BlanketAgreements.EMPLOYEE_INFO,
        BlanketAgreements.ATTACHMENTS_2,
        BlanketAgreements.PAYMENT_TERMS_TYPE,
        BlanketAgreements.PRICE_LIST_2,
        BlanketAgreements.WIZARD_PAYMENT_METHOD,
        BlanketAgreements.SHIPPING_TYPE_2,
        BlanketAgreements.PROJECT_2,
        BlanketAgreements.CURRENCY,
        BlanketAgreements.PAYMENT_DRAFTS,
        BlanketAgreements.INCOMING_PAYMENTS
    ];
    /**
     * All fields selector.
     */
    BlanketAgreements.ALL_FIELDS = new core_1.AllFields('*', BlanketAgreements);
    /**
     * All key fields of the BlanketAgreements entity.
     */
    BlanketAgreements._keyFields = [BlanketAgreements.AGREEMENT_NO];
    /**
     * Mapping of all key field names to the respective static field property BlanketAgreements.
     */
    BlanketAgreements._keys = BlanketAgreements._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BlanketAgreements = exports.BlanketAgreements || (exports.BlanketAgreements = {}));
exports.BlanketAgreements = BlanketAgreements;
//# sourceMappingURL=BlanketAgreements.js.map