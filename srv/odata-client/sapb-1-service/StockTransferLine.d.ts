import { SerialNumber, SerialNumberField } from './SerialNumber';
import { BatchNumber, BatchNumberField } from './BatchNumber';
import { StockTransferLinesBinAllocation, StockTransferLinesBinAllocationField } from './StockTransferLinesBinAllocation';
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare function createStockTransferLine(json: any): StockTransferLine;
/**
 * StockTransferLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class StockTransferLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[StockTransferLine.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.price]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    price: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.currency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.discountPercent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    discountPercent: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.vendorNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vendorNum: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.serialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serialNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.fromWarehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fromWarehouseCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    projectCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.factor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.factor2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.factor3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor3: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.factor4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor4: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.measureUnit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    measureUnit: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.unitsOfMeasurment]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unitsOfMeasurment: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.baseLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.baseEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.unitPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unitPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.uoMEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.uoMCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.inventoryQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.remainingOpenQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remainingOpenQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.remainingOpenInventoryQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remainingOpenInventoryQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.serialNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serialNumbers: SerialNumberField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.batchNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    batchNumbers: BatchNumberField<EntityT>;
    /**
     * Representation of the [[StockTransferLine.stockTransferLinesBinAllocations]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stockTransferLinesBinAllocations: StockTransferLinesBinAllocationField<EntityT>;
}
export declare namespace StockTransferLine {
    function build(json: {
        [keys: string]: FieldType | BatchNumber | SerialNumber | StockTransferLinesBinAllocation;
    }): StockTransferLine;
}
//# sourceMappingURL=StockTransferLine.d.ts.map