/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * InventoryOpeningBalanceParams
 */
export interface InventoryOpeningBalanceParams {
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: number;
  /**
   * Document Number.
   * @nullable
   */
  documentNumber?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[InventoryOpeningBalanceParams.build]] instead.
 */
export function createInventoryOpeningBalanceParams(json: any): InventoryOpeningBalanceParams {
  return InventoryOpeningBalanceParams.build(json);
}

/**
 * InventoryOpeningBalanceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryOpeningBalanceParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryOpeningBalanceParams> {
  /**
   * Representation of the [[InventoryOpeningBalanceParams.documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryOpeningBalanceParams.documentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentNumber', this, 'Edm.Int32');

  /**
   * Creates an instance of InventoryOpeningBalanceParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InventoryOpeningBalanceParams);
  }
}

export namespace InventoryOpeningBalanceParams {
  /**
   * Metadata information on all properties of the `InventoryOpeningBalanceParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryOpeningBalanceParams>[] = [{
    originalName: 'DocumentEntry',
    name: 'documentEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocumentNumber',
    name: 'documentNumber',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): InventoryOpeningBalanceParams {
    return deserializeComplexTypeV4(json, InventoryOpeningBalanceParams);
  }
}
