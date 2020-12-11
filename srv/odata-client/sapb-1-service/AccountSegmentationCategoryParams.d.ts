import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class AccountSegmentationCategoryParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AccountSegmentationCategoryParams> {
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
    /**
     * Creates an instance of AccountSegmentationCategoryParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AccountSegmentationCategoryParams {
    /**
     * Metadata information on all properties of the `AccountSegmentationCategoryParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AccountSegmentationCategoryParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AccountSegmentationCategoryParams;
}
//# sourceMappingURL=AccountSegmentationCategoryParams.d.ts.map