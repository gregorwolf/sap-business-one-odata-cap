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
exports.StockTransfers = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var StockTransfersRequestBuilder_1 = require("./StockTransfersRequestBuilder");
var StockTransferApprovalRequest_1 = require("./StockTransferApprovalRequest");
var StockTransferLine_1 = require("./StockTransferLine");
var StockTransferTaxExtension_1 = require("./StockTransferTaxExtension");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "StockTransfers" of service "SAPB1".
 */
var StockTransfers = /** @class */ (function (_super) {
    __extends(StockTransfers, _super);
    function StockTransfers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `StockTransfers`.
     * @returns A builder that constructs instances of entity type `StockTransfers`.
     */
    StockTransfers.builder = function () {
        return core_1.EntityV4.entityBuilder(StockTransfers);
    };
    /**
     * Returns a request builder to construct requests for operations on the `StockTransfers` entity type.
     * @returns A `StockTransfers` request builder.
     */
    StockTransfers.requestBuilder = function () {
        return new StockTransfersRequestBuilder_1.StockTransfersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `StockTransfers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `StockTransfers`.
     */
    StockTransfers.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, StockTransfers);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    StockTransfers.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for StockTransfers.
     */
    StockTransfers._entityName = 'StockTransfers';
    /**
     * Default url path for the according service.
     */
    StockTransfers._defaultServicePath = '/b1s/v2/';
    return StockTransfers;
}(core_1.EntityV4));
exports.StockTransfers = StockTransfers;
var BusinessPartners_1 = require("./BusinessPartners");
var PriceLists_1 = require("./PriceLists");
var SalesPersons_1 = require("./SalesPersons");
var Warehouses_1 = require("./Warehouses");
var JournalEntries_1 = require("./JournalEntries");
var BusinessPlaces_1 = require("./BusinessPlaces");
(function (StockTransfers) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.DOC_ENTRY = new core_1.NumberField('DocEntry', StockTransfers, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.SERIES = new core_1.NumberField('Series', StockTransfers, 'Edm.Int32');
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.PRINTED = new core_1.EnumField('Printed', StockTransfers);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.DOC_DATE = new core_1.DateField('DocDate', StockTransfers, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.DUE_DATE = new core_1.DateField('DueDate', StockTransfers, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.CARD_CODE = new core_1.StringField('CardCode', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.CARD_NAME = new core_1.StringField('CardName', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.ADDRESS = new core_1.StringField('Address', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.REFERENCE_1 = new core_1.StringField('Reference1', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.REFERENCE_2 = new core_1.StringField('Reference2', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.COMMENTS = new core_1.StringField('Comments', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.JOURNAL_MEMO = new core_1.StringField('JournalMemo', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[priceList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.PRICE_LIST = new core_1.NumberField('PriceList', StockTransfers, 'Edm.Int32');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', StockTransfers, 'Edm.Int32');
    /**
     * Static representation of the [[fromWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.FROM_WAREHOUSE = new core_1.StringField('FromWarehouse', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[toWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.TO_WAREHOUSE = new core_1.StringField('ToWarehouse', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.CREATION_DATE = new core_1.DateField('CreationDate', StockTransfers, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.UPDATE_DATE = new core_1.DateField('UpdateDate', StockTransfers, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', StockTransfers, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.TRANS_NUM = new core_1.NumberField('TransNum', StockTransfers, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.DOC_NUM = new core_1.NumberField('DocNum', StockTransfers, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.TAX_DATE = new core_1.DateField('TaxDate', StockTransfers, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.CONTACT_PERSON = new core_1.NumberField('ContactPerson', StockTransfers, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', StockTransfers, 'Edm.Int32');
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.DOC_OBJECT_CODE = new core_1.StringField('DocObjectCode', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', StockTransfers);
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.BPLID = new core_1.NumberField('BPLID', StockTransfers, 'Edm.Int32');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.BPL_NAME = new core_1.StringField('BPLName', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.VAT_REG_NUM = new core_1.StringField('VATRegNum', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', StockTransfers, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', StockTransfers, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', StockTransfers, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', StockTransfers, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', StockTransfers, 'Edm.Int32');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', StockTransfers);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.LETTER = new core_1.EnumField('Letter', StockTransfers);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', StockTransfers, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', StockTransfers, 'Edm.Int32');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', StockTransfers, 'Edm.Int32');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', StockTransfers);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.SHIP_TO_CODE = new core_1.StringField('ShipToCode', StockTransfers, 'Edm.String');
    /**
     * Static representation of the [[stockTransferApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.STOCK_TRANSFER_APPROVAL_REQUESTS = new core_1.CollectionField('StockTransfer_ApprovalRequests', StockTransfers, StockTransferApprovalRequest_1.StockTransferApprovalRequest);
    /**
     * Static representation of the [[stockTransferLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.STOCK_TRANSFER_LINES = new core_1.CollectionField('StockTransferLines', StockTransfers, StockTransferLine_1.StockTransferLine);
    /**
     * Static representation of the [[stockTransferTaxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.STOCK_TRANSFER_TAX_EXTENSION = new StockTransferTaxExtension_1.StockTransferTaxExtensionField('StockTransferTaxExtension', StockTransfers);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', StockTransfers, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[priceList2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.PRICE_LIST_2 = new core_1.OneToOneLink('PriceList2', StockTransfers, PriceLists_1.PriceLists);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', StockTransfers, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[warehouse]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.WAREHOUSE = new core_1.OneToOneLink('Warehouse', StockTransfers, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', StockTransfers, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransfers.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', StockTransfers, BusinessPlaces_1.BusinessPlaces);
    /**
     * All fields of the StockTransfers entity.
     */
    StockTransfers._allFields = [
        StockTransfers.DOC_ENTRY,
        StockTransfers.SERIES,
        StockTransfers.PRINTED,
        StockTransfers.DOC_DATE,
        StockTransfers.DUE_DATE,
        StockTransfers.CARD_CODE,
        StockTransfers.CARD_NAME,
        StockTransfers.ADDRESS,
        StockTransfers.REFERENCE_1,
        StockTransfers.REFERENCE_2,
        StockTransfers.COMMENTS,
        StockTransfers.JOURNAL_MEMO,
        StockTransfers.PRICE_LIST,
        StockTransfers.SALES_PERSON_CODE,
        StockTransfers.FROM_WAREHOUSE,
        StockTransfers.TO_WAREHOUSE,
        StockTransfers.CREATION_DATE,
        StockTransfers.UPDATE_DATE,
        StockTransfers.FINANCIAL_PERIOD,
        StockTransfers.TRANS_NUM,
        StockTransfers.DOC_NUM,
        StockTransfers.TAX_DATE,
        StockTransfers.CONTACT_PERSON,
        StockTransfers.FOLIO_PREFIX_STRING,
        StockTransfers.FOLIO_NUMBER,
        StockTransfers.DOC_OBJECT_CODE,
        StockTransfers.AUTHORIZATION_STATUS,
        StockTransfers.BPLID,
        StockTransfers.BPL_NAME,
        StockTransfers.VAT_REG_NUM,
        StockTransfers.AUTHORIZATION_CODE,
        StockTransfers.START_DELIVERY_DATE,
        StockTransfers.START_DELIVERY_TIME,
        StockTransfers.END_DELIVERY_DATE,
        StockTransfers.END_DELIVERY_TIME,
        StockTransfers.VEHICLE_PLATE,
        StockTransfers.AT_DOCUMENT_TYPE,
        StockTransfers.E_DOC_EXPORT_FORMAT,
        StockTransfers.ELEC_COMM_STATUS,
        StockTransfers.ELEC_COMM_MESSAGE,
        StockTransfers.POINT_OF_ISSUE_CODE,
        StockTransfers.LETTER,
        StockTransfers.FOLIO_NUMBER_FROM,
        StockTransfers.FOLIO_NUMBER_TO,
        StockTransfers.ATTACHMENT_ENTRY,
        StockTransfers.DOCUMENT_STATUS,
        StockTransfers.SHIP_TO_CODE,
        StockTransfers.STOCK_TRANSFER_APPROVAL_REQUESTS,
        StockTransfers.STOCK_TRANSFER_LINES,
        StockTransfers.STOCK_TRANSFER_TAX_EXTENSION,
        StockTransfers.BUSINESS_PARTNER,
        StockTransfers.PRICE_LIST_2,
        StockTransfers.SALES_PERSON,
        StockTransfers.WAREHOUSE,
        StockTransfers.JOURNAL_ENTRY,
        StockTransfers.BUSINESS_PLACE
    ];
    /**
     * All fields selector.
     */
    StockTransfers.ALL_FIELDS = new core_1.AllFields('*', StockTransfers);
    /**
     * All key fields of the StockTransfers entity.
     */
    StockTransfers._keyFields = [StockTransfers.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property StockTransfers.
     */
    StockTransfers._keys = StockTransfers._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(StockTransfers = exports.StockTransfers || (exports.StockTransfers = {}));
exports.StockTransfers = StockTransfers;
//# sourceMappingURL=StockTransfers.js.map