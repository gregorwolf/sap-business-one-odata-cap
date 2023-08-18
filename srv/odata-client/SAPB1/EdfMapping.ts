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
 * EdfMapping
 */
export interface EdfMapping<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Format Id.
   * @nullable
   */
  formatId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Hash.
   * @nullable
   */
  hash?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Mapping.
   * @nullable
   */
  mapping?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * EdfMappingField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EdfMappingField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EdfMapping,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EdfMapping.formatId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formatId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FormatID', 'Edm.Int32', true);
  /**
   * Representation of the {@link EdfMapping.hash} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hash: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Hash', 'Edm.String', true);
  /**
   * Representation of the {@link EdfMapping.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);
  /**
   * Representation of the {@link EdfMapping.mapping} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mapping: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Mapping', 'Edm.String', true);

  /**
   * Creates an instance of EdfMappingField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EdfMapping, fieldOptions);
  }
}

export namespace EdfMapping {
  /**
   * Metadata information on all properties of the `EdfMapping` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EdfMapping>[] = [
    {
      originalName: 'FormatID',
      name: 'formatId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Hash',
      name: 'hash',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Name',
      name: 'name',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Mapping',
      name: 'mapping',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
