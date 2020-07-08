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
exports.InventoryTransferRequests = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var InventoryTransferRequestsRequestBuilder_1 = require("./InventoryTransferRequestsRequestBuilder");
var StockTransferApprovalRequest_1 = require("./StockTransferApprovalRequest");
var StockTransferLine_1 = require("./StockTransferLine");
var StockTransferTaxExtension_1 = require("./StockTransferTaxExtension");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "InventoryTransferRequests" of service "SAPB1".
 */
var InventoryTransferRequests = /** @class */ (function (_super) {
    __extends(InventoryTransferRequests, _super);
    function InventoryTransferRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `InventoryTransferRequests`.
     * @returns A builder that constructs instances of entity type `InventoryTransferRequests`.
     */
    InventoryTransferRequests.builder = function () {
        return v4_1.Entity.entityBuilder(InventoryTransferRequests);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InventoryTransferRequests` entity type.
     * @returns A `InventoryTransferRequests` request builder.
     */
    InventoryTransferRequests.requestBuilder = function () {
        return new InventoryTransferRequestsRequestBuilder_1.InventoryTransferRequestsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryTransferRequests`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InventoryTransferRequests`.
     */
    InventoryTransferRequests.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, InventoryTransferRequests);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InventoryTransferRequests.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InventoryTransferRequests.
     */
    InventoryTransferRequests._entityName = 'InventoryTransferRequests';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InventoryTransferRequests.
     */
    InventoryTransferRequests._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    InventoryTransferRequests._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return InventoryTransferRequests;
}(v4_1.Entity));
exports.InventoryTransferRequests = InventoryTransferRequests;
var BusinessPartners_1 = require("./BusinessPartners");
var PaymentTermsTypes_1 = require("./PaymentTermsTypes");
var SalesPersons_1 = require("./SalesPersons");
var Warehouses_1 = require("./Warehouses");
var BusinessPlaces_1 = require("./BusinessPlaces");
(function (InventoryTransferRequests) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.DOC_ENTRY = new v4_1.NumberField('DocEntry', InventoryTransferRequests, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.SERIES = new v4_1.NumberField('Series', InventoryTransferRequests, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.DOC_DATE = new v4_1.DateField('DocDate', InventoryTransferRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.DUE_DATE = new v4_1.DateField('DueDate', InventoryTransferRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.CARD_CODE = new v4_1.StringField('CardCode', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.CARD_NAME = new v4_1.StringField('CardName', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.ADDRESS = new v4_1.StringField('Address', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.REFERENCE_1 = new v4_1.StringField('Reference1', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.REFERENCE_2 = new v4_1.StringField('Reference2', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.COMMENTS = new v4_1.StringField('Comments', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.JOURNAL_MEMO = new v4_1.StringField('JournalMemo', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[priceList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.PRICE_LIST = new v4_1.NumberField('PriceList', InventoryTransferRequests, 'Edm.Int32');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.SALES_PERSON_CODE = new v4_1.NumberField('SalesPersonCode', InventoryTransferRequests, 'Edm.Int32');
    /**
     * Static representation of the [[fromWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.FROM_WAREHOUSE = new v4_1.StringField('FromWarehouse', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[toWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.TO_WAREHOUSE = new v4_1.StringField('ToWarehouse', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.CREATION_DATE = new v4_1.DateField('CreationDate', InventoryTransferRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.UPDATE_DATE = new v4_1.DateField('UpdateDate', InventoryTransferRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.FINANCIAL_PERIOD = new v4_1.NumberField('FinancialPeriod', InventoryTransferRequests, 'Edm.Int32');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.TRANS_NUM = new v4_1.NumberField('TransNum', InventoryTransferRequests, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.DOC_NUM = new v4_1.NumberField('DocNum', InventoryTransferRequests, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.TAX_DATE = new v4_1.DateField('TaxDate', InventoryTransferRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.CONTACT_PERSON = new v4_1.NumberField('ContactPerson', InventoryTransferRequests, 'Edm.Int32');
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.FOLIO_PREFIX_STRING = new v4_1.StringField('FolioPrefixString', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.FOLIO_NUMBER = new v4_1.NumberField('FolioNumber', InventoryTransferRequests, 'Edm.Int32');
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.DOC_OBJECT_CODE = new v4_1.StringField('DocObjectCode', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.BPLID = new v4_1.NumberField('BPLID', InventoryTransferRequests, 'Edm.Int32');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.BPL_NAME = new v4_1.StringField('BPLName', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.VAT_REG_NUM = new v4_1.StringField('VATRegNum', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.AUTHORIZATION_CODE = new v4_1.StringField('AuthorizationCode', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.START_DELIVERY_DATE = new v4_1.DateField('StartDeliveryDate', InventoryTransferRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.START_DELIVERY_TIME = new v4_1.TimeField('StartDeliveryTime', InventoryTransferRequests, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.END_DELIVERY_DATE = new v4_1.DateField('EndDeliveryDate', InventoryTransferRequests, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.END_DELIVERY_TIME = new v4_1.TimeField('EndDeliveryTime', InventoryTransferRequests, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.VEHICLE_PLATE = new v4_1.StringField('VehiclePlate', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.AT_DOCUMENT_TYPE = new v4_1.StringField('ATDocumentType', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.E_DOC_EXPORT_FORMAT = new v4_1.NumberField('EDocExportFormat', InventoryTransferRequests, 'Edm.Int32');
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.ELEC_COMM_MESSAGE = new v4_1.StringField('ElecCommMessage', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.POINT_OF_ISSUE_CODE = new v4_1.StringField('PointOfIssueCode', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.FOLIO_NUMBER_FROM = new v4_1.NumberField('FolioNumberFrom', InventoryTransferRequests, 'Edm.Int32');
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.FOLIO_NUMBER_TO = new v4_1.NumberField('FolioNumberTo', InventoryTransferRequests, 'Edm.Int32');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', InventoryTransferRequests, 'Edm.Int32');
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.SHIP_TO_CODE = new v4_1.StringField('ShipToCode', InventoryTransferRequests, 'Edm.String');
    /**
     * Static representation of the [[stockTransferApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.STOCK_TRANSFER_APPROVAL_REQUESTS = new v4_1.CollectionField('StockTransfer_ApprovalRequests', InventoryTransferRequests, new StockTransferApprovalRequest_1.StockTransferApprovalRequestField('', InventoryTransferRequests));
    /**
     * Static representation of the [[stockTransferLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.STOCK_TRANSFER_LINES = new v4_1.CollectionField('StockTransferLines', InventoryTransferRequests, new StockTransferLine_1.StockTransferLineField('', InventoryTransferRequests));
    /**
     * Static representation of the [[stockTransferTaxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.STOCK_TRANSFER_TAX_EXTENSION = new StockTransferTaxExtension_1.StockTransferTaxExtensionField('StockTransferTaxExtension', InventoryTransferRequests);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', InventoryTransferRequests, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[paymentTermsType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.PAYMENT_TERMS_TYPE = new v4_1.OneToOneLink('PaymentTermsType', InventoryTransferRequests, PaymentTermsTypes_1.PaymentTermsTypes);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.SALES_PERSON = new v4_1.OneToOneLink('SalesPerson', InventoryTransferRequests, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[warehouse]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.WAREHOUSE = new v4_1.OneToOneLink('Warehouse', InventoryTransferRequests, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryTransferRequests.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', InventoryTransferRequests, BusinessPlaces_1.BusinessPlaces);
    /**
     * All fields of the InventoryTransferRequests entity.
     */
    InventoryTransferRequests._allFields = [
        InventoryTransferRequests.DOC_ENTRY,
        InventoryTransferRequests.SERIES,
        InventoryTransferRequests.DOC_DATE,
        InventoryTransferRequests.DUE_DATE,
        InventoryTransferRequests.CARD_CODE,
        InventoryTransferRequests.CARD_NAME,
        InventoryTransferRequests.ADDRESS,
        InventoryTransferRequests.REFERENCE_1,
        InventoryTransferRequests.REFERENCE_2,
        InventoryTransferRequests.COMMENTS,
        InventoryTransferRequests.JOURNAL_MEMO,
        InventoryTransferRequests.PRICE_LIST,
        InventoryTransferRequests.SALES_PERSON_CODE,
        InventoryTransferRequests.FROM_WAREHOUSE,
        InventoryTransferRequests.TO_WAREHOUSE,
        InventoryTransferRequests.CREATION_DATE,
        InventoryTransferRequests.UPDATE_DATE,
        InventoryTransferRequests.FINANCIAL_PERIOD,
        InventoryTransferRequests.TRANS_NUM,
        InventoryTransferRequests.DOC_NUM,
        InventoryTransferRequests.TAX_DATE,
        InventoryTransferRequests.CONTACT_PERSON,
        InventoryTransferRequests.FOLIO_PREFIX_STRING,
        InventoryTransferRequests.FOLIO_NUMBER,
        InventoryTransferRequests.DOC_OBJECT_CODE,
        InventoryTransferRequests.BPLID,
        InventoryTransferRequests.BPL_NAME,
        InventoryTransferRequests.VAT_REG_NUM,
        InventoryTransferRequests.AUTHORIZATION_CODE,
        InventoryTransferRequests.START_DELIVERY_DATE,
        InventoryTransferRequests.START_DELIVERY_TIME,
        InventoryTransferRequests.END_DELIVERY_DATE,
        InventoryTransferRequests.END_DELIVERY_TIME,
        InventoryTransferRequests.VEHICLE_PLATE,
        InventoryTransferRequests.AT_DOCUMENT_TYPE,
        InventoryTransferRequests.E_DOC_EXPORT_FORMAT,
        InventoryTransferRequests.ELEC_COMM_MESSAGE,
        InventoryTransferRequests.POINT_OF_ISSUE_CODE,
        InventoryTransferRequests.FOLIO_NUMBER_FROM,
        InventoryTransferRequests.FOLIO_NUMBER_TO,
        InventoryTransferRequests.ATTACHMENT_ENTRY,
        InventoryTransferRequests.SHIP_TO_CODE,
        InventoryTransferRequests.STOCK_TRANSFER_APPROVAL_REQUESTS,
        InventoryTransferRequests.STOCK_TRANSFER_LINES,
        InventoryTransferRequests.STOCK_TRANSFER_TAX_EXTENSION,
        InventoryTransferRequests.BUSINESS_PARTNER,
        InventoryTransferRequests.PAYMENT_TERMS_TYPE,
        InventoryTransferRequests.SALES_PERSON,
        InventoryTransferRequests.WAREHOUSE,
        InventoryTransferRequests.BUSINESS_PLACE
    ];
    /**
     * All fields selector.
     */
    InventoryTransferRequests.ALL_FIELDS = new v4_1.AllFields('*', InventoryTransferRequests);
    /**
     * All key fields of the InventoryTransferRequests entity.
     */
    InventoryTransferRequests._keyFields = [InventoryTransferRequests.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property InventoryTransferRequests.
     */
    InventoryTransferRequests._keys = InventoryTransferRequests._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InventoryTransferRequests = exports.InventoryTransferRequests || (exports.InventoryTransferRequests = {}));
exports.InventoryTransferRequests = InventoryTransferRequests;
//# sourceMappingURL=InventoryTransferRequests.js.map