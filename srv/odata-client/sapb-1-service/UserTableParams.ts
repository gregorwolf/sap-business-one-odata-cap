/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * UserTableParams
 */
export interface UserTableParams {
  /**
   * Table Type.
   * @nullable
   */
  tableType?: string;
  /**
   * Table Name.
   * @nullable
   */
  tableName?: string;
  /**
   * Table Description.
   * @nullable
   */
  tableDescription?: string;
  /**
   * Archive Date Field.
   * @nullable
   */
  archiveDateField?: string;
  /**
   * Archivable.
   * @nullable
   */
  archivable?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[UserTableParams.build]] instead.
 */
export function createUserTableParams(json: any): UserTableParams {
  return UserTableParams.build(json);
}

/**
 * UserTableParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserTableParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[UserTableParams.tableType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tableType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TableType', this, 'Edm.String');
  /**
   * Representation of the [[UserTableParams.tableName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tableName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TableName', this, 'Edm.String');
  /**
   * Representation of the [[UserTableParams.tableDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tableDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TableDescription', this, 'Edm.String');
  /**
   * Representation of the [[UserTableParams.archiveDateField]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  archiveDateField: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ArchiveDateField', this, 'Edm.String');
  /**
   * Representation of the [[UserTableParams.archivable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  archivable: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Archivable', this, 'Edm.String');
}

export namespace UserTableParams {
  export function build(json: { [keys: string]: FieldType }): UserTableParams {
    return createComplexType(json, {
      TableType: (tableType: string) => ({ tableType: edmToTs(tableType, 'Edm.String') }),
      TableName: (tableName: string) => ({ tableName: edmToTs(tableName, 'Edm.String') }),
      TableDescription: (tableDescription: string) => ({ tableDescription: edmToTs(tableDescription, 'Edm.String') }),
      ArchiveDateField: (archiveDateField: string) => ({ archiveDateField: edmToTs(archiveDateField, 'Edm.String') }),
      Archivable: (archivable: string) => ({ archivable: edmToTs(archivable, 'Edm.String') })
    });
  }
}
