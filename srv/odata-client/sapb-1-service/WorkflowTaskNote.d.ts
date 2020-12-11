import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * WorkflowTaskNote
 */
export interface WorkflowTaskNote {
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
     * Note.
     * @nullable
     */
    note?: string;
    /**
     * Creator.
     * @nullable
     */
    creator?: string;
    /**
     * Note Date.
     * @nullable
     */
    noteDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[WorkflowTaskNote.build]] instead.
 */
export declare function createWorkflowTaskNote(json: any): WorkflowTaskNote;
/**
 * WorkflowTaskNoteField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WorkflowTaskNoteField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WorkflowTaskNote> {
    /**
     * Representation of the [[WorkflowTaskNote.taskId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taskId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskNote.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskNote.note]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    note: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskNote.creator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creator: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkflowTaskNote.noteDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    noteDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of WorkflowTaskNoteField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WorkflowTaskNote {
    /**
     * Metadata information on all properties of the `WorkflowTaskNote` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WorkflowTaskNote>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WorkflowTaskNote;
}
//# sourceMappingURL=WorkflowTaskNote.d.ts.map