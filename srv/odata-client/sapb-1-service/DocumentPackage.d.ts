import { DocumentPackageItem, DocumentPackageItemField } from './DocumentPackageItem';
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DocumentPackage
 */
export interface DocumentPackage {
    /**
     * Number.
     * @nullable
     */
    number?: number;
    /**
     * Type.
     * @nullable
     */
    type?: string;
    /**
     * Total Weight.
     * @nullable
     */
    totalWeight?: number;
    /**
     * Units.
     * @nullable
     */
    units?: number;
    /**
     * Document Package Items.
     * @nullable
     */
    documentPackageItems?: DocumentPackageItem;
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentPackage.build]] instead.
 */
export declare function createDocumentPackage(json: any): DocumentPackage;
/**
 * DocumentPackageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentPackageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DocumentPackage.number]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    number: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentPackage.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentPackage.totalWeight]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalWeight: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentPackage.units]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    units: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentPackage.documentPackageItems]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentPackageItems: DocumentPackageItemField<EntityT>;
}
export declare namespace DocumentPackage {
    function build(json: {
        [keys: string]: FieldType | DocumentPackageItem;
    }): DocumentPackage;
}
//# sourceMappingURL=DocumentPackage.d.ts.map