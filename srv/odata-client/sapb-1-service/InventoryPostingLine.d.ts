import { Moment } from 'moment';
import { InventoryPostingLineUoM, InventoryPostingLineUoMField } from './InventoryPostingLineUoM';
import { InventoryPostingSerialNumber, InventoryPostingSerialNumberField } from './InventoryPostingSerialNumber';
import { InventoryPostingBatchNumber, InventoryPostingBatchNumberField } from './InventoryPostingBatchNumber';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time } from '@sap-cloud-sdk/core/v4';
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
export declare function createInventoryPostingLine(json: any): InventoryPostingLine;
/**
 * InventoryPostingLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryPostingLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InventoryPostingLine.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.binEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    binEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.inWarehouseQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inWarehouseQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.barCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    barCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.variance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    variance: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.variancePercentage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    variancePercentage: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.countedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.price]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    price: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.currency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.total]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    total: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.visualOrder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    visualOrder: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.countDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.countTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.baseEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.baseLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.baseType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.baseReference]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseReference: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.inventoryOffsetIncreaseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryOffsetIncreaseAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.inventoryOffsetDecreaseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryOffsetDecreaseAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    projectCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.manufacturer]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufacturer: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.supplierCatalogNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    supplierCatalogNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.preferredVendor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    preferredVendor: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.costingCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.costingCode2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.costingCode3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.costingCode4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.costingCode5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.uoMCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.uoMCountedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMCountedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.itemsPerUnit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemsPerUnit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.actualPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.postedValueLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    postedValueLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.postedValueSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    postedValueSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.inventoryPostingLineUoMs]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryPostingLineUoMs: InventoryPostingLineUoMField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.inventoryPostingSerialNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryPostingSerialNumbers: InventoryPostingSerialNumberField<EntityT>;
    /**
     * Representation of the [[InventoryPostingLine.inventoryPostingBatchNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryPostingBatchNumbers: InventoryPostingBatchNumberField<EntityT>;
}
export declare namespace InventoryPostingLine {
    function build(json: {
        [keys: string]: FieldType | InventoryPostingBatchNumber | InventoryPostingLineUoM | InventoryPostingSerialNumber;
    }): InventoryPostingLine;
}
//# sourceMappingURL=InventoryPostingLine.d.ts.map