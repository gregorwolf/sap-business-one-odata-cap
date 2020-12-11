/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ActivityStatusParams
 */
export interface ActivityStatusParams {
  /**
   * Status Id.
   * @nullable
   */
  statusId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ActivityStatusParams.build]] instead.
 */
export function createActivityStatusParams(json: any): ActivityStatusParams {
  return ActivityStatusParams.build(json);
}

/**
 * ActivityStatusParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityStatusParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ActivityStatusParams> {
  /**
   * Representation of the [[ActivityStatusParams.statusId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statusId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StatusId', this, 'Edm.Int32');

  /**
   * Creates an instance of ActivityStatusParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ActivityStatusParams);
  }
}

export namespace ActivityStatusParams {
  /**
   * Metadata information on all properties of the `ActivityStatusParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ActivityStatusParams>[] = [{
    originalName: 'StatusId',
    name: 'statusId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ActivityStatusParams {
    return deserializeComplexTypeV4(json, ActivityStatusParams);
  }
}
