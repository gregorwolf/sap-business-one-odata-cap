/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WarehouseLocationParams
 */
export interface WarehouseLocationParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[WarehouseLocationParams.build]] instead.
 */
export function createWarehouseLocationParams(json: any): WarehouseLocationParams {
  return WarehouseLocationParams.build(json);
}

/**
 * WarehouseLocationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WarehouseLocationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WarehouseLocationParams> {
  /**
   * Representation of the [[WarehouseLocationParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');

  /**
   * Creates an instance of WarehouseLocationParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WarehouseLocationParams);
  }
}

export namespace WarehouseLocationParams {
  /**
   * Metadata information on all properties of the `WarehouseLocationParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WarehouseLocationParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WarehouseLocationParams {
    return deserializeComplexTypeV4(json, WarehouseLocationParams);
  }
}
