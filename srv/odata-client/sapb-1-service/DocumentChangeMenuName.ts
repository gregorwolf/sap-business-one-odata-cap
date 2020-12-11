/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class DocumentChangeMenuNameField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentChangeMenuName> {
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

  /**
   * Creates an instance of DocumentChangeMenuNameField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DocumentChangeMenuName);
  }
}

export namespace DocumentChangeMenuName {
  /**
   * Metadata information on all properties of the `DocumentChangeMenuName` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentChangeMenuName>[] = [{
    originalName: 'Document',
    name: 'document',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocumentSubType',
    name: 'documentSubType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ChangedMenuName',
    name: 'changedMenuName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DocumentChangeMenuName {
    return deserializeComplexTypeV4(json, DocumentChangeMenuName);
  }
}
