/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ServiceCallParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ServiceCallParams.serviceCallId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceCallId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ServiceCallID', this, 'Edm.Int32');
}

export namespace ServiceCallParams {
  export function build(json: { [keys: string]: FieldType }): ServiceCallParams {
    return createComplexType(json, {
      ServiceCallID: (serviceCallId: number) => ({ serviceCallId: edmToTs(serviceCallId, 'Edm.Int32') })
    });
  }
}
