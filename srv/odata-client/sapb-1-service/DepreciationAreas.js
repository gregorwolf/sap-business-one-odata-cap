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
exports.DepreciationAreas = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DepreciationAreasRequestBuilder_1 = require("./DepreciationAreasRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "DepreciationAreas" of service "SAPB1".
 */
var DepreciationAreas = /** @class */ (function (_super) {
    __extends(DepreciationAreas, _super);
    function DepreciationAreas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DepreciationAreas`.
     * @returns A builder that constructs instances of entity type `DepreciationAreas`.
     */
    DepreciationAreas.builder = function () {
        return v4_1.Entity.entityBuilder(DepreciationAreas);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DepreciationAreas` entity type.
     * @returns A `DepreciationAreas` request builder.
     */
    DepreciationAreas.requestBuilder = function () {
        return new DepreciationAreasRequestBuilder_1.DepreciationAreasRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DepreciationAreas`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DepreciationAreas`.
     */
    DepreciationAreas.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, DepreciationAreas);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DepreciationAreas.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DepreciationAreas.
     */
    DepreciationAreas._entityName = 'DepreciationAreas';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DepreciationAreas.
     */
    DepreciationAreas._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    DepreciationAreas._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DepreciationAreas;
}(v4_1.Entity));
exports.DepreciationAreas = DepreciationAreas;
var AssetTransfer_1 = require("./AssetTransfer");
var AssetRetirement_1 = require("./AssetRetirement");
var AssetCapitalizationCreditMemo_1 = require("./AssetCapitalizationCreditMemo");
var SalesTaxAuthoritiesTypes_1 = require("./SalesTaxAuthoritiesTypes");
var BusinessPartners_1 = require("./BusinessPartners");
var Items_1 = require("./Items");
var AssetCapitalization_1 = require("./AssetCapitalization");
var AssetManualDepreciation_1 = require("./AssetManualDepreciation");
(function (DepreciationAreas) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationAreas.CODE = new v4_1.StringField('Code', DepreciationAreas, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationAreas.DESCRIPTION = new v4_1.StringField('Description', DepreciationAreas, 'Edm.String');
    /**
     * Static representation of the [[derivedArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationAreas.DERIVED_AREA = new v4_1.StringField('DerivedArea', DepreciationAreas, 'Edm.String');
    /**
     * Static representation of the [[taxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationAreas.TAX_TYPE = new v4_1.NumberField('TaxType', DepreciationAreas, 'Edm.Int32');
    /**
     * Static representation of the [[bpForTaxCorrection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationAreas.BP_FOR_TAX_CORRECTION = new v4_1.StringField('BPForTaxCorrection', DepreciationAreas, 'Edm.String');
    /**
     * Static representation of the [[itemForTaxCorrection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationAreas.ITEM_FOR_TAX_CORRECTION = new v4_1.StringField('ItemForTaxCorrection', DepreciationAreas, 'Edm.String');
    /**
     * Static representation of the [[usageForTaxCorrection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationAreas.USAGE_FOR_TAX_CORRECTION = new v4_1.NumberField('UsageForTaxCorrection', DepreciationAreas, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[assetTransfer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationAreas.ASSET_TRANSFER = new v4_1.OneToManyLink('AssetTransfer', DepreciationAreas, AssetTransfer_1.AssetTransfer);
    /**
     * Static representation of the one-to-many navigation property [[assetRetirement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationAreas.ASSET_RETIREMENT = new v4_1.OneToManyLink('AssetRetirement', DepreciationAreas, AssetRetirement_1.AssetRetirement);
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalizationCreditMemo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationAreas.ASSET_CAPITALIZATION_CREDIT_MEMO = new v4_1.OneToManyLink('AssetCapitalizationCreditMemo', DepreciationAreas, AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo);
    /**
     * Static representation of the one-to-one navigation property [[salesTaxAuthoritiesType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationAreas.SALES_TAX_AUTHORITIES_TYPE = new v4_1.OneToOneLink('SalesTaxAuthoritiesType', DepreciationAreas, SalesTaxAuthoritiesTypes_1.SalesTaxAuthoritiesTypes);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationAreas.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', DepreciationAreas, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationAreas.ITEM = new v4_1.OneToOneLink('Item', DepreciationAreas, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalization]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationAreas.ASSET_CAPITALIZATION = new v4_1.OneToManyLink('AssetCapitalization', DepreciationAreas, AssetCapitalization_1.AssetCapitalization);
    /**
     * Static representation of the one-to-many navigation property [[assetManualDepreciation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationAreas.ASSET_MANUAL_DEPRECIATION = new v4_1.OneToManyLink('AssetManualDepreciation', DepreciationAreas, AssetManualDepreciation_1.AssetManualDepreciation);
    /**
     * All fields of the DepreciationAreas entity.
     */
    DepreciationAreas._allFields = [
        DepreciationAreas.CODE,
        DepreciationAreas.DESCRIPTION,
        DepreciationAreas.DERIVED_AREA,
        DepreciationAreas.TAX_TYPE,
        DepreciationAreas.BP_FOR_TAX_CORRECTION,
        DepreciationAreas.ITEM_FOR_TAX_CORRECTION,
        DepreciationAreas.USAGE_FOR_TAX_CORRECTION,
        DepreciationAreas.ASSET_TRANSFER,
        DepreciationAreas.ASSET_RETIREMENT,
        DepreciationAreas.ASSET_CAPITALIZATION_CREDIT_MEMO,
        DepreciationAreas.SALES_TAX_AUTHORITIES_TYPE,
        DepreciationAreas.BUSINESS_PARTNER,
        DepreciationAreas.ITEM,
        DepreciationAreas.ASSET_CAPITALIZATION,
        DepreciationAreas.ASSET_MANUAL_DEPRECIATION
    ];
    /**
     * All fields selector.
     */
    DepreciationAreas.ALL_FIELDS = new v4_1.AllFields('*', DepreciationAreas);
    /**
     * All key fields of the DepreciationAreas entity.
     */
    DepreciationAreas._keyFields = [DepreciationAreas.CODE];
    /**
     * Mapping of all key field names to the respective static field property DepreciationAreas.
     */
    DepreciationAreas._keys = DepreciationAreas._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DepreciationAreas = exports.DepreciationAreas || (exports.DepreciationAreas = {}));
exports.DepreciationAreas = DepreciationAreas;
//# sourceMappingURL=DepreciationAreas.js.map