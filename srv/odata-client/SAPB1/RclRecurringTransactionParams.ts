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
 * RclRecurringTransactionParams
 */
export interface RclRecurringTransactionParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Transaction Id.
   * @nullable
   */
  transactionId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Planned Date.
   * @nullable
   */
  plannedDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
}

/**
 * RclRecurringTransactionParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class RclRecurringTransactionParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  RclRecurringTransactionParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link RclRecurringTransactionParams.transactionId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TransactionID', 'Edm.Int32', true);
  /**
   * Representation of the {@link RclRecurringTransactionParams.plannedDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plannedDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PlannedDate',
    'Edm.DateTimeOffset',
    true
  );

  /**
   * Creates an instance of RclRecurringTransactionParamsField.
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
      RclRecurringTransactionParams,
      fieldOptions
    );
  }
}

export namespace RclRecurringTransactionParams {
  /**
   * Metadata information on all properties of the `RclRecurringTransactionParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RclRecurringTransactionParams>[] =
    [
      {
        originalName: 'TransactionID',
        name: 'transactionId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'PlannedDate',
        name: 'plannedDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      }
    ];
}
