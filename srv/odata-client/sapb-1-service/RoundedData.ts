/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * RoundedData
 */
export interface RoundedData {
  /**
   * Value.
   * @nullable
   */
  value?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[RoundedData.build]] instead.
 */
export function createRoundedData(json: any): RoundedData {
  return RoundedData.build(json);
}

/**
 * RoundedDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RoundedDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RoundedData> {
  /**
   * Representation of the [[RoundedData.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Value', this, 'Edm.Double');

  /**
   * Creates an instance of RoundedDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, RoundedData);
  }
}

export namespace RoundedData {
  /**
   * Metadata information on all properties of the `RoundedData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RoundedData>[] = [{
    originalName: 'Value',
    name: 'value',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): RoundedData {
    return deserializeComplexTypeV4(json, RoundedData);
  }
}
