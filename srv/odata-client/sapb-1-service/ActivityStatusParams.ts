/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ActivityStatusParams
 */
export interface ActivityStatusParams {
  /**
   * Status Id.
   * @nullable
   */
  statusId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ActivityStatusParams.build]] instead.
 */
export function createActivityStatusParams(json: any): ActivityStatusParams {
  return ActivityStatusParams.build(json);
}

/**
 * ActivityStatusParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityStatusParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ActivityStatusParams.statusId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statusId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StatusId', this, 'Edm.Int32');
}

export namespace ActivityStatusParams {
  export function build(json: { [keys: string]: FieldType }): ActivityStatusParams {
    return createComplexType(json, {
      StatusId: (statusId: number) => ({ statusId: edmToTs(statusId, 'Edm.Int32') })
    });
  }
}
