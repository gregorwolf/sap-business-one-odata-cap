/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ServiceCallStatusParams
 */
export interface ServiceCallStatusParams {
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
 * @deprecated Since v1.6.0. Use [[ServiceCallStatusParams.build]] instead.
 */
export function createServiceCallStatusParams(json: any): ServiceCallStatusParams {
  return ServiceCallStatusParams.build(json);
}

/**
 * ServiceCallStatusParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallStatusParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallStatusParams> {
  /**
   * Representation of the [[ServiceCallStatusParams.statusId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statusId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StatusId', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallStatusParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');

  /**
   * Creates an instance of ServiceCallStatusParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceCallStatusParams);
  }
}

export namespace ServiceCallStatusParams {
  /**
   * Metadata information on all properties of the `ServiceCallStatusParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceCallStatusParams>[] = [{
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
  export function build(json: { [keys: string]: FieldType }): ServiceCallStatusParams {
    return deserializeComplexTypeV4(json, ServiceCallStatusParams);
  }
}
