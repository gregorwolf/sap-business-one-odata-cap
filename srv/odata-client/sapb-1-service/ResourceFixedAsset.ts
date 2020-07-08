/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ResourceFixedAsset
 */
export interface ResourceFixedAsset {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ResourceFixedAsset.build]] instead.
 */
export function createResourceFixedAsset(json: any): ResourceFixedAsset {
  return ResourceFixedAsset.build(json);
}

/**
 * ResourceFixedAssetField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ResourceFixedAssetField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ResourceFixedAsset.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[ResourceFixedAsset.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
}

export namespace ResourceFixedAsset {
  export function build(json: { [keys: string]: FieldType }): ResourceFixedAsset {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') })
    });
  }
}
