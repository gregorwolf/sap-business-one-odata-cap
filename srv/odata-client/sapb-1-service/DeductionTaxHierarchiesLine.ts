/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * DeductionTaxHierarchiesLine
 */
export interface DeductionTaxHierarchiesLine {
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: number;
  /**
   * Deduction Percent.
   * @nullable
   */
  deductionPercent?: number;
  /**
   * Maximum Total.
   * @nullable
   */
  maximumTotal?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DeductionTaxHierarchiesLine.build]] instead.
 */
export function createDeductionTaxHierarchiesLine(json: any): DeductionTaxHierarchiesLine {
  return DeductionTaxHierarchiesLine.build(json);
}

/**
 * DeductionTaxHierarchiesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DeductionTaxHierarchiesLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[DeductionTaxHierarchiesLine.rowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[DeductionTaxHierarchiesLine.deductionPercent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deductionPercent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DeductionPercent', this, 'Edm.Double');
  /**
   * Representation of the [[DeductionTaxHierarchiesLine.maximumTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maximumTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaximumTotal', this, 'Edm.Double');
}

export namespace DeductionTaxHierarchiesLine {
  export function build(json: { [keys: string]: FieldType }): DeductionTaxHierarchiesLine {
    return createComplexType(json, {
      RowNumber: (rowNumber: number) => ({ rowNumber: edmToTs(rowNumber, 'Edm.Int32') }),
      DeductionPercent: (deductionPercent: number) => ({ deductionPercent: edmToTs(deductionPercent, 'Edm.Double') }),
      MaximumTotal: (maximumTotal: number) => ({ maximumTotal: edmToTs(maximumTotal, 'Edm.Double') })
    });
  }
}
