/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ExpenseTypeParams
 */
export interface ExpenseTypeParams {
  /**
   * Expense Type.
   * @nullable
   */
  expenseType?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ExpenseTypeParams.build]] instead.
 */
export function createExpenseTypeParams(json: any): ExpenseTypeParams {
  return ExpenseTypeParams.build(json);
}

/**
 * ExpenseTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExpenseTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ExpenseTypeParams.expenseType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExpenseType', this, 'Edm.String');
}

export namespace ExpenseTypeParams {
  export function build(json: { [keys: string]: FieldType }): ExpenseTypeParams {
    return createComplexType(json, {
      ExpenseType: (expenseType: string) => ({ expenseType: edmToTs(expenseType, 'Edm.String') })
    });
  }
}
