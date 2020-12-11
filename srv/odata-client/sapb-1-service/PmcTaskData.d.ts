import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmcTaskData
 */
export interface PmcTaskData {
    /**
     * Task Id.
     * @nullable
     */
    taskId?: number;
    /**
     * Task Name.
     * @nullable
     */
    taskName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PmcTaskData.build]] instead.
 */
export declare function createPmcTaskData(json: any): PmcTaskData;
/**
 * PmcTaskDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmcTaskDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmcTaskData> {
    /**
     * Representation of the [[PmcTaskData.taskId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taskId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmcTaskData.taskName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taskName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of PmcTaskDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmcTaskData {
    /**
     * Metadata information on all properties of the `PmcTaskData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmcTaskData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmcTaskData;
}
//# sourceMappingURL=PmcTaskData.d.ts.map