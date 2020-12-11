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
exports.FaAccountDeterminations = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var FaAccountDeterminationsRequestBuilder_1 = require("./FaAccountDeterminationsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FAAccountDeterminations" of service "SAPB1".
 */
var FaAccountDeterminations = /** @class */ (function (_super) {
    __extends(FaAccountDeterminations, _super);
    function FaAccountDeterminations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `FaAccountDeterminations`.
     * @returns A builder that constructs instances of entity type `FaAccountDeterminations`.
     */
    FaAccountDeterminations.builder = function () {
        return core_1.EntityV4.entityBuilder(FaAccountDeterminations);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FaAccountDeterminations` entity type.
     * @returns A `FaAccountDeterminations` request builder.
     */
    FaAccountDeterminations.requestBuilder = function () {
        return new FaAccountDeterminationsRequestBuilder_1.FaAccountDeterminationsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FaAccountDeterminations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FaAccountDeterminations`.
     */
    FaAccountDeterminations.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, FaAccountDeterminations);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FaAccountDeterminations.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FaAccountDeterminations.
     */
    FaAccountDeterminations._entityName = 'FAAccountDeterminations';
    /**
     * Default url path for the according service.
     */
    FaAccountDeterminations._defaultServicePath = '/b1s/v2/';
    return FaAccountDeterminations;
}(core_1.EntityV4));
exports.FaAccountDeterminations = FaAccountDeterminations;
var ChartOfAccounts_1 = require("./ChartOfAccounts");
(function (FaAccountDeterminations) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.CODE = new core_1.StringField('Code', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.DESCRIPTION = new core_1.StringField('Description', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[assetBalanceSheetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.ASSET_BALANCE_SHEET_ACCOUNT = new core_1.StringField('AssetBalanceSheetAccount', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[clearingAccountAcquisition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.CLEARING_ACCOUNT_ACQUISITION = new core_1.StringField('ClearingAccountAcquisition', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[revaluationReserveAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.REVALUATION_RESERVE_ACCOUNT = new core_1.StringField('RevaluationReserveAccount', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[revaluationReserveClearing]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.REVALUATION_RESERVE_CLEARING = new core_1.StringField('RevaluationReserveClearing', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[ordinaryDepreciation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.ORDINARY_DEPRECIATION = new core_1.StringField('OrdinaryDepreciation', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[accumulatedOrdinaryDepr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.ACCUMULATED_ORDINARY_DEPR = new core_1.StringField('AccumulatedOrdinaryDepr', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[unplannedDepreciation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.UNPLANNED_DEPRECIATION = new core_1.StringField('UnplannedDepreciation', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[accumulatedUnplannedDepr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.ACCUMULATED_UNPLANNED_DEPR = new core_1.StringField('AccumulatedUnplannedDepr', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[specialDepreciation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.SPECIAL_DEPRECIATION = new core_1.StringField('SpecialDepreciation', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[accumulatedSpecialDepr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.ACCUMULATED_SPECIAL_DEPR = new core_1.StringField('AccumulatedSpecialDepr', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[revenuefromAssetSalesNet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.REVENUEFROM_ASSET_SALES_NET = new core_1.StringField('RevenuefromAssetSalesNet', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[retirementwithExpenseNet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.RETIREMENTWITH_EXPENSE_NET = new core_1.StringField('RetirementwithExpenseNet', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[retirementwithRevenueNet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.RETIREMENTWITH_REVENUE_NET = new core_1.StringField('RetirementwithRevenueNet', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[leavewithExpenseNbvGross]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.LEAVEWITH_EXPENSE_NBV_GROSS = new core_1.StringField('LeavewithExpenseNBVGross', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[leavewithRevenueNbvGross]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.LEAVEWITH_REVENUE_NBV_GROSS = new core_1.StringField('LeavewithRevenueNBVGross', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[revenueAccountforRetirement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.REVENUE_ACCOUNTFOR_RETIREMENT = new core_1.StringField('RevenueAccountforRetirement', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the [[revenueClearingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.REVENUE_CLEARING_ACCOUNT = new core_1.StringField('RevenueClearingAccount', FaAccountDeterminations, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FaAccountDeterminations.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', FaAccountDeterminations, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * All fields of the FaAccountDeterminations entity.
     */
    FaAccountDeterminations._allFields = [
        FaAccountDeterminations.CODE,
        FaAccountDeterminations.DESCRIPTION,
        FaAccountDeterminations.ASSET_BALANCE_SHEET_ACCOUNT,
        FaAccountDeterminations.CLEARING_ACCOUNT_ACQUISITION,
        FaAccountDeterminations.REVALUATION_RESERVE_ACCOUNT,
        FaAccountDeterminations.REVALUATION_RESERVE_CLEARING,
        FaAccountDeterminations.ORDINARY_DEPRECIATION,
        FaAccountDeterminations.ACCUMULATED_ORDINARY_DEPR,
        FaAccountDeterminations.UNPLANNED_DEPRECIATION,
        FaAccountDeterminations.ACCUMULATED_UNPLANNED_DEPR,
        FaAccountDeterminations.SPECIAL_DEPRECIATION,
        FaAccountDeterminations.ACCUMULATED_SPECIAL_DEPR,
        FaAccountDeterminations.REVENUEFROM_ASSET_SALES_NET,
        FaAccountDeterminations.RETIREMENTWITH_EXPENSE_NET,
        FaAccountDeterminations.RETIREMENTWITH_REVENUE_NET,
        FaAccountDeterminations.LEAVEWITH_EXPENSE_NBV_GROSS,
        FaAccountDeterminations.LEAVEWITH_REVENUE_NBV_GROSS,
        FaAccountDeterminations.REVENUE_ACCOUNTFOR_RETIREMENT,
        FaAccountDeterminations.REVENUE_CLEARING_ACCOUNT,
        FaAccountDeterminations.CHART_OF_ACCOUNT
    ];
    /**
     * All fields selector.
     */
    FaAccountDeterminations.ALL_FIELDS = new core_1.AllFields('*', FaAccountDeterminations);
    /**
     * All key fields of the FaAccountDeterminations entity.
     */
    FaAccountDeterminations._keyFields = [FaAccountDeterminations.CODE];
    /**
     * Mapping of all key field names to the respective static field property FaAccountDeterminations.
     */
    FaAccountDeterminations._keys = FaAccountDeterminations._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FaAccountDeterminations = exports.FaAccountDeterminations || (exports.FaAccountDeterminations = {}));
exports.FaAccountDeterminations = FaAccountDeterminations;
//# sourceMappingURL=FaAccountDeterminations.js.map