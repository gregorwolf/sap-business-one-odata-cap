/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DeductionTaxGroupParams
 */
export interface DeductionTaxGroupParams {
  /**
   * Group Key.
   * @nullable
   */
  groupKey?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DeductionTaxGroupParams.build]] instead.
 */
export function createDeductionTaxGroupParams(json: any): DeductionTaxGroupParams {
  return DeductionTaxGroupParams.build(json);
}

/**
 * DeductionTaxGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DeductionTaxGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DeductionTaxGroupParams.groupKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GroupKey', this, 'Edm.Int32');
}

export namespace DeductionTaxGroupParams {
  export function build(json: { [keys: string]: FieldType }): DeductionTaxGroupParams {
    return createComplexType(json, {
      GroupKey: (groupKey: number) => ({ groupKey: edmToTs(groupKey, 'Edm.Int32') })
    });
  }
}
