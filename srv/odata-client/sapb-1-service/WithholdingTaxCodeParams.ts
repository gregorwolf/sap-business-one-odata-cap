/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WithholdingTaxCodeParams
 */
export interface WithholdingTaxCodeParams {
  /**
   * Wt Code.
   * @nullable
   */
  wtCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxCodeParams.build]] instead.
 */
export function createWithholdingTaxCodeParams(json: any): WithholdingTaxCodeParams {
  return WithholdingTaxCodeParams.build(json);
}

/**
 * WithholdingTaxCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WithholdingTaxCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WithholdingTaxCodeParams.wtCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTCode', this, 'Edm.String');
}

export namespace WithholdingTaxCodeParams {
  export function build(json: { [keys: string]: FieldType }): WithholdingTaxCodeParams {
    return createComplexType(json, {
      WTCode: (wtCode: string) => ({ wtCode: edmToTs(wtCode, 'Edm.String') })
    });
  }
}
