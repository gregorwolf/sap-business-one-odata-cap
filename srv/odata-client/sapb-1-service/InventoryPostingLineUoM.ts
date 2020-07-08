/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * InventoryPostingLineUoM
 */
export interface InventoryPostingLineUoM {
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Child Number.
   * @nullable
   */
  childNumber?: number;
  /**
   * Uo M Counted Quantity.
   * @nullable
   */
  uoMCountedQuantity?: number;
  /**
   * Items Per Unit.
   * @nullable
   */
  itemsPerUnit?: number;
  /**
   * Counted Quantity.
   * @nullable
   */
  countedQuantity?: number;
  /**
   * Uo M Code.
   * @nullable
   */
  uoMCode?: string;
  /**
   * Bar Code.
   * @nullable
   */
  barCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[InventoryPostingLineUoM.build]] instead.
 */
export function createInventoryPostingLineUoM(json: any): InventoryPostingLineUoM {
  return InventoryPostingLineUoM.build(json);
}

/**
 * InventoryPostingLineUoMField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryPostingLineUoMField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[InventoryPostingLineUoM.documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingLineUoM.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingLineUoM.childNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  childNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ChildNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingLineUoM.uoMCountedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCountedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMCountedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryPostingLineUoM.itemsPerUnit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemsPerUnit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ItemsPerUnit', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryPostingLineUoM.countedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CountedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryPostingLineUoM.uoMCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UoMCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLineUoM.barCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  barCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BarCode', this, 'Edm.String');
}

export namespace InventoryPostingLineUoM {
  export function build(json: { [keys: string]: FieldType }): InventoryPostingLineUoM {
    return createComplexType(json, {
      DocumentEntry: (documentEntry: number) => ({ documentEntry: edmToTs(documentEntry, 'Edm.Int32') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      ChildNumber: (childNumber: number) => ({ childNumber: edmToTs(childNumber, 'Edm.Int32') }),
      UoMCountedQuantity: (uoMCountedQuantity: number) => ({ uoMCountedQuantity: edmToTs(uoMCountedQuantity, 'Edm.Double') }),
      ItemsPerUnit: (itemsPerUnit: number) => ({ itemsPerUnit: edmToTs(itemsPerUnit, 'Edm.Double') }),
      CountedQuantity: (countedQuantity: number) => ({ countedQuantity: edmToTs(countedQuantity, 'Edm.Double') }),
      UoMCode: (uoMCode: string) => ({ uoMCode: edmToTs(uoMCode, 'Edm.String') }),
      BarCode: (barCode: string) => ({ barCode: edmToTs(barCode, 'Edm.String') })
    });
  }
}
