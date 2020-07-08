/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ServiceCallProblemTypeParams
 */
export interface ServiceCallProblemTypeParams {
  /**
   * Problem Type Id.
   * @nullable
   */
  problemTypeId?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceCallProblemTypeParams.build]] instead.
 */
export function createServiceCallProblemTypeParams(json: any): ServiceCallProblemTypeParams {
  return ServiceCallProblemTypeParams.build(json);
}

/**
 * ServiceCallProblemTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallProblemTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ServiceCallProblemTypeParams.problemTypeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  problemTypeId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ProblemTypeID', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallProblemTypeParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
}

export namespace ServiceCallProblemTypeParams {
  export function build(json: { [keys: string]: FieldType }): ServiceCallProblemTypeParams {
    return createComplexType(json, {
      ProblemTypeID: (problemTypeId: number) => ({ problemTypeId: edmToTs(problemTypeId, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') })
    });
  }
}
