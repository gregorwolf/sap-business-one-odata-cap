/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ServiceCallActivity
 */
export interface ServiceCallActivity {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Activity Code.
   * @nullable
   */
  activityCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceCallActivity.build]] instead.
 */
export function createServiceCallActivity(json: any): ServiceCallActivity {
  return ServiceCallActivity.build(json);
}

/**
 * ServiceCallActivityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallActivityField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ServiceCallActivity.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallActivity.activityCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  activityCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActivityCode', this, 'Edm.Int32');
}

export namespace ServiceCallActivity {
  export function build(json: { [keys: string]: FieldType }): ServiceCallActivity {
    return createComplexType(json, {
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      ActivityCode: (activityCode: number) => ({ activityCode: edmToTs(activityCode, 'Edm.Int32') })
    });
  }
}
