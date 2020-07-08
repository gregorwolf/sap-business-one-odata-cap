/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ActivityParams
 */
export interface ActivityParams {
  /**
   * Activity Code.
   * @nullable
   */
  activityCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ActivityParams.build]] instead.
 */
export function createActivityParams(json: any): ActivityParams {
  return ActivityParams.build(json);
}

/**
 * ActivityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ActivityParams.activityCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActivityCode', this, 'Edm.Int32');
}

export namespace ActivityParams {
  export function build(json: { [keys: string]: FieldType }): ActivityParams {
    return createComplexType(json, {
      ActivityCode: (activityCode: number) => ({ activityCode: edmToTs(activityCode, 'Edm.Int32') })
    });
  }
}
