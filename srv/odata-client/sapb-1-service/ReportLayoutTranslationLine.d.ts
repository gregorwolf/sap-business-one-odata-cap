import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ReportLayoutTranslationLine
 */
export interface ReportLayoutTranslationLine {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: string;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Doc Name.
     * @nullable
     */
    docName?: string;
    /**
     * Language Code.
     * @nullable
     */
    languageCode?: number;
    /**
     * Create Date.
     * @nullable
     */
    createDate?: Moment;
    /**
     * Update Date.
     * @nullable
     */
    updateDate?: Moment;
    /**
     * Create Time.
     * @nullable
     */
    createTime?: number;
    /**
     * Update Time.
     * @nullable
     */
    updateTime?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ReportLayoutTranslationLine.build]] instead.
 */
export declare function createReportLayoutTranslationLine(json: any): ReportLayoutTranslationLine;
/**
 * ReportLayoutTranslationLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ReportLayoutTranslationLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReportLayoutTranslationLine> {
    /**
     * Representation of the [[ReportLayoutTranslationLine.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutTranslationLine.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutTranslationLine.docName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutTranslationLine.languageCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    languageCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutTranslationLine.createDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    createDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutTranslationLine.updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    updateDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutTranslationLine.createTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    createTime: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutTranslationLine.updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    updateTime: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ReportLayoutTranslationLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ReportLayoutTranslationLine {
    /**
     * Metadata information on all properties of the `ReportLayoutTranslationLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ReportLayoutTranslationLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ReportLayoutTranslationLine;
}
//# sourceMappingURL=ReportLayoutTranslationLine.d.ts.map