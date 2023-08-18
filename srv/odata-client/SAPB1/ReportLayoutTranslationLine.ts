/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * ReportLayoutTranslationLine
 */
export interface ReportLayoutTranslationLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Doc Name.
   * @nullable
   */
  docName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Language Code.
   * @nullable
   */
  languageCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Create Date.
   * @nullable
   */
  createDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Create Time.
   * @nullable
   */
  createTime?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Update Time.
   * @nullable
   */
  updateTime?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * ReportLayoutTranslationLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportLayoutTranslationLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ReportLayoutTranslationLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ReportLayoutTranslationLine.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayoutTranslationLine.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutTranslationLine.docName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocName', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayoutTranslationLine.languageCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  languageCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LanguageCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutTranslationLine.createDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CreateDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ReportLayoutTranslationLine.updateDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updateDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'UpdateDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ReportLayoutTranslationLine.createTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CreateTime', 'Edm.Int32', true);
  /**
   * Representation of the {@link ReportLayoutTranslationLine.updateTime} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  updateTime: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UpdateTime', 'Edm.Int32', true);

  /**
   * Creates an instance of ReportLayoutTranslationLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      ReportLayoutTranslationLine,
      fieldOptions
    );
  }
}

export namespace ReportLayoutTranslationLine {
  /**
   * Metadata information on all properties of the `ReportLayoutTranslationLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReportLayoutTranslationLine>[] =
    [
      {
        originalName: 'DocEntry',
        name: 'docEntry',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'LineNumber',
        name: 'lineNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DocName',
        name: 'docName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'LanguageCode',
        name: 'languageCode',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'CreateDate',
        name: 'createDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'UpdateDate',
        name: 'updateDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'CreateTime',
        name: 'createTime',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'UpdateTime',
        name: 'updateTime',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
