import { BudgetsRequestBuilder } from './BudgetsRequestBuilder';
import { Moment } from 'moment';
import { BudgetLine } from './BudgetLine';
import { BudgetCostAccountingLine } from './BudgetCostAccountingLine';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Budgets" of service "SAPB1".
 */
export declare class Budgets extends EntityV4 implements BudgetsType {
    /**
     * Technical entity name for Budgets.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Future Annual Expenses Credit Sys.
     * @nullable
     */
    futureAnnualExpensesCreditSys?: number;
    /**
     * Future Annual Expenses Credit Loc.
     * @nullable
     */
    futureAnnualExpensesCreditLoc?: number;
    /**
     * Future Annual Expenses Debit Sys.
     * @nullable
     */
    futureAnnualExpensesDebitSys?: number;
    /**
     * Future Annual Expenses Debit Loc.
     * @nullable
     */
    futureAnnualExpensesDebitLoc?: number;
    /**
     * Future Annual Revenues Credit.
     * @nullable
     */
    futureAnnualRevenuesCredit?: number;
    /**
     * Future Annual Revenues Debit.
     * @nullable
     */
    futureAnnualRevenuesDebit?: number;
    /**
     * Future Revenues Debit Sys.
     * @nullable
     */
    futureRevenuesDebitSys?: number;
    /**
     * Future Revenues Debit Loc.
     * @nullable
     */
    futureRevenuesDebitLoc?: number;
    /**
     * Parent Acc Percent.
     * @nullable
     */
    parentAccPercent?: number;
    /**
     * Startof Fiscal Year.
     * @nullable
     */
    startofFiscalYear?: Moment;
    /**
     * Parent Account Key.
     * @nullable
     */
    parentAccountKey?: string;
    /**
     * Total Annual Budget Debit Sys.
     * @nullable
     */
    totalAnnualBudgetDebitSys?: number;
    /**
     * Budget Balance Debit Sys.
     * @nullable
     */
    budgetBalanceDebitSys?: number;
    /**
     * Budget Balance Debit Loc.
     * @nullable
     */
    budgetBalanceDebitLoc?: number;
    /**
     * Total Annual Budget Debit Loc.
     * @nullable
     */
    totalAnnualBudgetDebitLoc?: number;
    /**
     * Total Annual Budget Credit Sys.
     * @nullable
     */
    totalAnnualBudgetCreditSys?: number;
    /**
     * Total Annual Budget Credit Loc.
     * @nullable
     */
    totalAnnualBudgetCreditLoc?: number;
    /**
     * Budget Balance Credit Sys.
     * @nullable
     */
    budgetBalanceCreditSys?: number;
    /**
     * Budget Balance Credit Loc.
     * @nullable
     */
    budgetBalanceCreditLoc?: number;
    /**
     * Division Code.
     * @nullable
     */
    divisionCode?: number;
    /**
     * Account Code.
     * @nullable
     */
    accountCode?: string;
    /**
     * Numerator.
     * @nullable
     */
    numerator?: number;
    /**
     * Budget Scenario.
     * @nullable
     */
    budgetScenario?: number;
    /**
     * Budget Lines.
     * @nullable
     */
    budgetLines?: BudgetLine[];
    /**
     * Budget Cost Accounting Lines.
     * @nullable
     */
    budgetCostAccountingLines?: BudgetCostAccountingLine[];
    /**
     * One-to-one navigation property to the [[BudgetDistributions]] entity.
     */
    budgetDistribution: BudgetDistributions;
    /**
     * One-to-one navigation property to the [[BudgetScenarios]] entity.
     */
    budgetScenario2: BudgetScenarios;
    /**
     * Returns an entity builder to construct instances of `Budgets`.
     * @returns A builder that constructs instances of entity type `Budgets`.
     */
    static builder(): EntityBuilderType<Budgets, BudgetsType>;
    /**
     * Returns a request builder to construct requests for operations on the `Budgets` entity type.
     * @returns A `Budgets` request builder.
     */
    static requestBuilder(): BudgetsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Budgets`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Budgets`.
     */
    static customField(fieldName: string): CustomFieldV4<Budgets>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BudgetDistributions, BudgetDistributionsType } from './BudgetDistributions';
import { BudgetScenarios, BudgetScenariosType } from './BudgetScenarios';
export interface BudgetsType {
    futureAnnualExpensesCreditSys?: number | null;
    futureAnnualExpensesCreditLoc?: number | null;
    futureAnnualExpensesDebitSys?: number | null;
    futureAnnualExpensesDebitLoc?: number | null;
    futureAnnualRevenuesCredit?: number | null;
    futureAnnualRevenuesDebit?: number | null;
    futureRevenuesDebitSys?: number | null;
    futureRevenuesDebitLoc?: number | null;
    parentAccPercent?: number | null;
    startofFiscalYear?: Moment | null;
    parentAccountKey?: string | null;
    totalAnnualBudgetDebitSys?: number | null;
    budgetBalanceDebitSys?: number | null;
    budgetBalanceDebitLoc?: number | null;
    totalAnnualBudgetDebitLoc?: number | null;
    totalAnnualBudgetCreditSys?: number | null;
    totalAnnualBudgetCreditLoc?: number | null;
    budgetBalanceCreditSys?: number | null;
    budgetBalanceCreditLoc?: number | null;
    divisionCode?: number | null;
    accountCode?: string | null;
    numerator?: number | null;
    budgetScenario?: number | null;
    budgetLines?: BudgetLine[] | null;
    budgetCostAccountingLines?: BudgetCostAccountingLine[] | null;
    budgetDistribution: BudgetDistributionsType;
    budgetScenario2: BudgetScenariosType;
}
export declare namespace Budgets {
    /**
     * Static representation of the [[futureAnnualExpensesCreditSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUTURE_ANNUAL_EXPENSES_CREDIT_SYS: NumberField<Budgets>;
    /**
     * Static representation of the [[futureAnnualExpensesCreditLoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUTURE_ANNUAL_EXPENSES_CREDIT_LOC: NumberField<Budgets>;
    /**
     * Static representation of the [[futureAnnualExpensesDebitSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUTURE_ANNUAL_EXPENSES_DEBIT_SYS: NumberField<Budgets>;
    /**
     * Static representation of the [[futureAnnualExpensesDebitLoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUTURE_ANNUAL_EXPENSES_DEBIT_LOC: NumberField<Budgets>;
    /**
     * Static representation of the [[futureAnnualRevenuesCredit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUTURE_ANNUAL_REVENUES_CREDIT: NumberField<Budgets>;
    /**
     * Static representation of the [[futureAnnualRevenuesDebit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUTURE_ANNUAL_REVENUES_DEBIT: NumberField<Budgets>;
    /**
     * Static representation of the [[futureRevenuesDebitSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUTURE_REVENUES_DEBIT_SYS: NumberField<Budgets>;
    /**
     * Static representation of the [[futureRevenuesDebitLoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUTURE_REVENUES_DEBIT_LOC: NumberField<Budgets>;
    /**
     * Static representation of the [[parentAccPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_ACC_PERCENT: NumberField<Budgets>;
    /**
     * Static representation of the [[startofFiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STARTOF_FISCAL_YEAR: DateField<Budgets>;
    /**
     * Static representation of the [[parentAccountKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_ACCOUNT_KEY: StringField<Budgets>;
    /**
     * Static representation of the [[totalAnnualBudgetDebitSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_ANNUAL_BUDGET_DEBIT_SYS: NumberField<Budgets>;
    /**
     * Static representation of the [[budgetBalanceDebitSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_BALANCE_DEBIT_SYS: NumberField<Budgets>;
    /**
     * Static representation of the [[budgetBalanceDebitLoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_BALANCE_DEBIT_LOC: NumberField<Budgets>;
    /**
     * Static representation of the [[totalAnnualBudgetDebitLoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_ANNUAL_BUDGET_DEBIT_LOC: NumberField<Budgets>;
    /**
     * Static representation of the [[totalAnnualBudgetCreditSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_ANNUAL_BUDGET_CREDIT_SYS: NumberField<Budgets>;
    /**
     * Static representation of the [[totalAnnualBudgetCreditLoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_ANNUAL_BUDGET_CREDIT_LOC: NumberField<Budgets>;
    /**
     * Static representation of the [[budgetBalanceCreditSys]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_BALANCE_CREDIT_SYS: NumberField<Budgets>;
    /**
     * Static representation of the [[budgetBalanceCreditLoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_BALANCE_CREDIT_LOC: NumberField<Budgets>;
    /**
     * Static representation of the [[divisionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION_CODE: NumberField<Budgets>;
    /**
     * Static representation of the [[accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_CODE: StringField<Budgets>;
    /**
     * Static representation of the [[numerator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMERATOR: NumberField<Budgets>;
    /**
     * Static representation of the [[budgetScenario]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_SCENARIO: NumberField<Budgets>;
    /**
     * Static representation of the [[budgetLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_LINES: CollectionField<Budgets, BudgetLine>;
    /**
     * Static representation of the [[budgetCostAccountingLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_COST_ACCOUNTING_LINES: CollectionField<Budgets, BudgetCostAccountingLine>;
    /**
     * Static representation of the one-to-one navigation property [[budgetDistribution]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_DISTRIBUTION: OneToOneLink<Budgets, BudgetDistributions>;
    /**
     * Static representation of the one-to-one navigation property [[budgetScenario2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_SCENARIO_2: OneToOneLink<Budgets, BudgetScenarios>;
    /**
     * All fields of the Budgets entity.
     */
    const _allFields: Array<NumberField<Budgets> | DateField<Budgets> | StringField<Budgets> | CollectionField<Budgets, BudgetLine> | CollectionField<Budgets, BudgetCostAccountingLine> | OneToOneLink<Budgets, BudgetDistributions> | OneToOneLink<Budgets, BudgetScenarios>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Budgets>;
    /**
     * All key fields of the Budgets entity.
     */
    const _keyFields: Array<Field<Budgets>>;
    /**
     * Mapping of all key field names to the respective static field property Budgets.
     */
    const _keys: {
        [keys: string]: Field<Budgets>;
    };
}
//# sourceMappingURL=Budgets.d.ts.map