import { DocumentPackageItem } from './DocumentPackageItem';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
    documentPackageItems?: DocumentPackageItem[];
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentPackage.build]] instead.
 */
export declare function createDocumentPackage(json: any): DocumentPackage;
/**
 * DocumentPackageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentPackageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentPackage> {
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
    documentPackageItems: CollectionField<EntityT, DocumentPackageItem>;
    /**
     * Creates an instance of DocumentPackageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DocumentPackage {
    /**
     * Metadata information on all properties of the `DocumentPackage` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DocumentPackage>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | DocumentPackageItem;
    }): DocumentPackage;
}
//# sourceMappingURL=DocumentPackage.d.ts.map