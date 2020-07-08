/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SeriesLine
 */
export interface SeriesLine {
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Prefix.
   * @nullable
   */
  prefix?: string;
  /**
   * First Num.
   * @nullable
   */
  firstNum?: number;
  /**
   * Next Num.
   * @nullable
   */
  nextNum?: number;
  /**
   * Last Num.
   * @nullable
   */
  lastNum?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SeriesLine.build]] instead.
 */
export function createSeriesLine(json: any): SeriesLine {
  return SeriesLine.build(json);
}

/**
 * SeriesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SeriesLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SeriesLine.series]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Series', this, 'Edm.Int32');
  /**
   * Representation of the [[SeriesLine.prefix]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  prefix: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Prefix', this, 'Edm.String');
  /**
   * Representation of the [[SeriesLine.firstNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FirstNum', this, 'Edm.Int32');
  /**
   * Representation of the [[SeriesLine.nextNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nextNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NextNum', this, 'Edm.Int32');
  /**
   * Representation of the [[SeriesLine.lastNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LastNum', this, 'Edm.Int32');
}

export namespace SeriesLine {
  export function build(json: { [keys: string]: FieldType }): SeriesLine {
    return createComplexType(json, {
      Series: (series: number) => ({ series: edmToTs(series, 'Edm.Int32') }),
      Prefix: (prefix: string) => ({ prefix: edmToTs(prefix, 'Edm.String') }),
      FirstNum: (firstNum: number) => ({ firstNum: edmToTs(firstNum, 'Edm.Int32') }),
      NextNum: (nextNum: number) => ({ nextNum: edmToTs(nextNum, 'Edm.Int32') }),
      LastNum: (lastNum: number) => ({ lastNum: edmToTs(lastNum, 'Edm.Int32') })
    });
  }
}
