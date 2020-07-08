import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AccountSegmentationsCategory
 */
export interface AccountSegmentationsCategory {
    /**
     * Segment Id.
     * @nullable
     */
    segmentId?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Short Name.
     * @nullable
     */
    shortName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AccountSegmentationsCategory.build]] instead.
 */
export declare function createAccountSegmentationsCategory(json: any): AccountSegmentationsCategory;
/**
 * AccountSegmentationsCategoryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AccountSegmentationsCategoryField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AccountSegmentationsCategory.segmentId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    segmentId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AccountSegmentationsCategory.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AccountSegmentationsCategory.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AccountSegmentationsCategory.shortName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shortName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AccountSegmentationsCategory {
    function build(json: {
        [keys: string]: FieldType;
    }): AccountSegmentationsCategory;
}
//# sourceMappingURL=AccountSegmentationsCategory.d.ts.map