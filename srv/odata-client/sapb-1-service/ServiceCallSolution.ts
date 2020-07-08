/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ServiceCallSolution
 */
export interface ServiceCallSolution {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Solution Id.
   * @nullable
   */
  solutionId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceCallSolution.build]] instead.
 */
export function createServiceCallSolution(json: any): ServiceCallSolution {
  return ServiceCallSolution.build(json);
}

/**
 * ServiceCallSolutionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallSolutionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ServiceCallSolution.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallSolution.solutionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  solutionId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SolutionID', this, 'Edm.Int32');
}

export namespace ServiceCallSolution {
  export function build(json: { [keys: string]: FieldType }): ServiceCallSolution {
    return createComplexType(json, {
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      SolutionID: (solutionId: number) => ({ solutionId: edmToTs(solutionId, 'Edm.Int32') })
    });
  }
}
