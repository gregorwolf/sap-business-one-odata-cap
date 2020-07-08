/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ActivityInstancesListParams
 */
export interface ActivityInstancesListParams {
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Instance Count.
   * @nullable
   */
  instanceCount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ActivityInstancesListParams.build]] instead.
 */
export function createActivityInstancesListParams(json: any): ActivityInstancesListParams {
  return ActivityInstancesListParams.build(json);
}

/**
 * ActivityInstancesListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityInstancesListParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ActivityInstancesListParams.startDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('StartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ActivityInstancesListParams.instanceCount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  instanceCount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InstanceCount', this, 'Edm.Int32');
}

export namespace ActivityInstancesListParams {
  export function build(json: { [keys: string]: FieldType }): ActivityInstancesListParams {
    return createComplexType(json, {
      StartDate: (startDate: Moment) => ({ startDate: edmToTs(startDate, 'Edm.DateTimeOffset') }),
      InstanceCount: (instanceCount: number) => ({ instanceCount: edmToTs(instanceCount, 'Edm.Int32') })
    });
  }
}
