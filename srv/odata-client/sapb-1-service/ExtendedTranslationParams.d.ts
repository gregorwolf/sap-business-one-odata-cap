import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ExtendedTranslationParams
 */
export interface ExtendedTranslationParams {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Id.
     * @nullable
     */
    id?: string;
    /**
     * Secondary Id.
     * @nullable
     */
    secondaryId?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ExtendedTranslationParams.build]] instead.
 */
export declare function createExtendedTranslationParams(json: any): ExtendedTranslationParams;
/**
 * ExtendedTranslationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExtendedTranslationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ExtendedTranslationParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedTranslationParams.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedTranslationParams.secondaryId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    secondaryId: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ExtendedTranslationParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ExtendedTranslationParams;
}
//# sourceMappingURL=ExtendedTranslationParams.d.ts.map