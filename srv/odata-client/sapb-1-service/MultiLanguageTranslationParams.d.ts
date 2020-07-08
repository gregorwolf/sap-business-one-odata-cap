import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class MultiLanguageTranslationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[MultiLanguageTranslationParams.numerator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numerator: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace MultiLanguageTranslationParams {
    function build(json: {
        [keys: string]: FieldType;
    }): MultiLanguageTranslationParams;
}
//# sourceMappingURL=MultiLanguageTranslationParams.d.ts.map