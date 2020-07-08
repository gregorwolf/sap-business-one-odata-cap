import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DocumentLinesBinAllocation
 */
export interface DocumentLinesBinAllocation {
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
 * @deprecated Since v1.6.0. Use [[DocumentLinesBinAllocation.build]] instead.
 */
export declare function createDocumentLinesBinAllocation(json: any): DocumentLinesBinAllocation;
/**
 * DocumentLinesBinAllocationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentLinesBinAllocationField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DocumentLinesBinAllocation.binAbsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    binAbsEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLinesBinAllocation.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLinesBinAllocation.serialAndBatchNumbersBaseLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serialAndBatchNumbersBaseLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLinesBinAllocation.baseLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLineNumber: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace DocumentLinesBinAllocation {
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentLinesBinAllocation;
}
//# sourceMappingURL=DocumentLinesBinAllocation.d.ts.map