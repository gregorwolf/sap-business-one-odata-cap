import { TranslationCategoryEnum } from './TranslationCategoryEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Category.
     * @nullable
     */
    category?: TranslationCategoryEnum;
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
export declare class ExtendedTranslationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExtendedTranslationParams> {
    /**
     * Representation of the [[ExtendedTranslationParams.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedTranslationParams.category]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    category: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Creates an instance of ExtendedTranslationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ExtendedTranslationParams {
    /**
     * Metadata information on all properties of the `ExtendedTranslationParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ExtendedTranslationParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ExtendedTranslationParams;
}
//# sourceMappingURL=ExtendedTranslationParams.d.ts.map