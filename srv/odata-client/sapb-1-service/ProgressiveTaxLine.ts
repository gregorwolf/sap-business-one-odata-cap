/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ProgressiveTaxLine
 */
export interface ProgressiveTaxLine {
  /**
   * Tax Rate.
   * @nullable
   */
  taxRate?: number;
  /**
   * Min Amount.
   * @nullable
   */
  minAmount?: number;
  /**
   * Max Amount.
   * @nullable
   */
  maxAmount?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ProgressiveTaxLine.build]] instead.
 */
export function createProgressiveTaxLine(json: any): ProgressiveTaxLine {
  return ProgressiveTaxLine.build(json);
}

/**
 * ProgressiveTaxLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProgressiveTaxLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ProgressiveTaxLine.taxRate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxRate: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TaxRate', this, 'Edm.Double');
  /**
   * Representation of the [[ProgressiveTaxLine.minAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  minAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MinAmount', this, 'Edm.Double');
  /**
   * Representation of the [[ProgressiveTaxLine.maxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('MaxAmount', this, 'Edm.Double');
}

export namespace ProgressiveTaxLine {
  export function build(json: { [keys: string]: FieldType }): ProgressiveTaxLine {
    return createComplexType(json, {
      TaxRate: (taxRate: number) => ({ taxRate: edmToTs(taxRate, 'Edm.Double') }),
      MinAmount: (minAmount: number) => ({ minAmount: edmToTs(minAmount, 'Edm.Double') }),
      MaxAmount: (maxAmount: number) => ({ maxAmount: edmToTs(maxAmount, 'Edm.Double') })
    });
  }
}
