/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CostCenterTypeParams
 */
export interface CostCenterTypeParams {
  /**
   * Cost Center Type Code.
   * @nullable
   */
  costCenterTypeCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CostCenterTypeParams.build]] instead.
 */
export function createCostCenterTypeParams(json: any): CostCenterTypeParams {
  return CostCenterTypeParams.build(json);
}

/**
 * CostCenterTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CostCenterTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CostCenterTypeParams.costCenterTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costCenterTypeCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CostCenterTypeCode', this, 'Edm.String');
}

export namespace CostCenterTypeParams {
  export function build(json: { [keys: string]: FieldType }): CostCenterTypeParams {
    return createComplexType(json, {
      CostCenterTypeCode: (costCenterTypeCode: string) => ({ costCenterTypeCode: edmToTs(costCenterTypeCode, 'Edm.String') })
    });
  }
}
