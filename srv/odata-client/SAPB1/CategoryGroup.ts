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
 * CategoryGroup
 */
export interface CategoryGroup<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Auth Group Id.
   * @nullable
   */
  authGroupId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Category Id.
   * @nullable
   */
  categoryId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * CategoryGroupField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CategoryGroupField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CategoryGroup,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CategoryGroup.authGroupId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  authGroupId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AuthGroupId', 'Edm.Int32', true);
  /**
   * Representation of the {@link CategoryGroup.categoryId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  categoryId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CategoryId', 'Edm.Int32', true);

  /**
   * Creates an instance of CategoryGroupField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, CategoryGroup, fieldOptions);
  }
}

export namespace CategoryGroup {
  /**
   * Metadata information on all properties of the `CategoryGroup` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CategoryGroup>[] = [
    {
      originalName: 'AuthGroupId',
      name: 'authGroupId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CategoryId',
      name: 'categoryId',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
