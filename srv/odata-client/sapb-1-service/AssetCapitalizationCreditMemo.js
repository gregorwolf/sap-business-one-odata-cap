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
exports.AssetCapitalizationCreditMemo = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AssetCapitalizationCreditMemoRequestBuilder_1 = require("./AssetCapitalizationCreditMemoRequestBuilder");
var AssetDocumentLine_1 = require("./AssetDocumentLine");
var AssetDocumentAreaJournal_1 = require("./AssetDocumentAreaJournal");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "AssetCapitalizationCreditMemo" of service "SAPB1".
 */
var AssetCapitalizationCreditMemo = /** @class */ (function (_super) {
    __extends(AssetCapitalizationCreditMemo, _super);
    function AssetCapitalizationCreditMemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AssetCapitalizationCreditMemo`.
     * @returns A builder that constructs instances of entity type `AssetCapitalizationCreditMemo`.
     */
    AssetCapitalizationCreditMemo.builder = function () {
        return v4_1.Entity.entityBuilder(AssetCapitalizationCreditMemo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AssetCapitalizationCreditMemo` entity type.
     * @returns A `AssetCapitalizationCreditMemo` request builder.
     */
    AssetCapitalizationCreditMemo.requestBuilder = function () {
        return new AssetCapitalizationCreditMemoRequestBuilder_1.AssetCapitalizationCreditMemoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetCapitalizationCreditMemo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AssetCapitalizationCreditMemo`.
     */
    AssetCapitalizationCreditMemo.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, AssetCapitalizationCreditMemo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AssetCapitalizationCreditMemo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AssetCapitalizationCreditMemo.
     */
    AssetCapitalizationCreditMemo._entityName = 'AssetCapitalizationCreditMemo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AssetCapitalizationCreditMemo.
     */
    AssetCapitalizationCreditMemo._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    AssetCapitalizationCreditMemo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AssetCapitalizationCreditMemo;
}(v4_1.Entity));
exports.AssetCapitalizationCreditMemo = AssetCapitalizationCreditMemo;
var Currencies_1 = require("./Currencies");
var DepreciationTypes_1 = require("./DepreciationTypes");
var DepreciationAreas_1 = require("./DepreciationAreas");
var BusinessPlaces_1 = require("./BusinessPlaces");
(function (AssetCapitalizationCreditMemo) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.DOC_ENTRY = new v4_1.NumberField('DocEntry', AssetCapitalizationCreditMemo, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.DOC_NUM = new v4_1.NumberField('DocNum', AssetCapitalizationCreditMemo, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.SERIES = new v4_1.NumberField('Series', AssetCapitalizationCreditMemo, 'Edm.Int32');
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.POSTING_DATE = new v4_1.DateField('PostingDate', AssetCapitalizationCreditMemo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.DOCUMENT_DATE = new v4_1.DateField('DocumentDate', AssetCapitalizationCreditMemo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.REMARKS = new v4_1.StringField('Remarks', AssetCapitalizationCreditMemo, 'Edm.String');
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.REFERENCE = new v4_1.StringField('Reference', AssetCapitalizationCreditMemo, 'Edm.String');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.CURRENCY = new v4_1.StringField('Currency', AssetCapitalizationCreditMemo, 'Edm.String');
    /**
     * Static representation of the [[documentRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.DOCUMENT_RATE = new v4_1.NumberField('DocumentRate', AssetCapitalizationCreditMemo, 'Edm.Double');
    /**
     * Static representation of the [[documentTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.DOCUMENT_TOTAL = new v4_1.NumberField('DocumentTotal', AssetCapitalizationCreditMemo, 'Edm.Double');
    /**
     * Static representation of the [[documentTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.DOCUMENT_TOTAL_FC = new v4_1.NumberField('DocumentTotalFC', AssetCapitalizationCreditMemo, 'Edm.Double');
    /**
     * Static representation of the [[documentTotalSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.DOCUMENT_TOTAL_SC = new v4_1.NumberField('DocumentTotalSC', AssetCapitalizationCreditMemo, 'Edm.Double');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', AssetCapitalizationCreditMemo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[manualDepreciationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.MANUAL_DEPRECIATION_TYPE = new v4_1.StringField('ManualDepreciationType', AssetCapitalizationCreditMemo, 'Edm.String');
    /**
     * Static representation of the [[cancellationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.CANCELLATION_DATE = new v4_1.DateField('CancellationDate', AssetCapitalizationCreditMemo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[depreciationArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.DEPRECIATION_AREA = new v4_1.StringField('DepreciationArea', AssetCapitalizationCreditMemo, 'Edm.String');
    /**
     * Static representation of the [[bplId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.BPL_ID = new v4_1.NumberField('BPLId', AssetCapitalizationCreditMemo, 'Edm.Int32');
    /**
     * Static representation of the [[origin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.ORIGIN = new v4_1.NumberField('Origin', AssetCapitalizationCreditMemo, 'Edm.Int32');
    /**
     * Static representation of the [[baseReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.BASE_REFERENCE = new v4_1.StringField('BaseReference', AssetCapitalizationCreditMemo, 'Edm.String');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.BPL_NAME = new v4_1.StringField('BPLName', AssetCapitalizationCreditMemo, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.VAT_REG_NUM = new v4_1.StringField('VATRegNum', AssetCapitalizationCreditMemo, 'Edm.String');
    /**
     * Static representation of the [[assetDocumentLineCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.ASSET_DOCUMENT_LINE_COLLECTION = new v4_1.CollectionField('AssetDocumentLineCollection', AssetCapitalizationCreditMemo, new AssetDocumentLine_1.AssetDocumentLineField('', AssetCapitalizationCreditMemo));
    /**
     * Static representation of the [[assetDocumentAreaJournalCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION = new v4_1.CollectionField('AssetDocumentAreaJournalCollection', AssetCapitalizationCreditMemo, new AssetDocumentAreaJournal_1.AssetDocumentAreaJournalField('', AssetCapitalizationCreditMemo));
    /**
     * Static representation of the one-to-one navigation property [[currency2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.CURRENCY_2 = new v4_1.OneToOneLink('Currency2', AssetCapitalizationCreditMemo, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[depreciationType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.DEPRECIATION_TYPE = new v4_1.OneToOneLink('DepreciationType', AssetCapitalizationCreditMemo, DepreciationTypes_1.DepreciationTypes);
    /**
     * Static representation of the one-to-one navigation property [[depreciationArea2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.DEPRECIATION_AREA_2 = new v4_1.OneToOneLink('DepreciationArea2', AssetCapitalizationCreditMemo, DepreciationAreas_1.DepreciationAreas);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalizationCreditMemo.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', AssetCapitalizationCreditMemo, BusinessPlaces_1.BusinessPlaces);
    /**
     * All fields of the AssetCapitalizationCreditMemo entity.
     */
    AssetCapitalizationCreditMemo._allFields = [
        AssetCapitalizationCreditMemo.DOC_ENTRY,
        AssetCapitalizationCreditMemo.DOC_NUM,
        AssetCapitalizationCreditMemo.SERIES,
        AssetCapitalizationCreditMemo.POSTING_DATE,
        AssetCapitalizationCreditMemo.DOCUMENT_DATE,
        AssetCapitalizationCreditMemo.REMARKS,
        AssetCapitalizationCreditMemo.REFERENCE,
        AssetCapitalizationCreditMemo.CURRENCY,
        AssetCapitalizationCreditMemo.DOCUMENT_RATE,
        AssetCapitalizationCreditMemo.DOCUMENT_TOTAL,
        AssetCapitalizationCreditMemo.DOCUMENT_TOTAL_FC,
        AssetCapitalizationCreditMemo.DOCUMENT_TOTAL_SC,
        AssetCapitalizationCreditMemo.ASSET_VALUE_DATE,
        AssetCapitalizationCreditMemo.MANUAL_DEPRECIATION_TYPE,
        AssetCapitalizationCreditMemo.CANCELLATION_DATE,
        AssetCapitalizationCreditMemo.DEPRECIATION_AREA,
        AssetCapitalizationCreditMemo.BPL_ID,
        AssetCapitalizationCreditMemo.ORIGIN,
        AssetCapitalizationCreditMemo.BASE_REFERENCE,
        AssetCapitalizationCreditMemo.BPL_NAME,
        AssetCapitalizationCreditMemo.VAT_REG_NUM,
        AssetCapitalizationCreditMemo.ASSET_DOCUMENT_LINE_COLLECTION,
        AssetCapitalizationCreditMemo.ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION,
        AssetCapitalizationCreditMemo.CURRENCY_2,
        AssetCapitalizationCreditMemo.DEPRECIATION_TYPE,
        AssetCapitalizationCreditMemo.DEPRECIATION_AREA_2,
        AssetCapitalizationCreditMemo.BUSINESS_PLACE
    ];
    /**
     * All fields selector.
     */
    AssetCapitalizationCreditMemo.ALL_FIELDS = new v4_1.AllFields('*', AssetCapitalizationCreditMemo);
    /**
     * All key fields of the AssetCapitalizationCreditMemo entity.
     */
    AssetCapitalizationCreditMemo._keyFields = [AssetCapitalizationCreditMemo.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property AssetCapitalizationCreditMemo.
     */
    AssetCapitalizationCreditMemo._keys = AssetCapitalizationCreditMemo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AssetCapitalizationCreditMemo = exports.AssetCapitalizationCreditMemo || (exports.AssetCapitalizationCreditMemo = {}));
exports.AssetCapitalizationCreditMemo = AssetCapitalizationCreditMemo;
//# sourceMappingURL=AssetCapitalizationCreditMemo.js.map