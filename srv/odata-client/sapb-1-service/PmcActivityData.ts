/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PmcActivityData
 */
export interface PmcActivityData {
  /**
   * Activity Id.
   * @nullable
   */
  activityId?: number;
  /**
   * Activity Type.
   * @nullable
   */
  activityType?: string;
  /**
   * Labor Item.
   * @nullable
   */
  laborItem?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PmcActivityData.build]] instead.
 */
export function createPmcActivityData(json: any): PmcActivityData {
  return PmcActivityData.build(json);
}

/**
 * PmcActivityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmcActivityDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PmcActivityData.activityId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActivityID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmcActivityData.activityType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ActivityType', this, 'Edm.String');
  /**
   * Representation of the [[PmcActivityData.laborItem]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  laborItem: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LaborItem', this, 'Edm.String');
}

export namespace PmcActivityData {
  export function build(json: { [keys: string]: FieldType }): PmcActivityData {
    return createComplexType(json, {
      ActivityID: (activityId: number) => ({ activityId: edmToTs(activityId, 'Edm.Int32') }),
      ActivityType: (activityType: string) => ({ activityType: edmToTs(activityType, 'Edm.String') }),
      LaborItem: (laborItem: string) => ({ laborItem: edmToTs(laborItem, 'Edm.String') })
    });
  }
}
