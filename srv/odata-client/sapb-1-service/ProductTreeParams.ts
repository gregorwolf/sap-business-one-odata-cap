/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ProductTreeParams
 */
export interface ProductTreeParams {
  /**
   * Tree Code.
   * @nullable
   */
  treeCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ProductTreeParams.build]] instead.
 */
export function createProductTreeParams(json: any): ProductTreeParams {
  return ProductTreeParams.build(json);
}

/**
 * ProductTreeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProductTreeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProductTreeParams> {
  /**
   * Representation of the [[ProductTreeParams.treeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  treeCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TreeCode', this, 'Edm.String');

  /**
   * Creates an instance of ProductTreeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ProductTreeParams);
  }
}

export namespace ProductTreeParams {
  /**
   * Metadata information on all properties of the `ProductTreeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProductTreeParams>[] = [{
    originalName: 'TreeCode',
    name: 'treeCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ProductTreeParams {
    return deserializeComplexTypeV4(json, ProductTreeParams);
  }
}
