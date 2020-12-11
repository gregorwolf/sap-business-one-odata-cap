import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class WorkflowTaskInputObjectField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WorkflowTaskInputObject> {
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
    /**
     * Creates an instance of WorkflowTaskInputObjectField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WorkflowTaskInputObject {
    /**
     * Metadata information on all properties of the `WorkflowTaskInputObject` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WorkflowTaskInputObject>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WorkflowTaskInputObject;
}
//# sourceMappingURL=WorkflowTaskInputObject.d.ts.map