/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * JournalEntryDocumentTypeParams
 */
export interface JournalEntryDocumentTypeParams {
  /**
   * Journal Entry Type.
   * @nullable
   */
  journalEntryType?: string;
  /**
   * Doc Type Description.
   * @nullable
   */
  docTypeDescription?: string;
  /**
   * Short Name.
   * @nullable
   */
  shortName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[JournalEntryDocumentTypeParams.build]] instead.
 */
export function createJournalEntryDocumentTypeParams(json: any): JournalEntryDocumentTypeParams {
  return JournalEntryDocumentTypeParams.build(json);
}

/**
 * JournalEntryDocumentTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class JournalEntryDocumentTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[JournalEntryDocumentTypeParams.journalEntryType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  journalEntryType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('JournalEntryType', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryDocumentTypeParams.docTypeDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docTypeDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocTypeDescription', this, 'Edm.String');
  /**
   * Representation of the [[JournalEntryDocumentTypeParams.shortName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shortName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ShortName', this, 'Edm.String');
}

export namespace JournalEntryDocumentTypeParams {
  export function build(json: { [keys: string]: FieldType }): JournalEntryDocumentTypeParams {
    return createComplexType(json, {
      JournalEntryType: (journalEntryType: string) => ({ journalEntryType: edmToTs(journalEntryType, 'Edm.String') }),
      DocTypeDescription: (docTypeDescription: string) => ({ docTypeDescription: edmToTs(docTypeDescription, 'Edm.String') }),
      ShortName: (shortName: string) => ({ shortName: edmToTs(shortName, 'Edm.String') })
    });
  }
}
