/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ActivityLocationParams
 */
export interface ActivityLocationParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ActivityLocationParams.build]] instead.
 */
export function createActivityLocationParams(json: any): ActivityLocationParams {
  return ActivityLocationParams.build(json);
}

/**
 * ActivityLocationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityLocationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ActivityLocationParams> {
  /**
   * Representation of the [[ActivityLocationParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');

  /**
   * Creates an instance of ActivityLocationParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ActivityLocationParams);
  }
}

export namespace ActivityLocationParams {
  /**
   * Metadata information on all properties of the `ActivityLocationParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ActivityLocationParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ActivityLocationParams {
    return deserializeComplexTypeV4(json, ActivityLocationParams);
  }
}
