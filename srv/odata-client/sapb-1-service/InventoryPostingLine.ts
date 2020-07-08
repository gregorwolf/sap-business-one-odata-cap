/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { InventoryPostingLineUoM, InventoryPostingLineUoMField } from './InventoryPostingLineUoM';
import { InventoryPostingSerialNumber, InventoryPostingSerialNumberField } from './InventoryPostingSerialNumber';
import { InventoryPostingBatchNumber, InventoryPostingBatchNumberField } from './InventoryPostingBatchNumber';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * InventoryPostingLine
 */
export interface InventoryPostingLine {
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
   * Bar Code.
   * @nullable
   */
  barCode?: string;
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
   * Counted Quantity.
   * @nullable
   */
  countedQuantity?: number;
  /**
   * Price.
   * @nullable
   */
  price?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Total.
   * @nullable
   */
  total?: number;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: number;
  /**
   * Count Date.
   * @nullable
   */
  countDate?: Moment;
  /**
   * Count Time.
   * @nullable
   */
  countTime?: Time;
  /**
   * Base Entry.
   * @nullable
   */
  baseEntry?: number;
  /**
   * Base Line.
   * @nullable
   */
  baseLine?: number;
  /**
   * Base Type.
   * @nullable
   */
  baseType?: number;
  /**
   * Base Reference.
   * @nullable
   */
  baseReference?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Inventory Offset Increase Account.
   * @nullable
   */
  inventoryOffsetIncreaseAccount?: string;
  /**
   * Inventory Offset Decrease Account.
   * @nullable
   */
  inventoryOffsetDecreaseAccount?: string;
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
   * Uo M Code.
   * @nullable
   */
  uoMCode?: string;
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
   * Actual Price.
   * @nullable
   */
  actualPrice?: number;
  /**
   * Posted Value Lc.
   * @nullable
   */
  postedValueLc?: number;
  /**
   * Posted Value Sc.
   * @nullable
   */
  postedValueSc?: number;
  /**
   * Inventory Posting Line Uo Ms.
   * @nullable
   */
  inventoryPostingLineUoMs?: InventoryPostingLineUoM;
  /**
   * Inventory Posting Serial Numbers.
   * @nullable
   */
  inventoryPostingSerialNumbers?: InventoryPostingSerialNumber;
  /**
   * Inventory Posting Batch Numbers.
   * @nullable
   */
  inventoryPostingBatchNumbers?: InventoryPostingBatchNumber;
}

/**
 * @deprecated Since v1.6.0. Use [[InventoryPostingLine.build]] instead.
 */
export function createInventoryPostingLine(json: any): InventoryPostingLine {
  return InventoryPostingLine.build(json);
}

/**
 * InventoryPostingLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryPostingLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[InventoryPostingLine.documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingLine.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingLine.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemDescription', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.binEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  binEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BinEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingLine.inWarehouseQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inWarehouseQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InWarehouseQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryPostingLine.barCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  barCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BarCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.variance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variance: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Variance', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryPostingLine.variancePercentage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variancePercentage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VariancePercentage', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryPostingLine.countedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CountedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryPostingLine.price]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Price', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryPostingLine.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.total]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Total', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryPostingLine.visualOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VisualOrder', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingLine.countDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CountDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[InventoryPostingLine.countTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('CountTime', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[InventoryPostingLine.baseEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingLine.baseLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLine', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingLine.baseType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseType', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingLine.baseReference]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseReference: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BaseReference', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.inventoryOffsetIncreaseAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOffsetIncreaseAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InventoryOffsetIncreaseAccount', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.inventoryOffsetDecreaseAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOffsetDecreaseAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InventoryOffsetDecreaseAccount', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.projectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ProjectCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.manufacturer]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturer: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Manufacturer', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryPostingLine.supplierCatalogNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  supplierCatalogNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SupplierCatalogNo', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.preferredVendor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  preferredVendor: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PreferredVendor', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.costingCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.costingCode2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode2', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.costingCode3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode3', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.costingCode4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode4', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.costingCode5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode5', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.uoMCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UoMCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryPostingLine.uoMCountedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCountedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMCountedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryPostingLine.itemsPerUnit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemsPerUnit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ItemsPerUnit', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryPostingLine.actualPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActualPrice', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryPostingLine.postedValueLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postedValueLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PostedValueLC', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryPostingLine.postedValueSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postedValueSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PostedValueSC', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryPostingLine.inventoryPostingLineUoMs]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryPostingLineUoMs: InventoryPostingLineUoMField<EntityT> = new InventoryPostingLineUoMField('InventoryPostingLineUoMs', this);
  /**
   * Representation of the [[InventoryPostingLine.inventoryPostingSerialNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryPostingSerialNumbers: InventoryPostingSerialNumberField<EntityT> = new InventoryPostingSerialNumberField('InventoryPostingSerialNumbers', this);
  /**
   * Representation of the [[InventoryPostingLine.inventoryPostingBatchNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryPostingBatchNumbers: InventoryPostingBatchNumberField<EntityT> = new InventoryPostingBatchNumberField('InventoryPostingBatchNumbers', this);
}

export namespace InventoryPostingLine {
  export function build(json: { [keys: string]: FieldType | InventoryPostingBatchNumber | InventoryPostingLineUoM | InventoryPostingSerialNumber }): InventoryPostingLine {
    return createComplexType(json, {
      DocumentEntry: (documentEntry: number) => ({ documentEntry: edmToTs(documentEntry, 'Edm.Int32') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      ItemDescription: (itemDescription: string) => ({ itemDescription: edmToTs(itemDescription, 'Edm.String') }),
      WarehouseCode: (warehouseCode: string) => ({ warehouseCode: edmToTs(warehouseCode, 'Edm.String') }),
      BinEntry: (binEntry: number) => ({ binEntry: edmToTs(binEntry, 'Edm.Int32') }),
      InWarehouseQuantity: (inWarehouseQuantity: number) => ({ inWarehouseQuantity: edmToTs(inWarehouseQuantity, 'Edm.Double') }),
      BarCode: (barCode: string) => ({ barCode: edmToTs(barCode, 'Edm.String') }),
      Variance: (variance: number) => ({ variance: edmToTs(variance, 'Edm.Double') }),
      VariancePercentage: (variancePercentage: number) => ({ variancePercentage: edmToTs(variancePercentage, 'Edm.Double') }),
      CountedQuantity: (countedQuantity: number) => ({ countedQuantity: edmToTs(countedQuantity, 'Edm.Double') }),
      Price: (price: number) => ({ price: edmToTs(price, 'Edm.Double') }),
      Currency: (currency: string) => ({ currency: edmToTs(currency, 'Edm.String') }),
      Total: (total: number) => ({ total: edmToTs(total, 'Edm.Double') }),
      VisualOrder: (visualOrder: number) => ({ visualOrder: edmToTs(visualOrder, 'Edm.Int32') }),
      CountDate: (countDate: Moment) => ({ countDate: edmToTs(countDate, 'Edm.DateTimeOffset') }),
      CountTime: (countTime: Time) => ({ countTime: edmToTs(countTime, 'Edm.TimeOfDay') }),
      BaseEntry: (baseEntry: number) => ({ baseEntry: edmToTs(baseEntry, 'Edm.Int32') }),
      BaseLine: (baseLine: number) => ({ baseLine: edmToTs(baseLine, 'Edm.Int32') }),
      BaseType: (baseType: number) => ({ baseType: edmToTs(baseType, 'Edm.Int32') }),
      BaseReference: (baseReference: string) => ({ baseReference: edmToTs(baseReference, 'Edm.String') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') }),
      InventoryOffsetIncreaseAccount: (inventoryOffsetIncreaseAccount: string) => ({ inventoryOffsetIncreaseAccount: edmToTs(inventoryOffsetIncreaseAccount, 'Edm.String') }),
      InventoryOffsetDecreaseAccount: (inventoryOffsetDecreaseAccount: string) => ({ inventoryOffsetDecreaseAccount: edmToTs(inventoryOffsetDecreaseAccount, 'Edm.String') }),
      ProjectCode: (projectCode: string) => ({ projectCode: edmToTs(projectCode, 'Edm.String') }),
      Manufacturer: (manufacturer: number) => ({ manufacturer: edmToTs(manufacturer, 'Edm.Int32') }),
      SupplierCatalogNo: (supplierCatalogNo: string) => ({ supplierCatalogNo: edmToTs(supplierCatalogNo, 'Edm.String') }),
      PreferredVendor: (preferredVendor: string) => ({ preferredVendor: edmToTs(preferredVendor, 'Edm.String') }),
      CostingCode: (costingCode: string) => ({ costingCode: edmToTs(costingCode, 'Edm.String') }),
      CostingCode2: (costingCode2: string) => ({ costingCode2: edmToTs(costingCode2, 'Edm.String') }),
      CostingCode3: (costingCode3: string) => ({ costingCode3: edmToTs(costingCode3, 'Edm.String') }),
      CostingCode4: (costingCode4: string) => ({ costingCode4: edmToTs(costingCode4, 'Edm.String') }),
      CostingCode5: (costingCode5: string) => ({ costingCode5: edmToTs(costingCode5, 'Edm.String') }),
      UoMCode: (uoMCode: string) => ({ uoMCode: edmToTs(uoMCode, 'Edm.String') }),
      UoMCountedQuantity: (uoMCountedQuantity: number) => ({ uoMCountedQuantity: edmToTs(uoMCountedQuantity, 'Edm.Double') }),
      ItemsPerUnit: (itemsPerUnit: number) => ({ itemsPerUnit: edmToTs(itemsPerUnit, 'Edm.Double') }),
      ActualPrice: (actualPrice: number) => ({ actualPrice: edmToTs(actualPrice, 'Edm.Double') }),
      PostedValueLC: (postedValueLc: number) => ({ postedValueLc: edmToTs(postedValueLc, 'Edm.Double') }),
      PostedValueSC: (postedValueSc: number) => ({ postedValueSc: edmToTs(postedValueSc, 'Edm.Double') }),
      InventoryPostingLineUoMs: (inventoryPostingLineUoMs: InventoryPostingLineUoM) => ({ inventoryPostingLineUoMs: InventoryPostingLineUoM.build(inventoryPostingLineUoMs) }),
      InventoryPostingSerialNumbers: (inventoryPostingSerialNumbers: InventoryPostingSerialNumber) => ({ inventoryPostingSerialNumbers: InventoryPostingSerialNumber.build(inventoryPostingSerialNumbers) }),
      InventoryPostingBatchNumbers: (inventoryPostingBatchNumbers: InventoryPostingBatchNumber) => ({ inventoryPostingBatchNumbers: InventoryPostingBatchNumber.build(inventoryPostingBatchNumbers) })
    });
  }
}
