import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ItemProject
 */
export interface ItemProject {
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Valid From.
     * @nullable
     */
    validFrom?: Moment;
    /**
     * Valid To.
     * @nullable
     */
    validTo?: Moment;
    /**
     * Project.
     * @nullable
     */
    project?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemProject.build]] instead.
 */
export declare function createItemProject(json: any): ItemProject;
/**
 * ItemProjectField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemProjectField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ItemProject.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemProject.validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    validFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ItemProject.validTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    validTo: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ItemProject.project]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    project: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ItemProject {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemProject;
}
//# sourceMappingURL=ItemProject.d.ts.map