/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EnhancedDiscountGroupParams
 */
export interface EnhancedDiscountGroupParams {
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
}

/**
 * @deprecated Since v1.6.0. Use [[EnhancedDiscountGroupParams.build]] instead.
 */
export function createEnhancedDiscountGroupParams(json: any): EnhancedDiscountGroupParams {
  return EnhancedDiscountGroupParams.build(json);
}

/**
 * EnhancedDiscountGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EnhancedDiscountGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EnhancedDiscountGroupParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[EnhancedDiscountGroupParams.objectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ObjectCode', this, 'Edm.String');
}

export namespace EnhancedDiscountGroupParams {
  export function build(json: { [keys: string]: FieldType }): EnhancedDiscountGroupParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      ObjectCode: (objectCode: string) => ({ objectCode: edmToTs(objectCode, 'Edm.String') })
    });
  }
}
