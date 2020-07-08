/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class RelationshipParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[RelationshipParams.relationshipCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relationshipCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RelationshipCode', this, 'Edm.Int32');
}

export namespace RelationshipParams {
  export function build(json: { [keys: string]: FieldType }): RelationshipParams {
    return createComplexType(json, {
      RelationshipCode: (relationshipCode: number) => ({ relationshipCode: edmToTs(relationshipCode, 'Edm.Int32') })
    });
  }
}
