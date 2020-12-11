/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * UserObjectMdFindColumn
 */
export interface UserObjectMdFindColumn {
  /**
   * Column Number.
   * @nullable
   */
  columnNumber?: number;
  /**
   * Column Alias.
   * @nullable
   */
  columnAlias?: string;
  /**
   * Column Description.
   * @nullable
   */
  columnDescription?: string;
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[UserObjectMdFindColumn.build]] instead.
 */
export function createUserObjectMdFindColumn(json: any): UserObjectMdFindColumn {
  return UserObjectMdFindColumn.build(json);
}

/**
 * UserObjectMdFindColumnField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class UserObjectMdFindColumnField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UserObjectMdFindColumn> {
  /**
   * Representation of the [[UserObjectMdFindColumn.columnNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ColumnNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[UserObjectMdFindColumn.columnAlias]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnAlias: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ColumnAlias', this, 'Edm.String');
  /**
   * Representation of the [[UserObjectMdFindColumn.columnDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ColumnDescription', this, 'Edm.String');
  /**
   * Representation of the [[UserObjectMdFindColumn.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');

  /**
   * Creates an instance of UserObjectMdFindColumnField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, UserObjectMdFindColumn);
  }
}

export namespace UserObjectMdFindColumn {
  /**
   * Metadata information on all properties of the `UserObjectMdFindColumn` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UserObjectMdFindColumn>[] = [{
    originalName: 'ColumnNumber',
    name: 'columnNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ColumnAlias',
    name: 'columnAlias',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ColumnDescription',
    name: 'columnDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): UserObjectMdFindColumn {
    return deserializeComplexTypeV4(json, UserObjectMdFindColumn);
  }
}
