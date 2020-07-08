/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ServiceCallOriginParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ServiceCallOriginParams {
  export function build(json: { [keys: string]: FieldType }): ServiceCallOriginParams {
    return createComplexType(json, {
      OriginID: (originId: number) => ({ originId: edmToTs(originId, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') })
    });
  }
}
