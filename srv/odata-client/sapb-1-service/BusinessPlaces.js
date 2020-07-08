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
exports.BusinessPlaces = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BusinessPlacesRequestBuilder_1 = require("./BusinessPlacesRequestBuilder");
var BusinessPlaceIeNumber_1 = require("./BusinessPlaceIeNumber");
var BusinessPlaceTributaryInfo_1 = require("./BusinessPlaceTributaryInfo");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "BusinessPlaces" of service "SAPB1".
 */
var BusinessPlaces = /** @class */ (function (_super) {
    __extends(BusinessPlaces, _super);
    function BusinessPlaces() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BusinessPlaces`.
     * @returns A builder that constructs instances of entity type `BusinessPlaces`.
     */
    BusinessPlaces.builder = function () {
        return v4_1.Entity.entityBuilder(BusinessPlaces);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPlaces` entity type.
     * @returns A `BusinessPlaces` request builder.
     */
    BusinessPlaces.requestBuilder = function () {
        return new BusinessPlacesRequestBuilder_1.BusinessPlacesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPlaces`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPlaces`.
     */
    BusinessPlaces.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, BusinessPlaces);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BusinessPlaces.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BusinessPlaces.
     */
    BusinessPlaces._entityName = 'BusinessPlaces';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BusinessPlaces.
     */
    BusinessPlaces._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    BusinessPlaces._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BusinessPlaces;
}(v4_1.Entity));
exports.BusinessPlaces = BusinessPlaces;
var UserDefaultGroups_1 = require("./UserDefaultGroups");
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
var VendorPayments_1 = require("./VendorPayments");
var AssetTransfer_1 = require("./AssetTransfer");
var AssetRetirement_1 = require("./AssetRetirement");
var AssetCapitalizationCreditMemo_1 = require("./AssetCapitalizationCreditMemo");
var AssetClasses_1 = require("./AssetClasses");
var InventoryPostings_1 = require("./InventoryPostings");
var DeliveryNotes_1 = require("./DeliveryNotes");
var Quotations_1 = require("./Quotations");
var InventoryGenExits_1 = require("./InventoryGenExits");
var PurchaseRequests_1 = require("./PurchaseRequests");
var ReturnRequest_1 = require("./ReturnRequest");
var PurchaseReturns_1 = require("./PurchaseReturns");
var Invoices_1 = require("./Invoices");
var AssetCapitalization_1 = require("./AssetCapitalization");
var CreditNotes_1 = require("./CreditNotes");
var StockTransfers_1 = require("./StockTransfers");
var BusinessPartners_1 = require("./BusinessPartners");
var Warehouses_1 = require("./Warehouses");
var BrazilNumericIndexers_1 = require("./BrazilNumericIndexers");
var BrazilStringIndexers_1 = require("./BrazilStringIndexers");
var Countries_1 = require("./Countries");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var Orders_1 = require("./Orders");
var InventoryCountings_1 = require("./InventoryCountings");
var InventoryTransferRequests_1 = require("./InventoryTransferRequests");
var AssetManualDepreciation_1 = require("./AssetManualDepreciation");
var DownPayments_1 = require("./DownPayments");
var Drafts_1 = require("./Drafts");
var PaymentDrafts_1 = require("./PaymentDrafts");
var StockTransferDrafts_1 = require("./StockTransferDrafts");
var Returns_1 = require("./Returns");
var CorrectionInvoiceReversal_1 = require("./CorrectionInvoiceReversal");
var CorrectionPurchaseInvoice_1 = require("./CorrectionPurchaseInvoice");
var CorrectionPurchaseInvoiceReversal_1 = require("./CorrectionPurchaseInvoiceReversal");
var PurchaseInvoices_1 = require("./PurchaseInvoices");
var PurchaseDeliveryNotes_1 = require("./PurchaseDeliveryNotes");
var CorrectionInvoice_1 = require("./CorrectionInvoice");
var PurchaseCreditNotes_1 = require("./PurchaseCreditNotes");
var InventoryOpeningBalances_1 = require("./InventoryOpeningBalances");
var PurchaseDownPayments_1 = require("./PurchaseDownPayments");
var EmployeesInfo_1 = require("./EmployeesInfo");
var PurchaseOrders_1 = require("./PurchaseOrders");
var GoodsReturnRequest_1 = require("./GoodsReturnRequest");
var Deposits_1 = require("./Deposits");
var IncomingPayments_1 = require("./IncomingPayments");
(function (BusinessPlaces) {
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.BPLID = new v4_1.NumberField('BPLID', BusinessPlaces, 'Edm.Int32');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.BPL_NAME = new v4_1.StringField('BPLName', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[bplNameForeign]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.BPL_NAME_FOREIGN = new v4_1.StringField('BPLNameForeign', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.VAT_REG_NUM = new v4_1.StringField('VATRegNum', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[repName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.REP_NAME = new v4_1.StringField('RepName', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.INDUSTRY = new v4_1.StringField('Industry', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[business]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.BUSINESS = new v4_1.StringField('Business', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.ADDRESS = new v4_1.StringField('Address', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[addressforeign]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.ADDRESSFOREIGN = new v4_1.StringField('Addressforeign', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[taxOfficeNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.TAX_OFFICE_NO = new v4_1.StringField('TaxOfficeNo', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[defaultCustomerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.DEFAULT_CUSTOMER_ID = new v4_1.StringField('DefaultCustomerID', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[defaultVendorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.DEFAULT_VENDOR_ID = new v4_1.StringField('DefaultVendorID', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[defaultWarehouseId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.DEFAULT_WAREHOUSE_ID = new v4_1.StringField('DefaultWarehouseID', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[defaultTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.DEFAULT_TAX_CODE = new v4_1.StringField('DefaultTaxCode', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[taxOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.TAX_OFFICE = new v4_1.StringField('TaxOffice', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.FEDERAL_TAX_ID = new v4_1.StringField('FederalTaxID', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.FEDERAL_TAX_ID_2 = new v4_1.StringField('FederalTaxID2', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[federalTaxId3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.FEDERAL_TAX_ID_3 = new v4_1.StringField('FederalTaxID3', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[additionalIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.ADDITIONAL_ID_NUMBER = new v4_1.StringField('AdditionalIdNumber', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[natureOfCompanyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.NATURE_OF_COMPANY_CODE = new v4_1.NumberField('NatureOfCompanyCode', BusinessPlaces, 'Edm.Int32');
    /**
     * Static representation of the [[economicActivityTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.ECONOMIC_ACTIVITY_TYPE_CODE = new v4_1.NumberField('EconomicActivityTypeCode', BusinessPlaces, 'Edm.Int32');
    /**
     * Static representation of the [[creditContributionOriginCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.CREDIT_CONTRIBUTION_ORIGIN_CODE = new v4_1.StringField('CreditContributionOriginCode', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[ipiPeriodCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.IPI_PERIOD_CODE = new v4_1.StringField('IPIPeriodCode', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[cooperativeAssociationTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.COOPERATIVE_ASSOCIATION_TYPE_CODE = new v4_1.NumberField('CooperativeAssociationTypeCode', BusinessPlaces, 'Edm.Int32');
    /**
     * Static representation of the [[profitTaxationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.PROFIT_TAXATION_CODE = new v4_1.NumberField('ProfitTaxationCode', BusinessPlaces, 'Edm.Int32');
    /**
     * Static representation of the [[companyQualificationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.COMPANY_QUALIFICATION_CODE = new v4_1.NumberField('CompanyQualificationCode', BusinessPlaces, 'Edm.Int32');
    /**
     * Static representation of the [[declarerTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.DECLARER_TYPE_CODE = new v4_1.NumberField('DeclarerTypeCode', BusinessPlaces, 'Edm.Int32');
    /**
     * Static representation of the [[preferredStateCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.PREFERRED_STATE_CODE = new v4_1.StringField('PreferredStateCode', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.ADDRESS_TYPE = new v4_1.StringField('AddressType', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.STREET = new v4_1.StringField('Street', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[streetNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.STREET_NO = new v4_1.StringField('StreetNo', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[building]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.BUILDING = new v4_1.StringField('Building', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.ZIP_CODE = new v4_1.StringField('ZipCode', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[block]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.BLOCK = new v4_1.StringField('Block', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.CITY = new v4_1.StringField('City', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.STATE = new v4_1.StringField('State', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.COUNTY = new v4_1.StringField('County', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.COUNTRY = new v4_1.StringField('Country', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[aliasName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.ALIAS_NAME = new v4_1.StringField('AliasName', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[commercialRegister]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.COMMERCIAL_REGISTER = new v4_1.StringField('CommercialRegister', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[dateOfIncorporation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.DATE_OF_INCORPORATION = new v4_1.DateField('DateOfIncorporation', BusinessPlaces, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[spedProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.SPED_PROFILE = new v4_1.StringField('SPEDProfile', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[environmentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.ENVIRONMENT_TYPE = new v4_1.NumberField('EnvironmentType', BusinessPlaces, 'Edm.Int32');
    /**
     * Static representation of the [[paymentClearingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.PAYMENT_CLEARING_ACCOUNT = new v4_1.StringField('PaymentClearingAccount', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[globalLocationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.GLOBAL_LOCATION_NUMBER = new v4_1.StringField('GlobalLocationNumber', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[defaultResourceWarehouseId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.DEFAULT_RESOURCE_WAREHOUSE_ID = new v4_1.StringField('DefaultResourceWarehouseID', BusinessPlaces, 'Edm.String');
    /**
     * Static representation of the [[businessPlaceIeNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.BUSINESS_PLACE_IE_NUMBERS = new v4_1.CollectionField('BusinessPlaceIENumbers', BusinessPlaces, new BusinessPlaceIeNumber_1.BusinessPlaceIeNumberField('', BusinessPlaces));
    /**
     * Static representation of the [[businessPlaceTributaryInfos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.BUSINESS_PLACE_TRIBUTARY_INFOS = new v4_1.CollectionField('BusinessPlaceTributaryInfos', BusinessPlaces, new BusinessPlaceTributaryInfo_1.BusinessPlaceTributaryInfoField('', BusinessPlaces));
    /**
     * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.USER_DEFAULT_GROUPS = new v4_1.OneToManyLink('UserDefaultGroups', BusinessPlaces, UserDefaultGroups_1.UserDefaultGroups);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.INVENTORY_GEN_ENTRIES = new v4_1.OneToManyLink('InventoryGenEntries', BusinessPlaces, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.PURCHASE_QUOTATIONS = new v4_1.OneToManyLink('PurchaseQuotations', BusinessPlaces, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.VENDOR_PAYMENTS = new v4_1.OneToManyLink('VendorPayments', BusinessPlaces, VendorPayments_1.VendorPayments);
    /**
     * Static representation of the one-to-many navigation property [[assetTransfer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.ASSET_TRANSFER = new v4_1.OneToManyLink('AssetTransfer', BusinessPlaces, AssetTransfer_1.AssetTransfer);
    /**
     * Static representation of the one-to-many navigation property [[assetRetirement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.ASSET_RETIREMENT = new v4_1.OneToManyLink('AssetRetirement', BusinessPlaces, AssetRetirement_1.AssetRetirement);
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalizationCreditMemo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.ASSET_CAPITALIZATION_CREDIT_MEMO = new v4_1.OneToManyLink('AssetCapitalizationCreditMemo', BusinessPlaces, AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo);
    /**
     * Static representation of the one-to-many navigation property [[assetClasses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.ASSET_CLASSES = new v4_1.OneToManyLink('AssetClasses', BusinessPlaces, AssetClasses_1.AssetClasses);
    /**
     * Static representation of the one-to-many navigation property [[inventoryPostings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.INVENTORY_POSTINGS = new v4_1.OneToManyLink('InventoryPostings', BusinessPlaces, InventoryPostings_1.InventoryPostings);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.DELIVERY_NOTES = new v4_1.OneToManyLink('DeliveryNotes', BusinessPlaces, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.QUOTATIONS = new v4_1.OneToManyLink('Quotations', BusinessPlaces, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.INVENTORY_GEN_EXITS = new v4_1.OneToManyLink('InventoryGenExits', BusinessPlaces, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.PURCHASE_REQUESTS = new v4_1.OneToManyLink('PurchaseRequests', BusinessPlaces, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.RETURN_REQUEST = new v4_1.OneToManyLink('ReturnRequest', BusinessPlaces, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.PURCHASE_RETURNS = new v4_1.OneToManyLink('PurchaseReturns', BusinessPlaces, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.INVOICES = new v4_1.OneToManyLink('Invoices', BusinessPlaces, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalization]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.ASSET_CAPITALIZATION = new v4_1.OneToManyLink('AssetCapitalization', BusinessPlaces, AssetCapitalization_1.AssetCapitalization);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.CREDIT_NOTES = new v4_1.OneToManyLink('CreditNotes', BusinessPlaces, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[stockTransfers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.STOCK_TRANSFERS = new v4_1.OneToManyLink('StockTransfers', BusinessPlaces, StockTransfers_1.StockTransfers);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', BusinessPlaces, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[warehouse]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.WAREHOUSE = new v4_1.OneToOneLink('Warehouse', BusinessPlaces, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-one navigation property [[brazilNumericIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.BRAZIL_NUMERIC_INDEXER = new v4_1.OneToOneLink('BrazilNumericIndexer', BusinessPlaces, BrazilNumericIndexers_1.BrazilNumericIndexers);
    /**
     * Static representation of the one-to-one navigation property [[brazilStringIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.BRAZIL_STRING_INDEXER = new v4_1.OneToOneLink('BrazilStringIndexer', BusinessPlaces, BrazilStringIndexers_1.BrazilStringIndexers);
    /**
     * Static representation of the one-to-one navigation property [[country2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.COUNTRY_2 = new v4_1.OneToOneLink('Country2', BusinessPlaces, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', BusinessPlaces, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.ORDERS = new v4_1.OneToManyLink('Orders', BusinessPlaces, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[inventoryCountings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.INVENTORY_COUNTINGS = new v4_1.OneToManyLink('InventoryCountings', BusinessPlaces, InventoryCountings_1.InventoryCountings);
    /**
     * Static representation of the one-to-many navigation property [[inventoryTransferRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.INVENTORY_TRANSFER_REQUESTS = new v4_1.OneToManyLink('InventoryTransferRequests', BusinessPlaces, InventoryTransferRequests_1.InventoryTransferRequests);
    /**
     * Static representation of the one-to-many navigation property [[assetManualDepreciation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.ASSET_MANUAL_DEPRECIATION = new v4_1.OneToManyLink('AssetManualDepreciation', BusinessPlaces, AssetManualDepreciation_1.AssetManualDepreciation);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.DOWN_PAYMENTS = new v4_1.OneToManyLink('DownPayments', BusinessPlaces, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.DRAFTS = new v4_1.OneToManyLink('Drafts', BusinessPlaces, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.PAYMENT_DRAFTS = new v4_1.OneToManyLink('PaymentDrafts', BusinessPlaces, PaymentDrafts_1.PaymentDrafts);
    /**
     * Static representation of the one-to-many navigation property [[stockTransferDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.STOCK_TRANSFER_DRAFTS = new v4_1.OneToManyLink('StockTransferDrafts', BusinessPlaces, StockTransferDrafts_1.StockTransferDrafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.RETURNS = new v4_1.OneToManyLink('Returns', BusinessPlaces, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.CORRECTION_INVOICE_REVERSAL = new v4_1.OneToManyLink('CorrectionInvoiceReversal', BusinessPlaces, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.CORRECTION_PURCHASE_INVOICE = new v4_1.OneToManyLink('CorrectionPurchaseInvoice', BusinessPlaces, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.CORRECTION_PURCHASE_INVOICE_REVERSAL = new v4_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', BusinessPlaces, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.PURCHASE_INVOICES = new v4_1.OneToManyLink('PurchaseInvoices', BusinessPlaces, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.PURCHASE_DELIVERY_NOTES = new v4_1.OneToManyLink('PurchaseDeliveryNotes', BusinessPlaces, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.CORRECTION_INVOICE = new v4_1.OneToManyLink('CorrectionInvoice', BusinessPlaces, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.PURCHASE_CREDIT_NOTES = new v4_1.OneToManyLink('PurchaseCreditNotes', BusinessPlaces, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[inventoryOpeningBalances]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.INVENTORY_OPENING_BALANCES = new v4_1.OneToManyLink('InventoryOpeningBalances', BusinessPlaces, InventoryOpeningBalances_1.InventoryOpeningBalances);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.PURCHASE_DOWN_PAYMENTS = new v4_1.OneToManyLink('PurchaseDownPayments', BusinessPlaces, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.EMPLOYEES_INFO = new v4_1.OneToManyLink('EmployeesInfo', BusinessPlaces, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.PURCHASE_ORDERS = new v4_1.OneToManyLink('PurchaseOrders', BusinessPlaces, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.GOODS_RETURN_REQUEST = new v4_1.OneToManyLink('GoodsReturnRequest', BusinessPlaces, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[deposits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.DEPOSITS = new v4_1.OneToManyLink('Deposits', BusinessPlaces, Deposits_1.Deposits);
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPlaces.INCOMING_PAYMENTS = new v4_1.OneToManyLink('IncomingPayments', BusinessPlaces, IncomingPayments_1.IncomingPayments);
    /**
     * All fields of the BusinessPlaces entity.
     */
    BusinessPlaces._allFields = [
        BusinessPlaces.BPLID,
        BusinessPlaces.BPL_NAME,
        BusinessPlaces.BPL_NAME_FOREIGN,
        BusinessPlaces.VAT_REG_NUM,
        BusinessPlaces.REP_NAME,
        BusinessPlaces.INDUSTRY,
        BusinessPlaces.BUSINESS,
        BusinessPlaces.ADDRESS,
        BusinessPlaces.ADDRESSFOREIGN,
        BusinessPlaces.TAX_OFFICE_NO,
        BusinessPlaces.DEFAULT_CUSTOMER_ID,
        BusinessPlaces.DEFAULT_VENDOR_ID,
        BusinessPlaces.DEFAULT_WAREHOUSE_ID,
        BusinessPlaces.DEFAULT_TAX_CODE,
        BusinessPlaces.TAX_OFFICE,
        BusinessPlaces.FEDERAL_TAX_ID,
        BusinessPlaces.FEDERAL_TAX_ID_2,
        BusinessPlaces.FEDERAL_TAX_ID_3,
        BusinessPlaces.ADDITIONAL_ID_NUMBER,
        BusinessPlaces.NATURE_OF_COMPANY_CODE,
        BusinessPlaces.ECONOMIC_ACTIVITY_TYPE_CODE,
        BusinessPlaces.CREDIT_CONTRIBUTION_ORIGIN_CODE,
        BusinessPlaces.IPI_PERIOD_CODE,
        BusinessPlaces.COOPERATIVE_ASSOCIATION_TYPE_CODE,
        BusinessPlaces.PROFIT_TAXATION_CODE,
        BusinessPlaces.COMPANY_QUALIFICATION_CODE,
        BusinessPlaces.DECLARER_TYPE_CODE,
        BusinessPlaces.PREFERRED_STATE_CODE,
        BusinessPlaces.ADDRESS_TYPE,
        BusinessPlaces.STREET,
        BusinessPlaces.STREET_NO,
        BusinessPlaces.BUILDING,
        BusinessPlaces.ZIP_CODE,
        BusinessPlaces.BLOCK,
        BusinessPlaces.CITY,
        BusinessPlaces.STATE,
        BusinessPlaces.COUNTY,
        BusinessPlaces.COUNTRY,
        BusinessPlaces.ALIAS_NAME,
        BusinessPlaces.COMMERCIAL_REGISTER,
        BusinessPlaces.DATE_OF_INCORPORATION,
        BusinessPlaces.SPED_PROFILE,
        BusinessPlaces.ENVIRONMENT_TYPE,
        BusinessPlaces.PAYMENT_CLEARING_ACCOUNT,
        BusinessPlaces.GLOBAL_LOCATION_NUMBER,
        BusinessPlaces.DEFAULT_RESOURCE_WAREHOUSE_ID,
        BusinessPlaces.BUSINESS_PLACE_IE_NUMBERS,
        BusinessPlaces.BUSINESS_PLACE_TRIBUTARY_INFOS,
        BusinessPlaces.USER_DEFAULT_GROUPS,
        BusinessPlaces.INVENTORY_GEN_ENTRIES,
        BusinessPlaces.PURCHASE_QUOTATIONS,
        BusinessPlaces.VENDOR_PAYMENTS,
        BusinessPlaces.ASSET_TRANSFER,
        BusinessPlaces.ASSET_RETIREMENT,
        BusinessPlaces.ASSET_CAPITALIZATION_CREDIT_MEMO,
        BusinessPlaces.ASSET_CLASSES,
        BusinessPlaces.INVENTORY_POSTINGS,
        BusinessPlaces.DELIVERY_NOTES,
        BusinessPlaces.QUOTATIONS,
        BusinessPlaces.INVENTORY_GEN_EXITS,
        BusinessPlaces.PURCHASE_REQUESTS,
        BusinessPlaces.RETURN_REQUEST,
        BusinessPlaces.PURCHASE_RETURNS,
        BusinessPlaces.INVOICES,
        BusinessPlaces.ASSET_CAPITALIZATION,
        BusinessPlaces.CREDIT_NOTES,
        BusinessPlaces.STOCK_TRANSFERS,
        BusinessPlaces.BUSINESS_PARTNER,
        BusinessPlaces.WAREHOUSE,
        BusinessPlaces.BRAZIL_NUMERIC_INDEXER,
        BusinessPlaces.BRAZIL_STRING_INDEXER,
        BusinessPlaces.COUNTRY_2,
        BusinessPlaces.CHART_OF_ACCOUNT,
        BusinessPlaces.ORDERS,
        BusinessPlaces.INVENTORY_COUNTINGS,
        BusinessPlaces.INVENTORY_TRANSFER_REQUESTS,
        BusinessPlaces.ASSET_MANUAL_DEPRECIATION,
        BusinessPlaces.DOWN_PAYMENTS,
        BusinessPlaces.DRAFTS,
        BusinessPlaces.PAYMENT_DRAFTS,
        BusinessPlaces.STOCK_TRANSFER_DRAFTS,
        BusinessPlaces.RETURNS,
        BusinessPlaces.CORRECTION_INVOICE_REVERSAL,
        BusinessPlaces.CORRECTION_PURCHASE_INVOICE,
        BusinessPlaces.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        BusinessPlaces.PURCHASE_INVOICES,
        BusinessPlaces.PURCHASE_DELIVERY_NOTES,
        BusinessPlaces.CORRECTION_INVOICE,
        BusinessPlaces.PURCHASE_CREDIT_NOTES,
        BusinessPlaces.INVENTORY_OPENING_BALANCES,
        BusinessPlaces.PURCHASE_DOWN_PAYMENTS,
        BusinessPlaces.EMPLOYEES_INFO,
        BusinessPlaces.PURCHASE_ORDERS,
        BusinessPlaces.GOODS_RETURN_REQUEST,
        BusinessPlaces.DEPOSITS,
        BusinessPlaces.INCOMING_PAYMENTS
    ];
    /**
     * All fields selector.
     */
    BusinessPlaces.ALL_FIELDS = new v4_1.AllFields('*', BusinessPlaces);
    /**
     * All key fields of the BusinessPlaces entity.
     */
    BusinessPlaces._keyFields = [BusinessPlaces.BPLID];
    /**
     * Mapping of all key field names to the respective static field property BusinessPlaces.
     */
    BusinessPlaces._keys = BusinessPlaces._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BusinessPlaces = exports.BusinessPlaces || (exports.BusinessPlaces = {}));
exports.BusinessPlaces = BusinessPlaces;
//# sourceMappingURL=BusinessPlaces.js.map