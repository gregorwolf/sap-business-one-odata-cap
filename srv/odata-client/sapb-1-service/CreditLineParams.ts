/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CreditLineParams
 */
export interface CreditLineParams {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CreditLineParams.build]] instead.
 */
export function createCreditLineParams(json: any): CreditLineParams {
  return CreditLineParams.build(json);
}

/**
 * CreditLineParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CreditLineParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CreditLineParams.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');
}

export namespace CreditLineParams {
  export function build(json: { [keys: string]: FieldType }): CreditLineParams {
    return createComplexType(json, {
      AbsId: (absId: number) => ({ absId: edmToTs(absId, 'Edm.Int32') })
    });
  }
}
