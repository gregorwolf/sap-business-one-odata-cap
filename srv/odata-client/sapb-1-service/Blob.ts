/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * Blob
 */
export interface Blob {
  /**
   * Content.
   * @nullable
   */
  content?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[Blob.build]] instead.
 */
export function createBlob(json: any): Blob {
  return Blob.build(json);
}

/**
 * BlobField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BlobField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Blob.content]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  content: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Content', this, 'Edm.String');
}

export namespace Blob {
  export function build(json: { [keys: string]: FieldType }): Blob {
    return createComplexType(json, {
      Content: (content: string) => ({ content: edmToTs(content, 'Edm.String') })
    });
  }
}
