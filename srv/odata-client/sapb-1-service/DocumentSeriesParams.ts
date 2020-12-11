/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DocumentSeriesParams
 */
export interface DocumentSeriesParams {
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
}

/**
 * @deprecated Since v1.6.0. Use [[DocumentSeriesParams.build]] instead.
 */
export function createDocumentSeriesParams(json: any): DocumentSeriesParams {
  return DocumentSeriesParams.build(json);
}

/**
 * DocumentSeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentSeriesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentSeriesParams> {
  /**
   * Representation of the [[DocumentSeriesParams.document]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  document: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Document', this, 'Edm.String');
  /**
   * Representation of the [[DocumentSeriesParams.documentSubType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentSubType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocumentSubType', this, 'Edm.String');
  /**
   * Representation of the [[DocumentSeriesParams.series]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  series: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Series', this, 'Edm.Int32');

  /**
   * Creates an instance of DocumentSeriesParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DocumentSeriesParams);
  }
}

export namespace DocumentSeriesParams {
  /**
   * Metadata information on all properties of the `DocumentSeriesParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentSeriesParams>[] = [{
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
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DocumentSeriesParams {
    return deserializeComplexTypeV4(json, DocumentSeriesParams);
  }
}
