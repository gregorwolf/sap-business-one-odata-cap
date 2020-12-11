import { BlobTableKeySegment } from './BlobTableKeySegment';
import { CollectionField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BlobParams
 */
export interface BlobParams {
    /**
     * Table.
     * @nullable
     */
    table?: string;
    /**
     * Field.
     * @nullable
     */
    field?: string;
    /**
     * File Name.
     * @nullable
     */
    fileName?: string;
    /**
     * Blob Table Key Segments.
     * @nullable
     */
    blobTableKeySegments?: BlobTableKeySegment[];
}
/**
 * @deprecated Since v1.6.0. Use [[BlobParams.build]] instead.
 */
export declare function createBlobParams(json: any): BlobParams;
/**
 * BlobParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BlobParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BlobParams> {
    /**
     * Representation of the [[BlobParams.table]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    table: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlobParams.field]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    field: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlobParams.fileName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fileName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlobParams.blobTableKeySegments]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blobTableKeySegments: CollectionField<EntityT, BlobTableKeySegment>;
    /**
     * Creates an instance of BlobParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BlobParams {
    /**
     * Metadata information on all properties of the `BlobParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BlobParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | BlobTableKeySegment;
    }): BlobParams;
}
//# sourceMappingURL=BlobParams.d.ts.map