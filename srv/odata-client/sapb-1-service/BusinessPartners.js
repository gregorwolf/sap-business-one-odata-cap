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
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "BusinessPartners" of service "SAPB1".
 */
var BusinessPartners = /** @class */ (function (_super) {
    __extends(BusinessPartners, _super);
    function BusinessPartners() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BusinessPartners`.
     * @returns A builder that constructs instances of entity type `BusinessPartners`.
     */
    BusinessPartners.builder = function () {
        return core_1.EntityV4.entityBuilder(BusinessPartners);
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
        return core_1.EntityV4.customFieldSelector(fieldName, BusinessPartners);
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
     * Default url path for the according service.
     */
    BusinessPartners._defaultServicePath = '/b1s/v2/';
    return BusinessPartners;
}(core_1.EntityV4));
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
    BusinessPartners.CARD_CODE = new core_1.StringField('CardCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CARD_NAME = new core_1.StringField('CardName', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[cardType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CARD_TYPE = new core_1.EnumField('CardType', BusinessPartners);
    /**
     * Static representation of the [[groupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.GROUP_CODE = new core_1.NumberField('GroupCode', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ADDRESS = new core_1.StringField('Address', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ZIP_CODE = new core_1.StringField('ZipCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[mailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MAIL_ADDRESS = new core_1.StringField('MailAddress', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[mailZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MAIL_ZIP_CODE = new core_1.StringField('MailZipCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[phone1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PHONE_1 = new core_1.StringField('Phone1', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[phone2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PHONE_2 = new core_1.StringField('Phone2', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FAX = new core_1.StringField('Fax', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CONTACT_PERSON = new core_1.StringField('ContactPerson', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.NOTES = new core_1.StringField('Notes', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[payTermsGrpCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PAY_TERMS_GRP_CODE = new core_1.NumberField('PayTermsGrpCode', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[creditLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CREDIT_LIMIT = new core_1.NumberField('CreditLimit', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[maxCommitment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MAX_COMMITMENT = new core_1.NumberField('MaxCommitment', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DISCOUNT_PERCENT = new core_1.NumberField('DiscountPercent', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[vatLiable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VAT_LIABLE = new core_1.EnumField('VatLiable', BusinessPartners);
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FEDERAL_TAX_ID = new core_1.StringField('FederalTaxID', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[deductibleAtSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEDUCTIBLE_AT_SOURCE = new core_1.EnumField('DeductibleAtSource', BusinessPartners);
    /**
     * Static representation of the [[deductionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEDUCTION_PERCENT = new core_1.NumberField('DeductionPercent', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[deductionValidUntil]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEDUCTION_VALID_UNTIL = new core_1.DateField('DeductionValidUntil', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[priceListNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PRICE_LIST_NUM = new core_1.NumberField('PriceListNum', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[intrestRatePercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INTREST_RATE_PERCENT = new core_1.NumberField('IntrestRatePercent', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[commissionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COMMISSION_PERCENT = new core_1.NumberField('CommissionPercent', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[commissionGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COMMISSION_GROUP_CODE = new core_1.NumberField('CommissionGroupCode', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[freeText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FREE_TEXT = new core_1.StringField('FreeText', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CURRENCY = new core_1.StringField('Currency', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[rateDiffAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.RATE_DIFF_ACCOUNT = new core_1.StringField('RateDiffAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[cellular]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CELLULAR = new core_1.StringField('Cellular', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[avarageLate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.AVARAGE_LATE = new core_1.NumberField('AvarageLate', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CITY = new core_1.StringField('City', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COUNTY = new core_1.StringField('County', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COUNTRY = new core_1.StringField('Country', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[mailCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MAIL_CITY = new core_1.StringField('MailCity', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[mailCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MAIL_COUNTY = new core_1.StringField('MailCounty', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[mailCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MAIL_COUNTRY = new core_1.StringField('MailCountry', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EMAIL_ADDRESS = new core_1.StringField('EmailAddress', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[picture]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PICTURE = new core_1.StringField('Picture', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[defaultAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEFAULT_ACCOUNT = new core_1.StringField('DefaultAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[defaultBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEFAULT_BRANCH = new core_1.StringField('DefaultBranch', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[defaultBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEFAULT_BANK_CODE = new core_1.StringField('DefaultBankCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[additionalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ADDITIONAL_ID = new core_1.StringField('AdditionalID', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[pager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PAGER = new core_1.StringField('Pager', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[fatherCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FATHER_CARD = new core_1.StringField('FatherCard', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[cardForeignName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CARD_FOREIGN_NAME = new core_1.StringField('CardForeignName', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[fatherType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FATHER_TYPE = new core_1.EnumField('FatherType', BusinessPartners);
    /**
     * Static representation of the [[deductionOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEDUCTION_OFFICE = new core_1.StringField('DeductionOffice', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[exportCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EXPORT_CODE = new core_1.StringField('ExportCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[minIntrest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MIN_INTREST = new core_1.NumberField('MinIntrest', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[currentAccountBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CURRENT_ACCOUNT_BALANCE = new core_1.NumberField('CurrentAccountBalance', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[openDeliveryNotesBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.OPEN_DELIVERY_NOTES_BALANCE = new core_1.NumberField('OpenDeliveryNotesBalance', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[openOrdersBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.OPEN_ORDERS_BALANCE = new core_1.NumberField('OpenOrdersBalance', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[vatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VAT_GROUP = new core_1.StringField('VatGroup', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[shippingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SHIPPING_TYPE = new core_1.NumberField('ShippingType', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[password]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PASSWORD = new core_1.StringField('Password', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[indicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INDICATOR = new core_1.StringField('Indicator', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[iban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.IBAN = new core_1.StringField('IBAN', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[creditCardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CREDIT_CARD_CODE = new core_1.NumberField('CreditCardCode', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[creditCardNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CREDIT_CARD_NUM = new core_1.StringField('CreditCardNum', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[creditCardExpiration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CREDIT_CARD_EXPIRATION = new core_1.DateField('CreditCardExpiration', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[debitorAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEBITOR_ACCOUNT = new core_1.StringField('DebitorAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[openOpportunities]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.OPEN_OPPORTUNITIES = new core_1.NumberField('OpenOpportunities', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[valid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VALID = new core_1.EnumField('Valid', BusinessPartners);
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VALID_FROM = new core_1.DateField('ValidFrom', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VALID_TO = new core_1.DateField('ValidTo', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VALID_REMARKS = new core_1.StringField('ValidRemarks', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[frozen]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FROZEN = new core_1.EnumField('Frozen', BusinessPartners);
    /**
     * Static representation of the [[frozenFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FROZEN_FROM = new core_1.DateField('FrozenFrom', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[frozenTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FROZEN_TO = new core_1.DateField('FrozenTo', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[frozenRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FROZEN_REMARKS = new core_1.StringField('FrozenRemarks', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[block]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BLOCK = new core_1.StringField('Block', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[billToState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BILL_TO_STATE = new core_1.StringField('BillToState', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[exemptNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EXEMPT_NUM = new core_1.StringField('ExemptNum', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[priority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PRIORITY = new core_1.NumberField('Priority', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[formCode1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FORM_CODE_1099 = new core_1.NumberField('FormCode1099', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[box1099]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BOX_1099 = new core_1.StringField('Box1099', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[peymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PEYMENT_METHOD_CODE = new core_1.StringField('PeymentMethodCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[backOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BACK_ORDER = new core_1.EnumField('BackOrder', BusinessPartners);
    /**
     * Static representation of the [[partialDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PARTIAL_DELIVERY = new core_1.EnumField('PartialDelivery', BusinessPartners);
    /**
     * Static representation of the [[blockDunning]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BLOCK_DUNNING = new core_1.EnumField('BlockDunning', BusinessPartners);
    /**
     * Static representation of the [[bankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BANK_COUNTRY = new core_1.StringField('BankCountry', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[houseBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.HOUSE_BANK = new core_1.StringField('HouseBank', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[houseBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.HOUSE_BANK_COUNTRY = new core_1.StringField('HouseBankCountry', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[houseBankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.HOUSE_BANK_ACCOUNT = new core_1.StringField('HouseBankAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[shipToDefault]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SHIP_TO_DEFAULT = new core_1.StringField('ShipToDefault', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[dunningLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DUNNING_LEVEL = new core_1.NumberField('DunningLevel', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[dunningDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DUNNING_DATE = new core_1.DateField('DunningDate', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[collectionAuthorization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COLLECTION_AUTHORIZATION = new core_1.EnumField('CollectionAuthorization', BusinessPartners);
    /**
     * Static representation of the [[dme]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DME = new core_1.StringField('DME', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[instructionKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INSTRUCTION_KEY = new core_1.StringField('InstructionKey', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[singlePayment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SINGLE_PAYMENT = new core_1.EnumField('SinglePayment', BusinessPartners);
    /**
     * Static representation of the [[isrBillerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ISR_BILLER_ID = new core_1.StringField('ISRBillerID', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PAYMENT_BLOCK = new core_1.EnumField('PaymentBlock', BusinessPartners);
    /**
     * Static representation of the [[referenceDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.REFERENCE_DETAILS = new core_1.StringField('ReferenceDetails', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[houseBankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.HOUSE_BANK_BRANCH = new core_1.StringField('HouseBankBranch', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[ownerIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.OWNER_ID_NUMBER = new core_1.StringField('OwnerIDNumber', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PAYMENT_BLOCK_DESCRIPTION = new core_1.NumberField('PaymentBlockDescription', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[taxExemptionLetterNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.TAX_EXEMPTION_LETTER_NUM = new core_1.StringField('TaxExemptionLetterNum', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[maxAmountOfExemption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MAX_AMOUNT_OF_EXEMPTION = new core_1.NumberField('MaxAmountOfExemption', BusinessPartners, 'Edm.Double');
    /**
     * Static representation of the [[exemptionValidityDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EXEMPTION_VALIDITY_DATE_FROM = new core_1.DateField('ExemptionValidityDateFrom', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[exemptionValidityDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EXEMPTION_VALIDITY_DATE_TO = new core_1.DateField('ExemptionValidityDateTo', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[linkedBusinessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.LINKED_BUSINESS_PARTNER = new core_1.StringField('LinkedBusinessPartner', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[lastMultiReconciliationNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.LAST_MULTI_RECONCILIATION_NUM = new core_1.NumberField('LastMultiReconciliationNum', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[deferredTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEFERRED_TAX = new core_1.EnumField('DeferredTax', BusinessPartners);
    /**
     * Static representation of the [[equalization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EQUALIZATION = new core_1.EnumField('Equalization', BusinessPartners);
    /**
     * Static representation of the [[subjectToWithholdingTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SUBJECT_TO_WITHHOLDING_TAX = new core_1.EnumField('SubjectToWithholdingTax', BusinessPartners);
    /**
     * Static representation of the [[certificateNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CERTIFICATE_NUMBER = new core_1.StringField('CertificateNumber', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[expirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EXPIRATION_DATE = new core_1.DateField('ExpirationDate', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[nationalInsuranceNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.NATIONAL_INSURANCE_NUM = new core_1.StringField('NationalInsuranceNum', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[accrualCriteria]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ACCRUAL_CRITERIA = new core_1.EnumField('AccrualCriteria', BusinessPartners);
    /**
     * Static representation of the [[wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.WT_CODE = new core_1.StringField('WTCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[billToBuildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BILL_TO_BUILDING_FLOOR_ROOM = new core_1.StringField('BillToBuildingFloorRoom', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[downPaymentClearAct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DOWN_PAYMENT_CLEAR_ACT = new core_1.StringField('DownPaymentClearAct', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[channelBp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CHANNEL_BP = new core_1.StringField('ChannelBP', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[defaultTechnician]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEFAULT_TECHNICIAN = new core_1.NumberField('DefaultTechnician', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[billtoDefault]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BILLTO_DEFAULT = new core_1.StringField('BilltoDefault', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[customerBillofExchangDisc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CUSTOMER_BILLOF_EXCHANG_DISC = new core_1.StringField('CustomerBillofExchangDisc', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[territory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.TERRITORY = new core_1.NumberField('Territory', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[shipToBuildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SHIP_TO_BUILDING_FLOOR_ROOM = new core_1.StringField('ShipToBuildingFloorRoom', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[customerBillofExchangPres]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CUSTOMER_BILLOF_EXCHANG_PRES = new core_1.StringField('CustomerBillofExchangPres', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROJECT_CODE = new core_1.StringField('ProjectCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[vatGroupLatinAmerica]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VAT_GROUP_LATIN_AMERICA = new core_1.StringField('VatGroupLatinAmerica', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[dunningTerm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DUNNING_TERM = new core_1.StringField('DunningTerm', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[website]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.WEBSITE = new core_1.StringField('Website', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[otherReceivablePayable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.OTHER_RECEIVABLE_PAYABLE = new core_1.StringField('OtherReceivablePayable', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[billofExchangeonCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BILLOF_EXCHANGEON_COLLECTION = new core_1.StringField('BillofExchangeonCollection', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[companyPrivate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COMPANY_PRIVATE = new core_1.EnumField('CompanyPrivate', BusinessPartners);
    /**
     * Static representation of the [[languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.LANGUAGE_CODE = new core_1.NumberField('LanguageCode', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[unpaidBillofExchange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.UNPAID_BILLOF_EXCHANGE = new core_1.StringField('UnpaidBillofExchange', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[withholdingTaxDeductionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.WITHHOLDING_TAX_DEDUCTION_GROUP = new core_1.NumberField('WithholdingTaxDeductionGroup', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[closingDateProcedureNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CLOSING_DATE_PROCEDURE_NUMBER = new core_1.NumberField('ClosingDateProcedureNumber', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[profession]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROFESSION = new core_1.StringField('Profession', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[bankChargesAllocationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BANK_CHARGES_ALLOCATION_CODE = new core_1.StringField('BankChargesAllocationCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[taxRoundingRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.TAX_ROUNDING_RULE = new core_1.EnumField('TaxRoundingRule', BusinessPartners);
    /**
     * Static representation of the [[properties1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_1 = new core_1.EnumField('Properties1', BusinessPartners);
    /**
     * Static representation of the [[properties2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_2 = new core_1.EnumField('Properties2', BusinessPartners);
    /**
     * Static representation of the [[properties3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_3 = new core_1.EnumField('Properties3', BusinessPartners);
    /**
     * Static representation of the [[properties4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_4 = new core_1.EnumField('Properties4', BusinessPartners);
    /**
     * Static representation of the [[properties5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_5 = new core_1.EnumField('Properties5', BusinessPartners);
    /**
     * Static representation of the [[properties6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_6 = new core_1.EnumField('Properties6', BusinessPartners);
    /**
     * Static representation of the [[properties7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_7 = new core_1.EnumField('Properties7', BusinessPartners);
    /**
     * Static representation of the [[properties8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_8 = new core_1.EnumField('Properties8', BusinessPartners);
    /**
     * Static representation of the [[properties9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_9 = new core_1.EnumField('Properties9', BusinessPartners);
    /**
     * Static representation of the [[properties10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_10 = new core_1.EnumField('Properties10', BusinessPartners);
    /**
     * Static representation of the [[properties11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_11 = new core_1.EnumField('Properties11', BusinessPartners);
    /**
     * Static representation of the [[properties12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_12 = new core_1.EnumField('Properties12', BusinessPartners);
    /**
     * Static representation of the [[properties13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_13 = new core_1.EnumField('Properties13', BusinessPartners);
    /**
     * Static representation of the [[properties14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_14 = new core_1.EnumField('Properties14', BusinessPartners);
    /**
     * Static representation of the [[properties15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_15 = new core_1.EnumField('Properties15', BusinessPartners);
    /**
     * Static representation of the [[properties16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_16 = new core_1.EnumField('Properties16', BusinessPartners);
    /**
     * Static representation of the [[properties17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_17 = new core_1.EnumField('Properties17', BusinessPartners);
    /**
     * Static representation of the [[properties18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_18 = new core_1.EnumField('Properties18', BusinessPartners);
    /**
     * Static representation of the [[properties19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_19 = new core_1.EnumField('Properties19', BusinessPartners);
    /**
     * Static representation of the [[properties20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_20 = new core_1.EnumField('Properties20', BusinessPartners);
    /**
     * Static representation of the [[properties21]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_21 = new core_1.EnumField('Properties21', BusinessPartners);
    /**
     * Static representation of the [[properties22]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_22 = new core_1.EnumField('Properties22', BusinessPartners);
    /**
     * Static representation of the [[properties23]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_23 = new core_1.EnumField('Properties23', BusinessPartners);
    /**
     * Static representation of the [[properties24]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_24 = new core_1.EnumField('Properties24', BusinessPartners);
    /**
     * Static representation of the [[properties25]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_25 = new core_1.EnumField('Properties25', BusinessPartners);
    /**
     * Static representation of the [[properties26]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_26 = new core_1.EnumField('Properties26', BusinessPartners);
    /**
     * Static representation of the [[properties27]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_27 = new core_1.EnumField('Properties27', BusinessPartners);
    /**
     * Static representation of the [[properties28]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_28 = new core_1.EnumField('Properties28', BusinessPartners);
    /**
     * Static representation of the [[properties29]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_29 = new core_1.EnumField('Properties29', BusinessPartners);
    /**
     * Static representation of the [[properties30]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_30 = new core_1.EnumField('Properties30', BusinessPartners);
    /**
     * Static representation of the [[properties31]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_31 = new core_1.EnumField('Properties31', BusinessPartners);
    /**
     * Static representation of the [[properties32]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_32 = new core_1.EnumField('Properties32', BusinessPartners);
    /**
     * Static representation of the [[properties33]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_33 = new core_1.EnumField('Properties33', BusinessPartners);
    /**
     * Static representation of the [[properties34]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_34 = new core_1.EnumField('Properties34', BusinessPartners);
    /**
     * Static representation of the [[properties35]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_35 = new core_1.EnumField('Properties35', BusinessPartners);
    /**
     * Static representation of the [[properties36]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_36 = new core_1.EnumField('Properties36', BusinessPartners);
    /**
     * Static representation of the [[properties37]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_37 = new core_1.EnumField('Properties37', BusinessPartners);
    /**
     * Static representation of the [[properties38]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_38 = new core_1.EnumField('Properties38', BusinessPartners);
    /**
     * Static representation of the [[properties39]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_39 = new core_1.EnumField('Properties39', BusinessPartners);
    /**
     * Static representation of the [[properties40]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_40 = new core_1.EnumField('Properties40', BusinessPartners);
    /**
     * Static representation of the [[properties41]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_41 = new core_1.EnumField('Properties41', BusinessPartners);
    /**
     * Static representation of the [[properties42]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_42 = new core_1.EnumField('Properties42', BusinessPartners);
    /**
     * Static representation of the [[properties43]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_43 = new core_1.EnumField('Properties43', BusinessPartners);
    /**
     * Static representation of the [[properties44]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_44 = new core_1.EnumField('Properties44', BusinessPartners);
    /**
     * Static representation of the [[properties45]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_45 = new core_1.EnumField('Properties45', BusinessPartners);
    /**
     * Static representation of the [[properties46]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_46 = new core_1.EnumField('Properties46', BusinessPartners);
    /**
     * Static representation of the [[properties47]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_47 = new core_1.EnumField('Properties47', BusinessPartners);
    /**
     * Static representation of the [[properties48]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_48 = new core_1.EnumField('Properties48', BusinessPartners);
    /**
     * Static representation of the [[properties49]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_49 = new core_1.EnumField('Properties49', BusinessPartners);
    /**
     * Static representation of the [[properties50]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_50 = new core_1.EnumField('Properties50', BusinessPartners);
    /**
     * Static representation of the [[properties51]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_51 = new core_1.EnumField('Properties51', BusinessPartners);
    /**
     * Static representation of the [[properties52]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_52 = new core_1.EnumField('Properties52', BusinessPartners);
    /**
     * Static representation of the [[properties53]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_53 = new core_1.EnumField('Properties53', BusinessPartners);
    /**
     * Static representation of the [[properties54]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_54 = new core_1.EnumField('Properties54', BusinessPartners);
    /**
     * Static representation of the [[properties55]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_55 = new core_1.EnumField('Properties55', BusinessPartners);
    /**
     * Static representation of the [[properties56]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_56 = new core_1.EnumField('Properties56', BusinessPartners);
    /**
     * Static representation of the [[properties57]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_57 = new core_1.EnumField('Properties57', BusinessPartners);
    /**
     * Static representation of the [[properties58]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_58 = new core_1.EnumField('Properties58', BusinessPartners);
    /**
     * Static representation of the [[properties59]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_59 = new core_1.EnumField('Properties59', BusinessPartners);
    /**
     * Static representation of the [[properties60]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_60 = new core_1.EnumField('Properties60', BusinessPartners);
    /**
     * Static representation of the [[properties61]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_61 = new core_1.EnumField('Properties61', BusinessPartners);
    /**
     * Static representation of the [[properties62]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_62 = new core_1.EnumField('Properties62', BusinessPartners);
    /**
     * Static representation of the [[properties63]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_63 = new core_1.EnumField('Properties63', BusinessPartners);
    /**
     * Static representation of the [[properties64]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROPERTIES_64 = new core_1.EnumField('Properties64', BusinessPartners);
    /**
     * Static representation of the [[companyRegistrationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COMPANY_REGISTRATION_NUMBER = new core_1.StringField('CompanyRegistrationNumber', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[verificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VERIFICATION_NUMBER = new core_1.StringField('VerificationNumber', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[discountBaseObject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DISCOUNT_BASE_OBJECT = new core_1.EnumField('DiscountBaseObject', BusinessPartners);
    /**
     * Static representation of the [[discountRelations]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DISCOUNT_RELATIONS = new core_1.EnumField('DiscountRelations', BusinessPartners);
    /**
     * Static representation of the [[typeReport]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.TYPE_REPORT = new core_1.EnumField('TypeReport', BusinessPartners);
    /**
     * Static representation of the [[thresholdOverlook]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.THRESHOLD_OVERLOOK = new core_1.EnumField('ThresholdOverlook', BusinessPartners);
    /**
     * Static representation of the [[surchargeOverlook]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SURCHARGE_OVERLOOK = new core_1.EnumField('SurchargeOverlook', BusinessPartners);
    /**
     * Static representation of the [[downPaymentInterimAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DOWN_PAYMENT_INTERIM_ACCOUNT = new core_1.StringField('DownPaymentInterimAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[operationCode347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.OPERATION_CODE_347 = new core_1.EnumField('OperationCode347', BusinessPartners);
    /**
     * Static representation of the [[insuranceOperation347]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INSURANCE_OPERATION_347 = new core_1.EnumField('InsuranceOperation347', BusinessPartners);
    /**
     * Static representation of the [[hierarchicalDeduction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.HIERARCHICAL_DEDUCTION = new core_1.EnumField('HierarchicalDeduction', BusinessPartners);
    /**
     * Static representation of the [[shaamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SHAAM_GROUP = new core_1.EnumField('ShaamGroup', BusinessPartners);
    /**
     * Static representation of the [[withholdingTaxCertified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.WITHHOLDING_TAX_CERTIFIED = new core_1.EnumField('WithholdingTaxCertified', BusinessPartners);
    /**
     * Static representation of the [[bookkeepingCertified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BOOKKEEPING_CERTIFIED = new core_1.EnumField('BookkeepingCertified', BusinessPartners);
    /**
     * Static representation of the [[planningGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PLANNING_GROUP = new core_1.StringField('PlanningGroup', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[affiliate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.AFFILIATE = new core_1.EnumField('Affiliate', BusinessPartners);
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INDUSTRY = new core_1.NumberField('Industry', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[vatIdNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VAT_ID_NUM = new core_1.StringField('VatIDNum', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[datevAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DATEV_ACCOUNT = new core_1.StringField('DatevAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[datevFirstDataEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DATEV_FIRST_DATA_ENTRY = new core_1.EnumField('DatevFirstDataEntry', BusinessPartners);
    /**
     * Static representation of the [[gtsRegNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.GTS_REG_NO = new core_1.StringField('GTSRegNo', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[gtsBankAccountNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.GTS_BANK_ACCOUNT_NO = new core_1.StringField('GTSBankAccountNo', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[gtsBillingAddrTel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.GTS_BILLING_ADDR_TEL = new core_1.StringField('GTSBillingAddrTel', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eTaxWebSite]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_TAX_WEB_SITE = new core_1.NumberField('ETaxWebSite', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[houseBankIban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.HOUSE_BANK_IBAN = new core_1.StringField('HouseBankIBAN', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[vatRegistrationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VAT_REGISTRATION_NUMBER = new core_1.StringField('VATRegistrationNumber', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[representativeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.REPRESENTATIVE_NAME = new core_1.StringField('RepresentativeName', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[industryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INDUSTRY_TYPE = new core_1.StringField('IndustryType', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[businessType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BUSINESS_TYPE = new core_1.StringField('BusinessType', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SERIES = new core_1.NumberField('Series', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[automaticPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.AUTOMATIC_POSTING = new core_1.EnumField('AutomaticPosting', BusinessPartners);
    /**
     * Static representation of the [[interestAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INTEREST_ACCOUNT = new core_1.StringField('InterestAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[feeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FEE_ACCOUNT = new core_1.StringField('FeeAccount', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[campaignNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CAMPAIGN_NUMBER = new core_1.NumberField('CampaignNumber', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[aliasName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ALIAS_NAME = new core_1.StringField('AliasName', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[defaultBlanketAgreementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEFAULT_BLANKET_AGREEMENT_NUMBER = new core_1.NumberField('DefaultBlanketAgreementNumber', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[effectiveDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EFFECTIVE_DISCOUNT = new core_1.EnumField('EffectiveDiscount', BusinessPartners);
    /**
     * Static representation of the [[noDiscounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.NO_DISCOUNTS = new core_1.EnumField('NoDiscounts', BusinessPartners);
    /**
     * Static representation of the [[effectivePrice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EFFECTIVE_PRICE = new core_1.EnumField('EffectivePrice', BusinessPartners);
    /**
     * Static representation of the [[globalLocationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.GLOBAL_LOCATION_NUMBER = new core_1.StringField('GlobalLocationNumber', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[ediSenderId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EDI_SENDER_ID = new core_1.StringField('EDISenderID', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[ediRecipientId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EDI_RECIPIENT_ID = new core_1.StringField('EDIRecipientID', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[residenNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.RESIDEN_NUMBER = new core_1.EnumField('ResidenNumber', BusinessPartners);
    /**
     * Static representation of the [[relationshipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.RELATIONSHIP_CODE = new core_1.StringField('RelationshipCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[relationshipDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.RELATIONSHIP_DATE_FROM = new core_1.DateField('RelationshipDateFrom', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[relationshipDateTill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.RELATIONSHIP_DATE_TILL = new core_1.DateField('RelationshipDateTill', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[unifiedFederalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.UNIFIED_FEDERAL_TAX_ID = new core_1.StringField('UnifiedFederalTaxID', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[typeOfOperation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.TYPE_OF_OPERATION = new core_1.EnumField('TypeOfOperation', BusinessPartners);
    /**
     * Static representation of the [[endorsableChecksFromBp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ENDORSABLE_CHECKS_FROM_BP = new core_1.EnumField('EndorsableChecksFromBP', BusinessPartners);
    /**
     * Static representation of the [[acceptsEndorsedChecks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ACCEPTS_ENDORSED_CHECKS = new core_1.EnumField('AcceptsEndorsedChecks', BusinessPartners);
    /**
     * Static representation of the [[ownerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.OWNER_CODE = new core_1.NumberField('OwnerCode', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[blockSendingMarketingContent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BLOCK_SENDING_MARKETING_CONTENT = new core_1.EnumField('BlockSendingMarketingContent', BusinessPartners);
    /**
     * Static representation of the [[agentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.AGENT_CODE = new core_1.StringField('AgentCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[priceMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PRICE_MODE = new core_1.EnumField('PriceMode', BusinessPartners);
    /**
     * Static representation of the [[eDocGenerationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_GENERATION_TYPE = new core_1.EnumField('EDocGenerationType', BusinessPartners);
    /**
     * Static representation of the [[eDocStreet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_STREET = new core_1.StringField('EDocStreet', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocStreetNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_STREET_NUMBER = new core_1.StringField('EDocStreetNumber', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocBuildingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_BUILDING_NUMBER = new core_1.NumberField('EDocBuildingNumber', BusinessPartners, 'Edm.Int32');
    /**
     * Static representation of the [[eDocZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_ZIP_CODE = new core_1.StringField('EDocZipCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_CITY = new core_1.StringField('EDocCity', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_COUNTRY = new core_1.StringField('EDocCountry', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocDistrict]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_DISTRICT = new core_1.StringField('EDocDistrict', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocRepresentativeFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_REPRESENTATIVE_FIRST_NAME = new core_1.StringField('EDocRepresentativeFirstName', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocRepresentativeSurname]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_REPRESENTATIVE_SURNAME = new core_1.StringField('EDocRepresentativeSurname', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocRepresentativeCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_REPRESENTATIVE_COMPANY = new core_1.StringField('EDocRepresentativeCompany', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocRepresentativeFiscalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_REPRESENTATIVE_FISCAL_CODE = new core_1.StringField('EDocRepresentativeFiscalCode', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocRepresentativeAdditionalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_REPRESENTATIVE_ADDITIONAL_ID = new core_1.StringField('EDocRepresentativeAdditionalId', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[eDocPecAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_DOC_PEC_ADDRESS = new core_1.StringField('EDocPECAddress', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[ipaCodeForPa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.IPA_CODE_FOR_PA = new core_1.StringField('IPACodeForPA', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.UPDATE_DATE = new core_1.DateField('UpdateDate', BusinessPartners, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.UPDATE_TIME = new core_1.TimeField('UpdateTime', BusinessPartners, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[exemptionMaxAmountValidationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EXEMPTION_MAX_AMOUNT_VALIDATION_TYPE = new core_1.EnumField('ExemptionMaxAmountValidationType', BusinessPartners);
    /**
     * Static representation of the [[eCommerceMerchantId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.E_COMMERCE_MERCHANT_ID = new core_1.StringField('ECommerceMerchantID', BusinessPartners, 'Edm.String');
    /**
     * Static representation of the [[useBillToAddrToDetermineTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.USE_BILL_TO_ADDR_TO_DETERMINE_TAX = new core_1.EnumField('UseBillToAddrToDetermineTax', BusinessPartners);
    /**
     * Static representation of the [[bpAddresses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_ADDRESSES = new core_1.CollectionField('BPAddresses', BusinessPartners, BpAddress_1.BpAddress);
    /**
     * Static representation of the [[contactEmployees]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CONTACT_EMPLOYEES = new core_1.CollectionField('ContactEmployees', BusinessPartners, ContactEmployee_1.ContactEmployee);
    /**
     * Static representation of the [[bpAccountReceivablePaybleCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_ACCOUNT_RECEIVABLE_PAYBLE_COLLECTION = new core_1.CollectionField('BPAccountReceivablePaybleCollection', BusinessPartners, BpAccountReceivablePayble_1.BpAccountReceivablePayble);
    /**
     * Static representation of the [[bpPaymentMethods]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_PAYMENT_METHODS = new core_1.CollectionField('BPPaymentMethods', BusinessPartners, BpPaymentMethod_1.BpPaymentMethod);
    /**
     * Static representation of the [[bpWithholdingTaxCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_WITHHOLDING_TAX_COLLECTION = new core_1.CollectionField('BPWithholdingTaxCollection', BusinessPartners, BpWithholdingTax_1.BpWithholdingTax);
    /**
     * Static representation of the [[bpPaymentDates]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_PAYMENT_DATES = new core_1.CollectionField('BPPaymentDates', BusinessPartners, BpPaymentDate_1.BpPaymentDate);
    /**
     * Static representation of the [[bpBranchAssignment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_BRANCH_ASSIGNMENT = new core_1.CollectionField('BPBranchAssignment', BusinessPartners, BpBranchAssignmentItem_1.BpBranchAssignmentItem);
    /**
     * Static representation of the [[bpBankAccounts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_BANK_ACCOUNTS = new core_1.CollectionField('BPBankAccounts', BusinessPartners, BpBankAccount_1.BpBankAccount);
    /**
     * Static representation of the [[bpFiscalTaxIdCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_FISCAL_TAX_ID_COLLECTION = new core_1.CollectionField('BPFiscalTaxIDCollection', BusinessPartners, BpFiscalTaxId_1.BpFiscalTaxId);
    /**
     * Static representation of the [[discountGroups]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DISCOUNT_GROUPS = new core_1.CollectionField('DiscountGroups', BusinessPartners, DiscountGroup_1.DiscountGroup);
    /**
     * Static representation of the [[bpIntrastatExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_INTRASTAT_EXTENSION = new BpIntrastatExtension_1.BpIntrastatExtensionField('BPIntrastatExtension', BusinessPartners);
    /**
     * Static representation of the [[bpBlockSendingMarketingContents]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_BLOCK_SENDING_MARKETING_CONTENTS = new core_1.CollectionField('BPBlockSendingMarketingContents', BusinessPartners, BpBlockSendingMarketingContent_1.BpBlockSendingMarketingContent);
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SALES_OPPORTUNITIES = new core_1.OneToManyLink('SalesOpportunities', BusinessPartners, SalesOpportunities_1.SalesOpportunities);
    /**
     * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.USER_DEFAULT_GROUPS = new core_1.OneToManyLink('UserDefaultGroups', BusinessPartners, UserDefaultGroups_1.UserDefaultGroups);
    /**
     * Static representation of the one-to-many navigation property [[specialPrices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SPECIAL_PRICES = new core_1.OneToManyLink('SpecialPrices', BusinessPartners, SpecialPrices_1.SpecialPrices);
    /**
     * Static representation of the one-to-many navigation property [[landedCosts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.LANDED_COSTS = new core_1.OneToManyLink('LandedCosts', BusinessPartners, LandedCosts_1.LandedCosts);
    /**
     * Static representation of the one-to-many navigation property [[workOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.WORK_ORDERS = new core_1.OneToManyLink('WorkOrders', BusinessPartners, WorkOrders_1.WorkOrders);
    /**
     * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.WAREHOUSES = new core_1.OneToManyLink('Warehouses', BusinessPartners, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', BusinessPartners, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_QUOTATIONS = new core_1.OneToManyLink('PurchaseQuotations', BusinessPartners, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[bankPages]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BANK_PAGES = new core_1.OneToManyLink('BankPages', BusinessPartners, BankPages_1.BankPages);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ITEMS = new core_1.OneToManyLink('Items', BusinessPartners, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[contacts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CONTACTS = new core_1.OneToManyLink('Contacts', BusinessPartners, Contacts_1.Contacts);
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PRODUCTION_ORDERS = new core_1.OneToManyLink('ProductionOrders', BusinessPartners, ProductionOrders_1.ProductionOrders);
    /**
     * Static representation of the one-to-many navigation property [[depreciationAreas]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEPRECIATION_AREAS = new core_1.OneToManyLink('DepreciationAreas', BusinessPartners, DepreciationAreas_1.DepreciationAreas);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', BusinessPartners, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-one navigation property [[businessPartnerGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BUSINESS_PARTNER_GROUP = new core_1.OneToOneLink('BusinessPartnerGroup', BusinessPartners, BusinessPartnerGroups_1.BusinessPartnerGroups);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', BusinessPartners, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[priceList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PRICE_LIST = new core_1.OneToOneLink('PriceList', BusinessPartners, PriceLists_1.PriceLists);
    /**
     * Static representation of the one-to-one navigation property [[commissionGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COMMISSION_GROUP = new core_1.OneToOneLink('CommissionGroup', BusinessPartners, CommissionGroups_1.CommissionGroups);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', BusinessPartners, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[currency2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CURRENCY_2 = new core_1.OneToOneLink('Currency2', BusinessPartners, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', BusinessPartners, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.COUNTRY_2 = new core_1.OneToOneLink('Country2', BusinessPartners, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[vatGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.VAT_GROUP_2 = new core_1.OneToOneLink('VatGroup2', BusinessPartners, VatGroups_1.VatGroups);
    /**
     * Static representation of the one-to-one navigation property [[shippingType2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SHIPPING_TYPE_2 = new core_1.OneToOneLink('ShippingType2', BusinessPartners, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[factoringIndicator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FACTORING_INDICATOR = new core_1.OneToOneLink('FactoringIndicator', BusinessPartners, FactoringIndicators_1.FactoringIndicators);
    /**
     * Static representation of the one-to-one navigation property [[creditCard]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CREDIT_CARD = new core_1.OneToOneLink('CreditCard', BusinessPartners, CreditCards_1.CreditCards);
    /**
     * Static representation of the one-to-one navigation property [[bpPriority]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BP_PRIORITY = new core_1.OneToOneLink('BPPriority', BusinessPartners, BpPriorities_1.BpPriorities);
    /**
     * Static representation of the one-to-one navigation property [[forms1099]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.FORMS_1099 = new core_1.OneToOneLink('Forms1099', BusinessPartners, Forms1099_1.Forms1099);
    /**
     * Static representation of the one-to-one navigation property [[wizardPaymentMethod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.WIZARD_PAYMENT_METHOD = new core_1.OneToOneLink('WizardPaymentMethod', BusinessPartners, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-one navigation property [[dunningLetter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DUNNING_LETTER = new core_1.OneToOneLink('DunningLetter', BusinessPartners, DunningLetters_1.DunningLetters);
    /**
     * Static representation of the one-to-one navigation property [[paymentBlock2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PAYMENT_BLOCK_2 = new core_1.OneToOneLink('PaymentBlock2', BusinessPartners, PaymentBlocks_1.PaymentBlocks);
    /**
     * Static representation of the one-to-one navigation property [[withholdingTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.WITHHOLDING_TAX_CODE = new core_1.OneToOneLink('WithholdingTaxCode', BusinessPartners, WithholdingTaxCodes_1.WithholdingTaxCodes);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', BusinessPartners, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[territory2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.TERRITORY_2 = new core_1.OneToOneLink('Territory2', BusinessPartners, Territories_1.Territories);
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROJECT = new core_1.OneToOneLink('Project', BusinessPartners, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SALES_TAX_CODE = new core_1.OneToOneLink('SalesTaxCode', BusinessPartners, SalesTaxCodes_1.SalesTaxCodes);
    /**
     * Static representation of the one-to-one navigation property [[dunningTerm2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DUNNING_TERM_2 = new core_1.OneToOneLink('DunningTerm2', BusinessPartners, DunningTerms_1.DunningTerms);
    /**
     * Static representation of the one-to-one navigation property [[userLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.USER_LANGUAGE = new core_1.OneToOneLink('UserLanguage', BusinessPartners, UserLanguages_1.UserLanguages);
    /**
     * Static representation of the one-to-one navigation property [[deductionTaxGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEDUCTION_TAX_GROUP = new core_1.OneToOneLink('DeductionTaxGroup', BusinessPartners, DeductionTaxGroups_1.DeductionTaxGroups);
    /**
     * Static representation of the one-to-one navigation property [[bankChargesAllocationCode2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BANK_CHARGES_ALLOCATION_CODE_2 = new core_1.OneToOneLink('BankChargesAllocationCode2', BusinessPartners, BankChargesAllocationCodes_1.BankChargesAllocationCodes);
    /**
     * Static representation of the one-to-one navigation property [[industry2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INDUSTRY_2 = new core_1.OneToOneLink('Industry2', BusinessPartners, Industries_1.Industries);
    /**
     * Static representation of the one-to-one navigation property [[taxWebSite]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.TAX_WEB_SITE = new core_1.OneToOneLink('TaxWebSite', BusinessPartners, TaxWebSites_1.TaxWebSites);
    /**
     * Static representation of the one-to-one navigation property [[campaign]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CAMPAIGN = new core_1.OneToOneLink('Campaign', BusinessPartners, Campaigns_1.Campaigns);
    /**
     * Static representation of the one-to-one navigation property [[blanketAgreement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BLANKET_AGREEMENT = new core_1.OneToOneLink('BlanketAgreement', BusinessPartners, BlanketAgreements_1.BlanketAgreements);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.QUOTATIONS = new core_1.OneToManyLink('Quotations', BusinessPartners, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[serviceContracts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SERVICE_CONTRACTS = new core_1.OneToManyLink('ServiceContracts', BusinessPartners, ServiceContracts_1.ServiceContracts);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', BusinessPartners, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_REQUESTS = new core_1.OneToManyLink('PurchaseRequests', BusinessPartners, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[deductionTaxHierarchies]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DEDUCTION_TAX_HIERARCHIES = new core_1.OneToManyLink('DeductionTaxHierarchies', BusinessPartners, DeductionTaxHierarchies_1.DeductionTaxHierarchies);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', BusinessPartners, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BLANKET_AGREEMENTS = new core_1.OneToManyLink('BlanketAgreements', BusinessPartners, BlanketAgreements_1.BlanketAgreements);
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.GL_ACCOUNT_ADVANCED_RULES = new core_1.OneToManyLink('GLAccountAdvancedRules', BusinessPartners, GlAccountAdvancedRules_1.GlAccountAdvancedRules);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', BusinessPartners, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INVOICES = new core_1.OneToManyLink('Invoices', BusinessPartners, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', BusinessPartners, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.STOCK_TRANSFERS = new core_1.OneToManyLink('StockTransfers', BusinessPartners, StockTransfers_1.StockTransfers);
    /**
     * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.BUSINESS_PLACES = new core_1.OneToManyLink('BusinessPlaces', BusinessPartners, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ORDERS = new core_1.OneToManyLink('Orders', BusinessPartners, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[partnersSetups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PARTNERS_SETUPS = new core_1.OneToManyLink('PartnersSetups', BusinessPartners, PartnersSetups_1.PartnersSetups);
    /**
     * Static representation of the one-to-many navigation property [[inventoryTransferRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.INVENTORY_TRANSFER_REQUESTS = new core_1.OneToManyLink('InventoryTransferRequests', BusinessPartners, InventoryTransferRequests_1.InventoryTransferRequests);
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ACTIVITIES = new core_1.OneToManyLink('Activities', BusinessPartners, Activities_1.Activities);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', BusinessPartners, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.DRAFTS = new core_1.OneToManyLink('Drafts', BusinessPartners, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.STOCK_TRANSFER_DRAFTS = new core_1.OneToManyLink('StockTransferDrafts', BusinessPartners, StockTransferDrafts_1.StockTransferDrafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.RETURNS = new core_1.OneToManyLink('Returns', BusinessPartners, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[materialRevaluation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.MATERIAL_REVALUATION = new core_1.OneToManyLink('MaterialRevaluation', BusinessPartners, MaterialRevaluation_1.MaterialRevaluation);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', BusinessPartners, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', BusinessPartners, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', BusinessPartners, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CUSTOMER_EQUIPMENT_CARDS = new core_1.OneToManyLink('CustomerEquipmentCards', BusinessPartners, CustomerEquipmentCards_1.CustomerEquipmentCards);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', BusinessPartners, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', BusinessPartners, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', BusinessPartners, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', BusinessPartners, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SERVICE_CALLS = new core_1.OneToManyLink('ServiceCalls', BusinessPartners, ServiceCalls_1.ServiceCalls);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', BusinessPartners, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.EMPLOYEES_INFO = new core_1.OneToManyLink('EmployeesInfo', BusinessPartners, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_ORDERS = new core_1.OneToManyLink('PurchaseOrders', BusinessPartners, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[alternateCatNum]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.ALTERNATE_CAT_NUM = new core_1.OneToManyLink('AlternateCatNum', BusinessPartners, AlternateCatNum_1.AlternateCatNum);
    /**
     * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PROJECT_MANAGEMENTS = new core_1.OneToManyLink('ProjectManagements', BusinessPartners, ProjectManagements_1.ProjectManagements);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', BusinessPartners, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[salesTaxInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.SALES_TAX_INVOICES = new core_1.OneToManyLink('SalesTaxInvoices', BusinessPartners, SalesTaxInvoices_1.SalesTaxInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseTaxInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartners.PURCHASE_TAX_INVOICES = new core_1.OneToManyLink('PurchaseTaxInvoices', BusinessPartners, PurchaseTaxInvoices_1.PurchaseTaxInvoices);
    /**
     * All fields of the BusinessPartners entity.
     */
    BusinessPartners._allFields = [
        BusinessPartners.CARD_CODE,
        BusinessPartners.CARD_NAME,
        BusinessPartners.CARD_TYPE,
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
        BusinessPartners.VAT_LIABLE,
        BusinessPartners.FEDERAL_TAX_ID,
        BusinessPartners.DEDUCTIBLE_AT_SOURCE,
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
        BusinessPartners.FATHER_TYPE,
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
        BusinessPartners.VALID,
        BusinessPartners.VALID_FROM,
        BusinessPartners.VALID_TO,
        BusinessPartners.VALID_REMARKS,
        BusinessPartners.FROZEN,
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
        BusinessPartners.BACK_ORDER,
        BusinessPartners.PARTIAL_DELIVERY,
        BusinessPartners.BLOCK_DUNNING,
        BusinessPartners.BANK_COUNTRY,
        BusinessPartners.HOUSE_BANK,
        BusinessPartners.HOUSE_BANK_COUNTRY,
        BusinessPartners.HOUSE_BANK_ACCOUNT,
        BusinessPartners.SHIP_TO_DEFAULT,
        BusinessPartners.DUNNING_LEVEL,
        BusinessPartners.DUNNING_DATE,
        BusinessPartners.COLLECTION_AUTHORIZATION,
        BusinessPartners.DME,
        BusinessPartners.INSTRUCTION_KEY,
        BusinessPartners.SINGLE_PAYMENT,
        BusinessPartners.ISR_BILLER_ID,
        BusinessPartners.PAYMENT_BLOCK,
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
        BusinessPartners.DEFERRED_TAX,
        BusinessPartners.EQUALIZATION,
        BusinessPartners.SUBJECT_TO_WITHHOLDING_TAX,
        BusinessPartners.CERTIFICATE_NUMBER,
        BusinessPartners.EXPIRATION_DATE,
        BusinessPartners.NATIONAL_INSURANCE_NUM,
        BusinessPartners.ACCRUAL_CRITERIA,
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
        BusinessPartners.COMPANY_PRIVATE,
        BusinessPartners.LANGUAGE_CODE,
        BusinessPartners.UNPAID_BILLOF_EXCHANGE,
        BusinessPartners.WITHHOLDING_TAX_DEDUCTION_GROUP,
        BusinessPartners.CLOSING_DATE_PROCEDURE_NUMBER,
        BusinessPartners.PROFESSION,
        BusinessPartners.BANK_CHARGES_ALLOCATION_CODE,
        BusinessPartners.TAX_ROUNDING_RULE,
        BusinessPartners.PROPERTIES_1,
        BusinessPartners.PROPERTIES_2,
        BusinessPartners.PROPERTIES_3,
        BusinessPartners.PROPERTIES_4,
        BusinessPartners.PROPERTIES_5,
        BusinessPartners.PROPERTIES_6,
        BusinessPartners.PROPERTIES_7,
        BusinessPartners.PROPERTIES_8,
        BusinessPartners.PROPERTIES_9,
        BusinessPartners.PROPERTIES_10,
        BusinessPartners.PROPERTIES_11,
        BusinessPartners.PROPERTIES_12,
        BusinessPartners.PROPERTIES_13,
        BusinessPartners.PROPERTIES_14,
        BusinessPartners.PROPERTIES_15,
        BusinessPartners.PROPERTIES_16,
        BusinessPartners.PROPERTIES_17,
        BusinessPartners.PROPERTIES_18,
        BusinessPartners.PROPERTIES_19,
        BusinessPartners.PROPERTIES_20,
        BusinessPartners.PROPERTIES_21,
        BusinessPartners.PROPERTIES_22,
        BusinessPartners.PROPERTIES_23,
        BusinessPartners.PROPERTIES_24,
        BusinessPartners.PROPERTIES_25,
        BusinessPartners.PROPERTIES_26,
        BusinessPartners.PROPERTIES_27,
        BusinessPartners.PROPERTIES_28,
        BusinessPartners.PROPERTIES_29,
        BusinessPartners.PROPERTIES_30,
        BusinessPartners.PROPERTIES_31,
        BusinessPartners.PROPERTIES_32,
        BusinessPartners.PROPERTIES_33,
        BusinessPartners.PROPERTIES_34,
        BusinessPartners.PROPERTIES_35,
        BusinessPartners.PROPERTIES_36,
        BusinessPartners.PROPERTIES_37,
        BusinessPartners.PROPERTIES_38,
        BusinessPartners.PROPERTIES_39,
        BusinessPartners.PROPERTIES_40,
        BusinessPartners.PROPERTIES_41,
        BusinessPartners.PROPERTIES_42,
        BusinessPartners.PROPERTIES_43,
        BusinessPartners.PROPERTIES_44,
        BusinessPartners.PROPERTIES_45,
        BusinessPartners.PROPERTIES_46,
        BusinessPartners.PROPERTIES_47,
        BusinessPartners.PROPERTIES_48,
        BusinessPartners.PROPERTIES_49,
        BusinessPartners.PROPERTIES_50,
        BusinessPartners.PROPERTIES_51,
        BusinessPartners.PROPERTIES_52,
        BusinessPartners.PROPERTIES_53,
        BusinessPartners.PROPERTIES_54,
        BusinessPartners.PROPERTIES_55,
        BusinessPartners.PROPERTIES_56,
        BusinessPartners.PROPERTIES_57,
        BusinessPartners.PROPERTIES_58,
        BusinessPartners.PROPERTIES_59,
        BusinessPartners.PROPERTIES_60,
        BusinessPartners.PROPERTIES_61,
        BusinessPartners.PROPERTIES_62,
        BusinessPartners.PROPERTIES_63,
        BusinessPartners.PROPERTIES_64,
        BusinessPartners.COMPANY_REGISTRATION_NUMBER,
        BusinessPartners.VERIFICATION_NUMBER,
        BusinessPartners.DISCOUNT_BASE_OBJECT,
        BusinessPartners.DISCOUNT_RELATIONS,
        BusinessPartners.TYPE_REPORT,
        BusinessPartners.THRESHOLD_OVERLOOK,
        BusinessPartners.SURCHARGE_OVERLOOK,
        BusinessPartners.DOWN_PAYMENT_INTERIM_ACCOUNT,
        BusinessPartners.OPERATION_CODE_347,
        BusinessPartners.INSURANCE_OPERATION_347,
        BusinessPartners.HIERARCHICAL_DEDUCTION,
        BusinessPartners.SHAAM_GROUP,
        BusinessPartners.WITHHOLDING_TAX_CERTIFIED,
        BusinessPartners.BOOKKEEPING_CERTIFIED,
        BusinessPartners.PLANNING_GROUP,
        BusinessPartners.AFFILIATE,
        BusinessPartners.INDUSTRY,
        BusinessPartners.VAT_ID_NUM,
        BusinessPartners.DATEV_ACCOUNT,
        BusinessPartners.DATEV_FIRST_DATA_ENTRY,
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
        BusinessPartners.AUTOMATIC_POSTING,
        BusinessPartners.INTEREST_ACCOUNT,
        BusinessPartners.FEE_ACCOUNT,
        BusinessPartners.CAMPAIGN_NUMBER,
        BusinessPartners.ALIAS_NAME,
        BusinessPartners.DEFAULT_BLANKET_AGREEMENT_NUMBER,
        BusinessPartners.EFFECTIVE_DISCOUNT,
        BusinessPartners.NO_DISCOUNTS,
        BusinessPartners.EFFECTIVE_PRICE,
        BusinessPartners.GLOBAL_LOCATION_NUMBER,
        BusinessPartners.EDI_SENDER_ID,
        BusinessPartners.EDI_RECIPIENT_ID,
        BusinessPartners.RESIDEN_NUMBER,
        BusinessPartners.RELATIONSHIP_CODE,
        BusinessPartners.RELATIONSHIP_DATE_FROM,
        BusinessPartners.RELATIONSHIP_DATE_TILL,
        BusinessPartners.UNIFIED_FEDERAL_TAX_ID,
        BusinessPartners.ATTACHMENT_ENTRY,
        BusinessPartners.TYPE_OF_OPERATION,
        BusinessPartners.ENDORSABLE_CHECKS_FROM_BP,
        BusinessPartners.ACCEPTS_ENDORSED_CHECKS,
        BusinessPartners.OWNER_CODE,
        BusinessPartners.BLOCK_SENDING_MARKETING_CONTENT,
        BusinessPartners.AGENT_CODE,
        BusinessPartners.PRICE_MODE,
        BusinessPartners.E_DOC_GENERATION_TYPE,
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
        BusinessPartners.EXEMPTION_MAX_AMOUNT_VALIDATION_TYPE,
        BusinessPartners.E_COMMERCE_MERCHANT_ID,
        BusinessPartners.USE_BILL_TO_ADDR_TO_DETERMINE_TAX,
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
    BusinessPartners.ALL_FIELDS = new core_1.AllFields('*', BusinessPartners);
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