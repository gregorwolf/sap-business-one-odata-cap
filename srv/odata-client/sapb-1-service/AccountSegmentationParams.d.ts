import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * AccountSegmentationParams
 */
export interface AccountSegmentationParams {
    /**
     * Numerator.
     * @nullable
     */
    numerator?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[AccountSegmentationParams.build]] instead.
 */
export declare function createAccountSegmentationParams(json: any): AccountSegmentationParams;
/**
 * AccountSegmentationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AccountSegmentationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AccountSegmentationParams> {
    /**
     * Representation of the [[AccountSegmentationParams.numerator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numerator: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of AccountSegmentationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AccountSegmentationParams {
    /**
     * Metadata information on all properties of the `AccountSegmentationParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AccountSegmentationParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AccountSegmentationParams;
}
//# sourceMappingURL=AccountSegmentationParams.d.ts.map