import { SerialNumber } from './SerialNumber';
import { BatchNumber } from './BatchNumber';
import { DocumentLinesBinAllocation } from './DocumentLinesBinAllocation';
import { BoPickStatus } from './BoPickStatus';
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Pick Status.
     * @nullable
     */
    pickStatus?: BoPickStatus;
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
    serialNumbers?: SerialNumber[];
    /**
     * Batch Numbers.
     * @nullable
     */
    batchNumbers?: BatchNumber[];
    /**
     * Document Lines Bin Allocations.
     * @nullable
     */
    documentLinesBinAllocations?: DocumentLinesBinAllocation[];
}
/**
 * @deprecated Since v1.6.0. Use [[PickListsLine.build]] instead.
 */
export declare function createPickListsLine(json: any): PickListsLine;
/**
 * PickListsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PickListsLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PickListsLine> {
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
     * Representation of the [[PickListsLine.pickStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pickStatus: ComplexTypeEnumPropertyField<EntityT>;
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
    serialNumbers: CollectionField<EntityT, SerialNumber>;
    /**
     * Representation of the [[PickListsLine.batchNumbers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    batchNumbers: CollectionField<EntityT, BatchNumber>;
    /**
     * Representation of the [[PickListsLine.documentLinesBinAllocations]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentLinesBinAllocations: CollectionField<EntityT, DocumentLinesBinAllocation>;
    /**
     * Creates an instance of PickListsLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PickListsLine {
    /**
     * Metadata information on all properties of the `PickListsLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PickListsLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | BatchNumber | DocumentLinesBinAllocation | SerialNumber;
    }): PickListsLine;
}
//# sourceMappingURL=PickListsLine.d.ts.map