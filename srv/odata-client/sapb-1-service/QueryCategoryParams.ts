/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * QueryCategoryParams
 */
export interface QueryCategoryParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[QueryCategoryParams.build]] instead.
 */
export function createQueryCategoryParams(json: any): QueryCategoryParams {
  return QueryCategoryParams.build(json);
}

/**
 * QueryCategoryParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class QueryCategoryParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[QueryCategoryParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
}

export namespace QueryCategoryParams {
  export function build(json: { [keys: string]: FieldType }): QueryCategoryParams {
    return createComplexType(json, {
      Code: (code: number) => ({ code: edmToTs(code, 'Edm.Int32') })
    });
  }
}
