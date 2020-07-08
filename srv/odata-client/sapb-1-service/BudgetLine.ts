/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createBudgetLine(json: any): BudgetLine {
  return BudgetLine.build(json);
}

/**
 * BudgetLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BudgetLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BudgetLine.precentOfAnnualBudgetAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  precentOfAnnualBudgetAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PrecentOfAnnualBudgetAmount', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.rowDetails]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowDetails: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RowDetails', this, 'Edm.String');
  /**
   * Representation of the [[BudgetLine.rowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BudgetLine.futExpenSysDebit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futExpenSysDebit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FutExpenSysDebit', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.futExpenDebit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futExpenDebit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FutExpenDebit', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.futExpenSysCredit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futExpenSysCredit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FutExpenSysCredit', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.futExpenCredit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futExpenCredit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FutExpenCredit', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.futIncomesSysCredit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futIncomesSysCredit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FutIncomesSysCredit', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.futIncomesSysDebit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futIncomesSysDebit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FutIncomesSysDebit', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.futIncomesCredit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futIncomesCredit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FutIncomesCredit', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.budgetSysTotDebit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  budgetSysTotDebit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BudgetSysTotDebit', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.balSysTotDebit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  balSysTotDebit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BalSysTotDebit', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.balTotDebit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  balTotDebit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BalTotDebit', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.budgetTotCredit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  budgetTotCredit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BudgetTotCredit', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.budgetSysTotCredit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  budgetSysTotCredit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BudgetSysTotCredit', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.budgetTotDebit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  budgetTotDebit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BudgetTotDebit', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.balSysTotCredit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  balSysTotCredit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BalSysTotCredit', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.balTotCredit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  balTotCredit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BalTotCredit', this, 'Edm.Double');
  /**
   * Representation of the [[BudgetLine.budgetKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  budgetKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BudgetKey', this, 'Edm.Int32');
  /**
   * Representation of the [[BudgetLine.accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCode', this, 'Edm.String');
  /**
   * Representation of the [[BudgetLine.futureIncomeDeb]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futureIncomeDeb: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FutureIncomeDeb', this, 'Edm.Double');
}

export namespace BudgetLine {
  export function build(json: { [keys: string]: FieldType }): BudgetLine {
    return createComplexType(json, {
      PrecentOfAnnualBudgetAmount: (precentOfAnnualBudgetAmount: number) => ({ precentOfAnnualBudgetAmount: edmToTs(precentOfAnnualBudgetAmount, 'Edm.Double') }),
      RowDetails: (rowDetails: string) => ({ rowDetails: edmToTs(rowDetails, 'Edm.String') }),
      RowNumber: (rowNumber: number) => ({ rowNumber: edmToTs(rowNumber, 'Edm.Int32') }),
      FutExpenSysDebit: (futExpenSysDebit: number) => ({ futExpenSysDebit: edmToTs(futExpenSysDebit, 'Edm.Double') }),
      FutExpenDebit: (futExpenDebit: number) => ({ futExpenDebit: edmToTs(futExpenDebit, 'Edm.Double') }),
      FutExpenSysCredit: (futExpenSysCredit: number) => ({ futExpenSysCredit: edmToTs(futExpenSysCredit, 'Edm.Double') }),
      FutExpenCredit: (futExpenCredit: number) => ({ futExpenCredit: edmToTs(futExpenCredit, 'Edm.Double') }),
      FutIncomesSysCredit: (futIncomesSysCredit: number) => ({ futIncomesSysCredit: edmToTs(futIncomesSysCredit, 'Edm.Double') }),
      FutIncomesSysDebit: (futIncomesSysDebit: number) => ({ futIncomesSysDebit: edmToTs(futIncomesSysDebit, 'Edm.Double') }),
      FutIncomesCredit: (futIncomesCredit: number) => ({ futIncomesCredit: edmToTs(futIncomesCredit, 'Edm.Double') }),
      BudgetSysTotDebit: (budgetSysTotDebit: number) => ({ budgetSysTotDebit: edmToTs(budgetSysTotDebit, 'Edm.Double') }),
      BalSysTotDebit: (balSysTotDebit: number) => ({ balSysTotDebit: edmToTs(balSysTotDebit, 'Edm.Double') }),
      BalTotDebit: (balTotDebit: number) => ({ balTotDebit: edmToTs(balTotDebit, 'Edm.Double') }),
      BudgetTotCredit: (budgetTotCredit: number) => ({ budgetTotCredit: edmToTs(budgetTotCredit, 'Edm.Double') }),
      BudgetSysTotCredit: (budgetSysTotCredit: number) => ({ budgetSysTotCredit: edmToTs(budgetSysTotCredit, 'Edm.Double') }),
      BudgetTotDebit: (budgetTotDebit: number) => ({ budgetTotDebit: edmToTs(budgetTotDebit, 'Edm.Double') }),
      BalSysTotCredit: (balSysTotCredit: number) => ({ balSysTotCredit: edmToTs(balSysTotCredit, 'Edm.Double') }),
      BalTotCredit: (balTotCredit: number) => ({ balTotCredit: edmToTs(balTotCredit, 'Edm.Double') }),
      BudgetKey: (budgetKey: number) => ({ budgetKey: edmToTs(budgetKey, 'Edm.Int32') }),
      AccountCode: (accountCode: string) => ({ accountCode: edmToTs(accountCode, 'Edm.String') }),
      FutureIncomeDeb: (futureIncomeDeb: number) => ({ futureIncomeDeb: edmToTs(futureIncomeDeb, 'Edm.Double') })
    });
  }
}
