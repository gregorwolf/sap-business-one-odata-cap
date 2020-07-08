import { ExtendedTranslationResultLine, ExtendedTranslationResultLineField } from './ExtendedTranslationResultLine';
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
    extendedTranslationResultLines?: ExtendedTranslationResultLine;
}
/**
 * @deprecated Since v1.6.0. Use [[ExtendedTranslationItemLine.build]] instead.
 */
export declare function createExtendedTranslationItemLine(json: any): ExtendedTranslationItemLine;
/**
 * ExtendedTranslationItemLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExtendedTranslationItemLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
    extendedTranslationResultLines: ExtendedTranslationResultLineField<EntityT>;
}
export declare namespace ExtendedTranslationItemLine {
    function build(json: {
        [keys: string]: FieldType | ExtendedTranslationResultLine;
    }): ExtendedTranslationItemLine;
}
//# sourceMappingURL=ExtendedTranslationItemLine.d.ts.map