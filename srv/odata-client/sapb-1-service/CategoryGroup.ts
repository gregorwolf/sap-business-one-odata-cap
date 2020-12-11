/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CategoryGroup
 */
export interface CategoryGroup {
  /**
   * Auth Group Id.
   * @nullable
   */
  authGroupId?: number;
  /**
   * Category Id.
   * @nullable
   */
  categoryId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CategoryGroup.build]] instead.
 */
export function createCategoryGroup(json: any): CategoryGroup {
  return CategoryGroup.build(json);
}

/**
 * CategoryGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CategoryGroupField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CategoryGroup> {
  /**
   * Representation of the [[CategoryGroup.authGroupId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  authGroupId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AuthGroupId', this, 'Edm.Int32');
  /**
   * Representation of the [[CategoryGroup.categoryId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  categoryId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CategoryId', this, 'Edm.Int32');

  /**
   * Creates an instance of CategoryGroupField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CategoryGroup);
  }
}

export namespace CategoryGroup {
  /**
   * Metadata information on all properties of the `CategoryGroup` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CategoryGroup>[] = [{
    originalName: 'AuthGroupId',
    name: 'authGroupId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CategoryId',
    name: 'categoryId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CategoryGroup {
    return deserializeComplexTypeV4(json, CategoryGroup);
  }
}
