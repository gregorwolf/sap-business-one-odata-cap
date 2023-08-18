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
 * UserObjectMdChildTable
 */
export interface UserObjectMdChildTable<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Son Number.
   * @nullable
   */
  sonNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Table Name.
   * @nullable
   */
  tableName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Log Table Name.
   * @nullable
   */
  logTableName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Object Name.
   * @nullable
   */
  objectName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * UserObjectMdChildTableField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserObjectMdChildTableField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UserObjectMdChildTable,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UserObjectMdChildTable.sonNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sonNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SonNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link UserObjectMdChildTable.tableName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tableName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TableName', 'Edm.String', true);
  /**
   * Representation of the {@link UserObjectMdChildTable.logTableName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logTableName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LogTableName', 'Edm.String', true);
  /**
   * Representation of the {@link UserObjectMdChildTable.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true);
  /**
   * Representation of the {@link UserObjectMdChildTable.objectName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ObjectName', 'Edm.String', true);

  /**
   * Creates an instance of UserObjectMdChildTableField.
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
      UserObjectMdChildTable,
      fieldOptions
    );
  }
}

export namespace UserObjectMdChildTable {
  /**
   * Metadata information on all properties of the `UserObjectMdChildTable` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserObjectMdChildTable>[] = [
    {
      originalName: 'SonNumber',
      name: 'sonNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TableName',
      name: 'tableName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LogTableName',
      name: 'logTableName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ObjectName',
      name: 'objectName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
