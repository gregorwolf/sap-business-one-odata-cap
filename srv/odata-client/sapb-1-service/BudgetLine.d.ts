import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BudgetLine
 */
export interface BudgetLine {
    /**
     * Precent Of Annual Budget Amount.
     * @nullable
     */
    precentOfAnnualBudgetAmount?: number;
    /**
     * Row Details.
     * @nullable
     */
    rowDetails?: string;
    /**
     * Row Number.
     * @nullable
     */
    rowNumber?: number;
    /**
     * Fut Expen Sys Debit.
     * @nullable
     */
    futExpenSysDebit?: number;
    /**
     * Fut Expen Debit.
     * @nullable
     */
    futExpenDebit?: number;
    /**
     * Fut Expen Sys Credit.
     * @nullable
     */
    futExpenSysCredit?: number;
    /**
     * Fut Expen Credit.
     * @nullable
     */
    futExpenCredit?: number;
    /**
     * Fut Incomes Sys Credit.
     * @nullable
     */
    futIncomesSysCredit?: number;
    /**
     * Fut Incomes Sys Debit.
     * @nullable
     */
    futIncomesSysDebit?: number;
    /**
     * Fut Incomes Credit.
     * @nullable
     */
    futIncomesCredit?: number;
    /**
     * Budget Sys Tot Debit.
     * @nullable
     */
    budgetSysTotDebit?: number;
    /**
     * Bal Sys Tot Debit.
     * @nullable
     */
    balSysTotDebit?: number;
    /**
     * Bal Tot Debit.
     * @nullable
     */
    balTotDebit?: number;
    /**
     * Budget Tot Credit.
     * @nullable
     */
    budgetTotCredit?: number;
    /**
     * Budget Sys Tot Credit.
     * @nullable
     */
    budgetSysTotCredit?: number;
    /**
     * Budget Tot Debit.
     * @nullable
     */
    budgetTotDebit?: number;
    /**
     * Bal Sys Tot Credit.
     * @nullable
     */
    balSysTotCredit?: number;
    /**
     * Bal Tot Credit.
     * @nullable
     */
    balTotCredit?: number;
    /**
     * Budget Key.
     * @nullable
     */
    budgetKey?: number;
    /**
     * Account Code.
     * @nullable
     */
    accountCode?: string;
    /**
     * Future Income Deb.
     * @nullable
     */
    futureIncomeDeb?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BudgetLine.build]] instead.
 */
export declare function createBudgetLine(json: any): BudgetLine;
/**
 * BudgetLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BudgetLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BudgetLine.precentOfAnnualBudgetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    precentOfAnnualBudgetAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.rowDetails]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowDetails: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.rowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.futExpenSysDebit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    futExpenSysDebit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.futExpenDebit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    futExpenDebit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.futExpenSysCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    futExpenSysCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.futExpenCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    futExpenCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.futIncomesSysCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    futIncomesSysCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.futIncomesSysDebit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    futIncomesSysDebit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.futIncomesCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    futIncomesCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.budgetSysTotDebit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    budgetSysTotDebit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.balSysTotDebit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    balSysTotDebit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.balTotDebit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    balTotDebit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.budgetTotCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    budgetTotCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.budgetSysTotCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    budgetSysTotCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.budgetTotDebit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    budgetTotDebit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.balSysTotCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    balSysTotCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.balTotCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    balTotCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.budgetKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    budgetKey: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BudgetLine.futureIncomeDeb]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    futureIncomeDeb: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BudgetLine {
    function build(json: {
        [keys: string]: FieldType;
    }): BudgetLine;
}
//# sourceMappingURL=BudgetLine.d.ts.map