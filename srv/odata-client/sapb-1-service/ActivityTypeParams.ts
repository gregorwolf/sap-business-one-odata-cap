/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ActivityTypeParams
 */
export interface ActivityTypeParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ActivityTypeParams.build]] instead.
 */
export function createActivityTypeParams(json: any): ActivityTypeParams {
  return ActivityTypeParams.build(json);
}

/**
 * ActivityTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ActivityTypeParams> {
  /**
   * Representation of the [[ActivityTypeParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');

  /**
   * Creates an instance of ActivityTypeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ActivityTypeParams);
  }
}

export namespace ActivityTypeParams {
  /**
   * Metadata information on all properties of the `ActivityTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ActivityTypeParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ActivityTypeParams {
    return deserializeComplexTypeV4(json, ActivityTypeParams);
  }
}
