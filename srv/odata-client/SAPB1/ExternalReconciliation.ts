/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReconciliationJournalEntryLine } from './ReconciliationJournalEntryLine';
import { ReconciliationBankStatementLine } from './ReconciliationBankStatementLine';
import { ReconciliationAccountTypeEnum } from './ReconciliationAccountTypeEnum';
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
 * ExternalReconciliation
 */
export interface ExternalReconciliation<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Reconciliation Account Type.
   * @nullable
   */
  reconciliationAccountType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Reconciliation No.
   * @nullable
   */
  reconciliationNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Amount.
   * @nullable
   */
  amount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Currency Type.
   * @nullable
   */
  currencyType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Reconciliation Type.
   * @nullable
   */
  reconciliationType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Reconciliation Date.
   * @nullable
   */
  reconciliationDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Reconciliation Journal Entry Lines.
   * @nullable
   */
  reconciliationJournalEntryLines?: DeserializedType<
    DeSerializersT,
    'SAPB1.ReconciliationJournalEntryLine'
  >;
  /**
   * Reconciliation Bank Statement Lines.
   * @nullable
   */
  reconciliationBankStatementLines?: DeserializedType<
    DeSerializersT,
    'SAPB1.ReconciliationBankStatementLine'
  >;
}

/**
 * ExternalReconciliationField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExternalReconciliationField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ExternalReconciliation,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ExternalReconciliation.reconciliationAccountType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationAccountType: EnumField<
    EntityT,
    DeSerializersT,
    ReconciliationAccountTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ReconciliationAccountType',
    ReconciliationAccountTypeEnum,
    true
  );
  /**
   * Representation of the {@link ExternalReconciliation.accountCode} property for query construction.
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
   * Representation of the {@link ExternalReconciliation.reconciliationNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReconciliationNo',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ExternalReconciliation.amount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Amount', 'Edm.Double', true);
  /**
   * Representation of the {@link ExternalReconciliation.currencyType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currencyType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CurrencyType', 'Edm.String', true);
  /**
   * Representation of the {@link ExternalReconciliation.reconciliationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReconciliationType',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ExternalReconciliation.reconciliationDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReconciliationDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ExternalReconciliation.creationDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creationDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreationDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ExternalReconciliation.reconciliationJournalEntryLines} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationJournalEntryLines: CollectionField<
    EntityT,
    DeSerializersT,
    ReconciliationJournalEntryLine,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'ReconciliationJournalEntryLines',
    ReconciliationJournalEntryLine,
    true
  );
  /**
   * Representation of the {@link ExternalReconciliation.reconciliationBankStatementLines} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationBankStatementLines: CollectionField<
    EntityT,
    DeSerializersT,
    ReconciliationBankStatementLine,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'ReconciliationBankStatementLines',
    ReconciliationBankStatementLine,
    true
  );

  /**
   * Creates an instance of ExternalReconciliationField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      ExternalReconciliation,
      fieldOptions
    );
  }
}

export namespace ExternalReconciliation {
  /**
   * Metadata information on all properties of the `ExternalReconciliation` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExternalReconciliation>[] = [
    {
      originalName: 'ReconciliationAccountType',
      name: 'reconciliationAccountType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'AccountCode',
      name: 'accountCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ReconciliationNo',
      name: 'reconciliationNo',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Amount',
      name: 'amount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CurrencyType',
      name: 'currencyType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ReconciliationType',
      name: 'reconciliationType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ReconciliationDate',
      name: 'reconciliationDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'CreationDate',
      name: 'creationDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'ReconciliationJournalEntryLines',
      name: 'reconciliationJournalEntryLines',
      type: ReconciliationJournalEntryLine,
      isCollection: true
    },
    {
      originalName: 'ReconciliationBankStatementLines',
      name: 'reconciliationBankStatementLines',
      type: ReconciliationBankStatementLine,
      isCollection: true
    }
  ];
}
