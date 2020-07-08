/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class CategoryGroupField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace CategoryGroup {
  export function build(json: { [keys: string]: FieldType }): CategoryGroup {
    return createComplexType(json, {
      AuthGroupId: (authGroupId: number) => ({ authGroupId: edmToTs(authGroupId, 'Edm.Int32') }),
      CategoryId: (categoryId: number) => ({ categoryId: edmToTs(categoryId, 'Edm.Int32') })
    });
  }
}
