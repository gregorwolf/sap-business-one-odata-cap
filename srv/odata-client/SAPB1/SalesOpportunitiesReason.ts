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
 * SalesOpportunitiesReason
 */
export interface SalesOpportunitiesReason<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Row No.
   * @nullable
   */
  rowNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Reason.
   * @nullable
   */
  reason?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * SalesOpportunitiesReasonField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitiesReasonField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SalesOpportunitiesReason,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SalesOpportunitiesReason.rowNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesOpportunitiesReason.sequenceNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SequenceNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesOpportunitiesReason.reason} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reason: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Reason', 'Edm.Int32', true);

  /**
   * Creates an instance of SalesOpportunitiesReasonField.
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
      SalesOpportunitiesReason,
      fieldOptions
    );
  }
}

export namespace SalesOpportunitiesReason {
  /**
   * Metadata information on all properties of the `SalesOpportunitiesReason` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunitiesReason>[] =
    [
      {
        originalName: 'RowNo',
        name: 'rowNo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'SequenceNo',
        name: 'sequenceNo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Reason',
        name: 'reason',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
