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
exports.AssetCapitalization = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AssetCapitalizationRequestBuilder_1 = require("./AssetCapitalizationRequestBuilder");
var AssetDocumentLine_1 = require("./AssetDocumentLine");
var AssetDocumentAreaJournal_1 = require("./AssetDocumentAreaJournal");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AssetCapitalization" of service "SAPB1".
 */
var AssetCapitalization = /** @class */ (function (_super) {
    __extends(AssetCapitalization, _super);
    function AssetCapitalization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `AssetCapitalization`.
     * @returns A builder that constructs instances of entity type `AssetCapitalization`.
     */
    AssetCapitalization.builder = function () {
        return core_1.EntityV4.entityBuilder(AssetCapitalization);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AssetCapitalization` entity type.
     * @returns A `AssetCapitalization` request builder.
     */
    AssetCapitalization.requestBuilder = function () {
        return new AssetCapitalizationRequestBuilder_1.AssetCapitalizationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetCapitalization`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AssetCapitalization`.
     */
    AssetCapitalization.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, AssetCapitalization);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AssetCapitalization.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AssetCapitalization.
     */
    AssetCapitalization._entityName = 'AssetCapitalization';
    /**
     * Default url path for the according service.
     */
    AssetCapitalization._defaultServicePath = '/b1s/v2/';
    return AssetCapitalization;
}(core_1.EntityV4));
exports.AssetCapitalization = AssetCapitalization;
var Currencies_1 = require("./Currencies");
var DepreciationTypes_1 = require("./DepreciationTypes");
var DepreciationAreas_1 = require("./DepreciationAreas");
var BusinessPlaces_1 = require("./BusinessPlaces");
(function (AssetCapitalization) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.DOC_ENTRY = new core_1.NumberField('DocEntry', AssetCapitalization, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.DOC_NUM = new core_1.NumberField('DocNum', AssetCapitalization, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.SERIES = new core_1.NumberField('Series', AssetCapitalization, 'Edm.Int32');
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.POSTING_DATE = new core_1.DateField('PostingDate', AssetCapitalization, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.DOCUMENT_DATE = new core_1.DateField('DocumentDate', AssetCapitalization, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.STATUS = new core_1.EnumField('Status', AssetCapitalization);
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.REMARKS = new core_1.StringField('Remarks', AssetCapitalization, 'Edm.String');
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.REFERENCE = new core_1.StringField('Reference', AssetCapitalization, 'Edm.String');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.CURRENCY = new core_1.StringField('Currency', AssetCapitalization, 'Edm.String');
    /**
     * Static representation of the [[documentRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.DOCUMENT_RATE = new core_1.NumberField('DocumentRate', AssetCapitalization, 'Edm.Double');
    /**
     * Static representation of the [[documentTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.DOCUMENT_TOTAL = new core_1.NumberField('DocumentTotal', AssetCapitalization, 'Edm.Double');
    /**
     * Static representation of the [[documentTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.DOCUMENT_TOTAL_FC = new core_1.NumberField('DocumentTotalFC', AssetCapitalization, 'Edm.Double');
    /**
     * Static representation of the [[documentTotalSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.DOCUMENT_TOTAL_SC = new core_1.NumberField('DocumentTotalSC', AssetCapitalization, 'Edm.Double');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.ASSET_VALUE_DATE = new core_1.DateField('AssetValueDate', AssetCapitalization, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.DOCUMENT_TYPE = new core_1.EnumField('DocumentType', AssetCapitalization);
    /**
     * Static representation of the [[summerizeByProjects]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.SUMMERIZE_BY_PROJECTS = new core_1.EnumField('SummerizeByProjects', AssetCapitalization);
    /**
     * Static representation of the [[summerizeByDistributionRules]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.SUMMERIZE_BY_DISTRIBUTION_RULES = new core_1.EnumField('SummerizeByDistributionRules', AssetCapitalization);
    /**
     * Static representation of the [[manualDepreciationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.MANUAL_DEPRECIATION_TYPE = new core_1.StringField('ManualDepreciationType', AssetCapitalization, 'Edm.String');
    /**
     * Static representation of the [[handWritten]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.HAND_WRITTEN = new core_1.EnumField('HandWritten', AssetCapitalization);
    /**
     * Static representation of the [[cancellationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.CANCELLATION_DATE = new core_1.DateField('CancellationDate', AssetCapitalization, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[depreciationArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.DEPRECIATION_AREA = new core_1.StringField('DepreciationArea', AssetCapitalization, 'Edm.String');
    /**
     * Static representation of the [[bplId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.BPL_ID = new core_1.NumberField('BPLId', AssetCapitalization, 'Edm.Int32');
    /**
     * Static representation of the [[origin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.ORIGIN = new core_1.NumberField('Origin', AssetCapitalization, 'Edm.Int32');
    /**
     * Static representation of the [[lowValueAssetRetirement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.LOW_VALUE_ASSET_RETIREMENT = new core_1.EnumField('LowValueAssetRetirement', AssetCapitalization);
    /**
     * Static representation of the [[cancellationOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.CANCELLATION_OPTION = new core_1.EnumField('CancellationOption', AssetCapitalization);
    /**
     * Static representation of the [[originalType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.ORIGINAL_TYPE = new core_1.EnumField('OriginalType', AssetCapitalization);
    /**
     * Static representation of the [[baseReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.BASE_REFERENCE = new core_1.StringField('BaseReference', AssetCapitalization, 'Edm.String');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.BPL_NAME = new core_1.StringField('BPLName', AssetCapitalization, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.VAT_REG_NUM = new core_1.StringField('VATRegNum', AssetCapitalization, 'Edm.String');
    /**
     * Static representation of the [[assetDocumentLineCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.ASSET_DOCUMENT_LINE_COLLECTION = new core_1.CollectionField('AssetDocumentLineCollection', AssetCapitalization, AssetDocumentLine_1.AssetDocumentLine);
    /**
     * Static representation of the [[assetDocumentAreaJournalCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION = new core_1.CollectionField('AssetDocumentAreaJournalCollection', AssetCapitalization, AssetDocumentAreaJournal_1.AssetDocumentAreaJournal);
    /**
     * Static representation of the one-to-one navigation property [[currency2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.CURRENCY_2 = new core_1.OneToOneLink('Currency2', AssetCapitalization, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[depreciationType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.DEPRECIATION_TYPE = new core_1.OneToOneLink('DepreciationType', AssetCapitalization, DepreciationTypes_1.DepreciationTypes);
    /**
     * Static representation of the one-to-one navigation property [[depreciationArea2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.DEPRECIATION_AREA_2 = new core_1.OneToOneLink('DepreciationArea2', AssetCapitalization, DepreciationAreas_1.DepreciationAreas);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetCapitalization.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', AssetCapitalization, BusinessPlaces_1.BusinessPlaces);
    /**
     * All fields of the AssetCapitalization entity.
     */
    AssetCapitalization._allFields = [
        AssetCapitalization.DOC_ENTRY,
        AssetCapitalization.DOC_NUM,
        AssetCapitalization.SERIES,
        AssetCapitalization.POSTING_DATE,
        AssetCapitalization.DOCUMENT_DATE,
        AssetCapitalization.STATUS,
        AssetCapitalization.REMARKS,
        AssetCapitalization.REFERENCE,
        AssetCapitalization.CURRENCY,
        AssetCapitalization.DOCUMENT_RATE,
        AssetCapitalization.DOCUMENT_TOTAL,
        AssetCapitalization.DOCUMENT_TOTAL_FC,
        AssetCapitalization.DOCUMENT_TOTAL_SC,
        AssetCapitalization.ASSET_VALUE_DATE,
        AssetCapitalization.DOCUMENT_TYPE,
        AssetCapitalization.SUMMERIZE_BY_PROJECTS,
        AssetCapitalization.SUMMERIZE_BY_DISTRIBUTION_RULES,
        AssetCapitalization.MANUAL_DEPRECIATION_TYPE,
        AssetCapitalization.HAND_WRITTEN,
        AssetCapitalization.CANCELLATION_DATE,
        AssetCapitalization.DEPRECIATION_AREA,
        AssetCapitalization.BPL_ID,
        AssetCapitalization.ORIGIN,
        AssetCapitalization.LOW_VALUE_ASSET_RETIREMENT,
        AssetCapitalization.CANCELLATION_OPTION,
        AssetCapitalization.ORIGINAL_TYPE,
        AssetCapitalization.BASE_REFERENCE,
        AssetCapitalization.BPL_NAME,
        AssetCapitalization.VAT_REG_NUM,
        AssetCapitalization.ASSET_DOCUMENT_LINE_COLLECTION,
        AssetCapitalization.ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION,
        AssetCapitalization.CURRENCY_2,
        AssetCapitalization.DEPRECIATION_TYPE,
        AssetCapitalization.DEPRECIATION_AREA_2,
        AssetCapitalization.BUSINESS_PLACE
    ];
    /**
     * All fields selector.
     */
    AssetCapitalization.ALL_FIELDS = new core_1.AllFields('*', AssetCapitalization);
    /**
     * All key fields of the AssetCapitalization entity.
     */
    AssetCapitalization._keyFields = [AssetCapitalization.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property AssetCapitalization.
     */
    AssetCapitalization._keys = AssetCapitalization._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AssetCapitalization = exports.AssetCapitalization || (exports.AssetCapitalization = {}));
exports.AssetCapitalization = AssetCapitalization;
//# sourceMappingURL=AssetCapitalization.js.map