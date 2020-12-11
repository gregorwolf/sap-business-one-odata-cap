/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * StockTakingParams
 */
export interface StockTakingParams {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[StockTakingParams.build]] instead.
 */
export function createStockTakingParams(json: any): StockTakingParams {
  return StockTakingParams.build(json);
}

/**
 * StockTakingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class StockTakingParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, StockTakingParams> {
  /**
   * Representation of the [[StockTakingParams.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[StockTakingParams.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');

  /**
   * Creates an instance of StockTakingParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, StockTakingParams);
  }
}

export namespace StockTakingParams {
  /**
   * Metadata information on all properties of the `StockTakingParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<StockTakingParams>[] = [{
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WarehouseCode',
    name: 'warehouseCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): StockTakingParams {
    return deserializeComplexTypeV4(json, StockTakingParams);
  }
}
