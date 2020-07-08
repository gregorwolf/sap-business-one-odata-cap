/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ServiceCallProblemSubTypeParams
 */
export interface ServiceCallProblemSubTypeParams {
  /**
   * Problem Sub Type Id.
   * @nullable
   */
  problemSubTypeId?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceCallProblemSubTypeParams.build]] instead.
 */
export function createServiceCallProblemSubTypeParams(json: any): ServiceCallProblemSubTypeParams {
  return ServiceCallProblemSubTypeParams.build(json);
}

/**
 * ServiceCallProblemSubTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallProblemSubTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ServiceCallProblemSubTypeParams.problemSubTypeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  problemSubTypeId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ProblemSubTypeID', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallProblemSubTypeParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
}

export namespace ServiceCallProblemSubTypeParams {
  export function build(json: { [keys: string]: FieldType }): ServiceCallProblemSubTypeParams {
    return createComplexType(json, {
      ProblemSubTypeID: (problemSubTypeId: number) => ({ problemSubTypeId: edmToTs(problemSubTypeId, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') })
    });
  }
}
