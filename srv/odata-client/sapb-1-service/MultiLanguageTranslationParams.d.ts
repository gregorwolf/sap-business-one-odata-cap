import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * MultiLanguageTranslationParams
 */
export interface MultiLanguageTranslationParams {
    /**
     * Numerator.
     * @nullable
     */
    numerator?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[MultiLanguageTranslationParams.build]] instead.
 */
export declare function createMultiLanguageTranslationParams(json: any): MultiLanguageTranslationParams;
/**
 * MultiLanguageTranslationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MultiLanguageTranslationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MultiLanguageTranslationParams> {
    /**
     * Representation of the [[MultiLanguageTranslationParams.numerator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numerator: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of MultiLanguageTranslationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace MultiLanguageTranslationParams {
    /**
     * Metadata information on all properties of the `MultiLanguageTranslationParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<MultiLanguageTranslationParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): MultiLanguageTranslationParams;
}
//# sourceMappingURL=MultiLanguageTranslationParams.d.ts.map