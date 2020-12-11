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
exports.StockTransferDrafts = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var StockTransferDraftsRequestBuilder_1 = require("./StockTransferDraftsRequestBuilder");
var StockTransferApprovalRequest_1 = require("./StockTransferApprovalRequest");
var StockTransferLine_1 = require("./StockTransferLine");
var StockTransferTaxExtension_1 = require("./StockTransferTaxExtension");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "StockTransferDrafts" of service "SAPB1".
 */
var StockTransferDrafts = /** @class */ (function (_super) {
    __extends(StockTransferDrafts, _super);
    function StockTransferDrafts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `StockTransferDrafts`.
     * @returns A builder that constructs instances of entity type `StockTransferDrafts`.
     */
    StockTransferDrafts.builder = function () {
        return core_1.EntityV4.entityBuilder(StockTransferDrafts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `StockTransferDrafts` entity type.
     * @returns A `StockTransferDrafts` request builder.
     */
    StockTransferDrafts.requestBuilder = function () {
        return new StockTransferDraftsRequestBuilder_1.StockTransferDraftsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `StockTransferDrafts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `StockTransferDrafts`.
     */
    StockTransferDrafts.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, StockTransferDrafts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    StockTransferDrafts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for StockTransferDrafts.
     */
    StockTransferDrafts._entityName = 'StockTransferDrafts';
    /**
     * Default url path for the according service.
     */
    StockTransferDrafts._defaultServicePath = '/b1s/v2/';
    return StockTransferDrafts;
}(core_1.EntityV4));
exports.StockTransferDrafts = StockTransferDrafts;
var BusinessPartners_1 = require("./BusinessPartners");
var PaymentTermsTypes_1 = require("./PaymentTermsTypes");
var SalesPersons_1 = require("./SalesPersons");
var Warehouses_1 = require("./Warehouses");
var JournalEntries_1 = require("./JournalEntries");
var BusinessPlaces_1 = require("./BusinessPlaces");
(function (StockTransferDrafts) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.DOC_ENTRY = new core_1.NumberField('DocEntry', StockTransferDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.SERIES = new core_1.NumberField('Series', StockTransferDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.PRINTED = new core_1.EnumField('Printed', StockTransferDrafts);
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.DOC_DATE = new core_1.DateField('DocDate', StockTransferDrafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.DUE_DATE = new core_1.DateField('DueDate', StockTransferDrafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.CARD_CODE = new core_1.StringField('CardCode', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.CARD_NAME = new core_1.StringField('CardName', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.ADDRESS = new core_1.StringField('Address', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.REFERENCE_1 = new core_1.StringField('Reference1', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.REFERENCE_2 = new core_1.StringField('Reference2', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.COMMENTS = new core_1.StringField('Comments', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.JOURNAL_MEMO = new core_1.StringField('JournalMemo', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[priceList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.PRICE_LIST = new core_1.NumberField('PriceList', StockTransferDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', StockTransferDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[fromWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.FROM_WAREHOUSE = new core_1.StringField('FromWarehouse', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[toWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.TO_WAREHOUSE = new core_1.StringField('ToWarehouse', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.CREATION_DATE = new core_1.DateField('CreationDate', StockTransferDrafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.UPDATE_DATE = new core_1.DateField('UpdateDate', StockTransferDrafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', StockTransferDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.TRANS_NUM = new core_1.NumberField('TransNum', StockTransferDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.DOC_NUM = new core_1.NumberField('DocNum', StockTransferDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.TAX_DATE = new core_1.DateField('TaxDate', StockTransferDrafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.CONTACT_PERSON = new core_1.NumberField('ContactPerson', StockTransferDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.FOLIO_PREFIX_STRING = new core_1.StringField('FolioPrefixString', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.FOLIO_NUMBER = new core_1.NumberField('FolioNumber', StockTransferDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.DOC_OBJECT_CODE = new core_1.StringField('DocObjectCode', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.AUTHORIZATION_STATUS = new core_1.EnumField('AuthorizationStatus', StockTransferDrafts);
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.BPLID = new core_1.NumberField('BPLID', StockTransferDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.BPL_NAME = new core_1.StringField('BPLName', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.VAT_REG_NUM = new core_1.StringField('VATRegNum', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.AUTHORIZATION_CODE = new core_1.StringField('AuthorizationCode', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.START_DELIVERY_DATE = new core_1.DateField('StartDeliveryDate', StockTransferDrafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.START_DELIVERY_TIME = new core_1.TimeField('StartDeliveryTime', StockTransferDrafts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.END_DELIVERY_DATE = new core_1.DateField('EndDeliveryDate', StockTransferDrafts, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.END_DELIVERY_TIME = new core_1.TimeField('EndDeliveryTime', StockTransferDrafts, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.VEHICLE_PLATE = new core_1.StringField('VehiclePlate', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.AT_DOCUMENT_TYPE = new core_1.StringField('ATDocumentType', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.E_DOC_EXPORT_FORMAT = new core_1.NumberField('EDocExportFormat', StockTransferDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.ELEC_COMM_STATUS = new core_1.EnumField('ElecCommStatus', StockTransferDrafts);
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.ELEC_COMM_MESSAGE = new core_1.StringField('ElecCommMessage', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.POINT_OF_ISSUE_CODE = new core_1.StringField('PointOfIssueCode', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.LETTER = new core_1.EnumField('Letter', StockTransferDrafts);
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.FOLIO_NUMBER_FROM = new core_1.NumberField('FolioNumberFrom', StockTransferDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.FOLIO_NUMBER_TO = new core_1.NumberField('FolioNumberTo', StockTransferDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', StockTransferDrafts, 'Edm.Int32');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', StockTransferDrafts);
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.SHIP_TO_CODE = new core_1.StringField('ShipToCode', StockTransferDrafts, 'Edm.String');
    /**
     * Static representation of the [[stockTransferApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.STOCK_TRANSFER_APPROVAL_REQUESTS = new core_1.CollectionField('StockTransfer_ApprovalRequests', StockTransferDrafts, StockTransferApprovalRequest_1.StockTransferApprovalRequest);
    /**
     * Static representation of the [[stockTransferLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.STOCK_TRANSFER_LINES = new core_1.CollectionField('StockTransferLines', StockTransferDrafts, StockTransferLine_1.StockTransferLine);
    /**
     * Static representation of the [[stockTransferTaxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.STOCK_TRANSFER_TAX_EXTENSION = new StockTransferTaxExtension_1.StockTransferTaxExtensionField('StockTransferTaxExtension', StockTransferDrafts);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', StockTransferDrafts, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.PAYMENT_TERMS_TYPE = new core_1.OneToOneLink('PaymentTermsType', StockTransferDrafts, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', StockTransferDrafts, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[warehouse]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.WAREHOUSE = new core_1.OneToOneLink('Warehouse', StockTransferDrafts, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', StockTransferDrafts, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTransferDrafts.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', StockTransferDrafts, BusinessPlaces_1.BusinessPlaces);
    /**
     * All fields of the StockTransferDrafts entity.
     */
    StockTransferDrafts._allFields = [
        StockTransferDrafts.DOC_ENTRY,
        StockTransferDrafts.SERIES,
        StockTransferDrafts.PRINTED,
        StockTransferDrafts.DOC_DATE,
        StockTransferDrafts.DUE_DATE,
        StockTransferDrafts.CARD_CODE,
        StockTransferDrafts.CARD_NAME,
        StockTransferDrafts.ADDRESS,
        StockTransferDrafts.REFERENCE_1,
        StockTransferDrafts.REFERENCE_2,
        StockTransferDrafts.COMMENTS,
        StockTransferDrafts.JOURNAL_MEMO,
        StockTransferDrafts.PRICE_LIST,
        StockTransferDrafts.SALES_PERSON_CODE,
        StockTransferDrafts.FROM_WAREHOUSE,
        StockTransferDrafts.TO_WAREHOUSE,
        StockTransferDrafts.CREATION_DATE,
        StockTransferDrafts.UPDATE_DATE,
        StockTransferDrafts.FINANCIAL_PERIOD,
        StockTransferDrafts.TRANS_NUM,
        StockTransferDrafts.DOC_NUM,
        StockTransferDrafts.TAX_DATE,
        StockTransferDrafts.CONTACT_PERSON,
        StockTransferDrafts.FOLIO_PREFIX_STRING,
        StockTransferDrafts.FOLIO_NUMBER,
        StockTransferDrafts.DOC_OBJECT_CODE,
        StockTransferDrafts.AUTHORIZATION_STATUS,
        StockTransferDrafts.BPLID,
        StockTransferDrafts.BPL_NAME,
        StockTransferDrafts.VAT_REG_NUM,
        StockTransferDrafts.AUTHORIZATION_CODE,
        StockTransferDrafts.START_DELIVERY_DATE,
        StockTransferDrafts.START_DELIVERY_TIME,
        StockTransferDrafts.END_DELIVERY_DATE,
        StockTransferDrafts.END_DELIVERY_TIME,
        StockTransferDrafts.VEHICLE_PLATE,
        StockTransferDrafts.AT_DOCUMENT_TYPE,
        StockTransferDrafts.E_DOC_EXPORT_FORMAT,
        StockTransferDrafts.ELEC_COMM_STATUS,
        StockTransferDrafts.ELEC_COMM_MESSAGE,
        StockTransferDrafts.POINT_OF_ISSUE_CODE,
        StockTransferDrafts.LETTER,
        StockTransferDrafts.FOLIO_NUMBER_FROM,
        StockTransferDrafts.FOLIO_NUMBER_TO,
        StockTransferDrafts.ATTACHMENT_ENTRY,
        StockTransferDrafts.DOCUMENT_STATUS,
        StockTransferDrafts.SHIP_TO_CODE,
        StockTransferDrafts.STOCK_TRANSFER_APPROVAL_REQUESTS,
        StockTransferDrafts.STOCK_TRANSFER_LINES,
        StockTransferDrafts.STOCK_TRANSFER_TAX_EXTENSION,
        StockTransferDrafts.BUSINESS_PARTNER,
        StockTransferDrafts.PAYMENT_TERMS_TYPE,
        StockTransferDrafts.SALES_PERSON,
        StockTransferDrafts.WAREHOUSE,
        StockTransferDrafts.JOURNAL_ENTRY,
        StockTransferDrafts.BUSINESS_PLACE
    ];
    /**
     * All fields selector.
     */
    StockTransferDrafts.ALL_FIELDS = new core_1.AllFields('*', StockTransferDrafts);
    /**
     * All key fields of the StockTransferDrafts entity.
     */
    StockTransferDrafts._keyFields = [StockTransferDrafts.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property StockTransferDrafts.
     */
    StockTransferDrafts._keys = StockTransferDrafts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(StockTransferDrafts = exports.StockTransferDrafts || (exports.StockTransferDrafts = {}));
exports.StockTransferDrafts = StockTransferDrafts;
//# sourceMappingURL=StockTransferDrafts.js.map