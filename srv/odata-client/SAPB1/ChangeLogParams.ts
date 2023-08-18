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
 * ChangeLogParams
 */
export interface ChangeLogParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Log Instance.
   * @nullable
   */
  logInstance?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Updated Date.
   * @nullable
   */
  updatedDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * User Name.
   * @nullable
   */
  userName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Object Code.
   * @nullable
   */
  objectCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ChangeLogParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChangeLogParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ChangeLogParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ChangeLogParams.logInstance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logInstance: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LogInstance', 'Edm.Int32', true);
  /**
   * Representation of the {@link ChangeLogParams.updatedDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updatedDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UpdatedDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ChangeLogParams.userName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UserName', 'Edm.String', true);
  /**
   * Representation of the {@link ChangeLogParams.objectCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ObjectCode', 'Edm.String', true);

  /**
   * Creates an instance of ChangeLogParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ChangeLogParams, fieldOptions);
  }
}

export namespace ChangeLogParams {
  /**
   * Metadata information on all properties of the `ChangeLogParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ChangeLogParams>[] = [
    {
      originalName: 'LogInstance',
      name: 'logInstance',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UpdatedDate',
      name: 'updatedDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'UserName',
      name: 'userName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ObjectCode',
      name: 'objectCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
