/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * InventoryPostingParams
 */
export interface InventoryPostingParams {
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
 * @deprecated Since v1.6.0. Use [[InventoryPostingParams.build]] instead.
 */
export function createInventoryPostingParams(json: any): InventoryPostingParams {
  return InventoryPostingParams.build(json);
}

/**
 * InventoryPostingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryPostingParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[InventoryPostingParams.documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingParams.documentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentNumber', this, 'Edm.Int32');
}

export namespace InventoryPostingParams {
  export function build(json: { [keys: string]: FieldType }): InventoryPostingParams {
    return createComplexType(json, {
      DocumentEntry: (documentEntry: number) => ({ documentEntry: edmToTs(documentEntry, 'Edm.Int32') }),
      DocumentNumber: (documentNumber: number) => ({ documentNumber: edmToTs(documentNumber, 'Edm.Int32') })
    });
  }
}
