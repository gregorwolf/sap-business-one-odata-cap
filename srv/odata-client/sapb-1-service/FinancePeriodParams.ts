/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * FinancePeriodParams
 */
export interface FinancePeriodParams {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: number;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[FinancePeriodParams.build]] instead.
 */
export function createFinancePeriodParams(json: any): FinancePeriodParams {
  return FinancePeriodParams.build(json);
}

/**
 * FinancePeriodParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class FinancePeriodParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[FinancePeriodParams.absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsoluteEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[FinancePeriodParams.periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  periodIndicator: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PeriodIndicator', this, 'Edm.String');
}

export namespace FinancePeriodParams {
  export function build(json: { [keys: string]: FieldType }): FinancePeriodParams {
    return createComplexType(json, {
      AbsoluteEntry: (absoluteEntry: number) => ({ absoluteEntry: edmToTs(absoluteEntry, 'Edm.Int32') }),
      PeriodIndicator: (periodIndicator: string) => ({ periodIndicator: edmToTs(periodIndicator, 'Edm.String') })
    });
  }
}
