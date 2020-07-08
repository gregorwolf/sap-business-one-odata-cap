/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryOpeningBalanceSerialNumber, InventoryOpeningBalanceSerialNumberField } from './InventoryOpeningBalanceSerialNumber';
import { InventoryOpeningBalanceBatchNumber, InventoryOpeningBalanceBatchNumberField } from './InventoryOpeningBalanceBatchNumber';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * InventoryOpeningBalanceLine
 */
export interface InventoryOpeningBalanceLine {
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
   * Opening Balance.
   * @nullable
   */
  openingBalance?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Bar Code.
   * @nullable
   */
  barCode?: string;
  /**
   * Visual Order.
   * @nullable
   */
  visualOrder?: number;
  /**
   * Price.
   * @nullable
   */
  price?: number;
  /**
   * Total.
   * @nullable
   */
  total?: number;
  /**
   * Open Inventory Account.
   * @nullable
   */
  openInventoryAccount?: string;
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
   * Preferred Vendor.
   * @nullable
   */
  preferredVendor?: string;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
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
   * Inventory Opening Balance Serial Numbers.
   * @nullable
   */
  inventoryOpeningBalanceSerialNumbers?: InventoryOpeningBalanceSerialNumber;
  /**
   * Inventory Opening Balance Batch Numbers.
   * @nullable
   */
  inventoryOpeningBalanceBatchNumbers?: InventoryOpeningBalanceBatchNumber;
}

/**
 * @deprecated Since v1.6.0. Use [[InventoryOpeningBalanceLine.build]] instead.
 */
export function createInventoryOpeningBalanceLine(json: any): InventoryOpeningBalanceLine {
  return InventoryOpeningBalanceLine.build(json);
}

/**
 * InventoryOpeningBalanceLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryOpeningBalanceLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[InventoryOpeningBalanceLine.documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemDescription', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.binEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  binEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BinEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.inWarehouseQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inWarehouseQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InWarehouseQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.openingBalance]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openingBalance: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OpeningBalance', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.barCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  barCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BarCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.visualOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualOrder: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VisualOrder', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.price]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Price', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.total]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Total', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.openInventoryAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openInventoryAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OpenInventoryAccount', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.projectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ProjectCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.manufacturer]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufacturer: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Manufacturer', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.supplierCatalogNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  supplierCatalogNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SupplierCatalogNo', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.costingCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.costingCode2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode2', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.costingCode3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode3', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.costingCode4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode4', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.costingCode5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostingCode5', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.preferredVendor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  preferredVendor: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PreferredVendor', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.actualPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActualPrice', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.postedValueLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postedValueLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PostedValueLC', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.postedValueSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  postedValueSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PostedValueSC', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryOpeningBalanceLine.inventoryOpeningBalanceSerialNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOpeningBalanceSerialNumbers: InventoryOpeningBalanceSerialNumberField<EntityT> = new InventoryOpeningBalanceSerialNumberField('InventoryOpeningBalanceSerialNumbers', this);
  /**
   * Representation of the [[InventoryOpeningBalanceLine.inventoryOpeningBalanceBatchNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOpeningBalanceBatchNumbers: InventoryOpeningBalanceBatchNumberField<EntityT> = new InventoryOpeningBalanceBatchNumberField('InventoryOpeningBalanceBatchNumbers', this);
}

export namespace InventoryOpeningBalanceLine {
  export function build(json: { [keys: string]: FieldType | InventoryOpeningBalanceBatchNumber | InventoryOpeningBalanceSerialNumber }): InventoryOpeningBalanceLine {
    return createComplexType(json, {
      DocumentEntry: (documentEntry: number) => ({ documentEntry: edmToTs(documentEntry, 'Edm.Int32') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      ItemDescription: (itemDescription: string) => ({ itemDescription: edmToTs(itemDescription, 'Edm.String') }),
      WarehouseCode: (warehouseCode: string) => ({ warehouseCode: edmToTs(warehouseCode, 'Edm.String') }),
      BinEntry: (binEntry: number) => ({ binEntry: edmToTs(binEntry, 'Edm.Int32') }),
      InWarehouseQuantity: (inWarehouseQuantity: number) => ({ inWarehouseQuantity: edmToTs(inWarehouseQuantity, 'Edm.Double') }),
      OpeningBalance: (openingBalance: number) => ({ openingBalance: edmToTs(openingBalance, 'Edm.Double') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') }),
      BarCode: (barCode: string) => ({ barCode: edmToTs(barCode, 'Edm.String') }),
      VisualOrder: (visualOrder: number) => ({ visualOrder: edmToTs(visualOrder, 'Edm.Int32') }),
      Price: (price: number) => ({ price: edmToTs(price, 'Edm.Double') }),
      Total: (total: number) => ({ total: edmToTs(total, 'Edm.Double') }),
      OpenInventoryAccount: (openInventoryAccount: string) => ({ openInventoryAccount: edmToTs(openInventoryAccount, 'Edm.String') }),
      ProjectCode: (projectCode: string) => ({ projectCode: edmToTs(projectCode, 'Edm.String') }),
      Manufacturer: (manufacturer: number) => ({ manufacturer: edmToTs(manufacturer, 'Edm.Int32') }),
      SupplierCatalogNo: (supplierCatalogNo: string) => ({ supplierCatalogNo: edmToTs(supplierCatalogNo, 'Edm.String') }),
      CostingCode: (costingCode: string) => ({ costingCode: edmToTs(costingCode, 'Edm.String') }),
      CostingCode2: (costingCode2: string) => ({ costingCode2: edmToTs(costingCode2, 'Edm.String') }),
      CostingCode3: (costingCode3: string) => ({ costingCode3: edmToTs(costingCode3, 'Edm.String') }),
      CostingCode4: (costingCode4: string) => ({ costingCode4: edmToTs(costingCode4, 'Edm.String') }),
      CostingCode5: (costingCode5: string) => ({ costingCode5: edmToTs(costingCode5, 'Edm.String') }),
      PreferredVendor: (preferredVendor: string) => ({ preferredVendor: edmToTs(preferredVendor, 'Edm.String') }),
      Currency: (currency: string) => ({ currency: edmToTs(currency, 'Edm.String') }),
      ActualPrice: (actualPrice: number) => ({ actualPrice: edmToTs(actualPrice, 'Edm.Double') }),
      PostedValueLC: (postedValueLc: number) => ({ postedValueLc: edmToTs(postedValueLc, 'Edm.Double') }),
      PostedValueSC: (postedValueSc: number) => ({ postedValueSc: edmToTs(postedValueSc, 'Edm.Double') }),
      InventoryOpeningBalanceSerialNumbers: (inventoryOpeningBalanceSerialNumbers: InventoryOpeningBalanceSerialNumber) => ({ inventoryOpeningBalanceSerialNumbers: InventoryOpeningBalanceSerialNumber.build(inventoryOpeningBalanceSerialNumbers) }),
      InventoryOpeningBalanceBatchNumbers: (inventoryOpeningBalanceBatchNumbers: InventoryOpeningBalanceBatchNumber) => ({ inventoryOpeningBalanceBatchNumbers: InventoryOpeningBalanceBatchNumber.build(inventoryOpeningBalanceBatchNumbers) })
    });
  }
}
