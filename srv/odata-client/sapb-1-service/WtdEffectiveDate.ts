/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { WtdValueRange, WtdValueRangeField } from './WtdValueRange';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WtdEffectiveDate
 */
export interface WtdEffectiveDate {
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Effective From.
   * @nullable
   */
  effectiveFrom?: Moment;
  /**
   * Rate.
   * @nullable
   */
  rate?: number;
  /**
   * Wtd Value Range Collection.
   * @nullable
   */
  wtdValueRangeCollection?: WtdValueRange;
}

/**
 * @deprecated Since v1.6.0. Use [[WtdEffectiveDate.build]] instead.
 */
export function createWtdEffectiveDate(json: any): WtdEffectiveDate {
  return WtdEffectiveDate.build(json);
}

/**
 * WtdEffectiveDateField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtdEffectiveDateField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WtdEffectiveDate.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[WtdEffectiveDate.effectiveFrom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveFrom: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EffectiveFrom', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[WtdEffectiveDate.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
  /**
   * Representation of the [[WtdEffectiveDate.wtdValueRangeCollection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtdValueRangeCollection: WtdValueRangeField<EntityT> = new WtdValueRangeField('WTDValueRangeCollection', this);
}

export namespace WtdEffectiveDate {
  export function build(json: { [keys: string]: FieldType | WtdValueRange }): WtdEffectiveDate {
    return createComplexType(json, {
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      EffectiveFrom: (effectiveFrom: Moment) => ({ effectiveFrom: edmToTs(effectiveFrom, 'Edm.DateTimeOffset') }),
      Rate: (rate: number) => ({ rate: edmToTs(rate, 'Edm.Double') }),
      WTDValueRangeCollection: (wtdValueRangeCollection: WtdValueRange) => ({ wtdValueRangeCollection: WtdValueRange.build(wtdValueRangeCollection) })
    });
  }
}
