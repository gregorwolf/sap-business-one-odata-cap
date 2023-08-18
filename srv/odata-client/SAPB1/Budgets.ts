/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { BudgetLine } from './BudgetLine';
import { BudgetCostAccountingLine } from './BudgetCostAccountingLine';
import type { BudgetsApi } from './BudgetsApi';
import {
  BudgetDistributions,
  BudgetDistributionsType
} from './BudgetDistributions';
import { BudgetScenarios, BudgetScenariosType } from './BudgetScenarios';

/**
 * This class represents the entity "Budgets" of service "SAPB1".
 */
export class Budgets<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetsType<T>
{
  /**
   * Technical entity name for Budgets.
   */
  static _entityName = 'Budgets';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Budgets entity
   */
  static _keys = ['Numerator'];
  /**
   * Future Annual Expenses Credit Sys.
   * @nullable
   */
  futureAnnualExpensesCreditSys?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Future Annual Expenses Credit Loc.
   * @nullable
   */
  futureAnnualExpensesCreditLoc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Future Annual Expenses Debit Sys.
   * @nullable
   */
  futureAnnualExpensesDebitSys?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Future Annual Expenses Debit Loc.
   * @nullable
   */
  futureAnnualExpensesDebitLoc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Future Annual Revenues Credit.
   * @nullable
   */
  futureAnnualRevenuesCredit?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Future Annual Revenues Debit.
   * @nullable
   */
  futureAnnualRevenuesDebit?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Future Revenues Debit Sys.
   * @nullable
   */
  futureRevenuesDebitSys?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Future Revenues Debit Loc.
   * @nullable
   */
  futureRevenuesDebitLoc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Parent Acc Percent.
   * @nullable
   */
  parentAccPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Startof Fiscal Year.
   * @nullable
   */
  startofFiscalYear?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Parent Account Key.
   * @nullable
   */
  parentAccountKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Annual Budget Debit Sys.
   * @nullable
   */
  totalAnnualBudgetDebitSys?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Budget Balance Debit Sys.
   * @nullable
   */
  budgetBalanceDebitSys?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Budget Balance Debit Loc.
   * @nullable
   */
  budgetBalanceDebitLoc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Annual Budget Debit Loc.
   * @nullable
   */
  totalAnnualBudgetDebitLoc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Annual Budget Credit Sys.
   * @nullable
   */
  totalAnnualBudgetCreditSys?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Total Annual Budget Credit Loc.
   * @nullable
   */
  totalAnnualBudgetCreditLoc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Budget Balance Credit Sys.
   * @nullable
   */
  budgetBalanceCreditSys?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Budget Balance Credit Loc.
   * @nullable
   */
  budgetBalanceCreditLoc?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Division Code.
   * @nullable
   */
  divisionCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Numerator.
   */
  numerator!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Budget Scenario.
   * @nullable
   */
  budgetScenario?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Budget Lines.
   * @nullable
   */
  budgetLines?: BudgetLine<T>[] | null;
  /**
   * Budget Cost Accounting Lines.
   * @nullable
   */
  budgetCostAccountingLines?: BudgetCostAccountingLine<T>[] | null;
  /**
   * One-to-one navigation property to the {@link BudgetDistributions} entity.
   */
  budgetDistribution?: BudgetDistributions<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetScenarios} entity.
   */
  budgetScenario2?: BudgetScenarios<T> | null;

  constructor(readonly _entityApi: BudgetsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetsType<T extends DeSerializers = DefaultDeSerializers> {
  futureAnnualExpensesCreditSys?: DeserializedType<T, 'Edm.Double'> | null;
  futureAnnualExpensesCreditLoc?: DeserializedType<T, 'Edm.Double'> | null;
  futureAnnualExpensesDebitSys?: DeserializedType<T, 'Edm.Double'> | null;
  futureAnnualExpensesDebitLoc?: DeserializedType<T, 'Edm.Double'> | null;
  futureAnnualRevenuesCredit?: DeserializedType<T, 'Edm.Double'> | null;
  futureAnnualRevenuesDebit?: DeserializedType<T, 'Edm.Double'> | null;
  futureRevenuesDebitSys?: DeserializedType<T, 'Edm.Double'> | null;
  futureRevenuesDebitLoc?: DeserializedType<T, 'Edm.Double'> | null;
  parentAccPercent?: DeserializedType<T, 'Edm.Double'> | null;
  startofFiscalYear?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  parentAccountKey?: DeserializedType<T, 'Edm.String'> | null;
  totalAnnualBudgetDebitSys?: DeserializedType<T, 'Edm.Double'> | null;
  budgetBalanceDebitSys?: DeserializedType<T, 'Edm.Double'> | null;
  budgetBalanceDebitLoc?: DeserializedType<T, 'Edm.Double'> | null;
  totalAnnualBudgetDebitLoc?: DeserializedType<T, 'Edm.Double'> | null;
  totalAnnualBudgetCreditSys?: DeserializedType<T, 'Edm.Double'> | null;
  totalAnnualBudgetCreditLoc?: DeserializedType<T, 'Edm.Double'> | null;
  budgetBalanceCreditSys?: DeserializedType<T, 'Edm.Double'> | null;
  budgetBalanceCreditLoc?: DeserializedType<T, 'Edm.Double'> | null;
  divisionCode?: DeserializedType<T, 'Edm.Int32'> | null;
  accountCode?: DeserializedType<T, 'Edm.String'> | null;
  numerator: DeserializedType<T, 'Edm.Int32'>;
  budgetScenario?: DeserializedType<T, 'Edm.Int32'> | null;
  budgetLines?: BudgetLine<T>[] | null;
  budgetCostAccountingLines?: BudgetCostAccountingLine<T>[] | null;
  budgetDistribution?: BudgetDistributionsType<T> | null;
  budgetScenario2?: BudgetScenariosType<T> | null;
}
