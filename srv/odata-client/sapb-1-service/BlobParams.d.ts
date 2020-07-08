import { BlobTableKeySegment, BlobTableKeySegmentField } from './BlobTableKeySegment';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
    blobTableKeySegments?: BlobTableKeySegment;
}
/**
 * @deprecated Since v1.6.0. Use [[BlobParams.build]] instead.
 */
export declare function createBlobParams(json: any): BlobParams;
/**
 * BlobParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BlobParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
    blobTableKeySegments: BlobTableKeySegmentField<EntityT>;
}
export declare namespace BlobParams {
    function build(json: {
        [keys: string]: FieldType | BlobTableKeySegment;
    }): BlobParams;
}
//# sourceMappingURL=BlobParams.d.ts.map