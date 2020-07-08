/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class KnowledgeBaseSolutionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[KnowledgeBaseSolutionParams.solutionCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  solutionCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SolutionCode', this, 'Edm.Int32');
}

export namespace KnowledgeBaseSolutionParams {
  export function build(json: { [keys: string]: FieldType }): KnowledgeBaseSolutionParams {
    return createComplexType(json, {
      SolutionCode: (solutionCode: number) => ({ solutionCode: edmToTs(solutionCode, 'Edm.Int32') })
    });
  }
}
