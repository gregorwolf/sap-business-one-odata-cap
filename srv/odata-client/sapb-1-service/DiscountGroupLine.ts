/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DiscountGroupLine
 */
export interface DiscountGroupLine {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Object Code.
   * @nullable
   */
  objectCode?: string;
  /**
   * Discount.
   * @nullable
   */
  discount?: number;
  /**
   * Paid Quantity.
   * @nullable
   */
  paidQuantity?: number;
  /**
   * Free Quantity.
   * @nullable
   */
  freeQuantity?: number;
  /**
   * Maximum Free Quantity.
   * @nullable
   */
  maximumFreeQuantity?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DiscountGroupLine.build]] instead.
 */
export function createDiscountGroupLine(json: any): DiscountGroupLine {
  return DiscountGroupLine.build(json);
}

/**
 * DiscountGroupLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DiscountGroupLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DiscountGroupLine.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DiscountGroupLine.objectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ObjectCode', this, 'Edm.String');
  /**
   * Representation of the [[DiscountGroupLine.discount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Discount', this, 'Edm.Double');
  /**
   * Representation of the [[DiscountGroupLine.paidQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paidQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PaidQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[DiscountGroupLine.freeQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FreeQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[DiscountGroupLine.maximumFreeQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maximumFreeQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaximumFreeQuantity', this, 'Edm.Double');
}

export namespace DiscountGroupLine {
  export function build(json: { [keys: string]: FieldType }): DiscountGroupLine {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      ObjectCode: (objectCode: string) => ({ objectCode: edmToTs(objectCode, 'Edm.String') }),
      Discount: (discount: number) => ({ discount: edmToTs(discount, 'Edm.Double') }),
      PaidQuantity: (paidQuantity: number) => ({ paidQuantity: edmToTs(paidQuantity, 'Edm.Double') }),
      FreeQuantity: (freeQuantity: number) => ({ freeQuantity: edmToTs(freeQuantity, 'Edm.Double') }),
      MaximumFreeQuantity: (maximumFreeQuantity: number) => ({ maximumFreeQuantity: edmToTs(maximumFreeQuantity, 'Edm.Double') })
    });
  }
}
