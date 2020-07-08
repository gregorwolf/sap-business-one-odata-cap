import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AccountSegmentationCategoryParams
 */
export interface AccountSegmentationCategoryParams {
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
}
/**
 * @deprecated Since v1.6.0. Use [[AccountSegmentationCategoryParams.build]] instead.
 */
export declare function createAccountSegmentationCategoryParams(json: any): AccountSegmentationCategoryParams;
/**
 * AccountSegmentationCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AccountSegmentationCategoryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AccountSegmentationCategoryParams.segmentId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    segmentId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AccountSegmentationCategoryParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AccountSegmentationCategoryParams {
    function build(json: {
        [keys: string]: FieldType;
    }): AccountSegmentationCategoryParams;
}
//# sourceMappingURL=AccountSegmentationCategoryParams.d.ts.map