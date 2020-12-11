import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ItemProjectField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemProject> {
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
    /**
     * Creates an instance of ItemProjectField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ItemProject {
    /**
     * Metadata information on all properties of the `ItemProject` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ItemProject>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ItemProject;
}
//# sourceMappingURL=ItemProject.d.ts.map