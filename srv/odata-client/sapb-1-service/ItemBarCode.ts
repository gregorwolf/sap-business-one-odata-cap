/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ItemBarCodeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ItemBarCode {
  export function build(json: { [keys: string]: FieldType }): ItemBarCode {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      UoMEntry: (uoMEntry: number) => ({ uoMEntry: edmToTs(uoMEntry, 'Edm.Int32') }),
      Barcode: (barcode: string) => ({ barcode: edmToTs(barcode, 'Edm.String') }),
      FreeText: (freeText: string) => ({ freeText: edmToTs(freeText, 'Edm.String') })
    });
  }
}
