/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * OriginalItemParams
 */
export interface OriginalItemParams {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Item Name.
   * @nullable
   */
  itemName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[OriginalItemParams.build]] instead.
 */
export function createOriginalItemParams(json: any): OriginalItemParams {
  return OriginalItemParams.build(json);
}

/**
 * OriginalItemParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class OriginalItemParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[OriginalItemParams.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[OriginalItemParams.itemName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemName', this, 'Edm.String');
}

export namespace OriginalItemParams {
  export function build(json: { [keys: string]: FieldType }): OriginalItemParams {
    return createComplexType(json, {
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      ItemName: (itemName: string) => ({ itemName: edmToTs(itemName, 'Edm.String') })
    });
  }
}
