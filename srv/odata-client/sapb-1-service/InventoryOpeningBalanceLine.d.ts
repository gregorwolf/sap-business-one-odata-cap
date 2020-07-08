import { InventoryOpeningBalanceSerialNumber, InventoryOpeningBalanceSerialNumberField } from './InventoryOpeningBalanceSerialNumber';
import { InventoryOpeningBalanceBatchNumber, InventoryOpeningBalanceBatchNumberField } from './InventoryOpeningBalanceBatchNumber';
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare function createInventoryOpeningBalanceLine(json: any): InventoryOpeningBalanceLine;
/**
 * InventoryOpeningBalanceLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryOpeningBalanceLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InventoryOpeningBalanceLine.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.binEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    binEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.inWarehouseQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inWarehouseQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.openingBalance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openingBalance: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.barCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    barCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.visualOrder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    visualOrder: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.price]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    price: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.total]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    total: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.openInventoryAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openInventoryAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    projectCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.manufacturer]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufacturer: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.supplierCatalogNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    supplierCatalogNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.costingCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.costingCode2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.costingCode3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.costingCode4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.costingCode5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.preferredVendor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    preferredVendor: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.currency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.actualPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.postedValueLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    postedValueLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.postedValueSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    postedValueSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.inventoryOpeningBalanceSerialNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryOpeningBalanceSerialNumbers: InventoryOpeningBalanceSerialNumberField<EntityT>;
    /**
     * Representation of the [[InventoryOpeningBalanceLine.inventoryOpeningBalanceBatchNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryOpeningBalanceBatchNumbers: InventoryOpeningBalanceBatchNumberField<EntityT>;
}
export declare namespace InventoryOpeningBalanceLine {
    function build(json: {
        [keys: string]: FieldType | InventoryOpeningBalanceBatchNumber | InventoryOpeningBalanceSerialNumber;
    }): InventoryOpeningBalanceLine;
}
//# sourceMappingURL=InventoryOpeningBalanceLine.d.ts.map