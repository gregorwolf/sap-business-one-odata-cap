/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createReportLayoutTranslationLine(json: any): ReportLayoutTranslationLine {
  return ReportLayoutTranslationLine.build(json);
}

/**
 * ReportLayoutTranslationLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportLayoutTranslationLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ReportLayoutTranslationLine.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocEntry', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutTranslationLine.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutTranslationLine.docName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocName', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutTranslationLine.languageCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  languageCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LanguageCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutTranslationLine.createDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CreateDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ReportLayoutTranslationLine.updateDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updateDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('UpdateDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ReportLayoutTranslationLine.createTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createTime: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CreateTime', this, 'Edm.Int32');
  /**
   * Representation of the [[ReportLayoutTranslationLine.updateTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updateTime: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UpdateTime', this, 'Edm.Int32');
}

export namespace ReportLayoutTranslationLine {
  export function build(json: { [keys: string]: FieldType }): ReportLayoutTranslationLine {
    return createComplexType(json, {
      DocEntry: (docEntry: string) => ({ docEntry: edmToTs(docEntry, 'Edm.String') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      DocName: (docName: string) => ({ docName: edmToTs(docName, 'Edm.String') }),
      LanguageCode: (languageCode: number) => ({ languageCode: edmToTs(languageCode, 'Edm.Int32') }),
      CreateDate: (createDate: Moment) => ({ createDate: edmToTs(createDate, 'Edm.DateTimeOffset') }),
      UpdateDate: (updateDate: Moment) => ({ updateDate: edmToTs(updateDate, 'Edm.DateTimeOffset') }),
      CreateTime: (createTime: number) => ({ createTime: edmToTs(createTime, 'Edm.Int32') }),
      UpdateTime: (updateTime: number) => ({ updateTime: edmToTs(updateTime, 'Edm.Int32') })
    });
  }
}
