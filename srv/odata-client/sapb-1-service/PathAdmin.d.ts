import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PathAdmin
 */
export interface PathAdmin {
    /**
     * Word Template Folder Path.
     * @nullable
     */
    wordTemplateFolderPath?: string;
    /**
     * Pictures Folder Path.
     * @nullable
     */
    picturesFolderPath?: string;
    /**
     * Attachments Folder Path.
     * @nullable
     */
    attachmentsFolderPath?: string;
    /**
     * Extensions Folder Path.
     * @nullable
     */
    extensionsFolderPath?: string;
    /**
     * Print Id.
     * @nullable
     */
    printId?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PathAdmin.build]] instead.
 */
export declare function createPathAdmin(json: any): PathAdmin;
/**
 * PathAdminField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PathAdminField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PathAdmin> {
    /**
     * Representation of the [[PathAdmin.wordTemplateFolderPath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wordTemplateFolderPath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PathAdmin.picturesFolderPath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    picturesFolderPath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PathAdmin.attachmentsFolderPath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attachmentsFolderPath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PathAdmin.extensionsFolderPath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    extensionsFolderPath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PathAdmin.printId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    printId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of PathAdminField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PathAdmin {
    /**
     * Metadata information on all properties of the `PathAdmin` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PathAdmin>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PathAdmin;
}
//# sourceMappingURL=PathAdmin.d.ts.map