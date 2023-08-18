/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExtendedTranslationResultLine } from './ExtendedTranslationResultLine';
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
 * ExtendedTranslationItemLine
 */
export interface ExtendedTranslationItemLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Type.
   * @nullable
   */
  itemType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Slim Type.
   * @nullable
   */
  slimType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Max Length.
   * @nullable
   */
  maxLength?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Source Text.
   * @nullable
   */
  sourceText?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Memo.
   * @nullable
   */
  memo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Extended Translation Result Lines.
   * @nullable
   */
  extendedTranslationResultLines?: DeserializedType<
    DeSerializersT,
    'SAPB1.ExtendedTranslation_ResultLine'
  >;
}

/**
 * ExtendedTranslationItemLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExtendedTranslationItemLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ExtendedTranslationItemLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ExtendedTranslationItemLine.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link ExtendedTranslationItemLine.lineNumber} property for query construction.
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
   * Representation of the {@link ExtendedTranslationItemLine.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedTranslationItemLine.itemType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemType', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedTranslationItemLine.slimType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  slimType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SlimType', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedTranslationItemLine.maxLength} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxLength: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MaxLength', 'Edm.Int32', true);
  /**
   * Representation of the {@link ExtendedTranslationItemLine.sourceText} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceText: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SourceText', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedTranslationItemLine.memo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  memo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Memo', 'Edm.String', true);
  /**
   * Representation of the {@link ExtendedTranslationItemLine.extendedTranslationResultLines} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  extendedTranslationResultLines: CollectionField<
    EntityT,
    DeSerializersT,
    ExtendedTranslationResultLine,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'ExtendedTranslation_ResultLines',
    ExtendedTranslationResultLine,
    true
  );

  /**
   * Creates an instance of ExtendedTranslationItemLineField.
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
      ExtendedTranslationItemLine,
      fieldOptions
    );
  }
}

export namespace ExtendedTranslationItemLine {
  /**
   * Metadata information on all properties of the `ExtendedTranslationItemLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExtendedTranslationItemLine>[] =
    [
      {
        originalName: 'DocEntry',
        name: 'docEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LineNumber',
        name: 'lineNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ItemCode',
        name: 'itemCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ItemType',
        name: 'itemType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'SlimType',
        name: 'slimType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'MaxLength',
        name: 'maxLength',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'SourceText',
        name: 'sourceText',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Memo',
        name: 'memo',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ExtendedTranslation_ResultLines',
        name: 'extendedTranslationResultLines',
        type: ExtendedTranslationResultLine,
        isCollection: true
      }
    ];
}
