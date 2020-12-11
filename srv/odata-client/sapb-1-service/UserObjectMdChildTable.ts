/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class UserObjectMdChildTableField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserObjectMdChildTable> {
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

  /**
   * Creates an instance of UserObjectMdChildTableField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserObjectMdChildTable);
  }
}

export namespace UserObjectMdChildTable {
  /**
   * Metadata information on all properties of the `UserObjectMdChildTable` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserObjectMdChildTable>[] = [{
    originalName: 'SonNumber',
    name: 'sonNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TableName',
    name: 'tableName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LogTableName',
    name: 'logTableName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ObjectName',
    name: 'objectName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserObjectMdChildTable {
    return deserializeComplexTypeV4(json, UserObjectMdChildTable);
  }
}
