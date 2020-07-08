/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SerialNumber, SerialNumberField } from './SerialNumber';
import { BatchNumber, BatchNumberField } from './BatchNumber';
import { StockTransferLinesBinAllocation, StockTransferLinesBinAllocationField } from './StockTransferLinesBinAllocation';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
   * Serial Numbers.
   * @nullable
   */
  serialNumbers?: SerialNumber;
  /**
   * Batch Numbers.
   * @nullable
   */
  batchNumbers?: BatchNumber;
  /**
   * Stock Transfer Lines Bin Allocations.
   * @nullable
   */
  stockTransferLinesBinAllocations?: StockTransferLinesBinAllocation;
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
export class StockTransferLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
   * Representation of the [[StockTransferLine.serialNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNumbers: SerialNumberField<EntityT> = new SerialNumberField('SerialNumbers', this);
  /**
   * Representation of the [[StockTransferLine.batchNumbers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchNumbers: BatchNumberField<EntityT> = new BatchNumberField('BatchNumbers', this);
  /**
   * Representation of the [[StockTransferLine.stockTransferLinesBinAllocations]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockTransferLinesBinAllocations: StockTransferLinesBinAllocationField<EntityT> = new StockTransferLinesBinAllocationField('StockTransferLinesBinAllocations', this);
}

export namespace StockTransferLine {
  export function build(json: { [keys: string]: FieldType | BatchNumber | SerialNumber | StockTransferLinesBinAllocation }): StockTransferLine {
    return createComplexType(json, {
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      ItemDescription: (itemDescription: string) => ({ itemDescription: edmToTs(itemDescription, 'Edm.String') }),
      Quantity: (quantity: number) => ({ quantity: edmToTs(quantity, 'Edm.Double') }),
      Price: (price: number) => ({ price: edmToTs(price, 'Edm.Double') }),
      Currency: (currency: string) => ({ currency: edmToTs(currency, 'Edm.String') }),
      Rate: (rate: number) => ({ rate: edmToTs(rate, 'Edm.Double') }),
      DiscountPercent: (discountPercent: number) => ({ discountPercent: edmToTs(discountPercent, 'Edm.Double') }),
      VendorNum: (vendorNum: string) => ({ vendorNum: edmToTs(vendorNum, 'Edm.String') }),
      SerialNumber: (serialNumber: string) => ({ serialNumber: edmToTs(serialNumber, 'Edm.String') }),
      WarehouseCode: (warehouseCode: string) => ({ warehouseCode: edmToTs(warehouseCode, 'Edm.String') }),
      FromWarehouseCode: (fromWarehouseCode: string) => ({ fromWarehouseCode: edmToTs(fromWarehouseCode, 'Edm.String') }),
      ProjectCode: (projectCode: string) => ({ projectCode: edmToTs(projectCode, 'Edm.String') }),
      Factor: (factor: number) => ({ factor: edmToTs(factor, 'Edm.Double') }),
      Factor2: (factor2: number) => ({ factor2: edmToTs(factor2, 'Edm.Double') }),
      Factor3: (factor3: number) => ({ factor3: edmToTs(factor3, 'Edm.Double') }),
      Factor4: (factor4: number) => ({ factor4: edmToTs(factor4, 'Edm.Double') }),
      DistributionRule: (distributionRule: string) => ({ distributionRule: edmToTs(distributionRule, 'Edm.String') }),
      DistributionRule2: (distributionRule2: string) => ({ distributionRule2: edmToTs(distributionRule2, 'Edm.String') }),
      DistributionRule3: (distributionRule3: string) => ({ distributionRule3: edmToTs(distributionRule3, 'Edm.String') }),
      DistributionRule4: (distributionRule4: string) => ({ distributionRule4: edmToTs(distributionRule4, 'Edm.String') }),
      DistributionRule5: (distributionRule5: string) => ({ distributionRule5: edmToTs(distributionRule5, 'Edm.String') }),
      MeasureUnit: (measureUnit: string) => ({ measureUnit: edmToTs(measureUnit, 'Edm.String') }),
      UnitsOfMeasurment: (unitsOfMeasurment: number) => ({ unitsOfMeasurment: edmToTs(unitsOfMeasurment, 'Edm.Double') }),
      BaseLine: (baseLine: number) => ({ baseLine: edmToTs(baseLine, 'Edm.Int32') }),
      BaseEntry: (baseEntry: number) => ({ baseEntry: edmToTs(baseEntry, 'Edm.Int32') }),
      UnitPrice: (unitPrice: number) => ({ unitPrice: edmToTs(unitPrice, 'Edm.Double') }),
      UoMEntry: (uoMEntry: number) => ({ uoMEntry: edmToTs(uoMEntry, 'Edm.Int32') }),
      UoMCode: (uoMCode: string) => ({ uoMCode: edmToTs(uoMCode, 'Edm.String') }),
      InventoryQuantity: (inventoryQuantity: number) => ({ inventoryQuantity: edmToTs(inventoryQuantity, 'Edm.Double') }),
      RemainingOpenQuantity: (remainingOpenQuantity: number) => ({ remainingOpenQuantity: edmToTs(remainingOpenQuantity, 'Edm.Double') }),
      RemainingOpenInventoryQuantity: (remainingOpenInventoryQuantity: number) => ({ remainingOpenInventoryQuantity: edmToTs(remainingOpenInventoryQuantity, 'Edm.Double') }),
      SerialNumbers: (serialNumbers: SerialNumber) => ({ serialNumbers: SerialNumber.build(serialNumbers) }),
      BatchNumbers: (batchNumbers: BatchNumber) => ({ batchNumbers: BatchNumber.build(batchNumbers) }),
      StockTransferLinesBinAllocations: (stockTransferLinesBinAllocations: StockTransferLinesBinAllocation) => ({ stockTransferLinesBinAllocations: StockTransferLinesBinAllocation.build(stockTransferLinesBinAllocations) })
    });
  }
}
