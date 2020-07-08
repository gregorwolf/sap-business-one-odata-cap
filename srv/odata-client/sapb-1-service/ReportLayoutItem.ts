/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createReportLayoutItem(json: any): ReportLayoutItem {
  return ReportLayoutItem.build(json);
}

/**
 * ReportLayoutItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportLayoutItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
   * Representation of the [[ReportLayoutItem.sortLevel]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortLevel: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SortLevel', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.linkToField]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkToField: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LinkToField', this, 'Edm.String');
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
   * Representation of the [[ReportLayoutItem.numberOfLinesInRepetitiveArea]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numberOfLinesInRepetitiveArea: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NumberOfLinesInRepetitiveArea', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutItem.distanceToRepetitiveDuplicate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distanceToRepetitiveDuplicate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DistanceToRepetitiveDuplicate', this, 'Edm.Int32');
}

export namespace ReportLayoutItem {
  export function build(json: { [keys: string]: FieldType }): ReportLayoutItem {
    return createComplexType(json, {
      FieldIdentifier: (fieldIdentifier: string) => ({ fieldIdentifier: edmToTs(fieldIdentifier, 'Edm.String') }),
      ParentType: (parentType: number) => ({ parentType: edmToTs(parentType, 'Edm.Int32') }),
      Left: (left: number) => ({ left: edmToTs(left, 'Edm.Int32') }),
      Top: (top: number) => ({ top: edmToTs(top, 'Edm.Int32') }),
      Width: (width: number) => ({ width: edmToTs(width, 'Edm.Int32') }),
      Height: (height: number) => ({ height: edmToTs(height, 'Edm.Int32') }),
      LeftMargin: (leftMargin: number) => ({ leftMargin: edmToTs(leftMargin, 'Edm.Int32') }),
      RightMargin: (rightMargin: number) => ({ rightMargin: edmToTs(rightMargin, 'Edm.Int32') }),
      TopMargin: (topMargin: number) => ({ topMargin: edmToTs(topMargin, 'Edm.Int32') }),
      BottomMargin: (bottomMargin: number) => ({ bottomMargin: edmToTs(bottomMargin, 'Edm.Int32') }),
      LeftBorderLineThickness: (leftBorderLineThickness: number) => ({ leftBorderLineThickness: edmToTs(leftBorderLineThickness, 'Edm.Int32') }),
      RightBorderLineThickness: (rightBorderLineThickness: number) => ({ rightBorderLineThickness: edmToTs(rightBorderLineThickness, 'Edm.Int32') }),
      TopBorderLineThickness: (topBorderLineThickness: number) => ({ topBorderLineThickness: edmToTs(topBorderLineThickness, 'Edm.Int32') }),
      BottomBorderLineThickness: (bottomBorderLineThickness: number) => ({ bottomBorderLineThickness: edmToTs(bottomBorderLineThickness, 'Edm.Int32') }),
      ShadowThickness: (shadowThickness: number) => ({ shadowThickness: edmToTs(shadowThickness, 'Edm.Int32') }),
      BackgroundRed: (backgroundRed: number) => ({ backgroundRed: edmToTs(backgroundRed, 'Edm.Int32') }),
      BackgroundGreen: (backgroundGreen: number) => ({ backgroundGreen: edmToTs(backgroundGreen, 'Edm.Int32') }),
      BackgroundBlue: (backgroundBlue: number) => ({ backgroundBlue: edmToTs(backgroundBlue, 'Edm.Int32') }),
      TextRed: (textRed: number) => ({ textRed: edmToTs(textRed, 'Edm.Int32') }),
      TextGreen: (textGreen: number) => ({ textGreen: edmToTs(textGreen, 'Edm.Int32') }),
      TextBlue: (textBlue: number) => ({ textBlue: edmToTs(textBlue, 'Edm.Int32') }),
      HighlightRed: (highlightRed: number) => ({ highlightRed: edmToTs(highlightRed, 'Edm.Int32') }),
      HighlightGreen: (highlightGreen: number) => ({ highlightGreen: edmToTs(highlightGreen, 'Edm.Int32') }),
      HighlightBlue: (highlightBlue: number) => ({ highlightBlue: edmToTs(highlightBlue, 'Edm.Int32') }),
      BorderRed: (borderRed: number) => ({ borderRed: edmToTs(borderRed, 'Edm.Int32') }),
      BorderGreen: (borderGreen: number) => ({ borderGreen: edmToTs(borderGreen, 'Edm.Int32') }),
      BorderBlue: (borderBlue: number) => ({ borderBlue: edmToTs(borderBlue, 'Edm.Int32') }),
      GroupNumber: (groupNumber: number) => ({ groupNumber: edmToTs(groupNumber, 'Edm.Int32') }),
      FontName: (fontName: string) => ({ fontName: edmToTs(fontName, 'Edm.String') }),
      FontSize: (fontSize: number) => ({ fontSize: edmToTs(fontSize, 'Edm.Int32') }),
      TextStyle: (textStyle: number) => ({ textStyle: edmToTs(textStyle, 'Edm.Int32') }),
      String: (string: string) => ({ string: edmToTs(string, 'Edm.String') }),
      VariableNumber: (variableNumber: number) => ({ variableNumber: edmToTs(variableNumber, 'Edm.Int32') }),
      TableName: (tableName: string) => ({ tableName: edmToTs(tableName, 'Edm.String') }),
      FieldName: (fieldName: string) => ({ fieldName: edmToTs(fieldName, 'Edm.String') }),
      Editable: (editable: number) => ({ editable: edmToTs(editable, 'Edm.Int32') }),
      ItemNumber: (itemNumber: number) => ({ itemNumber: edmToTs(itemNumber, 'Edm.Int32') }),
      SortLevel: (sortLevel: number) => ({ sortLevel: edmToTs(sortLevel, 'Edm.Int32') }),
      LinkToField: (linkToField: string) => ({ linkToField: edmToTs(linkToField, 'Edm.String') }),
      ParentIndex: (parentIndex: number) => ({ parentIndex: edmToTs(parentIndex, 'Edm.Int32') }),
      ItemIndex: (itemIndex: number) => ({ itemIndex: edmToTs(itemIndex, 'Edm.Int32') }),
      StringLength: (stringLength: number) => ({ stringLength: edmToTs(stringLength, 'Edm.Int32') }),
      StringFiller: (stringFiller: string) => ({ stringFiller: edmToTs(stringFiller, 'Edm.String') }),
      RelateToField: (relateToField: string) => ({ relateToField: edmToTs(relateToField, 'Edm.String') }),
      NextSegmentItemNumber: (nextSegmentItemNumber: string) => ({ nextSegmentItemNumber: edmToTs(nextSegmentItemNumber, 'Edm.String') }),
      NumberOfLinesInRepetitiveArea: (numberOfLinesInRepetitiveArea: number) => ({ numberOfLinesInRepetitiveArea: edmToTs(numberOfLinesInRepetitiveArea, 'Edm.Int32') }),
      DistanceToRepetitiveDuplicate: (distanceToRepetitiveDuplicate: number) => ({ distanceToRepetitiveDuplicate: edmToTs(distanceToRepetitiveDuplicate, 'Edm.Int32') })
    });
  }
}
