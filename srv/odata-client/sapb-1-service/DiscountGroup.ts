/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DiscountGroup
 */
export interface DiscountGroup {
  /**
   * Object Entry.
   * @nullable
   */
  objectEntry?: string;
  /**
   * Discount Percentage.
   * @nullable
   */
  discountPercentage?: number;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[DiscountGroup.build]] instead.
 */
export function createDiscountGroup(json: any): DiscountGroup {
  return DiscountGroup.build(json);
}

/**
 * DiscountGroupField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DiscountGroupField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DiscountGroup.objectEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectEntry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ObjectEntry', this, 'Edm.String');
  /**
   * Representation of the [[DiscountGroup.discountPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountPercentage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DiscountPercentage', this, 'Edm.Double');
  /**
   * Representation of the [[DiscountGroup.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
}

export namespace DiscountGroup {
  export function build(json: { [keys: string]: FieldType }): DiscountGroup {
    return createComplexType(json, {
      ObjectEntry: (objectEntry: string) => ({ objectEntry: edmToTs(objectEntry, 'Edm.String') }),
      DiscountPercentage: (discountPercentage: number) => ({ discountPercentage: edmToTs(discountPercentage, 'Edm.Double') }),
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') })
    });
  }
}
