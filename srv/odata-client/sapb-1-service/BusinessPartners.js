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
exports.BusinessPartners = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BusinessPartnersRequestBuilder_1 = require("./BusinessPartnersRequestBuilder");
var BpAddress_1 = require("./BpAddress");
var ContactEmployee_1 = require("./ContactEmployee");
var BpAccountReceivablePayble_1 = require("./BpAccountReceivablePayble");
var BpPaymentMethod_1 = require("./BpPaymentMethod");
var BpWithholdingTax_1 = require("./BpWithholdingTax");
var BpPaymentDate_1 = require("./BpPaymentDate");
var BpBranchAssignmentItem_1 = require("./BpBranchAssignmentItem");
var BpBankAccount_1 = require("./BpBankAccount");
var BpFiscalTaxId_1 = require("./BpFiscalTaxId");
var DiscountGroup_1 = require("./DiscountGroup");
var BpIntrastatExtension_1 = require("./BpIntrastatExtension");
var BpBlockSendingMarketingContent_1 = require("./BpBlockSendingMarketingContent");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "BusinessPartners" of service "SAPB1".
 */
var BusinessPartners = /** @class */ (function (_super) {
    __extends(BusinessPartners, _super);
    function BusinessPartners() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BusinessPartners`.
     * @returns A builder that constructs instances of entity type `BusinessPartners`.
     */
    BusinessPartners.builder = function () {
        return v4_1.Entity.entityBuilder(BusinessPartners);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartners` entity type.
     * @returns A `BusinessPartners` request builder.
     */
    BusinessPartners.requestBuilder = function () {
        return new BusinessPartnersRequestBuilder_1.BusinessPartnersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartners`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartners`.
     */
    BusinessPartners.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, BusinessPartners);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BusinessPartners.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BusinessPartners.
     */
    BusinessPartners._entityName = 'BusinessPartners';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BusinessPartners.
     */
    BusinessPartners._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    BusinessPartners._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BusinessPartners;
}(v4_1.Entity));
exports.BusinessPartners = BusinessPartners;
var SalesOpportunities_1 = require("./SalesOpportunities");
var UserDefaultGroups_1 = require("./UserDefaultGroups");
var SpecialPrices_1 = require("./SpecialPrices");
var LandedCosts_1 = require("./LandedCosts");
var WorkOrders_1 = require("./WorkOrders");
var Warehouses_1 = require("./Warehouses");
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
var BankPages_1 = require("./BankPages");
var Items_1 = require("./Items");
var Contacts_1 = require("./Contacts");
var ProductionOrders_1 = require("./ProductionOrders");
var DepreciationAreas_1 = require("./DepreciationAreas");
var DeliveryNotes_1 = require("./DeliveryNotes");
var BusinessPartnerGroups_1 = require("./BusinessPartnerGroups");
var PaymentTermsTypes_1 = require("./PaymentTermsTypes");
var PriceLists_1 = require("./PriceLists");
var CommissionGroups_1 = require("./CommissionGroups");
var SalesPersons_1 = require("./SalesPersons");
var Currencies_1 = require("./Currencies");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var Countries_1 = require("./Countries");
var VatGroups_1 = require("./VatGroups");
var ShippingTypes_1 = require("./ShippingTypes");
var FactoringIndicators_1 = require("./FactoringIndicators");
var CreditCards_1 = require("./CreditCards");
var BpPriorities_1 = require("./BpPriorities");
var Forms1099_1 = require("./Forms1099");
var WizardPaymentMethods_1 = require("./WizardPaymentMethods");
var DunningLetters_1 = require("./DunningLetters");
var PaymentBlocks_1 = require("./PaymentBlocks");
var WithholdingTaxCodes_1 = require("./WithholdingTaxCodes");
var EmployeesInfo_1 = require("./EmployeesInfo");
var Territories_1 = require("./Territories");
var Projects_1 = require("./Projects");
var SalesTaxCodes_1 = require("./SalesTaxCodes");
var DunningTerms_1 = require("./DunningTerms");
var UserLanguages_1 = require("./UserLanguages");
var DeductionTaxGroups_1 = require("./DeductionTaxGroups");
var BankChargesAllocationCodes_1 = require("./BankChargesAllocationCodes");
var Industries_1 = require("./Industries");
var TaxWebSites_1 = require("./TaxWebSites");
var Campaigns_1 = require("./Campaigns");
var BlanketAgreements_1 = require("./BlanketAgreements");
var Quotations_1 = require("./Quotations");
var ServiceContracts_1 = require("./ServiceContracts");
var InventoryGenExits_1 = require("./InventoryGenExits");
var PurchaseRequests_1 = require("./PurchaseRequests");
var DeductionTaxHierarchies_1 = require("./DeductionTaxHierarchies");
var ReturnRequest_1 = require("./ReturnRequest");
var GlAccountAdvancedRules_1 = require("./GlAccountAdvancedRules");
var PurchaseReturns_1 = require("./PurchaseReturns");
var Invoices_1 = require("./Invoices");
var CreditNotes_1 = require("./CreditNotes");
var StockTransfers_1 = require("./StockTransfers");
var BusinessPlaces_1 = require("./BusinessPlaces");
var Orders_1 = require("./Orders");
var PartnersSetups_1 = require("./PartnersSetups");
var InventoryTransferRequests_1 = require("./InventoryTransferRequests");
var Activities_1 = require("./Activities");
var DownPayments_1 = require("./DownPayments");
var Drafts_1 = require("./Drafts");
var StockTransferDrafts_1 = require("./StockTransferDrafts");
var Returns_1 = require("./Returns");
var MaterialRevaluation_1 = require("./MaterialRevaluation");
var CorrectionInvoiceReversal_1 = require("./CorrectionInvoiceReversal");
var CorrectionPurchaseInvoice_1 = require("./CorrectionPurchaseInvoice");
var CorrectionPurchaseInvoiceReversal_1 = require("./CorrectionPurchaseInvoiceReversal");
var CustomerEquipmentCards_1 = require("./CustomerEquipmentCards");
var PurchaseInvoices_1 = require("./PurchaseInvoices");
var PurchaseDeliveryNotes_1 = require("./PurchaseDeliveryNotes");
var CorrectionInvoice_1 = require("./CorrectionInvoice");
var PurchaseCreditNotes_1 = require("./PurchaseCreditNotes");
var ServiceCalls_1 = require("./ServiceCalls");
var PurchaseDownPayments_1 = require("./PurchaseDownPayments");
var PurchaseOrders_1 = require("./PurchaseOrders");
var AlternateCatNum_1 = require("./AlternateCatNum");
var ProjectManagements_1 = require("./ProjectManagements");
var GoodsReturnRequest_1 = require("./GoodsReturnRequest");
var SalesTaxInvoices_1 = require("./SalesTaxInvoices");
var PurchaseTaxInvoices_1 = require("./PurchaseTaxInvoices");
(function (BusinessPartners) {
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CARD_CODE = new v4_1.StringField('CardCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CARD_NAME = new v4_1.StringField('CardName', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[groupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.GROUP_CODE = new v4_1.NumberField('GroupCode', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ADDRESS = new v4_1.StringField('Address', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ZIP_CODE = new v4_1.StringField('ZipCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[mailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MAIL_ADDRESS = new v4_1.StringField('MailAddress', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[mailZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MAIL_ZIP_CODE = new v4_1.StringField('MailZipCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[phone1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PHONE_1 = new v4_1.StringField('Phone1', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[phone2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PHONE_2 = new v4_1.StringField('Phone2', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FAX = new v4_1.StringField('Fax', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CONTACT_PERSON = new v4_1.StringField('ContactPerson', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.NOTES = new v4_1.StringField('Notes', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[payTermsGrpCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PAY_TERMS_GRP_CODE = new v4_1.NumberField('PayTermsGrpCode', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[creditLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CREDIT_LIMIT = new v4_1.NumberField('CreditLimit', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[maxCommitment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MAX_COMMITMENT = new v4_1.NumberField('MaxCommitment', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DISCOUNT_PERCENT = new v4_1.NumberField('DiscountPercent', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[deductionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEDUCTION_PERCENT = new v4_1.NumberField('DeductionPercent', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[deductionValidUntil]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEDUCTION_VALID_UNTIL = new v4_1.DateField('DeductionValidUntil', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[priceListNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PRICE_LIST_NUM = new v4_1.NumberField('PriceListNum', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[intrestRatePercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INTREST_RATE_PERCENT = new v4_1.NumberField('IntrestRatePercent', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[commissionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COMMISSION_PERCENT = new v4_1.NumberField('CommissionPercent', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[commissionGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COMMISSION_GROUP_CODE = new v4_1.NumberField('CommissionGroupCode', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[freeText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FREE_TEXT = new v4_1.StringField('FreeText', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SALES_PERSON_CODE = new v4_1.NumberField('SalesPersonCode', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CURRENCY = new v4_1.StringField('Currency', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[rateDiffAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.RATE_DIFF_ACCOUNT = new v4_1.StringField('RateDiffAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[cellular]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CELLULAR = new v4_1.StringField('Cellular', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[avarageLate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.AVARAGE_LATE = new v4_1.NumberField('AvarageLate', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CITY = new v4_1.StringField('City', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COUNTY = new v4_1.StringField('County', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COUNTRY = new v4_1.StringField('Country', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[mailCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MAIL_CITY = new v4_1.StringField('MailCity', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[mailCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MAIL_COUNTY = new v4_1.StringField('MailCounty', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[mailCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MAIL_COUNTRY = new v4_1.StringField('MailCountry', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EMAIL_ADDRESS = new v4_1.StringField('EmailAddress', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[picture]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PICTURE = new v4_1.StringField('Picture', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[defaultAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEFAULT_ACCOUNT = new v4_1.StringField('DefaultAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[defaultBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEFAULT_BRANCH = new v4_1.StringField('DefaultBranch', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[defaultBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEFAULT_BANK_CODE = new v4_1.StringField('DefaultBankCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[additionalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ADDITIONAL_ID = new v4_1.StringField('AdditionalID', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[pager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PAGER = new v4_1.StringField('Pager', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[fatherCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FATHER_CARD = new v4_1.StringField('FatherCard', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[cardForeignName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CARD_FOREIGN_NAME = new v4_1.StringField('CardForeignName', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[deductionOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEDUCTION_OFFICE = new v4_1.StringField('DeductionOffice', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[exportCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EXPORT_CODE = new v4_1.StringField('ExportCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[minIntrest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MIN_INTREST = new v4_1.NumberField('MinIntrest', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[currentAccountBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CURRENT_ACCOUNT_BALANCE = new v4_1.NumberField('CurrentAccountBalance', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[openDeliveryNotesBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.OPEN_DELIVERY_NOTES_BALANCE = new v4_1.NumberField('OpenDeliveryNotesBalance', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[openOrdersBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.OPEN_ORDERS_BALANCE = new v4_1.NumberField('OpenOrdersBalance', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[vatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VAT_GROUP = new v4_1.StringField('VatGroup', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[shippingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SHIPPING_TYPE = new v4_1.NumberField('ShippingType', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[password]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PASSWORD = new v4_1.StringField('Password', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INDICATOR = new v4_1.StringField('Indicator', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[iban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.IBAN = new v4_1.StringField('IBAN', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[creditCardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CREDIT_CARD_CODE = new v4_1.NumberField('CreditCardCode', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[creditCardNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CREDIT_CARD_NUM = new v4_1.StringField('CreditCardNum', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[creditCardExpiration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CREDIT_CARD_EXPIRATION = new v4_1.DateField('CreditCardExpiration', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[debitorAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEBITOR_ACCOUNT = new v4_1.StringField('DebitorAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[openOpportunities]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.OPEN_OPPORTUNITIES = new v4_1.NumberField('OpenOpportunities', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VALID_FROM = new v4_1.DateField('ValidFrom', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VALID_TO = new v4_1.DateField('ValidTo', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VALID_REMARKS = new v4_1.StringField('ValidRemarks', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[frozenFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FROZEN_FROM = new v4_1.DateField('FrozenFrom', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[frozenTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FROZEN_TO = new v4_1.DateField('FrozenTo', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[frozenRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FROZEN_REMARKS = new v4_1.StringField('FrozenRemarks', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[block]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BLOCK = new v4_1.StringField('Block', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[billToState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BILL_TO_STATE = new v4_1.StringField('BillToState', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[exemptNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EXEMPT_NUM = new v4_1.StringField('ExemptNum', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PRIORITY = new v4_1.NumberField('Priority', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[formCode1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FORM_CODE_1099 = new v4_1.NumberField('FormCode1099', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BOX_1099 = new v4_1.StringField('Box1099', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[peymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PEYMENT_METHOD_CODE = new v4_1.StringField('PeymentMethodCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[bankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BANK_COUNTRY = new v4_1.StringField('BankCountry', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[houseBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.HOUSE_BANK = new v4_1.StringField('HouseBank', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[houseBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.HOUSE_BANK_COUNTRY = new v4_1.StringField('HouseBankCountry', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[houseBankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.HOUSE_BANK_ACCOUNT = new v4_1.StringField('HouseBankAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[shipToDefault]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SHIP_TO_DEFAULT = new v4_1.StringField('ShipToDefault', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[dunningLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DUNNING_LEVEL = new v4_1.NumberField('DunningLevel', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[dunningDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DUNNING_DATE = new v4_1.DateField('DunningDate', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[dme]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DME = new v4_1.StringField('DME', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[instructionKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INSTRUCTION_KEY = new v4_1.StringField('InstructionKey', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[isrBillerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ISR_BILLER_ID = new v4_1.StringField('ISRBillerID', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[referenceDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.REFERENCE_DETAILS = new v4_1.StringField('ReferenceDetails', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[houseBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.HOUSE_BANK_BRANCH = new v4_1.StringField('HouseBankBranch', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[ownerIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.OWNER_ID_NUMBER = new v4_1.StringField('OwnerIDNumber', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PAYMENT_BLOCK_DESCRIPTION = new v4_1.NumberField('PaymentBlockDescription', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.TAX_EXEMPTION_LETTER_NUM = new v4_1.StringField('TaxExemptionLetterNum', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[maxAmountOfExemption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MAX_AMOUNT_OF_EXEMPTION = new v4_1.NumberField('MaxAmountOfExemption', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EXEMPTION_VALIDITY_DATE_FROM = new v4_1.DateField('ExemptionValidityDateFrom', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EXEMPTION_VALIDITY_DATE_TO = new v4_1.DateField('ExemptionValidityDateTo', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[linkedBusinessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.LINKED_BUSINESS_PARTNER = new v4_1.StringField('LinkedBusinessPartner', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[lastMultiReconciliationNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.LAST_MULTI_RECONCILIATION_NUM = new v4_1.NumberField('LastMultiReconciliationNum', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[certificateNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CERTIFICATE_NUMBER = new v4_1.StringField('CertificateNumber', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[expirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EXPIRATION_DATE = new v4_1.DateField('ExpirationDate', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[nationalInsuranceNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.NATIONAL_INSURANCE_NUM = new v4_1.StringField('NationalInsuranceNum', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.WT_CODE = new v4_1.StringField('WTCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[billToBuildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BILL_TO_BUILDING_FLOOR_ROOM = new v4_1.StringField('BillToBuildingFloorRoom', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[downPaymentClearAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DOWN_PAYMENT_CLEAR_ACT = new v4_1.StringField('DownPaymentClearAct', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[channelBp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CHANNEL_BP = new v4_1.StringField('ChannelBP', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[defaultTechnician]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEFAULT_TECHNICIAN = new v4_1.NumberField('DefaultTechnician', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[billtoDefault]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BILLTO_DEFAULT = new v4_1.StringField('BilltoDefault', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[customerBillofExchangDisc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CUSTOMER_BILLOF_EXCHANG_DISC = new v4_1.StringField('CustomerBillofExchangDisc', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[territory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.TERRITORY = new v4_1.NumberField('Territory', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[shipToBuildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SHIP_TO_BUILDING_FLOOR_ROOM = new v4_1.StringField('ShipToBuildingFloorRoom', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[customerBillofExchangPres]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CUSTOMER_BILLOF_EXCHANG_PRES = new v4_1.StringField('CustomerBillofExchangPres', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROJECT_CODE = new v4_1.StringField('ProjectCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[vatGroupLatinAmerica]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VAT_GROUP_LATIN_AMERICA = new v4_1.StringField('VatGroupLatinAmerica', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[dunningTerm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DUNNING_TERM = new v4_1.StringField('DunningTerm', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[website]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.WEBSITE = new v4_1.StringField('Website', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[otherReceivablePayable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.OTHER_RECEIVABLE_PAYABLE = new v4_1.StringField('OtherReceivablePayable', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[billofExchangeonCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BILLOF_EXCHANGEON_COLLECTION = new v4_1.StringField('BillofExchangeonCollection', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.LANGUAGE_CODE = new v4_1.NumberField('LanguageCode', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[unpaidBillofExchange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.UNPAID_BILLOF_EXCHANGE = new v4_1.StringField('UnpaidBillofExchange', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[withholdingTaxDeductionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.WITHHOLDING_TAX_DEDUCTION_GROUP = new v4_1.NumberField('WithholdingTaxDeductionGroup', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[closingDateProcedureNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CLOSING_DATE_PROCEDURE_NUMBER = new v4_1.NumberField('ClosingDateProcedureNumber', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[profession]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROFESSION = new v4_1.StringField('Profession', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[bankChargesAllocationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BANK_CHARGES_ALLOCATION_CODE = new v4_1.StringField('BankChargesAllocationCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[companyRegistrationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COMPANY_REGISTRATION_NUMBER = new v4_1.StringField('CompanyRegistrationNumber', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[verificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VERIFICATION_NUMBER = new v4_1.StringField('VerificationNumber', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[downPaymentInterimAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DOWN_PAYMENT_INTERIM_ACCOUNT = new v4_1.StringField('DownPaymentInterimAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[planningGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PLANNING_GROUP = new v4_1.StringField('PlanningGroup', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INDUSTRY = new v4_1.NumberField('Industry', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[vatIdNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VAT_ID_NUM = new v4_1.StringField('VatIDNum', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[datevAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DATEV_ACCOUNT = new v4_1.StringField('DatevAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[gtsRegNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.GTS_REG_NO = new v4_1.StringField('GTSRegNo', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[gtsBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.GTS_BANK_ACCOUNT_NO = new v4_1.StringField('GTSBankAccountNo', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[gtsBillingAddrTel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.GTS_BILLING_ADDR_TEL = new v4_1.StringField('GTSBillingAddrTel', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_TAX_WEB_SITE = new v4_1.NumberField('ETaxWebSite', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[houseBankIban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.HOUSE_BANK_IBAN = new v4_1.StringField('HouseBankIBAN', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[vatRegistrationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VAT_REGISTRATION_NUMBER = new v4_1.StringField('VATRegistrationNumber', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[representativeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.REPRESENTATIVE_NAME = new v4_1.StringField('RepresentativeName', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[industryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INDUSTRY_TYPE = new v4_1.StringField('IndustryType', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[businessType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BUSINESS_TYPE = new v4_1.StringField('BusinessType', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SERIES = new v4_1.NumberField('Series', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[interestAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INTEREST_ACCOUNT = new v4_1.StringField('InterestAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[feeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FEE_ACCOUNT = new v4_1.StringField('FeeAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[campaignNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CAMPAIGN_NUMBER = new v4_1.NumberField('CampaignNumber', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[aliasName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ALIAS_NAME = new v4_1.StringField('AliasName', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[defaultBlanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEFAULT_BLANKET_AGREEMENT_NUMBER = new v4_1.NumberField('DefaultBlanketAgreementNumber', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[globalLocationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.GLOBAL_LOCATION_NUMBER = new v4_1.StringField('GlobalLocationNumber', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[ediSenderId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EDI_SENDER_ID = new v4_1.StringField('EDISenderID', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[ediRecipientId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EDI_RECIPIENT_ID = new v4_1.StringField('EDIRecipientID', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[relationshipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.RELATIONSHIP_CODE = new v4_1.StringField('RelationshipCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[relationshipDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.RELATIONSHIP_DATE_FROM = new v4_1.DateField('RelationshipDateFrom', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[relationshipDateTill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.RELATIONSHIP_DATE_TILL = new v4_1.DateField('RelationshipDateTill', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[unifiedFederalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.UNIFIED_FEDERAL_TAX_ID = new v4_1.StringField('UnifiedFederalTaxID', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[ownerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.OWNER_CODE = new v4_1.NumberField('OwnerCode', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.AGENT_CODE = new v4_1.StringField('AgentCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocStreet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_STREET = new v4_1.StringField('EDocStreet', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocStreetNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_STREET_NUMBER = new v4_1.StringField('EDocStreetNumber', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocBuildingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_BUILDING_NUMBER = new v4_1.NumberField('EDocBuildingNumber', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[eDocZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_ZIP_CODE = new v4_1.StringField('EDocZipCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_CITY = new v4_1.StringField('EDocCity', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_COUNTRY = new v4_1.StringField('EDocCountry', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocDistrict]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_DISTRICT = new v4_1.StringField('EDocDistrict', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocRepresentativeFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_REPRESENTATIVE_FIRST_NAME = new v4_1.StringField('EDocRepresentativeFirstName', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocRepresentativeSurname]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_REPRESENTATIVE_SURNAME = new v4_1.StringField('EDocRepresentativeSurname', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocRepresentativeCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_REPRESENTATIVE_COMPANY = new v4_1.StringField('EDocRepresentativeCompany', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocRepresentativeFiscalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_REPRESENTATIVE_FISCAL_CODE = new v4_1.StringField('EDocRepresentativeFiscalCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocRepresentativeAdditionalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_REPRESENTATIVE_ADDITIONAL_ID = new v4_1.StringField('EDocRepresentativeAdditionalId', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocPecAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_PEC_ADDRESS = new v4_1.StringField('EDocPECAddress', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[ipaCodeForPa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.IPA_CODE_FOR_PA = new v4_1.StringField('IPACodeForPA', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.UPDATE_DATE = new v4_1.DateField('UpdateDate', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.UPDATE_TIME = new v4_1.TimeField('UpdateTime', BusinessPartners, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[eCommerceMerchantId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_COMMERCE_MERCHANT_ID = new v4_1.StringField('ECommerceMerchantID', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[bpAddresses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_ADDRESSES = new v4_1.CollectionField('BPAddresses', BusinessPartners, new BpAddress_1.BpAddressField('', BusinessPartners));
    /**
     * Static representation of the [[contactEmployees]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CONTACT_EMPLOYEES = new v4_1.CollectionField('ContactEmployees', BusinessPartners, new ContactEmployee_1.ContactEmployeeField('', BusinessPartners));
    /**
     * Static representation of the [[bpAccountReceivablePaybleCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_ACCOUNT_RECEIVABLE_PAYBLE_COLLECTION = new v4_1.CollectionField('BPAccountReceivablePaybleCollection', BusinessPartners, new BpAccountReceivablePayble_1.BpAccountReceivablePaybleField('', BusinessPartners));
    /**
     * Static representation of the [[bpPaymentMethods]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_PAYMENT_METHODS = new v4_1.CollectionField('BPPaymentMethods', BusinessPartners, new BpPaymentMethod_1.BpPaymentMethodField('', BusinessPartners));
    /**
     * Static representation of the [[bpWithholdingTaxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_WITHHOLDING_TAX_COLLECTION = new v4_1.CollectionField('BPWithholdingTaxCollection', BusinessPartners, new BpWithholdingTax_1.BpWithholdingTaxField('', BusinessPartners));
    /**
     * Static representation of the [[bpPaymentDates]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_PAYMENT_DATES = new v4_1.CollectionField('BPPaymentDates', BusinessPartners, new BpPaymentDate_1.BpPaymentDateField('', BusinessPartners));
    /**
     * Static representation of the [[bpBranchAssignment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_BRANCH_ASSIGNMENT = new v4_1.CollectionField('BPBranchAssignment', BusinessPartners, new BpBranchAssignmentItem_1.BpBranchAssignmentItemField('', BusinessPartners));
    /**
     * Static representation of the [[bpBankAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_BANK_ACCOUNTS = new v4_1.CollectionField('BPBankAccounts', BusinessPartners, new BpBankAccount_1.BpBankAccountField('', BusinessPartners));
    /**
     * Static representation of the [[bpFiscalTaxIdCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_FISCAL_TAX_ID_COLLECTION = new v4_1.CollectionField('BPFiscalTaxIDCollection', BusinessPartners, new BpFiscalTaxId_1.BpFiscalTaxIdField('', BusinessPartners));
    /**
     * Static representation of the [[discountGroups]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DISCOUNT_GROUPS = new v4_1.CollectionField('DiscountGroups', BusinessPartners, new DiscountGroup_1.DiscountGroupField('', BusinessPartners));
    /**
     * Static representation of the [[bpIntrastatExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_INTRASTAT_EXTENSION = new BpIntrastatExtension_1.BpIntrastatExtensionField('BPIntrastatExtension', BusinessPartners);
    /**
     * Static representation of the [[bpBlockSendingMarketingContents]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_BLOCK_SENDING_MARKETING_CONTENTS = new v4_1.CollectionField('BPBlockSendingMarketingContents', BusinessPartners, new BpBlockSendingMarketingContent_1.BpBlockSendingMarketingContentField('', BusinessPartners));
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SALES_OPPORTUNITIES = new v4_1.OneToManyLink('SalesOpportunities', BusinessPartners, SalesOpportunities_1.SalesOpportunities);
    /**
     * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.USER_DEFAULT_GROUPS = new v4_1.OneToManyLink('UserDefaultGroups', BusinessPartners, UserDefaultGroups_1.UserDefaultGroups);
    /**
     * Static representation of the one-to-many navigation property [[specialPrices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SPECIAL_PRICES = new v4_1.OneToManyLink('SpecialPrices', BusinessPartners, SpecialPrices_1.SpecialPrices);
    /**
     * Static representation of the one-to-many navigation property [[landedCosts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.LANDED_COSTS = new v4_1.OneToManyLink('LandedCosts', BusinessPartners, LandedCosts_1.LandedCosts);
    /**
     * Static representation of the one-to-many navigation property [[workOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.WORK_ORDERS = new v4_1.OneToManyLink('WorkOrders', BusinessPartners, WorkOrders_1.WorkOrders);
    /**
     * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.WAREHOUSES = new v4_1.OneToManyLink('Warehouses', BusinessPartners, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INVENTORY_GEN_ENTRIES = new v4_1.OneToManyLink('InventoryGenEntries', BusinessPartners, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_QUOTATIONS = new v4_1.OneToManyLink('PurchaseQuotations', BusinessPartners, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[bankPages]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BANK_PAGES = new v4_1.OneToManyLink('BankPages', BusinessPartners, BankPages_1.BankPages);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ITEMS = new v4_1.OneToManyLink('Items', BusinessPartners, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[contacts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CONTACTS = new v4_1.OneToManyLink('Contacts', BusinessPartners, Contacts_1.Contacts);
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PRODUCTION_ORDERS = new v4_1.OneToManyLink('ProductionOrders', BusinessPartners, ProductionOrders_1.ProductionOrders);
    /**
     * Static representation of the one-to-many navigation property [[depreciationAreas]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEPRECIATION_AREAS = new v4_1.OneToManyLink('DepreciationAreas', BusinessPartners, DepreciationAreas_1.DepreciationAreas);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DELIVERY_NOTES = new v4_1.OneToManyLink('DeliveryNotes', BusinessPartners, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-one navigation property [[businessPartnerGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BUSINESS_PARTNER_GROUP = new v4_1.OneToOneLink('BusinessPartnerGroup', BusinessPartners, BusinessPartnerGroups_1.BusinessPartnerGroups);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', BusinessPartners, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[priceList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PRICE_LIST = new v4_1.OneToOneLink('PriceList', BusinessPartners, PriceLists_1.PriceLists);
    /**
     * Static representation of the one-to-one navigation property [[commissionGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COMMISSION_GROUP = new v4_1.OneToOneLink('CommissionGroup', BusinessPartners, CommissionGroups_1.CommissionGroups);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', BusinessPartners, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[currency2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CURRENCY_2 = new v4_1.OneToOneLink('Currency2', BusinessPartners, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', BusinessPartners, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COUNTRY_2 = new v4_1.OneToOneLink('Country2', BusinessPartners, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[vatGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VAT_GROUP_2 = new v4_1.OneToOneLink('VatGroup2', BusinessPartners, VatGroups_1.VatGroups);
    /**
     * Static representation of the one-to-one navigation property [[shippingType2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SHIPPING_TYPE_2 = new v4_1.OneToOneLink('ShippingType2', BusinessPartners, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FACTORING_INDICATOR = new v4_1.OneToOneLink('FactoringIndicator', BusinessPartners, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[creditCard]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CREDIT_CARD = new v4_1.OneToOneLink('CreditCard', BusinessPartners, CreditCards_1.CreditCards);
    /**
     * Static representation of the one-to-one navigation property [[bpPriority]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_PRIORITY = new v4_1.OneToOneLink('BPPriority', BusinessPartners, BpPriorities_1.BpPriorities);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FORMS_1099 = new v4_1.OneToOneLink('Forms1099', BusinessPartners, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.WIZARD_PAYMENT_METHOD = new v4_1.OneToOneLink('WizardPaymentMethod', BusinessPartners, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[dunningLetter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DUNNING_LETTER = new v4_1.OneToOneLink('DunningLetter', BusinessPartners, DunningLetters_1.DunningLetters);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PAYMENT_BLOCK_2 = new v4_1.OneToOneLink('PaymentBlock2', BusinessPartners, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[withholdingTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.WITHHOLDING_TAX_CODE = new v4_1.OneToOneLink('WithholdingTaxCode', BusinessPartners, WithholdingTaxCodes_1.WithholdingTaxCodes);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', BusinessPartners, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[territory2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.TERRITORY_2 = new v4_1.OneToOneLink('Territory2', BusinessPartners, Territories_1.Territories);
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROJECT = new v4_1.OneToOneLink('Project', BusinessPartners, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SALES_TAX_CODE = new v4_1.OneToOneLink('SalesTaxCode', BusinessPartners, SalesTaxCodes_1.SalesTaxCodes);
    /**
     * Static representation of the one-to-one navigation property [[dunningTerm2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DUNNING_TERM_2 = new v4_1.OneToOneLink('DunningTerm2', BusinessPartners, DunningTerms_1.DunningTerms);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.USER_LANGUAGE = new v4_1.OneToOneLink('UserLanguage', BusinessPartners, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[deductionTaxGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEDUCTION_TAX_GROUP = new v4_1.OneToOneLink('DeductionTaxGroup', BusinessPartners, DeductionTaxGroups_1.DeductionTaxGroups);
    /**
     * Static representation of the one-to-one navigation property [[bankChargesAllocationCode2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BANK_CHARGES_ALLOCATION_CODE_2 = new v4_1.OneToOneLink('BankChargesAllocationCode2', BusinessPartners, BankChargesAllocationCodes_1.BankChargesAllocationCodes);
    /**
     * Static representation of the one-to-one navigation property [[industry2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INDUSTRY_2 = new v4_1.OneToOneLink('Industry2', BusinessPartners, Industries_1.Industries);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.TAX_WEB_SITE = new v4_1.OneToOneLink('TaxWebSite', BusinessPartners, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[campaign]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CAMPAIGN = new v4_1.OneToOneLink('Campaign', BusinessPartners, Campaigns_1.Campaigns);
    /**
     * Static representation of the one-to-one navigation property [[blanketAgreement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BLANKET_AGREEMENT = new v4_1.OneToOneLink('BlanketAgreement', BusinessPartners, BlanketAgreements_1.BlanketAgreements);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.QUOTATIONS = new v4_1.OneToManyLink('Quotations', BusinessPartners, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[serviceContracts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SERVICE_CONTRACTS = new v4_1.OneToManyLink('ServiceContracts', BusinessPartners, ServiceContracts_1.ServiceContracts);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INVENTORY_GEN_EXITS = new v4_1.OneToManyLink('InventoryGenExits', BusinessPartners, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_REQUESTS = new v4_1.OneToManyLink('PurchaseRequests', BusinessPartners, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[deductionTaxHierarchies]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEDUCTION_TAX_HIERARCHIES = new v4_1.OneToManyLink('DeductionTaxHierarchies', BusinessPartners, DeductionTaxHierarchies_1.DeductionTaxHierarchies);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.RETURN_REQUEST = new v4_1.OneToManyLink('ReturnRequest', BusinessPartners, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BLANKET_AGREEMENTS = new v4_1.OneToManyLink('BlanketAgreements', BusinessPartners, BlanketAgreements_1.BlanketAgreements);
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.GL_ACCOUNT_ADVANCED_RULES = new v4_1.OneToManyLink('GLAccountAdvancedRules', BusinessPartners, GlAccountAdvancedRules_1.GlAccountAdvancedRules);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_RETURNS = new v4_1.OneToManyLink('PurchaseReturns', BusinessPartners, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INVOICES = new v4_1.OneToManyLink('Invoices', BusinessPartners, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CREDIT_NOTES = new v4_1.OneToManyLink('CreditNotes', BusinessPartners, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.STOCK_TRANSFERS = new v4_1.OneToManyLink('StockTransfers', BusinessPartners, StockTransfers_1.StockTransfers);
    /**
     * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BUSINESS_PLACES = new v4_1.OneToManyLink('BusinessPlaces', BusinessPartners, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ORDERS = new v4_1.OneToManyLink('Orders', BusinessPartners, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[partnersSetups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PARTNERS_SETUPS = new v4_1.OneToManyLink('PartnersSetups', BusinessPartners, PartnersSetups_1.PartnersSetups);
    /**
     * Static representation of the one-to-many navigation property [[inventoryTransferRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INVENTORY_TRANSFER_REQUESTS = new v4_1.OneToManyLink('InventoryTransferRequests', BusinessPartners, InventoryTransferRequests_1.InventoryTransferRequests);
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ACTIVITIES = new v4_1.OneToManyLink('Activities', BusinessPartners, Activities_1.Activities);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DOWN_PAYMENTS = new v4_1.OneToManyLink('DownPayments', BusinessPartners, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DRAFTS = new v4_1.OneToManyLink('Drafts', BusinessPartners, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.STOCK_TRANSFER_DRAFTS = new v4_1.OneToManyLink('StockTransferDrafts', BusinessPartners, StockTransferDrafts_1.StockTransferDrafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.RETURNS = new v4_1.OneToManyLink('Returns', BusinessPartners, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[materialRevaluation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MATERIAL_REVALUATION = new v4_1.OneToManyLink('MaterialRevaluation', BusinessPartners, MaterialRevaluation_1.MaterialRevaluation);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CORRECTION_INVOICE_REVERSAL = new v4_1.OneToManyLink('CorrectionInvoiceReversal', BusinessPartners, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CORRECTION_PURCHASE_INVOICE = new v4_1.OneToManyLink('CorrectionPurchaseInvoice', BusinessPartners, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CORRECTION_PURCHASE_INVOICE_REVERSAL = new v4_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', BusinessPartners, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CUSTOMER_EQUIPMENT_CARDS = new v4_1.OneToManyLink('CustomerEquipmentCards', BusinessPartners, CustomerEquipmentCards_1.CustomerEquipmentCards);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_INVOICES = new v4_1.OneToManyLink('PurchaseInvoices', BusinessPartners, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_DELIVERY_NOTES = new v4_1.OneToManyLink('PurchaseDeliveryNotes', BusinessPartners, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CORRECTION_INVOICE = new v4_1.OneToManyLink('CorrectionInvoice', BusinessPartners, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_CREDIT_NOTES = new v4_1.OneToManyLink('PurchaseCreditNotes', BusinessPartners, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SERVICE_CALLS = new v4_1.OneToManyLink('ServiceCalls', BusinessPartners, ServiceCalls_1.ServiceCalls);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_DOWN_PAYMENTS = new v4_1.OneToManyLink('PurchaseDownPayments', BusinessPartners, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EMPLOYEES_INFO = new v4_1.OneToManyLink('EmployeesInfo', BusinessPartners, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_ORDERS = new v4_1.OneToManyLink('PurchaseOrders', BusinessPartners, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[alternateCatNum]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ALTERNATE_CAT_NUM = new v4_1.OneToManyLink('AlternateCatNum', BusinessPartners, AlternateCatNum_1.AlternateCatNum);
    /**
     * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROJECT_MANAGEMENTS = new v4_1.OneToManyLink('ProjectManagements', BusinessPartners, ProjectManagements_1.ProjectManagements);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.GOODS_RETURN_REQUEST = new v4_1.OneToManyLink('GoodsReturnRequest', BusinessPartners, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[salesTaxInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SALES_TAX_INVOICES = new v4_1.OneToManyLink('SalesTaxInvoices', BusinessPartners, SalesTaxInvoices_1.SalesTaxInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseTaxInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_TAX_INVOICES = new v4_1.OneToManyLink('PurchaseTaxInvoices', BusinessPartners, PurchaseTaxInvoices_1.PurchaseTaxInvoices);
    /**
     * All fields of the BusinessPartners entity.
     */
    BusinessPartners._allFields = [
        BusinessPartners.CARD_CODE,
        BusinessPartners.CARD_NAME,
        BusinessPartners.GROUP_CODE,
        BusinessPartners.ADDRESS,
        BusinessPartners.ZIP_CODE,
        BusinessPartners.MAIL_ADDRESS,
        BusinessPartners.MAIL_ZIP_CODE,
        BusinessPartners.PHONE_1,
        BusinessPartners.PHONE_2,
        BusinessPartners.FAX,
        BusinessPartners.CONTACT_PERSON,
        BusinessPartners.NOTES,
        BusinessPartners.PAY_TERMS_GRP_CODE,
        BusinessPartners.CREDIT_LIMIT,
        BusinessPartners.MAX_COMMITMENT,
        BusinessPartners.DISCOUNT_PERCENT,
        BusinessPartners.FEDERAL_TAX_ID,
        BusinessPartners.DEDUCTION_PERCENT,
        BusinessPartners.DEDUCTION_VALID_UNTIL,
        BusinessPartners.PRICE_LIST_NUM,
        BusinessPartners.INTREST_RATE_PERCENT,
        BusinessPartners.COMMISSION_PERCENT,
        BusinessPartners.COMMISSION_GROUP_CODE,
        BusinessPartners.FREE_TEXT,
        BusinessPartners.SALES_PERSON_CODE,
        BusinessPartners.CURRENCY,
        BusinessPartners.RATE_DIFF_ACCOUNT,
        BusinessPartners.CELLULAR,
        BusinessPartners.AVARAGE_LATE,
        BusinessPartners.CITY,
        BusinessPartners.COUNTY,
        BusinessPartners.COUNTRY,
        BusinessPartners.MAIL_CITY,
        BusinessPartners.MAIL_COUNTY,
        BusinessPartners.MAIL_COUNTRY,
        BusinessPartners.EMAIL_ADDRESS,
        BusinessPartners.PICTURE,
        BusinessPartners.DEFAULT_ACCOUNT,
        BusinessPartners.DEFAULT_BRANCH,
        BusinessPartners.DEFAULT_BANK_CODE,
        BusinessPartners.ADDITIONAL_ID,
        BusinessPartners.PAGER,
        BusinessPartners.FATHER_CARD,
        BusinessPartners.CARD_FOREIGN_NAME,
        BusinessPartners.DEDUCTION_OFFICE,
        BusinessPartners.EXPORT_CODE,
        BusinessPartners.MIN_INTREST,
        BusinessPartners.CURRENT_ACCOUNT_BALANCE,
        BusinessPartners.OPEN_DELIVERY_NOTES_BALANCE,
        BusinessPartners.OPEN_ORDERS_BALANCE,
        BusinessPartners.VAT_GROUP,
        BusinessPartners.SHIPPING_TYPE,
        BusinessPartners.PASSWORD,
        BusinessPartners.INDICATOR,
        BusinessPartners.IBAN,
        BusinessPartners.CREDIT_CARD_CODE,
        BusinessPartners.CREDIT_CARD_NUM,
        BusinessPartners.CREDIT_CARD_EXPIRATION,
        BusinessPartners.DEBITOR_ACCOUNT,
        BusinessPartners.OPEN_OPPORTUNITIES,
        BusinessPartners.VALID_FROM,
        BusinessPartners.VALID_TO,
        BusinessPartners.VALID_REMARKS,
        BusinessPartners.FROZEN_FROM,
        BusinessPartners.FROZEN_TO,
        BusinessPartners.FROZEN_REMARKS,
        BusinessPartners.BLOCK,
        BusinessPartners.BILL_TO_STATE,
        BusinessPartners.EXEMPT_NUM,
        BusinessPartners.PRIORITY,
        BusinessPartners.FORM_CODE_1099,
        BusinessPartners.BOX_1099,
        BusinessPartners.PEYMENT_METHOD_CODE,
        BusinessPartners.BANK_COUNTRY,
        BusinessPartners.HOUSE_BANK,
        BusinessPartners.HOUSE_BANK_COUNTRY,
        BusinessPartners.HOUSE_BANK_ACCOUNT,
        BusinessPartners.SHIP_TO_DEFAULT,
        BusinessPartners.DUNNING_LEVEL,
        BusinessPartners.DUNNING_DATE,
        BusinessPartners.DME,
        BusinessPartners.INSTRUCTION_KEY,
        BusinessPartners.ISR_BILLER_ID,
        BusinessPartners.REFERENCE_DETAILS,
        BusinessPartners.HOUSE_BANK_BRANCH,
        BusinessPartners.OWNER_ID_NUMBER,
        BusinessPartners.PAYMENT_BLOCK_DESCRIPTION,
        BusinessPartners.TAX_EXEMPTION_LETTER_NUM,
        BusinessPartners.MAX_AMOUNT_OF_EXEMPTION,
        BusinessPartners.EXEMPTION_VALIDITY_DATE_FROM,
        BusinessPartners.EXEMPTION_VALIDITY_DATE_TO,
        BusinessPartners.LINKED_BUSINESS_PARTNER,
        BusinessPartners.LAST_MULTI_RECONCILIATION_NUM,
        BusinessPartners.CERTIFICATE_NUMBER,
        BusinessPartners.EXPIRATION_DATE,
        BusinessPartners.NATIONAL_INSURANCE_NUM,
        BusinessPartners.WT_CODE,
        BusinessPartners.BILL_TO_BUILDING_FLOOR_ROOM,
        BusinessPartners.DOWN_PAYMENT_CLEAR_ACT,
        BusinessPartners.CHANNEL_BP,
        BusinessPartners.DEFAULT_TECHNICIAN,
        BusinessPartners.BILLTO_DEFAULT,
        BusinessPartners.CUSTOMER_BILLOF_EXCHANG_DISC,
        BusinessPartners.TERRITORY,
        BusinessPartners.SHIP_TO_BUILDING_FLOOR_ROOM,
        BusinessPartners.CUSTOMER_BILLOF_EXCHANG_PRES,
        BusinessPartners.PROJECT_CODE,
        BusinessPartners.VAT_GROUP_LATIN_AMERICA,
        BusinessPartners.DUNNING_TERM,
        BusinessPartners.WEBSITE,
        BusinessPartners.OTHER_RECEIVABLE_PAYABLE,
        BusinessPartners.BILLOF_EXCHANGEON_COLLECTION,
        BusinessPartners.LANGUAGE_CODE,
        BusinessPartners.UNPAID_BILLOF_EXCHANGE,
        BusinessPartners.WITHHOLDING_TAX_DEDUCTION_GROUP,
        BusinessPartners.CLOSING_DATE_PROCEDURE_NUMBER,
        BusinessPartners.PROFESSION,
        BusinessPartners.BANK_CHARGES_ALLOCATION_CODE,
        BusinessPartners.COMPANY_REGISTRATION_NUMBER,
        BusinessPartners.VERIFICATION_NUMBER,
        BusinessPartners.DOWN_PAYMENT_INTERIM_ACCOUNT,
        BusinessPartners.PLANNING_GROUP,
        BusinessPartners.INDUSTRY,
        BusinessPartners.VAT_ID_NUM,
        BusinessPartners.DATEV_ACCOUNT,
        BusinessPartners.GTS_REG_NO,
        BusinessPartners.GTS_BANK_ACCOUNT_NO,
        BusinessPartners.GTS_BILLING_ADDR_TEL,
        BusinessPartners.E_TAX_WEB_SITE,
        BusinessPartners.HOUSE_BANK_IBAN,
        BusinessPartners.VAT_REGISTRATION_NUMBER,
        BusinessPartners.REPRESENTATIVE_NAME,
        BusinessPartners.INDUSTRY_TYPE,
        BusinessPartners.BUSINESS_TYPE,
        BusinessPartners.SERIES,
        BusinessPartners.INTEREST_ACCOUNT,
        BusinessPartners.FEE_ACCOUNT,
        BusinessPartners.CAMPAIGN_NUMBER,
        BusinessPartners.ALIAS_NAME,
        BusinessPartners.DEFAULT_BLANKET_AGREEMENT_NUMBER,
        BusinessPartners.GLOBAL_LOCATION_NUMBER,
        BusinessPartners.EDI_SENDER_ID,
        BusinessPartners.EDI_RECIPIENT_ID,
        BusinessPartners.RELATIONSHIP_CODE,
        BusinessPartners.RELATIONSHIP_DATE_FROM,
        BusinessPartners.RELATIONSHIP_DATE_TILL,
        BusinessPartners.UNIFIED_FEDERAL_TAX_ID,
        BusinessPartners.ATTACHMENT_ENTRY,
        BusinessPartners.OWNER_CODE,
        BusinessPartners.AGENT_CODE,
        BusinessPartners.E_DOC_STREET,
        BusinessPartners.E_DOC_STREET_NUMBER,
        BusinessPartners.E_DOC_BUILDING_NUMBER,
        BusinessPartners.E_DOC_ZIP_CODE,
        BusinessPartners.E_DOC_CITY,
        BusinessPartners.E_DOC_COUNTRY,
        BusinessPartners.E_DOC_DISTRICT,
        BusinessPartners.E_DOC_REPRESENTATIVE_FIRST_NAME,
        BusinessPartners.E_DOC_REPRESENTATIVE_SURNAME,
        BusinessPartners.E_DOC_REPRESENTATIVE_COMPANY,
        BusinessPartners.E_DOC_REPRESENTATIVE_FISCAL_CODE,
        BusinessPartners.E_DOC_REPRESENTATIVE_ADDITIONAL_ID,
        BusinessPartners.E_DOC_PEC_ADDRESS,
        BusinessPartners.IPA_CODE_FOR_PA,
        BusinessPartners.UPDATE_DATE,
        BusinessPartners.UPDATE_TIME,
        BusinessPartners.E_COMMERCE_MERCHANT_ID,
        BusinessPartners.BP_ADDRESSES,
        BusinessPartners.CONTACT_EMPLOYEES,
        BusinessPartners.BP_ACCOUNT_RECEIVABLE_PAYBLE_COLLECTION,
        BusinessPartners.BP_PAYMENT_METHODS,
        BusinessPartners.BP_WITHHOLDING_TAX_COLLECTION,
        BusinessPartners.BP_PAYMENT_DATES,
        BusinessPartners.BP_BRANCH_ASSIGNMENT,
        BusinessPartners.BP_BANK_ACCOUNTS,
        BusinessPartners.BP_FISCAL_TAX_ID_COLLECTION,
        BusinessPartners.DISCOUNT_GROUPS,
        BusinessPartners.BP_INTRASTAT_EXTENSION,
        BusinessPartners.BP_BLOCK_SENDING_MARKETING_CONTENTS,
        BusinessPartners.SALES_OPPORTUNITIES,
        BusinessPartners.USER_DEFAULT_GROUPS,
        BusinessPartners.SPECIAL_PRICES,
        BusinessPartners.LANDED_COSTS,
        BusinessPartners.WORK_ORDERS,
        BusinessPartners.WAREHOUSES,
        BusinessPartners.INVENTORY_GEN_ENTRIES,
        BusinessPartners.PURCHASE_QUOTATIONS,
        BusinessPartners.BANK_PAGES,
        BusinessPartners.ITEMS,
        BusinessPartners.CONTACTS,
        BusinessPartners.PRODUCTION_ORDERS,
        BusinessPartners.DEPRECIATION_AREAS,
        BusinessPartners.DELIVERY_NOTES,
        BusinessPartners.BUSINESS_PARTNER_GROUP,
        BusinessPartners.PAYMENT_TERMS_TYPE,
        BusinessPartners.PRICE_LIST,
        BusinessPartners.COMMISSION_GROUP,
        BusinessPartners.SALES_PERSON,
        BusinessPartners.CURRENCY_2,
        BusinessPartners.CHART_OF_ACCOUNT,
        BusinessPartners.COUNTRY_2,
        BusinessPartners.VAT_GROUP_2,
        BusinessPartners.SHIPPING_TYPE_2,
        BusinessPartners.FACTORING_INDICATOR,
        BusinessPartners.CREDIT_CARD,
        BusinessPartners.BP_PRIORITY,
        BusinessPartners.FORMS_1099,
        BusinessPartners.WIZARD_PAYMENT_METHOD,
        BusinessPartners.DUNNING_LETTER,
        BusinessPartners.PAYMENT_BLOCK_2,
        BusinessPartners.WITHHOLDING_TAX_CODE,
        BusinessPartners.EMPLOYEE_INFO,
        BusinessPartners.TERRITORY_2,
        BusinessPartners.PROJECT,
        BusinessPartners.SALES_TAX_CODE,
        BusinessPartners.DUNNING_TERM_2,
        BusinessPartners.USER_LANGUAGE,
        BusinessPartners.DEDUCTION_TAX_GROUP,
        BusinessPartners.BANK_CHARGES_ALLOCATION_CODE_2,
        BusinessPartners.INDUSTRY_2,
        BusinessPartners.TAX_WEB_SITE,
        BusinessPartners.CAMPAIGN,
        BusinessPartners.BLANKET_AGREEMENT,
        BusinessPartners.QUOTATIONS,
        BusinessPartners.SERVICE_CONTRACTS,
        BusinessPartners.INVENTORY_GEN_EXITS,
        BusinessPartners.PURCHASE_REQUESTS,
        BusinessPartners.DEDUCTION_TAX_HIERARCHIES,
        BusinessPartners.RETURN_REQUEST,
        BusinessPartners.BLANKET_AGREEMENTS,
        BusinessPartners.GL_ACCOUNT_ADVANCED_RULES,
        BusinessPartners.PURCHASE_RETURNS,
        BusinessPartners.INVOICES,
        BusinessPartners.CREDIT_NOTES,
        BusinessPartners.STOCK_TRANSFERS,
        BusinessPartners.BUSINESS_PLACES,
        BusinessPartners.ORDERS,
        BusinessPartners.PARTNERS_SETUPS,
        BusinessPartners.INVENTORY_TRANSFER_REQUESTS,
        BusinessPartners.ACTIVITIES,
        BusinessPartners.DOWN_PAYMENTS,
        BusinessPartners.DRAFTS,
        BusinessPartners.STOCK_TRANSFER_DRAFTS,
        BusinessPartners.RETURNS,
        BusinessPartners.MATERIAL_REVALUATION,
        BusinessPartners.CORRECTION_INVOICE_REVERSAL,
        BusinessPartners.CORRECTION_PURCHASE_INVOICE,
        BusinessPartners.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        BusinessPartners.CUSTOMER_EQUIPMENT_CARDS,
        BusinessPartners.PURCHASE_INVOICES,
        BusinessPartners.PURCHASE_DELIVERY_NOTES,
        BusinessPartners.CORRECTION_INVOICE,
        BusinessPartners.PURCHASE_CREDIT_NOTES,
        BusinessPartners.SERVICE_CALLS,
        BusinessPartners.PURCHASE_DOWN_PAYMENTS,
        BusinessPartners.EMPLOYEES_INFO,
        BusinessPartners.PURCHASE_ORDERS,
        BusinessPartners.ALTERNATE_CAT_NUM,
        BusinessPartners.PROJECT_MANAGEMENTS,
        BusinessPartners.GOODS_RETURN_REQUEST,
        BusinessPartners.SALES_TAX_INVOICES,
        BusinessPartners.PURCHASE_TAX_INVOICES
    ];
    /**
     * All fields selector.
     */
    BusinessPartners.ALL_FIELDS = new v4_1.AllFields('*', BusinessPartners);
    /**
     * All key fields of the BusinessPartners entity.
     */
    BusinessPartners._keyFields = [BusinessPartners.CARD_CODE];
    /**
     * Mapping of all key field names to the respective static field property BusinessPartners.
     */
    BusinessPartners._keys = BusinessPartners._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BusinessPartners = exports.BusinessPartners || (exports.BusinessPartners = {}));
exports.BusinessPartners = BusinessPartners;
//# sourceMappingURL=BusinessPartners.js.map