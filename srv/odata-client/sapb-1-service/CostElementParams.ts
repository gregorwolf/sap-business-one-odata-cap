/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CostElementParams
 */
export interface CostElementParams {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CostElementParams.build]] instead.
 */
export function createCostElementParams(json: any): CostElementParams {
  return CostElementParams.build(json);
}

/**
 * CostElementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CostElementParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CostElementParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[CostElementParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');
}

export namespace CostElementParams {
  export function build(json: { [keys: string]: FieldType }): CostElementParams {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      Description: (description: string) => ({ description: edmToTs(description, 'Edm.String') })
    });
  }
}