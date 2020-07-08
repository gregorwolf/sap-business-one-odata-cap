/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryCountingLineUoM, InventoryCountingLineUoMField } from './InventoryCountingLineUoM';
import { InventoryCountingSerialNumber, InventoryCountingSerialNumberField } from './InventoryCountingSerialNumber';
import { InventoryCountingBatchNumber, InventoryCountingBatchNumberField } from './InventoryCountingBatchNumber';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * InventoryCountingLine
 */
export interface InventoryCountingLine {
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
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: string;
  /**
   * Bin Entry.
   * @nullable
   */
  binEntry?: number;
  /**
   * In Warehouse Quantity.
   * @nullable
   */
  inWarehouseQuantity?: number;
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
   * Variance.
   * @nullable
   */
  variance?: number;
  /**
   * Variance Percentage.
   * @nullable
   */
  variancePercentage?: number;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: number;
  /**
   * Target Entry.
   * @nullable
   */
  targetEntry?: number;
  /**
   * Target Line.
   * @nullable
   */
  targetLine?: number;
  /**
   * Target Type.
   * @nullable
   */
  targetType?: number;
  /**
   * Target Reference.
   * @nullable
   */
  targetReference?: string;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: string;
  /**
   * Manufacturer.
   * @nullable
   */
  manufacturer?: number;
  /**
   * Supplier Catalog No.
   * @nullable
   */
  supplierCatalogNo?: string;
  /**
   * Preferred Vendor.
   * @nullable
   */
  preferredVendor?: string;
  /**
   * Costing Code.
   * @nullable
   */
  costingCode?: string;
  /**
   * Costing Code 2.
   * @nullable
   */
  costingCode2?: string;
  /**
   * Costing Code 3.
   * @nullable
   */
  costingCode3?: string;
  /**
   * Costing Code 4.
   * @nullable
   */
  costingCode4?: string;
  /**
   * Costing Code 5.
   * @nullable
   */
  costingCode5?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Counter Id.
   * @nullable
   */
  counterId?: number;
  /**
   * Inventory Counting Line Uo Ms.
   * @nullable
   */
  inventoryCountingLineUoMs?: InventoryCountingLineUoM;
  /**
   * Inventory Counting Serial Numbers.
   * @nullable
   */
  inventoryCountingSerialNumbers?: InventoryCountingSerialNumber;
  /**
   * Inventory Counting Batch Numbers.
   * @nullable
   */
  inventoryCountingBatchNumbers?: InventoryCountingBatchNumber;
}

/**
 * @deprecated Since v1.6.0. Use [[InventoryCountingLine.build]] instead.
 */
export function createInventoryCountingLine(json: any): InventoryCountingLine {
  return InventoryCountingLine.build(json);
}

/**
 * InventoryCountingLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryCountingLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[InventoryCountingLine.documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemDescription', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.binEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  binEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BinEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.inWarehouseQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inWarehouseQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InWarehouseQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingLine.uoMCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UoMCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.barCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  barCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BarCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.uoMCountedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCountedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMCountedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingLine.itemsPerUnit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemsPerUnit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ItemsPerUnit', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingLine.countedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CountedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingLine.variance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variance: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Variance', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingLine.variancePercentage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variancePercentage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VariancePercentage', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingLine.visualOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VisualOrder', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.targetEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TargetEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.targetLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TargetLine', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.targetType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TargetType', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.targetReference]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  targetReference: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TargetReference', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.projectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ProjectCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.manufacturer]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturer: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Manufacturer', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.supplierCatalogNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  supplierCatalogNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SupplierCatalogNo', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.preferredVendor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  preferredVendor: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PreferredVendor', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.costingCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.costingCode2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode2', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.costingCode3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode3', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.costingCode4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode4', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.costingCode5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode5', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLine.counterId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CounterID', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLine.inventoryCountingLineUoMs]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryCountingLineUoMs: InventoryCountingLineUoMField<EntityT> = new InventoryCountingLineUoMField('InventoryCountingLineUoMs', this);
  /**
   * Representation of the [[InventoryCountingLine.inventoryCountingSerialNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryCountingSerialNumbers: InventoryCountingSerialNumberField<EntityT> = new InventoryCountingSerialNumberField('InventoryCountingSerialNumbers', this);
  /**
   * Representation of the [[InventoryCountingLine.inventoryCountingBatchNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryCountingBatchNumbers: InventoryCountingBatchNumberField<EntityT> = new InventoryCountingBatchNumberField('InventoryCountingBatchNumbers', this);
}

export namespace InventoryCountingLine {
  export function build(json: { [keys: string]: FieldType | InventoryCountingBatchNumber | InventoryCountingLineUoM | InventoryCountingSerialNumber }): InventoryCountingLine {
    return createComplexType(json, {
      DocumentEntry: (documentEntry: number) => ({ documentEntry: edmToTs(documentEntry, 'Edm.Int32') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      ItemDescription: (itemDescription: string) => ({ itemDescription: edmToTs(itemDescription, 'Edm.String') }),
      WarehouseCode: (warehouseCode: string) => ({ warehouseCode: edmToTs(warehouseCode, 'Edm.String') }),
      BinEntry: (binEntry: number) => ({ binEntry: edmToTs(binEntry, 'Edm.Int32') }),
      InWarehouseQuantity: (inWarehouseQuantity: number) => ({ inWarehouseQuantity: edmToTs(inWarehouseQuantity, 'Edm.Double') }),
      UoMCode: (uoMCode: string) => ({ uoMCode: edmToTs(uoMCode, 'Edm.String') }),
      BarCode: (barCode: string) => ({ barCode: edmToTs(barCode, 'Edm.String') }),
      UoMCountedQuantity: (uoMCountedQuantity: number) => ({ uoMCountedQuantity: edmToTs(uoMCountedQuantity, 'Edm.Double') }),
      ItemsPerUnit: (itemsPerUnit: number) => ({ itemsPerUnit: edmToTs(itemsPerUnit, 'Edm.Double') }),
      CountedQuantity: (countedQuantity: number) => ({ countedQuantity: edmToTs(countedQuantity, 'Edm.Double') }),
      Variance: (variance: number) => ({ variance: edmToTs(variance, 'Edm.Double') }),
      VariancePercentage: (variancePercentage: number) => ({ variancePercentage: edmToTs(variancePercentage, 'Edm.Double') }),
      VisualOrder: (visualOrder: number) => ({ visualOrder: edmToTs(visualOrder, 'Edm.Int32') }),
      TargetEntry: (targetEntry: number) => ({ targetEntry: edmToTs(targetEntry, 'Edm.Int32') }),
      TargetLine: (targetLine: number) => ({ targetLine: edmToTs(targetLine, 'Edm.Int32') }),
      TargetType: (targetType: number) => ({ targetType: edmToTs(targetType, 'Edm.Int32') }),
      TargetReference: (targetReference: string) => ({ targetReference: edmToTs(targetReference, 'Edm.String') }),
      ProjectCode: (projectCode: string) => ({ projectCode: edmToTs(projectCode, 'Edm.String') }),
      Manufacturer: (manufacturer: number) => ({ manufacturer: edmToTs(manufacturer, 'Edm.Int32') }),
      SupplierCatalogNo: (supplierCatalogNo: string) => ({ supplierCatalogNo: edmToTs(supplierCatalogNo, 'Edm.String') }),
      PreferredVendor: (preferredVendor: string) => ({ preferredVendor: edmToTs(preferredVendor, 'Edm.String') }),
      CostingCode: (costingCode: string) => ({ costingCode: edmToTs(costingCode, 'Edm.String') }),
      CostingCode2: (costingCode2: string) => ({ costingCode2: edmToTs(costingCode2, 'Edm.String') }),
      CostingCode3: (costingCode3: string) => ({ costingCode3: edmToTs(costingCode3, 'Edm.String') }),
      CostingCode4: (costingCode4: string) => ({ costingCode4: edmToTs(costingCode4, 'Edm.String') }),
      CostingCode5: (costingCode5: string) => ({ costingCode5: edmToTs(costingCode5, 'Edm.String') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') }),
      CounterID: (counterId: number) => ({ counterId: edmToTs(counterId, 'Edm.Int32') }),
      InventoryCountingLineUoMs: (inventoryCountingLineUoMs: InventoryCountingLineUoM) => ({ inventoryCountingLineUoMs: InventoryCountingLineUoM.build(inventoryCountingLineUoMs) }),
      InventoryCountingSerialNumbers: (inventoryCountingSerialNumbers: InventoryCountingSerialNumber) => ({ inventoryCountingSerialNumbers: InventoryCountingSerialNumber.build(inventoryCountingSerialNumbers) }),
      InventoryCountingBatchNumbers: (inventoryCountingBatchNumbers: InventoryCountingBatchNumber) => ({ inventoryCountingBatchNumbers: InventoryCountingBatchNumber.build(inventoryCountingBatchNumbers) })
    });
  }
}
