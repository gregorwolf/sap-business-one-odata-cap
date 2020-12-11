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
exports.BudgetScenarios = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BudgetScenariosRequestBuilder_1 = require("./BudgetScenariosRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "BudgetScenarios" of service "SAPB1".
 */
var BudgetScenarios = /** @class */ (function (_super) {
    __extends(BudgetScenarios, _super);
    function BudgetScenarios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BudgetScenarios`.
     * @returns A builder that constructs instances of entity type `BudgetScenarios`.
     */
    BudgetScenarios.builder = function () {
        return core_1.EntityV4.entityBuilder(BudgetScenarios);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BudgetScenarios` entity type.
     * @returns A `BudgetScenarios` request builder.
     */
    BudgetScenarios.requestBuilder = function () {
        return new BudgetScenariosRequestBuilder_1.BudgetScenariosRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BudgetScenarios`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BudgetScenarios`.
     */
    BudgetScenarios.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, BudgetScenarios);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BudgetScenarios.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BudgetScenarios.
     */
    BudgetScenarios._entityName = 'BudgetScenarios';
    /**
     * Default url path for the according service.
     */
    BudgetScenarios._defaultServicePath = '/b1s/v2/';
    return BudgetScenarios;
}(core_1.EntityV4));
exports.BudgetScenarios = BudgetScenarios;
var Projects_1 = require("./Projects");
var DistributionRules_1 = require("./DistributionRules");
var Budgets_1 = require("./Budgets");
(function (BudgetScenarios) {
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetScenarios.NAME = new core_1.StringField('Name', BudgetScenarios, 'Edm.String');
    /**
     * Static representation of the [[initialRatioPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetScenarios.INITIAL_RATIO_PERCENTAGE = new core_1.NumberField('InitialRatioPercentage', BudgetScenarios, 'Edm.Double');
    /**
     * Static representation of the [[startofFiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetScenarios.STARTOF_FISCAL_YEAR = new core_1.DateField('StartofFiscalYear', BudgetScenarios, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[basicBudget]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetScenarios.BASIC_BUDGET = new core_1.NumberField('BasicBudget', BudgetScenarios, 'Edm.Int32');
    /**
     * Static representation of the [[numerator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetScenarios.NUMERATOR = new core_1.NumberField('Numerator', BudgetScenarios, 'Edm.Int32');
    /**
     * Static representation of the [[roundingMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetScenarios.ROUNDING_METHOD = new core_1.EnumField('RoundingMethod', BudgetScenarios);
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetScenarios.PROJECT = new core_1.StringField('Project', BudgetScenarios, 'Edm.String');
    /**
     * Static representation of the [[distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetScenarios.DISTRIBUTION_RULE = new core_1.StringField('DistributionRule', BudgetScenarios, 'Edm.String');
    /**
     * Static representation of the [[distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetScenarios.DISTRIBUTION_RULE_2 = new core_1.StringField('DistributionRule2', BudgetScenarios, 'Edm.String');
    /**
     * Static representation of the [[distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetScenarios.DISTRIBUTION_RULE_3 = new core_1.StringField('DistributionRule3', BudgetScenarios, 'Edm.String');
    /**
     * Static representation of the [[distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetScenarios.DISTRIBUTION_RULE_4 = new core_1.StringField('DistributionRule4', BudgetScenarios, 'Edm.String');
    /**
     * Static representation of the [[distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetScenarios.DISTRIBUTION_RULE_5 = new core_1.StringField('DistributionRule5', BudgetScenarios, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetScenarios.PROJECT_2 = new core_1.OneToOneLink('Project2', BudgetScenarios, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[distributionRule6]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetScenarios.DISTRIBUTION_RULE_6 = new core_1.OneToOneLink('DistributionRule6', BudgetScenarios, DistributionRules_1.DistributionRules);
    /**
     * Static representation of the one-to-many navigation property [[budgets]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BudgetScenarios.BUDGETS = new core_1.OneToManyLink('Budgets', BudgetScenarios, Budgets_1.Budgets);
    /**
     * All fields of the BudgetScenarios entity.
     */
    BudgetScenarios._allFields = [
        BudgetScenarios.NAME,
        BudgetScenarios.INITIAL_RATIO_PERCENTAGE,
        BudgetScenarios.STARTOF_FISCAL_YEAR,
        BudgetScenarios.BASIC_BUDGET,
        BudgetScenarios.NUMERATOR,
        BudgetScenarios.ROUNDING_METHOD,
        BudgetScenarios.PROJECT,
        BudgetScenarios.DISTRIBUTION_RULE,
        BudgetScenarios.DISTRIBUTION_RULE_2,
        BudgetScenarios.DISTRIBUTION_RULE_3,
        BudgetScenarios.DISTRIBUTION_RULE_4,
        BudgetScenarios.DISTRIBUTION_RULE_5,
        BudgetScenarios.PROJECT_2,
        BudgetScenarios.DISTRIBUTION_RULE_6,
        BudgetScenarios.BUDGETS
    ];
    /**
     * All fields selector.
     */
    BudgetScenarios.ALL_FIELDS = new core_1.AllFields('*', BudgetScenarios);
    /**
     * All key fields of the BudgetScenarios entity.
     */
    BudgetScenarios._keyFields = [BudgetScenarios.NUMERATOR];
    /**
     * Mapping of all key field names to the respective static field property BudgetScenarios.
     */
    BudgetScenarios._keys = BudgetScenarios._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BudgetScenarios = exports.BudgetScenarios || (exports.BudgetScenarios = {}));
exports.BudgetScenarios = BudgetScenarios;
//# sourceMappingURL=BudgetScenarios.js.map