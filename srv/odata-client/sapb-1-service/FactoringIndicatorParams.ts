/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * FactoringIndicatorParams
 */
export interface FactoringIndicatorParams {
  /**
   * Indicator Code.
   * @nullable
   */
  indicatorCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[FactoringIndicatorParams.build]] instead.
 */
export function createFactoringIndicatorParams(json: any): FactoringIndicatorParams {
  return FactoringIndicatorParams.build(json);
}

/**
 * FactoringIndicatorParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class FactoringIndicatorParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[FactoringIndicatorParams.indicatorCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  indicatorCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('IndicatorCode', this, 'Edm.String');
}

export namespace FactoringIndicatorParams {
  export function build(json: { [keys: string]: FieldType }): FactoringIndicatorParams {
    return createComplexType(json, {
      IndicatorCode: (indicatorCode: string) => ({ indicatorCode: edmToTs(indicatorCode, 'Edm.String') })
    });
  }
}
