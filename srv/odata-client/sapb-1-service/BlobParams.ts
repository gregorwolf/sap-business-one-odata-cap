/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BlobTableKeySegment } from './BlobTableKeySegment';
import { CollectionField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BlobParams
 */
export interface BlobParams {
  /**
   * Table.
   * @nullable
   */
  table?: string;
  /**
   * Field.
   * @nullable
   */
  field?: string;
  /**
   * File Name.
   * @nullable
   */
  fileName?: string;
  /**
   * Blob Table Key Segments.
   * @nullable
   */
  blobTableKeySegments?: BlobTableKeySegment[];
}

/**
 * @deprecated Since v1.6.0. Use [[BlobParams.build]] instead.
 */
export function createBlobParams(json: any): BlobParams {
  return BlobParams.build(json);
}

/**
 * BlobParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BlobParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BlobParams> {
  /**
   * Representation of the [[BlobParams.table]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  table: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Table', this, 'Edm.String');
  /**
   * Representation of the [[BlobParams.field]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  field: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Field', this, 'Edm.String');
  /**
   * Representation of the [[BlobParams.fileName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fileName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FileName', this, 'Edm.String');
  /**
   * Representation of the [[BlobParams.blobTableKeySegments]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blobTableKeySegments: CollectionField<EntityT, BlobTableKeySegment> = new CollectionField('BlobTableKeySegments', this, BlobTableKeySegment);

  /**
   * Creates an instance of BlobParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BlobParams);
  }
}

export namespace BlobParams {
  /**
   * Metadata information on all properties of the `BlobParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BlobParams>[] = [{
    originalName: 'Table',
    name: 'table',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Field',
    name: 'field',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FileName',
    name: 'fileName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BlobTableKeySegments',
    name: 'blobTableKeySegments',
    type: BlobTableKeySegment,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | BlobTableKeySegment }): BlobParams {
    return deserializeComplexTypeV4(json, BlobParams);
  }
}
