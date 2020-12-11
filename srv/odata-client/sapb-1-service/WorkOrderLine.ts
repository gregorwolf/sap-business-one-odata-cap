/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class WorkOrderLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WorkOrderLine> {
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

  /**
   * Creates an instance of WorkOrderLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WorkOrderLine);
  }
}

export namespace WorkOrderLine {
  /**
   * Metadata information on all properties of the `WorkOrderLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WorkOrderLine>[] = [{
    originalName: 'RowNumber',
    name: 'rowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemDescription',
    name: 'itemDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemQuantity',
    name: 'itemQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ItemPrice',
    name: 'itemPrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PriceCurrency',
    name: 'priceCurrency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemWarehouse',
    name: 'itemWarehouse',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ActiveAccountCode',
    name: 'activeAccountCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WorkSum',
    name: 'workSum',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WorkOrderLine {
    return deserializeComplexTypeV4(json, WorkOrderLine);
  }
}
