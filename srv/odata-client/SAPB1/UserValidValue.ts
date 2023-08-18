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
 * UserValidValue
 */
export interface UserValidValue<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Field Value.
   * @nullable
   */
  fieldValue?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * UserValidValueField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserValidValueField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UserValidValue,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UserValidValue.fieldValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FieldValue', 'Edm.String', true);

  /**
   * Creates an instance of UserValidValueField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, UserValidValue, fieldOptions);
  }
}

export namespace UserValidValue {
  /**
   * Metadata information on all properties of the `UserValidValue` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserValidValue>[] = [
    {
      originalName: 'FieldValue',
      name: 'fieldValue',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
