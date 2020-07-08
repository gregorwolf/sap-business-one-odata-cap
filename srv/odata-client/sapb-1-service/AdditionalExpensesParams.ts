/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * AdditionalExpensesParams
 */
export interface AdditionalExpensesParams {
  /**
   * Expens Code.
   * @nullable
   */
  expensCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[AdditionalExpensesParams.build]] instead.
 */
export function createAdditionalExpensesParams(json: any): AdditionalExpensesParams {
  return AdditionalExpensesParams.build(json);
}

/**
 * AdditionalExpensesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AdditionalExpensesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[AdditionalExpensesParams.expensCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expensCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExpensCode', this, 'Edm.Int32');
}

export namespace AdditionalExpensesParams {
  export function build(json: { [keys: string]: FieldType }): AdditionalExpensesParams {
    return createComplexType(json, {
      ExpensCode: (expensCode: number) => ({ expensCode: edmToTs(expensCode, 'Edm.Int32') })
    });
  }
}
