/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * KnowledgeBaseSolutionParams
 */
export interface KnowledgeBaseSolutionParams {
  /**
   * Solution Code.
   * @nullable
   */
  solutionCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[KnowledgeBaseSolutionParams.build]] instead.
 */
export function createKnowledgeBaseSolutionParams(json: any): KnowledgeBaseSolutionParams {
  return KnowledgeBaseSolutionParams.build(json);
}

/**
 * KnowledgeBaseSolutionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class KnowledgeBaseSolutionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, KnowledgeBaseSolutionParams> {
  /**
   * Representation of the [[KnowledgeBaseSolutionParams.solutionCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  solutionCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SolutionCode', this, 'Edm.Int32');

  /**
   * Creates an instance of KnowledgeBaseSolutionParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, KnowledgeBaseSolutionParams);
  }
}

export namespace KnowledgeBaseSolutionParams {
  /**
   * Metadata information on all properties of the `KnowledgeBaseSolutionParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<KnowledgeBaseSolutionParams>[] = [{
    originalName: 'SolutionCode',
    name: 'solutionCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): KnowledgeBaseSolutionParams {
    return deserializeComplexTypeV4(json, KnowledgeBaseSolutionParams);
  }
}
