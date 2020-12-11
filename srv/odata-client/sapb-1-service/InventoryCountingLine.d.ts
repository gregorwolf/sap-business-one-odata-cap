import { InventoryCountingLineUoM } from './InventoryCountingLineUoM';
import { InventoryCountingSerialNumber } from './InventoryCountingSerialNumber';
import { InventoryCountingBatchNumber } from './InventoryCountingBatchNumber';
import { BoYesNoEnum } from './BoYesNoEnum';
import { CountingLineStatusEnum } from './CountingLineStatusEnum';
import { CounterTypeEnum } from './CounterTypeEnum';
import { MultipleCounterRoleEnum } from './MultipleCounterRoleEnum';
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Freeze.
     * @nullable
     */
    freeze?: BoYesNoEnum;
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
     * Counted.
     * @nullable
     */
    counted?: BoYesNoEnum;
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
     * Line Status.
     * @nullable
     */
    lineStatus?: CountingLineStatusEnum;
    /**
     * Counter Type.
     * @nullable
     */
    counterType?: CounterTypeEnum;
    /**
     * Counter Id.
     * @nullable
     */
    counterId?: number;
    /**
     * Multiple Counter Role.
     * @nullable
     */
    multipleCounterRole?: MultipleCounterRoleEnum;
    /**
     * Inventory Counting Line Uo Ms.
     * @nullable
     */
    inventoryCountingLineUoMs?: InventoryCountingLineUoM[];
    /**
     * Inventory Counting Serial Numbers.
     * @nullable
     */
    inventoryCountingSerialNumbers?: InventoryCountingSerialNumber[];
    /**
     * Inventory Counting Batch Numbers.
     * @nullable
     */
    inventoryCountingBatchNumbers?: InventoryCountingBatchNumber[];
}
/**
 * @deprecated Since v1.6.0. Use [[InventoryCountingLine.build]] instead.
 */
export declare function createInventoryCountingLine(json: any): InventoryCountingLine;
/**
 * InventoryCountingLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InventoryCountingLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryCountingLine> {
    /**
     * Representation of the [[InventoryCountingLine.documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.freeze]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freeze: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.binEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    binEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.inWarehouseQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inWarehouseQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.counted]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counted: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.uoMCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.barCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    barCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.uoMCountedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    uoMCountedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.itemsPerUnit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemsPerUnit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.countedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.variance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    variance: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.variancePercentage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    variancePercentage: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.visualOrder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    visualOrder: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.targetEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.targetLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.targetType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.targetReference]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetReference: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    projectCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.manufacturer]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    manufacturer: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.supplierCatalogNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    supplierCatalogNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.preferredVendor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    preferredVendor: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.costingCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.costingCode2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.costingCode3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.costingCode4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.costingCode5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.lineStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineStatus: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.counterType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.counterId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    counterId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.multipleCounterRole]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    multipleCounterRole: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[InventoryCountingLine.inventoryCountingLineUoMs]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryCountingLineUoMs: CollectionField<EntityT, InventoryCountingLineUoM>;
    /**
     * Representation of the [[InventoryCountingLine.inventoryCountingSerialNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryCountingSerialNumbers: CollectionField<EntityT, InventoryCountingSerialNumber>;
    /**
     * Representation of the [[InventoryCountingLine.inventoryCountingBatchNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inventoryCountingBatchNumbers: CollectionField<EntityT, InventoryCountingBatchNumber>;
    /**
     * Creates an instance of InventoryCountingLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InventoryCountingLine {
    /**
     * Metadata information on all properties of the `InventoryCountingLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InventoryCountingLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | InventoryCountingBatchNumber | InventoryCountingLineUoM | InventoryCountingSerialNumber;
    }): InventoryCountingLine;
}
//# sourceMappingURL=InventoryCountingLine.d.ts.map