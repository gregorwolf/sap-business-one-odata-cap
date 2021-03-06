/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class UserTableParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserTableParams> {
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

  /**
   * Creates an instance of UserTableParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserTableParams);
  }
}

export namespace UserTableParams {
  /**
   * Metadata information on all properties of the `UserTableParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserTableParams>[] = [{
    originalName: 'TableType',
    name: 'tableType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TableName',
    name: 'tableName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TableDescription',
    name: 'tableDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ArchiveDateField',
    name: 'archiveDateField',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Archivable',
    name: 'archivable',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserTableParams {
    return deserializeComplexTypeV4(json, UserTableParams);
  }
}
