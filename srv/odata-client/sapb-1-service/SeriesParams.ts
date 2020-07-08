/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SeriesParams
 */
export interface SeriesParams {
  /**
   * Series.
   * @nullable
   */
  series?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SeriesParams.build]] instead.
 */
export function createSeriesParams(json: any): SeriesParams {
  return SeriesParams.build(json);
}

/**
 * SeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SeriesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SeriesParams.series]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Series', this, 'Edm.Int32');
}

export namespace SeriesParams {
  export function build(json: { [keys: string]: FieldType }): SeriesParams {
    return createComplexType(json, {
      Series: (series: number) => ({ series: edmToTs(series, 'Edm.Int32') })
    });
  }
}
