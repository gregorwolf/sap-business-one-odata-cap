/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * UserKeyParams
 */
export interface UserKeyParams {
  /**
   * Table Name.
   * @nullable
   */
  tableName?: string;
  /**
   * Key Index.
   * @nullable
   */
  keyIndex?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[UserKeyParams.build]] instead.
 */
export function createUserKeyParams(json: any): UserKeyParams {
  return UserKeyParams.build(json);
}

/**
 * UserKeyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserKeyParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[UserKeyParams.tableName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tableName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TableName', this, 'Edm.String');
  /**
   * Representation of the [[UserKeyParams.keyIndex]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyIndex: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('KeyIndex', this, 'Edm.Int32');
}

export namespace UserKeyParams {
  export function build(json: { [keys: string]: FieldType }): UserKeyParams {
    return createComplexType(json, {
      TableName: (tableName: string) => ({ tableName: edmToTs(tableName, 'Edm.String') }),
      KeyIndex: (keyIndex: number) => ({ keyIndex: edmToTs(keyIndex, 'Edm.Int32') })
    });
  }
}
