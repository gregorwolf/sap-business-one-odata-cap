/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
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
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * ReportLayoutItem
 */
export interface ReportLayoutItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Field Identifier.
   * @nullable
   */
  fieldIdentifier?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Parent Type.
   * @nullable
   */
  parentType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Visible.
   * @nullable
   */
  visible?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Suppress Zeros.
   * @nullable
   */
  suppressZeros?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Left.
   * @nullable
   */
  left?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Top.
   * @nullable
   */
  top?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Width.
   * @nullable
   */
  width?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Height.
   * @nullable
   */
  height?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Left Margin.
   * @nullable
   */
  leftMargin?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Right Margin.
   * @nullable
   */
  rightMargin?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Top Margin.
   * @nullable
   */
  topMargin?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bottom Margin.
   * @nullable
   */
  bottomMargin?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Left Border Line Thickness.
   * @nullable
   */
  leftBorderLineThickness?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Right Border Line Thickness.
   * @nullable
   */
  rightBorderLineThickness?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Top Border Line Thickness.
   * @nullable
   */
  topBorderLineThickness?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bottom Border Line Thickness.
   * @nullable
   */
  bottomBorderLineThickness?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Shadow Thickness.
   * @nullable
   */
  shadowThickness?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Background Red.
   * @nullable
   */
  backgroundRed?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Background Green.
   * @nullable
   */
  backgroundGreen?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Background Blue.
   * @nullable
   */
  backgroundBlue?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Text Red.
   * @nullable
   */
  textRed?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Text Green.
   * @nullable
   */
  textGreen?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Text Blue.
   * @nullable
   */
  textBlue?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Highlight Red.
   * @nullable
   */
  highlightRed?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Highlight Green.
   * @nullable
   */
  highlightGreen?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Highlight Blue.
   * @nullable
   */
  highlightBlue?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Border Red.
   * @nullable
   */
  borderRed?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Border Green.
   * @nullable
   */
  borderGreen?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Border Blue.
   * @nullable
   */
  borderBlue?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Group Number.
   * @nullable
   */
  groupNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Font Name.
   * @nullable
   */
  fontName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Font Size.
   * @nullable
   */
  fontSize?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Text Style.
   * @nullable
   */
  textStyle?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Horizontal Alignment.
   * @nullable
   */
  horizontalAlignment?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Line Break.
   * @nullable
   */
  lineBreak?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Picture Size.
   * @nullable
   */
  pictureSize?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Data Source.
   * @nullable
   */
  dataSource?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * String.
   * @nullable
   */
  string?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Variable Number.
   * @nullable
   */
  variableNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Table Name.
   * @nullable
   */
  tableName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Field Name.
   * @nullable
   */
  fieldName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Display Description.
   * @nullable
   */
  displayDescription?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Editable.
   * @nullable
   */
  editable?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item Number.
   * @nullable
   */
  itemNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Vertical Alignment.
   * @nullable
   */
  verticalAlignment?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Sort Level.
   * @nullable
   */
  sortLevel?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Reverse Sort.
   * @nullable
   */
  reverseSort?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Sort Type.
   * @nullable
   */
  sortType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Unique.
   * @nullable
   */
  unique?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Set As Group.
   * @nullable
   */
  setAsGroup?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * New Page.
   * @nullable
   */
  newPage?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Print As Bar Code.
   * @nullable
   */
  printAsBarCode?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Link To Field.
   * @nullable
   */
  linkToField?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bar Code Standard.
   * @nullable
   */
  barCodeStandard?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Display Total As A Word.
   * @nullable
   */
  displayTotalAsAWord?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Block Font Change.
   * @nullable
   */
  blockFontChange?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Parent Index.
   * @nullable
   */
  parentIndex?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item Index.
   * @nullable
   */
  itemIndex?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * String Length.
   * @nullable
   */
  stringLength?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * String Filler.
   * @nullable
   */
  stringFiller?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Relate To Field.
   * @nullable
   */
  relateToField?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Next Segment Item Number.
   * @nullable
   */
  nextSegmentItemNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Height Adjustments.
   * @nullable
   */
  heightAdjustments?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Duplicate Repetitive Area.
   * @nullable
   */
  duplicateRepetitiveArea?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Number Of Lines In Repetitive Area.
   * @nullable
   */
  numberOfLinesInRepetitiveArea?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Distance To Repetitive Duplicate.
   * @nullable
   */
  distanceToRepetitiveDuplicate?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Hide Repetitive Area If Empty.
   * @nullable
   */
  hideRepetitiveAreaIfEmpty?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Display Repetitive Area Footer On All Pages.
   * @nullable
   */
  displayRepetitiveAreaFooterOnAllPages?: DeserializedType<
    DeSerializersT,
    'Edm.Enum'
  >;
}

/**
 * ReportLayoutItemField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportLayoutItemField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ReportLayoutItem,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ReportLayoutItem.fieldIdentifier} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldIdentifier: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FieldIdentifier',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.parentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  parentType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ParentType', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: EnumField<
    EntityT,
    DeSerializersT,
    BoReportLayoutItemTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Type',
    BoReportLayoutItemTypeEnum,
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.visible} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visible: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Visible', BoYesNoEnum, true);
  /**
   * Representation of the {@link ReportLayoutItem.suppressZeros} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  suppressZeros: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SuppressZeros', BoYesNoEnum, true);
  /**
   * Representation of the {@link ReportLayoutItem.left} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  left: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Left', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.top} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  top: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Top', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.width} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Width', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.height} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Height', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.leftMargin} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  leftMargin: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LeftMargin', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.rightMargin} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rightMargin: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RightMargin', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.topMargin} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  topMargin: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TopMargin', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.bottomMargin} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bottomMargin: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BottomMargin', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.leftBorderLineThickness} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  leftBorderLineThickness: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LeftBorderLineThickness',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.rightBorderLineThickness} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rightBorderLineThickness: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RightBorderLineThickness',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.topBorderLineThickness} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  topBorderLineThickness: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TopBorderLineThickness',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.bottomBorderLineThickness} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bottomBorderLineThickness: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BottomBorderLineThickness',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.shadowThickness} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shadowThickness: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShadowThickness',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.backgroundRed} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  backgroundRed: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BackgroundRed', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.backgroundGreen} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  backgroundGreen: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BackgroundGreen',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.backgroundBlue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  backgroundBlue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BackgroundBlue', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.textRed} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textRed: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TextRed', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.textGreen} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textGreen: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TextGreen', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.textBlue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textBlue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TextBlue', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.highlightRed} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  highlightRed: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('HighlightRed', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.highlightGreen} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  highlightGreen: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('HighlightGreen', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.highlightBlue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  highlightBlue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('HighlightBlue', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.borderRed} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  borderRed: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BorderRed', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.borderGreen} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  borderGreen: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BorderGreen', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.borderBlue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  borderBlue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BorderBlue', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.groupNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GroupNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.fontName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fontName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FontName', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayoutItem.fontSize} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fontSize: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FontSize', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.textStyle} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textStyle: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TextStyle', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.horizontalAlignment} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  horizontalAlignment: EnumField<
    EntityT,
    DeSerializersT,
    BoHorizontalAlignmentEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'HorizontalAlignment',
    BoHorizontalAlignmentEnum,
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.lineBreak} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineBreak: EnumField<EntityT, DeSerializersT, BoLineBreakEnum, true, false> =
    this._fieldBuilder.buildEnumField('LineBreak', BoLineBreakEnum, true);
  /**
   * Representation of the {@link ReportLayoutItem.pictureSize} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pictureSize: EnumField<
    EntityT,
    DeSerializersT,
    BoPictureSizeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('PictureSize', BoPictureSizeEnum, true);
  /**
   * Representation of the {@link ReportLayoutItem.dataSource} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dataSource: EnumField<
    EntityT,
    DeSerializersT,
    BoDataSourceEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('DataSource', BoDataSourceEnum, true);
  /**
   * Representation of the {@link ReportLayoutItem.string} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  string: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('String', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayoutItem.variableNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variableNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VariableNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.tableName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tableName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TableName', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayoutItem.fieldName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FieldName', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayoutItem.displayDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayDescription: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DisplayDescription',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.editable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  editable: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Editable', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.itemNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.verticalAlignment} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  verticalAlignment: EnumField<
    EntityT,
    DeSerializersT,
    BoVerticalAlignmentEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'VerticalAlignment',
    BoVerticalAlignmentEnum,
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.sortLevel} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortLevel: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SortLevel', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.reverseSort} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reverseSort: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ReverseSort', BoYesNoEnum, true);
  /**
   * Representation of the {@link ReportLayoutItem.sortType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortType: EnumField<EntityT, DeSerializersT, BoSortTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('SortType', BoSortTypeEnum, true);
  /**
   * Representation of the {@link ReportLayoutItem.unique} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unique: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Unique', BoYesNoEnum, true);
  /**
   * Representation of the {@link ReportLayoutItem.setAsGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  setAsGroup: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SetAsGroup', BoYesNoEnum, true);
  /**
   * Representation of the {@link ReportLayoutItem.newPage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  newPage: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('NewPage', BoYesNoEnum, true);
  /**
   * Representation of the {@link ReportLayoutItem.printAsBarCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  printAsBarCode: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('PrintAsBarCode', BoYesNoEnum, true);
  /**
   * Representation of the {@link ReportLayoutItem.linkToField} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkToField: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LinkToField', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayoutItem.barCodeStandard} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  barCodeStandard: EnumField<
    EntityT,
    DeSerializersT,
    BoBarCodeStandardEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'BarCodeStandard',
    BoBarCodeStandardEnum,
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.displayTotalAsAWord} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayTotalAsAWord: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DisplayTotalAsAWord',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.blockFontChange} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blockFontChange: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('BlockFontChange', BoYesNoEnum, true);
  /**
   * Representation of the {@link ReportLayoutItem.parentIndex} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  parentIndex: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ParentIndex', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.itemIndex} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemIndex: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemIndex', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.stringLength} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stringLength: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StringLength', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutItem.stringFiller} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stringFiller: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StringFiller', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayoutItem.relateToField} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relateToField: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RelateToField', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayoutItem.nextSegmentItemNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nextSegmentItemNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NextSegmentItemNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.heightAdjustments} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  heightAdjustments: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('HeightAdjustments', BoYesNoEnum, true);
  /**
   * Representation of the {@link ReportLayoutItem.duplicateRepetitiveArea} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  duplicateRepetitiveArea: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DuplicateRepetitiveArea',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.numberOfLinesInRepetitiveArea} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numberOfLinesInRepetitiveArea: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NumberOfLinesInRepetitiveArea',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.distanceToRepetitiveDuplicate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distanceToRepetitiveDuplicate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistanceToRepetitiveDuplicate',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.hideRepetitiveAreaIfEmpty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hideRepetitiveAreaIfEmpty: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'HideRepetitiveAreaIfEmpty',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ReportLayoutItem.displayRepetitiveAreaFooterOnAllPages} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayRepetitiveAreaFooterOnAllPages: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DisplayRepetitiveAreaFooterOnAllPages',
    BoYesNoEnum,
    true
  );

  /**
   * Creates an instance of ReportLayoutItemField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ReportLayoutItem, fieldOptions);
  }
}

export namespace ReportLayoutItem {
  /**
   * Metadata information on all properties of the `ReportLayoutItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReportLayoutItem>[] = [
    {
      originalName: 'FieldIdentifier',
      name: 'fieldIdentifier',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ParentType',
      name: 'parentType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Type',
      name: 'type',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Visible',
      name: 'visible',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SuppressZeros',
      name: 'suppressZeros',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Left',
      name: 'left',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Top',
      name: 'top',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Width',
      name: 'width',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Height',
      name: 'height',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LeftMargin',
      name: 'leftMargin',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RightMargin',
      name: 'rightMargin',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TopMargin',
      name: 'topMargin',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BottomMargin',
      name: 'bottomMargin',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LeftBorderLineThickness',
      name: 'leftBorderLineThickness',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RightBorderLineThickness',
      name: 'rightBorderLineThickness',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TopBorderLineThickness',
      name: 'topBorderLineThickness',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BottomBorderLineThickness',
      name: 'bottomBorderLineThickness',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ShadowThickness',
      name: 'shadowThickness',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BackgroundRed',
      name: 'backgroundRed',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BackgroundGreen',
      name: 'backgroundGreen',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BackgroundBlue',
      name: 'backgroundBlue',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TextRed',
      name: 'textRed',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TextGreen',
      name: 'textGreen',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TextBlue',
      name: 'textBlue',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'HighlightRed',
      name: 'highlightRed',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'HighlightGreen',
      name: 'highlightGreen',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'HighlightBlue',
      name: 'highlightBlue',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BorderRed',
      name: 'borderRed',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BorderGreen',
      name: 'borderGreen',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BorderBlue',
      name: 'borderBlue',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'GroupNumber',
      name: 'groupNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'FontName',
      name: 'fontName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FontSize',
      name: 'fontSize',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TextStyle',
      name: 'textStyle',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'HorizontalAlignment',
      name: 'horizontalAlignment',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'LineBreak',
      name: 'lineBreak',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PictureSize',
      name: 'pictureSize',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DataSource',
      name: 'dataSource',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'String',
      name: 'string',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VariableNumber',
      name: 'variableNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TableName',
      name: 'tableName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FieldName',
      name: 'fieldName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DisplayDescription',
      name: 'displayDescription',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Editable',
      name: 'editable',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ItemNumber',
      name: 'itemNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VerticalAlignment',
      name: 'verticalAlignment',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SortLevel',
      name: 'sortLevel',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ReverseSort',
      name: 'reverseSort',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SortType',
      name: 'sortType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Unique',
      name: 'unique',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SetAsGroup',
      name: 'setAsGroup',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'NewPage',
      name: 'newPage',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PrintAsBarCode',
      name: 'printAsBarCode',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'LinkToField',
      name: 'linkToField',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BarCodeStandard',
      name: 'barCodeStandard',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DisplayTotalAsAWord',
      name: 'displayTotalAsAWord',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'BlockFontChange',
      name: 'blockFontChange',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ParentIndex',
      name: 'parentIndex',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ItemIndex',
      name: 'itemIndex',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StringLength',
      name: 'stringLength',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StringFiller',
      name: 'stringFiller',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RelateToField',
      name: 'relateToField',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'NextSegmentItemNumber',
      name: 'nextSegmentItemNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'HeightAdjustments',
      name: 'heightAdjustments',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DuplicateRepetitiveArea',
      name: 'duplicateRepetitiveArea',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'NumberOfLinesInRepetitiveArea',
      name: 'numberOfLinesInRepetitiveArea',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DistanceToRepetitiveDuplicate',
      name: 'distanceToRepetitiveDuplicate',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'HideRepetitiveAreaIfEmpty',
      name: 'hideRepetitiveAreaIfEmpty',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DisplayRepetitiveAreaFooterOnAllPages',
      name: 'displayRepetitiveAreaFooterOnAllPages',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
