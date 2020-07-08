import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BlobTableKeySegment
 */
export interface BlobTableKeySegment {
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Value.
     * @nullable
     */
    value?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BlobTableKeySegment.build]] instead.
 */
export declare function createBlobTableKeySegment(json: any): BlobTableKeySegment;
/**
 * BlobTableKeySegmentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BlobTableKeySegmentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BlobTableKeySegment.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlobTableKeySegment.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BlobTableKeySegment {
    function build(json: {
        [keys: string]: FieldType;
    }): BlobTableKeySegment;
}
//# sourceMappingURL=BlobTableKeySegment.d.ts.map