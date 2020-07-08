/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * WorkOrderParams
 */
export interface WorkOrderParams {
  /**
   * Order Num.
   * @nullable
   */
  orderNum?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[WorkOrderParams.build]] instead.
 */
export function createWorkOrderParams(json: any): WorkOrderParams {
  return WorkOrderParams.build(json);
}

/**
 * WorkOrderParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WorkOrderParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WorkOrderParams.orderNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orderNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OrderNum', this, 'Edm.Int32');
}

export namespace WorkOrderParams {
  export function build(json: { [keys: string]: FieldType }): WorkOrderParams {
    return createComplexType(json, {
      OrderNum: (orderNum: number) => ({ orderNum: edmToTs(orderNum, 'Edm.Int32') })
    });
  }
}
