/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DepreciationLevel
 */
export interface DepreciationLevel {
  /**
   * Level.
   * @nullable
   */
  level?: number;
  /**
   * Number Of Years.
   * @nullable
   */
  numberOfYears?: number;
  /**
   * Percentage.
   * @nullable
   */
  percentage?: number;
  /**
   * Amount.
   * @nullable
   */
  amount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DepreciationLevel.build]] instead.
 */
export function createDepreciationLevel(json: any): DepreciationLevel {
  return DepreciationLevel.build(json);
}

/**
 * DepreciationLevelField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DepreciationLevelField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DepreciationLevel.level]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  level: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Level', this, 'Edm.Int32');
  /**
   * Representation of the [[DepreciationLevel.numberOfYears]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numberOfYears: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('NumberOfYears', this, 'Edm.Int32');
  /**
   * Representation of the [[DepreciationLevel.percentage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percentage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Percentage', this, 'Edm.Double');
  /**
   * Representation of the [[DepreciationLevel.amount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Amount', this, 'Edm.Double');
}

export namespace DepreciationLevel {
  export function build(json: { [keys: string]: FieldType }): DepreciationLevel {
    return createComplexType(json, {
      Level: (level: number) => ({ level: edmToTs(level, 'Edm.Int32') }),
      NumberOfYears: (numberOfYears: number) => ({ numberOfYears: edmToTs(numberOfYears, 'Edm.Int32') }),
      Percentage: (percentage: number) => ({ percentage: edmToTs(percentage, 'Edm.Double') }),
      Amount: (amount: number) => ({ amount: edmToTs(amount, 'Edm.Double') })
    });
  }
}
