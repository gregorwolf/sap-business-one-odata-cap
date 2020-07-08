/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TaxCodeDeterminationTcdDefaultWt
 */
export interface TaxCodeDeterminationTcdDefaultWt {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
  /**
   * Wt Code.
   * @nullable
   */
  wtCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdDefaultWt.build]] instead.
 */
export function createTaxCodeDeterminationTcdDefaultWt(json: any): TaxCodeDeterminationTcdDefaultWt {
  return TaxCodeDeterminationTcdDefaultWt.build(json);
}

/**
 * TaxCodeDeterminationTcdDefaultWtField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdDefaultWtField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TaxCodeDeterminationTcdDefaultWt.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxCodeDeterminationTcdDefaultWt.wtCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTCode', this, 'Edm.String');
}

export namespace TaxCodeDeterminationTcdDefaultWt {
  export function build(json: { [keys: string]: FieldType }): TaxCodeDeterminationTcdDefaultWt {
    return createComplexType(json, {
      AbsId: (absId: number) => ({ absId: edmToTs(absId, 'Edm.Int32') }),
      WTCode: (wtCode: string) => ({ wtCode: edmToTs(wtCode, 'Edm.String') })
    });
  }
}
