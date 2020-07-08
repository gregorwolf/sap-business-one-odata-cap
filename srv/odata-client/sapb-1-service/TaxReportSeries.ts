/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TaxReportSeries
 */
export interface TaxReportSeries {
  /**
   * Series Code.
   * @nullable
   */
  seriesCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxReportSeries.build]] instead.
 */
export function createTaxReportSeries(json: any): TaxReportSeries {
  return TaxReportSeries.build(json);
}

/**
 * TaxReportSeriesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxReportSeriesField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TaxReportSeries.seriesCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  seriesCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SeriesCode', this, 'Edm.Int32');
}

export namespace TaxReportSeries {
  export function build(json: { [keys: string]: FieldType }): TaxReportSeries {
    return createComplexType(json, {
      SeriesCode: (seriesCode: number) => ({ seriesCode: edmToTs(seriesCode, 'Edm.Int32') })
    });
  }
}
