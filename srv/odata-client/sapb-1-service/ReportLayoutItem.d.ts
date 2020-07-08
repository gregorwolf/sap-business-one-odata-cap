import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ReportLayoutItem
 */
export interface ReportLayoutItem {
    /**
     * Field Identifier.
     * @nullable
     */
    fieldIdentifier?: string;
    /**
     * Parent Type.
     * @nullable
     */
    parentType?: number;
    /**
     * Left.
     * @nullable
     */
    left?: number;
    /**
     * Top.
     * @nullable
     */
    top?: number;
    /**
     * Width.
     * @nullable
     */
    width?: number;
    /**
     * Height.
     * @nullable
     */
    height?: number;
    /**
     * Left Margin.
     * @nullable
     */
    leftMargin?: number;
    /**
     * Right Margin.
     * @nullable
     */
    rightMargin?: number;
    /**
     * Top Margin.
     * @nullable
     */
    topMargin?: number;
    /**
     * Bottom Margin.
     * @nullable
     */
    bottomMargin?: number;
    /**
     * Left Border Line Thickness.
     * @nullable
     */
    leftBorderLineThickness?: number;
    /**
     * Right Border Line Thickness.
     * @nullable
     */
    rightBorderLineThickness?: number;
    /**
     * Top Border Line Thickness.
     * @nullable
     */
    topBorderLineThickness?: number;
    /**
     * Bottom Border Line Thickness.
     * @nullable
     */
    bottomBorderLineThickness?: number;
    /**
     * Shadow Thickness.
     * @nullable
     */
    shadowThickness?: number;
    /**
     * Background Red.
     * @nullable
     */
    backgroundRed?: number;
    /**
     * Background Green.
     * @nullable
     */
    backgroundGreen?: number;
    /**
     * Background Blue.
     * @nullable
     */
    backgroundBlue?: number;
    /**
     * Text Red.
     * @nullable
     */
    textRed?: number;
    /**
     * Text Green.
     * @nullable
     */
    textGreen?: number;
    /**
     * Text Blue.
     * @nullable
     */
    textBlue?: number;
    /**
     * Highlight Red.
     * @nullable
     */
    highlightRed?: number;
    /**
     * Highlight Green.
     * @nullable
     */
    highlightGreen?: number;
    /**
     * Highlight Blue.
     * @nullable
     */
    highlightBlue?: number;
    /**
     * Border Red.
     * @nullable
     */
    borderRed?: number;
    /**
     * Border Green.
     * @nullable
     */
    borderGreen?: number;
    /**
     * Border Blue.
     * @nullable
     */
    borderBlue?: number;
    /**
     * Group Number.
     * @nullable
     */
    groupNumber?: number;
    /**
     * Font Name.
     * @nullable
     */
    fontName?: string;
    /**
     * Font Size.
     * @nullable
     */
    fontSize?: number;
    /**
     * Text Style.
     * @nullable
     */
    textStyle?: number;
    /**
     * String.
     * @nullable
     */
    string?: string;
    /**
     * Variable Number.
     * @nullable
     */
    variableNumber?: number;
    /**
     * Table Name.
     * @nullable
     */
    tableName?: string;
    /**
     * Field Name.
     * @nullable
     */
    fieldName?: string;
    /**
     * Editable.
     * @nullable
     */
    editable?: number;
    /**
     * Item Number.
     * @nullable
     */
    itemNumber?: number;
    /**
     * Sort Level.
     * @nullable
     */
    sortLevel?: number;
    /**
     * Link To Field.
     * @nullable
     */
    linkToField?: string;
    /**
     * Parent Index.
     * @nullable
     */
    parentIndex?: number;
    /**
     * Item Index.
     * @nullable
     */
    itemIndex?: number;
    /**
     * String Length.
     * @nullable
     */
    stringLength?: number;
    /**
     * String Filler.
     * @nullable
     */
    stringFiller?: string;
    /**
     * Relate To Field.
     * @nullable
     */
    relateToField?: string;
    /**
     * Next Segment Item Number.
     * @nullable
     */
    nextSegmentItemNumber?: string;
    /**
     * Number Of Lines In Repetitive Area.
     * @nullable
     */
    numberOfLinesInRepetitiveArea?: number;
    /**
     * Distance To Repetitive Duplicate.
     * @nullable
     */
    distanceToRepetitiveDuplicate?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ReportLayoutItem.build]] instead.
 */
export declare function createReportLayoutItem(json: any): ReportLayoutItem;
/**
 * ReportLayoutItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ReportLayoutItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ReportLayoutItem.fieldIdentifier]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldIdentifier: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.parentType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    parentType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.left]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    left: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.top]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    top: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.width]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    width: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.height]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    height: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.leftMargin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    leftMargin: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.rightMargin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rightMargin: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.topMargin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    topMargin: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.bottomMargin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bottomMargin: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.leftBorderLineThickness]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    leftBorderLineThickness: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.rightBorderLineThickness]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rightBorderLineThickness: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.topBorderLineThickness]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    topBorderLineThickness: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.bottomBorderLineThickness]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bottomBorderLineThickness: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.shadowThickness]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shadowThickness: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.backgroundRed]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    backgroundRed: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.backgroundGreen]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    backgroundGreen: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.backgroundBlue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    backgroundBlue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.textRed]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    textRed: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.textGreen]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    textGreen: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.textBlue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    textBlue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.highlightRed]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    highlightRed: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.highlightGreen]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    highlightGreen: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.highlightBlue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    highlightBlue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.borderRed]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    borderRed: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.borderGreen]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    borderGreen: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.borderBlue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    borderBlue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.groupNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    groupNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.fontName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fontName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.fontSize]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fontSize: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.textStyle]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    textStyle: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.string]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    string: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.variableNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    variableNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.tableName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tableName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.fieldName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fieldName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.editable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    editable: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.itemNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.sortLevel]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sortLevel: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.linkToField]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    linkToField: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.parentIndex]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    parentIndex: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.itemIndex]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemIndex: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.stringLength]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stringLength: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.stringFiller]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stringFiller: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.relateToField]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    relateToField: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.nextSegmentItemNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nextSegmentItemNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.numberOfLinesInRepetitiveArea]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numberOfLinesInRepetitiveArea: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.distanceToRepetitiveDuplicate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distanceToRepetitiveDuplicate: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ReportLayoutItem {
    function build(json: {
        [keys: string]: FieldType;
    }): ReportLayoutItem;
}
//# sourceMappingURL=ReportLayoutItem.d.ts.map