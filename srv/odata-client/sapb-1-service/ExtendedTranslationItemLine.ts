/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExtendedTranslationResultLine } from './ExtendedTranslationResultLine';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ExtendedTranslationItemLine
 */
export interface ExtendedTranslationItemLine {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Item Type.
   * @nullable
   */
  itemType?: string;
  /**
   * Slim Type.
   * @nullable
   */
  slimType?: string;
  /**
   * Max Length.
   * @nullable
   */
  maxLength?: number;
  /**
   * Source Text.
   * @nullable
   */
  sourceText?: string;
  /**
   * Memo.
   * @nullable
   */
  memo?: string;
  /**
   * Extended Translation Result Lines.
   * @nullable
   */
  extendedTranslationResultLines?: ExtendedTranslationResultLine[];
}

/**
 * @deprecated Since v1.6.0. Use [[ExtendedTranslationItemLine.build]] instead.
 */
export function createExtendedTranslationItemLine(json: any): ExtendedTranslationItemLine {
  return ExtendedTranslationItemLine.build(json);
}

/**
 * ExtendedTranslationItemLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExtendedTranslationItemLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExtendedTranslationItemLine> {
  /**
   * Representation of the [[ExtendedTranslationItemLine.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedTranslationItemLine.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedTranslationItemLine.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedTranslationItemLine.itemType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemType', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedTranslationItemLine.slimType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  slimType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SlimType', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedTranslationItemLine.maxLength]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxLength: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaxLength', this, 'Edm.Int32');
  /**
   * Representation of the [[ExtendedTranslationItemLine.sourceText]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceText: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SourceText', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedTranslationItemLine.memo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  memo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Memo', this, 'Edm.String');
  /**
   * Representation of the [[ExtendedTranslationItemLine.extendedTranslationResultLines]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  extendedTranslationResultLines: CollectionField<EntityT, ExtendedTranslationResultLine> = new CollectionField('ExtendedTranslation_ResultLines', this, ExtendedTranslationResultLine);

  /**
   * Creates an instance of ExtendedTranslationItemLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ExtendedTranslationItemLine);
  }
}

export namespace ExtendedTranslationItemLine {
  /**
   * Metadata information on all properties of the `ExtendedTranslationItemLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExtendedTranslationItemLine>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemType',
    name: 'itemType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SlimType',
    name: 'slimType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'MaxLength',
    name: 'maxLength',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SourceText',
    name: 'sourceText',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Memo',
    name: 'memo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ExtendedTranslation_ResultLines',
    name: 'extendedTranslationResultLines',
    type: ExtendedTranslationResultLine,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | ExtendedTranslationResultLine }): ExtendedTranslationItemLine {
    return deserializeComplexTypeV4(json, ExtendedTranslationItemLine);
  }
}
