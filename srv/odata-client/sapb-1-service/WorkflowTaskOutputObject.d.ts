import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WorkflowTaskOutputObject
 */
export interface WorkflowTaskOutputObject {
    /**
     * Task Id.
     * @nullable
     */
    taskId?: number;
    /**
     * Line Id.
     * @nullable
     */
    lineId?: string;
    /**
     * Type.
     * @nullable
     */
    type?: string;
    /**
     * Key.
     * @nullable
     */
    key?: string;
    /**
     * Sub Type.
     * @nullable
     */
    subType?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[WorkflowTaskOutputObject.build]] instead.
 */
export declare function createWorkflowTaskOutputObject(json: any): WorkflowTaskOutputObject;
/**
 * WorkflowTaskOutputObjectField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WorkflowTaskOutputObjectField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WorkflowTaskOutputObject.taskId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taskId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskOutputObject.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskOutputObject.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskOutputObject.key]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    key: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskOutputObject.subType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subType: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace WorkflowTaskOutputObject {
    function build(json: {
        [keys: string]: FieldType;
    }): WorkflowTaskOutputObject;
}
//# sourceMappingURL=WorkflowTaskOutputObject.d.ts.map