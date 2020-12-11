/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DefaultElectronicSeriesParams
 */
export interface DefaultElectronicSeriesParams {
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Electronic Series.
   * @nullable
   */
  electronicSeries?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DefaultElectronicSeriesParams.build]] instead.
 */
export function createDefaultElectronicSeriesParams(json: any): DefaultElectronicSeriesParams {
  return DefaultElectronicSeriesParams.build(json);
}

/**
 * DefaultElectronicSeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DefaultElectronicSeriesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DefaultElectronicSeriesParams> {
  /**
   * Representation of the [[DefaultElectronicSeriesParams.series]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Series', this, 'Edm.Int32');
  /**
   * Representation of the [[DefaultElectronicSeriesParams.electronicSeries]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  electronicSeries: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ElectronicSeries', this, 'Edm.Int32');

  /**
   * Creates an instance of DefaultElectronicSeriesParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DefaultElectronicSeriesParams);
  }
}

export namespace DefaultElectronicSeriesParams {
  /**
   * Metadata information on all properties of the `DefaultElectronicSeriesParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DefaultElectronicSeriesParams>[] = [{
    originalName: 'Series',
    name: 'series',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ElectronicSeries',
    name: 'electronicSeries',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DefaultElectronicSeriesParams {
    return deserializeComplexTypeV4(json, DefaultElectronicSeriesParams);
  }
}
