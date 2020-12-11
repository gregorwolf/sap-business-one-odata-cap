/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ServiceCallTypeParams
 */
export interface ServiceCallTypeParams {
  /**
   * Call Type Id.
   * @nullable
   */
  callTypeId?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceCallTypeParams.build]] instead.
 */
export function createServiceCallTypeParams(json: any): ServiceCallTypeParams {
  return ServiceCallTypeParams.build(json);
}

/**
 * ServiceCallTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallTypeParams> {
  /**
   * Representation of the [[ServiceCallTypeParams.callTypeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  callTypeId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CallTypeID', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallTypeParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');

  /**
   * Creates an instance of ServiceCallTypeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceCallTypeParams);
  }
}

export namespace ServiceCallTypeParams {
  /**
   * Metadata information on all properties of the `ServiceCallTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceCallTypeParams>[] = [{
    originalName: 'CallTypeID',
    name: 'callTypeId',
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
  export function build(json: { [keys: string]: FieldType }): ServiceCallTypeParams {
    return deserializeComplexTypeV4(json, ServiceCallTypeParams);
  }
}
