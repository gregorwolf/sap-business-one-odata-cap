/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReportLayoutItem } from './ReportLayoutItem';
import { ReportLayoutTranslationLine } from './ReportLayoutTranslationLine';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoOrientationEnum } from './BoOrientationEnum';
import { BoGridTypeEnum } from './BoGridTypeEnum';
import { BoQueryTypeEnum } from './BoQueryTypeEnum';
import { BoExtensionErrorActionEnum } from './BoExtensionErrorActionEnum';
import { ReportLayoutCategoryEnum } from './ReportLayoutCategoryEnum';
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
 * ReportLayout
 */
export interface ReportLayout<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Author.
   * @nullable
   */
  author?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Editable.
   * @nullable
   */
  editable?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Paper Size.
   * @nullable
   */
  paperSize?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Orientation.
   * @nullable
   */
  orientation?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Grid Size.
   * @nullable
   */
  gridSize?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Grid Type.
   * @nullable
   */
  gridType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Show Grid.
   * @nullable
   */
  showGrid?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Snap To Grid.
   * @nullable
   */
  snapToGrid?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Picture.
   * @nullable
   */
  picture?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Type Code.
   * @nullable
   */
  typeCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Foreign Language Report.
   * @nullable
   */
  foreignLanguageReport?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Sortable.
   * @nullable
   */
  sortable?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Leader Report.
   * @nullable
   */
  leaderReport?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Follow Up Report.
   * @nullable
   */
  followUpReport?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Convert Font In Print Preview.
   * @nullable
   */
  convertFontInPrintPreview?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Preview Printing Font.
   * @nullable
   */
  previewPrintingFont?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Change Font Size In Preview.
   * @nullable
   */
  changeFontSizeInPreview?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Convert Font For E Mail.
   * @nullable
   */
  convertFontForEMail?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * E Mail Font.
   * @nullable
   */
  eMailFont?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Change Font Size For E Mail.
   * @nullable
   */
  changeFontSizeForEMail?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Query.
   * @nullable
   */
  query?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Query Type.
   * @nullable
   */
  queryType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Language.
   * @nullable
   */
  language?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Imp Exp Obj Code.
   * @nullable
   */
  impExpObjCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Extension Name.
   * @nullable
   */
  extensionName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Extension Error Action.
   * @nullable
   */
  extensionErrorAction?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Repetitive Areas Number.
   * @nullable
   */
  repetitiveAreasNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Allign Footer To Bottom.
   * @nullable
   */
  allignFooterToBottom?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Layout Code.
   * @nullable
   */
  layoutCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Category.
   * @nullable
   */
  category?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Printer.
   * @nullable
   */
  printer?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Printer First Page.
   * @nullable
   */
  printerFirstPage?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Number Of Copies.
   * @nullable
   */
  numberOfCopies?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Localization.
   * @nullable
   */
  localization?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Use First Printer.
   * @nullable
   */
  useFirstPrinter?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * B 1 Version.
   * @nullable
   */
  b1Version?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cr Version.
   * @nullable
   */
  crVersion?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Type Detail.
   * @nullable
   */
  typeDetail?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Report Layout Items.
   * @nullable
   */
  reportLayoutItems?: DeserializedType<
    DeSerializersT,
    'SAPB1.ReportLayoutItem'
  >;
  /**
   * Report Layout Translation Lines.
   * @nullable
   */
  reportLayoutTranslationLines?: DeserializedType<
    DeSerializersT,
    'SAPB1.ReportLayout_TranslationLine'
  >;
}

/**
 * ReportLayoutField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportLayoutField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ReportLayout,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ReportLayout.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.author} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  author: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Author', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.remarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.width} property for query construction.
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
   * Representation of the {@link ReportLayout.height} property for query construction.
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
   * Representation of the {@link ReportLayout.leftMargin} property for query construction.
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
   * Representation of the {@link ReportLayout.rightMargin} property for query construction.
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
   * Representation of the {@link ReportLayout.topMargin} property for query construction.
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
   * Representation of the {@link ReportLayout.bottomMargin} property for query construction.
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
   * Representation of the {@link ReportLayout.editable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  editable: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Editable', BoYesNoEnum, true);
  /**
   * Representation of the {@link ReportLayout.paperSize} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paperSize: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PaperSize', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.orientation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orientation: EnumField<
    EntityT,
    DeSerializersT,
    BoOrientationEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('Orientation', BoOrientationEnum, true);
  /**
   * Representation of the {@link ReportLayout.gridSize} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gridSize: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GridSize', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayout.gridType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gridType: EnumField<EntityT, DeSerializersT, BoGridTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('GridType', BoGridTypeEnum, true);
  /**
   * Representation of the {@link ReportLayout.showGrid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  showGrid: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('ShowGrid', BoYesNoEnum, true);
  /**
   * Representation of the {@link ReportLayout.snapToGrid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  snapToGrid: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SnapToGrid', BoYesNoEnum, true);
  /**
   * Representation of the {@link ReportLayout.picture} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  picture: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Picture', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.typeCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  typeCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TypeCode', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.foreignLanguageReport} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignLanguageReport: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ForeignLanguageReport',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ReportLayout.sortable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortable: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Sortable', BoYesNoEnum, true);
  /**
   * Representation of the {@link ReportLayout.leaderReport} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  leaderReport: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LeaderReport', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.followUpReport} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  followUpReport: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FollowUpReport',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ReportLayout.convertFontInPrintPreview} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  convertFontInPrintPreview: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ConvertFontInPrintPreview',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ReportLayout.previewPrintingFont} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  previewPrintingFont: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PreviewPrintingFont',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ReportLayout.changeFontSizeInPreview} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeFontSizeInPreview: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ChangeFontSizeInPreview',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ReportLayout.convertFontForEMail} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  convertFontForEMail: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ConvertFontForEMail',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ReportLayout.eMailFont} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eMailFont: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EMailFont', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.changeFontSizeForEMail} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeFontSizeForEMail: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ChangeFontSizeForEMail',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ReportLayout.query} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  query: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Query', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.queryType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  queryType: EnumField<EntityT, DeSerializersT, BoQueryTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('QueryType', BoQueryTypeEnum, true);
  /**
   * Representation of the {@link ReportLayout.language} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  language: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('language', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayout.impExpObjCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  impExpObjCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ImpExpObjCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayout.extensionName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  extensionName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExtensionName', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.extensionErrorAction} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  extensionErrorAction: EnumField<
    EntityT,
    DeSerializersT,
    BoExtensionErrorActionEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ExtensionErrorAction',
    BoExtensionErrorActionEnum,
    true
  );
  /**
   * Representation of the {@link ReportLayout.repetitiveAreasNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  repetitiveAreasNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RepetitiveAreasNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ReportLayout.allignFooterToBottom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allignFooterToBottom: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AllignFooterToBottom',
    BoYesNoEnum,
    true
  );
  /**
   * Representation of the {@link ReportLayout.layoutCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layoutCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LayoutCode', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.category} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  category: EnumField<
    EntityT,
    DeSerializersT,
    ReportLayoutCategoryEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Category',
    ReportLayoutCategoryEnum,
    true
  );
  /**
   * Representation of the {@link ReportLayout.printer} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  printer: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Printer', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.printerFirstPage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  printerFirstPage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'PrinterFirstPage',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ReportLayout.numberOfCopies} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numberOfCopies: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NumberOfCopies', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayout.localization} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  localization: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Localization', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.useFirstPrinter} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useFirstPrinter: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('UseFirstPrinter', BoYesNoEnum, true);
  /**
   * Representation of the {@link ReportLayout.b1Version} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  b1Version: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('B1Version', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.crVersion} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  crVersion: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CRVersion', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.typeDetail} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  typeDetail: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TypeDetail', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayout.reportLayoutItems} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportLayoutItems: CollectionField<
    EntityT,
    DeSerializersT,
    ReportLayoutItem,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'ReportLayoutItems',
    ReportLayoutItem,
    true
  );
  /**
   * Representation of the {@link ReportLayout.reportLayoutTranslationLines} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportLayoutTranslationLines: CollectionField<
    EntityT,
    DeSerializersT,
    ReportLayoutTranslationLine,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'ReportLayout_TranslationLines',
    ReportLayoutTranslationLine,
    true
  );

  /**
   * Creates an instance of ReportLayoutField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ReportLayout, fieldOptions);
  }
}

export namespace ReportLayout {
  /**
   * Metadata information on all properties of the `ReportLayout` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReportLayout>[] = [
    {
      originalName: 'Name',
      name: 'name',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Author',
      name: 'author',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
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
      originalName: 'Editable',
      name: 'editable',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PaperSize',
      name: 'paperSize',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Orientation',
      name: 'orientation',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'GridSize',
      name: 'gridSize',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'GridType',
      name: 'gridType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ShowGrid',
      name: 'showGrid',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SnapToGrid',
      name: 'snapToGrid',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Picture',
      name: 'picture',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TypeCode',
      name: 'typeCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ForeignLanguageReport',
      name: 'foreignLanguageReport',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Sortable',
      name: 'sortable',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'LeaderReport',
      name: 'leaderReport',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FollowUpReport',
      name: 'followUpReport',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ConvertFontInPrintPreview',
      name: 'convertFontInPrintPreview',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'PreviewPrintingFont',
      name: 'previewPrintingFont',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ChangeFontSizeInPreview',
      name: 'changeFontSizeInPreview',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ConvertFontForEMail',
      name: 'convertFontForEMail',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EMailFont',
      name: 'eMailFont',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ChangeFontSizeForEMail',
      name: 'changeFontSizeForEMail',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Query',
      name: 'query',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'QueryType',
      name: 'queryType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'language',
      name: 'language',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ImpExpObjCode',
      name: 'impExpObjCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ExtensionName',
      name: 'extensionName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ExtensionErrorAction',
      name: 'extensionErrorAction',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'RepetitiveAreasNumber',
      name: 'repetitiveAreasNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AllignFooterToBottom',
      name: 'allignFooterToBottom',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'LayoutCode',
      name: 'layoutCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Category',
      name: 'category',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Printer',
      name: 'printer',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PrinterFirstPage',
      name: 'printerFirstPage',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'NumberOfCopies',
      name: 'numberOfCopies',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Localization',
      name: 'localization',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'UseFirstPrinter',
      name: 'useFirstPrinter',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'B1Version',
      name: 'b1Version',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CRVersion',
      name: 'crVersion',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TypeDetail',
      name: 'typeDetail',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ReportLayoutItems',
      name: 'reportLayoutItems',
      type: ReportLayoutItem,
      isCollection: true
    },
    {
      originalName: 'ReportLayout_TranslationLines',
      name: 'reportLayoutTranslationLines',
      type: ReportLayoutTranslationLine,
      isCollection: true
    }
  ];
}
