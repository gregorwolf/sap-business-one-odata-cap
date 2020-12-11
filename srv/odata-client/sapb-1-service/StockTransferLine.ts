/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SerialNumber } from './SerialNumber';
import { BatchNumber } from './BatchNumber';
import { StockTransferLinesBinAllocation } from './StockTransferLinesBinAllocation';
import { BoYesNoEnum } from './BoYesNoEnum';
import { InvBaseDocTypeEnum } from './InvBaseDocTypeEnum';
import { BoStatus } from './BoStatus';
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * StockTransferLine
 */
export interface StockTransferLine {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
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
   * Quantity.
   * @nullable
   */
  quantity?: number;
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
   * Rate.
   * @nullable
   */
  rate?: number;
  /**
   * Discount Percent.
   * @nullable
   */
  discountPercent?: number;
  /**
   * Vendor Num.
   * @nullable
   */
  vendorNum?: string;
  /**
   * Serial Number.
   * @nullable
   */
  serialNumber?: string;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: string;
  /**
   * From Warehouse Code.
   * @nullable
   */
  fromWarehouseCode?: string;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: string;
  /**
   * Factor.
   * @nullable
   */
  factor?: number;
  /**
   * Factor 2.
   * @nullable
   */
  factor2?: number;
  /**
   * Factor 3.
   * @nullable
   */
  factor3?: number;
  /**
   * Factor 4.
   * @nullable
   */
  factor4?: number;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: string;
  /**
   * Distribution Rule 2.
   * @nullable
   */
  distributionRule2?: string;
  /**
   * Distribution Rule 3.
   * @nullable
   */
  distributionRule3?: string;
  /**
   * Distribution Rule 4.
   * @nullable
   */
  distributionRule4?: string;
  /**
   * Distribution Rule 5.
   * @nullable
   */
  distributionRule5?: string;
  /**
   * Use Base Units.
   * @nullable
   */
  useBaseUnits?: BoYesNoEnum;
  /**
   * Measure Unit.
   * @nullable
   */
  measureUnit?: string;
  /**
   * Units Of Measurment.
   * @nullable
   */
  unitsOfMeasurment?: number;
  /**
   * Base Type.
   * @nullable
   */
  baseType?: InvBaseDocTypeEnum;
  /**
   * Base Line.
   * @nullable
   */
  baseLine?: number;
  /**
   * Base Entry.
   * @nullable
   */
  baseEntry?: number;
  /**
   * Unit Price.
   * @nullable
   */
  unitPrice?: number;
  /**
   * Uo M Entry.
   * @nullable
   */
  uoMEntry?: number;
  /**
   * Uo M Code.
   * @nullable
   */
  uoMCode?: string;
  /**
   * Inventory Quantity.
   * @nullable
   */
  inventoryQuantity?: number;
  /**
   * Remaining Open Quantity.
   * @nullable
   */
  remainingOpenQuantity?: number;
  /**
   * Remaining Open Inventory Quantity.
   * @nullable
   */
  remainingOpenInventoryQuantity?: number;
  /**
   * Line Status.
   * @nullable
   */
  lineStatus?: BoStatus;
  /**
   * Serial Numbers.
   * @nullable
   */
  serialNumbers?: SerialNumber[];
  /**
   * Batch Numbers.
   * @nullable
   */
  batchNumbers?: BatchNumber[];
  /**
   * Stock Transfer Lines Bin Allocations.
   * @nullable
   */
  stockTransferLinesBinAllocations?: StockTransferLinesBinAllocation[];
}

/**
 * @deprecated Since v1.6.0. Use [[StockTransferLine.build]] instead.
 */
export function createStockTransferLine(json: any): StockTransferLine {
  return StockTransferLine.build(json);
}

/**
 * StockTransferLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class StockTransferLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, StockTransferLine> {
  /**
   * Representation of the [[StockTransferLine.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[StockTransferLine.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[StockTransferLine.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferLine.itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemDescription', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferLine.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[StockTransferLine.price]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  price: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Price', this, 'Edm.Double');
  /**
   * Representation of the [[StockTransferLine.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferLine.rate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Rate', this, 'Edm.Double');
  /**
   * Representation of the [[StockTransferLine.discountPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DiscountPercent', this, 'Edm.Double');
  /**
   * Representation of the [[StockTransferLine.vendorNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vendorNum: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('VendorNum', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferLine.serialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SerialNumber', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferLine.warehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WarehouseCode', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferLine.fromWarehouseCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromWarehouseCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FromWarehouseCode', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferLine.projectCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ProjectCode', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferLine.factor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor', this, 'Edm.Double');
  /**
   * Representation of the [[StockTransferLine.factor2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor2: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor2', this, 'Edm.Double');
  /**
   * Representation of the [[StockTransferLine.factor3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor3: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor3', this, 'Edm.Double');
  /**
   * Representation of the [[StockTransferLine.factor4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor4: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor4', this, 'Edm.Double');
  /**
   * Representation of the [[StockTransferLine.distributionRule]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferLine.distributionRule2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule2', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferLine.distributionRule3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule3', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferLine.distributionRule4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule4', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferLine.distributionRule5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DistributionRule5', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferLine.useBaseUnits]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useBaseUnits: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('UseBaseUnits', this);
  /**
   * Representation of the [[StockTransferLine.measureUnit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  measureUnit: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('MeasureUnit', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferLine.unitsOfMeasurment]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitsOfMeasurment: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UnitsOfMeasurment', this, 'Edm.Double');
  /**
   * Representation of the [[StockTransferLine.baseType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('BaseType', this);
  /**
   * Representation of the [[StockTransferLine.baseLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLine', this, 'Edm.Int32');
  /**
   * Representation of the [[StockTransferLine.baseEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[StockTransferLine.unitPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UnitPrice', this, 'Edm.Double');
  /**
   * Representation of the [[StockTransferLine.uoMEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[StockTransferLine.uoMCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UoMCode', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferLine.inventoryQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inventoryQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InventoryQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[StockTransferLine.remainingOpenQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remainingOpenQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RemainingOpenQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[StockTransferLine.remainingOpenInventoryQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remainingOpenInventoryQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RemainingOpenInventoryQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[StockTransferLine.lineStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('LineStatus', this);
  /**
   * Representation of the [[StockTransferLine.serialNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNumbers: CollectionField<EntityT, SerialNumber> = new CollectionField('SerialNumbers', this, SerialNumber);
  /**
   * Representation of the [[StockTransferLine.batchNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumbers: CollectionField<EntityT, BatchNumber> = new CollectionField('BatchNumbers', this, BatchNumber);
  /**
   * Representation of the [[StockTransferLine.stockTransferLinesBinAllocations]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockTransferLinesBinAllocations: CollectionField<EntityT, StockTransferLinesBinAllocation> = new CollectionField('StockTransferLinesBinAllocations', this, StockTransferLinesBinAllocation);

  /**
   * Creates an instance of StockTransferLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, StockTransferLine);
  }
}

export namespace StockTransferLine {
  /**
   * Metadata information on all properties of the `StockTransferLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<StockTransferLine>[] = [{
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocEntry',
    name: 'docEntry',
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
    originalName: 'Quantity',
    name: 'quantity',
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
    originalName: 'Rate',
    name: 'rate',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DiscountPercent',
    name: 'discountPercent',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'VendorNum',
    name: 'vendorNum',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SerialNumber',
    name: 'serialNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'WarehouseCode',
    name: 'warehouseCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FromWarehouseCode',
    name: 'fromWarehouseCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ProjectCode',
    name: 'projectCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Factor',
    name: 'factor',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Factor2',
    name: 'factor2',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Factor3',
    name: 'factor3',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Factor4',
    name: 'factor4',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DistributionRule',
    name: 'distributionRule',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule2',
    name: 'distributionRule2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule3',
    name: 'distributionRule3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule4',
    name: 'distributionRule4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DistributionRule5',
    name: 'distributionRule5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UseBaseUnits',
    name: 'useBaseUnits',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'MeasureUnit',
    name: 'measureUnit',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UnitsOfMeasurment',
    name: 'unitsOfMeasurment',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseType',
    name: 'baseType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'BaseLine',
    name: 'baseLine',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BaseEntry',
    name: 'baseEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UnitPrice',
    name: 'unitPrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'UoMEntry',
    name: 'uoMEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UoMCode',
    name: 'uoMCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'InventoryQuantity',
    name: 'inventoryQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'RemainingOpenQuantity',
    name: 'remainingOpenQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'RemainingOpenInventoryQuantity',
    name: 'remainingOpenInventoryQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineStatus',
    name: 'lineStatus',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SerialNumbers',
    name: 'serialNumbers',
    type: SerialNumber,
    isCollection: true
  }, {
    originalName: 'BatchNumbers',
    name: 'batchNumbers',
    type: BatchNumber,
    isCollection: true
  }, {
    originalName: 'StockTransferLinesBinAllocations',
    name: 'stockTransferLinesBinAllocations',
    type: StockTransferLinesBinAllocation,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | BatchNumber | SerialNumber | StockTransferLinesBinAllocation }): StockTransferLine {
    return deserializeComplexTypeV4(json, StockTransferLine);
  }
}
