/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ReportLayoutTranslationLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReportLayoutTranslationLine> {
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

  /**
   * Creates an instance of ReportLayoutTranslationLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ReportLayoutTranslationLine);
  }
}

export namespace ReportLayoutTranslationLine {
  /**
   * Metadata information on all properties of the `ReportLayoutTranslationLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReportLayoutTranslationLine>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocName',
    name: 'docName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LanguageCode',
    name: 'languageCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CreateDate',
    name: 'createDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'UpdateDate',
    name: 'updateDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'CreateTime',
    name: 'createTime',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UpdateTime',
    name: 'updateTime',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ReportLayoutTranslationLine {
    return deserializeComplexTypeV4(json, ReportLayoutTranslationLine);
  }
}
