import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WorkflowTaskInputObject
 */
export interface WorkflowTaskInputObject {
    /**
     * Task Id.
     * @nullable
     */
    taskId?: number;
    /**
     * Line Id.
     * @nullable
     */
    lineId?: number;
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
    /**
     * Detail.
     * @nullable
     */
    detail?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[WorkflowTaskInputObject.build]] instead.
 */
export declare function createWorkflowTaskInputObject(json: any): WorkflowTaskInputObject;
/**
 * WorkflowTaskInputObjectField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WorkflowTaskInputObjectField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WorkflowTaskInputObject.taskId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taskId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskInputObject.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskInputObject.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskInputObject.key]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    key: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskInputObject.subType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskInputObject.detail]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    detail: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace WorkflowTaskInputObject {
    function build(json: {
        [keys: string]: FieldType;
    }): WorkflowTaskInputObject;
}
//# sourceMappingURL=WorkflowTaskInputObject.d.ts.map