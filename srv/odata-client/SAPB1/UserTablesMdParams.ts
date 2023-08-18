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
 * UserTablesMdParams
 */
export interface UserTablesMdParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Table Name.
   * @nullable
   */
  tableName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * UserTablesMdParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserTablesMdParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UserTablesMdParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UserTablesMdParams.tableName} property for query construction.
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
   * Creates an instance of UserTablesMdParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, UserTablesMdParams, fieldOptions);
  }
}

export namespace UserTablesMdParams {
  /**
   * Metadata information on all properties of the `UserTablesMdParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserTablesMdParams>[] = [
    {
      originalName: 'TableName',
      name: 'tableName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
