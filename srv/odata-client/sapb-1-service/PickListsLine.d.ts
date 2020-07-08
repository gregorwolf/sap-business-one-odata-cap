import { SerialNumber, SerialNumberField } from './SerialNumber';
import { BatchNumber, BatchNumberField } from './BatchNumber';
import { DocumentLinesBinAllocation, DocumentLinesBinAllocationField } from './DocumentLinesBinAllocation';
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PickListsLine
 */
export interface PickListsLine {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Order Entry.
     * @nullable
     */
    orderEntry?: number;
    /**
     * Order Row Id.
     * @nullable
     */
    orderRowId?: number;
    /**
     * Picked Quantity.
     * @nullable
     */
    pickedQuantity?: number;
    /**
     * Released Quantity.
     * @nullable
     */
    releasedQuantity?: number;
    /**
     * Previously Released Quantity.
     * @nullable
     */
    previouslyReleasedQuantity?: number;
    /**
     * Base Object Type.
     * @nullable
     */
    baseObjectType?: number;
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
     * Document Lines Bin Allocations.
     * @nullable
     */
    documentLinesBinAllocations?: DocumentLinesBinAllocation;
}
/**
 * @deprecated Since v1.6.0. Use [[PickListsLine.build]] instead.
 */
export declare function createPickListsLine(json: any): PickListsLine;
/**
 * PickListsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PickListsLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PickListsLine.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PickListsLine.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PickListsLine.orderEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    orderEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PickListsLine.orderRowId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    orderRowId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PickListsLine.pickedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pickedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PickListsLine.releasedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    releasedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PickListsLine.previouslyReleasedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    previouslyReleasedQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PickListsLine.baseObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseObjectType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PickListsLine.serialNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serialNumbers: SerialNumberField<EntityT>;
    /**
     * Representation of the [[PickListsLine.batchNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    batchNumbers: BatchNumberField<EntityT>;
    /**
     * Representation of the [[PickListsLine.documentLinesBinAllocations]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentLinesBinAllocations: DocumentLinesBinAllocationField<EntityT>;
}
export declare namespace PickListsLine {
    function build(json: {
        [keys: string]: FieldType | BatchNumber | DocumentLinesBinAllocation | SerialNumber;
    }): PickListsLine;
}
//# sourceMappingURL=PickListsLine.d.ts.map