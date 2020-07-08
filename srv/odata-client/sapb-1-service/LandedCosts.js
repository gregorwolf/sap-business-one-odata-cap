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
exports.LandedCosts = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var LandedCostsRequestBuilder_1 = require("./LandedCostsRequestBuilder");
var LandedCostItemLine_1 = require("./LandedCostItemLine");
var LandedCostCostLine_1 = require("./LandedCostCostLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "LandedCosts" of service "SAPB1".
 */
var LandedCosts = /** @class */ (function (_super) {
    __extends(LandedCosts, _super);
    function LandedCosts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `LandedCosts`.
     * @returns A builder that constructs instances of entity type `LandedCosts`.
     */
    LandedCosts.builder = function () {
        return v4_1.Entity.entityBuilder(LandedCosts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `LandedCosts` entity type.
     * @returns A `LandedCosts` request builder.
     */
    LandedCosts.requestBuilder = function () {
        return new LandedCostsRequestBuilder_1.LandedCostsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LandedCosts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LandedCosts`.
     */
    LandedCosts.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, LandedCosts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    LandedCosts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for LandedCosts.
     */
    LandedCosts._entityName = 'LandedCosts';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LandedCosts.
     */
    LandedCosts._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    LandedCosts._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return LandedCosts;
}(v4_1.Entity));
exports.LandedCosts = LandedCosts;
var BusinessPartners_1 = require("./BusinessPartners");
var ShippingTypes_1 = require("./ShippingTypes");
var JournalEntries_1 = require("./JournalEntries");
var PurchaseDeliveryNotes_1 = require("./PurchaseDeliveryNotes");
(function (LandedCosts) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.DOC_ENTRY = new v4_1.NumberField('DocEntry', LandedCosts, 'Edm.Int32');
    /**
     * Static representation of the [[landedCostNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.LANDED_COST_NUMBER = new v4_1.NumberField('LandedCostNumber', LandedCosts, 'Edm.Int32');
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.POSTING_DATE = new v4_1.DateField('PostingDate', LandedCosts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.DUE_DATE = new v4_1.DateField('DueDate', LandedCosts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[vendorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.VENDOR_CODE = new v4_1.StringField('VendorCode', LandedCosts, 'Edm.String');
    /**
     * Static representation of the [[vendorName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.VENDOR_NAME = new v4_1.StringField('VendorName', LandedCosts, 'Edm.String');
    /**
     * Static representation of the [[broker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.BROKER = new v4_1.StringField('Broker', LandedCosts, 'Edm.String');
    /**
     * Static representation of the [[brokerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.BROKER_NAME = new v4_1.StringField('BrokerName', LandedCosts, 'Edm.String');
    /**
     * Static representation of the [[fileNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.FILE_NUMBER = new v4_1.StringField('FileNumber', LandedCosts, 'Edm.String');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.REMARKS = new v4_1.StringField('Remarks', LandedCosts, 'Edm.String');
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.REFERENCE = new v4_1.StringField('Reference', LandedCosts, 'Edm.String');
    /**
     * Static representation of the [[documentCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.DOCUMENT_CURRENCY = new v4_1.StringField('DocumentCurrency', LandedCosts, 'Edm.String');
    /**
     * Static representation of the [[documentRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.DOCUMENT_RATE = new v4_1.NumberField('DocumentRate', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[projectedCustoms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.PROJECTED_CUSTOMS = new v4_1.NumberField('ProjectedCustoms', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[actualCustoms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.ACTUAL_CUSTOMS = new v4_1.NumberField('ActualCustoms', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[actualCustomsFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.ACTUAL_CUSTOMS_FC = new v4_1.NumberField('ActualCustomsFC', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[tax1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.TAX_1 = new v4_1.NumberField('Tax1', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[tax2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.TAX_2 = new v4_1.NumberField('Tax2', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[beforeTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.BEFORE_TAX = new v4_1.NumberField('BeforeTax', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[total]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.TOTAL = new v4_1.NumberField('Total', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[totalFreightCharges]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.TOTAL_FREIGHT_CHARGES = new v4_1.NumberField('TotalFreightCharges', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[projectedCustomsFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.PROJECTED_CUSTOMS_FC = new v4_1.NumberField('ProjectedCustomsFC', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[tax1Fc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.TAX_1_FC = new v4_1.NumberField('Tax1FC', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[tax2Fc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.TAX_2_FC = new v4_1.NumberField('Tax2FC', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[beforeTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.BEFORE_TAX_FC = new v4_1.NumberField('BeforeTaxFC', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[totalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.TOTAL_FC = new v4_1.NumberField('TotalFC', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[totalFreightChargesFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.TOTAL_FREIGHT_CHARGES_FC = new v4_1.NumberField('TotalFreightChargesFC', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.SERIES = new v4_1.NumberField('Series', LandedCosts, 'Edm.Int32');
    /**
     * Static representation of the [[amountToBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.AMOUNT_TO_BALANCE = new v4_1.NumberField('AmountToBalance', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[amountToBalanceFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.AMOUNT_TO_BALANCE_FC = new v4_1.NumberField('AmountToBalanceFC', LandedCosts, 'Edm.Double');
    /**
     * Static representation of the [[billofLadingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.BILLOF_LADING_NUMBER = new v4_1.StringField('BillofLadingNumber', LandedCosts, 'Edm.String');
    /**
     * Static representation of the [[transportType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.TRANSPORT_TYPE = new v4_1.NumberField('TransportType', LandedCosts, 'Edm.Int32');
    /**
     * Static representation of the [[transactionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.TRANSACTION_NUMBER = new v4_1.NumberField('TransactionNumber', LandedCosts, 'Edm.Int32');
    /**
     * Static representation of the [[journalRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.JOURNAL_REMARKS = new v4_1.StringField('JournalRemarks', LandedCosts, 'Edm.String');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', LandedCosts, 'Edm.Int32');
    /**
     * Static representation of the [[landedCostItemLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.LANDED_COST_ITEM_LINES = new v4_1.CollectionField('LandedCost_ItemLines', LandedCosts, new LandedCostItemLine_1.LandedCostItemLineField('', LandedCosts));
    /**
     * Static representation of the [[landedCostCostLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.LANDED_COST_COST_LINES = new v4_1.CollectionField('LandedCost_CostLines', LandedCosts, new LandedCostCostLine_1.LandedCostCostLineField('', LandedCosts));
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', LandedCosts, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.SHIPPING_TYPE = new v4_1.OneToOneLink('ShippingType', LandedCosts, ShippingTypes_1.ShippingTypes);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.JOURNAL_ENTRY = new v4_1.OneToOneLink('JournalEntry', LandedCosts, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCosts.PURCHASE_DELIVERY_NOTES = new v4_1.OneToManyLink('PurchaseDeliveryNotes', LandedCosts, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * All fields of the LandedCosts entity.
     */
    LandedCosts._allFields = [
        LandedCosts.DOC_ENTRY,
        LandedCosts.LANDED_COST_NUMBER,
        LandedCosts.POSTING_DATE,
        LandedCosts.DUE_DATE,
        LandedCosts.VENDOR_CODE,
        LandedCosts.VENDOR_NAME,
        LandedCosts.BROKER,
        LandedCosts.BROKER_NAME,
        LandedCosts.FILE_NUMBER,
        LandedCosts.REMARKS,
        LandedCosts.REFERENCE,
        LandedCosts.DOCUMENT_CURRENCY,
        LandedCosts.DOCUMENT_RATE,
        LandedCosts.PROJECTED_CUSTOMS,
        LandedCosts.ACTUAL_CUSTOMS,
        LandedCosts.ACTUAL_CUSTOMS_FC,
        LandedCosts.TAX_1,
        LandedCosts.TAX_2,
        LandedCosts.BEFORE_TAX,
        LandedCosts.TOTAL,
        LandedCosts.TOTAL_FREIGHT_CHARGES,
        LandedCosts.PROJECTED_CUSTOMS_FC,
        LandedCosts.TAX_1_FC,
        LandedCosts.TAX_2_FC,
        LandedCosts.BEFORE_TAX_FC,
        LandedCosts.TOTAL_FC,
        LandedCosts.TOTAL_FREIGHT_CHARGES_FC,
        LandedCosts.SERIES,
        LandedCosts.AMOUNT_TO_BALANCE,
        LandedCosts.AMOUNT_TO_BALANCE_FC,
        LandedCosts.BILLOF_LADING_NUMBER,
        LandedCosts.TRANSPORT_TYPE,
        LandedCosts.TRANSACTION_NUMBER,
        LandedCosts.JOURNAL_REMARKS,
        LandedCosts.ATTACHMENT_ENTRY,
        LandedCosts.LANDED_COST_ITEM_LINES,
        LandedCosts.LANDED_COST_COST_LINES,
        LandedCosts.BUSINESS_PARTNER,
        LandedCosts.SHIPPING_TYPE,
        LandedCosts.JOURNAL_ENTRY,
        LandedCosts.PURCHASE_DELIVERY_NOTES
    ];
    /**
     * All fields selector.
     */
    LandedCosts.ALL_FIELDS = new v4_1.AllFields('*', LandedCosts);
    /**
     * All key fields of the LandedCosts entity.
     */
    LandedCosts._keyFields = [LandedCosts.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property LandedCosts.
     */
    LandedCosts._keys = LandedCosts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(LandedCosts = exports.LandedCosts || (exports.LandedCosts = {}));
exports.LandedCosts = LandedCosts;
//# sourceMappingURL=LandedCosts.js.map