/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WtdValueRange
 */
export interface WtdValueRange {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Seq Num.
   * @nullable
   */
  seqNum?: number;
  /**
   * Effective From.
   * @nullable
   */
  effectiveFrom?: Moment;
  /**
   * Value From.
   * @nullable
   */
  valueFrom?: number;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[WtdValueRange.build]] instead.
 */
export function createWtdValueRange(json: any): WtdValueRange {
  return WtdValueRange.build(json);
}

/**
 * WtdValueRangeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtdValueRangeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WtdValueRange.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[WtdValueRange.seqNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  seqNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SeqNum', this, 'Edm.Int32');
  /**
   * Representation of the [[WtdValueRange.effectiveFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[WtdValueRange.valueFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  valueFrom: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ValueFrom', this, 'Edm.Double');
  /**
   * Representation of the [[WtdValueRange.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
}

export namespace WtdValueRange {
  export function build(json: { [keys: string]: FieldType }): WtdValueRange {
    return createComplexType(json, {
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      SeqNum: (seqNum: number) => ({ seqNum: edmToTs(seqNum, 'Edm.Int32') }),
      EffectiveFrom: (effectiveFrom: Moment) => ({ effectiveFrom: edmToTs(effectiveFrom, 'Edm.DateTimeOffset') }),
      ValueFrom: (valueFrom: number) => ({ valueFrom: edmToTs(valueFrom, 'Edm.Double') }),
      Rate: (rate: number) => ({ rate: edmToTs(rate, 'Edm.Double') })
    });
  }
}
