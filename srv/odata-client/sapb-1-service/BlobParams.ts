/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BlobTableKeySegment, BlobTableKeySegmentField } from './BlobTableKeySegment';
import { CollectionField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
  blobTableKeySegments?: BlobTableKeySegment;
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
export class BlobParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
  blobTableKeySegments: BlobTableKeySegmentField<EntityT> = new BlobTableKeySegmentField('BlobTableKeySegments', this);
}

export namespace BlobParams {
  export function build(json: { [keys: string]: FieldType | BlobTableKeySegment }): BlobParams {
    return createComplexType(json, {
      Table: (table: string) => ({ table: edmToTs(table, 'Edm.String') }),
      Field: (field: string) => ({ field: edmToTs(field, 'Edm.String') }),
      FileName: (fileName: string) => ({ fileName: edmToTs(fileName, 'Edm.String') }),
      BlobTableKeySegments: (blobTableKeySegments: BlobTableKeySegment) => ({ blobTableKeySegments: BlobTableKeySegment.build(blobTableKeySegments) })
    });
  }
}
