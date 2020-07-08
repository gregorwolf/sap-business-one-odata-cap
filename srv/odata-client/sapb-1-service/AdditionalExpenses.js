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
exports.AdditionalExpenses = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AdditionalExpensesRequestBuilder_1 = require("./AdditionalExpensesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "AdditionalExpenses" of service "SAPB1".
 */
var AdditionalExpenses = /** @class */ (function (_super) {
    __extends(AdditionalExpenses, _super);
    function AdditionalExpenses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AdditionalExpenses`.
     * @returns A builder that constructs instances of entity type `AdditionalExpenses`.
     */
    AdditionalExpenses.builder = function () {
        return v4_1.Entity.entityBuilder(AdditionalExpenses);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AdditionalExpenses` entity type.
     * @returns A `AdditionalExpenses` request builder.
     */
    AdditionalExpenses.requestBuilder = function () {
        return new AdditionalExpensesRequestBuilder_1.AdditionalExpensesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AdditionalExpenses`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AdditionalExpenses`.
     */
    AdditionalExpenses.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, AdditionalExpenses);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AdditionalExpenses.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AdditionalExpenses.
     */
    AdditionalExpenses._entityName = 'AdditionalExpenses';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AdditionalExpenses.
     */
    AdditionalExpenses._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    AdditionalExpenses._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AdditionalExpenses;
}(v4_1.Entity));
exports.AdditionalExpenses = AdditionalExpenses;
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var VatGroups_1 = require("./VatGroups");
var DistributionRules_1 = require("./DistributionRules");
var Projects_1 = require("./Projects");
(function (AdditionalExpenses) {
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.NAME = new v4_1.StringField('Name', AdditionalExpenses, 'Edm.String');
    /**
     * Static representation of the [[revenuesAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.REVENUES_ACCOUNT = new v4_1.StringField('RevenuesAccount', AdditionalExpenses, 'Edm.String');
    /**
     * Static representation of the [[expenseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.EXPENSE_ACCOUNT = new v4_1.StringField('ExpenseAccount', AdditionalExpenses, 'Edm.String');
    /**
     * Static representation of the [[fixedAmountRevenues]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.FIXED_AMOUNT_REVENUES = new v4_1.NumberField('FixedAmountRevenues', AdditionalExpenses, 'Edm.Double');
    /**
     * Static representation of the [[fixedAmountExpenses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.FIXED_AMOUNT_EXPENSES = new v4_1.NumberField('FixedAmountExpenses', AdditionalExpenses, 'Edm.Double');
    /**
     * Static representation of the [[outputVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.OUTPUT_VAT_GROUP = new v4_1.StringField('OutputVATGroup', AdditionalExpenses, 'Edm.String');
    /**
     * Static representation of the [[inputVatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.INPUT_VAT_GROUP = new v4_1.StringField('InputVATGroup', AdditionalExpenses, 'Edm.String');
    /**
     * Static representation of the [[freightOffsetAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.FREIGHT_OFFSET_ACCOUNT = new v4_1.StringField('FreightOffsetAccount', AdditionalExpenses, 'Edm.String');
    /**
     * Static representation of the [[wtLiable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.WT_LIABLE = new v4_1.StringField('WTLiable', AdditionalExpenses, 'Edm.String');
    /**
     * Static representation of the [[expensCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.EXPENS_CODE = new v4_1.NumberField('ExpensCode', AdditionalExpenses, 'Edm.Int32');
    /**
     * Static representation of the [[expenseExemptedAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.EXPENSE_EXEMPTED_ACCOUNT = new v4_1.StringField('ExpenseExemptedAccount', AdditionalExpenses, 'Edm.String');
    /**
     * Static representation of the [[revenuesExemptedAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.REVENUES_EXEMPTED_ACCOUNT = new v4_1.StringField('RevenuesExemptedAccount', AdditionalExpenses, 'Edm.String');
    /**
     * Static representation of the [[distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.DISTRIBUTION_RULE = new v4_1.StringField('DistributionRule', AdditionalExpenses, 'Edm.String');
    /**
     * Static representation of the [[project]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.PROJECT = new v4_1.StringField('Project', AdditionalExpenses, 'Edm.String');
    /**
     * Static representation of the [[distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.DISTRIBUTION_RULE_2 = new v4_1.StringField('DistributionRule2', AdditionalExpenses, 'Edm.String');
    /**
     * Static representation of the [[distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.DISTRIBUTION_RULE_3 = new v4_1.StringField('DistributionRule3', AdditionalExpenses, 'Edm.String');
    /**
     * Static representation of the [[distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.DISTRIBUTION_RULE_4 = new v4_1.StringField('DistributionRule4', AdditionalExpenses, 'Edm.String');
    /**
     * Static representation of the [[distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.DISTRIBUTION_RULE_5 = new v4_1.StringField('DistributionRule5', AdditionalExpenses, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', AdditionalExpenses, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[vatGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.VAT_GROUP = new v4_1.OneToOneLink('VatGroup', AdditionalExpenses, VatGroups_1.VatGroups);
    /**
     * Static representation of the one-to-one navigation property [[distributionRule6]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.DISTRIBUTION_RULE_6 = new v4_1.OneToOneLink('DistributionRule6', AdditionalExpenses, DistributionRules_1.DistributionRules);
    /**
     * Static representation of the one-to-one navigation property [[project2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AdditionalExpenses.PROJECT_2 = new v4_1.OneToOneLink('Project2', AdditionalExpenses, Projects_1.Projects);
    /**
     * All fields of the AdditionalExpenses entity.
     */
    AdditionalExpenses._allFields = [
        AdditionalExpenses.NAME,
        AdditionalExpenses.REVENUES_ACCOUNT,
        AdditionalExpenses.EXPENSE_ACCOUNT,
        AdditionalExpenses.FIXED_AMOUNT_REVENUES,
        AdditionalExpenses.FIXED_AMOUNT_EXPENSES,
        AdditionalExpenses.OUTPUT_VAT_GROUP,
        AdditionalExpenses.INPUT_VAT_GROUP,
        AdditionalExpenses.FREIGHT_OFFSET_ACCOUNT,
        AdditionalExpenses.WT_LIABLE,
        AdditionalExpenses.EXPENS_CODE,
        AdditionalExpenses.EXPENSE_EXEMPTED_ACCOUNT,
        AdditionalExpenses.REVENUES_EXEMPTED_ACCOUNT,
        AdditionalExpenses.DISTRIBUTION_RULE,
        AdditionalExpenses.PROJECT,
        AdditionalExpenses.DISTRIBUTION_RULE_2,
        AdditionalExpenses.DISTRIBUTION_RULE_3,
        AdditionalExpenses.DISTRIBUTION_RULE_4,
        AdditionalExpenses.DISTRIBUTION_RULE_5,
        AdditionalExpenses.CHART_OF_ACCOUNT,
        AdditionalExpenses.VAT_GROUP,
        AdditionalExpenses.DISTRIBUTION_RULE_6,
        AdditionalExpenses.PROJECT_2
    ];
    /**
     * All fields selector.
     */
    AdditionalExpenses.ALL_FIELDS = new v4_1.AllFields('*', AdditionalExpenses);
    /**
     * All key fields of the AdditionalExpenses entity.
     */
    AdditionalExpenses._keyFields = [AdditionalExpenses.EXPENS_CODE];
    /**
     * Mapping of all key field names to the respective static field property AdditionalExpenses.
     */
    AdditionalExpenses._keys = AdditionalExpenses._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AdditionalExpenses = exports.AdditionalExpenses || (exports.AdditionalExpenses = {}));
exports.AdditionalExpenses = AdditionalExpenses;
//# sourceMappingURL=AdditionalExpenses.js.map