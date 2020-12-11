/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ServiceCallOriginParams
 */
export interface ServiceCallOriginParams {
  /**
   * Origin Id.
   * @nullable
   */
  originId?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceCallOriginParams.build]] instead.
 */
export function createServiceCallOriginParams(json: any): ServiceCallOriginParams {
  return ServiceCallOriginParams.build(json);
}

/**
 * ServiceCallOriginParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallOriginParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallOriginParams> {
  /**
   * Representation of the [[ServiceCallOriginParams.originId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OriginID', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallOriginParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');

  /**
   * Creates an instance of ServiceCallOriginParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceCallOriginParams);
  }
}

export namespace ServiceCallOriginParams {
  /**
   * Metadata information on all properties of the `ServiceCallOriginParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceCallOriginParams>[] = [{
    originalName: 'OriginID',
    name: 'originId',
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
  export function build(json: { [keys: string]: FieldType }): ServiceCallOriginParams {
    return deserializeComplexTypeV4(json, ServiceCallOriginParams);
  }
}
