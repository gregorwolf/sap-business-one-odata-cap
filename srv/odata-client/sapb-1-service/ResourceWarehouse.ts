/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ResourceWarehouse
 */
export interface ResourceWarehouse {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ResourceWarehouse.build]] instead.
 */
export function createResourceWarehouse(json: any): ResourceWarehouse {
  return ResourceWarehouse.build(json);
}

/**
 * ResourceWarehouseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ResourceWarehouseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ResourceWarehouse.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[ResourceWarehouse.warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Warehouse', this, 'Edm.String');
}

export namespace ResourceWarehouse {
  export function build(json: { [keys: string]: FieldType }): ResourceWarehouse {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      Warehouse: (warehouse: string) => ({ warehouse: edmToTs(warehouse, 'Edm.String') })
    });
  }
}
