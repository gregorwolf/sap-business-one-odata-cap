/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DocumentChangeMenuName
 */
export interface DocumentChangeMenuName {
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
  /**
   * Changed Menu Name.
   * @nullable
   */
  changedMenuName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[DocumentChangeMenuName.build]] instead.
 */
export function createDocumentChangeMenuName(json: any): DocumentChangeMenuName {
  return DocumentChangeMenuName.build(json);
}

/**
 * DocumentChangeMenuNameField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentChangeMenuNameField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DocumentChangeMenuName.document]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  document: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Document', this, 'Edm.String');
  /**
   * Representation of the [[DocumentChangeMenuName.documentSubType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentSubType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocumentSubType', this, 'Edm.String');
  /**
   * Representation of the [[DocumentChangeMenuName.changedMenuName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changedMenuName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ChangedMenuName', this, 'Edm.String');
}

export namespace DocumentChangeMenuName {
  export function build(json: { [keys: string]: FieldType }): DocumentChangeMenuName {
    return createComplexType(json, {
      Document: (document: string) => ({ document: edmToTs(document, 'Edm.String') }),
      DocumentSubType: (documentSubType: string) => ({ documentSubType: edmToTs(documentSubType, 'Edm.String') }),
      ChangedMenuName: (changedMenuName: string) => ({ changedMenuName: edmToTs(changedMenuName, 'Edm.String') })
    });
  }
}
