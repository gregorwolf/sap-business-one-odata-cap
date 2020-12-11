/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxReportFilterDocumentType } from './TaxReportFilterDocumentType';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TaxReportSeries
 */
export interface TaxReportSeries {
  /**
   * Document Type.
   * @nullable
   */
  documentType?: TaxReportFilterDocumentType;
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
export class TaxReportSeriesField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxReportSeries> {
  /**
   * Representation of the [[TaxReportSeries.documentType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DocumentType', this);
  /**
   * Representation of the [[TaxReportSeries.seriesCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  seriesCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SeriesCode', this, 'Edm.Int32');

  /**
   * Creates an instance of TaxReportSeriesField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxReportSeries);
  }
}

export namespace TaxReportSeries {
  /**
   * Metadata information on all properties of the `TaxReportSeries` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxReportSeries>[] = [{
    originalName: 'DocumentType',
    name: 'documentType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SeriesCode',
    name: 'seriesCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TaxReportSeries {
    return deserializeComplexTypeV4(json, TaxReportSeries);
  }
}
