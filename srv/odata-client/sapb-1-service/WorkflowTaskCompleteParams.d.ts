import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * WorkflowTaskCompleteParams
 */
export interface WorkflowTaskCompleteParams {
    /**
     * Task Id.
     * @nullable
     */
    taskId?: number;
    /**
     * Note.
     * @nullable
     */
    note?: string;
    /**
     * Trigger Params.
     * @nullable
     */
    triggerParams?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[WorkflowTaskCompleteParams.build]] instead.
 */
export declare function createWorkflowTaskCompleteParams(json: any): WorkflowTaskCompleteParams;
/**
 * WorkflowTaskCompleteParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WorkflowTaskCompleteParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WorkflowTaskCompleteParams> {
    /**
     * Representation of the [[WorkflowTaskCompleteParams.taskId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taskId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskCompleteParams.note]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    note: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskCompleteParams.triggerParams]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    triggerParams: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of WorkflowTaskCompleteParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WorkflowTaskCompleteParams {
    /**
     * Metadata information on all properties of the `WorkflowTaskCompleteParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WorkflowTaskCompleteParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WorkflowTaskCompleteParams;
}
//# sourceMappingURL=WorkflowTaskCompleteParams.d.ts.map