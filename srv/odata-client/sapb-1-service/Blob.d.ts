import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class BlobField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Blob.content]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    content: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace Blob {
    function build(json: {
        [keys: string]: FieldType;
    }): Blob;
}
//# sourceMappingURL=Blob.d.ts.map