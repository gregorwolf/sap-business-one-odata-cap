/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ElectronicSeriesParams
 */
export interface ElectronicSeriesParams {
  /**
   * Electronic Series.
   * @nullable
   */
  electronicSeries?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ElectronicSeriesParams.build]] instead.
 */
export function createElectronicSeriesParams(json: any): ElectronicSeriesParams {
  return ElectronicSeriesParams.build(json);
}

/**
 * ElectronicSeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ElectronicSeriesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ElectronicSeriesParams.electronicSeries]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  electronicSeries: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ElectronicSeries', this, 'Edm.Int32');
}

export namespace ElectronicSeriesParams {
  export function build(json: { [keys: string]: FieldType }): ElectronicSeriesParams {
    return createComplexType(json, {
      ElectronicSeries: (electronicSeries: number) => ({ electronicSeries: edmToTs(electronicSeries, 'Edm.Int32') })
    });
  }
}
