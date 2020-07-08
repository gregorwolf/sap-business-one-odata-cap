import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class PathAdminField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace PathAdmin {
    function build(json: {
        [keys: string]: FieldType;
    }): PathAdmin;
}
//# sourceMappingURL=PathAdmin.d.ts.map