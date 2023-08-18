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
 * UserFieldMdParams
 */
export interface UserFieldMdParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Table Name.
   * @nullable
   */
  tableName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Field Id.
   * @nullable
   */
  fieldId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * UserFieldMdParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserFieldMdParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UserFieldMdParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UserFieldMdParams.tableName} property for query construction.
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
   * Representation of the {@link UserFieldMdParams.fieldId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FieldID', 'Edm.Int32', true);

  /**
   * Creates an instance of UserFieldMdParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, UserFieldMdParams, fieldOptions);
  }
}

export namespace UserFieldMdParams {
  /**
   * Metadata information on all properties of the `UserFieldMdParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserFieldMdParams>[] = [
    {
      originalName: 'TableName',
      name: 'tableName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FieldID',
      name: 'fieldId',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
