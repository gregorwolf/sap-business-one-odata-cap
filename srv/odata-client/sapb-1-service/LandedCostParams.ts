/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * LandedCostParams
 */
export interface LandedCostParams {
  /**
   * Landed Cost Number.
   * @nullable
   */
  landedCostNumber?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[LandedCostParams.build]] instead.
 */
export function createLandedCostParams(json: any): LandedCostParams {
  return LandedCostParams.build(json);
}

/**
 * LandedCostParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class LandedCostParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, LandedCostParams> {
  /**
   * Representation of the [[LandedCostParams.landedCostNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  landedCostNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LandedCostNumber', this, 'Edm.Int32');

  /**
   * Creates an instance of LandedCostParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, LandedCostParams);
  }
}

export namespace LandedCostParams {
  /**
   * Metadata information on all properties of the `LandedCostParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<LandedCostParams>[] = [{
    originalName: 'LandedCostNumber',
    name: 'landedCostNumber',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): LandedCostParams {
    return deserializeComplexTypeV4(json, LandedCostParams);
  }
}
