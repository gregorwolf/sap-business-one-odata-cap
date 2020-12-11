import { BoYesNoEnum } from './BoYesNoEnum';
import { BinActionTypeEnum } from './BinActionTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * StockTransferLinesBinAllocation
 */
export interface StockTransferLinesBinAllocation {
    /**
     * Bin Abs Entry.
     * @nullable
     */
    binAbsEntry?: number;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
    /**
     * Allow Negative Quantity.
     * @nullable
     */
    allowNegativeQuantity?: BoYesNoEnum;
    /**
     * Serial And Batch Numbers Base Line.
     * @nullable
     */
    serialAndBatchNumbersBaseLine?: number;
    /**
     * Bin Action Type.
     * @nullable
     */
    binActionType?: BinActionTypeEnum;
    /**
     * Base Line Number.
     * @nullable
     */
    baseLineNumber?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[StockTransferLinesBinAllocation.build]] instead.
 */
export declare function createStockTransferLinesBinAllocation(json: any): StockTransferLinesBinAllocation;
/**
 * StockTransferLinesBinAllocationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class StockTransferLinesBinAllocationField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, StockTransferLinesBinAllocation> {
    /**
     * Representation of the [[StockTransferLinesBinAllocation.binAbsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    binAbsEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLinesBinAllocation.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLinesBinAllocation.allowNegativeQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    allowNegativeQuantity: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLinesBinAllocation.serialAndBatchNumbersBaseLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serialAndBatchNumbersBaseLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLinesBinAllocation.binActionType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    binActionType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLinesBinAllocation.baseLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of StockTransferLinesBinAllocationField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace StockTransferLinesBinAllocation {
    /**
     * Metadata information on all properties of the `StockTransferLinesBinAllocation` complex type.
     */
    const _propertyMetadata: PropertyMetadata<StockTransferLinesBinAllocation>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): StockTransferLinesBinAllocation;
}
//# sourceMappingURL=StockTransferLinesBinAllocation.d.ts.map