import { ExtendedTranslationResultLine } from './ExtendedTranslationResultLine';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ExtendedTranslationItemLine
 */
export interface ExtendedTranslationItemLine {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Item Type.
     * @nullable
     */
    itemType?: string;
    /**
     * Slim Type.
     * @nullable
     */
    slimType?: string;
    /**
     * Max Length.
     * @nullable
     */
    maxLength?: number;
    /**
     * Source Text.
     * @nullable
     */
    sourceText?: string;
    /**
     * Memo.
     * @nullable
     */
    memo?: string;
    /**
     * Extended Translation Result Lines.
     * @nullable
     */
    extendedTranslationResultLines?: ExtendedTranslationResultLine[];
}
/**
 * @deprecated Since v1.6.0. Use [[ExtendedTranslationItemLine.build]] instead.
 */
export declare function createExtendedTranslationItemLine(json: any): ExtendedTranslationItemLine;
/**
 * ExtendedTranslationItemLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExtendedTranslationItemLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExtendedTranslationItemLine> {
    /**
     * Representation of the [[ExtendedTranslationItemLine.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedTranslationItemLine.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedTranslationItemLine.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedTranslationItemLine.itemType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedTranslationItemLine.slimType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    slimType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedTranslationItemLine.maxLength]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    maxLength: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedTranslationItemLine.sourceText]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceText: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedTranslationItemLine.memo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    memo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExtendedTranslationItemLine.extendedTranslationResultLines]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    extendedTranslationResultLines: CollectionField<EntityT, ExtendedTranslationResultLine>;
    /**
     * Creates an instance of ExtendedTranslationItemLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ExtendedTranslationItemLine {
    /**
     * Metadata information on all properties of the `ExtendedTranslationItemLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ExtendedTranslationItemLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | ExtendedTranslationResultLine;
    }): ExtendedTranslationItemLine;
}
//# sourceMappingURL=ExtendedTranslationItemLine.d.ts.map