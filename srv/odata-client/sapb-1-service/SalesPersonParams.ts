/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SalesPersonParams
 */
export interface SalesPersonParams {
  /**
   * Sales Employee Code.
   * @nullable
   */
  salesEmployeeCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesPersonParams.build]] instead.
 */
export function createSalesPersonParams(json: any): SalesPersonParams {
  return SalesPersonParams.build(json);
}

/**
 * SalesPersonParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesPersonParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SalesPersonParams.salesEmployeeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  salesEmployeeCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SalesEmployeeCode', this, 'Edm.Int32');
}

export namespace SalesPersonParams {
  export function build(json: { [keys: string]: FieldType }): SalesPersonParams {
    return createComplexType(json, {
      SalesEmployeeCode: (salesEmployeeCode: number) => ({ salesEmployeeCode: edmToTs(salesEmployeeCode, 'Edm.Int32') })
    });
  }
}
