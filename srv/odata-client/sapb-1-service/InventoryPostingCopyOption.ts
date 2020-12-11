/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryPostingCopyOptionEnum } from './InventoryPostingCopyOptionEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * InventoryPostingCopyOption
 */
export interface InventoryPostingCopyOption {
  /**
   * Base Entry.
   * @nullable
   */
  baseEntry?: number;
  /**
   * Copy Option.
   * @nullable
   */
  copyOption?: InventoryPostingCopyOptionEnum;
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
export class InventoryPostingCopyOptionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryPostingCopyOption> {
  /**
   * Representation of the [[InventoryPostingCopyOption.baseEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingCopyOption.copyOption]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  copyOption: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CopyOption', this);

  /**
   * Creates an instance of InventoryPostingCopyOptionField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InventoryPostingCopyOption);
  }
}

export namespace InventoryPostingCopyOption {
  /**
   * Metadata information on all properties of the `InventoryPostingCopyOption` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryPostingCopyOption>[] = [{
    originalName: 'BaseEntry',
    name: 'baseEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CopyOption',
    name: 'copyOption',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): InventoryPostingCopyOption {
    return deserializeComplexTypeV4(json, InventoryPostingCopyOption);
  }
}
