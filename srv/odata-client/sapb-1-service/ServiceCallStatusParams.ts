/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ServiceCallStatusParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ServiceCallStatusParams {
  export function build(json: { [keys: string]: FieldType }): ServiceCallStatusParams {
    return createComplexType(json, {
      StatusId: (statusId: number) => ({ statusId: edmToTs(statusId, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') })
    });
  }
}
