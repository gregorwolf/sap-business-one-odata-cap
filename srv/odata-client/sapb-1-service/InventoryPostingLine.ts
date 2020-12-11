/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { InventoryPostingLineUoM } from './InventoryPostingLineUoM';
import { InventoryPostingSerialNumber } from './InventoryPostingSerialNumber';
import { InventoryPostingBatchNumber } from './InventoryPostingBatchNumber';
import { BoYesNoEnum } from './BoYesNoEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Inventory Posting Line Uo Ms.
   * @nullable
   */
  inventoryPostingLineUoMs?: InventoryPostingLineUoM[];
  /**
   * Inventory Posting Serial Numbers.
   * @nullable
   */
  inventoryPostingSerialNumbers?: InventoryPostingSerialNumber[];
  /**
   * Inventory Posting Batch Numbers.
   * @nullable
   */
  inventoryPostingBatchNumbers?: InventoryPostingBatchNumber[];
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
export class InventoryPostingLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryPostingLine> {
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
   * Representation of the [[InventoryPostingLine.allowBinNegativeQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowBinNegativeQuantity: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AllowBinNegativeQuantity', this);
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
  inventoryPostingLineUoMs: CollectionField<EntityT, InventoryPostingLineUoM> = new CollectionField('InventoryPostingLineUoMs', this, InventoryPostingLineUoM);
  /**
   * Representation of the [[InventoryPostingLine.inventoryPostingSerialNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryPostingSerialNumbers: CollectionField<EntityT, InventoryPostingSerialNumber> = new CollectionField('InventoryPostingSerialNumbers', this, InventoryPostingSerialNumber);
  /**
   * Representation of the [[InventoryPostingLine.inventoryPostingBatchNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryPostingBatchNumbers: CollectionField<EntityT, InventoryPostingBatchNumber> = new CollectionField('InventoryPostingBatchNumbers', this, InventoryPostingBatchNumber);

  /**
   * Creates an instance of InventoryPostingLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InventoryPostingLine);
  }
}

export namespace InventoryPostingLine {
  /**
   * Metadata information on all properties of the `InventoryPostingLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryPostingLine>[] = [{
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
    originalName: 'BarCode',
    name: 'barCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Variance',
    name: 'variance',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VariancePercentage',
    name: 'variancePercentage',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CountedQuantity',
    name: 'countedQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Price',
    name: 'price',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Currency',
    name: 'currency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Total',
    name: 'total',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VisualOrder',
    name: 'visualOrder',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CountDate',
    name: 'countDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'CountTime',
    name: 'countTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'BaseEntry',
    name: 'baseEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseLine',
    name: 'baseLine',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseType',
    name: 'baseType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseReference',
    name: 'baseReference',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'InventoryOffsetIncreaseAccount',
    name: 'inventoryOffsetIncreaseAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'InventoryOffsetDecreaseAccount',
    name: 'inventoryOffsetDecreaseAccount',
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
    originalName: 'PreferredVendor',
    name: 'preferredVendor',
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
    originalName: 'UoMCode',
    name: 'uoMCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UoMCountedQuantity',
    name: 'uoMCountedQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ItemsPerUnit',
    name: 'itemsPerUnit',
    type: 'Edm.Double',
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
    originalName: 'InventoryPostingLineUoMs',
    name: 'inventoryPostingLineUoMs',
    type: InventoryPostingLineUoM,
    isCollection: true
  }, {
    originalName: 'InventoryPostingSerialNumbers',
    name: 'inventoryPostingSerialNumbers',
    type: InventoryPostingSerialNumber,
    isCollection: true
  }, {
    originalName: 'InventoryPostingBatchNumbers',
    name: 'inventoryPostingBatchNumbers',
    type: InventoryPostingBatchNumber,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | InventoryPostingBatchNumber | InventoryPostingLineUoM | InventoryPostingSerialNumber }): InventoryPostingLine {
    return deserializeComplexTypeV4(json, InventoryPostingLine);
  }
}
