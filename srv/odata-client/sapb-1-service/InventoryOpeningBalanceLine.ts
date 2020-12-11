/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryOpeningBalanceSerialNumber } from './InventoryOpeningBalanceSerialNumber';
import { InventoryOpeningBalanceBatchNumber } from './InventoryOpeningBalanceBatchNumber';
import { BoYesNoEnum } from './BoYesNoEnum';
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Allow Bin Negative Quantity.
   * @nullable
   */
  allowBinNegativeQuantity?: BoYesNoEnum;
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
  inventoryOpeningBalanceSerialNumbers?: InventoryOpeningBalanceSerialNumber[];
  /**
   * Inventory Opening Balance Batch Numbers.
   * @nullable
   */
  inventoryOpeningBalanceBatchNumbers?: InventoryOpeningBalanceBatchNumber[];
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
export class InventoryOpeningBalanceLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryOpeningBalanceLine> {
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
   * Representation of the [[InventoryOpeningBalanceLine.allowBinNegativeQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowBinNegativeQuantity: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AllowBinNegativeQuantity', this);
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
  inventoryOpeningBalanceSerialNumbers: CollectionField<EntityT, InventoryOpeningBalanceSerialNumber> = new CollectionField('InventoryOpeningBalanceSerialNumbers', this, InventoryOpeningBalanceSerialNumber);
  /**
   * Representation of the [[InventoryOpeningBalanceLine.inventoryOpeningBalanceBatchNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryOpeningBalanceBatchNumbers: CollectionField<EntityT, InventoryOpeningBalanceBatchNumber> = new CollectionField('InventoryOpeningBalanceBatchNumbers', this, InventoryOpeningBalanceBatchNumber);

  /**
   * Creates an instance of InventoryOpeningBalanceLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InventoryOpeningBalanceLine);
  }
}

export namespace InventoryOpeningBalanceLine {
  /**
   * Metadata information on all properties of the `InventoryOpeningBalanceLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryOpeningBalanceLine>[] = [{
    originalName: 'DocumentEntry',
    name: 'documentEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
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
    originalName: 'WarehouseCode',
    name: 'warehouseCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BinEntry',
    name: 'binEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'InWarehouseQuantity',
    name: 'inWarehouseQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'OpeningBalance',
    name: 'openingBalance',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BarCode',
    name: 'barCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'VisualOrder',
    name: 'visualOrder',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Price',
    name: 'price',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Total',
    name: 'total',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'OpenInventoryAccount',
    name: 'openInventoryAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ProjectCode',
    name: 'projectCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Manufacturer',
    name: 'manufacturer',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SupplierCatalogNo',
    name: 'supplierCatalogNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode',
    name: 'costingCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode2',
    name: 'costingCode2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode3',
    name: 'costingCode3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode4',
    name: 'costingCode4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostingCode5',
    name: 'costingCode5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PreferredVendor',
    name: 'preferredVendor',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Currency',
    name: 'currency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AllowBinNegativeQuantity',
    name: 'allowBinNegativeQuantity',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ActualPrice',
    name: 'actualPrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PostedValueLC',
    name: 'postedValueLc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PostedValueSC',
    name: 'postedValueSc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'InventoryOpeningBalanceSerialNumbers',
    name: 'inventoryOpeningBalanceSerialNumbers',
    type: InventoryOpeningBalanceSerialNumber,
    isCollection: true
  }, {
    originalName: 'InventoryOpeningBalanceBatchNumbers',
    name: 'inventoryOpeningBalanceBatchNumbers',
    type: InventoryOpeningBalanceBatchNumber,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | InventoryOpeningBalanceBatchNumber | InventoryOpeningBalanceSerialNumber }): InventoryOpeningBalanceLine {
    return deserializeComplexTypeV4(json, InventoryOpeningBalanceLine);
  }
}
