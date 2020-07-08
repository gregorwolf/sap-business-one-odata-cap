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
exports.AssetTransfer = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AssetTransferRequestBuilder_1 = require("./AssetTransferRequestBuilder");
var AssetDocumentLine_1 = require("./AssetDocumentLine");
var AssetDocumentAreaJournal_1 = require("./AssetDocumentAreaJournal");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "AssetTransfer" of service "SAPB1".
 */
var AssetTransfer = /** @class */ (function (_super) {
    __extends(AssetTransfer, _super);
    function AssetTransfer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AssetTransfer`.
     * @returns A builder that constructs instances of entity type `AssetTransfer`.
     */
    AssetTransfer.builder = function () {
        return v4_1.Entity.entityBuilder(AssetTransfer);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AssetTransfer` entity type.
     * @returns A `AssetTransfer` request builder.
     */
    AssetTransfer.requestBuilder = function () {
        return new AssetTransferRequestBuilder_1.AssetTransferRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetTransfer`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AssetTransfer`.
     */
    AssetTransfer.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, AssetTransfer);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AssetTransfer.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AssetTransfer.
     */
    AssetTransfer._entityName = 'AssetTransfer';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AssetTransfer.
     */
    AssetTransfer._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    AssetTransfer._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AssetTransfer;
}(v4_1.Entity));
exports.AssetTransfer = AssetTransfer;
var Currencies_1 = require("./Currencies");
var DepreciationTypes_1 = require("./DepreciationTypes");
var DepreciationAreas_1 = require("./DepreciationAreas");
var BusinessPlaces_1 = require("./BusinessPlaces");
(function (AssetTransfer) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.DOC_ENTRY = new v4_1.NumberField('DocEntry', AssetTransfer, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.DOC_NUM = new v4_1.NumberField('DocNum', AssetTransfer, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.SERIES = new v4_1.NumberField('Series', AssetTransfer, 'Edm.Int32');
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.POSTING_DATE = new v4_1.DateField('PostingDate', AssetTransfer, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.DOCUMENT_DATE = new v4_1.DateField('DocumentDate', AssetTransfer, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.REMARKS = new v4_1.StringField('Remarks', AssetTransfer, 'Edm.String');
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.REFERENCE = new v4_1.StringField('Reference', AssetTransfer, 'Edm.String');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.CURRENCY = new v4_1.StringField('Currency', AssetTransfer, 'Edm.String');
    /**
     * Static representation of the [[documentRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.DOCUMENT_RATE = new v4_1.NumberField('DocumentRate', AssetTransfer, 'Edm.Double');
    /**
     * Static representation of the [[documentTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.DOCUMENT_TOTAL = new v4_1.NumberField('DocumentTotal', AssetTransfer, 'Edm.Double');
    /**
     * Static representation of the [[documentTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.DOCUMENT_TOTAL_FC = new v4_1.NumberField('DocumentTotalFC', AssetTransfer, 'Edm.Double');
    /**
     * Static representation of the [[documentTotalSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.DOCUMENT_TOTAL_SC = new v4_1.NumberField('DocumentTotalSC', AssetTransfer, 'Edm.Double');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', AssetTransfer, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[manualDepreciationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.MANUAL_DEPRECIATION_TYPE = new v4_1.StringField('ManualDepreciationType', AssetTransfer, 'Edm.String');
    /**
     * Static representation of the [[cancellationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.CANCELLATION_DATE = new v4_1.DateField('CancellationDate', AssetTransfer, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[depreciationArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.DEPRECIATION_AREA = new v4_1.StringField('DepreciationArea', AssetTransfer, 'Edm.String');
    /**
     * Static representation of the [[bplId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.BPL_ID = new v4_1.NumberField('BPLId', AssetTransfer, 'Edm.Int32');
    /**
     * Static representation of the [[origin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.ORIGIN = new v4_1.NumberField('Origin', AssetTransfer, 'Edm.Int32');
    /**
     * Static representation of the [[baseReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.BASE_REFERENCE = new v4_1.StringField('BaseReference', AssetTransfer, 'Edm.String');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.BPL_NAME = new v4_1.StringField('BPLName', AssetTransfer, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.VAT_REG_NUM = new v4_1.StringField('VATRegNum', AssetTransfer, 'Edm.String');
    /**
     * Static representation of the [[assetDocumentLineCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.ASSET_DOCUMENT_LINE_COLLECTION = new v4_1.CollectionField('AssetDocumentLineCollection', AssetTransfer, new AssetDocumentLine_1.AssetDocumentLineField('', AssetTransfer));
    /**
     * Static representation of the [[assetDocumentAreaJournalCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION = new v4_1.CollectionField('AssetDocumentAreaJournalCollection', AssetTransfer, new AssetDocumentAreaJournal_1.AssetDocumentAreaJournalField('', AssetTransfer));
    /**
     * Static representation of the one-to-one navigation property [[currency2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.CURRENCY_2 = new v4_1.OneToOneLink('Currency2', AssetTransfer, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[depreciationType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.DEPRECIATION_TYPE = new v4_1.OneToOneLink('DepreciationType', AssetTransfer, DepreciationTypes_1.DepreciationTypes);
    /**
     * Static representation of the one-to-one navigation property [[depreciationArea2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.DEPRECIATION_AREA_2 = new v4_1.OneToOneLink('DepreciationArea2', AssetTransfer, DepreciationAreas_1.DepreciationAreas);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetTransfer.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', AssetTransfer, BusinessPlaces_1.BusinessPlaces);
    /**
     * All fields of the AssetTransfer entity.
     */
    AssetTransfer._allFields = [
        AssetTransfer.DOC_ENTRY,
        AssetTransfer.DOC_NUM,
        AssetTransfer.SERIES,
        AssetTransfer.POSTING_DATE,
        AssetTransfer.DOCUMENT_DATE,
        AssetTransfer.REMARKS,
        AssetTransfer.REFERENCE,
        AssetTransfer.CURRENCY,
        AssetTransfer.DOCUMENT_RATE,
        AssetTransfer.DOCUMENT_TOTAL,
        AssetTransfer.DOCUMENT_TOTAL_FC,
        AssetTransfer.DOCUMENT_TOTAL_SC,
        AssetTransfer.ASSET_VALUE_DATE,
        AssetTransfer.MANUAL_DEPRECIATION_TYPE,
        AssetTransfer.CANCELLATION_DATE,
        AssetTransfer.DEPRECIATION_AREA,
        AssetTransfer.BPL_ID,
        AssetTransfer.ORIGIN,
        AssetTransfer.BASE_REFERENCE,
        AssetTransfer.BPL_NAME,
        AssetTransfer.VAT_REG_NUM,
        AssetTransfer.ASSET_DOCUMENT_LINE_COLLECTION,
        AssetTransfer.ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION,
        AssetTransfer.CURRENCY_2,
        AssetTransfer.DEPRECIATION_TYPE,
        AssetTransfer.DEPRECIATION_AREA_2,
        AssetTransfer.BUSINESS_PLACE
    ];
    /**
     * All fields selector.
     */
    AssetTransfer.ALL_FIELDS = new v4_1.AllFields('*', AssetTransfer);
    /**
     * All key fields of the AssetTransfer entity.
     */
    AssetTransfer._keyFields = [AssetTransfer.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property AssetTransfer.
     */
    AssetTransfer._keys = AssetTransfer._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AssetTransfer = exports.AssetTransfer || (exports.AssetTransfer = {}));
exports.AssetTransfer = AssetTransfer;
//# sourceMappingURL=AssetTransfer.js.map