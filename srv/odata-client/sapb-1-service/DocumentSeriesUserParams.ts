/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DocumentSeriesUserParams
 */
export interface DocumentSeriesUserParams {
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
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * User.
   * @nullable
   */
  user?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DocumentSeriesUserParams.build]] instead.
 */
export function createDocumentSeriesUserParams(json: any): DocumentSeriesUserParams {
  return DocumentSeriesUserParams.build(json);
}

/**
 * DocumentSeriesUserParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentSeriesUserParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentSeriesUserParams> {
  /**
   * Representation of the [[DocumentSeriesUserParams.document]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  document: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Document', this, 'Edm.String');
  /**
   * Representation of the [[DocumentSeriesUserParams.documentSubType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentSubType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocumentSubType', this, 'Edm.String');
  /**
   * Representation of the [[DocumentSeriesUserParams.series]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Series', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentSeriesUserParams.user]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  user: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('User', this, 'Edm.Int32');

  /**
   * Creates an instance of DocumentSeriesUserParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DocumentSeriesUserParams);
  }
}

export namespace DocumentSeriesUserParams {
  /**
   * Metadata information on all properties of the `DocumentSeriesUserParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentSeriesUserParams>[] = [{
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
    originalName: 'Series',
    name: 'series',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'User',
    name: 'user',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DocumentSeriesUserParams {
    return deserializeComplexTypeV4(json, DocumentSeriesUserParams);
  }
}
