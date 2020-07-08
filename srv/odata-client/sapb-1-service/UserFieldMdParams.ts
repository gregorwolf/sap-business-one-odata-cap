/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * UserFieldMdParams
 */
export interface UserFieldMdParams {
  /**
   * Table Name.
   * @nullable
   */
  tableName?: string;
  /**
   * Field Id.
   * @nullable
   */
  fieldId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[UserFieldMdParams.build]] instead.
 */
export function createUserFieldMdParams(json: any): UserFieldMdParams {
  return UserFieldMdParams.build(json);
}

/**
 * UserFieldMdParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserFieldMdParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[UserFieldMdParams.tableName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tableName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TableName', this, 'Edm.String');
  /**
   * Representation of the [[UserFieldMdParams.fieldId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FieldID', this, 'Edm.Int32');
}

export namespace UserFieldMdParams {
  export function build(json: { [keys: string]: FieldType }): UserFieldMdParams {
    return createComplexType(json, {
      TableName: (tableName: string) => ({ tableName: edmToTs(tableName, 'Edm.String') }),
      FieldID: (fieldId: number) => ({ fieldId: edmToTs(fieldId, 'Edm.Int32') })
    });
  }
}
