/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BlobTableKeySegment } from './BlobTableKeySegment';
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
 * BlobParams
 */
export interface BlobParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Table.
   * @nullable
   */
  table?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Field.
   * @nullable
   */
  field?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * File Name.
   * @nullable
   */
  fileName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Blob Table Key Segments.
   * @nullable
   */
  blobTableKeySegments?: DeserializedType<
    DeSerializersT,
    'SAPB1.BlobTableKeySegment'
  >;
}

/**
 * BlobParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BlobParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BlobParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BlobParams.table} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  table: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Table', 'Edm.String', true);
  /**
   * Representation of the {@link BlobParams.field} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  field: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Field', 'Edm.String', true);
  /**
   * Representation of the {@link BlobParams.fileName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FileName', 'Edm.String', true);
  /**
   * Representation of the {@link BlobParams.blobTableKeySegments} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blobTableKeySegments: CollectionField<
    EntityT,
    DeSerializersT,
    BlobTableKeySegment,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'BlobTableKeySegments',
    BlobTableKeySegment,
    true
  );

  /**
   * Creates an instance of BlobParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BlobParams, fieldOptions);
  }
}

export namespace BlobParams {
  /**
   * Metadata information on all properties of the `BlobParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BlobParams>[] = [
    {
      originalName: 'Table',
      name: 'table',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Field',
      name: 'field',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FileName',
      name: 'fileName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BlobTableKeySegments',
      name: 'blobTableKeySegments',
      type: BlobTableKeySegment,
      isCollection: true
    }
  ];
}
