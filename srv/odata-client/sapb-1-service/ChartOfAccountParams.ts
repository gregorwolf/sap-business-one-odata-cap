/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ChartOfAccountParams
 */
export interface ChartOfAccountParams {
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ChartOfAccountParams.build]] instead.
 */
export function createChartOfAccountParams(json: any): ChartOfAccountParams {
  return ChartOfAccountParams.build(json);
}

/**
 * ChartOfAccountParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChartOfAccountParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ChartOfAccountParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
}

export namespace ChartOfAccountParams {
  export function build(json: { [keys: string]: FieldType }): ChartOfAccountParams {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') })
    });
  }
}
