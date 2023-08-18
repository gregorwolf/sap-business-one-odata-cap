/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * BudgetLine
 */
export interface BudgetLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Precent Of Annual Budget Amount.
   * @nullable
   */
  precentOfAnnualBudgetAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Row Details.
   * @nullable
   */
  rowDetails?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Fut Expen Sys Debit.
   * @nullable
   */
  futExpenSysDebit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Fut Expen Debit.
   * @nullable
   */
  futExpenDebit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Fut Expen Sys Credit.
   * @nullable
   */
  futExpenSysCredit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Fut Expen Credit.
   * @nullable
   */
  futExpenCredit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Fut Incomes Sys Credit.
   * @nullable
   */
  futIncomesSysCredit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Fut Incomes Sys Debit.
   * @nullable
   */
  futIncomesSysDebit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Fut Incomes Credit.
   * @nullable
   */
  futIncomesCredit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Budget Sys Tot Debit.
   * @nullable
   */
  budgetSysTotDebit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Bal Sys Tot Debit.
   * @nullable
   */
  balSysTotDebit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Bal Tot Debit.
   * @nullable
   */
  balTotDebit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Budget Tot Credit.
   * @nullable
   */
  budgetTotCredit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Budget Sys Tot Credit.
   * @nullable
   */
  budgetSysTotCredit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Budget Tot Debit.
   * @nullable
   */
  budgetTotDebit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Bal Sys Tot Credit.
   * @nullable
   */
  balSysTotCredit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Bal Tot Credit.
   * @nullable
   */
  balTotCredit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Budget Key.
   * @nullable
   */
  budgetKey?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Future Income Deb.
   * @nullable
   */
  futureIncomeDeb?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * BudgetLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BudgetLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BudgetLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BudgetLine.precentOfAnnualBudgetAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  precentOfAnnualBudgetAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PrecentOfAnnualBudgetAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetLine.rowDetails} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowDetails: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowDetails', 'Edm.String', true);
  /**
   * Representation of the {@link BudgetLine.rowNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link BudgetLine.futExpenSysDebit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futExpenSysDebit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FutExpenSysDebit',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetLine.futExpenDebit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futExpenDebit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FutExpenDebit', 'Edm.Double', true);
  /**
   * Representation of the {@link BudgetLine.futExpenSysCredit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futExpenSysCredit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FutExpenSysCredit',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetLine.futExpenCredit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futExpenCredit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FutExpenCredit',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetLine.futIncomesSysCredit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futIncomesSysCredit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FutIncomesSysCredit',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetLine.futIncomesSysDebit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futIncomesSysDebit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FutIncomesSysDebit',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetLine.futIncomesCredit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futIncomesCredit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FutIncomesCredit',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetLine.budgetSysTotDebit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  budgetSysTotDebit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BudgetSysTotDebit',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetLine.balSysTotDebit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  balSysTotDebit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BalSysTotDebit',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetLine.balTotDebit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  balTotDebit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BalTotDebit', 'Edm.Double', true);
  /**
   * Representation of the {@link BudgetLine.budgetTotCredit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  budgetTotCredit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BudgetTotCredit',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetLine.budgetSysTotCredit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  budgetSysTotCredit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BudgetSysTotCredit',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetLine.budgetTotDebit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  budgetTotDebit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BudgetTotDebit',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetLine.balSysTotCredit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  balSysTotCredit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BalSysTotCredit',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetLine.balTotCredit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  balTotCredit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BalTotCredit', 'Edm.Double', true);
  /**
   * Representation of the {@link BudgetLine.budgetKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  budgetKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BudgetKey', 'Edm.Int32', true);
  /**
   * Representation of the {@link BudgetLine.accountCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountCode', 'Edm.String', true);
  /**
   * Representation of the {@link BudgetLine.futureIncomeDeb} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  futureIncomeDeb: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FutureIncomeDeb',
    'Edm.Double',
    true
  );

  /**
   * Creates an instance of BudgetLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BudgetLine, fieldOptions);
  }
}

export namespace BudgetLine {
  /**
   * Metadata information on all properties of the `BudgetLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BudgetLine>[] = [
    {
      originalName: 'PrecentOfAnnualBudgetAmount',
      name: 'precentOfAnnualBudgetAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'RowDetails',
      name: 'rowDetails',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RowNumber',
      name: 'rowNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'FutExpenSysDebit',
      name: 'futExpenSysDebit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FutExpenDebit',
      name: 'futExpenDebit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FutExpenSysCredit',
      name: 'futExpenSysCredit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FutExpenCredit',
      name: 'futExpenCredit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FutIncomesSysCredit',
      name: 'futIncomesSysCredit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FutIncomesSysDebit',
      name: 'futIncomesSysDebit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FutIncomesCredit',
      name: 'futIncomesCredit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BudgetSysTotDebit',
      name: 'budgetSysTotDebit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BalSysTotDebit',
      name: 'balSysTotDebit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BalTotDebit',
      name: 'balTotDebit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BudgetTotCredit',
      name: 'budgetTotCredit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BudgetSysTotCredit',
      name: 'budgetSysTotCredit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BudgetTotDebit',
      name: 'budgetTotDebit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BalSysTotCredit',
      name: 'balSysTotCredit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BalTotCredit',
      name: 'balTotCredit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BudgetKey',
      name: 'budgetKey',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AccountCode',
      name: 'accountCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FutureIncomeDeb',
      name: 'futureIncomeDeb',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
