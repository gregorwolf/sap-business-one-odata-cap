import { BoReportLayoutItemTypeEnum } from './BoReportLayoutItemTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoHorizontalAlignmentEnum } from './BoHorizontalAlignmentEnum';
import { BoLineBreakEnum } from './BoLineBreakEnum';
import { BoPictureSizeEnum } from './BoPictureSizeEnum';
import { BoDataSourceEnum } from './BoDataSourceEnum';
import { BoVerticalAlignmentEnum } from './BoVerticalAlignmentEnum';
import { BoSortTypeEnum } from './BoSortTypeEnum';
import { BoBarCodeStandardEnum } from './BoBarCodeStandardEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Type.
     * @nullable
     */
    type?: BoReportLayoutItemTypeEnum;
    /**
     * Visible.
     * @nullable
     */
    visible?: BoYesNoEnum;
    /**
     * Suppress Zeros.
     * @nullable
     */
    suppressZeros?: BoYesNoEnum;
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
     * Horizontal Alignment.
     * @nullable
     */
    horizontalAlignment?: BoHorizontalAlignmentEnum;
    /**
     * Line Break.
     * @nullable
     */
    lineBreak?: BoLineBreakEnum;
    /**
     * Picture Size.
     * @nullable
     */
    pictureSize?: BoPictureSizeEnum;
    /**
     * Data Source.
     * @nullable
     */
    dataSource?: BoDataSourceEnum;
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
     * Display Description.
     * @nullable
     */
    displayDescription?: BoYesNoEnum;
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
     * Vertical Alignment.
     * @nullable
     */
    verticalAlignment?: BoVerticalAlignmentEnum;
    /**
     * Sort Level.
     * @nullable
     */
    sortLevel?: number;
    /**
     * Reverse Sort.
     * @nullable
     */
    reverseSort?: BoYesNoEnum;
    /**
     * Sort Type.
     * @nullable
     */
    sortType?: BoSortTypeEnum;
    /**
     * Unique.
     * @nullable
     */
    unique?: BoYesNoEnum;
    /**
     * Set As Group.
     * @nullable
     */
    setAsGroup?: BoYesNoEnum;
    /**
     * New Page.
     * @nullable
     */
    newPage?: BoYesNoEnum;
    /**
     * Print As Bar Code.
     * @nullable
     */
    printAsBarCode?: BoYesNoEnum;
    /**
     * Link To Field.
     * @nullable
     */
    linkToField?: string;
    /**
     * Bar Code Standard.
     * @nullable
     */
    barCodeStandard?: BoBarCodeStandardEnum;
    /**
     * Display Total As A Word.
     * @nullable
     */
    displayTotalAsAWord?: BoYesNoEnum;
    /**
     * Block Font Change.
     * @nullable
     */
    blockFontChange?: BoYesNoEnum;
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
     * Height Adjustments.
     * @nullable
     */
    heightAdjustments?: BoYesNoEnum;
    /**
     * Duplicate Repetitive Area.
     * @nullable
     */
    duplicateRepetitiveArea?: BoYesNoEnum;
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
    /**
     * Hide Repetitive Area If Empty.
     * @nullable
     */
    hideRepetitiveAreaIfEmpty?: BoYesNoEnum;
    /**
     * Display Repetitive Area Footer On All Pages.
     * @nullable
     */
    displayRepetitiveAreaFooterOnAllPages?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[ReportLayoutItem.build]] instead.
 */
export declare function createReportLayoutItem(json: any): ReportLayoutItem;
/**
 * ReportLayoutItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ReportLayoutItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReportLayoutItem> {
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
     * Representation of the [[ReportLayoutItem.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.visible]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    visible: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.suppressZeros]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    suppressZeros: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[ReportLayoutItem.horizontalAlignment]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    horizontalAlignment: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.lineBreak]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineBreak: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.pictureSize]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pictureSize: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.dataSource]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dataSource: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[ReportLayoutItem.displayDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayDescription: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[ReportLayoutItem.verticalAlignment]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    verticalAlignment: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.sortLevel]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sortLevel: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.reverseSort]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reverseSort: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.sortType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sortType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.unique]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    unique: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.setAsGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    setAsGroup: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.newPage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    newPage: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.printAsBarCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    printAsBarCode: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.linkToField]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    linkToField: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.barCodeStandard]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    barCodeStandard: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.displayTotalAsAWord]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayTotalAsAWord: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.blockFontChange]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockFontChange: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[ReportLayoutItem.heightAdjustments]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    heightAdjustments: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.duplicateRepetitiveArea]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    duplicateRepetitiveArea: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Representation of the [[ReportLayoutItem.hideRepetitiveAreaIfEmpty]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    hideRepetitiveAreaIfEmpty: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ReportLayoutItem.displayRepetitiveAreaFooterOnAllPages]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    displayRepetitiveAreaFooterOnAllPages: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of ReportLayoutItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ReportLayoutItem {
    /**
     * Metadata information on all properties of the `ReportLayoutItem` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ReportLayoutItem>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ReportLayoutItem;
}
//# sourceMappingURL=ReportLayoutItem.d.ts.map