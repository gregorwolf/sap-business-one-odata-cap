/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BudgetDistributionParams
 */
export interface BudgetDistributionParams {
  /**
   * Division Code.
   * @nullable
   */
  divisionCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BudgetDistributionParams.build]] instead.
 */
export function createBudgetDistributionParams(json: any): BudgetDistributionParams {
  return BudgetDistributionParams.build(json);
}

/**
 * BudgetDistributionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BudgetDistributionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BudgetDistributionParams> {
  /**
   * Representation of the [[BudgetDistributionParams.divisionCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  divisionCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DivisionCode', this, 'Edm.Int32');

  /**
   * Creates an instance of BudgetDistributionParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BudgetDistributionParams);
  }
}

export namespace BudgetDistributionParams {
  /**
   * Metadata information on all properties of the `BudgetDistributionParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BudgetDistributionParams>[] = [{
    originalName: 'DivisionCode',
    name: 'divisionCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BudgetDistributionParams {
    return deserializeComplexTypeV4(json, BudgetDistributionParams);
  }
}
