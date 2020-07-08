/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DocumentTypeParams
 */
export interface DocumentTypeParams {
  /**
   * Document.
   * @nullable
   */
  document?: string;
  /**
   * Document Sub Type.
   * @nullable
   */
  documentSubType?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[DocumentTypeParams.build]] instead.
 */
export function createDocumentTypeParams(json: any): DocumentTypeParams {
  return DocumentTypeParams.build(json);
}

/**
 * DocumentTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DocumentTypeParams.document]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  document: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Document', this, 'Edm.String');
  /**
   * Representation of the [[DocumentTypeParams.documentSubType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentSubType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocumentSubType', this, 'Edm.String');
}

export namespace DocumentTypeParams {
  export function build(json: { [keys: string]: FieldType }): DocumentTypeParams {
    return createComplexType(json, {
      Document: (document: string) => ({ document: edmToTs(document, 'Edm.String') }),
      DocumentSubType: (documentSubType: string) => ({ documentSubType: edmToTs(documentSubType, 'Edm.String') })
    });
  }
}
