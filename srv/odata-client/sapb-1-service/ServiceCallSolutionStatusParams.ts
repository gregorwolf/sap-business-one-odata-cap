/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ServiceCallSolutionStatusParams
 */
export interface ServiceCallSolutionStatusParams {
  /**
   * Status Id.
   * @nullable
   */
  statusId?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceCallSolutionStatusParams.build]] instead.
 */
export function createServiceCallSolutionStatusParams(json: any): ServiceCallSolutionStatusParams {
  return ServiceCallSolutionStatusParams.build(json);
}

/**
 * ServiceCallSolutionStatusParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallSolutionStatusParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallSolutionStatusParams> {
  /**
   * Representation of the [[ServiceCallSolutionStatusParams.statusId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statusId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StatusId', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallSolutionStatusParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');

  /**
   * Creates an instance of ServiceCallSolutionStatusParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceCallSolutionStatusParams);
  }
}

export namespace ServiceCallSolutionStatusParams {
  /**
   * Metadata information on all properties of the `ServiceCallSolutionStatusParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceCallSolutionStatusParams>[] = [{
    originalName: 'StatusId',
    name: 'statusId',
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
  export function build(json: { [keys: string]: FieldType }): ServiceCallSolutionStatusParams {
    return deserializeComplexTypeV4(json, ServiceCallSolutionStatusParams);
  }
}
