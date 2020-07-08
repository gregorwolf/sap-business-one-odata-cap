import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
     * Serial And Batch Numbers Base Line.
     * @nullable
     */
    serialAndBatchNumbersBaseLine?: number;
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
export declare class StockTransferLinesBinAllocationField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
     * Representation of the [[StockTransferLinesBinAllocation.serialAndBatchNumbersBaseLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serialAndBatchNumbersBaseLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferLinesBinAllocation.baseLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLineNumber: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace StockTransferLinesBinAllocation {
    function build(json: {
        [keys: string]: FieldType;
    }): StockTransferLinesBinAllocation;
}
//# sourceMappingURL=StockTransferLinesBinAllocation.d.ts.map