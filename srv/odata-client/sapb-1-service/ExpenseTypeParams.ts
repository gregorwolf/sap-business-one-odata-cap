/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class ExpenseTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExpenseTypeParams> {
  /**
   * Representation of the [[ExpenseTypeParams.expenseType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ExpenseType', this, 'Edm.String');

  /**
   * Creates an instance of ExpenseTypeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ExpenseTypeParams);
  }
}

export namespace ExpenseTypeParams {
  /**
   * Metadata information on all properties of the `ExpenseTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExpenseTypeParams>[] = [{
    originalName: 'ExpenseType',
    name: 'expenseType',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ExpenseTypeParams {
    return deserializeComplexTypeV4(json, ExpenseTypeParams);
  }
}
