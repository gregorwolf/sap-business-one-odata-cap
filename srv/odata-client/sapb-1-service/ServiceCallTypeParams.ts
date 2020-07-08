/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ServiceCallTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ServiceCallTypeParams {
  export function build(json: { [keys: string]: FieldType }): ServiceCallTypeParams {
    return createComplexType(json, {
      CallTypeID: (callTypeId: number) => ({ callTypeId: edmToTs(callTypeId, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') })
    });
  }
}
