import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class PmcTaskDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace PmcTaskData {
    function build(json: {
        [keys: string]: FieldType;
    }): PmcTaskData;
}
//# sourceMappingURL=PmcTaskData.d.ts.map