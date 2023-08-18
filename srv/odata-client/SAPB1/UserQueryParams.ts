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
 * UserQueryParams
 */
export interface UserQueryParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Internal Key.
   * @nullable
   */
  internalKey?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Query Category.
   * @nullable
   */
  queryCategory?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * UserQueryParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserQueryParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UserQueryParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UserQueryParams.internalKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InternalKey', 'Edm.Int32', true);
  /**
   * Representation of the {@link UserQueryParams.queryCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  queryCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('QueryCategory', 'Edm.Int32', true);

  /**
   * Creates an instance of UserQueryParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, UserQueryParams, fieldOptions);
  }
}

export namespace UserQueryParams {
  /**
   * Metadata information on all properties of the `UserQueryParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserQueryParams>[] = [
    {
      originalName: 'InternalKey',
      name: 'internalKey',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'QueryCategory',
      name: 'queryCategory',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
