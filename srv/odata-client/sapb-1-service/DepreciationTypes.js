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
exports.DepreciationTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DepreciationTypesRequestBuilder_1 = require("./DepreciationTypesRequestBuilder");
var DepreciationLevel_1 = require("./DepreciationLevel");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DepreciationTypes" of service "SAPB1".
 */
var DepreciationTypes = /** @class */ (function (_super) {
    __extends(DepreciationTypes, _super);
    function DepreciationTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `DepreciationTypes`.
     * @returns A builder that constructs instances of entity type `DepreciationTypes`.
     */
    DepreciationTypes.builder = function () {
        return core_1.EntityV4.entityBuilder(DepreciationTypes);
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
        return core_1.EntityV4.customFieldSelector(fieldName, DepreciationTypes);
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
     * Default url path for the according service.
     */
    DepreciationTypes._defaultServicePath = '/b1s/v2/';
    return DepreciationTypes;
}(core_1.EntityV4));
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
    DepreciationTypes.CODE = new core_1.StringField('Code', DepreciationTypes, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DESCRIPTION = new core_1.StringField('Description', DepreciationTypes, 'Edm.String');
    /**
     * Static representation of the [[depreciationMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DEPRECIATION_METHOD = new core_1.EnumField('DepreciationMethod', DepreciationTypes);
    /**
     * Static representation of the [[minimumDepreciatedValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.MINIMUM_DEPRECIATED_VALUE = new core_1.NumberField('MinimumDepreciatedValue', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[roundYearEndBookValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.ROUND_YEAR_END_BOOK_VALUE = new core_1.EnumField('RoundYearEndBookValue', DepreciationTypes);
    /**
     * Static representation of the [[includeSalvageInDepreciation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.INCLUDE_SALVAGE_IN_DEPRECIATION = new core_1.EnumField('IncludeSalvageInDepreciation', DepreciationTypes);
    /**
     * Static representation of the [[salvagePercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SALVAGE_PERCENTAGE = new core_1.NumberField('SalvagePercentage', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[acquisitionPeriodControl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.ACQUISITION_PERIOD_CONTROL = new core_1.EnumField('AcquisitionPeriodControl', DepreciationTypes);
    /**
     * Static representation of the [[subsequentAcquisitionPeriodControl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SUBSEQUENT_ACQUISITION_PERIOD_CONTROL = new core_1.EnumField('SubsequentAcquisitionPeriodControl', DepreciationTypes);
    /**
     * Static representation of the [[retirementPeriodControl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.RETIREMENT_PERIOD_CONTROL = new core_1.EnumField('RetirementPeriodControl', DepreciationTypes);
    /**
     * Static representation of the [[acquisitionProRataType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.ACQUISITION_PRO_RATA_TYPE = new core_1.EnumField('AcquisitionProRataType', DepreciationTypes);
    /**
     * Static representation of the [[subsequentAcquisitionProRataType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SUBSEQUENT_ACQUISITION_PRO_RATA_TYPE = new core_1.EnumField('SubsequentAcquisitionProRataType', DepreciationTypes);
    /**
     * Static representation of the [[retirementProRataType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.RETIREMENT_PRO_RATA_TYPE = new core_1.EnumField('RetirementProRataType', DepreciationTypes);
    /**
     * Static representation of the [[percentageOfDepreciationReversedInRetirementYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.PERCENTAGE_OF_DEPRECIATION_REVERSED_IN_RETIREMENT_YEAR = new core_1.NumberField('PercentageOfDepreciationReversedInRetirementYear', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.VALID_FROM = new core_1.DateField('ValidFrom', DepreciationTypes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.VALID_TO = new core_1.DateField('ValidTo', DepreciationTypes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[straightLineCalculationMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.STRAIGHT_LINE_CALCULATION_METHOD = new core_1.EnumField('StraightLineCalculationMethod', DepreciationTypes);
    /**
     * Static representation of the [[straightLinePercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.STRAIGHT_LINE_PERCENTAGE = new core_1.NumberField('StraightLinePercentage', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[straightLinePeriodControlDepreciationPeriods]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.STRAIGHT_LINE_PERIOD_CONTROL_DEPRECIATION_PERIODS = new core_1.EnumField('StraightLinePeriodControlDepreciationPeriods', DepreciationTypes);
    /**
     * Static representation of the [[straightLinePeriodControlFactor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.STRAIGHT_LINE_PERIOD_CONTROL_FACTOR = new core_1.NumberField('StraightLinePeriodControlFactor', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[decliningPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DECLINING_PERCENTAGE = new core_1.NumberField('DecliningPercentage', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[decliningFactor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DECLINING_FACTOR = new core_1.NumberField('DecliningFactor', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[decliningChangeTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DECLINING_CHANGE_TO = new core_1.StringField('DecliningChangeTo', DepreciationTypes, 'Edm.String');
    /**
     * Static representation of the [[specialDepreciationCalculationMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SPECIAL_DEPRECIATION_CALCULATION_METHOD = new core_1.EnumField('SpecialDepreciationCalculationMethod', DepreciationTypes);
    /**
     * Static representation of the [[specialDepreciationConcessionPeriodYears]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SPECIAL_DEPRECIATION_CONCESSION_PERIOD_YEARS = new core_1.NumberField('SpecialDepreciationConcessionPeriodYears', DepreciationTypes, 'Edm.Int32');
    /**
     * Static representation of the [[specialDepreciationMaximumPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SPECIAL_DEPRECIATION_MAXIMUM_PERCENTAGE = new core_1.NumberField('SpecialDepreciationMaximumPercentage', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[specialDepreciationNormalDepreciation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SPECIAL_DEPRECIATION_NORMAL_DEPRECIATION = new core_1.StringField('SpecialDepreciationNormalDepreciation', DepreciationTypes, 'Edm.String');
    /**
     * Static representation of the [[specialDepreciationAlternativeDepreciation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SPECIAL_DEPRECIATION_ALTERNATIVE_DEPRECIATION = new core_1.StringField('SpecialDepreciationAlternativeDepreciation', DepreciationTypes, 'Edm.String');
    /**
     * Static representation of the [[depreciationTypePool]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DEPRECIATION_TYPE_POOL = new core_1.StringField('DepreciationTypePool', DepreciationTypes, 'Edm.String');
    /**
     * Static representation of the [[manualDepreciationReduceDepreciationBase]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.MANUAL_DEPRECIATION_REDUCE_DEPRECIATION_BASE = new core_1.EnumField('ManualDepreciationReduceDepreciationBase', DepreciationTypes);
    /**
     * Static representation of the [[specialDepreciationMaximumAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SPECIAL_DEPRECIATION_MAXIMUM_AMOUNT = new core_1.NumberField('SpecialDepreciationMaximumAmount', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[specialDepreciationMaximumFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.SPECIAL_DEPRECIATION_MAXIMUM_FLAG = new core_1.EnumField('SpecialDepreciationMaximumFlag', DepreciationTypes);
    /**
     * Static representation of the [[calculationBase]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.CALCULATION_BASE = new core_1.EnumField('CalculationBase', DepreciationTypes);
    /**
     * Static representation of the [[depreciationEndAtLastFullYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DEPRECIATION_END_AT_LAST_FULL_YEAR = new core_1.EnumField('DepreciationEndAtLastFullYear', DepreciationTypes);
    /**
     * Static representation of the [[includePreviousDepreciationInCapitalizationPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.INCLUDE_PREVIOUS_DEPRECIATION_IN_CAPITALIZATION_PERIOD = new core_1.EnumField('IncludePreviousDepreciationInCapitalizationPeriod', DepreciationTypes);
    /**
     * Static representation of the [[deltaCoefficient]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DELTA_COEFFICIENT = new core_1.NumberField('DeltaCoefficient', DepreciationTypes, 'Edm.Int32');
    /**
     * Static representation of the [[maximumDepreciableValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.MAXIMUM_DEPRECIABLE_VALUE = new core_1.NumberField('MaximumDepreciableValue', DepreciationTypes, 'Edm.Double');
    /**
     * Static representation of the [[factorOnlyRelevantToFirstFiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.FACTOR_ONLY_RELEVANT_TO_FIRST_FISCAL_YEAR = new core_1.EnumField('FactorOnlyRelevantToFirstFiscalYear', DepreciationTypes);
    /**
     * Static representation of the [[transferSourcePeriodControl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.TRANSFER_SOURCE_PERIOD_CONTROL = new core_1.EnumField('TransferSourcePeriodControl', DepreciationTypes);
    /**
     * Static representation of the [[transferTargetPeriodControl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.TRANSFER_TARGET_PERIOD_CONTROL = new core_1.EnumField('TransferTargetPeriodControl', DepreciationTypes);
    /**
     * Static representation of the [[transferSourceProRataType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.TRANSFER_SOURCE_PRO_RATA_TYPE = new core_1.EnumField('TransferSourceProRataType', DepreciationTypes);
    /**
     * Static representation of the [[transferTargetProRataType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.TRANSFER_TARGET_PRO_RATA_TYPE = new core_1.EnumField('TransferTargetProRataType', DepreciationTypes);
    /**
     * Static representation of the [[depreciationLevelCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DEPRECIATION_LEVEL_COLLECTION = new core_1.CollectionField('DepreciationLevelCollection', DepreciationTypes, DepreciationLevel_1.DepreciationLevel);
    /**
     * Static representation of the one-to-many navigation property [[assetTransfer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.ASSET_TRANSFER = new core_1.OneToManyLink('AssetTransfer', DepreciationTypes, AssetTransfer_1.AssetTransfer);
    /**
     * Static representation of the one-to-many navigation property [[assetRetirement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.ASSET_RETIREMENT = new core_1.OneToManyLink('AssetRetirement', DepreciationTypes, AssetRetirement_1.AssetRetirement);
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalizationCreditMemo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.ASSET_CAPITALIZATION_CREDIT_MEMO = new core_1.OneToManyLink('AssetCapitalizationCreditMemo', DepreciationTypes, AssetCapitalizationCreditMemo_1.AssetCapitalizationCreditMemo);
    /**
     * Static representation of the one-to-one navigation property [[depreciationTypePool2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.DEPRECIATION_TYPE_POOL_2 = new core_1.OneToOneLink('DepreciationTypePool2', DepreciationTypes, DepreciationTypePools_1.DepreciationTypePools);
    /**
     * Static representation of the one-to-many navigation property [[assetCapitalization]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.ASSET_CAPITALIZATION = new core_1.OneToManyLink('AssetCapitalization', DepreciationTypes, AssetCapitalization_1.AssetCapitalization);
    /**
     * Static representation of the one-to-many navigation property [[assetManualDepreciation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypes.ASSET_MANUAL_DEPRECIATION = new core_1.OneToManyLink('AssetManualDepreciation', DepreciationTypes, AssetManualDepreciation_1.AssetManualDepreciation);
    /**
     * All fields of the DepreciationTypes entity.
     */
    DepreciationTypes._allFields = [
        DepreciationTypes.CODE,
        DepreciationTypes.DESCRIPTION,
        DepreciationTypes.DEPRECIATION_METHOD,
        DepreciationTypes.MINIMUM_DEPRECIATED_VALUE,
        DepreciationTypes.ROUND_YEAR_END_BOOK_VALUE,
        DepreciationTypes.INCLUDE_SALVAGE_IN_DEPRECIATION,
        DepreciationTypes.SALVAGE_PERCENTAGE,
        DepreciationTypes.ACQUISITION_PERIOD_CONTROL,
        DepreciationTypes.SUBSEQUENT_ACQUISITION_PERIOD_CONTROL,
        DepreciationTypes.RETIREMENT_PERIOD_CONTROL,
        DepreciationTypes.ACQUISITION_PRO_RATA_TYPE,
        DepreciationTypes.SUBSEQUENT_ACQUISITION_PRO_RATA_TYPE,
        DepreciationTypes.RETIREMENT_PRO_RATA_TYPE,
        DepreciationTypes.PERCENTAGE_OF_DEPRECIATION_REVERSED_IN_RETIREMENT_YEAR,
        DepreciationTypes.VALID_FROM,
        DepreciationTypes.VALID_TO,
        DepreciationTypes.STRAIGHT_LINE_CALCULATION_METHOD,
        DepreciationTypes.STRAIGHT_LINE_PERCENTAGE,
        DepreciationTypes.STRAIGHT_LINE_PERIOD_CONTROL_DEPRECIATION_PERIODS,
        DepreciationTypes.STRAIGHT_LINE_PERIOD_CONTROL_FACTOR,
        DepreciationTypes.DECLINING_PERCENTAGE,
        DepreciationTypes.DECLINING_FACTOR,
        DepreciationTypes.DECLINING_CHANGE_TO,
        DepreciationTypes.SPECIAL_DEPRECIATION_CALCULATION_METHOD,
        DepreciationTypes.SPECIAL_DEPRECIATION_CONCESSION_PERIOD_YEARS,
        DepreciationTypes.SPECIAL_DEPRECIATION_MAXIMUM_PERCENTAGE,
        DepreciationTypes.SPECIAL_DEPRECIATION_NORMAL_DEPRECIATION,
        DepreciationTypes.SPECIAL_DEPRECIATION_ALTERNATIVE_DEPRECIATION,
        DepreciationTypes.DEPRECIATION_TYPE_POOL,
        DepreciationTypes.MANUAL_DEPRECIATION_REDUCE_DEPRECIATION_BASE,
        DepreciationTypes.SPECIAL_DEPRECIATION_MAXIMUM_AMOUNT,
        DepreciationTypes.SPECIAL_DEPRECIATION_MAXIMUM_FLAG,
        DepreciationTypes.CALCULATION_BASE,
        DepreciationTypes.DEPRECIATION_END_AT_LAST_FULL_YEAR,
        DepreciationTypes.INCLUDE_PREVIOUS_DEPRECIATION_IN_CAPITALIZATION_PERIOD,
        DepreciationTypes.DELTA_COEFFICIENT,
        DepreciationTypes.MAXIMUM_DEPRECIABLE_VALUE,
        DepreciationTypes.FACTOR_ONLY_RELEVANT_TO_FIRST_FISCAL_YEAR,
        DepreciationTypes.TRANSFER_SOURCE_PERIOD_CONTROL,
        DepreciationTypes.TRANSFER_TARGET_PERIOD_CONTROL,
        DepreciationTypes.TRANSFER_SOURCE_PRO_RATA_TYPE,
        DepreciationTypes.TRANSFER_TARGET_PRO_RATA_TYPE,
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
    DepreciationTypes.ALL_FIELDS = new core_1.AllFields('*', DepreciationTypes);
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