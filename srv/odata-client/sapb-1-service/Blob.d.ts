import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * Blob
 */
export interface Blob {
    /**
     * Content.
     * @nullable
     */
    content?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[Blob.build]] instead.
 */
export declare function createBlob(json: any): Blob;
/**
 * BlobField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BlobField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Blob> {
    /**
     * Representation of the [[Blob.content]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    content: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of BlobField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace Blob {
    /**
     * Metadata information on all properties of the `Blob` complex type.
     */
    const _propertyMetadata: PropertyMetadata<Blob>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): Blob;
}
//# sourceMappingURL=Blob.d.ts.map