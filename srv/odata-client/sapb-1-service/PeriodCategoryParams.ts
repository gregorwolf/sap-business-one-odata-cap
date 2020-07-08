/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PeriodCategoryParams
 */
export interface PeriodCategoryParams {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PeriodCategoryParams.build]] instead.
 */
export function createPeriodCategoryParams(json: any): PeriodCategoryParams {
  return PeriodCategoryParams.build(json);
}

/**
 * PeriodCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PeriodCategoryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PeriodCategoryParams.absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsoluteEntry', this, 'Edm.Int32');
}

export namespace PeriodCategoryParams {
  export function build(json: { [keys: string]: FieldType }): PeriodCategoryParams {
    return createComplexType(json, {
      AbsoluteEntry: (absoluteEntry: number) => ({ absoluteEntry: edmToTs(absoluteEntry, 'Edm.Int32') })
    });
  }
}
