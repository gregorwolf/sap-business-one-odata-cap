/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ProductTreeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ProductTreeParams.treeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  treeCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TreeCode', this, 'Edm.String');
}

export namespace ProductTreeParams {
  export function build(json: { [keys: string]: FieldType }): ProductTreeParams {
    return createComplexType(json, {
      TreeCode: (treeCode: string) => ({ treeCode: edmToTs(treeCode, 'Edm.String') })
    });
  }
}
