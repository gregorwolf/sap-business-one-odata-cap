import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class WorkflowTaskOutputObjectField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WorkflowTaskOutputObject> {
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
    /**
     * Creates an instance of WorkflowTaskOutputObjectField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WorkflowTaskOutputObject {
    /**
     * Metadata information on all properties of the `WorkflowTaskOutputObject` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WorkflowTaskOutputObject>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WorkflowTaskOutputObject;
}
//# sourceMappingURL=WorkflowTaskOutputObject.d.ts.map