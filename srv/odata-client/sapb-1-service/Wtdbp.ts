/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * Wtdbp
 */
export interface Wtdbp {
  /**
   * Bp Key Part 1.
   * @nullable
   */
  bpKeyPart1?: string;
  /**
   * Bp Key Part 2.
   * @nullable
   */
  bpKeyPart2?: string;
  /**
   * W Tax Code.
   * @nullable
   */
  wTaxCode?: string;
  /**
   * Effective Date From.
   * @nullable
   */
  effectiveDateFrom?: Moment;
  /**
   * Effective Date To.
   * @nullable
   */
  effectiveDateTo?: Moment;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[Wtdbp.build]] instead.
 */
export function createWtdbp(json: any): Wtdbp {
  return Wtdbp.build(json);
}

/**
 * WtdbpField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtdbpField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Wtdbp.bpKeyPart1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpKeyPart1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPKeyPart1', this, 'Edm.String');
  /**
   * Representation of the [[Wtdbp.bpKeyPart2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpKeyPart2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPKeyPart2', this, 'Edm.String');
  /**
   * Representation of the [[Wtdbp.wTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WTaxCode', this, 'Edm.String');
  /**
   * Representation of the [[Wtdbp.effectiveDateFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDateFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveDateFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[Wtdbp.effectiveDateTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDateTo: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveDateTo', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[Wtdbp.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
}

export namespace Wtdbp {
  export function build(json: { [keys: string]: FieldType }): Wtdbp {
    return createComplexType(json, {
      BPKeyPart1: (bpKeyPart1: string) => ({ bpKeyPart1: edmToTs(bpKeyPart1, 'Edm.String') }),
      BPKeyPart2: (bpKeyPart2: string) => ({ bpKeyPart2: edmToTs(bpKeyPart2, 'Edm.String') }),
      WTaxCode: (wTaxCode: string) => ({ wTaxCode: edmToTs(wTaxCode, 'Edm.String') }),
      EffectiveDateFrom: (effectiveDateFrom: Moment) => ({ effectiveDateFrom: edmToTs(effectiveDateFrom, 'Edm.DateTimeOffset') }),
      EffectiveDateTo: (effectiveDateTo: Moment) => ({ effectiveDateTo: edmToTs(effectiveDateTo, 'Edm.DateTimeOffset') }),
      Rate: (rate: number) => ({ rate: edmToTs(rate, 'Edm.Double') })
    });
  }
}
