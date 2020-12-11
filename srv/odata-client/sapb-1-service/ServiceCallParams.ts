/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ServiceCallParams
 */
export interface ServiceCallParams {
  /**
   * Service Call Id.
   * @nullable
   */
  serviceCallId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceCallParams.build]] instead.
 */
export function createServiceCallParams(json: any): ServiceCallParams {
  return ServiceCallParams.build(json);
}

/**
 * ServiceCallParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallParams> {
  /**
   * Representation of the [[ServiceCallParams.serviceCallId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceCallId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ServiceCallID', this, 'Edm.Int32');

  /**
   * Creates an instance of ServiceCallParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceCallParams);
  }
}

export namespace ServiceCallParams {
  /**
   * Metadata information on all properties of the `ServiceCallParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceCallParams>[] = [{
    originalName: 'ServiceCallID',
    name: 'serviceCallId',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ServiceCallParams {
    return deserializeComplexTypeV4(json, ServiceCallParams);
  }
}
