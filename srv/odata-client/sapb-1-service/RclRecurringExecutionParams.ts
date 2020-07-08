/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, Entity, FieldType, createComplexType } from '@sap-cloud-sdk/core/v4';

/**
 * RclRecurringExecutionParams
 */
export interface RclRecurringExecutionParams {
}

/**
 * @deprecated Since v1.6.0. Use [[RclRecurringExecutionParams.build]] instead.
 */
export function createRclRecurringExecutionParams(json: any): RclRecurringExecutionParams {
  return RclRecurringExecutionParams.build(json);
}

/**
 * RclRecurringExecutionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RclRecurringExecutionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
}

export namespace RclRecurringExecutionParams {
  export function build(json: { [keys: string]: FieldType }): RclRecurringExecutionParams {
    return createComplexType(json, {

    });
  }
}
