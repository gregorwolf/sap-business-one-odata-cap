/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PmsActivityData
 */
export interface PmsActivityData {
  /**
   * Line Id.
   * @nullable
   */
  lineId?: number;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: number;
  /**
   * Activity Id.
   * @nullable
   */
  activityId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PmsActivityData.build]] instead.
 */
export function createPmsActivityData(json: any): PmsActivityData {
  return PmsActivityData.build(json);
}

/**
 * PmsActivityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmsActivityDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PmsActivityData.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsActivityData.stageId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsActivityData.activityId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActivityID', this, 'Edm.Int32');
}

export namespace PmsActivityData {
  export function build(json: { [keys: string]: FieldType }): PmsActivityData {
    return createComplexType(json, {
      LineID: (lineId: number) => ({ lineId: edmToTs(lineId, 'Edm.Int32') }),
      StageID: (stageId: number) => ({ stageId: edmToTs(stageId, 'Edm.Int32') }),
      ActivityID: (activityId: number) => ({ activityId: edmToTs(activityId, 'Edm.Int32') })
    });
  }
}
