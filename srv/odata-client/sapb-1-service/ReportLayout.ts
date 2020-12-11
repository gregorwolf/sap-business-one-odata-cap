/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
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
import { CollectionField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ReportLayout
 */
export interface ReportLayout {
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Author.
   * @nullable
   */
  author?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
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
   * Editable.
   * @nullable
   */
  editable?: BoYesNoEnum;
  /**
   * Paper Size.
   * @nullable
   */
  paperSize?: string;
  /**
   * Orientation.
   * @nullable
   */
  orientation?: BoOrientationEnum;
  /**
   * Grid Size.
   * @nullable
   */
  gridSize?: number;
  /**
   * Grid Type.
   * @nullable
   */
  gridType?: BoGridTypeEnum;
  /**
   * Show Grid.
   * @nullable
   */
  showGrid?: BoYesNoEnum;
  /**
   * Snap To Grid.
   * @nullable
   */
  snapToGrid?: BoYesNoEnum;
  /**
   * Picture.
   * @nullable
   */
  picture?: string;
  /**
   * Type Code.
   * @nullable
   */
  typeCode?: string;
  /**
   * Foreign Language Report.
   * @nullable
   */
  foreignLanguageReport?: BoYesNoEnum;
  /**
   * Sortable.
   * @nullable
   */
  sortable?: BoYesNoEnum;
  /**
   * Leader Report.
   * @nullable
   */
  leaderReport?: string;
  /**
   * Follow Up Report.
   * @nullable
   */
  followUpReport?: string;
  /**
   * Convert Font In Print Preview.
   * @nullable
   */
  convertFontInPrintPreview?: BoYesNoEnum;
  /**
   * Preview Printing Font.
   * @nullable
   */
  previewPrintingFont?: string;
  /**
   * Change Font Size In Preview.
   * @nullable
   */
  changeFontSizeInPreview?: number;
  /**
   * Convert Font For E Mail.
   * @nullable
   */
  convertFontForEMail?: BoYesNoEnum;
  /**
   * E Mail Font.
   * @nullable
   */
  eMailFont?: string;
  /**
   * Change Font Size For E Mail.
   * @nullable
   */
  changeFontSizeForEMail?: number;
  /**
   * Query.
   * @nullable
   */
  query?: string;
  /**
   * Query Type.
   * @nullable
   */
  queryType?: BoQueryTypeEnum;
  /**
   * Language.
   * @nullable
   */
  language?: number;
  /**
   * Imp Exp Obj Code.
   * @nullable
   */
  impExpObjCode?: number;
  /**
   * Extension Name.
   * @nullable
   */
  extensionName?: string;
  /**
   * Extension Error Action.
   * @nullable
   */
  extensionErrorAction?: BoExtensionErrorActionEnum;
  /**
   * Repetitive Areas Number.
   * @nullable
   */
  repetitiveAreasNumber?: number;
  /**
   * Allign Footer To Bottom.
   * @nullable
   */
  allignFooterToBottom?: BoYesNoEnum;
  /**
   * Layout Code.
   * @nullable
   */
  layoutCode?: string;
  /**
   * Category.
   * @nullable
   */
  category?: ReportLayoutCategoryEnum;
  /**
   * Printer.
   * @nullable
   */
  printer?: string;
  /**
   * Printer First Page.
   * @nullable
   */
  printerFirstPage?: string;
  /**
   * Number Of Copies.
   * @nullable
   */
  numberOfCopies?: number;
  /**
   * Localization.
   * @nullable
   */
  localization?: string;
  /**
   * Use First Printer.
   * @nullable
   */
  useFirstPrinter?: BoYesNoEnum;
  /**
   * B 1 Version.
   * @nullable
   */
  b1Version?: string;
  /**
   * Cr Version.
   * @nullable
   */
  crVersion?: string;
  /**
   * Type Detail.
   * @nullable
   */
  typeDetail?: string;
  /**
   * Report Layout Items.
   * @nullable
   */
  reportLayoutItems?: ReportLayoutItem[];
  /**
   * Report Layout Translation Lines.
   * @nullable
   */
  reportLayoutTranslationLines?: ReportLayoutTranslationLine[];
}

/**
 * @deprecated Since v1.6.0. Use [[ReportLayout.build]] instead.
 */
export function createReportLayout(json: any): ReportLayout {
  return ReportLayout.build(json);
}

/**
 * ReportLayoutField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportLayoutField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReportLayout> {
  /**
   * Representation of the [[ReportLayout.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.author]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  author: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Author', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.width]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  width: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Width', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayout.height]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  height: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Height', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayout.leftMargin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  leftMargin: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LeftMargin', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayout.rightMargin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rightMargin: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RightMargin', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayout.topMargin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  topMargin: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TopMargin', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayout.bottomMargin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bottomMargin: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BottomMargin', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayout.editable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  editable: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Editable', this);
  /**
   * Representation of the [[ReportLayout.paperSize]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paperSize: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaperSize', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.orientation]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orientation: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Orientation', this);
  /**
   * Representation of the [[ReportLayout.gridSize]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gridSize: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GridSize', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayout.gridType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gridType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('GridType', this);
  /**
   * Representation of the [[ReportLayout.showGrid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  showGrid: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ShowGrid', this);
  /**
   * Representation of the [[ReportLayout.snapToGrid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  snapToGrid: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SnapToGrid', this);
  /**
   * Representation of the [[ReportLayout.picture]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  picture: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Picture', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.typeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  typeCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TypeCode', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.foreignLanguageReport]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  foreignLanguageReport: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ForeignLanguageReport', this);
  /**
   * Representation of the [[ReportLayout.sortable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortable: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Sortable', this);
  /**
   * Representation of the [[ReportLayout.leaderReport]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  leaderReport: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LeaderReport', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.followUpReport]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  followUpReport: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FollowUpReport', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.convertFontInPrintPreview]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  convertFontInPrintPreview: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ConvertFontInPrintPreview', this);
  /**
   * Representation of the [[ReportLayout.previewPrintingFont]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  previewPrintingFont: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PreviewPrintingFont', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.changeFontSizeInPreview]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeFontSizeInPreview: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ChangeFontSizeInPreview', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayout.convertFontForEMail]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  convertFontForEMail: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ConvertFontForEMail', this);
  /**
   * Representation of the [[ReportLayout.eMailFont]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eMailFont: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EMailFont', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.changeFontSizeForEMail]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeFontSizeForEMail: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ChangeFontSizeForEMail', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayout.query]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  query: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Query', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.queryType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  queryType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('QueryType', this);
  /**
   * Representation of the [[ReportLayout.language]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  language: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('language', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayout.impExpObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  impExpObjCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ImpExpObjCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayout.extensionName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  extensionName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExtensionName', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.extensionErrorAction]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  extensionErrorAction: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ExtensionErrorAction', this);
  /**
   * Representation of the [[ReportLayout.repetitiveAreasNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  repetitiveAreasNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RepetitiveAreasNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayout.allignFooterToBottom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allignFooterToBottom: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AllignFooterToBottom', this);
  /**
   * Representation of the [[ReportLayout.layoutCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layoutCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LayoutCode', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.category]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  category: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Category', this);
  /**
   * Representation of the [[ReportLayout.printer]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  printer: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Printer', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.printerFirstPage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  printerFirstPage: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PrinterFirstPage', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.numberOfCopies]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numberOfCopies: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NumberOfCopies', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayout.localization]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  localization: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Localization', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.useFirstPrinter]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useFirstPrinter: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('UseFirstPrinter', this);
  /**
   * Representation of the [[ReportLayout.b1Version]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  b1Version: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('B1Version', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.crVersion]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  crVersion: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CRVersion', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.typeDetail]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  typeDetail: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TypeDetail', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.reportLayoutItems]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportLayoutItems: CollectionField<EntityT, ReportLayoutItem> = new CollectionField('ReportLayoutItems', this, ReportLayoutItem);
  /**
   * Representation of the [[ReportLayout.reportLayoutTranslationLines]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportLayoutTranslationLines: CollectionField<EntityT, ReportLayoutTranslationLine> = new CollectionField('ReportLayout_TranslationLines', this, ReportLayoutTranslationLine);

  /**
   * Creates an instance of ReportLayoutField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ReportLayout);
  }
}

export namespace ReportLayout {
  /**
   * Metadata information on all properties of the `ReportLayout` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReportLayout>[] = [{
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Author',
    name: 'author',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
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
    originalName: 'Editable',
    name: 'editable',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'PaperSize',
    name: 'paperSize',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Orientation',
    name: 'orientation',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'GridSize',
    name: 'gridSize',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'GridType',
    name: 'gridType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ShowGrid',
    name: 'showGrid',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SnapToGrid',
    name: 'snapToGrid',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Picture',
    name: 'picture',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TypeCode',
    name: 'typeCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ForeignLanguageReport',
    name: 'foreignLanguageReport',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Sortable',
    name: 'sortable',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'LeaderReport',
    name: 'leaderReport',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FollowUpReport',
    name: 'followUpReport',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ConvertFontInPrintPreview',
    name: 'convertFontInPrintPreview',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'PreviewPrintingFont',
    name: 'previewPrintingFont',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ChangeFontSizeInPreview',
    name: 'changeFontSizeInPreview',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ConvertFontForEMail',
    name: 'convertFontForEMail',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EMailFont',
    name: 'eMailFont',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ChangeFontSizeForEMail',
    name: 'changeFontSizeForEMail',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Query',
    name: 'query',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'QueryType',
    name: 'queryType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'language',
    name: 'language',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ImpExpObjCode',
    name: 'impExpObjCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ExtensionName',
    name: 'extensionName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ExtensionErrorAction',
    name: 'extensionErrorAction',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'RepetitiveAreasNumber',
    name: 'repetitiveAreasNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'AllignFooterToBottom',
    name: 'allignFooterToBottom',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'LayoutCode',
    name: 'layoutCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Category',
    name: 'category',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Printer',
    name: 'printer',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PrinterFirstPage',
    name: 'printerFirstPage',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'NumberOfCopies',
    name: 'numberOfCopies',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Localization',
    name: 'localization',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UseFirstPrinter',
    name: 'useFirstPrinter',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'B1Version',
    name: 'b1Version',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CRVersion',
    name: 'crVersion',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TypeDetail',
    name: 'typeDetail',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ReportLayoutItems',
    name: 'reportLayoutItems',
    type: ReportLayoutItem,
    isCollection: true
  }, {
    originalName: 'ReportLayout_TranslationLines',
    name: 'reportLayoutTranslationLines',
    type: ReportLayoutTranslationLine,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | ReportLayoutItem | ReportLayoutTranslationLine }): ReportLayout {
    return deserializeComplexTypeV4(json, ReportLayout);
  }
}
