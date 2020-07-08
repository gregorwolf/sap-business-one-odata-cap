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
exports.AssetManualDepreciation = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AssetManualDepreciationRequestBuilder_1 = require("./AssetManualDepreciationRequestBuilder");
var AssetDocumentLine_1 = require("./AssetDocumentLine");
var AssetDocumentAreaJournal_1 = require("./AssetDocumentAreaJournal");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "AssetManualDepreciation" of service "SAPB1".
 */
var AssetManualDepreciation = /** @class */ (function (_super) {
    __extends(AssetManualDepreciation, _super);
    function AssetManualDepreciation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AssetManualDepreciation`.
     * @returns A builder that constructs instances of entity type `AssetManualDepreciation`.
     */
    AssetManualDepreciation.builder = function () {
        return v4_1.Entity.entityBuilder(AssetManualDepreciation);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AssetManualDepreciation` entity type.
     * @returns A `AssetManualDepreciation` request builder.
     */
    AssetManualDepreciation.requestBuilder = function () {
        return new AssetManualDepreciationRequestBuilder_1.AssetManualDepreciationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetManualDepreciation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AssetManualDepreciation`.
     */
    AssetManualDepreciation.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, AssetManualDepreciation);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AssetManualDepreciation.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AssetManualDepreciation.
     */
    AssetManualDepreciation._entityName = 'AssetManualDepreciation';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AssetManualDepreciation.
     */
    AssetManualDepreciation._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    AssetManualDepreciation._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AssetManualDepreciation;
}(v4_1.Entity));
exports.AssetManualDepreciation = AssetManualDepreciation;
var Currencies_1 = require("./Currencies");
var DepreciationTypes_1 = require("./DepreciationTypes");
var DepreciationAreas_1 = require("./DepreciationAreas");
var BusinessPlaces_1 = require("./BusinessPlaces");
(function (AssetManualDepreciation) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.DOC_ENTRY = new v4_1.NumberField('DocEntry', AssetManualDepreciation, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.DOC_NUM = new v4_1.NumberField('DocNum', AssetManualDepreciation, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.SERIES = new v4_1.NumberField('Series', AssetManualDepreciation, 'Edm.Int32');
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.POSTING_DATE = new v4_1.DateField('PostingDate', AssetManualDepreciation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.DOCUMENT_DATE = new v4_1.DateField('DocumentDate', AssetManualDepreciation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.REMARKS = new v4_1.StringField('Remarks', AssetManualDepreciation, 'Edm.String');
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.REFERENCE = new v4_1.StringField('Reference', AssetManualDepreciation, 'Edm.String');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.CURRENCY = new v4_1.StringField('Currency', AssetManualDepreciation, 'Edm.String');
    /**
     * Static representation of the [[documentRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.DOCUMENT_RATE = new v4_1.NumberField('DocumentRate', AssetManualDepreciation, 'Edm.Double');
    /**
     * Static representation of the [[documentTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.DOCUMENT_TOTAL = new v4_1.NumberField('DocumentTotal', AssetManualDepreciation, 'Edm.Double');
    /**
     * Static representation of the [[documentTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.DOCUMENT_TOTAL_FC = new v4_1.NumberField('DocumentTotalFC', AssetManualDepreciation, 'Edm.Double');
    /**
     * Static representation of the [[documentTotalSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.DOCUMENT_TOTAL_SC = new v4_1.NumberField('DocumentTotalSC', AssetManualDepreciation, 'Edm.Double');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', AssetManualDepreciation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[manualDepreciationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.MANUAL_DEPRECIATION_TYPE = new v4_1.StringField('ManualDepreciationType', AssetManualDepreciation, 'Edm.String');
    /**
     * Static representation of the [[cancellationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.CANCELLATION_DATE = new v4_1.DateField('CancellationDate', AssetManualDepreciation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[depreciationArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.DEPRECIATION_AREA = new v4_1.StringField('DepreciationArea', AssetManualDepreciation, 'Edm.String');
    /**
     * Static representation of the [[bplId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.BPL_ID = new v4_1.NumberField('BPLId', AssetManualDepreciation, 'Edm.Int32');
    /**
     * Static representation of the [[origin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.ORIGIN = new v4_1.NumberField('Origin', AssetManualDepreciation, 'Edm.Int32');
    /**
     * Static representation of the [[baseReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.BASE_REFERENCE = new v4_1.StringField('BaseReference', AssetManualDepreciation, 'Edm.String');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.BPL_NAME = new v4_1.StringField('BPLName', AssetManualDepreciation, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.VAT_REG_NUM = new v4_1.StringField('VATRegNum', AssetManualDepreciation, 'Edm.String');
    /**
     * Static representation of the [[assetDocumentLineCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.ASSET_DOCUMENT_LINE_COLLECTION = new v4_1.CollectionField('AssetDocumentLineCollection', AssetManualDepreciation, new AssetDocumentLine_1.AssetDocumentLineField('', AssetManualDepreciation));
    /**
     * Static representation of the [[assetDocumentAreaJournalCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION = new v4_1.CollectionField('AssetDocumentAreaJournalCollection', AssetManualDepreciation, new AssetDocumentAreaJournal_1.AssetDocumentAreaJournalField('', AssetManualDepreciation));
    /**
     * Static representation of the one-to-one navigation property [[currency2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.CURRENCY_2 = new v4_1.OneToOneLink('Currency2', AssetManualDepreciation, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[depreciationType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.DEPRECIATION_TYPE = new v4_1.OneToOneLink('DepreciationType', AssetManualDepreciation, DepreciationTypes_1.DepreciationTypes);
    /**
     * Static representation of the one-to-one navigation property [[depreciationArea2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.DEPRECIATION_AREA_2 = new v4_1.OneToOneLink('DepreciationArea2', AssetManualDepreciation, DepreciationAreas_1.DepreciationAreas);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetManualDepreciation.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', AssetManualDepreciation, BusinessPlaces_1.BusinessPlaces);
    /**
     * All fields of the AssetManualDepreciation entity.
     */
    AssetManualDepreciation._allFields = [
        AssetManualDepreciation.DOC_ENTRY,
        AssetManualDepreciation.DOC_NUM,
        AssetManualDepreciation.SERIES,
        AssetManualDepreciation.POSTING_DATE,
        AssetManualDepreciation.DOCUMENT_DATE,
        AssetManualDepreciation.REMARKS,
        AssetManualDepreciation.REFERENCE,
        AssetManualDepreciation.CURRENCY,
        AssetManualDepreciation.DOCUMENT_RATE,
        AssetManualDepreciation.DOCUMENT_TOTAL,
        AssetManualDepreciation.DOCUMENT_TOTAL_FC,
        AssetManualDepreciation.DOCUMENT_TOTAL_SC,
        AssetManualDepreciation.ASSET_VALUE_DATE,
        AssetManualDepreciation.MANUAL_DEPRECIATION_TYPE,
        AssetManualDepreciation.CANCELLATION_DATE,
        AssetManualDepreciation.DEPRECIATION_AREA,
        AssetManualDepreciation.BPL_ID,
        AssetManualDepreciation.ORIGIN,
        AssetManualDepreciation.BASE_REFERENCE,
        AssetManualDepreciation.BPL_NAME,
        AssetManualDepreciation.VAT_REG_NUM,
        AssetManualDepreciation.ASSET_DOCUMENT_LINE_COLLECTION,
        AssetManualDepreciation.ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION,
        AssetManualDepreciation.CURRENCY_2,
        AssetManualDepreciation.DEPRECIATION_TYPE,
        AssetManualDepreciation.DEPRECIATION_AREA_2,
        AssetManualDepreciation.BUSINESS_PLACE
    ];
    /**
     * All fields selector.
     */
    AssetManualDepreciation.ALL_FIELDS = new v4_1.AllFields('*', AssetManualDepreciation);
    /**
     * All key fields of the AssetManualDepreciation entity.
     */
    AssetManualDepreciation._keyFields = [AssetManualDepreciation.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property AssetManualDepreciation.
     */
    AssetManualDepreciation._keys = AssetManualDepreciation._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AssetManualDepreciation = exports.AssetManualDepreciation || (exports.AssetManualDepreciation = {}));
exports.AssetManualDepreciation = AssetManualDepreciation;
//# sourceMappingURL=AssetManualDepreciation.js.map