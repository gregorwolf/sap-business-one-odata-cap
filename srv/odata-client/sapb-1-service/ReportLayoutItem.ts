/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoReportLayoutItemTypeEnum } from './BoReportLayoutItemTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoHorizontalAlignmentEnum } from './BoHorizontalAlignmentEnum';
import { BoLineBreakEnum } from './BoLineBreakEnum';
import { BoPictureSizeEnum } from './BoPictureSizeEnum';
import { BoDataSourceEnum } from './BoDataSourceEnum';
import { BoVerticalAlignmentEnum } from './BoVerticalAlignmentEnum';
import { BoSortTypeEnum } from './BoSortTypeEnum';
import { BoBarCodeStandardEnum } from './BoBarCodeStandardEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createReportLayoutItem(json: any): ReportLayoutItem {
  return ReportLayoutItem.build(json);
}

/**
 * ReportLayoutItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportLayoutItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReportLayoutItem> {
  /**
   * Representation of the [[ReportLayoutItem.fieldIdentifier]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldIdentifier: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FieldIdentifier', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutItem.parentType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  parentType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ParentType', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Type', this);
  /**
   * Representation of the [[ReportLayoutItem.visible]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visible: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Visible', this);
  /**
   * Representation of the [[ReportLayoutItem.suppressZeros]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  suppressZeros: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SuppressZeros', this);
  /**
   * Representation of the [[ReportLayoutItem.left]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  left: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Left', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.top]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  top: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Top', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.width]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Width', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.height]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Height', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.leftMargin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  leftMargin: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LeftMargin', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.rightMargin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rightMargin: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RightMargin', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.topMargin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  topMargin: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TopMargin', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.bottomMargin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bottomMargin: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BottomMargin', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.leftBorderLineThickness]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  leftBorderLineThickness: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LeftBorderLineThickness', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.rightBorderLineThickness]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rightBorderLineThickness: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RightBorderLineThickness', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.topBorderLineThickness]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  topBorderLineThickness: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TopBorderLineThickness', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.bottomBorderLineThickness]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bottomBorderLineThickness: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BottomBorderLineThickness', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.shadowThickness]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shadowThickness: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ShadowThickness', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.backgroundRed]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  backgroundRed: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BackgroundRed', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.backgroundGreen]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  backgroundGreen: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BackgroundGreen', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.backgroundBlue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  backgroundBlue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BackgroundBlue', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.textRed]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textRed: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TextRed', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.textGreen]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textGreen: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TextGreen', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.textBlue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textBlue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TextBlue', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.highlightRed]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  highlightRed: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('HighlightRed', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.highlightGreen]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  highlightGreen: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('HighlightGreen', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.highlightBlue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  highlightBlue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('HighlightBlue', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.borderRed]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  borderRed: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BorderRed', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.borderGreen]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  borderGreen: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BorderGreen', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.borderBlue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  borderBlue: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BorderBlue', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.groupNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GroupNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.fontName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fontName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FontName', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutItem.fontSize]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fontSize: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FontSize', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.textStyle]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textStyle: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TextStyle', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.horizontalAlignment]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  horizontalAlignment: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('HorizontalAlignment', this);
  /**
   * Representation of the [[ReportLayoutItem.lineBreak]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineBreak: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('LineBreak', this);
  /**
   * Representation of the [[ReportLayoutItem.pictureSize]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pictureSize: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PictureSize', this);
  /**
   * Representation of the [[ReportLayoutItem.dataSource]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dataSource: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DataSource', this);
  /**
   * Representation of the [[ReportLayoutItem.string]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  string: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('String', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutItem.variableNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variableNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VariableNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.tableName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tableName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TableName', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutItem.fieldName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FieldName', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutItem.displayDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayDescription: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DisplayDescription', this);
  /**
   * Representation of the [[ReportLayoutItem.editable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  editable: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Editable', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.itemNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ItemNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.verticalAlignment]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  verticalAlignment: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('VerticalAlignment', this);
  /**
   * Representation of the [[ReportLayoutItem.sortLevel]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortLevel: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SortLevel', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.reverseSort]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reverseSort: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ReverseSort', this);
  /**
   * Representation of the [[ReportLayoutItem.sortType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SortType', this);
  /**
   * Representation of the [[ReportLayoutItem.unique]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unique: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Unique', this);
  /**
   * Representation of the [[ReportLayoutItem.setAsGroup]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  setAsGroup: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SetAsGroup', this);
  /**
   * Representation of the [[ReportLayoutItem.newPage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  newPage: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('NewPage', this);
  /**
   * Representation of the [[ReportLayoutItem.printAsBarCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  printAsBarCode: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PrintAsBarCode', this);
  /**
   * Representation of the [[ReportLayoutItem.linkToField]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkToField: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LinkToField', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutItem.barCodeStandard]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  barCodeStandard: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('BarCodeStandard', this);
  /**
   * Representation of the [[ReportLayoutItem.displayTotalAsAWord]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayTotalAsAWord: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DisplayTotalAsAWord', this);
  /**
   * Representation of the [[ReportLayoutItem.blockFontChange]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockFontChange: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('BlockFontChange', this);
  /**
   * Representation of the [[ReportLayoutItem.parentIndex]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  parentIndex: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ParentIndex', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.itemIndex]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemIndex: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ItemIndex', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.stringLength]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stringLength: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StringLength', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.stringFiller]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stringFiller: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StringFiller', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutItem.relateToField]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relateToField: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('RelateToField', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutItem.nextSegmentItemNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nextSegmentItemNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NextSegmentItemNumber', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutItem.heightAdjustments]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  heightAdjustments: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('HeightAdjustments', this);
  /**
   * Representation of the [[ReportLayoutItem.duplicateRepetitiveArea]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  duplicateRepetitiveArea: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DuplicateRepetitiveArea', this);
  /**
   * Representation of the [[ReportLayoutItem.numberOfLinesInRepetitiveArea]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numberOfLinesInRepetitiveArea: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NumberOfLinesInRepetitiveArea', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.distanceToRepetitiveDuplicate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distanceToRepetitiveDuplicate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DistanceToRepetitiveDuplicate', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.hideRepetitiveAreaIfEmpty]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hideRepetitiveAreaIfEmpty: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('HideRepetitiveAreaIfEmpty', this);
  /**
   * Representation of the [[ReportLayoutItem.displayRepetitiveAreaFooterOnAllPages]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayRepetitiveAreaFooterOnAllPages: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DisplayRepetitiveAreaFooterOnAllPages', this);

  /**
   * Creates an instance of ReportLayoutItemField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ReportLayoutItem);
  }
}

export namespace ReportLayoutItem {
  /**
   * Metadata information on all properties of the `ReportLayoutItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReportLayoutItem>[] = [{
    originalName: 'FieldIdentifier',
    name: 'fieldIdentifier',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ParentType',
    name: 'parentType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Type',
    name: 'type',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Visible',
    name: 'visible',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SuppressZeros',
    name: 'suppressZeros',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Left',
    name: 'left',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Top',
    name: 'top',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Width',
    name: 'width',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Height',
    name: 'height',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LeftMargin',
    name: 'leftMargin',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RightMargin',
    name: 'rightMargin',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TopMargin',
    name: 'topMargin',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BottomMargin',
    name: 'bottomMargin',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LeftBorderLineThickness',
    name: 'leftBorderLineThickness',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'RightBorderLineThickness',
    name: 'rightBorderLineThickness',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TopBorderLineThickness',
    name: 'topBorderLineThickness',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BottomBorderLineThickness',
    name: 'bottomBorderLineThickness',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ShadowThickness',
    name: 'shadowThickness',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BackgroundRed',
    name: 'backgroundRed',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BackgroundGreen',
    name: 'backgroundGreen',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BackgroundBlue',
    name: 'backgroundBlue',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TextRed',
    name: 'textRed',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TextGreen',
    name: 'textGreen',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TextBlue',
    name: 'textBlue',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'HighlightRed',
    name: 'highlightRed',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'HighlightGreen',
    name: 'highlightGreen',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'HighlightBlue',
    name: 'highlightBlue',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BorderRed',
    name: 'borderRed',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BorderGreen',
    name: 'borderGreen',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BorderBlue',
    name: 'borderBlue',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'GroupNumber',
    name: 'groupNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FontName',
    name: 'fontName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FontSize',
    name: 'fontSize',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TextStyle',
    name: 'textStyle',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'HorizontalAlignment',
    name: 'horizontalAlignment',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'LineBreak',
    name: 'lineBreak',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'PictureSize',
    name: 'pictureSize',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DataSource',
    name: 'dataSource',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'String',
    name: 'string',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'VariableNumber',
    name: 'variableNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TableName',
    name: 'tableName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FieldName',
    name: 'fieldName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DisplayDescription',
    name: 'displayDescription',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Editable',
    name: 'editable',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ItemNumber',
    name: 'itemNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'VerticalAlignment',
    name: 'verticalAlignment',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SortLevel',
    name: 'sortLevel',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ReverseSort',
    name: 'reverseSort',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SortType',
    name: 'sortType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Unique',
    name: 'unique',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SetAsGroup',
    name: 'setAsGroup',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'NewPage',
    name: 'newPage',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'PrintAsBarCode',
    name: 'printAsBarCode',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'LinkToField',
    name: 'linkToField',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BarCodeStandard',
    name: 'barCodeStandard',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DisplayTotalAsAWord',
    name: 'displayTotalAsAWord',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'BlockFontChange',
    name: 'blockFontChange',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ParentIndex',
    name: 'parentIndex',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ItemIndex',
    name: 'itemIndex',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StringLength',
    name: 'stringLength',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StringFiller',
    name: 'stringFiller',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RelateToField',
    name: 'relateToField',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'NextSegmentItemNumber',
    name: 'nextSegmentItemNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'HeightAdjustments',
    name: 'heightAdjustments',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DuplicateRepetitiveArea',
    name: 'duplicateRepetitiveArea',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'NumberOfLinesInRepetitiveArea',
    name: 'numberOfLinesInRepetitiveArea',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DistanceToRepetitiveDuplicate',
    name: 'distanceToRepetitiveDuplicate',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'HideRepetitiveAreaIfEmpty',
    name: 'hideRepetitiveAreaIfEmpty',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DisplayRepetitiveAreaFooterOnAllPages',
    name: 'displayRepetitiveAreaFooterOnAllPages',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ReportLayoutItem {
    return deserializeComplexTypeV4(json, ReportLayoutItem);
  }
}
