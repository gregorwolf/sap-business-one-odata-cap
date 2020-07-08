/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BpWithholdingTax
 */
export interface BpWithholdingTax {
  /**
   * Wt Code.
   * @nullable
   */
  wtCode?: string;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BpWithholdingTax.build]] instead.
 */
export function createBpWithholdingTax(json: any): BpWithholdingTax {
  return BpWithholdingTax.build(json);
}

/**
 * BpWithholdingTaxField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpWithholdingTaxField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BpWithholdingTax.wtCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTCode', this, 'Edm.String');
  /**
   * Representation of the [[BpWithholdingTax.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
}

export namespace BpWithholdingTax {
  export function build(json: { [keys: string]: FieldType }): BpWithholdingTax {
    return createComplexType(json, {
      WTCode: (wtCode: string) => ({ wtCode: edmToTs(wtCode, 'Edm.String') }),
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') })
    });
  }
}
