/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ServiceCallProblemSubTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallProblemSubTypeParams> {
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

  /**
   * Creates an instance of ServiceCallProblemSubTypeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceCallProblemSubTypeParams);
  }
}

export namespace ServiceCallProblemSubTypeParams {
  /**
   * Metadata information on all properties of the `ServiceCallProblemSubTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceCallProblemSubTypeParams>[] = [{
    originalName: 'ProblemSubTypeID',
    name: 'problemSubTypeId',
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
  export function build(json: { [keys: string]: FieldType }): ServiceCallProblemSubTypeParams {
    return deserializeComplexTypeV4(json, ServiceCallProblemSubTypeParams);
  }
}
