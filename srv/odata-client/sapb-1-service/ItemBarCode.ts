/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ItemBarCode
 */
export interface ItemBarCode {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: number;
  /**
   * Barcode.
   * @nullable
   */
  barcode?: string;
  /**
   * Free Text.
   * @nullable
   */
  freeText?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemBarCode.build]] instead.
 */
export function createItemBarCode(json: any): ItemBarCode {
  return ItemBarCode.build(json);
}

/**
 * ItemBarCodeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemBarCodeField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemBarCode> {
  /**
   * Representation of the [[ItemBarCode.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemBarCode.uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemBarCode.barcode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  barcode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Barcode', this, 'Edm.String');
  /**
   * Representation of the [[ItemBarCode.freeText]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeText: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FreeText', this, 'Edm.String');

  /**
   * Creates an instance of ItemBarCodeField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemBarCode);
  }
}

export namespace ItemBarCode {
  /**
   * Metadata information on all properties of the `ItemBarCode` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemBarCode>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UoMEntry',
    name: 'uoMEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Barcode',
    name: 'barcode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FreeText',
    name: 'freeText',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ItemBarCode {
    return deserializeComplexTypeV4(json, ItemBarCode);
  }
}
