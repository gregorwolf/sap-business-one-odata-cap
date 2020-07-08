/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WorkOrderLine
 */
export interface WorkOrderLine {
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: number;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: string;
  /**
   * Item Quantity.
   * @nullable
   */
  itemQuantity?: number;
  /**
   * Item Price.
   * @nullable
   */
  itemPrice?: number;
  /**
   * Price Currency.
   * @nullable
   */
  priceCurrency?: string;
  /**
   * Item Warehouse.
   * @nullable
   */
  itemWarehouse?: string;
  /**
   * Active Account Code.
   * @nullable
   */
  activeAccountCode?: string;
  /**
   * Work Sum.
   * @nullable
   */
  workSum?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[WorkOrderLine.build]] instead.
 */
export function createWorkOrderLine(json: any): WorkOrderLine {
  return WorkOrderLine.build(json);
}

/**
 * WorkOrderLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WorkOrderLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WorkOrderLine.rowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[WorkOrderLine.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[WorkOrderLine.itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemDescription', this, 'Edm.String');
  /**
   * Representation of the [[WorkOrderLine.itemQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ItemQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[WorkOrderLine.itemPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ItemPrice', this, 'Edm.Double');
  /**
   * Representation of the [[WorkOrderLine.priceCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PriceCurrency', this, 'Edm.String');
  /**
   * Representation of the [[WorkOrderLine.itemWarehouse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemWarehouse: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemWarehouse', this, 'Edm.String');
  /**
   * Representation of the [[WorkOrderLine.activeAccountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activeAccountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ActiveAccountCode', this, 'Edm.String');
  /**
   * Representation of the [[WorkOrderLine.workSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  workSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('WorkSum', this, 'Edm.Double');
}

export namespace WorkOrderLine {
  export function build(json: { [keys: string]: FieldType }): WorkOrderLine {
    return createComplexType(json, {
      RowNumber: (rowNumber: number) => ({ rowNumber: edmToTs(rowNumber, 'Edm.Int32') }),
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      ItemDescription: (itemDescription: string) => ({ itemDescription: edmToTs(itemDescription, 'Edm.String') }),
      ItemQuantity: (itemQuantity: number) => ({ itemQuantity: edmToTs(itemQuantity, 'Edm.Double') }),
      ItemPrice: (itemPrice: number) => ({ itemPrice: edmToTs(itemPrice, 'Edm.Double') }),
      PriceCurrency: (priceCurrency: string) => ({ priceCurrency: edmToTs(priceCurrency, 'Edm.String') }),
      ItemWarehouse: (itemWarehouse: string) => ({ itemWarehouse: edmToTs(itemWarehouse, 'Edm.String') }),
      ActiveAccountCode: (activeAccountCode: string) => ({ activeAccountCode: edmToTs(activeAccountCode, 'Edm.String') }),
      WorkSum: (workSum: number) => ({ workSum: edmToTs(workSum, 'Edm.Double') })
    });
  }
}
