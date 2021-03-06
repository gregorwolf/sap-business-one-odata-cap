/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * LocalEraParams
 */
export interface LocalEraParams {
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[LocalEraParams.build]] instead.
 */
export function createLocalEraParams(json: any): LocalEraParams {
  return LocalEraParams.build(json);
}

/**
 * LocalEraParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class LocalEraParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, LocalEraParams> {
  /**
   * Representation of the [[LocalEraParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');

  /**
   * Creates an instance of LocalEraParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, LocalEraParams);
  }
}

export namespace LocalEraParams {
  /**
   * Metadata information on all properties of the `LocalEraParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<LocalEraParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): LocalEraParams {
    return deserializeComplexTypeV4(json, LocalEraParams);
  }
}
