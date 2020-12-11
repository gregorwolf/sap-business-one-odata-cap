/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class DocumentTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentTypeParams> {
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

  /**
   * Creates an instance of DocumentTypeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DocumentTypeParams);
  }
}

export namespace DocumentTypeParams {
  /**
   * Metadata information on all properties of the `DocumentTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentTypeParams>[] = [{
    originalName: 'Document',
    name: 'document',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DocumentSubType',
    name: 'documentSubType',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DocumentTypeParams {
    return deserializeComplexTypeV4(json, DocumentTypeParams);
  }
}
