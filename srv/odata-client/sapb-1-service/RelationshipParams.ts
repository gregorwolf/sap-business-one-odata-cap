/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * RelationshipParams
 */
export interface RelationshipParams {
  /**
   * Relationship Code.
   * @nullable
   */
  relationshipCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[RelationshipParams.build]] instead.
 */
export function createRelationshipParams(json: any): RelationshipParams {
  return RelationshipParams.build(json);
}

/**
 * RelationshipParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RelationshipParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, RelationshipParams> {
  /**
   * Representation of the [[RelationshipParams.relationshipCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relationshipCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RelationshipCode', this, 'Edm.Int32');

  /**
   * Creates an instance of RelationshipParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, RelationshipParams);
  }
}

export namespace RelationshipParams {
  /**
   * Metadata information on all properties of the `RelationshipParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RelationshipParams>[] = [{
    originalName: 'RelationshipCode',
    name: 'relationshipCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): RelationshipParams {
    return deserializeComplexTypeV4(json, RelationshipParams);
  }
}
