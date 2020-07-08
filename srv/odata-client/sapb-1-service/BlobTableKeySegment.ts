/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BlobTableKeySegment
 */
export interface BlobTableKeySegment {
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Value.
   * @nullable
   */
  value?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BlobTableKeySegment.build]] instead.
 */
export function createBlobTableKeySegment(json: any): BlobTableKeySegment {
  return BlobTableKeySegment.build(json);
}

/**
 * BlobTableKeySegmentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BlobTableKeySegmentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BlobTableKeySegment.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[BlobTableKeySegment.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Value', this, 'Edm.String');
}

export namespace BlobTableKeySegment {
  export function build(json: { [keys: string]: FieldType }): BlobTableKeySegment {
    return createComplexType(json, {
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      Value: (value: string) => ({ value: edmToTs(value, 'Edm.String') })
    });
  }
}
