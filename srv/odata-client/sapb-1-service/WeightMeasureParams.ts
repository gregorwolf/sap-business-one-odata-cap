/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WeightMeasureParams
 */
export interface WeightMeasureParams {
  /**
   * Unit Code.
   * @nullable
   */
  unitCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[WeightMeasureParams.build]] instead.
 */
export function createWeightMeasureParams(json: any): WeightMeasureParams {
  return WeightMeasureParams.build(json);
}

/**
 * WeightMeasureParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WeightMeasureParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WeightMeasureParams> {
  /**
   * Representation of the [[WeightMeasureParams.unitCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UnitCode', this, 'Edm.Int32');

  /**
   * Creates an instance of WeightMeasureParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WeightMeasureParams);
  }
}

export namespace WeightMeasureParams {
  /**
   * Metadata information on all properties of the `WeightMeasureParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WeightMeasureParams>[] = [{
    originalName: 'UnitCode',
    name: 'unitCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WeightMeasureParams {
    return deserializeComplexTypeV4(json, WeightMeasureParams);
  }
}
