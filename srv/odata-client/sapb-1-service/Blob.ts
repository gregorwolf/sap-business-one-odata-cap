/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class BlobField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Blob> {
  /**
   * Representation of the [[Blob.content]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  content: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Content', this, 'Edm.String');

  /**
   * Creates an instance of BlobField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, Blob);
  }
}

export namespace Blob {
  /**
   * Metadata information on all properties of the `Blob` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Blob>[] = [{
    originalName: 'Content',
    name: 'content',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): Blob {
    return deserializeComplexTypeV4(json, Blob);
  }
}
