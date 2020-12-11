/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PickListParams
 */
export interface PickListParams {
  /**
   * Absoluteentry.
   * @nullable
   */
  absoluteentry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PickListParams.build]] instead.
 */
export function createPickListParams(json: any): PickListParams {
  return PickListParams.build(json);
}

/**
 * PickListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PickListParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PickListParams> {
  /**
   * Representation of the [[PickListParams.absoluteentry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteentry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Absoluteentry', this, 'Edm.Int32');

  /**
   * Creates an instance of PickListParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PickListParams);
  }
}

export namespace PickListParams {
  /**
   * Metadata information on all properties of the `PickListParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PickListParams>[] = [{
    originalName: 'Absoluteentry',
    name: 'absoluteentry',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PickListParams {
    return deserializeComplexTypeV4(json, PickListParams);
  }
}
