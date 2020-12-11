/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * InventoryCyclesParams
 */
export interface InventoryCyclesParams {
  /**
   * Cycle Code.
   * @nullable
   */
  cycleCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[InventoryCyclesParams.build]] instead.
 */
export function createInventoryCyclesParams(json: any): InventoryCyclesParams {
  return InventoryCyclesParams.build(json);
}

/**
 * InventoryCyclesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryCyclesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryCyclesParams> {
  /**
   * Representation of the [[InventoryCyclesParams.cycleCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cycleCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CycleCode', this, 'Edm.Int32');

  /**
   * Creates an instance of InventoryCyclesParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InventoryCyclesParams);
  }
}

export namespace InventoryCyclesParams {
  /**
   * Metadata information on all properties of the `InventoryCyclesParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryCyclesParams>[] = [{
    originalName: 'CycleCode',
    name: 'cycleCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): InventoryCyclesParams {
    return deserializeComplexTypeV4(json, InventoryCyclesParams);
  }
}
