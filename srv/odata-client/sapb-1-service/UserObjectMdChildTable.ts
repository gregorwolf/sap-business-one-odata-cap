/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * UserObjectMdChildTable
 */
export interface UserObjectMdChildTable {
  /**
   * Son Number.
   * @nullable
   */
  sonNumber?: number;
  /**
   * Table Name.
   * @nullable
   */
  tableName?: string;
  /**
   * Log Table Name.
   * @nullable
   */
  logTableName?: string;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Object Name.
   * @nullable
   */
  objectName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdChildTable.build]] instead.
 */
export function createUserObjectMdChildTable(json: any): UserObjectMdChildTable {
  return UserObjectMdChildTable.build(json);
}

/**
 * UserObjectMdChildTableField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserObjectMdChildTableField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[UserObjectMdChildTable.sonNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sonNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SonNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[UserObjectMdChildTable.tableName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tableName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TableName', this, 'Edm.String');
  /**
   * Representation of the [[UserObjectMdChildTable.logTableName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logTableName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LogTableName', this, 'Edm.String');
  /**
   * Representation of the [[UserObjectMdChildTable.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[UserObjectMdChildTable.objectName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ObjectName', this, 'Edm.String');
}

export namespace UserObjectMdChildTable {
  export function build(json: { [keys: string]: FieldType }): UserObjectMdChildTable {
    return createComplexType(json, {
      SonNumber: (sonNumber: number) => ({ sonNumber: edmToTs(sonNumber, 'Edm.Int32') }),
      TableName: (tableName: string) => ({ tableName: edmToTs(tableName, 'Edm.String') }),
      LogTableName: (logTableName: string) => ({ logTableName: edmToTs(logTableName, 'Edm.String') }),
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      ObjectName: (objectName: string) => ({ objectName: edmToTs(objectName, 'Edm.String') })
    });
  }
}
