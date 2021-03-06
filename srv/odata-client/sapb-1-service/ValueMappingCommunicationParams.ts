/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ValueMappingCommunicationParams
 */
export interface ValueMappingCommunicationParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ValueMappingCommunicationParams.build]] instead.
 */
export function createValueMappingCommunicationParams(json: any): ValueMappingCommunicationParams {
  return ValueMappingCommunicationParams.build(json);
}

/**
 * ValueMappingCommunicationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ValueMappingCommunicationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ValueMappingCommunicationParams> {
  /**
   * Representation of the [[ValueMappingCommunicationParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');

  /**
   * Creates an instance of ValueMappingCommunicationParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ValueMappingCommunicationParams);
  }
}

export namespace ValueMappingCommunicationParams {
  /**
   * Metadata information on all properties of the `ValueMappingCommunicationParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ValueMappingCommunicationParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ValueMappingCommunicationParams {
    return deserializeComplexTypeV4(json, ValueMappingCommunicationParams);
  }
}
