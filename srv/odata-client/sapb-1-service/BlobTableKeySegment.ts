/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class BlobTableKeySegmentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BlobTableKeySegment> {
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

  /**
   * Creates an instance of BlobTableKeySegmentField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BlobTableKeySegment);
  }
}

export namespace BlobTableKeySegment {
  /**
   * Metadata information on all properties of the `BlobTableKeySegment` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BlobTableKeySegment>[] = [{
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Value',
    name: 'value',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BlobTableKeySegment {
    return deserializeComplexTypeV4(json, BlobTableKeySegment);
  }
}
