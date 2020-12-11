/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class BudgetLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BudgetLine> {
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

  /**
   * Creates an instance of BudgetLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BudgetLine);
  }
}

export namespace BudgetLine {
  /**
   * Metadata information on all properties of the `BudgetLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BudgetLine>[] = [{
    originalName: 'PrecentOfAnnualBudgetAmount',
    name: 'precentOfAnnualBudgetAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'RowDetails',
    name: 'rowDetails',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RowNumber',
    name: 'rowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FutExpenSysDebit',
    name: 'futExpenSysDebit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FutExpenDebit',
    name: 'futExpenDebit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FutExpenSysCredit',
    name: 'futExpenSysCredit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FutExpenCredit',
    name: 'futExpenCredit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FutIncomesSysCredit',
    name: 'futIncomesSysCredit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FutIncomesSysDebit',
    name: 'futIncomesSysDebit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'FutIncomesCredit',
    name: 'futIncomesCredit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BudgetSysTotDebit',
    name: 'budgetSysTotDebit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BalSysTotDebit',
    name: 'balSysTotDebit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BalTotDebit',
    name: 'balTotDebit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BudgetTotCredit',
    name: 'budgetTotCredit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BudgetSysTotCredit',
    name: 'budgetSysTotCredit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BudgetTotDebit',
    name: 'budgetTotDebit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BalSysTotCredit',
    name: 'balSysTotCredit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BalTotCredit',
    name: 'balTotCredit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BudgetKey',
    name: 'budgetKey',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AccountCode',
    name: 'accountCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FutureIncomeDeb',
    name: 'futureIncomeDeb',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BudgetLine {
    return deserializeComplexTypeV4(json, BudgetLine);
  }
}
