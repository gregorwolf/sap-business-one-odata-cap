/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class AccountCategoryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AccountCategoryParams> {
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

  /**
   * Creates an instance of AccountCategoryParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AccountCategoryParams);
  }
}

export namespace AccountCategoryParams {
  /**
   * Metadata information on all properties of the `AccountCategoryParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AccountCategoryParams>[] = [{
    originalName: 'CategoryCode',
    name: 'categoryCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CategoryName',
    name: 'categoryName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AccountCategoryParams {
    return deserializeComplexTypeV4(json, AccountCategoryParams);
  }
}
