/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class SeriesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SeriesParams> {
  /**
   * Representation of the [[SeriesParams.series]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Series', this, 'Edm.Int32');

  /**
   * Creates an instance of SeriesParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, SeriesParams);
  }
}

export namespace SeriesParams {
  /**
   * Metadata information on all properties of the `SeriesParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SeriesParams>[] = [{
    originalName: 'Series',
    name: 'series',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): SeriesParams {
    return deserializeComplexTypeV4(json, SeriesParams);
  }
}
