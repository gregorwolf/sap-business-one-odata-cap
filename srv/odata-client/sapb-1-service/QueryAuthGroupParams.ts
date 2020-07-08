/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * QueryAuthGroupParams
 */
export interface QueryAuthGroupParams {
  /**
   * Auth Group Id.
   * @nullable
   */
  authGroupId?: number;
  /**
   * Auth Group Code.
   * @nullable
   */
  authGroupCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[QueryAuthGroupParams.build]] instead.
 */
export function createQueryAuthGroupParams(json: any): QueryAuthGroupParams {
  return QueryAuthGroupParams.build(json);
}

/**
 * QueryAuthGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class QueryAuthGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[QueryAuthGroupParams.authGroupId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  authGroupId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AuthGroupId', this, 'Edm.Int32');
  /**
   * Representation of the [[QueryAuthGroupParams.authGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  authGroupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AuthGroupCode', this, 'Edm.String');
}

export namespace QueryAuthGroupParams {
  export function build(json: { [keys: string]: FieldType }): QueryAuthGroupParams {
    return createComplexType(json, {
      AuthGroupId: (authGroupId: number) => ({ authGroupId: edmToTs(authGroupId, 'Edm.Int32') }),
      AuthGroupCode: (authGroupCode: string) => ({ authGroupCode: edmToTs(authGroupCode, 'Edm.String') })
    });
  }
}
