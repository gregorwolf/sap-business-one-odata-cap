/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BpPriorityParams
 */
export interface BpPriorityParams {
  /**
   * Priority.
   * @nullable
   */
  priority?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BpPriorityParams.build]] instead.
 */
export function createBpPriorityParams(json: any): BpPriorityParams {
  return BpPriorityParams.build(json);
}

/**
 * BpPriorityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpPriorityParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpPriorityParams> {
  /**
   * Representation of the [[BpPriorityParams.priority]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priority: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Priority', this, 'Edm.Int32');

  /**
   * Creates an instance of BpPriorityParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BpPriorityParams);
  }
}

export namespace BpPriorityParams {
  /**
   * Metadata information on all properties of the `BpPriorityParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpPriorityParams>[] = [{
    originalName: 'Priority',
    name: 'priority',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BpPriorityParams {
    return deserializeComplexTypeV4(json, BpPriorityParams);
  }
}
