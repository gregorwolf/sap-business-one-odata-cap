/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * AccountCategoryParams
 */
export interface AccountCategoryParams {
  /**
   * Category Code.
   * @nullable
   */
  categoryCode?: number;
  /**
   * Category Name.
   * @nullable
   */
  categoryName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[AccountCategoryParams.build]] instead.
 */
export function createAccountCategoryParams(json: any): AccountCategoryParams {
  return AccountCategoryParams.build(json);
}

/**
 * AccountCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AccountCategoryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[AccountCategoryParams.categoryCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  categoryCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CategoryCode', this, 'Edm.Int32');
  /**
   * Representation of the [[AccountCategoryParams.categoryName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  categoryName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CategoryName', this, 'Edm.String');
}

export namespace AccountCategoryParams {
  export function build(json: { [keys: string]: FieldType }): AccountCategoryParams {
    return createComplexType(json, {
      CategoryCode: (categoryCode: number) => ({ categoryCode: edmToTs(categoryCode, 'Edm.Int32') }),
      CategoryName: (categoryName: string) => ({ categoryName: edmToTs(categoryName, 'Edm.String') })
    });
  }
}
