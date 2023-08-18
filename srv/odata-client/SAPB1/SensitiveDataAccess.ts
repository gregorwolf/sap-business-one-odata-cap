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
 * SensitiveDataAccess
 */
export interface SensitiveDataAccess<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Table.
   * @nullable
   */
  table?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Key 1.
   * @nullable
   */
  key1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Key 2.
   * @nullable
   */
  key2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Key 3.
   * @nullable
   */
  key3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Key 4.
   * @nullable
   */
  key4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Property Name.
   * @nullable
   */
  propertyName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Property Id.
   * @nullable
   */
  propertyId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Property Value.
   * @nullable
   */
  propertyValue?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * SensitiveDataAccessField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SensitiveDataAccessField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SensitiveDataAccess,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SensitiveDataAccess.table} property for query construction.
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
   * Representation of the {@link SensitiveDataAccess.key1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  key1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Key1', 'Edm.String', true);
  /**
   * Representation of the {@link SensitiveDataAccess.key2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  key2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Key2', 'Edm.String', true);
  /**
   * Representation of the {@link SensitiveDataAccess.key3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  key3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Key3', 'Edm.String', true);
  /**
   * Representation of the {@link SensitiveDataAccess.key4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  key4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Key4', 'Edm.String', true);
  /**
   * Representation of the {@link SensitiveDataAccess.propertyName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  propertyName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PropertyName', 'Edm.String', true);
  /**
   * Representation of the {@link SensitiveDataAccess.propertyId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  propertyId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PropertyID', 'Edm.Int32', true);
  /**
   * Representation of the {@link SensitiveDataAccess.propertyValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  propertyValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PropertyValue', 'Edm.String', true);

  /**
   * Creates an instance of SensitiveDataAccessField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, SensitiveDataAccess, fieldOptions);
  }
}

export namespace SensitiveDataAccess {
  /**
   * Metadata information on all properties of the `SensitiveDataAccess` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SensitiveDataAccess>[] = [
    {
      originalName: 'Table',
      name: 'table',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Key1',
      name: 'key1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Key2',
      name: 'key2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Key3',
      name: 'key3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Key4',
      name: 'key4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PropertyName',
      name: 'propertyName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PropertyID',
      name: 'propertyId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PropertyValue',
      name: 'propertyValue',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
