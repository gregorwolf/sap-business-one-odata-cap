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
exports.AssetRetirement = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AssetRetirementRequestBuilder_1 = require("./AssetRetirementRequestBuilder");
var AssetDocumentLine_1 = require("./AssetDocumentLine");
var AssetDocumentAreaJournal_1 = require("./AssetDocumentAreaJournal");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "AssetRetirement" of service "SAPB1".
 */
var AssetRetirement = /** @class */ (function (_super) {
    __extends(AssetRetirement, _super);
    function AssetRetirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AssetRetirement`.
     * @returns A builder that constructs instances of entity type `AssetRetirement`.
     */
    AssetRetirement.builder = function () {
        return v4_1.Entity.entityBuilder(AssetRetirement);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AssetRetirement` entity type.
     * @returns A `AssetRetirement` request builder.
     */
    AssetRetirement.requestBuilder = function () {
        return new AssetRetirementRequestBuilder_1.AssetRetirementRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetRetirement`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AssetRetirement`.
     */
    AssetRetirement.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, AssetRetirement);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AssetRetirement.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AssetRetirement.
     */
    AssetRetirement._entityName = 'AssetRetirement';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AssetRetirement.
     */
    AssetRetirement._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    AssetRetirement._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AssetRetirement;
}(v4_1.Entity));
exports.AssetRetirement = AssetRetirement;
var Currencies_1 = require("./Currencies");
var DepreciationTypes_1 = require("./DepreciationTypes");
var DepreciationAreas_1 = require("./DepreciationAreas");
var BusinessPlaces_1 = require("./BusinessPlaces");
(function (AssetRetirement) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.DOC_ENTRY = new v4_1.NumberField('DocEntry', AssetRetirement, 'Edm.Int32');
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.DOC_NUM = new v4_1.NumberField('DocNum', AssetRetirement, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.SERIES = new v4_1.NumberField('Series', AssetRetirement, 'Edm.Int32');
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.POSTING_DATE = new v4_1.DateField('PostingDate', AssetRetirement, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.DOCUMENT_DATE = new v4_1.DateField('DocumentDate', AssetRetirement, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.REMARKS = new v4_1.StringField('Remarks', AssetRetirement, 'Edm.String');
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.REFERENCE = new v4_1.StringField('Reference', AssetRetirement, 'Edm.String');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.CURRENCY = new v4_1.StringField('Currency', AssetRetirement, 'Edm.String');
    /**
     * Static representation of the [[documentRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.DOCUMENT_RATE = new v4_1.NumberField('DocumentRate', AssetRetirement, 'Edm.Double');
    /**
     * Static representation of the [[documentTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.DOCUMENT_TOTAL = new v4_1.NumberField('DocumentTotal', AssetRetirement, 'Edm.Double');
    /**
     * Static representation of the [[documentTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.DOCUMENT_TOTAL_FC = new v4_1.NumberField('DocumentTotalFC', AssetRetirement, 'Edm.Double');
    /**
     * Static representation of the [[documentTotalSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.DOCUMENT_TOTAL_SC = new v4_1.NumberField('DocumentTotalSC', AssetRetirement, 'Edm.Double');
    /**
     * Static representation of the [[assetValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.ASSET_VALUE_DATE = new v4_1.DateField('AssetValueDate', AssetRetirement, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[manualDepreciationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.MANUAL_DEPRECIATION_TYPE = new v4_1.StringField('ManualDepreciationType', AssetRetirement, 'Edm.String');
    /**
     * Static representation of the [[cancellationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.CANCELLATION_DATE = new v4_1.DateField('CancellationDate', AssetRetirement, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[depreciationArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.DEPRECIATION_AREA = new v4_1.StringField('DepreciationArea', AssetRetirement, 'Edm.String');
    /**
     * Static representation of the [[bplId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.BPL_ID = new v4_1.NumberField('BPLId', AssetRetirement, 'Edm.Int32');
    /**
     * Static representation of the [[origin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.ORIGIN = new v4_1.NumberField('Origin', AssetRetirement, 'Edm.Int32');
    /**
     * Static representation of the [[baseReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.BASE_REFERENCE = new v4_1.StringField('BaseReference', AssetRetirement, 'Edm.String');
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.BPL_NAME = new v4_1.StringField('BPLName', AssetRetirement, 'Edm.String');
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.VAT_REG_NUM = new v4_1.StringField('VATRegNum', AssetRetirement, 'Edm.String');
    /**
     * Static representation of the [[assetDocumentLineCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.ASSET_DOCUMENT_LINE_COLLECTION = new v4_1.CollectionField('AssetDocumentLineCollection', AssetRetirement, new AssetDocumentLine_1.AssetDocumentLineField('', AssetRetirement));
    /**
     * Static representation of the [[assetDocumentAreaJournalCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION = new v4_1.CollectionField('AssetDocumentAreaJournalCollection', AssetRetirement, new AssetDocumentAreaJournal_1.AssetDocumentAreaJournalField('', AssetRetirement));
    /**
     * Static representation of the one-to-one navigation property [[currency2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.CURRENCY_2 = new v4_1.OneToOneLink('Currency2', AssetRetirement, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-one navigation property [[depreciationType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.DEPRECIATION_TYPE = new v4_1.OneToOneLink('DepreciationType', AssetRetirement, DepreciationTypes_1.DepreciationTypes);
    /**
     * Static representation of the one-to-one navigation property [[depreciationArea2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.DEPRECIATION_AREA_2 = new v4_1.OneToOneLink('DepreciationArea2', AssetRetirement, DepreciationAreas_1.DepreciationAreas);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetRetirement.BUSINESS_PLACE = new v4_1.OneToOneLink('BusinessPlace', AssetRetirement, BusinessPlaces_1.BusinessPlaces);
    /**
     * All fields of the AssetRetirement entity.
     */
    AssetRetirement._allFields = [
        AssetRetirement.DOC_ENTRY,
        AssetRetirement.DOC_NUM,
        AssetRetirement.SERIES,
        AssetRetirement.POSTING_DATE,
        AssetRetirement.DOCUMENT_DATE,
        AssetRetirement.REMARKS,
        AssetRetirement.REFERENCE,
        AssetRetirement.CURRENCY,
        AssetRetirement.DOCUMENT_RATE,
        AssetRetirement.DOCUMENT_TOTAL,
        AssetRetirement.DOCUMENT_TOTAL_FC,
        AssetRetirement.DOCUMENT_TOTAL_SC,
        AssetRetirement.ASSET_VALUE_DATE,
        AssetRetirement.MANUAL_DEPRECIATION_TYPE,
        AssetRetirement.CANCELLATION_DATE,
        AssetRetirement.DEPRECIATION_AREA,
        AssetRetirement.BPL_ID,
        AssetRetirement.ORIGIN,
        AssetRetirement.BASE_REFERENCE,
        AssetRetirement.BPL_NAME,
        AssetRetirement.VAT_REG_NUM,
        AssetRetirement.ASSET_DOCUMENT_LINE_COLLECTION,
        AssetRetirement.ASSET_DOCUMENT_AREA_JOURNAL_COLLECTION,
        AssetRetirement.CURRENCY_2,
        AssetRetirement.DEPRECIATION_TYPE,
        AssetRetirement.DEPRECIATION_AREA_2,
        AssetRetirement.BUSINESS_PLACE
    ];
    /**
     * All fields selector.
     */
    AssetRetirement.ALL_FIELDS = new v4_1.AllFields('*', AssetRetirement);
    /**
     * All key fields of the AssetRetirement entity.
     */
    AssetRetirement._keyFields = [AssetRetirement.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property AssetRetirement.
     */
    AssetRetirement._keys = AssetRetirement._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AssetRetirement = exports.AssetRetirement || (exports.AssetRetirement = {}));
exports.AssetRetirement = AssetRetirement;
//# sourceMappingURL=AssetRetirement.js.map