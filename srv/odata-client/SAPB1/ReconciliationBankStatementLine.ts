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
 * ReconciliationBankStatementLine
 */
export interface ReconciliationBankStatementLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Bank Statement Account Code.
   * @nullable
   */
  bankStatementAccountCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sequence.
   * @nullable
   */
  sequence?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Ref 1.
   * @nullable
   */
  ref1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Amount.
   * @nullable
   */
  amount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ReconciliationBankStatementLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReconciliationBankStatementLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ReconciliationBankStatementLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ReconciliationBankStatementLine.bankStatementAccountCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankStatementAccountCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BankStatementAccountCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ReconciliationBankStatementLine.sequence} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequence: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Sequence', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReconciliationBankStatementLine.date} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Date', 'Edm.DateTimeOffset', true);
  /**
   * Representation of the {@link ReconciliationBankStatementLine.ref1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ref1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Ref1', 'Edm.String', true);
  /**
   * Representation of the {@link ReconciliationBankStatementLine.amount} property for query construction.
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
   * Representation of the {@link ReconciliationBankStatementLine.details} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true);

  /**
   * Creates an instance of ReconciliationBankStatementLineField.
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
      ReconciliationBankStatementLine,
      fieldOptions
    );
  }
}

export namespace ReconciliationBankStatementLine {
  /**
   * Metadata information on all properties of the `ReconciliationBankStatementLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReconciliationBankStatementLine>[] =
    [
      {
        originalName: 'BankStatementAccountCode',
        name: 'bankStatementAccountCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Sequence',
        name: 'sequence',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Date',
        name: 'date',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'Ref1',
        name: 'ref1',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Amount',
        name: 'amount',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'Details',
        name: 'details',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
