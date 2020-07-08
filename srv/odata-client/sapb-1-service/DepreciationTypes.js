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
exports.DepreciationTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DepreciationTypesRequestBuilder_1 = require("./DepreciationTypesRequestBuilder");
var DepreciationLevel_1 = require("./DepreciationLevel");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "DepreciationTypes" of service "SAPB1".
 */
var DepreciationTypes = /** @class */ (function (_super) {
    __extends(DepreciationTypes, _super);
    function DepreciationTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DepreciationTypes`.
     * @returns A builder that constructs instances of entity type `DepreciationTypes`.
     */
    DepreciationTypes.builder = function () {
        return v4_1.Entity.entityBuilder(DepreciationTypes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DepreciationTypes` entity type.
     * @returns A `DepreciationTypes` request builder.
     */
    DepreciationTypes.requestBuilder = function () {
        return new DepreciationTypesRequestBuilder_1.DepreciationTypesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DepreciationTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DepreciationTypes`.
     */
    DepreciationTypes.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, DepreciationTypes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DepreciationTypes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DepreciationTypes.
     */
    DepreciationTypes._entityName = 'DepreciationTypes';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DepreciationTypes.
     */
    DepreciationTypes._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    DepreciationTypes._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DepreciationTypes;
}(v4_1.Entity));
exports.DepreciationTypes = DepreciationTypes;
var AssetTransfer_1 = require("./AssetTransfer");
var AssetRetirement_1 = require("./AssetRetirement");
var AssetCapitalizationCreditMemo_1 = require("./AssetCapitalizationCreditMemo");
var DepreciationTypePools_1 = require("./DepreciationTypePools");
var AssetCapitalization_1 = require("./AssetCapitalization");
var AssetManualDepreciation_1 = require("./AssetManualDepreciation");
(function (DepreciationTypes) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.CODE = new v4_1.StringField('Code', DepreciationTypes, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DESCRIPTION = new v4_1.StringField('Description', DepreciationTypes, 'Edm.String');
    /**
     * Static representation of the [[minimumDepreciatedValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.MINIMUM_DEPRECIATED_VALUE = new v4_1.NumberField('MinimumDepreciatedValue', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[salvagePercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SALVAGE_PERCENTAGE = new v4_1.NumberField('SalvagePercentage', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[percentageOfDepreciationReversedInRetirementYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.PERCENTAGE_OF_DEPRECIATION_REVERSED_IN_RETIREMENT_YEAR = new v4_1.NumberField('PercentageOfDepreciationReversedInRetirementYear', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.VALID_FROM = new v4_1.DateField('ValidFrom', DepreciationTypes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.VALID_TO = new v4_1.DateField('ValidTo', DepreciationTypes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[straightLinePercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.STRAIGHT_LINE_PERCENTAGE = new v4_1.NumberField('StraightLinePercentage', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[straightLinePeriodControlFactor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.STRAIGHT_LINE_PERIOD_CONTROL_FACTOR = new v4_1.NumberField('StraightLinePeriodControlFactor', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[decliningPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DECLINING_PERCENTAGE = new v4_1.NumberField('DecliningPercentage', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[decliningFactor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DECLINING_FACTOR = new v4_1.NumberField('DecliningFactor', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[decliningChangeTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DECLINING_CHANGE_TO = new v4_1.StringField('DecliningChangeTo', DepreciationTypes, 'Edm.String');
    /**
     * Static representation of the [[specialDepreciationConcessionPeriodYears]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SPECIAL_DEPRECIATION_CONCESSION_PERIOD_YEARS = new v4_1.NumberField('SpecialDepreciationConcessionPeriodYears', DepreciationTypes, 'Edm.Int32');
    /**
     * Static representation of the [[specialDepreciationMaximumPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SPECIAL_DEPRECIATION_MAXIMUM_PERCENTAGE = new v4_1.NumberField('SpecialDepreciationMaximumPercentage', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[specialDepreciationNormalDepreciation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SPECIAL_DEPRECIATION_NORMAL_DEPRECIATION = new v4_1.StringField('SpecialDepreciationNormalDepreciation', DepreciationTypes, 'Edm.String');
    /**
     * Static representation of the [[specialDepreciationAlternativeDepreciation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SPECIAL_DEPRECIATION_ALTERNATIVE_DEPRECIATION = new v4_1.StringField('SpecialDepreciationAlternativeDepreciation', DepreciationTypes, 'Edm.String');
    /**
     * Static representation of the [[depreciationTypePool]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DEPRECIATION_TYPE_POOL = new v4_1.StringField('DepreciationTypePool', DepreciationTypes, 'Edm.String');
    /**
     * Static representation of the [[specialDepreciationMaximumAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SPECIAL_DEPRECIATION_MAXIMUM_AMOUNT = new v4_1.NumberField('SpecialDepreciationMaximumAmount', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[deltaCoefficient]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DELTA_COEFFICIENT = new v4_1.NumberField('DeltaCoefficient', DepreciationTypes, 'Edm.Int32');
    /**
     * Static representation of the [[maximumDepreciableValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.MAXIMUM_DEPRECIABLE_VALUE = new v4_1.NumberField('MaximumDepreciableValue', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[depreciationLevelCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DEPRECIATION_LEVEL_COLLECTION = new v4_1.CollectionField('DepreciationLevelCollection', DepreciationTypes, new DepreciationLevel_1.DepreciationLevelField('', DepreciationTypes));
    /**
     * Static representation of the one-to-many navigation property [[assetTransfer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.ASSET_TRANSFER = new v4_1.OneToManyLink('AssetTransfer', DepreciationTypes, AssetTransfer_1.AssetTransfer);
    /**
     * Static representation of the one-to-many navigation property [[assetRetirement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.ASSET_RETIREMENT = new v4_1.OneToManyLink('AssetRetirement', DepreciationTypes, AssetRetirement_1.AssetRetirement);
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalizationCreditMemo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.ASSET_CAPITALIZATION_CREDIT_MEMO = new v4_1.OneToManyLink('AssetCapitalizationCreditMemo', DepreciationTypes, AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo);
    /**
     * Static representation of the one-to-one navigation property [[depreciationTypePool2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DEPRECIATION_TYPE_POOL_2 = new v4_1.OneToOneLink('DepreciationTypePool2', DepreciationTypes, DepreciationTypePools_1.DepreciationTypePools);
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalization]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.ASSET_CAPITALIZATION = new v4_1.OneToManyLink('AssetCapitalization', DepreciationTypes, AssetCapitalization_1.AssetCapitalization);
    /**
     * Static representation of the one-to-many navigation property [[assetManualDepreciation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.ASSET_MANUAL_DEPRECIATION = new v4_1.OneToManyLink('AssetManualDepreciation', DepreciationTypes, AssetManualDepreciation_1.AssetManualDepreciation);
    /**
     * All fields of the DepreciationTypes entity.
     */
    DepreciationTypes._allFields = [
        DepreciationTypes.CODE,
        DepreciationTypes.DESCRIPTION,
        DepreciationTypes.MINIMUM_DEPRECIATED_VALUE,
        DepreciationTypes.SALVAGE_PERCENTAGE,
        DepreciationTypes.PERCENTAGE_OF_DEPRECIATION_REVERSED_IN_RETIREMENT_YEAR,
        DepreciationTypes.VALID_FROM,
        DepreciationTypes.VALID_TO,
        DepreciationTypes.STRAIGHT_LINE_PERCENTAGE,
        DepreciationTypes.STRAIGHT_LINE_PERIOD_CONTROL_FACTOR,
        DepreciationTypes.DECLINING_PERCENTAGE,
        DepreciationTypes.DECLINING_FACTOR,
        DepreciationTypes.DECLINING_CHANGE_TO,
        DepreciationTypes.SPECIAL_DEPRECIATION_CONCESSION_PERIOD_YEARS,
        DepreciationTypes.SPECIAL_DEPRECIATION_MAXIMUM_PERCENTAGE,
        DepreciationTypes.SPECIAL_DEPRECIATION_NORMAL_DEPRECIATION,
        DepreciationTypes.SPECIAL_DEPRECIATION_ALTERNATIVE_DEPRECIATION,
        DepreciationTypes.DEPRECIATION_TYPE_POOL,
        DepreciationTypes.SPECIAL_DEPRECIATION_MAXIMUM_AMOUNT,
        DepreciationTypes.DELTA_COEFFICIENT,
        DepreciationTypes.MAXIMUM_DEPRECIABLE_VALUE,
        DepreciationTypes.DEPRECIATION_LEVEL_COLLECTION,
        DepreciationTypes.ASSET_TRANSFER,
        DepreciationTypes.ASSET_RETIREMENT,
        DepreciationTypes.ASSET_CAPITALIZATION_CREDIT_MEMO,
        DepreciationTypes.DEPRECIATION_TYPE_POOL_2,
        DepreciationTypes.ASSET_CAPITALIZATION,
        DepreciationTypes.ASSET_MANUAL_DEPRECIATION
    ];
    /**
     * All fields selector.
     */
    DepreciationTypes.ALL_FIELDS = new v4_1.AllFields('*', DepreciationTypes);
    /**
     * All key fields of the DepreciationTypes entity.
     */
    DepreciationTypes._keyFields = [DepreciationTypes.CODE];
    /**
     * Mapping of all key field names to the respective static field property DepreciationTypes.
     */
    DepreciationTypes._keys = DepreciationTypes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DepreciationTypes = exports.DepreciationTypes || (exports.DepreciationTypes = {}));
exports.DepreciationTypes = DepreciationTypes;
//# sourceMappingURL=DepreciationTypes.js.map