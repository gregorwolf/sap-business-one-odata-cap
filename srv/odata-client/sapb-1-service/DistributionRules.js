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
exports.DistributionRules = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DistributionRulesRequestBuilder_1 = require("./DistributionRulesRequestBuilder");
var DistributionRuleLine_1 = require("./DistributionRuleLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DistributionRules" of service "SAPB1".
 */
var DistributionRules = /** @class */ (function (_super) {
    __extends(DistributionRules, _super);
    function DistributionRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `DistributionRules`.
     * @returns A builder that constructs instances of entity type `DistributionRules`.
     */
    DistributionRules.builder = function () {
        return core_1.EntityV4.entityBuilder(DistributionRules);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DistributionRules` entity type.
     * @returns A `DistributionRules` request builder.
     */
    DistributionRules.requestBuilder = function () {
        return new DistributionRulesRequestBuilder_1.DistributionRulesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DistributionRules`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DistributionRules`.
     */
    DistributionRules.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, DistributionRules);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DistributionRules.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DistributionRules.
     */
    DistributionRules._entityName = 'DistributionRules';
    /**
     * Default url path for the according service.
     */
    DistributionRules._defaultServicePath = '/b1s/v2/';
    return DistributionRules;
}(core_1.EntityV4));
exports.DistributionRules = DistributionRules;
var ProductionOrders_1 = require("./ProductionOrders");
var ProductTrees_1 = require("./ProductTrees");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var BudgetScenarios_1 = require("./BudgetScenarios");
var AdditionalExpenses_1 = require("./AdditionalExpenses");
var Dimensions_1 = require("./Dimensions");
var Deposits_1 = require("./Deposits");
(function (DistributionRules) {
    /**
     * Static representation of the [[factorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DistributionRules.FACTOR_CODE = new core_1.StringField('FactorCode', DistributionRules, 'Edm.String');
    /**
     * Static representation of the [[factorDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DistributionRules.FACTOR_DESCRIPTION = new core_1.StringField('FactorDescription', DistributionRules, 'Edm.String');
    /**
     * Static representation of the [[totalFactor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DistributionRules.TOTAL_FACTOR = new core_1.NumberField('TotalFactor', DistributionRules, 'Edm.Double');
    /**
     * Static representation of the [[direct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DistributionRules.DIRECT = new core_1.StringField('Direct', DistributionRules, 'Edm.String');
    /**
     * Static representation of the [[inWhichDimension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DistributionRules.IN_WHICH_DIMENSION = new core_1.NumberField('InWhichDimension', DistributionRules, 'Edm.Int32');
    /**
     * Static representation of the [[active]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DistributionRules.ACTIVE = new core_1.EnumField('Active', DistributionRules);
    /**
     * Static representation of the [[isFixedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DistributionRules.IS_FIXED_AMOUNT = new core_1.EnumField('IsFixedAmount', DistributionRules);
    /**
     * Static representation of the [[distributionRuleLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DistributionRules.DISTRIBUTION_RULE_LINES = new core_1.CollectionField('DistributionRuleLines', DistributionRules, DistributionRuleLine_1.DistributionRuleLine);
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DistributionRules.PRODUCTION_ORDERS = new core_1.OneToManyLink('ProductionOrders', DistributionRules, ProductionOrders_1.ProductionOrders);
    /**
     * Static representation of the one-to-many navigation property [[productTrees]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DistributionRules.PRODUCT_TREES = new core_1.OneToManyLink('ProductTrees', DistributionRules, ProductTrees_1.ProductTrees);
    /**
     * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DistributionRules.CHART_OF_ACCOUNTS = new core_1.OneToManyLink('ChartOfAccounts', DistributionRules, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-many navigation property [[budgetScenarios]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DistributionRules.BUDGET_SCENARIOS = new core_1.OneToManyLink('BudgetScenarios', DistributionRules, BudgetScenarios_1.BudgetScenarios);
    /**
     * Static representation of the one-to-many navigation property [[additionalExpenses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DistributionRules.ADDITIONAL_EXPENSES = new core_1.OneToManyLink('AdditionalExpenses', DistributionRules, AdditionalExpenses_1.AdditionalExpenses);
    /**
     * Static representation of the one-to-one navigation property [[dimension]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DistributionRules.DIMENSION = new core_1.OneToOneLink('Dimension', DistributionRules, Dimensions_1.Dimensions);
    /**
     * Static representation of the one-to-many navigation property [[deposits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DistributionRules.DEPOSITS = new core_1.OneToManyLink('Deposits', DistributionRules, Deposits_1.Deposits);
    /**
     * All fields of the DistributionRules entity.
     */
    DistributionRules._allFields = [
        DistributionRules.FACTOR_CODE,
        DistributionRules.FACTOR_DESCRIPTION,
        DistributionRules.TOTAL_FACTOR,
        DistributionRules.DIRECT,
        DistributionRules.IN_WHICH_DIMENSION,
        DistributionRules.ACTIVE,
        DistributionRules.IS_FIXED_AMOUNT,
        DistributionRules.DISTRIBUTION_RULE_LINES,
        DistributionRules.PRODUCTION_ORDERS,
        DistributionRules.PRODUCT_TREES,
        DistributionRules.CHART_OF_ACCOUNTS,
        DistributionRules.BUDGET_SCENARIOS,
        DistributionRules.ADDITIONAL_EXPENSES,
        DistributionRules.DIMENSION,
        DistributionRules.DEPOSITS
    ];
    /**
     * All fields selector.
     */
    DistributionRules.ALL_FIELDS = new core_1.AllFields('*', DistributionRules);
    /**
     * All key fields of the DistributionRules entity.
     */
    DistributionRules._keyFields = [DistributionRules.FACTOR_CODE];
    /**
     * Mapping of all key field names to the respective static field property DistributionRules.
     */
    DistributionRules._keys = DistributionRules._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DistributionRules = exports.DistributionRules || (exports.DistributionRules = {}));
exports.DistributionRules = DistributionRules;
//# sourceMappingURL=DistributionRules.js.map