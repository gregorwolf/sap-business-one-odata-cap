/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BoeLineParams
 */
export interface BoeLineParams {
  /**
   * Boe Key.
   * @nullable
   */
  boeKey?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BoeLineParams.build]] instead.
 */
export function createBoeLineParams(json: any): BoeLineParams {
  return BoeLineParams.build(json);
}

/**
 * BoeLineParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BoeLineParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BoeLineParams> {
  /**
   * Representation of the [[BoeLineParams.boeKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boeKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BOEKey', this, 'Edm.Int32');

  /**
   * Creates an instance of BoeLineParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BoeLineParams);
  }
}

export namespace BoeLineParams {
  /**
   * Metadata information on all properties of the `BoeLineParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BoeLineParams>[] = [{
    originalName: 'BOEKey',
    name: 'boeKey',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BoeLineParams {
    return deserializeComplexTypeV4(json, BoeLineParams);
  }
}
