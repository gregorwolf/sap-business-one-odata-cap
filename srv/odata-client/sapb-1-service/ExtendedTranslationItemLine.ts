/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExtendedTranslationResultLine, ExtendedTranslationResultLineField } from './ExtendedTranslationResultLine';
import { CollectionField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
  extendedTranslationResultLines?: ExtendedTranslationResultLine;
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
export class ExtendedTranslationItemLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
  extendedTranslationResultLines: ExtendedTranslationResultLineField<EntityT> = new ExtendedTranslationResultLineField('ExtendedTranslation_ResultLines', this);
}

export namespace ExtendedTranslationItemLine {
  export function build(json: { [keys: string]: FieldType | ExtendedTranslationResultLine }): ExtendedTranslationItemLine {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      LineNumber: (lineNumber: number) => ({ lineNumber: edmToTs(lineNumber, 'Edm.Int32') }),
      ItemCode: (itemCode: string) => ({ itemCode: edmToTs(itemCode, 'Edm.String') }),
      ItemType: (itemType: string) => ({ itemType: edmToTs(itemType, 'Edm.String') }),
      SlimType: (slimType: string) => ({ slimType: edmToTs(slimType, 'Edm.String') }),
      MaxLength: (maxLength: number) => ({ maxLength: edmToTs(maxLength, 'Edm.Int32') }),
      SourceText: (sourceText: string) => ({ sourceText: edmToTs(sourceText, 'Edm.String') }),
      Memo: (memo: string) => ({ memo: edmToTs(memo, 'Edm.String') }),
      ExtendedTranslation_ResultLines: (extendedTranslationResultLines: ExtendedTranslationResultLine) => ({ extendedTranslationResultLines: ExtendedTranslationResultLine.build(extendedTranslationResultLines) })
    });
  }
}
