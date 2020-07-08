/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReportLayoutItem, ReportLayoutItemField } from './ReportLayoutItem';
import { ReportLayoutTranslationLine, ReportLayoutTranslationLineField } from './ReportLayoutTranslationLine';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
   * Paper Size.
   * @nullable
   */
  paperSize?: string;
  /**
   * Grid Size.
   * @nullable
   */
  gridSize?: number;
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
   * Repetitive Areas Number.
   * @nullable
   */
  repetitiveAreasNumber?: number;
  /**
   * Layout Code.
   * @nullable
   */
  layoutCode?: string;
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
  reportLayoutItems?: ReportLayoutItem;
  /**
   * Report Layout Translation Lines.
   * @nullable
   */
  reportLayoutTranslationLines?: ReportLayoutTranslationLine;
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
export class ReportLayoutField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
   * Representation of the [[ReportLayout.paperSize]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paperSize: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaperSize', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayout.gridSize]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gridSize: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('GridSize', this, 'Edm.Int32');
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
   * Representation of the [[ReportLayout.repetitiveAreasNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  repetitiveAreasNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RepetitiveAreasNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayout.layoutCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layoutCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LayoutCode', this, 'Edm.String');
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
  reportLayoutItems: ReportLayoutItemField<EntityT> = new ReportLayoutItemField('ReportLayoutItems', this);
  /**
   * Representation of the [[ReportLayout.reportLayoutTranslationLines]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportLayoutTranslationLines: ReportLayoutTranslationLineField<EntityT> = new ReportLayoutTranslationLineField('ReportLayout_TranslationLines', this);
}

export namespace ReportLayout {
  export function build(json: { [keys: string]: FieldType | ReportLayoutItem | ReportLayoutTranslationLine }): ReportLayout {
    return createComplexType(json, {
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      Author: (author: string) => ({ author: edmToTs(author, 'Edm.String') }),
      Remarks: (remarks: string) => ({ remarks: edmToTs(remarks, 'Edm.String') }),
      Width: (width: number) => ({ width: edmToTs(width, 'Edm.Int32') }),
      Height: (height: number) => ({ height: edmToTs(height, 'Edm.Int32') }),
      LeftMargin: (leftMargin: number) => ({ leftMargin: edmToTs(leftMargin, 'Edm.Int32') }),
      RightMargin: (rightMargin: number) => ({ rightMargin: edmToTs(rightMargin, 'Edm.Int32') }),
      TopMargin: (topMargin: number) => ({ topMargin: edmToTs(topMargin, 'Edm.Int32') }),
      BottomMargin: (bottomMargin: number) => ({ bottomMargin: edmToTs(bottomMargin, 'Edm.Int32') }),
      PaperSize: (paperSize: string) => ({ paperSize: edmToTs(paperSize, 'Edm.String') }),
      GridSize: (gridSize: number) => ({ gridSize: edmToTs(gridSize, 'Edm.Int32') }),
      Picture: (picture: string) => ({ picture: edmToTs(picture, 'Edm.String') }),
      TypeCode: (typeCode: string) => ({ typeCode: edmToTs(typeCode, 'Edm.String') }),
      LeaderReport: (leaderReport: string) => ({ leaderReport: edmToTs(leaderReport, 'Edm.String') }),
      FollowUpReport: (followUpReport: string) => ({ followUpReport: edmToTs(followUpReport, 'Edm.String') }),
      PreviewPrintingFont: (previewPrintingFont: string) => ({ previewPrintingFont: edmToTs(previewPrintingFont, 'Edm.String') }),
      ChangeFontSizeInPreview: (changeFontSizeInPreview: number) => ({ changeFontSizeInPreview: edmToTs(changeFontSizeInPreview, 'Edm.Int32') }),
      EMailFont: (eMailFont: string) => ({ eMailFont: edmToTs(eMailFont, 'Edm.String') }),
      ChangeFontSizeForEMail: (changeFontSizeForEMail: number) => ({ changeFontSizeForEMail: edmToTs(changeFontSizeForEMail, 'Edm.Int32') }),
      Query: (query: string) => ({ query: edmToTs(query, 'Edm.String') }),
      language: (language: number) => ({ language: edmToTs(language, 'Edm.Int32') }),
      ImpExpObjCode: (impExpObjCode: number) => ({ impExpObjCode: edmToTs(impExpObjCode, 'Edm.Int32') }),
      ExtensionName: (extensionName: string) => ({ extensionName: edmToTs(extensionName, 'Edm.String') }),
      RepetitiveAreasNumber: (repetitiveAreasNumber: number) => ({ repetitiveAreasNumber: edmToTs(repetitiveAreasNumber, 'Edm.Int32') }),
      LayoutCode: (layoutCode: string) => ({ layoutCode: edmToTs(layoutCode, 'Edm.String') }),
      Printer: (printer: string) => ({ printer: edmToTs(printer, 'Edm.String') }),
      PrinterFirstPage: (printerFirstPage: string) => ({ printerFirstPage: edmToTs(printerFirstPage, 'Edm.String') }),
      NumberOfCopies: (numberOfCopies: number) => ({ numberOfCopies: edmToTs(numberOfCopies, 'Edm.Int32') }),
      Localization: (localization: string) => ({ localization: edmToTs(localization, 'Edm.String') }),
      B1Version: (b1Version: string) => ({ b1Version: edmToTs(b1Version, 'Edm.String') }),
      CRVersion: (crVersion: string) => ({ crVersion: edmToTs(crVersion, 'Edm.String') }),
      TypeDetail: (typeDetail: string) => ({ typeDetail: edmToTs(typeDetail, 'Edm.String') }),
      ReportLayoutItems: (reportLayoutItems: ReportLayoutItem) => ({ reportLayoutItems: ReportLayoutItem.build(reportLayoutItems) }),
      ReportLayout_TranslationLines: (reportLayoutTranslationLines: ReportLayoutTranslationLine) => ({ reportLayoutTranslationLines: ReportLayoutTranslationLine.build(reportLayoutTranslationLines) })
    });
  }
}
