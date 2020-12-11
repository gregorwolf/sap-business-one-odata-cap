/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ServiceCallSolutionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallSolution> {
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

  /**
   * Creates an instance of ServiceCallSolutionField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceCallSolution);
  }
}

export namespace ServiceCallSolution {
  /**
   * Metadata information on all properties of the `ServiceCallSolution` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceCallSolution>[] = [{
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SolutionID',
    name: 'solutionId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ServiceCallSolution {
    return deserializeComplexTypeV4(json, ServiceCallSolution);
  }
}
