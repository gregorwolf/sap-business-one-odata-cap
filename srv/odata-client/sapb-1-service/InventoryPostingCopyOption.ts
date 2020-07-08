/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * InventoryPostingCopyOption
 */
export interface InventoryPostingCopyOption {
  /**
   * Base Entry.
   * @nullable
   */
  baseEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[InventoryPostingCopyOption.build]] instead.
 */
export function createInventoryPostingCopyOption(json: any): InventoryPostingCopyOption {
  return InventoryPostingCopyOption.build(json);
}

/**
 * InventoryPostingCopyOptionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryPostingCopyOptionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[InventoryPostingCopyOption.baseEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseEntry', this, 'Edm.Int32');
}

export namespace InventoryPostingCopyOption {
  export function build(json: { [keys: string]: FieldType }): InventoryPostingCopyOption {
    return createComplexType(json, {
      BaseEntry: (baseEntry: number) => ({ baseEntry: edmToTs(baseEntry, 'Edm.Int32') })
    });
  }
}
