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
exports.Budgets = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BudgetsRequestBuilder_1 = require("./BudgetsRequestBuilder");
var BudgetLine_1 = require("./BudgetLine");
var BudgetCostAccountingLine_1 = require("./BudgetCostAccountingLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "Budgets" of service "SAPB1".
 */
var Budgets = /** @class */ (function (_super) {
    __extends(Budgets, _super);
    function Budgets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Budgets`.
     * @returns A builder that constructs instances of entity type `Budgets`.
     */
    Budgets.builder = function () {
        return v4_1.Entity.entityBuilder(Budgets);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Budgets` entity type.
     * @returns A `Budgets` request builder.
     */
    Budgets.requestBuilder = function () {
        return new BudgetsRequestBuilder_1.BudgetsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Budgets`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Budgets`.
     */
    Budgets.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Budgets);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Budgets.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Budgets.
     */
    Budgets._entityName = 'Budgets';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Budgets.
     */
    Budgets._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Budgets._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Budgets;
}(v4_1.Entity));
exports.Budgets = Budgets;
var BudgetDistributions_1 = require("./BudgetDistributions");
var BudgetScenarios_1 = require("./BudgetScenarios");
(function (Budgets) {
    /**
     * Static representation of the [[futureAnnualExpensesCreditSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.FUTURE_ANNUAL_EXPENSES_CREDIT_SYS = new v4_1.NumberField('FutureAnnualExpensesCreditSys', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[futureAnnualExpensesCreditLoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.FUTURE_ANNUAL_EXPENSES_CREDIT_LOC = new v4_1.NumberField('FutureAnnualExpensesCreditLoc', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[futureAnnualExpensesDebitSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.FUTURE_ANNUAL_EXPENSES_DEBIT_SYS = new v4_1.NumberField('FutureAnnualExpensesDebitSys', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[futureAnnualExpensesDebitLoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.FUTURE_ANNUAL_EXPENSES_DEBIT_LOC = new v4_1.NumberField('FutureAnnualExpensesDebitLoc', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[futureAnnualRevenuesCredit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.FUTURE_ANNUAL_REVENUES_CREDIT = new v4_1.NumberField('FutureAnnualRevenuesCredit', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[futureAnnualRevenuesDebit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.FUTURE_ANNUAL_REVENUES_DEBIT = new v4_1.NumberField('FutureAnnualRevenuesDebit', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[futureRevenuesDebitSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.FUTURE_REVENUES_DEBIT_SYS = new v4_1.NumberField('FutureRevenuesDebitSys', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[futureRevenuesDebitLoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.FUTURE_REVENUES_DEBIT_LOC = new v4_1.NumberField('FutureRevenuesDebitLoc', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[parentAccPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.PARENT_ACC_PERCENT = new v4_1.NumberField('ParentAccPercent', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[startofFiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.STARTOF_FISCAL_YEAR = new v4_1.DateField('StartofFiscalYear', Budgets, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[parentAccountKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.PARENT_ACCOUNT_KEY = new v4_1.StringField('ParentAccountKey', Budgets, 'Edm.String');
    /**
     * Static representation of the [[totalAnnualBudgetDebitSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.TOTAL_ANNUAL_BUDGET_DEBIT_SYS = new v4_1.NumberField('TotalAnnualBudgetDebitSys', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[budgetBalanceDebitSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.BUDGET_BALANCE_DEBIT_SYS = new v4_1.NumberField('BudgetBalanceDebitSys', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[budgetBalanceDebitLoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.BUDGET_BALANCE_DEBIT_LOC = new v4_1.NumberField('BudgetBalanceDebitLoc', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[totalAnnualBudgetDebitLoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.TOTAL_ANNUAL_BUDGET_DEBIT_LOC = new v4_1.NumberField('TotalAnnualBudgetDebitLoc', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[totalAnnualBudgetCreditSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.TOTAL_ANNUAL_BUDGET_CREDIT_SYS = new v4_1.NumberField('TotalAnnualBudgetCreditSys', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[totalAnnualBudgetCreditLoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.TOTAL_ANNUAL_BUDGET_CREDIT_LOC = new v4_1.NumberField('TotalAnnualBudgetCreditLoc', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[budgetBalanceCreditSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.BUDGET_BALANCE_CREDIT_SYS = new v4_1.NumberField('BudgetBalanceCreditSys', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[budgetBalanceCreditLoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.BUDGET_BALANCE_CREDIT_LOC = new v4_1.NumberField('BudgetBalanceCreditLoc', Budgets, 'Edm.Double');
    /**
     * Static representation of the [[divisionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.DIVISION_CODE = new v4_1.NumberField('DivisionCode', Budgets, 'Edm.Int32');
    /**
     * Static representation of the [[accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.ACCOUNT_CODE = new v4_1.StringField('AccountCode', Budgets, 'Edm.String');
    /**
     * Static representation of the [[numerator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.NUMERATOR = new v4_1.NumberField('Numerator', Budgets, 'Edm.Int32');
    /**
     * Static representation of the [[budgetScenario]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.BUDGET_SCENARIO = new v4_1.NumberField('BudgetScenario', Budgets, 'Edm.Int32');
    /**
     * Static representation of the [[budgetLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.BUDGET_LINES = new v4_1.CollectionField('BudgetLines', Budgets, new BudgetLine_1.BudgetLineField('', Budgets));
    /**
     * Static representation of the [[budgetCostAccountingLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.BUDGET_COST_ACCOUNTING_LINES = new v4_1.CollectionField('BudgetCostAccountingLines', Budgets, new BudgetCostAccountingLine_1.BudgetCostAccountingLineField('', Budgets));
    /**
     * Static representation of the one-to-one navigation property [[budgetDistribution]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.BUDGET_DISTRIBUTION = new v4_1.OneToOneLink('BudgetDistribution', Budgets, BudgetDistributions_1.BudgetDistributions);
    /**
     * Static representation of the one-to-one navigation property [[budgetScenario2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Budgets.BUDGET_SCENARIO_2 = new v4_1.OneToOneLink('BudgetScenario2', Budgets, BudgetScenarios_1.BudgetScenarios);
    /**
     * All fields of the Budgets entity.
     */
    Budgets._allFields = [
        Budgets.FUTURE_ANNUAL_EXPENSES_CREDIT_SYS,
        Budgets.FUTURE_ANNUAL_EXPENSES_CREDIT_LOC,
        Budgets.FUTURE_ANNUAL_EXPENSES_DEBIT_SYS,
        Budgets.FUTURE_ANNUAL_EXPENSES_DEBIT_LOC,
        Budgets.FUTURE_ANNUAL_REVENUES_CREDIT,
        Budgets.FUTURE_ANNUAL_REVENUES_DEBIT,
        Budgets.FUTURE_REVENUES_DEBIT_SYS,
        Budgets.FUTURE_REVENUES_DEBIT_LOC,
        Budgets.PARENT_ACC_PERCENT,
        Budgets.STARTOF_FISCAL_YEAR,
        Budgets.PARENT_ACCOUNT_KEY,
        Budgets.TOTAL_ANNUAL_BUDGET_DEBIT_SYS,
        Budgets.BUDGET_BALANCE_DEBIT_SYS,
        Budgets.BUDGET_BALANCE_DEBIT_LOC,
        Budgets.TOTAL_ANNUAL_BUDGET_DEBIT_LOC,
        Budgets.TOTAL_ANNUAL_BUDGET_CREDIT_SYS,
        Budgets.TOTAL_ANNUAL_BUDGET_CREDIT_LOC,
        Budgets.BUDGET_BALANCE_CREDIT_SYS,
        Budgets.BUDGET_BALANCE_CREDIT_LOC,
        Budgets.DIVISION_CODE,
        Budgets.ACCOUNT_CODE,
        Budgets.NUMERATOR,
        Budgets.BUDGET_SCENARIO,
        Budgets.BUDGET_LINES,
        Budgets.BUDGET_COST_ACCOUNTING_LINES,
        Budgets.BUDGET_DISTRIBUTION,
        Budgets.BUDGET_SCENARIO_2
    ];
    /**
     * All fields selector.
     */
    Budgets.ALL_FIELDS = new v4_1.AllFields('*', Budgets);
    /**
     * All key fields of the Budgets entity.
     */
    Budgets._keyFields = [Budgets.NUMERATOR];
    /**
     * Mapping of all key field names to the respective static field property Budgets.
     */
    Budgets._keys = Budgets._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Budgets = exports.Budgets || (exports.Budgets = {}));
exports.Budgets = Budgets;
//# sourceMappingURL=Budgets.js.map