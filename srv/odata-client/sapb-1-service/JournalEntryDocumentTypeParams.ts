/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class JournalEntryDocumentTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, JournalEntryDocumentTypeParams> {
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

  /**
   * Creates an instance of JournalEntryDocumentTypeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, JournalEntryDocumentTypeParams);
  }
}

export namespace JournalEntryDocumentTypeParams {
  /**
   * Metadata information on all properties of the `JournalEntryDocumentTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<JournalEntryDocumentTypeParams>[] = [{
    originalName: 'JournalEntryType',
    name: 'journalEntryType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocTypeDescription',
    name: 'docTypeDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShortName',
    name: 'shortName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): JournalEntryDocumentTypeParams {
    return deserializeComplexTypeV4(json, JournalEntryDocumentTypeParams);
  }
}
