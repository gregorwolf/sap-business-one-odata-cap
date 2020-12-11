/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ServiceCallProblemTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallProblemTypeParams> {
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

  /**
   * Creates an instance of ServiceCallProblemTypeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceCallProblemTypeParams);
  }
}

export namespace ServiceCallProblemTypeParams {
  /**
   * Metadata information on all properties of the `ServiceCallProblemTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceCallProblemTypeParams>[] = [{
    originalName: 'ProblemTypeID',
    name: 'problemTypeId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ServiceCallProblemTypeParams {
    return deserializeComplexTypeV4(json, ServiceCallProblemTypeParams);
  }
}
