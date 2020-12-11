/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CycleCountDeterminationParams
 */
export interface CycleCountDeterminationParams {
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: string;
  /**
   * Cycle By.
   * @nullable
   */
  cycleBy?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CycleCountDeterminationParams.build]] instead.
 */
export function createCycleCountDeterminationParams(json: any): CycleCountDeterminationParams {
  return CycleCountDeterminationParams.build(json);
}

/**
 * CycleCountDeterminationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CycleCountDeterminationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CycleCountDeterminationParams> {
  /**
   * Representation of the [[CycleCountDeterminationParams.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');
  /**
   * Representation of the [[CycleCountDeterminationParams.cycleBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cycleBy: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CycleBy', this, 'Edm.Int32');

  /**
   * Creates an instance of CycleCountDeterminationParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CycleCountDeterminationParams);
  }
}

export namespace CycleCountDeterminationParams {
  /**
   * Metadata information on all properties of the `CycleCountDeterminationParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CycleCountDeterminationParams>[] = [{
    originalName: 'WarehouseCode',
    name: 'warehouseCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CycleBy',
    name: 'cycleBy',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CycleCountDeterminationParams {
    return deserializeComplexTypeV4(json, CycleCountDeterminationParams);
  }
}
