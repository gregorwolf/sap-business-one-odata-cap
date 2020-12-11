/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DimensionParams
 */
export interface DimensionParams {
  /**
   * Dimension Code.
   * @nullable
   */
  dimensionCode?: number;
  /**
   * Dimension Name.
   * @nullable
   */
  dimensionName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[DimensionParams.build]] instead.
 */
export function createDimensionParams(json: any): DimensionParams {
  return DimensionParams.build(json);
}

/**
 * DimensionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DimensionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DimensionParams> {
  /**
   * Representation of the [[DimensionParams.dimensionCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dimensionCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DimensionCode', this, 'Edm.Int32');
  /**
   * Representation of the [[DimensionParams.dimensionName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dimensionName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DimensionName', this, 'Edm.String');

  /**
   * Creates an instance of DimensionParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DimensionParams);
  }
}

export namespace DimensionParams {
  /**
   * Metadata information on all properties of the `DimensionParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DimensionParams>[] = [{
    originalName: 'DimensionCode',
    name: 'dimensionCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DimensionName',
    name: 'dimensionName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DimensionParams {
    return deserializeComplexTypeV4(json, DimensionParams);
  }
}
