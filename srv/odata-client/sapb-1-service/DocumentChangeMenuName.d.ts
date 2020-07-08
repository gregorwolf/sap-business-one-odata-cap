import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DocumentChangeMenuName
 */
export interface DocumentChangeMenuName {
    /**
     * Document.
     * @nullable
     */
    document?: string;
    /**
     * Document Sub Type.
     * @nullable
     */
    documentSubType?: string;
    /**
     * Changed Menu Name.
     * @nullable
     */
    changedMenuName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentChangeMenuName.build]] instead.
 */
export declare function createDocumentChangeMenuName(json: any): DocumentChangeMenuName;
/**
 * DocumentChangeMenuNameField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentChangeMenuNameField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DocumentChangeMenuName.document]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    document: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentChangeMenuName.documentSubType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentSubType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentChangeMenuName.changedMenuName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changedMenuName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DocumentChangeMenuName {
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentChangeMenuName;
}
//# sourceMappingURL=DocumentChangeMenuName.d.ts.map