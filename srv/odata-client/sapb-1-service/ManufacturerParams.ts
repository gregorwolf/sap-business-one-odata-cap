/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ManufacturerParams
 */
export interface ManufacturerParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ManufacturerParams.build]] instead.
 */
export function createManufacturerParams(json: any): ManufacturerParams {
  return ManufacturerParams.build(json);
}

/**
 * ManufacturerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ManufacturerParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ManufacturerParams> {
  /**
   * Representation of the [[ManufacturerParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');

  /**
   * Creates an instance of ManufacturerParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ManufacturerParams);
  }
}

export namespace ManufacturerParams {
  /**
   * Metadata information on all properties of the `ManufacturerParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ManufacturerParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ManufacturerParams {
    return deserializeComplexTypeV4(json, ManufacturerParams);
  }
}
