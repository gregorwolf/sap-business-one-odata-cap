/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class UserObjectMdFindColumnField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace UserObjectMdFindColumn {
  export function build(json: { [keys: string]: FieldType }): UserObjectMdFindColumn {
    return createComplexType(json, {
      ColumnNumber: (columnNumber: number) => ({ columnNumber: edmToTs(columnNumber, 'Edm.Int32') }),
      ColumnAlias: (columnAlias: string) => ({ columnAlias: edmToTs(columnAlias, 'Edm.String') }),
      ColumnDescription: (columnDescription: string) => ({ columnDescription: edmToTs(columnDescription, 'Edm.String') }),
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') })
    });
  }
}
