/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ActivityInstanceParams
 */
export interface ActivityInstanceParams {
  /**
   * Activity Code.
   * @nullable
   */
  activityCode?: number;
  /**
   * Instance Date.
   * @nullable
   */
  instanceDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[ActivityInstanceParams.build]] instead.
 */
export function createActivityInstanceParams(json: any): ActivityInstanceParams {
  return ActivityInstanceParams.build(json);
}

/**
 * ActivityInstanceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityInstanceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ActivityInstanceParams.activityCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActivityCode', this, 'Edm.Int32');
  /**
   * Representation of the [[ActivityInstanceParams.instanceDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  instanceDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('InstanceDate', this, 'Edm.DateTimeOffset');
}

export namespace ActivityInstanceParams {
  export function build(json: { [keys: string]: FieldType }): ActivityInstanceParams {
    return createComplexType(json, {
      ActivityCode: (activityCode: number) => ({ activityCode: edmToTs(activityCode, 'Edm.Int32') }),
      InstanceDate: (instanceDate: Moment) => ({ instanceDate: edmToTs(instanceDate, 'Edm.DateTimeOffset') })
    });
  }
}
