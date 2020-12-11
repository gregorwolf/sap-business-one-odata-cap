/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * InvokeParams
 */
export interface InvokeParams {
  /**
   * Value.
   * @nullable
   */
  value?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[InvokeParams.build]] instead.
 */
export function createInvokeParams(json: any): InvokeParams {
  return InvokeParams.build(json);
}

/**
 * InvokeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InvokeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InvokeParams> {
  /**
   * Representation of the [[InvokeParams.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Value', this, 'Edm.String');

  /**
   * Creates an instance of InvokeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InvokeParams);
  }
}

export namespace InvokeParams {
  /**
   * Metadata information on all properties of the `InvokeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InvokeParams>[] = [{
    originalName: 'Value',
    name: 'value',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): InvokeParams {
    return deserializeComplexTypeV4(json, InvokeParams);
  }
}
