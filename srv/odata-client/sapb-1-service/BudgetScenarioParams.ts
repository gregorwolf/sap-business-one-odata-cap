/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BudgetScenarioParams
 */
export interface BudgetScenarioParams {
  /**
   * Numerator.
   * @nullable
   */
  numerator?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BudgetScenarioParams.build]] instead.
 */
export function createBudgetScenarioParams(json: any): BudgetScenarioParams {
  return BudgetScenarioParams.build(json);
}

/**
 * BudgetScenarioParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BudgetScenarioParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BudgetScenarioParams> {
  /**
   * Representation of the [[BudgetScenarioParams.numerator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numerator: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Numerator', this, 'Edm.Int32');

  /**
   * Creates an instance of BudgetScenarioParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BudgetScenarioParams);
  }
}

export namespace BudgetScenarioParams {
  /**
   * Metadata information on all properties of the `BudgetScenarioParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BudgetScenarioParams>[] = [{
    originalName: 'Numerator',
    name: 'numerator',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BudgetScenarioParams {
    return deserializeComplexTypeV4(json, BudgetScenarioParams);
  }
}
